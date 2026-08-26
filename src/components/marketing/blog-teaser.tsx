import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { blogCategories, blogPosts } from "@/features/blog/data/posts";

const featured = blogPosts.slice(0, 3);

export function BlogTeaser() {
  return (
    <section className="bg-bg py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Blog" title="Kariyer ve İK üzerine yazılar" />
          <Link
            href="/blog"
            className="mb-1 inline-flex items-center gap-1.5 text-[14px] font-semibold text-navy-deep hover:text-gold-deep"
          >
            Tüm Yazılar
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-(--radius-lg) border border-hairline bg-hairline sm:grid-cols-3">
          {featured.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.category}/${post.slug}`}
              className="group flex flex-col justify-between gap-8 bg-surface p-7 transition-colors hover:bg-gold-soft/30"
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
        </div>
      </Container>
    </section>
  );
}
