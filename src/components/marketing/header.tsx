"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Logo } from "@/components/marketing/logo";

const navItems: { href: string; label: string; variant?: "free" | "ai" }[] = [
  { href: "/kariyer-testi", label: "Kariyer Testi", variant: "free" },
  { href: "/is-arayanlar", label: "İş Arayanlar" },
  { href: "/ik-profesyonelleri", label: "İK Profesyonelleri" },
  { href: "/ai-asistan", label: "Başvuru Analizi", variant: "ai" },
  { href: "/egitimler", label: "Eğitimler" },
  { href: "/danismanlik", label: "Danışmanlık" },
  { href: "/blog", label: "Kariyer Merkezi" },
  { href: "/hakkimda", label: "Hakkımda" },
  { href: "/iletisim", label: "İletişim" },
];

export function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-1.5 text-[13px] font-medium tracking-[0.01em] whitespace-nowrap transition-colors",
                item.variant === "ai"
                  ? "text-gold-deep hover:text-gold"
                  : item.variant === "free"
                    ? "text-navy-deep hover:text-gold-deep"
                    : "text-ink/75 hover:text-navy-deep"
              )}
            >
              {item.label}
              {item.variant === "free" && (
                <span className="rounded-full bg-mint px-1.5 py-0.5 font-mono text-[9px] tracking-[0.1em] text-navy-deep uppercase">
                  Ücretsiz
                </span>
              )}
            </Link>
          ))}
        </nav>

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
                  "flex items-center gap-2 rounded-(--radius-sm) px-2 py-2.5 text-[15px] font-medium",
                  item.variant === "ai"
                    ? "text-gold-deep"
                    : item.variant === "free"
                      ? "text-navy-deep"
                      : "text-ink"
                )}
              >
                {item.label}
                {item.variant === "free" && (
                  <span className="rounded-full bg-mint px-1.5 py-0.5 font-mono text-[9px] tracking-[0.1em] text-navy-deep uppercase">
                    Ücretsiz
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
