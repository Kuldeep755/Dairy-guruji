import { NextResponse } from "next/server";

function buildWebhookError(responseText, status) {
  const normalizedText = responseText.toLowerCase();

  if (
    normalizedText.includes("<!doctype html") &&
    (normalizedText.includes("access denied") ||
      normalizedText.includes("you need access") ||
      normalizedText.includes("requesting_access"))
  ) {
    return {
      error:
        "Google Apps Script denied access to the webhook. Deploy the script as a Web app, set access to Anyone, and update GOOGLE_SHEETS_FARMER_WEBHOOK_URL with the latest /exec URL.",
      details: "Google returned an access-denied HTML page instead of JSON.",
      status,
    };
  }

  return {
    error: responseText || "Google Sheets webhook rejected the submission.",
    status,
  };
}

function buildTimestamp() {
  return new Date().toLocaleString("en-GB", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const webhookUrl = process.env.GOOGLE_SHEETS_FARMER_WEBHOOK_URL;

    if (!body.farmer_name || !body.primary_mobile) {
      return NextResponse.json(
        { error: "Farmer name and primary mobile number are required." },
        { status: 400 },
      );
    }

    if (!webhookUrl) {
      return NextResponse.json(
        {
          error:
            "Google Sheets webhook is not configured yet. Add GOOGLE_SHEETS_FARMER_WEBHOOK_URL in .env.local.",
        },
        { status: 500 },
      );
    }

    const payload = {
      submitted_at: buildTimestamp(),
      ...body,
    };

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    const responseText = await response.text();

    if (!response.ok) {
      const { error, details } = buildWebhookError(
        responseText,
        response.status,
      );

      return NextResponse.json({ error, details }, { status: 502 });
    }

    let result = {};

    try {
      result = responseText ? JSON.parse(responseText) : {};
    } catch {
      result = {};
    }

    return NextResponse.json({
      ok: true,
      message:
        result.message ||
        "Farmer registration submitted successfully and synced to Google Sheets.",
      spreadsheetUrl: result.spreadsheetUrl || "",
      sheetName: result.sheetName || "",
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message || "Failed to submit farmer registration.",
      },
      { status: 500 },
    );
  }
}
