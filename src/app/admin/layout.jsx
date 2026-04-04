import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { backendApiUrl } from "@/lib/api";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default async function AdminLayout({ children }) {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();
  let session = null;

  try {
    const response = await fetch(backendApiUrl("/api/auth/session"), {
      headers: { cookie: cookieHeader },
      cache: "no-store",
    });
    const data = await response.json().catch(() => null);

    if (response.ok && data?.authenticated) {
      session = {
        username: data.username,
        exp: data.expiresAt,
      };
    }
  } catch {
    session = null;
  }

  if (!session) {
    redirect("/login?next=/admin");
  }

  return (
    <div className="relative min-h-screen bg-[#f5f2e8] text-slate-900 overflow-hidden font-sans ">
      <div className="relative z-10 mx-auto flex w-full min-h-screen gap-4 p-3 sm:p-4 lg:p-6 ">
        <AdminSidebar session={session} />

        <main className="min-w-0 flex-1 flex flex-col gap-4">{children}</main>
      </div>
    </div>
  );
}
