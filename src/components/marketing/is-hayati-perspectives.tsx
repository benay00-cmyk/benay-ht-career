"use client";

import * as React from "react";
import { Plus } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";
import { perspectives } from "@/features/is-hayati/data/perspectives";

function PerspectiveRow({
  id,
  question,
  answer,
  open,
  onToggle,
}: {
  id: string;
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div id={id} className="scroll-mt-24 border-b border-hairline">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-display text-[16px] font-medium text-navy-deep">
          {question}
        </span>
        <Plus
          className={cn(
            "size-4.5 shrink-0 text-gold-deep transition-transform duration-(--motion-normal) ease-(--ease-out)",
            open && "rotate-45"
          )}
          aria-hidden="true"
        />
      </button>
      <div
        className="grid overflow-hidden transition-[grid-template-rows] duration-(--motion-normal) ease-(--ease-out)"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="pb-5 pr-8 text-[14.5px] leading-relaxed text-ink-muted">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function IsHayatiPerspectives() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  React.useEffect(() => {
    function applyHash() {
      const hash = window.location.hash.replace("#", "");
      const index = perspectives.findIndex((p) => p.key === hash);
      if (index >= 0) {
        setOpenIndex(index);
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  return (
    <section className="border-b border-hairline bg-surface py-20">
      <Container className="max-w-2xl">
        <ScrollReveal>
          <SectionHeading
            align="center"
            eyebrow="Görünenin Arkası"
            title="İş hayatında görünenin arkasında ne var?"
            className="mx-auto"
          />
        </ScrollReveal>

        <ScrollReveal delay={80} className="mt-10 border-t border-hairline">
          {perspectives.map((p, i) => (
            <PerspectiveRow
              key={p.key}
              id={p.key}
              question={p.question}
              answer={p.answer}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </ScrollReveal>
      </Container>
    </section>
  );
}
