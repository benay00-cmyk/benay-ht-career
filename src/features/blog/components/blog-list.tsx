"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { blogCategories, blogPosts } from "@/features/blog/data/posts";

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

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.category}/${post.slug}`}
            className="group flex flex-col justify-between gap-6 rounded-(--radius-lg) border border-hairline bg-surface p-6 transition-colors hover:border-gold/40"
          >
            <div>
              <span className="font-mono text-[11px] tracking-[0.14em] text-gold-deep uppercase">
                {blogCategories.find((c) => c.slug === post.category)?.label}
              </span>
              <h3 className="mt-3 font-display text-lg font-medium text-navy-deep">
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
