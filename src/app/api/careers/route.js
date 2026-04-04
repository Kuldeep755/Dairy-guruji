import { NextResponse } from "next/server";
import { backendApiUrl } from "@/lib/api";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phoneNumber, address, state, city, lsa } = body || {};

    if (!name || !email || !phoneNumber || !address || !state || !city || !lsa) {
      return NextResponse.json(
        { error: "Please fill in all required fields (including state and city)." },
        { status: 400 },
      );
    }

    const response = await fetch(backendApiUrl("/api/forms/careers"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      return NextResponse.json(
        { error: result?.error || "Failed to submit career application." },
        { status: response.status || 500 },
      );
    }

    return NextResponse.json({
      ok: true,
      message: result?.message || "Career application submitted successfully.",
    });
    
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message || "Failed to submit application.",
      },
      { status: 500 },
    );
  }
}
