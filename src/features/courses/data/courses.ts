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
      "ATS sistemlerinin CV'leri nasıl okuduğunu ve puanladığını anlama",
      "İş ilanından doğru anahtar kelimeleri çıkarıp CV'ye yerleştirme",
      "ATS dostu formatlama: hangi tasarım ve düzenlerin CV'yi elediğini öğrenme",
      "Ölçülebilir başarılarla güçlü, etkili bullet point'ler yazma",
      "Tek bir ana CV'yi her ilana hızlıca uyarlama yöntemi kurma",
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
      "STAR yöntemiyle davranışsal sorulara güçlü cevaplar kurgulama",
      "\"Zayıf yönün nedir?\", \"Neden seni işe alalım?\" gibi zor sorulara hazırlıklı olma",
      "Mülakat öncesi şirket ve pozisyon araştırmasını doğru yapma",
      "Online ve yüz yüze mülakatlarda beden dili ve sunumu güçlendirme",
      "Maaş görüşmesinde özgüvenli ve gerçekçi bir teklif sunma",
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
      "Dikkat çeken bir başlık (headline) ve hakkında (about) metni yazma",
      "Deneyim bölümünü görev listesinden başarı hikayesine dönüştürme",
      "Doğru anahtar kelimelerle recruiter aramalarında görünür olma",
      "Düzenli paylaşım ve etkileşimle profesyonel ağını büyütme",
      "İK ve işe alım uzmanlarıyla doğru şekilde bağlantı kurma",
    ],
    duration: "75 dakika, kayıttan izlenebilir",
    instructor: "Benay Aktaş",
    price: "₺790",
  },
  {
    id: "etkili-is-arama",
    category: "Kariyer",
    title: "Etkili İş Arama Stratejileri",
    audience: "Aktif iş arayan herkes",
    outcomes: [
      "Hedef şirket ve pozisyon listesi oluşturma",
      "İlan panolarının ötesinde referans ve doğrudan başvuru kanallarını kullanma",
      "Ağını aktive ederek bilgi görüşmeleri (informational interview) planlama",
      "Başvurularını takip edecek basit ve sürdürülebilir bir sistem kurma",
      "Uzun süreçte motivasyonu koruyacak rutin ve hedefler belirleme",
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
      "Güçlü ve gelişime açık yönlerini net şekilde görme",
      "Kısa ve orta vadeli kariyer hedeflerini netleştirme",
      "Kişiye özel, adım adım bir kariyer yol haritası çıkarma",
      "Düzenli görüşmelerle ilerlemeni takip edip planı güncelleme",
      "Zorlandığın anlarda birebir geri bildirim ve yönlendirme alma",
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
      "İK süreçlerinde yapay zekanın güçlü ve zayıf yönlerini tanıma",
      "Etkili prompt yazma tekniklerini (bağlam, format, rol) öğrenme",
      "İş ilanı, iş tanımı ve mülakat sorularını AI ile hızlıca hazırlama",
      "Oryantasyon, politika ve performans metinlerini AI ile taslaklama",
      "Aday ve çalışan verileriyle çalışırken gizlilik ve etik kullanım kurallarını bilme",
    ],
    duration: "90 dakika, kayıttan izlenebilir",
    instructor: "Benay Aktaş",
    price: "₺990",
  },
  {
    id: "ik-kariyer-yol-haritasi",
    category: "İK",
    title: "İK Kariyer Yol Haritanı Belirle",
    audience: "İK'da bulunduğu noktayı ve sonraki adımı netleştirmek isteyenler",
    outcomes: [
      "Mevcut İK yetkinlik seviyeni objektif şekilde değerlendirme",
      "Sana uygun İK kariyer rotasını (uzman, generalist, yönetici) netleştirme",
      "Bir sonraki seviyeye geçmek için gereken yetkinlik boşluklarını tespit etme",
      "6-12 aylık somut bir gelişim planı oluşturma",
      "Terfi veya yeni bir role geçiş için kendini doğru konumlandırma",
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
      "İşe alımdan performans yönetimine güncel süreçlerde bire bir destek alma",
      "Yönetici ve üst yönetim karşısında kendini daha güçlü ifade etme",
      "Zorlu İK vakalarında (işten çıkarma, çatışma yönetimi) yönlendirme alma",
      "Uzmanlıktan yöneticiliğe geçiş sürecinde adım adım hazırlanma",
      "Düzenli görüşmelerle kariyer hedeflerine olan ilerlemeni takip etme",
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
