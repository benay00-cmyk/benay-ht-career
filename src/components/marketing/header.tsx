"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Logo } from "@/components/marketing/logo";

const navItems: { href: string; label: string }[] = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/kariyer-testi", label: "Kariyer Check-Up" },
  { href: "/is-arayanlar", label: "İş Arayanlar" },
  { href: "/is-hayati", label: "İş Hayatı" },
  { href: "/egitimler", label: "Kaynaklar" },
  { href: "/hakkimda", label: "Benay" },
  { href: "/danismanlik", label: "Danışmanlık" },
  { href: "/iletisim", label: "İletişim" },
];

const emptySubscribe = () => () => {};

/** True only after client hydration — lets the menu portal skip SSR (no `document` there) without a setState-in-effect. */
function useMounted() {
  return React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export function Header() {
  const [open, setOpen] = React.useState(false);
  const mounted = useMounted();

  React.useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/">
          <Logo />
        </Link>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex size-10 items-center justify-center rounded-(--radius-sm) text-navy-deep transition-colors duration-(--motion-fast) ease-(--ease-out) hover:text-gold-deep"
          aria-label="Menüyü aç"
          aria-expanded={open}
        >
          <Menu className="size-5" />
        </button>
      </div>

      {mounted &&
        createPortal(
          <>
            {/* backdrop-blur on <header> creates a containing block for
                fixed descendants, so the menu overlay must portal to
                <body> to actually cover the viewport instead of the
                64px header bar. */}
            <div
              onClick={() => setOpen(false)}
              aria-hidden="true"
              className={cn(
                "fixed inset-0 z-50 bg-navy-deep/40 transition-opacity duration-(--motion-normal) ease-(--ease-out)",
                open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
              )}
            />

            <div
              role="dialog"
              aria-modal="true"
              aria-label="Site menüsü"
              className={cn(
                "fixed top-0 right-0 z-50 flex h-full w-full max-w-xs flex-col bg-bg px-6 py-6 shadow-[-8px_0_32px_rgba(23,43,58,0.16)] transition-transform duration-(--motion-normal) ease-(--ease-out)",
                open ? "translate-x-0" : "translate-x-full"
              )}
            >
              <div className="mb-8 flex items-center justify-between">
                <Logo />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex size-10 items-center justify-center rounded-(--radius-sm) text-navy-deep transition-colors duration-(--motion-fast) ease-(--ease-out) hover:text-gold-deep"
                  aria-label="Menüyü kapat"
                >
                  <X className="size-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-(--radius-sm) px-2 py-3 text-[15px] font-medium text-ink transition-colors duration-(--motion-fast) ease-(--ease-out) hover:bg-mint/40 hover:text-navy-deep"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </>,
          document.body
        )}
    </header>
  );
}
