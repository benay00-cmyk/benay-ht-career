import type { Metadata } from "next";

import { LegalPage, LegalSection } from "@/components/legal/legal-page";

export const metadata: Metadata = { title: "Çerez Politikası · Benay HR" };

export default function CerezPolitikasiPage() {
  return (
    <LegalPage title="Çerez Politikası" updatedAt="[YAYIN TARİHİ]">
      <LegalSection title="Şu An Durum">
        <p>
          Bu platform şu anda reklam, analitik veya izleme amaçlı hiçbir
          çerez (cookie) kullanmamaktadır. Sitede yalnızca tarayıcınızın
          sayfayı normal şekilde çalıştırması için gereken, kişisel veri
          içermeyen teknik mekanizmalar bulunur.
        </p>
      </LegalSection>

      <LegalSection title="İleride Değişirse">
        <p>
          Platforma ileride analitik (örn. ziyaretçi istatistikleri) ya da
          benzeri bir araç eklenirse, bu sayfa güncellenecek ve gerekli
          durumlarda sitede bir çerez onay bildirimi gösterilerek açık
          rızanız istenecektir. Onay vermediğiniz sürece, isteğe bağlı
          çerezler cihazınıza yerleştirilmez.
        </p>
      </LegalSection>

      <LegalSection title="Sorularınız İçin">
        <p>
          Çerez kullanımıyla ilgili sorularınız için <strong>[BAŞVURU E-POSTASI]</strong>{" "}
          adresinden bize ulaşabilirsiniz.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
