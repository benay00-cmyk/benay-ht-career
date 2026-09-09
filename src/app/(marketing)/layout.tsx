import { Header } from "@/components/marketing/header";
import { Footer } from "@/components/marketing/footer";
import { SmoothScroll } from "@/components/providers/smooth-scroll";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-svh flex-col">
      <SmoothScroll />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
