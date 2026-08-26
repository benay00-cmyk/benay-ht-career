import Link from "next/link";
import { Sparkles } from "lucide-react";

import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";

const scoreRows = [
  { label: "ATS Uyumluluk Skoru", value: 78 },
  { label: "İşe Alınma Olasılığı", value: 64 },
];

const findings = [
  { tag: "Güçlü Yön", text: "5 yıllık işe alım deneyimi ilanla doğrudan örtüşüyor" },
  { tag: "Eksik", text: "\"Performans yönetimi\" anahtar kelimesi CV'de geçmiyor" },
];

export function AiAssistantTeaser() {
  return (
    <section className="bg-navy-deep py-24">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div className="flex flex-col gap-5">
          <span className="flex size-11 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
            <Sparkles className="size-5" aria-hidden="true" />
          </span>
          <span className="font-mono text-[11px] tracking-[0.16em] text-gold uppercase">
            Kariyer Asistanı
          </span>
          <h2 className="font-display text-3xl font-medium text-surface sm:text-4xl">
            CV&apos;ni yükle, ilanı yapıştır, birkaç saniyede sonucu gör.
          </h2>
          <p className="max-w-md text-[16px] leading-relaxed text-surface/70">
            Şirket araştırması, ATS uyumluluk skoru, güçlü/eksik yönler, CV
            önerileri, STAR hikayeleri ve mülakat soruları — hepsi tek bir
            analizde.
          </p>
          <Link
            href="/ai-asistan"
            className={buttonVariants({ variant: "gold", className: "mt-2 w-fit" })}
          >
            CV&apos;ni Şimdi Analiz Et
          </Link>
        </div>

        <div className="rounded-(--radius-lg) border border-surface/10 bg-navy-midnight p-7">
          <div className="flex flex-col gap-5">
            {scoreRows.map((row) => (
              <div key={row.label}>
                <div className="flex items-center justify-between text-[13px]">
                  <span className="text-surface/70">{row.label}</span>
                  <span className="font-mono text-gold">{row.value}/100</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-surface/10">
                  <div
                    className="h-full rounded-full bg-gold"
                    style={{ width: `${row.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 border-t border-surface/10 pt-6">
            {findings.map((f) => (
              <div key={f.text} className="flex gap-3 text-[13.5px]">
                <span className="h-fit shrink-0 rounded-(--radius-sm) bg-gold/15 px-2 py-0.5 font-mono text-[10px] tracking-wide text-gold uppercase">
                  {f.tag}
                </span>
                <span className="text-surface/80">{f.text}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 border-t border-surface/10 pt-5 text-[12px] leading-relaxed text-surface/45">
            Bu skor tahmini bir uyumluluk analizidir; gerçek ATS sisteminin
            sonucunu garanti etmez. Yapay zeka çıktıları, insan
            değerlendirmesinin yerini almaz.
          </p>
        </div>
      </Container>
    </section>
  );
}
