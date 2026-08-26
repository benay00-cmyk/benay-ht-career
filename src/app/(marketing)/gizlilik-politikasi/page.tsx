import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage, LegalSection } from "@/components/legal/legal-page";

export const metadata: Metadata = { title: "Gizlilik Politikası · Benay HR" };

export default function GizlilikPolitikasiPage() {
  return (
    <LegalPage title="Gizlilik Politikası" updatedAt="[YAYIN TARİHİ]">
      <p>
        Bu sayfa, Benay HR &amp; Career platformunu kullanırken verilerinizin
        nasıl işlendiğini sade bir dille anlatır. Yasal ayrıntılar için{" "}
        <Link href="/kvkk-aydinlatma-metni" className="text-navy-deep underline underline-offset-2 hover:text-gold-deep">
          KVKK Aydınlatma Metni
        </Link>
        &apos;ni inceleyebilirsiniz.
      </p>

      <LegalSection title="Hangi Verileri Topluyoruz?">
        <p>
          Yalnızca kullandığınız özelliğe bağlı olarak veri toplarız —
          siteyi gezinirken bir hesap açmanız gerekmez.
        </p>
        <ul className="list-disc pl-5">
          <li>Kariyer Asistanı: yüklediğiniz CV ve yapıştırdığınız ilan metni</li>
          <li>İK Yapay Zeka Asistanı: yazdığınız soru</li>
          <li>Talep formları: ad, e-posta, telefon (opsiyonel), mesajınız</li>
        </ul>
      </LegalSection>

      <LegalSection title="Verilerinizi Nasıl Kullanıyoruz?">
        <p>
          CV ve ilan metniniz yalnızca analiz sonucunu üretmek için yapay
          zekâ servis sağlayıcımıza iletilir. Talep formu verileriniz,
          talebinizi değerlendirip size dönüş yapabilmemiz için kullanılır.
          Verilerinizi pazarlama amacıyla üçüncü taraflara satmayız.
        </p>
      </LegalSection>

      <LegalSection title="Dosya Yükleme Güvenliği">
        <ul className="list-disc pl-5">
          <li>Yalnızca PDF formatındaki dosyalar kabul edilir.</li>
          <li>Maksimum dosya boyutu 4 MB ile sınırlıdır.</li>
          <li>Yüklenen dosyalar analiz amacı dışında kullanılmaz.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Verilerinizin Silinmesini Talep Etme">
        <p>
          Bize ilettiğiniz herhangi bir verinin silinmesini istediğinizde,{" "}
          <strong>[BAŞVURU E-POSTASI]</strong> adresine yazmanız yeterlidir.
          Talebinizi makul bir süre içinde yerine getiririz.
        </p>
      </LegalSection>

      <LegalSection title="Yapay Zekâ Kullanımı Hakkında">
        <p>
          Platform, CV/ilan analizi ve İK sorularınızı yanıtlamak için
          Anthropic&apos;in Claude modelini kullanır. Yapay zeka çıktıları
          tahminidir,
          kesin sonuç veya profesyonel/hukuki tavsiye niteliği taşımaz;
          insan değerlendirmesinin yerini almaz.
        </p>
      </LegalSection>

      <LegalSection title="Bize Ulaşın">
        <p>
          Gizlilikle ilgili sorularınız için{" "}
          <Link href="/iletisim" className="text-navy-deep underline underline-offset-2 hover:text-gold-deep">
            iletişim formu
          </Link>
          {" "}üzerinden ya da <strong>[BAŞVURU E-POSTASI]</strong> adresinden
          bize ulaşabilirsiniz.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
