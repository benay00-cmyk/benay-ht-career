import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { HorizontalCarousel } from "@/components/ui/horizontal-carousel";
import { cn } from "@/lib/utils";
import { blogCategories, blogPosts } from "@/features/blog/data/posts";

const featured = blogPosts.slice(0, 3);

const categoryAccent: Record<string, string> = {
  kariyer: "bg-gradient-to-br from-gold-soft/80 to-bg",
  ik: "bg-gradient-to-br from-sage/45 to-bg",
  "ai-hr": "bg-gradient-to-br from-deep-navy/20 to-bg",
  "is-hayati": "bg-gradient-to-br from-beige/70 to-bg",
};

const categoryTopBar: Record<string, string> = {
  kariyer: "before:bg-gold",
  ik: "before:bg-navy-deep",
  "ai-hr": "before:bg-deep-navy",
  "is-hayati": "before:bg-beige",
};

export function BlogTeaser() {
  return (
    <section className="bg-bg py-24">
      <Container>
        <ScrollReveal className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Kariyer Merkezi" title="Ücretsiz kariyer ve İK rehberleri" />
          <Link
            href="/blog"
            className="mb-1 inline-flex items-center gap-1.5 text-[14px] font-semibold text-navy-deep hover:text-gold-deep"
          >
            Tüm Yazılar
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </ScrollReveal>

        <HorizontalCarousel className="mt-10">
          {featured.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.category}/${post.slug}`}
              className={cn(
                "group relative flex h-full flex-col justify-between gap-8 overflow-hidden rounded-(--radius-lg) border border-hairline p-7 transition-[transform,box-shadow,border-color] duration-(--motion-normal) ease-(--ease-out) before:absolute before:inset-x-0 before:top-0 before:h-1.5 hover:-translate-y-2 hover:border-gold/50 hover:shadow-(--shadow-card)",
                categoryAccent[post.category],
                categoryTopBar[post.category]
              )}
            >
              <span className="font-sans text-[11px] font-bold tracking-[0.14em] text-gold-deep uppercase">
                {blogCategories.find((c) => c.slug === post.category)?.label}
              </span>
              <h3 className="font-display text-lg font-medium text-navy-deep">
                {post.title}
              </h3>
              <div className="flex items-center justify-between text-[13px] text-ink-muted">
                {post.readTime}
                <ArrowRight
                  className="size-4 text-navy-deep transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </div>
            </Link>
          ))}
        </HorizontalCarousel>
      </Container>
    </section>
  );
}
