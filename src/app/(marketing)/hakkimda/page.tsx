import type { Metadata } from "next";
import { User } from "lucide-react";

import { ComingSoon } from "@/components/marketing/coming-soon";

export const metadata: Metadata = { title: "Hakkımda · Benay HR" };

export default function HakkimdaPage() {
  return (
    <ComingSoon
      icon={User}
      eyebrow="Hakkımda"
      title="Benay'ın deneyimi ve yaklaşımı."
      description="Deneyim, uzmanlık alanları ve sosyal kanıt için tam sayfa yakında hazır olacak."
    />
  );
}
