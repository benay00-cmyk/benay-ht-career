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
  {
    id: "linkedin-profil-optimizasyonu",
    category: "Kariyer",
    title: "LinkedIn Profilini Öne Çıkar",
    audience: "İş arayanlar, kariyerinde görünürlüğünü artırmak isteyenler",
    outcomes: [
      "Doğru kişiler tarafından bulunan bir profil oluşturma",
      "Özet ve deneyim bölümlerini etkili yazma",
      "İçerik paylaşarak görünürlüğünü artırma",
    ],
    duration: "60 dakika, kayıttan izlenebilir",
    instructor: "Benay Aktaş",
    price: "₺790",
  },
  {
    id: "etkili-is-arama",
    category: "Kariyer",
    title: "Etkili İş Arama Stratejileri",
    audience: "Aktif iş arayan herkes",
    outcomes: [
      "Doğru kanallardan doğru pozisyonlara ulaşma",
      "Başvuru takibini sistematik hale getirme",
      "Motivasyonu koruyarak süreci yönetme",
    ],
    duration: "90 dakika, kayıttan izlenebilir",
    instructor: "Benay Aktaş",
    price: "₺990",
  },
  {
    id: "kariyer-mentorlugu",
    category: "Kariyer",
    title: "Bire Bir Kariyer Mentörlüğü",
    audience: "Kariyerinde kişiye özel rehberlik isteyenler",
    outcomes: [
      "Güçlü ve gelişime açık alanlarını netleştirme",
      "Kişiye özel bir kariyer yol haritası çıkarma",
      "Süreç boyunca düzenli takip ve geri bildirim",
    ],
    duration: "Kişiye özel, aylık görüşme",
    instructor: "Benay Aktaş",
    price: "₺1.490",
  },
  {
    id: "ik-da-yapay-zeka",
    category: "Yapay Zeka + İK",
    title: "İK'da ChatGPT ve Prompt Kullanımı",
    audience: "İK uzmanları, yapay zekayı işine katmak isteyenler",
    outcomes: [
      "İK süreçlerinde kullanılabilecek hazır promptlar",
      "İş ilanı ve mülakat sorularını AI ile hazırlama",
      "Günlük İK işlerinde zaman kazandıran teknikler",
    ],
    duration: "75 dakika, kayıttan izlenebilir",
    instructor: "Benay Aktaş",
    price: "₺990",
  },
  {
    id: "ik-kariyer-yol-haritasi",
    category: "İK",
    title: "İK Kariyer Yol Haritanı Belirle",
    audience: "İK'da bulunduğu noktayı ve sonraki adımı netleştirmek isteyenler",
    outcomes: [
      "Mevcut seviyeni ve gelişim alanlarını belirleme",
      "Uzmanlıktan yöneticiliğe geçiş için hazırlık",
      "Uygulanabilir bir kariyer yol haritası çıkarma",
    ],
    duration: "90 dakika, kayıttan izlenebilir",
    instructor: "Benay Aktaş",
    price: "₺990",
  },
  {
    id: "ik-mentorlugu-programi",
    category: "İK",
    title: "İK Mentörlüğü Programı",
    audience: "Kişiye özel rehberlik isteyen İK profesyonelleri",
    outcomes: [
      "İşe alımdan performans yönetimine bire bir destek",
      "Yönetici karşısında kendini güçlü ifade etme",
      "Süreç boyunca düzenli takip ve geri bildirim",
    ],
    duration: "Kişiye özel, aylık görüşme",
    instructor: "Benay Aktaş",
    price: "₺1.490",
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
