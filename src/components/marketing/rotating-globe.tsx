/** Decorative animated globe/network illustration for the IK Profesyonelleri header. Pure CSS animation, no JS. */
export function RotatingGlobe({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      aria-hidden="true"
    >
      <circle cx="120" cy="120" r="86" fill="none" stroke="var(--navy-deep)" strokeOpacity="0.18" strokeWidth="1.5" />

      <g className="animate-globe-spin" style={{ transformOrigin: "120px 120px" }}>
        <ellipse cx="120" cy="120" rx="86" ry="30" fill="none" stroke="var(--navy-deep)" strokeOpacity="0.35" strokeWidth="1.5" />
        <ellipse cx="120" cy="120" rx="86" ry="55" fill="none" stroke="var(--navy-deep)" strokeOpacity="0.28" strokeWidth="1.5" />
        <ellipse cx="120" cy="120" rx="86" ry="75" fill="none" stroke="var(--navy-deep)" strokeOpacity="0.2" strokeWidth="1.5" />
        <line x1="34" y1="120" x2="206" y2="120" stroke="var(--navy-deep)" strokeOpacity="0.3" strokeWidth="1.5" />
      </g>

      <g className="animate-globe-spin-reverse" style={{ transformOrigin: "120px 120px" }}>
        <circle cx="120" cy="34" r="5" fill="var(--gold)" />
        <circle cx="206" cy="120" r="3.5" fill="var(--gold-deep)" />
      </g>

      <g className="animate-globe-spin" style={{ transformOrigin: "120px 120px", animationDelay: "-6s" }}>
        <circle cx="120" cy="206" r="4" fill="var(--gold)" opacity="0.8" />
      </g>

      <circle cx="120" cy="120" r="6" fill="var(--gold-deep)" />
    </svg>
  );
}
