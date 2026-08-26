export type Course = {
  id: string;
  category: "Kariyer" | "İK" | "Yapay Zeka + İK";
  title: string;
  audience: string;
  outcomes: string[];
  duration: string;
  instructor: string;
  price: string;
};

export const courses: Course[] = [
  {
    id: "ats-gecen-cv",
    category: "Kariyer",
    title: "ATS'i Geçen CV Nasıl Yazılır?",
    audience: "İş arayan herkes, kariyer değişikliği yapmak isteyenler",
    outcomes: [
      "ATS sistemlerinin CV'leri nasıl okuduğunu anlama",
      "İlan-CV eşleşmesini artıran yazım teknikleri",
      "Anahtar kelime optimizasyonu",
    ],
    duration: "90 dakika, kayıttan izlenebilir",
    instructor: "Benay Aktaş",
    price: "₺990",
  },
  {
    id: "mulakat-hazirlik",
    category: "Kariyer",
    title: "Mülakatta Fark Yaratmak",
    audience: "Mülakata hazırlanan iş arayanlar",
    outcomes: [
      "STAR yöntemiyle cevap kurgulama",
      "Sık sorulan zor sorulara hazırlık",
      "Maaş görüşmesi stratejileri",
    ],
    duration: "2 saat, kayıttan izlenebilir",
    instructor: "Benay Aktaş",
    price: "₺1.190",
  },
];

export type DigitalProduct = {
  id: string;
  title: string;
  description: string;
  price: string;
};

export const digitalProducts: DigitalProduct[] = [
  { id: "cv-sablonu", title: "CV Şablonu Paketi", description: "ATS uyumlu, 3 farklı tasarımda düzenlenebilir CV şablonu.", price: "₺290" },
  { id: "mulakat-rehberi", title: "Mülakat Rehberi", description: "40+ soru ve örnek cevap içeren kapsamlı mülakat hazırlık rehberi.", price: "₺390" },
  { id: "ik-prompt-paketi", title: "İK Prompt Paketi", description: "11 kategoride 50+ hazır İK promptu, indirilebilir PDF.", price: "₺490" },
  { id: "mulakat-soru-bankasi", title: "İK Mülakat Soru Bankası", description: "Fonksiyon bazında 150+ yetkinlik bazlı mülakat sorusu.", price: "₺590" },
  { id: "kariyer-workbook", title: "Kariyer Planlama Workbook", description: "Adım adım kariyer hedefi belirleme çalışma kitabı.", price: "₺350" },
  { id: "linkedin-rehberi", title: "LinkedIn Rehberi", description: "Profilini doğru kişiler tarafından bulunur hale getiren rehber.", price: "₺290" },
];
