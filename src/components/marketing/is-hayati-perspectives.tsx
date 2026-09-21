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
      "Uzun saatler çalışmak görünürlüğü otomatik artırmaz. Yöneticiler çoğu zaman harcanan zamanı değil, doğru anda ortaya çıkan sonucu hatırlar. Görünmeyen ama etkili bir çalışan, görünen ama sonuçsuz bir çalışandan geride kalabilir. Soru \"ne kadar çalıştım\" değil, \"kimin, ne zaman, neyi fark ettiği\" olmalı.",
  },
  {
    question: "İş değiştirmek neden her zaman kariyer yapmak değildir?",
    answer:
      "Sık iş değiştirmek ilerleme hissi verir, ama yatay hareket (aynı seviyede farklı bir şirket) ile dikey hareket (yetki, sorumluluk ve etki artışı) kolayca birbirine karışır. Yeni bir işe geçmeden önce sorulması gereken soru şu: bu değişiklik seni gerçekten bir yere mi taşıyor, yoksa sadece yer mi değiştiriyorsun?",
  },
  {
    question: "İyi CV ile doğru CV neden aynı şey değildir?",
    answer:
      "Görsel olarak kusursuz bir CV bile elenebilir. İyi CV, okunması kolay olandır; doğru CV, o pozisyonu değerlendiren kişinin aradığı sinyali verendir. İkisi aynı hedefe hizmet etmez. CV'ni göndermeden önce \"bu güzel mi\" değil, \"bu, ilanı okuyan kişinin aradığı şeyi gösteriyor mu\" diye sor.",
  },
  {
    question: "Mülakatta heyecanlanman neden asıl problemin olmayabilir?",
    answer:
      "Mülakat sonrası genelde \"çok heyecanlandım, o yüzden olmadı\" diye düşünülür. Ama heyecan bir belirtidir, sebep değil. Asıl sorun çoğu zaman hazırlıksızlık ya da kendini nasıl konumlandıracağını netleştirememektir. Heyecanı yönetmeye çalışmak yerine anlatacağın şeyi netleştirmek, heyecanı da azaltır.",
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
