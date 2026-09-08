import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { BlogList } from "@/features/blog/components/blog-list";

export const metadata: Metadata = {
  title: "Kariyer Merkezi · Benay HR",
  description:
    "Kariyer, İK, yapay zekâ ve iş hayatı üzerine uygulanabilir rehberler.",
};

export default function BlogPage() {
  return (
    <div className="bg-bg">
      <div className="border-b border-hairline py-16">
        <Container className="max-w-2xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] tracking-[0.16em] text-gold-deep uppercase">
              Kariyer Merkezi
            </span>
            <h1 className="mt-3 font-display text-3xl font-medium text-navy-deep sm:text-4xl">
              Ücretsiz kariyer ve İK rehberleri
            </h1>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
              Kariyer, İK, yapay zekâ ve iş hayatı üzerine uygulanabilir,
              araştırmaya dayalı rehberler — her biri ilgili aracımıza bağlı.
            </p>
          </ScrollReveal>
        </Container>
      </div>

      <Container className="py-14">
        <BlogList />
      </Container>
    </div>
  );
}
