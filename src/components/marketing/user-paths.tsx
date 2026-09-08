import Link from "next/link";
import { Search, Repeat, MessagesSquare, Users, ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const options = [
  {
    href: "/is-arayanlar",
    icon: Search,
    title: "İş bulmak istiyorum",
    description: "CV'ni ve başvuru stratejini güçlendir.",
  },
  {
    href: "/ai-asistan",
    icon: Repeat,
    title: "İş değiştirmek istiyorum",
    description: "Yeni bir ilana uygunluğunu analiz et.",
  },
  {
    href: "/ai-asistan",
    icon: MessagesSquare,
    title: "Mülakata hazırlanıyorum",
    description: "Olası soruları ve hazırlık ipuçlarını gör.",
  },
  {
    href: "/ik-profesyonelleri",
    icon: Users,
    title: "İK kariyerimi geliştirmek istiyorum",
    description: "İK kaynakları, mentörlük ve eğitimlere ulaş.",
  },
];

export function UserPaths() {
  return (
    <section className="bg-bg py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Sana Uygun Yol"
          title="Şu anda neye ihtiyacın var?"
          className="mx-auto"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {options.map((opt) => (
            <Link
              key={opt.title}
              href={opt.href}
              className="group flex flex-col gap-4 rounded-(--radius-lg) border border-hairline bg-surface p-7 transition-colors hover:border-gold/40"
            >
              <span className="flex size-11 items-center justify-center rounded-full border border-gold/30 bg-gold-soft/40 text-gold-deep">
                <opt.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-display text-lg font-medium text-navy-deep">
                {opt.title}
              </h3>
              <p className="text-[13.5px] leading-relaxed text-ink-muted">
                {opt.description}
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy-deep group-hover:text-gold-deep">
                Devam Et
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
