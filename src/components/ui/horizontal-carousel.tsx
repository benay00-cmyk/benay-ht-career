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

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target, entry.intersectionRatio);
        }
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
      },
      { root: track, threshold: [0.25, 0.5, 0.75, 0.95] }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
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
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {React.Children.map(children, (child, i) => (
          <div
            className={cn(
              "shrink-0 snap-center transition-[transform,opacity] duration-(--motion-normal) ease-(--ease-out)",
              i === active
                ? "scale-100 opacity-100"
                : "scale-[0.92] opacity-55"
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
