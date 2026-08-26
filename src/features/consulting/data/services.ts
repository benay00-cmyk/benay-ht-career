import type { LucideIcon } from "lucide-react";
import {
  FileText,
  MessagesSquare,
  Compass,
  Building2,
  Users,
  Presentation,
} from "lucide-react";

export type ConsultingService = {
  id: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  longDesc: string;
};

export const consultingServices: ConsultingService[] = [
  {
    id: "cv-danismanligi",
    icon: FileText,
    title: "CV Danışmanlığı",
    desc: "CV'nin ATS ve insan gözüyle birlikte gözden geçirilmesi.",
    longDesc: "CV'niz hem ATS sistemleri hem de işe alım uzmanları gözüyle satır satır incelenir; somut, uygulanabilir düzenleme önerileri alırsınız.",
  },
  {
    id: "mulakat-simulasyonu",
    icon: MessagesSquare,
    title: "Mülakat Simülasyonu",
    desc: "Gerçekçi mülakat provası ve geri bildirim.",
    longDesc: "Gerçek bir mülakat ortamını simüle eden bire bir pratik seansı; sonrasında detaylı, yapıcı geri bildirim alırsınız.",
  },
  {
    id: "kariyer-danismanligi",
    icon: Compass,
    title: "Kariyer Danışmanlığı",
    desc: "Yön belirleme, hedef netleştirme ve yol haritası.",
    longDesc: "Kariyer hedeflerinizi netleştirmek ve oraya giden somut bir yol haritası çıkarmak için birlikte çalışırız.",
  },
  {
    id: "ik-danismanligi",
    icon: Building2,
    title: "İK Danışmanlığı",
    desc: "Şirketler için süreç ve sistem kurulumu.",
    longDesc: "İşe alımdan performans yönetimine, İK süreçlerinizi kurumunuzun büyüklüğüne uygun şekilde tasarlar ve kurarız.",
  },
  {
    id: "ik-mentorlugu",
    icon: Users,
    title: "İK Mentörlüğü",
    desc: "Bire bir kariyer ve yetkinlik mentörlüğü.",
    longDesc: "İK kariyerinizde bir sonraki adıma geçmeniz için düzenli, bire bir mentörlük desteği.",
  },
  {
    id: "kurumsal-egitim",
    icon: Presentation,
    title: "Kurumsal Eğitim",
    desc: "Ekipler için özel tasarlanmış İK eğitimleri.",
    longDesc: "Ekibinizin ihtiyaçlarına göre özel olarak tasarlanmış, yerinde ya da online İK eğitimleri.",
  },
];
