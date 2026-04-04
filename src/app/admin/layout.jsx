import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTH_COOKIE_NAME, verifySessionToken } from "@/lib/auth";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default async function AdminLayout({ children }) {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;
  const session = verifySessionToken(token);

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
