export type PromptCategory = {
  id: string;
  label: string;
  prompts: { title: string; text: string }[];
};

export const promptCategories: PromptCategory[] = [
  {
    id: "recruitment",
    label: "İşe Alım",
    prompts: [
      {
        title: "İş İlanı Metni Oluşturma",
        text: "Aşağıdaki pozisyon için çekici, kapsayıcı ve şirket kültürünü yansıtan bir iş ilanı metni yaz. Pozisyon: [POZİSYON ADI]. Departman: [DEPARTMAN]. Kıdem seviyesi: [SENIOR/MID/JUNIOR]. Aranan 5 temel yetkinliği ve sunulan 3 avantajı da ekle.",
      },
      {
        title: "Aday Eleme Kriterleri",
        text: "Şu iş tanımına göre [İŞ TANIMINI YAPIŞTIR] bir CV ön elemesi için puanlanabilir 8 kriterlik bir rubrik oluştur. Her kritere 1-5 arası ağırlık ver ve neden önemli olduğunu kısaca açıkla.",
      },
      {
        title: "Boolean Arama Sorgusu",
        text: "[POZİSYON] için LinkedIn Recruiter'da kullanılabilecek bir boolean arama sorgusu oluştur. Zorunlu yetkinlikler: [YETKİNLİK 1, 2, 3]. Hariç tutulması gereken unvanlar: [UNVAN 1, 2].",
      },
    ],
  },
  {
    id: "interview",
    label: "Mülakat",
    prompts: [
      {
        title: "Yetkinlik Bazlı Mülakat Soruları",
        text: "[POZİSYON] pozisyonu için STAR yöntemine uygun 6 yetkinlik bazlı mülakat sorusu hazırla. Değerlendirilecek yetkinlikler: [YETKİNLİK 1, 2, 3]. Her soru için 'iyi bir cevapta aranan işaretler' listesi de ekle.",
      },
      {
        title: "Mülakat Değerlendirme Formu",
        text: "[POZİSYON] mülakatı için 1-5 skalalı, 6 kriterli bir değerlendirme formu oluştur. Her kriter için kısa bir tanım ve örnek gözlemlenebilir davranış ekle.",
      },
      {
        title: "Vaka Çalışması Tasarımı",
        text: "[POZİSYON/DEPARTMAN] için 20 dakikada tamamlanabilecek, gerçekçi bir mülakat vaka çalışması tasarla. Adayın problem çözme ve önceliklendirme becerisini ölçmeli.",
      },
    ],
  },
  {
    id: "onboarding",
    label: "Oryantasyon",
    prompts: [
      {
        title: "30-60-90 Gün Planı",
        text: "[POZİSYON] için yeni başlayan bir çalışana yönelik 30-60-90 günlük bir onboarding planı hazırla. Her dönem için 3-4 somut hedef ve başarı ölçütü belirt.",
      },
      {
        title: "Onboarding Anketi",
        text: "İşe başlangıcın 2. haftasında gönderilecek, çalışan deneyimini ölçen 8 soruluk bir onboarding anketi oluştur. Açık uçlu ve ölçekli soruları dengele.",
      },
    ],
  },
  {
    id: "performance",
    label: "Performans",
    prompts: [
      {
        title: "Performans Değerlendirme Kriterleri",
        text: "[ROL/DEPARTMAN] için 5 temel, 3 yetkinlik bazlı ölçülebilir performans kriteri belirle. Her kriter için 1-5 arası puanlama tanımı yaz.",
      },
      {
        title: "Zor Geri Bildirim Konuşması",
        text: "Bir çalışana [DURUM: örn. son 2 çeyrektir hedeflerin altında kalma] konusunda yapıcı ama net bir geri bildirim konuşması için konuşma akışı ve açılış cümlesi öner.",
      },
      {
        title: "360 Derece Değerlendirme Soru Seti",
        text: "[ROL] için 360 derece performans değerlendirmesinde kullanılacak, yönetici/eş seviye/astlara yönelik ayrı ayrı 5'er soru hazırla.",
      },
    ],
  },
  {
    id: "training",
    label: "Eğitim",
    prompts: [
      {
        title: "Eğitim İçerik Taslağı",
        text: "[KONU] üzerine 2 saatlik bir kurumsal eğitim için gündem, öğrenme hedefleri ve 3 pratik egzersiz içeren bir taslak hazırla.",
      },
      {
        title: "Eğitim Sonrası Değerlendirme",
        text: "[EĞİTİM ADI] eğitiminin etkinliğini ölçmek için Kirkpatrick modelinin ilk iki seviyesine (tepki ve öğrenme) uygun bir değerlendirme formu oluştur.",
      },
    ],
  },
  {
    id: "employee-experience",
    label: "Çalışan Deneyimi",
    prompts: [
      {
        title: "Çalışan Bağlılığı Anketi",
        text: "Yıllık çalışan bağlılığı (engagement) anketi için 10 sorudan oluşan, Türkçe ve kültürel bağlama uygun bir soru seti hazırla. eNPS sorusunu da dahil et.",
      },
      {
        title: "Exit Interview Soru Seti",
        text: "İşten ayrılan bir çalışanla yapılacak exit interview için 8 açık uçlu, yargılayıcı olmayan soru hazırla.",
      },
    ],
  },
  {
    id: "hr-analytics",
    label: "İK Analitiği",
    prompts: [
      {
        title: "İşe Alım Dashboard Metrikleri",
        text: "İşe alım ekibi için aylık takip edilmesi gereken 8 temel metriği (time-to-hire, cost-per-hire vb.) listele ve her biri için hesaplama formülünü yaz.",
      },
      {
        title: "Turnover Analizi Çerçevesi",
        text: "[DEPARTMAN] için çalışan devir oranını analiz eden bir çerçeve oluştur: hangi verileri toplamalıyım, hangi kırılımlara (kıdem, yaş, performans) bakmalıyım?",
      },
    ],
  },
  {
    id: "employer-branding",
    label: "İşveren Markası",
    prompts: [
      {
        title: "Employer Value Proposition (EVP)",
        text: "[ŞİRKET ADI/SEKTÖR] için 4 sütunlu bir EVP (Employer Value Proposition) çerçevesi taslağı oluştur: kültür, gelişim, ödüllendirme, iş yapısı.",
      },
      {
        title: "LinkedIn İçerik Takvimi",
        text: "İşveren markası için önümüzdeki 4 hafta boyunca paylaşılacak, çalışan hikayeleri ve şirket kültürünü öne çıkaran 8 LinkedIn içerik fikri üret.",
      },
    ],
  },
  {
    id: "employee-relations",
    label: "Çalışan İlişkileri",
    prompts: [
      {
        title: "Çatışma Çözüm Yol Haritası",
        text: "İki ekip üyesi arasındaki [ÇATIŞMA TÜRÜ] bir anlaşmazlığı çözmek için İK'nın izleyebileceği adım adım bir arabuluculuk süreci öner.",
      },
      {
        title: "Politika İletişim Metni",
        text: "[YENİ POLİTİKA, örn. hibrit çalışma modeli] hakkında çalışanlara gönderilecek, net ve empatik bir duyuru e-postası taslağı yaz.",
      },
    ],
  },
  {
    id: "hrbp",
    label: "İK İş Ortaklığı",
    prompts: [
      {
        title: "Organizasyon Tasarımı Değerlendirmesi",
        text: "[DEPARTMAN] için mevcut organizasyon yapısını değerlendirirken sorulması gereken 6 stratejik soruyu listele (span of control, karar hızı, rol netliği vb.).",
      },
      {
        title: "İş Ortaklığı Toplantı Gündemi",
        text: "Departman yöneticisiyle yapılacak aylık İK-iş ortaklığı toplantısı için 5 maddelik bir gündem şablonu hazırla.",
      },
    ],
  },
  {
    id: "ai-for-hr",
    label: "İK'da Yapay Zeka",
    prompts: [
      {
        title: "CV Ön Eleme Asistanı Promptu",
        text: "Sana bir iş ilanı ve bir CV vereceğim. İlandaki gereksinimlerle CV'yi karşılaştırıp 1-10 arası bir uygunluk puanı ver ve gerekçesini 3 maddede özetle. İlan: [İLAN]. CV: [CV METNİ].",
      },
      {
        title: "Toplantı Notlarını Aksiyon Listesine Çevirme",
        text: "Aşağıdaki İK toplantı notlarını sorumlu kişi ve tarih içeren net bir aksiyon listesine dönüştür: [TOPLANTI NOTLARI].",
      },
    ],
  },
];
