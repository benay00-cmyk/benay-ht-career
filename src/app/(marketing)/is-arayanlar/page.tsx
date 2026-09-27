import type { Metadata } from "next";
import Link from "next/link";
import {
  FileEdit,
  Link2,
  MessagesSquare,
  Search,
  Users2,
  HeartHandshake,
  ArrowRight,
  Compass,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { ModuleTile } from "@/components/marketing/module-tile";
import { AiAssistantTeaser } from "@/components/marketing/ai-assistant-teaser";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { HorizontalCarousel } from "@/components/ui/horizontal-carousel";
import { JobSearchSupport } from "@/components/marketing/job-search-support";
import { IsHayatiPerspectives } from "@/components/marketing/is-hayati-perspectives";
import { perspectives } from "@/features/is-hayati/data/perspectives";
import { blogCategories, blogPosts } from "@/features/blog/data/posts";
import { buttonVariants } from "@/components/ui/button";
import { MagneticLink } from "@/components/ui/magnetic-link";

const struggleTags: Record<string, string> = {
  iletisim: "İletişim",
  sinirlar: "Sınırlar",
  yukselme: "Yükselme",
  departman: "Departman Değiştirme",
  "is-degistirme": "İş Değiştirme",
};

const isHayatiPosts = blogPosts.filter((p) => p.category === "is-hayati");

export const metadata: Metadata = {
  title: "İş Arayanlar · Benay HR",
  description:
    "İş arama sadece ilan bulup başvurmak değildir. CV, LinkedIn, mülakat ve iş arama stratejisinin yanında sürecin psikolojik tarafını da ele alıyoruz.",
};

const otherModules = [
  {
    icon: FileEdit,
    title: "CV",
    description: "Sıfırdan profesyonel CV oluşturma desteği.",
    href: "/egitimler#ats-gecen-cv",
    accent: "gold" as const,
  },
  {
    icon: Link2,
    title: "LinkedIn",
    description: "Profilinin doğru kişiler tarafından bulunmasını sağla.",
    href: "/egitimler#linkedin-profil-optimizasyonu",
    accent: "green" as const,
  },
  {
    icon: MessagesSquare,
    title: "Mülakat",
    description: "Mülakatlara güvenle hazırlan, doğru soru ve yanıtları öğren.",
    href: "/egitimler#mulakat-hazirlik",
    accent: "sage" as const,
  },
  {
    icon: Search,
    title: "İş Arama",
    description: "Doğru kanallardan doğru pozisyonlara ulaşma stratejileri.",
    href: "/egitimler#etkili-is-arama",
    accent: "gold" as const,
  },
  {
    icon: Users2,
    title: "Mentörlük",
    description: "Bire bir kariyer ve yetkinlik mentörlüğü ile yol al.",
    href: "/egitimler#kariyer-mentorlugu",
    accent: "green" as const,
  },
  {
    icon: HeartHandshake,
    title: "Süreçte Yanında Olacak Bir Arkadaş",
    description: "Yalnız değilsin; sürecin her adımında birlikte ilerliyoruz.",
    href: "/egitimler#danismanlik",
    accent: "sage" as const,
  },
];

export default function IsArayanlarPage() {
  return (
    <div className="bg-bg">
      <div className="border-b border-hairline py-20">
        <Container className="max-w-2xl">
          <ScrollReveal>
            <span className="font-sans text-[11px] font-bold tracking-[0.16em] text-gold-deep uppercase">
              İş Arayanlar
            </span>
            <h1 className="mt-3 font-display text-4xl font-medium text-navy-deep sm:text-5xl">
              <span className="block text-xl font-normal text-ink-muted sm:text-2xl">
                İş aramak, sadece ilanlara başvuru yapmak değil.
              </span>
              <span className="mt-2 block">Kariyerini Şansa Bırakma.</span>
            </h1>
          </ScrollReveal>
        </Container>
      </div>

      <section className="border-b border-hairline bg-surface py-14">
        <Container className="flex flex-col items-center gap-4 text-center">
          <ScrollReveal className="flex flex-col items-center gap-3">
            <span className="rounded-full bg-mint px-2.5 py-1 font-mono text-[10px] tracking-[0.12em] text-navy-deep uppercase">
              Önce Buradan Başla
            </span>
            <h2 className="font-display text-2xl font-medium text-navy-deep sm:text-3xl">
              Seni nerede zorladığını gör.
            </h2>
            <p className="max-w-lg text-[14.5px] leading-relaxed text-ink-muted">
              13 soru, 3 dakika. CV, mülakat, başvuru stratejisi, kariyer
              netliği ve networking arasında ana problemin nerede
              olduğunu bul, sonra doğrudan çözüme geç.
            </p>
            <MagneticLink
              href="/kariyer-testi"
              className={buttonVariants({ variant: "gold", size: "lg", className: "mt-2" })}
            >
              Ücretsiz Kariyer Check-Up
              <ArrowRight className="size-4" aria-hidden="true" />
            </MagneticLink>
          </ScrollReveal>
        </Container>
      </section>

      <AiAssistantTeaser />

      <Container className="py-16">
        <ScrollReveal>
          <h2 className="font-display text-2xl font-medium text-navy-deep">
            İhtiyacın olan her şey
          </h2>
        </ScrollReveal>
        <HorizontalCarousel className="mt-6">
          {otherModules.map((m) => (
            <ModuleTile key={m.title} {...m} />
          ))}
        </HorizontalCarousel>
      </Container>

      <section className="border-b border-hairline bg-bg py-16">
        <Container className="max-w-2xl text-center">
          <ScrollReveal>
            <span className="mx-auto flex size-11 items-center justify-center rounded-full border border-gold/30 bg-gold-soft/40 text-gold-deep">
              <Compass className="size-5" aria-hidden="true" />
            </span>
            <h2 className="mt-4 font-display text-xl font-medium text-navy-deep sm:text-2xl">
              Seni Zorlayan Hangisi?
            </h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-ink-muted">
              Sana en yakın olanı seç, o başlığı aşağıda birlikte açalım.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={80} className="mt-6 flex flex-wrap justify-center gap-2">
            {perspectives.map((p) => (
              // Plain <a>, not next/link: this is a same-page hash jump and
              // IsHayatiPerspectives listens for the native `hashchange`
              // event to open the matching row, which next/link's routing
              // doesn't reliably dispatch for hash-only hrefs.
              <a
                key={p.key}
                href={`#${p.key}`}
                className="rounded-full border border-hairline bg-surface px-4 py-2 text-[13px] font-medium text-ink transition-colors hover:border-gold-deep hover:text-gold-deep"
              >
                {struggleTags[p.key]}
              </a>
            ))}
          </ScrollReveal>
        </Container>
      </section>

      <IsHayatiPerspectives />

      {isHayatiPosts.length > 0 && (
        <section className="border-b border-hairline bg-surface py-20">
          <Container>
            <ScrollReveal>
              <h2 className="font-display text-2xl font-medium text-navy-deep">
                İş Hayatı Yazıları
              </h2>
            </ScrollReveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {isHayatiPosts.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.category}/${post.slug}`}
                  style={{ animationDelay: `${i * 70}ms` }}
                  className="animate-entrance group relative flex min-h-[13rem] flex-col justify-between gap-6 overflow-hidden rounded-(--radius-lg) border border-hairline bg-bg p-7 transition-[transform,box-shadow,border-color] duration-(--motion-normal) ease-(--ease-out) before:absolute before:inset-x-0 before:top-0 before:h-1.5 before:bg-beige hover:-translate-y-2.5 hover:border-gold/50 hover:shadow-[0_1px_2px_rgba(23,43,58,0.08),0_24px_48px_rgba(23,43,58,0.18)]"
                >
                  <div>
                    <span className="font-sans text-[11px] font-bold tracking-[0.14em] text-gold-deep uppercase">
                      {blogCategories.find((c) => c.slug === post.category)?.label}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-medium text-navy-deep">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-ink-muted">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-[12.5px] text-ink-muted">
                    {post.readTime}
                    <ArrowRight className="size-4 text-navy-deep transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <JobSearchSupport />
    </div>
  );
}
