/** Decorative animated compass illustration (searching needle) for the UserPaths card. Pure CSS animation, no JS. */
export function AnimatedCompass({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      <circle cx="40" cy="40" r="36" fill="var(--gold-soft)" fillOpacity="0.4" stroke="var(--gold)" strokeOpacity="0.4" strokeWidth="1.5" />
      <circle cx="40" cy="40" r="28" fill="none" stroke="var(--navy-deep)" strokeOpacity="0.2" strokeWidth="1" />

      <g stroke="var(--navy-deep)" strokeOpacity="0.35" strokeWidth="1.5" strokeLinecap="round">
        <line x1="40" y1="7" x2="40" y2="13" />
        <line x1="40" y1="67" x2="40" y2="73" />
        <line x1="7" y1="40" x2="13" y2="40" />
        <line x1="67" y1="40" x2="73" y2="40" />
      </g>

      <g className="animate-compass" style={{ transformOrigin: "40px 40px" }}>
        <polygon points="40,18 33,40 47,40" fill="var(--gold-deep)" />
        <polygon points="40,62 33,40 47,40" fill="var(--navy-deep)" fillOpacity="0.55" />
      </g>

      <circle cx="40" cy="40" r="3.5" fill="var(--gold-deep)" />
    </svg>
  );
}
