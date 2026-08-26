import type { Metadata } from "next";

import { LegalPage, LegalSection } from "@/components/legal/legal-page";

export const metadata: Metadata = { title: "KVKK Aydınlatma Metni · Benay HR" };

export default function KvkkAydinlatmaMetniPage() {
  return (
    <LegalPage title="KVKK Aydınlatma Metni" updatedAt="[YAYIN TARİHİ]">
      <p className="text-[13px] text-ink-muted">
        Bu metindeki köşeli parantez içindeki alanlar, platform yayına
        alınmadan önce gerçek veri sorumlusu bilgileriyle doldurulmalıdır.
      </p>

      <LegalSection title="1. Veri Sorumlusu">
        <p>
          6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;)
          uyarınca, Benay HR &amp; Career platformu (&quot;Platform&quot;)
          üzerinden paylaştığınız kişisel verileriniz, veri sorumlusu sıfatıyla{" "}
          <strong>[VERİ SORUMLUSU UNVANI / AD SOYAD]</strong> (&quot;Benay
          HR&quot;) tarafından, aşağıda açıklanan kapsamda işlenmektedir.
        </p>
        <p>İletişim: [E-POSTA ADRESİ] · [ADRES, VARSA]</p>
      </LegalSection>

      <LegalSection title="2. İşlenen Kişisel Veri Kategorileri">
        <p>Platform üzerindeki kullanımınıza göre aşağıdaki veriler işlenebilir:</p>
        <ul className="list-disc pl-5">
          <li>Kimlik ve iletişim bilgileri (ad soyad, e-posta, telefon)</li>
          <li>
            CV içeriği ve iş ilanı metni (Kariyer Asistanı kullanıldığında)
          </li>
          <li>
            Mesleki bilgiler (mevcut/hedef pozisyon, deneyim, İK sorularınız)
          </li>
          <li>
            Talep/mesaj içerikleri (danışmanlık, mentörlük, eğitim, iletişim
            formları)
          </li>
          <li>
            Teknik veriler (IP adresi — yalnızca hız sınırlama/güvenlik
            amacıyla, kısa süreli)
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. İşleme Amaçları ve Hukuki Sebep">
        <p>Kişisel verileriniz KVKK m. 5&apos;te belirtilen hukuki sebeplere dayanarak:</p>
        <ul className="list-disc pl-5">
          <li>
            <strong>Açık rızanız</strong> ile: CV ve iş ilanı metninizin yapay
            zekâ destekli analiz için işlenmesi,
          </li>
          <li>
            <strong>Sözleşmenin kurulması/ifası</strong> için: talep
            ettiğiniz danışmanlık, mentörlük, eğitim ön kaydı hizmetlerinin
            yürütülmesi,
          </li>
          <li>
            <strong>Meşru menfaat</strong> kapsamında: hizmet kalitesinin
            iyileştirilmesi, kötüye kullanımın önlenmesi (hız sınırlama)
            amaçlarıyla işlenmektedir.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Açık Rıza Gerektiren İşlemler">
        <p>
          Kariyer Asistanı&apos;na CV yüklediğinizde ve iş ilanı metni
          girdiğinizde, bu içerik değerlendirme yapılması amacıyla yapay
          zekâ servis sağlayıcısına (bkz. madde 5) iletilir. Bu özelliği
          kullanmanız, bu işleme açık rıza verdiğiniz anlamına gelir;
          kullanmak zorunda değilsiniz.
        </p>
      </LegalSection>

      <LegalSection title="5. Verilerin Aktarıldığı Taraflar">
        <p>Hizmetin sunulabilmesi için verileriniz sınırlı ölçüde şu hizmet sağlayıcılarla paylaşılabilir:</p>
        <ul className="list-disc pl-5">
          <li>
            <strong>Anthropic (Claude API)</strong> — CV/ilan analizi ve İK
            asistanı yanıtlarının üretilmesi için (yurt dışı veri işleyici).
          </li>
          <li>
            <strong>Resend</strong> — talep formu bildirimlerinin e-posta ile
            iletilmesi için.
          </li>
          <li>
            <strong>[BARINDIRMA/HOSTING SAĞLAYICISI]</strong> — platformun
            teknik altyapısının barındırılması için.
          </li>
        </ul>
        <p>
          Verileriniz, yukarıdakiler dışında, yasal zorunluluklar hariç,
          üçüncü kişilerle paylaşılmaz veya satılmaz.
        </p>
      </LegalSection>

      <LegalSection title="6. Veri Saklama Süresi">
        <p>
          CV ve ilan analiz verileri, hizmetin sunulması için gerekli makul
          süre boyunca saklanır ve bu sürenin sonunda silinir veya anonim
          hale getirilir. Talep formu verileri, talebinizin sonuçlanmasından
          itibaren makul bir süre saklandıktan sonra silinir. Daha uzun
          saklama gerektiren yasal yükümlülükler saklıdır.
        </p>
      </LegalSection>

      <LegalSection title="7. KVKK Madde 11 Kapsamındaki Haklarınız">
        <p>KVKK&apos;nın 11. maddesi uyarınca şu haklara sahipsiniz:</p>
        <ul className="list-disc pl-5">
          <li>Kişisel verinizin işlenip işlenmediğini öğrenme,</li>
          <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
          <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
          <li>Eksik/yanlış işlenmişse düzeltilmesini isteme,</li>
          <li>KVKK&apos;da öngörülen şartlar çerçevesinde silinmesini/yok edilmesini isteme,</li>
          <li>İşlemenin münhasıran otomatik sistemlerle analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme,</li>
          <li>Kanuna aykırı işleme nedeniyle zarara uğramanız hâlinde zararın giderilmesini talep etme.</li>
        </ul>
        <p>
          Bu haklarınızı kullanmak için <strong>[BAŞVURU E-POSTASI]</strong>{" "}
          adresine yazılı olarak başvurabilirsiniz.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
