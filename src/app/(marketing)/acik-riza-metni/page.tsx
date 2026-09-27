import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage, LegalSection } from "@/components/legal/legal-page";

export const metadata: Metadata = { title: "Açık Rıza Metni · Benay HR" };

export default function AcikRizaMetniPage() {
  return (
    <LegalPage title="Açık Rıza Metni" updatedAt="28.09.2026">
      <LegalSection title="1. Bu Metin Ne İçin Var">
        <p>
          Bu metin, Kariyer Asistanı (CV / İlan Eşleşme Analizi) özelliğini
          kullandığınızda CV&apos;nizin ve girdiğiniz iş ilanı metninin nasıl
          işlendiğini açıklar. CV içeriğinin değerlendirme amacıyla yurt
          dışında yerleşik bir yapay zekâ servis sağlayıcısına iletilmesi,
          KVKK m. 9 kapsamında açık rızanızı gerektirir; bu metin de o rızanın
          neye dayandığını gösterir. Genel veri işleme esasları için{" "}
          <Link href="/kvkk-aydinlatma-metni" className="text-gold-deep underline underline-offset-2">
            KVKK Aydınlatma Metni
          </Link>
          &apos;ne bakabilirsiniz.
        </p>
      </LegalSection>

      <LegalSection title="2. Hangi Veriler İşlenir">
        <ul className="list-disc pl-5">
          <li>CV&apos;nizde yer alan bilgiler (ad soyad, iletişim, deneyim, eğitim vb.)</li>
          <li>Yapıştırdığınız veya yüklediğiniz iş ilanı metni</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Verileriniz Nereye Gider">
        <p>
          Yüklediğiniz PDF/Word dosyası, yalnızca metne çevrilmek üzere anlık
          olarak sunucuda işlenir; diske veya veritabanına kaydedilmez. Elde
          edilen metin, analiz üretmesi için{" "}
          <strong>Anthropic&apos;in Claude API&apos;sine</strong> (ABD
          merkezli, yurt dışında yerleşik bir yapay zekâ servis sağlayıcısı)
          iletilir. Analiz tamamlandığında sonuç tarayıcınıza döner.
        </p>
      </LegalSection>

      <LegalSection title="4. Ne Kadar Saklanır">
        <p>
          CV&apos;nizin ve ilan metninin kendisi Benay HR tarafından hiçbir
          şekilde saklanmaz; analiz tamamlanır tamamlanmaz sunucu belleğinden
          silinir. Yalnızca analiz sonucuna dair birkaç özet ölçüt (ör. ATS
          skoru, analizin başarılı olup olmadığı) kimliğinizle
          ilişkilendirilmeksizin, hizmet kalitesini izlemek amacıyla
          veritabanında tutulur — CV&apos;nizin metni bu kayda dahil değildir.
          Yapay zekâ sağlayıcısı tarafındaki işleme, kendi veri politikalarına
          tabidir; güncel bilgi için sağlayıcının kendi gizlilik şartlarına
          bakabilirsiniz.
        </p>
      </LegalSection>

      <LegalSection title="5. Rızanızı Nasıl Verir, Nasıl Geri Alırsınız">
        <p>
          CV&apos;nizi yükleyip &quot;Analiz Et&quot;e basmadan önce
          sunulan onay kutusunu işaretlemeniz, bu metni okuduğunuzu ve
          CV&apos;nizin yukarıda açıklanan şekilde işlenmesine açık rıza
          verdiğinizi gösterir. Bu özelliği kullanmak zorunda değilsiniz; CV
          eklemeden yalnızca ilan üzerinden de analiz alabilirsiniz. Daha
          önce verdiğiniz rızayı geri almak için{" "}
          <strong>hr.benayaktas@gmail.com</strong> adresinden bize
          ulaşabilirsiniz.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
