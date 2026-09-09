"use client";

import * as React from "react";

function ScoreBar({ label, value }: { label: string; value: number }) {
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const frame = requestAnimationFrame(() => setWidth(Math.min(100, Math.max(0, value))));
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return (
    <div>
      <div className="flex items-center justify-between text-[13px]">
        <span className="text-ink-muted">{label}</span>
        <span className="font-mono text-navy-deep">{value}/100</span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-hairline">
        <div
          className="h-full rounded-full bg-gold-deep transition-[width] duration-1000 ease-(--ease-out)"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export { ScoreBar };
