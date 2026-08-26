import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Clock } from "lucide-react";

import { cn } from "@/lib/utils";

function ModuleTile({
  icon: Icon,
  title,
  description,
  href,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}) {
  const content = (
    <>
      <Icon className="size-5 text-gold-deep" aria-hidden="true" />
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
            <ArrowRight className="size-3.5" aria-hidden="true" />
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
    "flex flex-col rounded-(--radius-lg) border bg-surface p-6 transition-all",
    href
      ? "border-hairline hover:border-gold/40 hover:shadow-(--shadow-card)"
      : "border-dashed border-hairline opacity-70"
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
