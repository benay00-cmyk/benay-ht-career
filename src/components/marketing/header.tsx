"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Logo } from "@/components/marketing/logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems: { href: string; label: string }[] = [
  { href: "/hakkimda", label: "Hakkımda" },
  { href: "/is-arayanlar", label: "İş Arayanlar" },
  { href: "/ik-profesyonelleri", label: "İK'cılar" },
  { href: "/egitimler", label: "Hizmetler / Eğitimler" },
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
              className="text-[13px] font-medium tracking-[0.01em] whitespace-nowrap text-ink/75 transition-colors hover:text-navy-deep"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/egitimler#danismanlik"
            className={cn(buttonVariants({ variant: "gold", size: "sm" }), "hidden sm:inline-flex")}
          >
            Danışmanlık Al
          </Link>

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
      </div>

      {open && (
        <div className="border-t border-hairline bg-bg xl:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-(--radius-sm) px-2 py-2.5 text-[15px] font-medium text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/egitimler#danismanlik"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-(--radius-sm) px-2 py-2.5 text-[15px] font-medium text-gold-deep sm:hidden"
            >
              Danışmanlık Al
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
