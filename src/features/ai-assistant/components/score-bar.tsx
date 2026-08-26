function ScoreBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-[13px]">
        <span className="text-ink-muted">{label}</span>
        <span className="font-mono text-navy-deep">{value}/100</span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-hairline">
        <div
          className="h-full rounded-full bg-gold-deep"
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
    </div>
  );
}

export { ScoreBar };
