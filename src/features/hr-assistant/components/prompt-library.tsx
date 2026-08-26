"use client";

import * as React from "react";
import { Check, Copy, Lock } from "lucide-react";

import { cn } from "@/lib/utils";
import { promptCategories } from "@/features/hr-assistant/data/prompts";

const FREE_PROMPTS_PER_CATEGORY = 2;

function PromptCard({ title, text }: { title: string; text: string }) {
  const [copied, setCopied] = React.useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="flex flex-col gap-3 rounded-(--radius-md) border border-hairline bg-surface p-5">
      <div className="flex items-start justify-between gap-3">
        <h4 className="font-display text-[15px] font-medium text-navy-deep">
          {title}
        </h4>
        <button
          type="button"
          onClick={handleCopy}
          className={cn(
            "flex shrink-0 items-center gap-1.5 rounded-(--radius-sm) border px-2.5 py-1 text-[12px] font-medium transition-colors",
            copied
              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border-hairline text-ink-muted hover:border-gold/40 hover:text-gold-deep"
          )}
        >
          {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
          {copied ? "Kopyalandı" : "Kopyala"}
        </button>
      </div>
      <p className="text-[13.5px] leading-relaxed text-ink-muted">{text}</p>
    </div>
  );
}

function LockedPromptCard({ title }: { title: string }) {
  return (
    <div className="relative flex flex-col gap-3 overflow-hidden rounded-(--radius-md) border border-dashed border-hairline bg-surface/60 p-5">
      <div className="flex items-start justify-between gap-3">
        <h4 className="font-display text-[15px] font-medium text-navy-deep/70">
          {title}
        </h4>
        <span className="flex shrink-0 items-center gap-1.5 rounded-(--radius-sm) border border-gold/30 bg-gold-soft/40 px-2.5 py-1 text-[12px] font-medium text-gold-deep">
          <Lock className="size-3.5" />
          Kilitli
        </span>
      </div>
      <p className="select-none text-[13.5px] leading-relaxed text-ink-muted/50 blur-[3px]">
        Bu promptun tam metnini görmek için yakında eklenecek üyelik ile
        erişim açılacak. Şimdilik her kategoride ilk iki prompt ücretsizdir.
      </p>
    </div>
  );
}

export function PromptLibrary() {
  const [active, setActive] = React.useState(promptCategories[0].id);
  const activeCategory = promptCategories.find((c) => c.id === active)!;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {promptCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActive(cat.id)}
            className={cn(
              "rounded-(--radius-sm) border px-3.5 py-1.5 text-[13px] font-medium transition-colors",
              active === cat.id
                ? "border-navy-deep bg-navy-deep text-surface"
                : "border-hairline text-ink-muted hover:border-navy/30 hover:text-ink"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {activeCategory.prompts.map((p, i) =>
          i < FREE_PROMPTS_PER_CATEGORY ? (
            <PromptCard key={p.title} {...p} />
          ) : (
            <LockedPromptCard key={p.title} title={p.title} />
          )
        )}
      </div>
    </div>
  );
}
