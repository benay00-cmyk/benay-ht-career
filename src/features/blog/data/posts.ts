export type BlogCategory = {
  slug: string;
  label: string;
};

export const blogCategories: BlogCategory[] = [
  { slug: "kariyer", label: "Kariyer" },
  { slug: "ik", label: "İK" },
  { slug: "ai-hr", label: "Yapay Zeka + İK" },
  { slug: "is-hayati", label: "İş Hayatı" },
];

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  readTime: string;
  sections: { heading: string; body: string[] }[];
  faq: { question: string; answer: string }[];
  cta: { text: string; label: string; href: string };
};

export const blogPosts: BlogPost[] = [
  {
    slug: "ats-sistemleri-cvnizi-neden-eliyor",
    category: "kariyer",
    title: "ATS Sistemleri CV'nizi Neden Eliyor?",
    metaDescription:
      "ATS (Applicant Tracking System) sistemlerinin CV'leri nasıl okuduğunu ve başvurunuzun neden elenmiş olabileceğini öğrenin.",
    excerpt: "İyi bir adayın CV'si neden hiç insan gözüyle görülmeden elenir? ATS mantığını çözüyoruz.",
    readTime: "6 dk okuma",
    sections: [
      {
        heading: "ATS Nedir, Nasıl Çalışır?",
        body: [
          "ATS (Applicant Tracking System), şirketlerin gelen başvuruları toplayıp filtrelediği yazılım sistemidir. Büyük şirketlerin neredeyse tamamı, İK ekibi CV'lere bakmadan önce başvuruları ATS'ten geçirir.",
          "Sistem, ilan metnindeki anahtar kelimeleri, deneyim yıllarını ve bazı biçimsel kuralları CV'nizle eşleştirir. Eşleşme düşükse, CV'niz hiç insan gözüyle görülmeden elenebilir.",
        ],
      },
      {
        heading: "ATS'in Sık Elediği 4 Hata",
        body: [
          "Görsel ağırlıklı, tablo ve sütun içeren CV şablonları — birçok ATS bunları düzgün okuyamaz.",
          "İlanda geçen anahtar kelimelerin CV'de hiç geçmemesi (örneğin ilan 'stakeholder management' diyorsa, CV'de bu ifade hiç yoksa eşleşme düşer).",
          "Standart olmayan başlıklar (örneğin 'Deneyimlerim' yerine 'Yolculuğum' gibi yaratıcı başlıklar sistemin bölümü tanımasını zorlaştırır).",
          "PDF yerine görüntü tabanlı (taranmış) dosya yüklemek — metin çıkarılamaz.",
        ],
      },
      {
        heading: "Ne Yapmalısınız?",
        body: [
          "Sade, tek sütunlu, standart başlıklı bir CV formatı kullanın.",
          "İlan metnini dikkatlice okuyup, orada geçen kritik terimleri (uydurmadan) kendi deneyiminize uygun şekilde CV'nize yansıtın.",
          "Başvurmadan önce CV'nizi ilana göre analiz ettirmek, eksik anahtar kelimeleri görmenin en hızlı yolu.",
        ],
      },
    ],
    faq: [
      {
        question: "ATS skoru 0-100 arası kesin bir sonuç mu?",
        answer:
          "Hayır. Farklı şirketler farklı ATS yazılımları kullanır ve her birinin kuralları biraz farklıdır. Skorlar tahminidir, gerçek sonucu garanti etmez.",
      },
      {
        question: "PDF mi Word mü daha güvenli?",
        answer:
          "Metin tabanlı (taranmamış) bir PDF, çoğu modern ATS için güvenlidir. Emin değilseniz ilan sayfasındaki başvuru talimatlarını kontrol edin.",
      },
    ],
    cta: {
      text: "CV'nizin gerçek bir ilana karşı ATS uyumluluğunu görmek ister misiniz?",
      label: "CV'ni Şimdi Analiz Et",
      href: "/ai-asistan",
    },
  },
  {
    slug: "iseleimda-en-cok-yapilan-7-hata",
    category: "ik",
    title: "İşe Alımda En Çok Yapılan 7 Hata",
    metaDescription:
      "İşe alım süreçlerinde İK ekiplerinin en sık düştüğü 7 hatayı ve bunlardan nasıl kaçınılacağını inceliyoruz.",
    excerpt: "Doğru adayı kaçırmanın çoğu zaman adayla değil, süreçle ilgisi vardır.",
    readTime: "8 dk okuma",
    sections: [
      {
        heading: "1. Belirsiz İş Tanımları",
        body: [
          "Gereksinimleri net olmayan bir ilan, hem yanlış adayları çeker hem de doğru adayları caydırır. İlan yazmadan önce pozisyonun gerçekten neye ihtiyacı olduğunu netleştirin.",
        ],
      },
      {
        heading: "2. Yapılandırılmamış Mülakatlar",
        body: [
          "Her mülakatçının kendi sorularını sorduğu, ortak bir değerlendirme kriteri olmayan süreçler öznel kararlara yol açar. Yetkinlik bazlı, önceden belirlenmiş sorular kullanmak tutarlılığı artırır.",
        ],
      },
      {
        heading: "3. Çok Uzun Süren Süreçler",
        body: [
          "İyi adaylar piyasada uzun süre beklemez. Süreç ne kadar uzarsa, en iyi adayı başka bir şirkete kaptırma riski o kadar artar.",
        ],
      },
      {
        heading: "4-7. Diğer Sık Hatalar",
        body: [
          "Kültürel uyumu 'benzerlik' ile karıştırmak, geri bildirim vermemek, referans kontrolünü atlamak ve aday deneyimini önemsememek de sık karşılaşılan hatalar arasında.",
        ],
      },
    ],
    faq: [
      {
        question: "Yapılandırılmış mülakat kurmak zor mu?",
        answer:
          "Başlangıçta biraz zaman alır ama bir kere kurulunca her pozisyon için tekrar kullanılabilir. Prompt kütüphanemizde hazır şablonlar bulabilirsiniz.",
      },
    ],
    cta: {
      text: "İşe alım sürecinizi baştan mı kurmak istiyorsunuz?",
      label: "İK Danışmanlığı Talep Et",
      href: "/danismanlik",
    },
  },
  {
    slug: "chatgpt-ile-is-ilani-nasil-analiz-edilir",
    category: "ai-hr",
    title: "ChatGPT ile İş İlanı Nasıl Analiz Edilir?",
    metaDescription:
      "Bir iş ilanını AI araçlarıyla analiz ederek CV'nizi nasıl daha isabetli hale getirebileceğinizi adım adım anlatıyoruz.",
    excerpt: "İlanın satır aralarını okumak artık yapay zekânın işi.",
    readTime: "5 dk okuma",
    sections: [
      {
        heading: "İlan Metninde Neyi Aramalısınız?",
        body: [
          "Bir iş ilanı sadece görevleri değil, şirketin önceliklerini de anlatır. Hangi yetkinlikler ilanın başında geçiyor, hangileri sonda — bu sıralama bile önem derecesi hakkında ipucu verir.",
        ],
      },
      {
        heading: "AI ile Adım Adım Analiz",
        body: [
          "İlan metnini ve CV'nizi bir AI aracına birlikte verin.",
          "Eksik anahtar kelimeleri ve öne çıkması gereken deneyimleri listeleyin.",
          "Çıkan önerileri kör kör uygulamak yerine, kendi gerçek deneyiminizle karşılaştırıp uyarlayın — AI çıktısı bir başlangıç noktasıdır, son söz sizindir.",
        ],
      },
    ],
    faq: [
      {
        question: "AI'ın önerdiği her şeyi CV'me eklemeli miyim?",
        answer:
          "Hayır. AI çıktıları bir rehberdir; CV'nizde olmayan bir deneyimi varmış gibi göstermek hem etik değildir hem de mülakatta ortaya çıkar.",
      },
    ],
    cta: {
      text: "Bu analizi kendi CV'niz ve hedef ilanınız için deneyin.",
      label: "AI Kariyer Asistanına Git",
      href: "/ai-asistan",
    },
  },
  {
    slug: "mulakatta-kendinizi-nasil-ifade-edersiniz",
    category: "kariyer",
    title: "Mülakatta Kendinizi Nasıl İfade Edersiniz?",
    metaDescription:
      "Mülakatlarda güçlü bir izlenim bırakmak için STAR yöntemi ve pratik iletişim teknikleri.",
    excerpt: "Deneyiminiz yeterli, anlatım biçiminiz eksik kalıyor olabilir.",
    readTime: "7 dk okuma",
    sections: [
      {
        heading: "STAR Yöntemi",
        body: [
          "Situation (Durum), Task (Görev), Action (Eylem), Result (Sonuç) — davranışsal sorulara bu çerçevede cevap vermek, anlatımınızı somut ve takip edilebilir kılar.",
        ],
      },
      {
        heading: "Sık Yapılan Hata: Belirsiz Cevaplar",
        body: [
          "\"Ekip çalışmasında iyiyimdir\" demek yerine, gerçek bir projede ekiple birlikte hangi somut sonucu ürettiğinizi anlatın. Sayılar ve sonuçlar, iddialardan daha inandırıcıdır.",
        ],
      },
    ],
    faq: [
      {
        question: "Sorulara hazırlanmak yapaylık yaratır mı?",
        answer:
          "Hayır, aksine hazırlıklı olmak sizi daha rahat ve net kılar. Yapaylık, ezberi birebir okumaktan kaynaklanır; ana fikirleri özümseyip kendi cümlelerinizle anlatmak en doğal sonucu verir.",
      },
    ],
    cta: {
      text: "Gerçek bir mülakat ortamında pratik yapmak ister misiniz?",
      label: "Mülakat Simülasyonu Talep Et",
      href: "/danismanlik",
    },
  },
  {
    slug: "yetkinlik-bazli-mulakat-nasil-tasarlanir",
    category: "ik",
    title: "Yetkinlik Bazlı Mülakat Nasıl Tasarlanır?",
    metaDescription:
      "İK profesyonelleri için yetkinlik bazlı mülakat sürecini adım adım kurma rehberi.",
    excerpt: "Doğru soruyu sormak, doğru adayı bulmanın yarısıdır.",
    readTime: "8 dk okuma",
    sections: [
      {
        heading: "Önce Yetkinlikleri Tanımlayın",
        body: [
          "Pozisyon için gerçekten kritik olan 4-6 yetkinliği belirleyin. Her şeyi ölçmeye çalışan bir mülakat, hiçbir şeyi iyi ölçemez.",
        ],
      },
      {
        heading: "Her Yetkinlik İçin Soru ve İşaret Belirleyin",
        body: [
          "Her yetkinlik için STAR formatında bir soru ve 'iyi bir cevapta aranan işaretler' listesi hazırlayın. Bu, farklı mülakatçıların tutarlı değerlendirme yapmasını sağlar.",
        ],
      },
    ],
    faq: [
      {
        question: "Kaç yetkinlik ölçülmeli?",
        answer:
          "Genellikle 4-6 yetkinlik yeterlidir. Daha fazlası hem mülakat süresini uzatır hem de değerlendirmeyi zorlaştırır.",
      },
    ],
    cta: {
      text: "Hazır yetkinlik bazlı mülakat promptlarına göz atın.",
      label: "Prompt Kütüphanesine Git",
      href: "/ik-profesyonelleri/prompt-kutuphanesi",
    },
  },
  {
    slug: "is-yerinde-sinir-koymayi-ogrenmek",
    category: "is-hayati",
    title: "İş Yerinde Sınır Koymayı Öğrenmek",
    metaDescription:
      "İş hayatında sağlıklı sınırlar koymanın kariyerinize nasıl katkı sağladığını ve pratik yöntemlerini keşfedin.",
    excerpt: "Her isteğe evet demek, uzun vadede kimseye fayda sağlamıyor.",
    readTime: "6 dk okuma",
    sections: [
      {
        heading: "Neden Sınır Koymak Zor Gelir?",
        body: [
          "Reddetmenin 'iyi çalışan' imajını zedeleyeceği korkusu, çoğu profesyonelin sınır koymaktan kaçınmasına neden olur. Oysa sürekli aşırı yüklenmek, orta vadede performansı ve motivasyonu düşürür.",
        ],
      },
      {
        heading: "Pratik Bir Çerçeve",
        body: [
          "Talebi anladığınızı gösterin, önceliklerinizi paylaşın, gerçekçi bir alternatif sunun. \"Bunu yapabilirim ama X'i ertelemem gerekir, hangisi öncelikli?\" gibi bir cümle hem profesyonel hem nettir.",
        ],
      },
    ],
    faq: [
      {
        question: "Yöneticimle bu konuşmayı nasıl başlatmalıyım?",
        answer:
          "Somut bir örnek üzerinden, suçlayıcı olmayan bir dille başlayın: 'Şu an X ve Y projelerinde önceliklendirme konusunda desteğine ihtiyacım var' gibi.",
      },
    ],
    cta: {
      text: "İş hayatındaki sınırlarınızı ve önceliklerinizi birlikte netleştirelim.",
      label: "Kariyer Danışmanlığı Talep Et",
      href: "/danismanlik",
    },
  },
];
