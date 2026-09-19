/** Compass-needle mark — ties into the site's "find your direction" theme, used everywhere the wordmark ("Benay HR") appears. */
export function Logo({
  className,
  variant = "onLight",
}: {
  className?: string;
  variant?: "onLight" | "onDark";
}) {
  const bg = variant === "onLight" ? "var(--navy-deep)" : "var(--gold)";
  const needleFront = variant === "onLight" ? "var(--gold)" : "var(--navy-deep)";
  const needleBack = variant === "onLight" ? "var(--surface)" : "var(--navy-deep)";
  const ring = variant === "onLight" ? "var(--gold)" : "var(--navy-deep)";

  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="19" fill={bg} />
      <circle cx="20" cy="20" r="17.5" fill="none" stroke={ring} strokeOpacity="0.35" strokeWidth="1" />

      <g transform="rotate(-28 20 20)">
        <polygon points="20,7 16,20 24,20" fill={needleFront} />
        <polygon points="20,33 16,20 24,20" fill={needleBack} fillOpacity="0.6" />
      </g>

      <circle cx="20" cy="20" r="2.5" fill={variant === "onLight" ? "var(--surface)" : "var(--gold)"} />
    </svg>
  );
}
