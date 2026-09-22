"use client";

import * as React from "react";
import { Plus } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

const perspectives = [
  {
    question: "Çok çalışmak neden her zaman kariyer ilerlemesi sağlamaz?",
    answer:
      "Yöneticiler harcanan zamanı değil, doğru anda ortaya çıkan sonucu hatırlar. Soru \"ne kadar çalıştım\" değil, \"kim ne zaman fark etti\" olmalı.",
  },
  {
    question: "İş değiştirmek neden her zaman kariyer yapmak değildir?",
    answer:
      "Yatay hareket (aynı seviyede farklı şirket) ile dikey hareket (yetki ve etki artışı) kolayca karışır. Asıl soru: seni bir yere mi taşıyor, yoksa sadece yer mi değiştiriyorsun?",
  },
  {
    question: "İyi CV ile doğru CV neden aynı şey değildir?",
    answer:
      "İyi CV okunması kolay olandır; doğru CV, değerlendiren kişinin aradığı sinyali verendir. \"Bu güzel mi\" değil, \"aradıkları burada mı\" diye sor.",
  },
  {
    question: "Mülakatta heyecanlanman neden asıl problemin olmayabilir?",
    answer:
      "Heyecan bir belirtidir, sebep değil. Asıl sorun çoğu zaman hazırlıksızlık ya da kendini nasıl konumlandıracağını netleştirememektir.",
  },
];

function PerspectiveRow({
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

export function IsHayatiPerspectives() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

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
              key={p.question}
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
