import { NextResponse } from "next/server";
import { backendApiUrl } from "@/lib/api";

export async function GET(request) {
  try {
    const cookieHeader = request.headers.get("cookie") || "";

    const response = await fetch(
      backendApiUrl("/api/forms/admin/employee-data-form"),
      {
        headers: {
          cookie: cookieHeader,
        },
        cache: "no-store",
      },
    );

    const data = await response.json().catch(() => ({}));

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error.message || "Unable to load employee forms.",
      },
      { status: 500 },
    );
  }
}
