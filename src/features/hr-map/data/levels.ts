export type HrMapLevel = {
  id: string;
  label: string;
  roles: string[];
  competencies: string[];
  recommendedActions: string[];
  resources: string[];
};

export const hrMapLevels: HrMapLevel[] = [
  {
    id: "baslangic",
    label: "Başlangıç",
    roles: ["İşe Alım Uzman Yardımcısı", "Özlük İşleri", "Eğitim Koordinasyonu", "PDKS / Bordro"],
    competencies: [
      "Temel İK süreçlerini (özlük, bordro, işe alım) uçtan uca bilme",
      "Excel ve temel yapay zeka araçlarıyla veri düzenleme",
      "İş kanunu temel bilgisi",
      "İletişim ve koordinasyon becerisi",
    ],
    recommendedActions: [
      "Bir İK departmanında staj ya da yardımcı pozisyonda deneyim kazan",
      "İşe alım sürecinde en az bir uçtan uca proje yürüt",
      "Temel bordro/özlük yazılımlarını öğren",
    ],
    resources: [
      "İş Kanunu ve SGK mevzuatı temel eğitimi",
      "Excel ileri seviye kursu",
      "İK'da ilk 90 gün rehberi",
    ],
  },
  {
    id: "uzmanlik",
    label: "Uzmanlık",
    roles: ["İşe Alım Uzmanı", "Eğitim Uzmanı", "Ücret ve Yan Haklar Uzmanı", "İK Analisti"],
    competencies: [
      "Uçtan uca işe alım sürecini bağımsız yönetme",
      "Yetkinlik bazlı mülakat tasarlama",
      "Temel İK metriklerini (işe alım süresi, devir oranı) okuma",
      "Yapay zeka araçlarını günlük İK işlerinde kullanabilme",
    ],
    recommendedActions: [
      "Bir uzmanlık alanı seç ve o alanda 2-3 proje yönet",
      "LinkedIn Recruiter / ATS sistemlerinde ustalaş",
      "Temel İK analitiği ve yapay zeka araçlarını öğren",
    ],
    resources: [
      "Yetkinlik Bazlı Mülakat Tasarımı eğitimi (bkz. Eğitimler)",
      "Temel İK analitiği ve yapay zeka araçları rehberi",
      "İşveren markası temel prensipleri",
    ],
  },
];
