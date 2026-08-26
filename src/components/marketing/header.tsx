"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/is-arayanlar", label: "İş Arayanlar" },
  { href: "/ik-profesyonelleri", label: "İK Profesyonelleri" },
  { href: "/ai-asistan", label: "Kariyer Asistanı", accent: true },
  { href: "/egitimler", label: "Eğitimler" },
  { href: "/danismanlik", label: "Danışmanlık" },
  { href: "/ik-haritasi", label: "İK Haritası" },
  { href: "/blog", label: "Blog" },
  { href: "/hakkimda", label: "Hakkımda" },
  { href: "/iletisim", label: "İletişim" },
];

export function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-lg font-medium text-navy-deep"
        >
          Benay <span className="text-gold-deep">HR</span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[13px] font-medium tracking-[0.01em] whitespace-nowrap transition-colors",
                item.accent
                  ? "text-gold-deep hover:text-gold"
                  : "text-ink/75 hover:text-navy-deep"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Link
            href="/ik-profesyonelleri"
            className={buttonVariants({ variant: "ghost", size: "sm" })}
          >
            İK Dünyasına Katıl
          </Link>
          <Link
            href="/is-arayanlar"
            className={buttonVariants({ variant: "primary", size: "sm" })}
          >
            Kariyerini Güçlendir
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-(--radius-sm) text-navy-deep xl:hidden"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-hairline bg-bg xl:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-(--radius-sm) px-2 py-2.5 text-[15px] font-medium",
                  item.accent ? "text-gold-deep" : "text-ink"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-hairline pt-4">
              <Link
                href="/ik-profesyonelleri"
                onClick={() => setOpen(false)}
                className={buttonVariants({ variant: "outline", size: "sm" })}
              >
                İK Dünyasına Katıl
              </Link>
              <Link
                href="/is-arayanlar"
                onClick={() => setOpen(false)}
                className={buttonVariants({ variant: "primary", size: "sm" })}
              >
                Kariyerini Güçlendir
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
