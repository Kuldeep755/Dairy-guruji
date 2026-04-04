import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { backendApiUrl } from "@/lib/api";
import LoginForm from "./LoginForm";

function getNextPath(rawNext) {
  if (!rawNext || typeof rawNext !== "string") {
    return "/admin";
  }

  if (!rawNext.startsWith("/") || rawNext.startsWith("//")) {
    return "/admin";
  }

  return rawNext;
}

export default async function LoginPage({ searchParams }) {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();
  const resolvedSearchParams = await searchParams;
  const nextPath = getNextPath(resolvedSearchParams?.next);
  let session = null;

  try {
    const response = await fetch(backendApiUrl("/api/auth/session"), {
      headers: { cookie: cookieHeader },
      cache: "no-store",
    });
    const data = await response.json().catch(() => null);
    if (response.ok && data?.authenticated) {
      session = data;
    }
  } catch {
    session = null;
  }

  if (session) {
    redirect(nextPath);
  }

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-md mx-auto glass rounded-2xl p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-text-dark">Admin Login</h1>
        <p className="text-text-dark/70 mt-2 mb-6">
          Sign in to access the admin panel.
        </p>
        <LoginForm nextPath={nextPath} />
      </div>
    </section>
  );
}
