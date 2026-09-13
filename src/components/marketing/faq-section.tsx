"use client";

import * as React from "react";
import { Plus } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";
import { faqItems } from "@/features/faq/data/faq";

function FaqRow({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-hairline">
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

export function FaqSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="bg-bg py-24">
      <Container className="max-w-2xl">
        <ScrollReveal>
          <SectionHeading
            align="center"
            eyebrow="Merak Ettiklerin"
            title="Sıkça Sorulan Sorular"
            className="mx-auto"
          />
        </ScrollReveal>

        <ScrollReveal delay={80} className="mt-10 border-t border-hairline">
          {faqItems.map((item, i) => (
            <FaqRow
              key={item.question}
              question={item.question}
              answer={item.answer}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </ScrollReveal>
      </Container>
    </section>
  );
}
