"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Package,
  Layers,
  Briefcase,
  Users,
  Image,
  Globe,
  Shuffle,
  Menu,
  UserCheck,
  LogOut,
  Zap,
} from "lucide-react";

const SIDEBAR_ITEMS = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Blogs", href: "/admin/blogs", icon: FileText },
  { label: "Products", href: "/admin/products", icon: Package },
  { label: "Leads", href: "/admin/leads", icon: Users },
  { label: "Jobs", href: "/admin/jobs", icon: Briefcase },
  { label: "Case Studies", href: "/admin/case-studies", icon: Layers },
  { label: "Media Library", href: "/admin/media", icon: Image },
  { label: "SEO Settings", href: "/admin/seo", icon: Globe },
  { label: "Redirects", href: "/admin/redirects", icon: Shuffle },
  { label: "Menus", href: "/admin/menus", icon: Menu },
  { label: "Users & Roles", href: "/admin/users", icon: UserCheck },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // If on login page, render without admin sidebar
  if (pathname === "/admin/login") {
    return <main className="min-h-screen bg-[var(--background)]">{children}</main>;
  }

  return (
    <div className="min-h-screen flex bg-[var(--background)] text-[var(--text-primary)]">
      {/* Admin Sidebar */}
      <aside className="admin-sidebar">
        <div className="p-6 flex items-center gap-2 border-b border-[var(--border)]">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--gradient-brand)]">
            <Zap size={16} className="text-white" />
          </div>
          <div>
            <span className="font-bold text-base">Kayak <span className="gradient-text">CMS</span></span>
            <div className="text-[10px] uppercase font-semibold text-[var(--text-muted)]">Admin Panel</div>
          </div>
        </div>

        <nav className="flex-1 p-4 flex flex-col gap-1">
          {SIDEBAR_ITEMS.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-[var(--accent-glow)] text-[var(--accent-primary)] border border-[var(--border-accent)]"
                    : "text-[var(--text-secondary)] hover:bg-white/5 hover:text-white"
                }`}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* User Footer */}
        <div className="p-4 border-t border-[var(--border)] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs border border-cyan-500/30">
              AD
            </div>
            <div>
              <div className="text-xs font-semibold">Admin User</div>
              <div className="text-[10px] text-[var(--text-muted)]">admin@kayak.ai</div>
            </div>
          </div>
          <Link href="/admin/login" title="Logout" className="text-[var(--text-muted)] hover:text-red-400 p-1.5 rounded-lg hover:bg-white/5">
            <LogOut size={16} />
          </Link>
        </div>
      </aside>

      {/* Admin Content Area */}
      <main className="admin-content flex-1">
        {children}
      </main>
    </div>
  );
}
