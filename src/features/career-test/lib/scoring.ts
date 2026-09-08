import { questions, categoryLabels, type CategoryId } from "@/features/career-test/data/questions";

export type CategoryResult = {
  id: CategoryId;
  label: string;
  score: number;
};

export type TestResult = {
  overallScore: number;
  categories: CategoryResult[];
  mainProblem: { label: string; message: string };
  strengths: CategoryResult[];
  risks: CategoryResult[];
  nextStep: { label: string; href: string };
};

const diagnosisByCategory: Record<CategoryId, string> = {
  basvuru_stratejisi:
    "Ana problemin CV'n değil — başvuru stratejinin hedefsiz olması. Rastgele çok sayıda ilana başvurmak yerine net bir hedef pozisyon ve sektör belirleyip ona göre başvurmak, dönüş oranını artırır.",
  cv_profil:
    "CV'n ve dijital profilin güncellenmeyi bekliyor. İçerik iyi olsa bile, ATS sistemleri ve işe alım uzmanları eskimiş ya da ilana uyumsuz bir CV'yi ilk saniyelerde eleyebiliyor.",
  mulakat:
    "Başvuruların dönüş alıyor ama mülakat aşamasında kayboluyor gibi görünüyor. Sorun CV'n değil, mülakat hazırlığın ve kendini ifade etme biçimin.",
  kariyer_netligi:
    "Teknik olarak çoğu şey yolunda görünüyor ama kariyer hedefin henüz netleşmemiş. Bu belirsizlik hem başvurularına hem mülakatlardaki duruşuna yansıyor.",
  networking:
    "CV'n ve mülakat becerin fena değil ama pasif bekliyorsun. Aktif network kurmak, ilan yayınlanmadan önce fırsatlara ulaşmanı sağlar.",
};

const nextStepByCategory: Record<CategoryId, { label: string; href: string }> = {
  basvuru_stratejisi: { label: "Kariyer Danışmanlığı Hizmetini İncele", href: "/danismanlik#kariyer-danismanligi" },
  cv_profil: { label: "CV Hazırlama Eğitimini İncele", href: "/egitimler" },
  mulakat: { label: "Mülakat Simülasyonu Hizmetini İncele", href: "/danismanlik#mulakat-simulasyonu" },
  kariyer_netligi: { label: "Kariyer Danışmanlığı Hizmetini İncele", href: "/danismanlik#kariyer-danismanligi" },
  networking: { label: "Eğitimlere Göz At", href: "/egitimler" },
};

export function scoreTest(answers: Record<string, number>): TestResult {
  const sums: Record<CategoryId, { total: number; count: number }> = {
    basvuru_stratejisi: { total: 0, count: 0 },
    cv_profil: { total: 0, count: 0 },
    mulakat: { total: 0, count: 0 },
    kariyer_netligi: { total: 0, count: 0 },
    networking: { total: 0, count: 0 },
  };

  for (const q of questions) {
    const points = answers[q.id];
    if (typeof points !== "number") continue;
    sums[q.category].total += points;
    sums[q.category].count += 1;
  }

  const categories: CategoryResult[] = (Object.keys(sums) as CategoryId[]).map((id) => ({
    id,
    label: categoryLabels[id],
    score: sums[id].count > 0 ? Math.round(sums[id].total / sums[id].count) : 0,
  }));

  const overallScore = Math.round(
    categories.reduce((sum, c) => sum + c.score, 0) / categories.length
  );

  const weakest = [...categories].sort((a, b) => a.score - b.score)[0];
  const strengths = categories.filter((c) => c.score >= 70);
  const risks = categories.filter((c) => c.score < 45);

  return {
    overallScore,
    categories,
    mainProblem: {
      label: weakest.label,
      message: diagnosisByCategory[weakest.id],
    },
    strengths,
    risks,
    nextStep: nextStepByCategory[weakest.id],
  };
}
