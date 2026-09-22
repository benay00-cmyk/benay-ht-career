import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const stats = [
  { value: "1000+", label: "CV İncelemesi" },
  { value: "400+", label: "Mülakat" },
];

export function AboutTeaser() {
  return (
    <section className="border-t border-hairline bg-bg py-24">
      <Container className="max-w-2xl">
        <ScrollReveal className="flex flex-col gap-5">
          <span className="font-sans text-[11px] font-bold tracking-[0.16em] text-gold-deep uppercase">
            Benay Aktaş
          </span>
          <h2 className="font-display text-3xl font-medium text-navy-deep sm:text-4xl">
            Bir zamanlar ben de iş arayan taraftaydım.
          </h2>
          <p className="max-w-lg text-[16px] leading-relaxed text-ink-muted">
            Bekledim, başvurdum, elendim — nedenini çoğu zaman öğrenemedim.
            Bugün ise işe alım yapan tarafındayım. İki tarafı da yaşamış
            olmak, bir CV&apos;de veya mülakatta gerçekte neyin
            değerlendirildiğini görmemi sağladı.
          </p>

          <div className="mt-2 flex gap-8 border-y border-hairline py-6">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-medium text-navy-deep">
                  {s.value}
                </p>
                <p className="mt-1 text-[12.5px] text-ink-muted">{s.label}</p>
              </div>
            ))}
          </div>

          <Link
            href="/hakkimda"
            className="inline-flex w-fit items-center gap-1.5 text-[14px] font-semibold text-navy-deep hover:text-gold-deep"
          >
            Hikayemin Tamamı
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </ScrollReveal>
      </Container>
    </section>
  );
}
