"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Compass, Target } from "lucide-react";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { hrMapLevels } from "@/features/hr-map/data/levels";

export function HrMapExplorer() {
  const [active, setActive] = React.useState(hrMapLevels[0].id);
  const level = hrMapLevels.find((l) => l.id === active)!;

  return (
    <div>
      <div className="grid max-w-md grid-cols-2 gap-2">
        {hrMapLevels.map((l, i) => (
          <button
            key={l.id}
            type="button"
            onClick={() => setActive(l.id)}
            className={cn(
              "flex flex-col items-start gap-1 rounded-(--radius-md) border px-4 py-3 text-left transition-colors",
              active === l.id
                ? "border-navy-deep bg-navy-deep text-surface"
                : "border-hairline bg-surface text-ink hover:border-navy/30"
            )}
          >
            <span
              className={cn(
                "font-mono text-[10px] tracking-wide",
                active === l.id ? "text-gold" : "text-gold-deep"
              )}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-[13.5px] font-medium">{l.label}</span>
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        <Card>
          <div className="flex items-center gap-2.5">
            <Compass className="size-4.5 text-gold-deep" />
            <h3 className="font-display text-base font-medium text-navy-deep">
              Bu Seviyedeki Roller
            </h3>
          </div>
          <ul className="mt-4 flex flex-col gap-2">
            {level.roles.map((r) => (
              <li key={r} className="text-[14px] text-ink">
                {r}
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <div className="flex items-center gap-2.5">
            <Target className="size-4.5 text-gold-deep" />
            <h3 className="font-display text-base font-medium text-navy-deep">
              Geliştirilmesi Gereken Yetkinlikler
            </h3>
          </div>
          <ul className="mt-4 flex flex-col gap-2.5">
            {level.competencies.map((c) => (
              <li key={c} className="flex items-start gap-2 text-[13.5px] text-ink">
                <span className="mt-1.5 size-1 shrink-0 rounded-full bg-gold-deep" />
                {c}
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <div className="flex items-center gap-2.5">
            <BookOpen className="size-4.5 text-gold-deep" />
            <h3 className="font-display text-base font-medium text-navy-deep">
              Önerilen Kaynaklar
            </h3>
          </div>
          <ul className="mt-4 flex flex-col gap-2.5">
            {level.resources.map((r) => (
              <li key={r} className="flex items-start gap-2 text-[13.5px] text-ink">
                <span className="mt-1.5 size-1 shrink-0 rounded-full bg-gold-deep" />
                {r}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card className="mt-5 flex flex-col gap-4 border-gold/30 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[13px] font-medium text-gold-deep">
            Bu seviyeden bir sonrakine geçmek mi istiyorsun?
          </p>
          <p className="mt-1 text-[14px] text-ink-muted">
            Önerilen adımlar: {level.recommendedActions[0]}
          </p>
        </div>
        <Link
          href="/ik-haritasi/mentorluk"
          className={buttonVariants({ variant: "gold", className: "shrink-0" })}
        >
          Mentörlük Talep Et
          <ArrowRight className="size-4" />
        </Link>
      </Card>
    </div>
  );
}
