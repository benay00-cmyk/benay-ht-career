import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { buttonVariants } from "@/components/ui/button";
import { MagneticLink } from "@/components/ui/magnetic-link";
import { IsHayatiPerspectives } from "@/components/marketing/is-hayati-perspectives";
import { perspectives } from "@/features/is-hayati/data/perspectives";
import { blogCategories, blogPosts } from "@/features/blog/data/posts";

const struggleTags: Record<string, string> = {
  iletisim: "İletişim",
  sinirlar: "Sınırlar",
  yukselme: "Yükselme",
  departman: "Departman Değiştirme",
  "is-degistirme": "İş Değiştirme",
};

export const metadata: Metadata = {
  title: "İş Hayatı · Benay HR",
  description:
    "İş hayatının görünmeyen kuralları: işe alımın görünmeyen tarafı, iş değiştirme, terfi, görünürlük, yönetici-çalışan ilişkileri ve iş psikolojisi üzerine gerçek gözleme dayalı bakış açıları.",
};

const isHayatiPosts = blogPosts.filter((p) => p.category === "is-hayati");

export default function IsHayatiPage() {
  return (
    <div className="bg-bg">
      <div className="border-b border-hairline py-16">
        <Container className="max-w-2xl">
          <ScrollReveal>
            <span className="font-sans text-[11px] font-bold tracking-[0.16em] text-gold-deep uppercase">
              İş Hayatı
            </span>
            <h1 className="mt-3 font-display text-3xl font-medium text-navy-deep sm:text-4xl">
              İş hayatı sadece görevlerden ibaret değil.
            </h1>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
              Kimse sana söylemez ama herkes bilir: terfi, görünürlük, iş
              değiştirme ve yöneticinle ilişkin kadar iyi olduğun işi de
              belirler. Burada görünenin arkasındaki mekanizmayı konuşuyoruz.
            </p>
          </ScrollReveal>
        </Container>
      </div>

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
        <section className="bg-surface py-20">
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

      <section className="border-t border-hairline bg-navy-deep py-20">
        <ScrollReveal>
          <Container className="flex flex-col items-center gap-5 text-center">
            <h2 className="max-w-xl font-display text-2xl font-medium text-surface sm:text-3xl">
              Nerede olduğunu netleştirmek istersen, Kariyer Check-Up&apos;la başla.
            </h2>
            <p className="max-w-lg text-[15px] leading-relaxed text-surface/70">
              13 soru, 3 dakika. Seni gerçekten nerede zorladığını görmek her
              zaman bir sohbetten daha nettir.
            </p>
            <MagneticLink
              href="/kariyer-testi"
              className={buttonVariants({ variant: "gold", size: "lg", className: "mt-2" })}
            >
              Ücretsiz Kariyer Check-Up
            </MagneticLink>
          </Container>
        </ScrollReveal>
      </section>
    </div>
  );
}
