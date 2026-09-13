export function Logo({
  className,
  variant = "onLight",
}: {
  className?: string;
  variant?: "onLight" | "onDark";
}) {
  const bg = variant === "onLight" ? "var(--navy-deep)" : "var(--gold)";
  const fg = variant === "onLight" ? "var(--gold)" : "var(--navy-deep)";

  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="11" fill={bg} />
      <text
        x="50%"
        y="53%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontWeight="800"
        fontSize="20"
        fill={fg}
      >
        B
      </text>
    </svg>
  );
}
