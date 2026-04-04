import { NextResponse } from "next/server";
import { backendApiUrl } from "@/lib/api";

function buildHeaders(request) {
  return {
    "Content-Type": "application/json",
    cookie: request.headers.get("cookie") || "",
  };
}

export async function GET(request, { params }) {
  try {
    const resolvedParams = await params;
    const id = resolvedParams?.id;

    const response = await fetch(
      backendApiUrl(`/api/forms/admin/employee-data-form/${id}`),
      {
        headers: {
          cookie: request.headers.get("cookie") || "",
        },
        cache: "no-store",
      },
    );

    const data = await response.json().catch(() => ({}));
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error.message || "Unable to load employee form." },
      { status: 500 },
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const resolvedParams = await params;
    const id = resolvedParams?.id;
    const body = await request.json();

    const response = await fetch(
      backendApiUrl(`/api/forms/admin/employee-data-form/${id}`),
      {
        method: "PUT",
        headers: buildHeaders(request),
        body: JSON.stringify(body),
        cache: "no-store",
      },
    );

    const data = await response.json().catch(() => ({}));
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error.message || "Unable to update employee form." },
      { status: 500 },
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const resolvedParams = await params;
    const id = resolvedParams?.id;

    const response = await fetch(
      backendApiUrl(`/api/forms/admin/employee-data-form/${id}`),
      {
        method: "DELETE",
        headers: {
          cookie: request.headers.get("cookie") || "",
        },
        cache: "no-store",
      },
    );

    const data = await response.json().catch(() => ({}));
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error.message || "Unable to delete employee form." },
      { status: 500 },
    );
  }
}
