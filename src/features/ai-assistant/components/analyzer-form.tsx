"use client";

import * as React from "react";
import { UploadCloud, Loader2, FileText, X, PenLine, Paperclip } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { AnalysisResult } from "@/lib/ai/schema";
import { AnalysisResult as AnalysisResultView } from "@/features/ai-assistant/components/analysis-result";

type Status = "idle" | "loading" | "error";
type CvMode = "paste" | "upload";

const ACCEPTED_TYPES =
  "application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.pdf,.docx";

export function AnalyzerForm() {
  const [jobDescription, setJobDescription] = React.useState("");
  const [cvMode, setCvMode] = React.useState<CvMode>("paste");
  const [cvText, setCvText] = React.useState("");
  const [file, setFile] = React.useState<File | null>(null);
  const [status, setStatus] = React.useState<Status>("idle");
  const [error, setError] = React.useState<string | null>(null);
  const [result, setResult] = React.useState<AnalysisResult | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  function handleFileSelect(selected: File | undefined) {
    if (!selected) return;

    const isPdf = selected.type === "application/pdf";
    const isDocx =
      selected.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      selected.name.toLowerCase().endsWith(".docx");

    if (!isPdf && !isDocx) {
      setError("CV yalnızca PDF ya da Word (.docx) formatında yüklenebilir.");
      return;
    }

    if (selected.size > 4 * 1024 * 1024) {
      setError("CV dosyası çok büyük. Maksimum dosya boyutu 4 MB.");
      return;
    }

    setError(null);
    setFile(selected);
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);

    if (jobDescription.trim().length < 50) {
      setError("İş ilanı metni çok kısa görünüyor, tamamını yapıştırdığınızdan emin olun.");
      return;
    }

    setStatus("loading");

    const formData = new FormData();
    formData.append("jobDescription", jobDescription);

    if (cvMode === "paste" && cvText.trim()) {
      formData.append("cvText", cvText);
    } else if (cvMode === "upload" && file) {
      formData.append("cv", file);
    }

    try {
      const response = await fetch("/api/ai-asistan/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error ?? "Analiz sırasında bir hata oluştu.");
        setStatus("idle");
        return;
      }

      setResult(data.result);
      setStatus("idle");
    } catch {
      setError("Sunucuya bağlanılamadı, lütfen internet bağlantınızı kontrol edin.");
      setStatus("idle");
    }
  }

  if (result) {
    return (
      <div className="flex flex-col gap-6">
        <AnalysisResultView result={result} />
        <Button
          variant="outline"
          onClick={() => {
            setResult(null);
            setFile(null);
            setCvText("");
            setJobDescription("");
          }}
          className="w-fit"
        >
          Yeni Analiz Yap
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <Card>
        <label htmlFor="job-description" className="text-[13.5px] font-medium text-ink">
          İş İlanı <span className="text-gold-deep">*</span>
        </label>
        <Textarea
          id="job-description"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="LinkedIn, Kariyer.net veya şirket kariyer sayfasından ilan metnini buraya yapıştır..."
          rows={7}
          className="mt-3"
        />
        <p className="mt-2 text-[12px] text-ink-muted">
          {jobDescription.trim().length} karakter
        </p>
      </Card>

      <Card>
        <div className="flex items-center justify-between">
          <label className="text-[13.5px] font-medium text-ink">
            CV <span className="text-ink-muted font-normal">(isteğe bağlı)</span>
          </label>
          <div className="flex gap-1 rounded-(--radius-sm) border border-hairline p-1">
            <button
              type="button"
              onClick={() => setCvMode("paste")}
              className={cn(
                "flex items-center gap-1.5 rounded-(--radius-sm) px-3 py-1.5 text-[12.5px] font-medium transition-colors",
                cvMode === "paste"
                  ? "bg-navy-deep text-surface"
                  : "text-ink-muted hover:text-ink"
              )}
            >
              <PenLine className="size-3.5" />
              Metin Yapıştır
            </button>
            <button
              type="button"
              onClick={() => setCvMode("upload")}
              className={cn(
                "flex items-center gap-1.5 rounded-(--radius-sm) px-3 py-1.5 text-[12.5px] font-medium transition-colors",
                cvMode === "upload"
                  ? "bg-navy-deep text-surface"
                  : "text-ink-muted hover:text-ink"
              )}
            >
              <Paperclip className="size-3.5" />
              PDF / Word Yükle
            </button>
          </div>
        </div>

        {cvMode === "paste" ? (
          <Textarea
            value={cvText}
            onChange={(e) => setCvText(e.target.value)}
            placeholder="CV metnini buraya yapıştır..."
            rows={7}
            className="mt-3"
          />
        ) : (
          <>
            <input
              ref={fileInputRef}
              type="file"
              accept={ACCEPTED_TYPES}
              className="hidden"
              onChange={(e) => handleFileSelect(e.target.files?.[0])}
            />
            {file ? (
              <div className="mt-3 flex items-center justify-between rounded-(--radius-sm) border border-hairline bg-bg px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <FileText className="size-4.5 text-gold-deep" />
                  <span className="text-[13.5px] text-ink">{file.name}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setFile(null)}
                  aria-label="Dosyayı kaldır"
                  className="text-ink-muted hover:text-ink"
                >
                  <X className="size-4" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="mt-3 flex w-full flex-col items-center gap-2 rounded-(--radius-md) border border-dashed border-hairline bg-bg px-6 py-10 text-center transition-colors hover:border-gold/50"
              >
                <UploadCloud className="size-6 text-gold-deep" />
                <span className="text-[13.5px] font-medium text-ink">
                  Tıkla veya sürükle bırak
                </span>
                <span className="text-[12px] text-ink-muted">PDF ya da Word (.docx), maksimum 4 MB</span>
              </button>
            )}
          </>
        )}

        <p className="mt-3 text-[12px] leading-relaxed text-ink-muted">
          CV eklemezsen de ilan üzerinden şirket araştırması, mülakat ipuçları ve
          işverene sorulacak sorular gibi bölümleri görebilirsin. CV eklersen
          ATS skoru, güçlü/eksik yönler ve CV önerileri de eklenir.
        </p>
      </Card>

      {error && (
        <p
          role="alert"
          className="rounded-(--radius-sm) bg-rose-50 px-4 py-3 text-[13.5px] text-rose-700"
        >
          {error}
        </p>
      )}

      <Button
        type="submit"
        variant="gold"
        size="lg"
        disabled={status === "loading"}
        className="w-fit"
      >
        {status === "loading" && <Loader2 className="size-4 animate-spin" />}
        {status === "loading" ? "Analiz Ediliyor..." : "Analiz Et"}
      </Button>
    </form>
  );
}
