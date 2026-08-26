import Link from "next/link";
import { LayoutDashboard, Inbox, LogOut, ExternalLink } from "lucide-react";

import { logoutAction } from "@/features/admin-auth/actions";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/talepler", label: "Talepler", icon: Inbox },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-svh bg-bg">
      <aside className="hidden w-60 shrink-0 flex-col border-r border-hairline bg-navy-deep sm:flex">
        <div className="flex h-16 items-center px-6">
          <span className="font-display text-[15px] font-medium text-surface">
            Benay <span className="text-gold">HR</span>
            <span className="ml-1.5 font-mono text-[10px] text-surface/50">ADMIN</span>
          </span>
        </div>
        <nav className="flex flex-1 flex-col gap-1 px-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-2.5 rounded-(--radius-sm) px-3 py-2 text-[13.5px] font-medium text-surface/70 transition-colors hover:bg-surface/10 hover:text-surface"
            >
              <item.icon className="size-4" />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-1 border-t border-surface/10 px-3 py-3">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-2.5 rounded-(--radius-sm) px-3 py-2 text-[13px] text-surface/60 hover:bg-surface/10 hover:text-surface"
          >
            <ExternalLink className="size-4" />
            Siteyi Görüntüle
          </Link>
          <form action={logoutAction}>
            <button
              type="submit"
              className="flex w-full items-center gap-2.5 rounded-(--radius-sm) px-3 py-2 text-[13px] text-surface/60 hover:bg-surface/10 hover:text-surface"
            >
              <LogOut className="size-4" />
              Çıkış Yap
            </button>
          </form>
        </div>
      </aside>

      <main className="flex-1 overflow-x-hidden">{children}</main>
    </div>
  );
}
