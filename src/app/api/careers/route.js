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
        "Google Apps Script denied access to the webhook. Deploy the script as a Web app and set access to Anyone, then update GOOGLE_SHEETS_WEBHOOK_URL with the latest /exec URL.",
      details: "Google returned an access-denied HTML page instead of JSON.",
      status,
    };
  }

  return {
    error: responseText || "Google Sheets webhook rejected the submission.",
    status,
  };
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phoneNumber, address, lsa, experience } = body;

    if (!name || !email || !phoneNumber || !address || !lsa) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (!webhookUrl) {
      return NextResponse.json(
        { error: "Google Sheets webhook is not configured yet." },
        { status: 500 }
      );
    }

    const payload = {
      timestamp: new Date().toLocaleString("en-GB", {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }),
      fullName: name,
      email,
      phoneNumber,
      address,
      lsa,
      yearsOfExp: experience || "",
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
        response.status
      );

      return NextResponse.json(
        { error, details },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message || "Failed to submit application.",
      },
      { status: 500 }
    );
  }
}
