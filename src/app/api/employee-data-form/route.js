import { NextResponse } from "next/server";
import { backendApiUrl } from "@/lib/api";

export async function POST(request) {
  try {
    const body = await request.json();

    if (!body?.firstName || !body?.lastName || !body?.dob) {
      return NextResponse.json(
        { error: "First name, last name and date of birth are required." },
        { status: 400 },
      );
    }

    const response = await fetch(backendApiUrl("/api/forms/employee-data-form"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      return NextResponse.json(
        {
          error: data?.error || "Failed to submit employee data form.",
        },
        { status: response.status || 500 },
      );
    }

    return NextResponse.json({
      ok: true,
      message: data?.message || "Employee data form submitted successfully.",
      id: data?.id,
      createdAt: data?.createdAt,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message || "Failed to submit employee data form.",
      },
      { status: 500 },
    );
  }
}
