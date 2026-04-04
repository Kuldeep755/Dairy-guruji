import { NextResponse } from "next/server";
import { backendApiUrl } from "@/lib/api";

export async function POST(request) {
  try {
    const body = await request.json();
    const username = String(body?.username || "").trim();
    const password = String(body?.password || "");

    if (!username || !password) {
      return NextResponse.json(
        { ok: false, message: "Username and password are required." },
        { status: 400 },
      );
    }

    const cookieHeader = request.headers.get("cookie") || "";
    const backendResponse = await fetch(backendApiUrl("/api/auth/login"), {
      method: "POST",
      headers: {
        "content-type": "application/json",
        cookie: cookieHeader,
      },
      body: JSON.stringify({ username, password }),
      cache: "no-store",
    });

    const data = await backendResponse.json().catch(() => ({
      ok: false,
      message: "Unable to login. Please try again.",
    }));

    const response = NextResponse.json(data, { status: backendResponse.status });
    const setCookieHeader = backendResponse.headers.get("set-cookie");

    if (setCookieHeader) {
      response.headers.set("set-cookie", setCookieHeader);
    }

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message: error?.message || "Unable to login. Please try again.",
      },
      { status: 500 },
    );
  }
}
