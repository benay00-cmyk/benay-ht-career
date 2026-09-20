import { Check } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { buttonVariants } from "@/components/ui/button";
import { MagneticLink } from "@/components/ui/magnetic-link";

const painPoints = [
  "İşe alımda zorlanıyor olabilirsin.",
  "İK metriklerini yorumlamakta zorlanıyor olabilirsin.",
  "Yönetici karşısında kendini daha güçlü ifade etmek istiyor olabilirsin.",
  "Uzmanlıktan yöneticiliğe geçişe nasıl hazırlanacağını bilmiyor olabilirsin.",
];

const topics = [
  "İK Mentörlüğü",
  "İK Eğitimleri",
  "Uygulamalı İK",
  "İK Kariyer Yol Haritası",
  "AI & İK",
];

export function HrCareerSupport() {
  return (
    <section className="border-t border-hairline bg-surface py-20">
      <Container className="max-w-2xl">
        <ScrollReveal>
          <SectionHeading
            eyebrow="İşin İçinden Öğren"
            title="İK kariyerini teoriyle değil, uygulamayla geliştir."
            description="İK'da nerede olduğunu, hangi alanda gelişmen gerektiğini ve kariyerinde bir sonraki adımın ne olacağını birlikte değerlendiriyoruz."
          />
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <p className="mt-6 border-l-2 border-gold/40 pl-5 font-display text-[17px] leading-relaxed text-navy-deep">
            İK&apos;da gelişmek, daha fazla bilgi biriktirmek değil; doğru
            bilgiyi iş üzerinde kullanabilmektir.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={140} className="mt-10 grid gap-4 sm:grid-cols-2">
          {painPoints.map((point) => (
            <div key={point} className="flex items-start gap-3">
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-mint text-navy-deep">
                <Check className="size-3" aria-hidden="true" />
              </span>
              <p className="text-[14.5px] leading-relaxed text-ink-muted">
                {point}
              </p>
            </div>
          ))}
        </ScrollReveal>

        <ScrollReveal delay={180}>
          <p className="mt-8 text-[15px] leading-relaxed text-ink-muted">
            İhtiyacını belirliyor, gelişim alanını netleştiriyor ve
            uygulanabilir bir yol haritası oluşturuyoruz.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={220} className="mt-6 flex flex-wrap gap-2">
          {topics.map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-sage/50 bg-mint/40 px-3 py-1.5 text-[12.5px] font-medium text-navy-deep"
            >
              {topic}
            </span>
          ))}
        </ScrollReveal>

        <ScrollReveal delay={260} className="mt-12 flex flex-col items-start gap-4 border-t border-hairline pt-10">
          <h3 className="font-display text-2xl font-medium text-navy-deep">
            İK Kariyerini Tesadüflere Bırakma.
          </h3>
          <p className="text-[15px] leading-relaxed text-ink-muted">
            Birlikte gelişelim, birlikte daha güçlü bir İK profesyoneli
            olalım.
          </p>
          <MagneticLink
            href="/danismanlik"
            className={buttonVariants({ variant: "gold", size: "lg" })}
          >
            Benay ile Çalış
          </MagneticLink>
        </ScrollReveal>
      </Container>
    </section>
  );
}
