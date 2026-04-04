import { cookies } from "next/headers";
import {
  Bell,
  Clock3,
  FileText,
  Search,
  Sprout,
  UserCheck,
  Users,
} from "lucide-react";
import { backendApiUrl } from "@/lib/api";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function statusTone(status) {
  if (status === "Approved" || status === "Completed") {
    return "text-green-700 bg-green-50 border-green-200";
  }
  if (status === "In Review") {
    return "text-blue-700 bg-blue-50 border-blue-200";
  }
  return "text-amber-700 bg-amber-50 border-amber-200";
}

function timeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);

  let interval = seconds / 31536000;
  if (interval > 1) return Math.floor(interval) + " years ago";
  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + " months ago";
  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + " days ago";
  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + " hours ago";
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + " minutes ago";
  return "Just now";
}

export default async function AdminPage() {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();

  let dashboardData = null;

  try {
    const statsRes = await fetch(backendApiUrl("/api/forms/admin/dashboard-stats"), {
      headers: { cookie: cookieHeader },
      cache: "no-store",
    });
    if (statsRes.ok) {
      const statsJson = await statsRes.json();
      dashboardData = statsJson.data;
    }
  } catch (error) {
    console.error("Dashboard stats fetch failed", error);
  }

  const metrics = [
    {
      label: "Total Applicants",
      value: dashboardData?.metrics?.totalCareers || 0,
      trend: "Real-time sync",
      icon: Users,
    },
    {
      label: "Farmer Reg.",
      value: dashboardData?.metrics?.totalFarmers || 0,
      trend: "Real-time sync",
      icon: Sprout,
    },
    {
      label: "Employee Forms",
      value: dashboardData?.metrics?.totalEmployees || 0,
      trend: "Real-time sync",
      icon: FileText,
    },
    {
      label: "Dealers",
      value: dashboardData?.metrics?.totalDealers || 0,
      trend: "Real-time sync",
      icon: UserCheck,
    },
    {
      label: "Total Inquiries",
      value: dashboardData?.metrics?.totalInquiries || 0,
      trend: "Real-time sync",
      icon: Bell,
    },
  ];

  const recentRequests = dashboardData?.recentRequests || [];

  return (
    <>
      <header className="">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#172432]">
              Executive Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <label className="hidden md:flex items-center gap-2 rounded-xl border border-white bg-white/50 px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-[#1f7d46]/20 transition-all">
              <Search className="h-4 w-4 text-[#1f7d46]/70" />
              <Input
                className="border-0 shadow-none focus-visible:ring-0 p-0 h-auto bg-transparent w-56 text-sm text-slate-700 placeholder:text-slate-400"
                placeholder="Search operations..."
                type="search"
              />
            </label>
            <button
              type="button"
              className="group relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/80 border border-white shadow-sm transition hover:bg-white"
            >
              <Bell className="h-5 w-5 text-slate-500 group-hover:text-[#f3c24b] transition-colors" />
              <span className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full bg-[#f3c24b] border-2 border-white animate-pulse" />
            </button>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {metrics.map((item, index) => {
          const Icon = item.icon;
          return (
            <article
              key={item.label}
              className="group relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-white/5 to-[#1f7d46]/5 blur-2xl transition group-hover:bg-[#1f7d46]/10" />
              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#1f7d46]/70">
                    {item.label}
                  </p>
                  <p className="mt-2 text-4xl font-black text-[#172432] tracking-tight">
                    {item.value}
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1f7d46] to-[#1a6539] text-white shadow-md shadow-[#1f7d46]/20 transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-2 grid grid-cols-1 gap-4 xl:grid-cols-[1.8fr_1fr]">
        <section className="rounded-[2rem] border border-white/60 bg-white/70 shadow-sm backdrop-blur-xl flex flex-col">
          <div className="flex items-center justify-between border-b border-primary/10 px-6 py-5">
            <h2 className="text-lg font-bold text-[#172432]">Recent Entries</h2>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f3c24b]/20 text-[#d39a0c]">
              <Clock3 className="h-4 w-4 animate-[spin_5s_linear_infinite]" />
            </div>
          </div>

          <div className="p-0 flex-1 overflow-x-auto">
            <Table>
              <TableHeader className="bg-transparent">
                <TableRow className="border-b border-primary/10 hover:bg-transparent">
                  <TableHead className="text-xs font-bold uppercase tracking-widest text-[#1f7d46]/70">
                    ID
                  </TableHead>
                  <TableHead className="text-xs font-bold uppercase tracking-widest text-[#1f7d46]/70">
                    Module
                  </TableHead>
                  <TableHead className="text-xs font-bold uppercase tracking-widest text-[#1f7d46]/70">
                    Owner
                  </TableHead>
                  <TableHead className="text-xs font-bold uppercase tracking-widest text-[#1f7d46]/70">
                    Updated
                  </TableHead>
                  <TableHead className="text-xs font-bold uppercase tracking-widest text-[#1f7d46]/70 text-right">
                    Status
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentRequests.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="py-8 text-center text-slate-500 font-medium"
                    >
                      No recent activity found.
                    </TableCell>
                  </TableRow>
                ) : (
                  recentRequests.map((row) => (
                    <TableRow
                      key={`${row.module}-${row.id}-${row.updated}`}
                      className="border-b border-primary/5 hover:bg-white/50 transition"
                    >
                      <TableCell className="font-bold text-[#172432]">
                        #{row.id}
                      </TableCell>
                      <TableCell className="font-medium text-slate-600">
                        <span className="inline-flex items-center gap-1.5 rounded-lg bg-primary/5 px-2.5 py-1 text-[#1f7d46]">
                          <FileText className="h-3 w-3" />
                          {row.module}
                        </span>
                      </TableCell>
                      <TableCell className="font-medium text-slate-700">
                        {row.owner}
                      </TableCell>
                      <TableCell className="text-slate-500">
                        {timeAgo(row.updated)}
                      </TableCell>
                      <TableCell className="text-right">
                        <span
                          className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold shadow-sm ${statusTone(row.status)}`}
                        >
                          {row.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </section>
      </div>
    </>
  );
}
