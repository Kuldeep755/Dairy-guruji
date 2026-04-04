import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTH_COOKIE_NAME, verifySessionToken } from "@/lib/auth";
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
  const resolvedSearchParams = await searchParams;
  const nextPath = getNextPath(resolvedSearchParams?.next);
  const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;
  const session = verifySessionToken(token);

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
