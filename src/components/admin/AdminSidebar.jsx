"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  LayoutDashboard,
  LogOut,
  Settings,
  Sprout,
  Users,
} from "lucide-react";

const sidebarLinks = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/admin", exact: true },
  { label: "Careers", icon: Users, href: "/admin/careers", exact: false },
  { label: "Farmer Registration", icon: Sprout, href: "/admin/farmer-registration", exact: false },
  { label: "Employee Forms", icon: FileText, href: "/admin/employee-data-form", exact: false },
  { label: "Settings", icon: Settings, href: "#", exact: true },
];

export default function AdminSidebar({ session }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={`relative shrink-0 rounded-[2rem] border border-white/40 bg-white/60 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 ease-in-out flex flex-col ${
        isCollapsed ? "w-[104px]" : "w-72"
      } hidden lg:flex`}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-10 flex h-6 w-6 items-center justify-center rounded-full border border-primary/20 bg-white text-primary shadow-sm hover:scale-110 hover:bg-slate-50 transition z-20"
      >
        {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
      </button>

      <div className={`mb-6 flex items-center border-b border-primary/10 pb-4 ${isCollapsed ? "justify-center gap-0" : "gap-3"}`}>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1f7d46] to-[#1a6539] text-base font-bold text-white shadow-lg shadow-[#1f7d46]/30">
          DG
        </div>
        {!isCollapsed && (
          <div className="min-w-0 transition-opacity duration-300 opacity-100 whitespace-nowrap overflow-hidden">
            <p className="text-base font-bold text-[#172432]">Admin Panel</p>
            <p className="text-xs font-semibold text-primary/70 uppercase tracking-wider">Dairy Guruji</p>
          </div>
        )}
      </div>

      <nav className="flex flex-col gap-1.5 flex-1 overflow-y-auto overflow-x-hidden">
        {sidebarLinks.map((item) => {
          const Icon = item.icon;
          const isActive = item.exact
            ? pathname === item.href
            : pathname.startsWith(item.href);

          return (
            <Link
              key={item.label}
              href={item.href}
              title={isCollapsed ? item.label : undefined}
              className={`group flex items-center rounded-xl p-3 text-sm font-medium transition-all duration-300 ${
                isCollapsed ? "justify-center" : "gap-3 px-4"
              } ${
                isActive
                  ? "bg-gradient-to-r from-[#1f7d46] to-[#1a6539] text-white shadow-md shadow-[#1f7d46]/20"
                  : "text-slate-600 hover:bg-white/50 hover:text-[#1f7d46] hover:-translate-y-0.5"
              }`}
            >
              <Icon className={`h-5 w-5 shrink-0 ${isActive ? "text-white" : "text-slate-400 group-hover:text-[#1f7d46]"}`} />
              {!isCollapsed && (
                <span className="whitespace-nowrap">{item.label}</span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className={`mt-auto rounded-2xl border border-white/50 bg-white/40 backdrop-blur-md transition-all duration-300 ${isCollapsed ? "p-2" : "p-4"}`}>
        <div className={`flex items-center ${isCollapsed ? "justify-center" : "gap-3"} mb-2`}>
          <div className="h-8 w-8 shrink-0 rounded-full bg-[#f3c24b]/20 flex items-center justify-center border border-[#f3c24b]/30">
            <Users className="h-4 w-4 text-[#d39a0c]" />
          </div>
          {!isCollapsed && (
            <div className="whitespace-nowrap overflow-hidden">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#1f7d46]">Logged In</p>
              <p className="text-sm font-bold text-[#172432] truncate">{session?.username || "Admin"}</p>
            </div>
          )}
        </div>
        <Link
          href="/logout"
          title={isCollapsed ? "Logout" : undefined}
          className={`mt-3 flex items-center justify-center rounded-lg bg-white/50 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50 hover:text-red-700 ${isCollapsed ? "gap-0 px-0" : "gap-2"}`}
        >
          <LogOut className="h-4 w-4 shrink-0" />
          {!isCollapsed && <span>Logout</span>}
        </Link>
      </div>
    </aside>
  );
}
