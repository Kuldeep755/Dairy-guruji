import { NextResponse } from "next/server";
import { backendApiUrl } from "@/lib/api";

export async function GET(request) {
  const cookieHeader = request.headers.get("cookie") || "";

  try {
    const backendResponse = await fetch(backendApiUrl("/api/auth/session"), {
      headers: {
        cookie: cookieHeader,
      },
      cache: "no-store",
    });

    const data = await backendResponse.json().catch(() => ({
      authenticated: false,
    }));

    return NextResponse.json(data, { status: backendResponse.status });
  } catch {
    return NextResponse.json({ authenticated: false }, { status: 200 });
  }
}
