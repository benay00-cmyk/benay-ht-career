import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { HorizontalCarousel } from "@/components/ui/horizontal-carousel";
import { blogCategories, blogPosts } from "@/features/blog/data/posts";

const featured = blogPosts.slice(0, 3);

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
              className="group flex h-full flex-col justify-between gap-8 rounded-(--radius-lg) border border-hairline bg-surface p-7 transition-[background-color,transform,box-shadow] duration-(--motion-normal) ease-(--ease-out) hover:-translate-y-2 hover:bg-gold-soft/30 hover:shadow-(--shadow-card)"
            >
              <span className="font-mono text-[11px] tracking-[0.14em] text-gold-deep uppercase">
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
