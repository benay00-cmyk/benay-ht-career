import { cn } from "@/lib/utils";

/** Brand loading indicator — three pulsing dots inheriting `currentColor`, used instead of a static spinner. */
export function PulseDots({ className }: { className?: string }) {
  return (
    <span
      role="status"
      aria-label="Yükleniyor"
      className={cn("inline-flex items-center gap-1", className)}
    >
      <span className="animate-pulse-dot size-1.5 rounded-full bg-current" style={{ animationDelay: "0ms" }} />
      <span className="animate-pulse-dot size-1.5 rounded-full bg-current" style={{ animationDelay: "150ms" }} />
      <span className="animate-pulse-dot size-1.5 rounded-full bg-current" style={{ animationDelay: "300ms" }} />
    </span>
  );
}
