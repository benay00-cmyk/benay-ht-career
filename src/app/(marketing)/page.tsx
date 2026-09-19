import { Hero } from "@/components/marketing/hero";
import { UserPaths } from "@/components/marketing/user-paths";
import { AboutTeaser } from "@/components/marketing/about-teaser";
import { Testimonials } from "@/components/marketing/testimonials";
import { FaqSection } from "@/components/marketing/faq-section";
import { FinalCta } from "@/components/marketing/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <UserPaths />
      <AboutTeaser />
      <Testimonials />
      <FaqSection />
      <FinalCta />
    </>
  );
}
