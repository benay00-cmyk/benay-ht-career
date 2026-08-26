import * as React from "react";

import { cn } from "@/lib/utils";

function Card({
  className,
  featured = false,
  ...props
}: React.ComponentProps<"div"> & { featured?: boolean }) {
  return (
    <div
      data-featured={featured}
      className={cn(
        "rounded-(--radius-lg) border bg-surface p-7 shadow-(--shadow-card)",
        featured ? "border-gold/40" : "border-hairline",
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
