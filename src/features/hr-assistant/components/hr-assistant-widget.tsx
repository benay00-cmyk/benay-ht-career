"use client";

import * as React from "react";
import { Loader2, Send, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const exampleQuestions = [
  "Yetkinlik bazlı mülakat nasıl tasarlanır?",
  "İşe alım KPI'ları nelerdir?",
  "360 derece performans değerlendirmesi nasıl kurulur?",
  "İK'da ChatGPT nasıl kullanılabilir?",
];

export function HrAssistantWidget() {
  const [question, setQuestion] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [answer, setAnswer] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  async function ask(q: string) {
    if (q.trim().length < 10) {
      setError("Sorunuzu biraz daha detaylandırır mısınız?");
      return;
    }

    setLoading(true);
    setError(null);
    setAnswer(null);

    try {
      const response = await fetch("/api/ik-asistan/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error ?? "Bir hata oluştu.");
        return;
      }

      setAnswer(data.answer);
    } catch {
      setError("Sunucuya bağlanılamadı, lütfen internet bağlantınızı kontrol edin.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-(--radius-lg) border border-gold/30 bg-navy-deep p-7 sm:p-9">
      <div className="flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
          <Sparkles className="size-4.5" />
        </span>
        <h3 className="font-display text-xl font-medium text-surface">
          İK Yapay Zeka Asistanı
        </h3>
      </div>

      {!answer && (
        <div className="mt-5 flex flex-wrap gap-2">
          {exampleQuestions.map((q) => (
            <button
              key={q}
              type="button"
              onClick={() => {
                setQuestion(q);
                ask(q);
              }}
              className="rounded-(--radius-sm) border border-surface/15 px-3 py-1.5 text-left text-[12.5px] text-surface/70 transition-colors hover:border-gold/40 hover:text-surface"
            >
              {q}
            </button>
          ))}
        </div>
      )}

      {answer && (
        <div className="mt-5 rounded-(--radius-md) bg-navy-midnight p-5 text-[14px] leading-relaxed whitespace-pre-line text-surface/85">
          {answer}
        </div>
      )}

      {error && (
        <p role="alert" className="mt-4 text-[13px] text-rose-300">
          {error}
        </p>
      )}

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <Textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="İK ile ilgili sorunu yaz..."
          rows={2}
          className="border-surface/15 bg-navy-midnight text-surface placeholder:text-surface/40 focus-visible:border-gold"
        />
        <Button
          type="button"
          variant="gold"
          onClick={() => ask(question)}
          disabled={loading}
          className="shrink-0"
        >
          {loading ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <Send className="size-4" />
          )}
          Sor
        </Button>
      </div>
    </div>
  );
}
