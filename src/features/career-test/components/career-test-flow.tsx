"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle2, AlertTriangle, RotateCcw } from "lucide-react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { questions } from "@/features/career-test/data/questions";
import { scoreTest, type TestResult } from "@/features/career-test/lib/scoring";

function ScoreRing({ value }: { value: number }) {
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = requestAnimationFrame(function tick(now = performance.now()) {
      if (prefersReduced) {
        setDisplay(value);
        return;
      }
      const duration = 900;
      const start = now;
      function step(current: number) {
        const progress = Math.min(1, (current - start) / duration);
        setDisplay(Math.round(progress * value));
        if (progress < 1) frame = requestAnimationFrame(step);
      }
      frame = requestAnimationFrame(step);
    });
    return () => cancelAnimationFrame(frame);
  }, [value]);

  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (display / 100) * circumference;

  return (
    <div className="relative flex size-36 shrink-0 items-center justify-center">
      <svg viewBox="0 0 120 120" className="size-full -rotate-90">
        <circle cx="60" cy="60" r="54" fill="none" stroke="var(--light-gray)" strokeWidth="8" />
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.2s linear" }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="font-display text-3xl font-medium text-navy-deep">{display}</span>
        <span className="text-[11px] text-ink-muted">/ 100</span>
      </div>
    </div>
  );
}

function ResultScreen({ result }: { result: TestResult }) {
  return (
    <div className="flex flex-col gap-6">
      <Card
        className="animate-entrance flex flex-col items-center gap-5 py-10 text-center sm:flex-row sm:items-center sm:text-left"
      >
        <ScoreRing value={result.overallScore} />
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[11px] tracking-[0.14em] text-gold-deep uppercase">
            Kariyer Skorun
          </span>
          <h2 className="font-display text-2xl font-medium text-navy-deep">
            Ana problemin: {result.mainProblem.label}
          </h2>
          <p className="text-[14.5px] leading-relaxed text-ink-muted">
            {result.mainProblem.message}
          </p>
        </div>
      </Card>

      <div className="grid gap-5 sm:grid-cols-2">
        {result.strengths.length > 0 && (
          <Card className="animate-entrance" style={{ animationDelay: "80ms" }}>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="size-4.5 text-emerald-600" />
              <h3 className="font-display text-base font-medium text-navy-deep">Güçlü Yönlerin</h3>
            </div>
            <ul className="mt-4 flex flex-col gap-2.5">
              {result.strengths.map((s) => (
                <li key={s.id} className="flex items-center justify-between text-[13.5px] text-ink">
                  {s.label}
                  <span className="font-mono text-navy-deep">{s.score}/100</span>
                </li>
              ))}
            </ul>
          </Card>
        )}

        {result.risks.length > 0 && (
          <Card className="animate-entrance" style={{ animationDelay: "140ms" }}>
            <div className="flex items-center gap-2.5">
              <AlertTriangle className="size-4.5 text-amber-600" />
              <h3 className="font-display text-base font-medium text-navy-deep">Riskli Alanların</h3>
            </div>
            <ul className="mt-4 flex flex-col gap-2.5">
              {result.risks.map((r) => (
                <li key={r.id} className="flex items-center justify-between text-[13.5px] text-ink">
                  {r.label}
                  <span className="font-mono text-navy-deep">{r.score}/100</span>
                </li>
              ))}
            </ul>
          </Card>
        )}
      </div>

      <Card className="animate-entrance" style={{ animationDelay: "200ms" }}>
        <h3 className="font-display text-base font-medium text-navy-deep">Tüm Kategoriler</h3>
        <div className="mt-4 flex flex-col gap-4">
          {result.categories.map((c) => (
            <div key={c.id}>
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-ink-muted">{c.label}</span>
                <span className="font-mono text-navy-deep">{c.score}/100</span>
              </div>
              <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-hairline">
                <div
                  className="h-full rounded-full bg-gold-deep transition-[width] duration-700 ease-(--ease-out)"
                  style={{ width: `${c.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card
        className="animate-entrance flex flex-col items-center gap-4 bg-navy-deep py-10 text-center"
        style={{ animationDelay: "260ms" }}
      >
        <p className="max-w-md font-display text-xl font-medium text-surface">
          Problemini bulduk. Şimdi neden olduğunu öğren.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href={result.nextStep.href}
            className={buttonVariants({ variant: "gold", size: "lg" })}
          >
            {result.nextStep.label}
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-surface hover:text-gold"
          >
            Ücretsiz Kaynaklara Göz At
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </Card>
    </div>
  );
}

const SELECT_FEEDBACK_MS = 200;

export function CareerTestFlow() {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState<Record<string, number>>({});
  const [result, setResult] = React.useState<TestResult | null>(null);
  const [selectedPoints, setSelectedPoints] = React.useState<number | null>(null);

  const question = questions[step];
  const progress = Math.round((step / questions.length) * 100);
  const answeredPoints = answers[question.id];

  function selectAnswer(points: number) {
    if (selectedPoints !== null) return;
    setSelectedPoints(points);

    window.setTimeout(() => {
      const next = { ...answers, [question.id]: points };
      setAnswers(next);
      setSelectedPoints(null);

      if (step + 1 < questions.length) {
        setStep(step + 1);
      } else {
        setResult(scoreTest(next));
      }
    }, SELECT_FEEDBACK_MS);
  }

  function goBack() {
    if (step === 0) return;
    setStep(step - 1);
  }

  function restart() {
    setStep(0);
    setAnswers({});
    setResult(null);
  }

  if (result) {
    return (
      <div className="flex flex-col gap-4">
        <ResultScreen result={result} />
        <Button variant="outline" onClick={restart} className="w-fit self-center">
          <RotateCcw className="size-3.5" aria-hidden="true" />
          Testi Tekrar Yap
        </Button>
      </div>
    );
  }

  return (
    <Card className="flex flex-col gap-7 overflow-hidden">
      <div>
        <div className="flex items-center justify-between text-[12.5px] text-ink-muted">
          <span>
            Soru {step + 1} / {questions.length}
          </span>
          <span>%{progress}</span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-hairline">
          <div
            className="h-full rounded-full bg-gold-deep transition-[width] duration-(--motion-normal) ease-(--ease-out)"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div key={question.id} className="animate-slide-in flex flex-col gap-7">
        <h2 className="font-display text-xl font-medium text-navy-deep sm:text-2xl">
          {question.text}
        </h2>

        <div className="flex flex-col gap-3">
          {question.options.map((opt) => {
            const isChosen =
              selectedPoints === opt.points || (selectedPoints === null && answeredPoints === opt.points);
            return (
              <button
                key={opt.label}
                type="button"
                onClick={() => selectAnswer(opt.points)}
                disabled={selectedPoints !== null}
                className={cn(
                  "rounded-(--radius-sm) border px-5 py-3.5 text-left text-[14.5px] text-ink transition-[transform,border-color,background-color] duration-(--motion-fast) ease-(--ease-out)",
                  isChosen
                    ? "scale-[1.01] border-gold-deep bg-gold-soft/30"
                    : "border-hairline bg-bg hover:border-gold-deep hover:bg-gold-soft/20"
                )}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>

      {step > 0 && (
        <button
          type="button"
          onClick={goBack}
          className="inline-flex w-fit items-center gap-1.5 text-[13px] font-medium text-ink-muted hover:text-navy-deep"
        >
          <ArrowLeft className="size-3.5" aria-hidden="true" />
          Önceki Soru
        </button>
      )}
    </Card>
  );
}
