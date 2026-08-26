import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "w-full rounded-(--radius-sm) border border-hairline bg-surface px-3.5 py-2.5 text-[14.5px] text-ink outline-none placeholder:text-ink-muted/70 focus-visible:border-gold-deep focus-visible:ring-2 focus-visible:ring-gold/30",
        className
      )}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
