import { z } from "zod";

export const leadTypeEnum = z.enum([
  "mentorluk",
  "danismanlik",
  "kurumsal",
  "egitim",
  "urun",
  "iletisim",
]);

export type LeadType = z.infer<typeof leadTypeEnum>;

export const LEAD_TYPE_LABELS: Record<LeadType, string> = {
  mentorluk: "İK Mentörlüğü",
  danismanlik: "Danışmanlık",
  kurumsal: "Kurumsal Danışmanlık",
  egitim: "Eğitim Ön Kaydı",
  urun: "Dijital Ürün",
  iletisim: "Genel İletişim",
};

export const mentorshipLeadSchema = z.object({
  type: z.literal("mentorluk"),
  name: z.string().min(2, "Adınızı girin."),
  email: z.string().email("Geçerli bir e-posta adresi girin."),
  currentRole: z.string().min(2, "Mevcut pozisyonunuzu belirtin."),
  experience: z.string().min(1, "Deneyim süresini belirtin."),
  targetRole: z.string().min(2, "Hedef pozisyonunuzu belirtin."),
  biggestChallenge: z
    .string()
    .min(10, "En büyük problemi biraz daha detaylandırın."),
  expectation: z.string().min(10, "Beklentinizi biraz daha detaylandırın."),
  preferredContact: z.enum(["email", "telefon", "video-gorusme"]),
});

export type MentorshipLeadValues = z.infer<typeof mentorshipLeadSchema>;

export const generalLeadSchema = z.object({
  type: leadTypeEnum.exclude(["mentorluk"]),
  context: z.string().min(1, "Lütfen ilgilendiğiniz konuyu belirtin."),
  name: z.string().min(2, "Adınızı girin."),
  email: z.string().email("Geçerli bir e-posta adresi girin."),
  phone: z.string().optional(),
  message: z.string().min(10, "Mesajınızı biraz daha detaylandırın."),
});

export type GeneralLeadValues = z.infer<typeof generalLeadSchema>;
