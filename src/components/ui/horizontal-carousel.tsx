"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Spatial horizontal carousel: cards snap-scroll (native swipe on touch),
 * the most-centered card scales up and gains full opacity/depth while
 * neighbors recede. No external carousel dependency — scroll-snap +
 * IntersectionObserver only.
 */
export function HorizontalCarousel({
  children,
  className,
  cardWidth = "min(320px, 85vw)",
}: {
  children: React.ReactNode[];
  className?: string;
  cardWidth?: string;
}) {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(track.children) as HTMLElement[];
    const ratios = new Map<Element, number>();
    let settleTimer: ReturnType<typeof setTimeout>;

    // Mid-scroll, two adjacent cards' ratios cross back and forth several
    // times before settling — committing `active` on every one of those
    // crossings made the card visibly jump back and forth ("titreme").
    // Debouncing to the last update once ratios stop changing fixes it.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target, entry.intersectionRatio);
        }
        clearTimeout(settleTimer);
        settleTimer = setTimeout(() => {
          let bestIdx = 0;
          let bestRatio = -1;
          cards.forEach((card, idx) => {
            const ratio = ratios.get(card) ?? 0;
            if (ratio > bestRatio) {
              bestRatio = ratio;
              bestIdx = idx;
            }
          });
          setActive(bestIdx);
        }, 120);
      },
      { root: track, threshold: [0.25, 0.5, 0.75, 0.95] }
    );

    cards.forEach((card) => observer.observe(card));
    return () => {
      observer.disconnect();
      clearTimeout(settleTimer);
    };
  }, [children.length]);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[0] as HTMLElement | undefined;
    const amount = (card?.offsetWidth ?? 300) + 20;
    track.scrollBy({ left: amount * direction, behavior: "smooth" });
  }

  return (
    <div className={cn("relative", className)}>
      <div
        ref={trackRef}
        data-lenis-prevent
        className="flex snap-x snap-mandatory items-start gap-5 overflow-x-auto overflow-y-visible scroll-smooth px-1 pt-4 pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {React.Children.map(children, (child, i) => (
          <div
            className={cn(
              "shrink-0 snap-center transition-[transform,opacity] duration-(--motion-slow) ease-(--ease-out) will-change-transform",
              i === active
                ? "z-10 -translate-y-3 scale-100 opacity-100 shadow-[0_20px_32px_rgba(23,43,58,0.18)]"
                : "z-0 translate-y-1.5 scale-[0.88] opacity-45"
            )}
            style={{ width: cardWidth }}
          >
            {child}
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Önceki kart"
          className="flex size-9 items-center justify-center rounded-full border border-hairline text-navy-deep transition-colors duration-(--motion-fast) ease-(--ease-out) hover:border-gold-deep hover:text-gold-deep"
        >
          <ChevronLeft className="size-4" aria-hidden="true" />
        </button>
        <div className="flex items-center gap-1.5">
          {React.Children.map(children, (_, i) => (
            <span
              key={i}
              className={cn(
                "size-1.5 rounded-full transition-colors duration-(--motion-fast)",
                i === active ? "bg-gold-deep" : "bg-hairline"
              )}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Sonraki kart"
          className="flex size-9 items-center justify-center rounded-full border border-hairline text-navy-deep transition-colors duration-(--motion-fast) ease-(--ease-out) hover:border-gold-deep hover:text-gold-deep"
        >
          <ChevronRight className="size-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
