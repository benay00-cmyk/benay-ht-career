import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { blogCategories, blogPosts } from "@/features/blog/data/posts";

type Params = { kategori: string; slug: string };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ kategori: post.category, slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return { title: "Yazı Bulunamadı · Benay HR" };

  return {
    title: `${post.title} · Benay HR`,
    description: post.metaDescription,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { kategori, slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug && p.category === kategori);

  if (!post) notFound();

  const categoryLabel = blogCategories.find((c) => c.slug === post.category)?.label;

  return (
    <div className="bg-bg">
      <div className="border-b border-hairline py-16">
        <Container className="max-w-2xl">
          <span className="font-mono text-[11px] tracking-[0.16em] text-gold-deep uppercase">
            {categoryLabel}
          </span>
          <h1 className="mt-3 font-display text-3xl font-medium text-navy-deep sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-3 text-[14px] text-ink-muted">{post.readTime}</p>
        </Container>
      </div>

      <Container className="max-w-2xl py-14">
        <article className="flex flex-col gap-10">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-xl font-medium text-navy-deep">
                {section.heading}
              </h2>
              <div className="mt-3 flex flex-col gap-3">
                {section.body.map((paragraph, i) => (
                  <p key={i} className="text-[15px] leading-relaxed text-ink">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}

          <section className="rounded-(--radius-lg) border border-gold/30 bg-navy-deep p-7">
            <p className="text-[15px] leading-relaxed text-surface">
              {post.cta.text}
            </p>
            <Link
              href={post.cta.href}
              className={buttonVariants({ variant: "gold", className: "mt-5 w-fit" })}
            >
              {post.cta.label}
              <ArrowRight className="size-4" />
            </Link>
          </section>

          {post.faq.length > 0 && (
            <section>
              <h2 className="font-display text-xl font-medium text-navy-deep">
                Sıkça Sorulan Sorular
              </h2>
              <div className="mt-4 flex flex-col gap-4">
                {post.faq.map((item) => (
                  <div key={item.question} className="border-b border-hairline pb-4">
                    <p className="text-[14.5px] font-medium text-ink">
                      {item.question}
                    </p>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-ink-muted">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <Link
            href="/blog"
            className="text-[13.5px] font-medium text-navy-deep hover:text-gold-deep"
          >
            ← Tüm yazılara dön
          </Link>
        </article>
      </Container>
    </div>
  );
}
