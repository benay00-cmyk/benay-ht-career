"use client";

import * as React from "react";

type RevealDirection = "up" | "left" | "right" | "scale";

/**
 * Wraps children in a div that fades/slides into place the first time it
 * enters the viewport (see [data-reveal] rules in globals.css). Uses a
 * single shared IntersectionObserver per instance and unobserves after the
 * first reveal — this is a one-time entrance, not a repeating scroll effect.
 */
export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [revealed, setRevealed] = React.useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  React.useEffect(() => {
    const node = ref.current;
    if (!node || revealed) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const revealAttr = direction === "up" ? true : direction;

  return (
    <div
      ref={ref}
      data-reveal={revealAttr}
      data-revealed={revealed}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={className}
    >
      {children}
    </div>
  );
}
