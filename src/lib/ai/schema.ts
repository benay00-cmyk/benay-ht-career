import { z } from "zod";

const starStorySchema = z.object({
  situation: z.string().describe("Durum: kısa bağlam"),
  task: z.string().describe("Görev: adayın sorumluluğu"),
  action: z.string().describe("Eylem: atılan somut adımlar"),
  result: z.string().describe("Sonuç: ölçülebilir çıktı"),
});

const sentenceChangeSchema = z.object({
  original: z.string().describe("CV'deki mevcut cümle ya da ifade"),
  suggested: z.string().describe("Yerine önerilen, daha güçlü cümle"),
});

export const analysisResultSchema = z.object({
  companySector: z
    .string()
    .optional()
    .default("")
    .describe("İlan metninden çıkarılabiliyorsa şirketin sektörü, çıkarılamıyorsa kısa bir not"),
  companyCulture: z
    .string()
    .optional()
    .default("")
    .describe("İlan metninden anlaşılan şirket kültürü/çalışma tarzı ipuçları"),
  companyRedFlags: z
    .array(z.string())
    .optional()
    .default([])
    .describe("İlan metninde dikkat çeken, sorgulanmaya değer ifadeler (belirsiz maaş, aşırı esneklik beklentisi vb.). Yoksa boş dizi döndür."),
  atsScore: z
    .number()
    .min(0)
    .max(100)
    .optional()
    .default(0)
    .describe("CV verildiyse ATS uyumluluk skoru 0-100; CV verilmediyse 0"),
  hiringLikelihood: z
    .number()
    .min(0)
    .max(100)
    .optional()
    .default(0)
    .describe("CV verildiyse ilana göre işe alınma olasılığı tahmini 0-100; CV verilmediyse 0"),
  applicationReadiness: z
    .enum(["hazir", "gelistirilmeli", "hazir_degil", "cv_yok"])
    .optional()
    .default("cv_yok")
    .describe("CV verilmediyse 'cv_yok', verildiyse başvurunun hazırlık durumu"),
  strengths: z
    .array(z.string())
    .optional()
    .default([])
    .describe("CV verildiyse ilana göre güçlü yönler; verilmediyse boş dizi"),
  gaps: z
    .array(z.string())
    .optional()
    .default([])
    .describe("CV verildiyse ilanın aradığı ama CV'de görünmeyen eksikler; verilmediyse boş dizi"),
  cvSentenceChanges: z
    .array(sentenceChangeSchema)
    .optional()
    .default([])
    .describe("CV verildiyse en fazla 5 adet birebir cümle/ifade değişikliği önerisi; verilmediyse boş dizi"),
  missingKeywords: z
    .array(z.string())
    .optional()
    .default([])
    .describe("CV verildiyse ilanda geçen ama CV'de eksik anahtar kelimeler; verilmediyse boş dizi"),
  interviewTips: z
    .array(z.string())
    .optional()
    .default([])
    .describe("Bu ilana özel mülakat hazırlık ipuçları (CV olmasa da verilebilir)"),
  starStories: z
    .array(starStorySchema)
    .optional()
    .default([])
    .describe("CV verildiyse CV'deki deneyimlerden 2-3 örnek STAR hikayesi taslağı; verilmediyse boş dizi"),
  likelyQuestions: z
    .array(z.string())
    .optional()
    .default([])
    .describe("Bu ilana özel sorulması muhtemel mülakat soruları"),
  questionsToAskEmployer: z
    .array(z.string())
    .optional()
    .default([])
    .describe("Adayın mülakatta işverene sorabileceği 3-5 akıllıca soru"),
  summary: z
    .string()
    .optional()
    .default("")
    .describe("Analizin 2-3 cümlelik Türkçe özeti, samimi ama profesyonel bir dille"),
});

export type AnalysisResult = z.infer<typeof analysisResultSchema>;
export type StarStory = z.infer<typeof starStorySchema>;
export type SentenceChange = z.infer<typeof sentenceChangeSchema>;

export const analyzeRequestSchema = z.object({
  jobDescription: z
    .string()
    .min(50, "İş ilanı metni çok kısa görünüyor, tamamını yapıştırdığınızdan emin olun.")
    .max(8000, "İş ilanı metni çok uzun, lütfen ilan metnini kısaltın."),
  cvText: z
    .string()
    .max(20000, "CV metni çok uzun.")
    .optional(),
});

export const hrQuestionSchema = z.object({
  question: z
    .string()
    .min(10, "Sorunuzu biraz daha detaylandırır mısınız?")
    .max(1000, "Sorunuz çok uzun, lütfen kısaltın."),
});
