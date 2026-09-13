"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { blogCategories, blogPosts } from "@/features/blog/data/posts";

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

export function BlogList() {
  const [active, setActive] = React.useState<string | null>(null);

  const filtered = active
    ? blogPosts.filter((p) => p.category === active)
    : blogPosts;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActive(null)}
          className={cn(
            "rounded-(--radius-sm) border px-3.5 py-1.5 text-[13px] font-medium transition-colors",
            active === null
              ? "border-navy-deep bg-navy-deep text-surface"
              : "border-hairline text-ink-muted hover:border-navy/30 hover:text-ink"
          )}
        >
          Tümü
        </button>
        {blogCategories.map((cat) => (
          <button
            key={cat.slug}
            type="button"
            onClick={() => setActive(cat.slug)}
            className={cn(
              "rounded-(--radius-sm) border px-3.5 py-1.5 text-[13px] font-medium transition-colors",
              active === cat.slug
                ? "border-navy-deep bg-navy-deep text-surface"
                : "border-hairline text-ink-muted hover:border-navy/30 hover:text-ink"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post, i) => (
          <Link
            key={post.slug}
            href={`/blog/${post.category}/${post.slug}`}
            style={{ animationDelay: `${(i % 6) * 70}ms` }}
            className={cn(
              "animate-entrance group relative flex min-h-[15rem] flex-col justify-between gap-6 overflow-hidden rounded-(--radius-lg) border border-hairline p-7 transition-[transform,box-shadow,border-color] duration-(--motion-normal) ease-(--ease-out) before:absolute before:inset-x-0 before:top-0 before:h-1.5 hover:-translate-y-3 hover:scale-[1.02] hover:border-gold/50 hover:shadow-[0_1px_2px_rgba(23,43,58,0.08),0_28px_56px_rgba(23,43,58,0.2)]",
              categoryAccent[post.category],
              categoryTopBar[post.category]
            )}
          >
            <div>
              <span className="font-mono text-[11px] tracking-[0.14em] text-gold-deep uppercase">
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
    </div>
  );
}
