import type { LucideIcon } from "lucide-react";
import { FileText, Sparkles, BarChart3 } from "lucide-react";

import { cn } from "@/lib/utils";

function Node({
  icon: Icon,
  active,
  pulse,
  label,
}: {
  icon: LucideIcon;
  active: boolean;
  pulse?: boolean;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <span
        className={cn(
          "relative flex size-11 items-center justify-center rounded-full border transition-colors duration-(--motion-normal) ease-(--ease-out)",
          active
            ? "border-gold-deep bg-gold-soft/40 text-gold-deep"
            : "border-hairline bg-bg text-ink-muted/40"
        )}
      >
        {pulse && (
          <span className="absolute inset-0 animate-ping rounded-full bg-gold/30" aria-hidden="true" />
        )}
        <Icon className="relative size-4.5" aria-hidden="true" />
      </span>
      <span className="font-mono text-[10px] tracking-[0.1em] text-ink-muted uppercase">
        {label}
      </span>
    </div>
  );
}

function Connector({ active }: { active: boolean }) {
  return (
    <div className="relative h-px w-10 shrink-0 overflow-hidden bg-hairline sm:w-16">
      <div
        className={cn(
          "absolute inset-y-0 left-0 bg-gold-deep transition-[width] duration-700 ease-(--ease-out)",
          active ? "w-full" : "w-0"
        )}
      />
    </div>
  );
}

/** Visualizes the real local processing stage (0-4) while an AI analysis request is in flight. Never shows a fabricated percentage. */
export function AiThinkingVisual({ stage }: { stage: number }) {
  return (
    <div className="flex items-center justify-center gap-0" aria-hidden="true">
      <Node icon={FileText} active label="CV" />
      <Connector active={stage >= 1} />
      <Node icon={Sparkles} active pulse label="AI" />
      <Connector active={stage >= 3} />
      <Node icon={BarChart3} active={stage >= 4} label="Sonuç" />
    </div>
  );
}
