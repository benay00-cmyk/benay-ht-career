import Link from "next/link";
import type { LucideIcon } from "lucide-react";

import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";

function ComingSoon({
  icon: Icon,
  eyebrow,
  title,
  description,
}: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-bg py-28">
      <Container className="flex max-w-2xl flex-col items-center text-center">
        <span className="flex size-14 items-center justify-center rounded-full border border-gold/30 bg-gold-soft/40 text-gold-deep">
          <Icon className="size-6" aria-hidden="true" />
        </span>
        <span className="mt-6 font-mono text-[11px] tracking-[0.16em] text-gold-deep uppercase">
          {eyebrow}
        </span>
        <h1 className="mt-3 font-display text-3xl font-medium text-navy-deep sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed text-ink-muted">
          {description}
        </p>
        <Link
          href="/"
          className={buttonVariants({ variant: "outline", className: "mt-8" })}
        >
          Ana Sayfaya Dön
        </Link>
      </Container>
    </div>
  );
}

export { ComingSoon };
