import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Clock } from "lucide-react";

import { cn } from "@/lib/utils";

const accentStyle = {
  gold: { top: "before:bg-gold", bg: "bg-gold-soft/25", chip: "bg-gold text-navy-deep" },
  green: { top: "before:bg-navy-deep", bg: "bg-navy-deep/[0.06]", chip: "bg-navy-deep text-surface" },
  sage: { top: "before:bg-sage", bg: "bg-sage/25", chip: "bg-sage text-navy-deep" },
};

function ModuleTile({
  icon: Icon,
  title,
  description,
  href,
  accent = "gold",
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  accent?: "gold" | "green" | "sage";
}) {
  const content = (
    <>
      <span
        className={cn(
          "flex size-11 items-center justify-center rounded-full transition-transform duration-(--motion-normal) ease-(--ease-out) group-hover:scale-110",
          accentStyle[accent].chip
        )}
      >
        <Icon
          className="size-5 transition-transform duration-(--motion-normal) ease-(--ease-out) group-hover:-rotate-6"
          aria-hidden="true"
        />
      </span>
      <h3 className="mt-4 font-display text-lg font-medium text-navy-deep">
        {title}
      </h3>
      <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
        {description}
      </p>
      <div className="mt-5">
        {href ? (
          <span className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-navy-deep">
            İncele
            <ArrowRight
              className="size-3.5 transition-transform duration-(--motion-fast) ease-(--ease-out) group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-ink-muted">
            <Clock className="size-3.5" aria-hidden="true" />
            Yakında
          </span>
        )}
      </div>
    </>
  );

  const className = cn(
    "group relative flex flex-col overflow-hidden rounded-(--radius-lg) border p-6 transition-[transform,box-shadow,border-color] duration-(--motion-normal) ease-(--ease-out) before:absolute before:inset-x-0 before:top-0 before:h-1.5",
    href
      ? cn(
          "border-hairline hover:-translate-y-2.5 hover:scale-[1.015] hover:border-gold/50 hover:shadow-[0_1px_2px_rgba(23,43,58,0.08),0_24px_48px_rgba(23,43,58,0.18)]",
          accentStyle[accent].top,
          accentStyle[accent].bg
        )
      : "border-dashed border-hairline bg-surface opacity-70"
  );

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}

export { ModuleTile };
