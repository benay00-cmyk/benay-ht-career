export type CategoryId =
  | "basvuru_stratejisi"
  | "cv_profil"
  | "mulakat"
  | "kariyer_netligi"
  | "networking";

export const categoryLabels: Record<CategoryId, string> = {
  basvuru_stratejisi: "Başvuru Stratejisi",
  cv_profil: "CV & Profil Kalitesi",
  mulakat: "Mülakat Hazırlığı",
  kariyer_netligi: "Kariyer Netliği",
  networking: "Networking",
};

export type Question = {
  id: string;
  category: CategoryId;
  text: string;
  options: { label: string; points: number }[];
};

export const questions: Question[] = [
  {
    id: "basvuru_sayisi",
    category: "basvuru_stratejisi",
    text: "Son 1 ayda kaç iş ilanına başvurdun?",
    options: [
      { label: "0-5 arası", points: 20 },
      { label: "6-15 arası", points: 55 },
      { label: "15'ten fazla", points: 90 },
    ],
  },
  {
    id: "basvuru_hedef",
    category: "basvuru_stratejisi",
    text: "Başvurduğun ilanların ne kadarı hedef pozisyonunla doğrudan ilgili?",
    options: [
      { label: "Çoğu ilgisiz, 'bir şey çıkar' diye başvuruyorum", points: 20 },
      { label: "Yarı yarıya", points: 55 },
      { label: "Neredeyse hepsi hedefime uygun", points: 90 },
    ],
  },
  {
    id: "sektor_netligi",
    category: "basvuru_stratejisi",
    text: "Hedeflediğin sektör/pozisyon net mi?",
    options: [
      { label: "Hayır, kararsızım", points: 20 },
      { label: "Birkaç seçenek arasında", points: 55 },
      { label: "Evet, çok net", points: 90 },
    ],
  },
  {
    id: "cv_guncelligi",
    category: "cv_profil",
    text: "CV'ni en son ne zaman güncelledin?",
    options: [
      { label: "Hatırlamıyorum, çok eski", points: 20 },
      { label: "Birkaç ay önce", points: 55 },
      { label: "Bu başvurular için özel olarak güncelledim", points: 90 },
    ],
  },
  {
    id: "ats_kontrolu",
    category: "cv_profil",
    text: "CV'ni ATS (başvuru takip sistemi) uyumluluğu açısından hiç kontrol ettin mi?",
    options: [
      { label: "Hayır", points: 20 },
      { label: "Biraz araştırdım ama emin değilim", points: 55 },
      { label: "Evet, kontrol ettim", points: 90 },
    ],
  },
  {
    id: "linkedin_durumu",
    category: "cv_profil",
    text: "LinkedIn profilin ne durumda?",
    options: [
      { label: "Yok ya da çok eksik", points: 20 },
      { label: "Var ama pasif kullanıyorum", points: 55 },
      { label: "Aktif, düzenli güncelliyorum", points: 90 },
    ],
  },
  {
    id: "mulakat_orani",
    category: "mulakat",
    text: "Başvurduğun ilanların yaklaşık kaçından mülakat daveti alıyorsun?",
    options: [
      { label: "Neredeyse hiç", points: 20 },
      { label: "Bazen", points: 55 },
      { label: "Sık sık", points: 90 },
    ],
  },
  {
    id: "mulakat_guveni",
    category: "mulakat",
    text: "Mülakata girerken kendini ne kadar hazır hissediyorsun?",
    options: [
      { label: "Çok gergin ve hazırlıksız", points: 20 },
      { label: "Orta düzeyde hazır", points: 55 },
      { label: "Kendimden eminim", points: 90 },
    ],
  },
  {
    id: "mulakat_sonrasi",
    category: "mulakat",
    text: "Mülakatlardan sonra genelde ne oluyor?",
    options: [
      { label: "Genelde ilk turdan sonra geri dönüş almıyorum", points: 20 },
      { label: "Bazen ikinci tura geçiyorum", points: 55 },
      { label: "Genelde teklif aşamasına kadar ilerliyorum", points: 90 },
    ],
  },
  {
    id: "degisim_motivasyonu",
    category: "kariyer_netligi",
    text: "İş değiştirme/arama motivasyonun ne kadar net?",
    options: [
      { label: "Sadece 'bir şey olsun' istiyorum", points: 20 },
      { label: "Belirli sebeplerim var ama tam net değil", points: 55 },
      { label: "Net bir sebebim ve hedefim var", points: 90 },
    ],
  },
  {
    id: "maas_beklentisi",
    category: "kariyer_netligi",
    text: "Maaş beklentini net şekilde biliyor musun?",
    options: [
      { label: "Hayır, ne isteyeceğimi bilmiyorum", points: 20 },
      { label: "Kabaca bir aralığım var", points: 55 },
      { label: "Net bir rakamım/aralığım var", points: 90 },
    ],
  },
  {
    id: "gelecek_netligi",
    category: "kariyer_netligi",
    text: "1-2 yıl sonra kariyerinde nerede olmak istediğini tarif edebilir misin?",
    options: [
      { label: "Hayır", points: 20 },
      { label: "Kabaca", points: 55 },
      { label: "Evet, net bir resmim var", points: 90 },
    ],
  },
  {
    id: "networking_aktivitesi",
    category: "networking",
    text: "Hedef sektöründe ne kadar aktif network kuruyorsun (LinkedIn mesajlaşma, tanıdık üzerinden başvuru, etkinlikler vb.)?",
    options: [
      { label: "Hiç yapmıyorum", points: 20 },
      { label: "Ara sıra", points: 55 },
      { label: "Düzenli yapıyorum", points: 90 },
    ],
  },
];
