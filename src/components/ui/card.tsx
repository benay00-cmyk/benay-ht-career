import * as React from "react";

import { cn } from "@/lib/utils";

function Card({
  className,
  featured = false,
  interactive = false,
  ...props
}: React.ComponentProps<"div"> & { featured?: boolean; interactive?: boolean }) {
  return (
    <div
      data-featured={featured}
      className={cn(
        "rounded-(--radius-lg) border bg-surface p-7 shadow-(--shadow-card) transition-[transform,box-shadow,border-color] duration-(--motion-normal) ease-(--ease-out)",
        featured ? "border-gold/40" : "border-hairline",
        interactive &&
          "hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_1px_2px_rgba(23,43,58,0.06),0_16px_32px_rgba(23,43,58,0.12)]",
        className
      )}
      {...props}
    />
  );
}

function CardEyebrow({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "font-mono text-[11px] tracking-[0.14em] text-gold-deep uppercase",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn(
        "mt-2 font-display text-xl font-medium text-navy-deep",
        className
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("mt-2 text-[15px] leading-relaxed text-ink-muted", className)}
      {...props}
    />
  );
}

export { Card, CardEyebrow, CardTitle, CardDescription };
