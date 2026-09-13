/** Decorative animated open-notebook illustration (pen "writing") for the Egitimler header. Pure CSS animation, no JS. */
export function AnimatedNotebook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 200" className={className} aria-hidden="true">
      {/* pages */}
      <polygon
        points="20,42 120,30 120,172 20,182"
        fill="var(--white)"
        stroke="var(--navy-deep)"
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />
      <polygon
        points="120,30 220,42 220,182 120,172"
        fill="var(--white)"
        stroke="var(--navy-deep)"
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />
      <line x1="120" y1="30" x2="120" y2="172" stroke="var(--navy-deep)" strokeOpacity="0.45" strokeWidth="2" />

      {/* text lines, left page */}
      <g stroke="var(--sage)" strokeWidth="3" strokeLinecap="round">
        <line x1="34" y1="72" x2="104" y2="68" />
        <line x1="34" y1="92" x2="104" y2="88" />
        <line x1="34" y1="112" x2="98" y2="109" />
        <line x1="34" y1="132" x2="104" y2="129" />
      </g>

      {/* text lines, right page (top rows static — already "written") */}
      <g stroke="var(--sage)" strokeWidth="3" strokeLinecap="round">
        <line x1="136" y1="68" x2="206" y2="72" />
        <line x1="136" y1="88" x2="206" y2="92" />
      </g>

      {/* animated "ink" line being written */}
      <path
        d="M136,112 q5,-9 10,0 q5,-9 10,0 q5,-9 10,0 q5,-9 10,0 q5,-9 10,0"
        fill="none"
        stroke="var(--gold-deep)"
        strokeWidth="3"
        strokeLinecap="round"
        className="animate-ink-line"
      />

      {/* pencil */}
      <g className="animate-pencil-write" style={{ transformOrigin: "165px 108px" }}>
        <rect x="150" y="98" width="46" height="12" rx="3" fill="var(--gold)" transform="rotate(-10 165 108)" />
        <polygon points="150,102 138,108 150,114" fill="var(--navy-deep)" transform="rotate(-10 165 108)" />
      </g>

      {/* sparkles */}
      <g className="animate-sparkle" style={{ animationDelay: "0s" }}>
        <circle cx="200" cy="50" r="4" fill="var(--gold)" />
      </g>
      <g className="animate-sparkle" style={{ animationDelay: "0.9s" }}>
        <circle cx="212" cy="70" r="3" fill="var(--gold-deep)" />
      </g>
      <g className="animate-sparkle" style={{ animationDelay: "1.6s" }}>
        <circle cx="188" cy="34" r="2.5" fill="var(--sage)" />
      </g>
    </svg>
  );
}
