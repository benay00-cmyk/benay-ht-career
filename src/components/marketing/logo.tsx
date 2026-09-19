import { cn } from "@/lib/utils";

/** Text wordmark used wherever the brand appears (header, footer, admin). */
export function Logo({
  className,
  variant = "onLight",
}: {
  className?: string;
  variant?: "onLight" | "onDark";
}) {
  const label = variant === "onLight" ? "text-gold-deep" : "text-gold";
  const name = variant === "onLight" ? "text-navy-deep" : "text-surface";

  return (
    <span className={cn("flex flex-col leading-none", className)}>
      <span className={cn("font-mono text-[10px] font-bold tracking-[0.1em]", label)}>
        HR.
      </span>
      <span className={cn("font-display text-[15px] font-bold tracking-[0.01em]", name)}>
        Benay Aktaş
      </span>
    </span>
  );
}
