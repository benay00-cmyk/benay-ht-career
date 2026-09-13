import { Hero } from "@/components/marketing/hero";
import { UserPaths } from "@/components/marketing/user-paths";
import { AiAssistantTeaser } from "@/components/marketing/ai-assistant-teaser";
import { AboutTeaser } from "@/components/marketing/about-teaser";
import { BlogTeaser } from "@/components/marketing/blog-teaser";
import { Testimonials } from "@/components/marketing/testimonials";
import { FaqSection } from "@/components/marketing/faq-section";
import { FinalCta } from "@/components/marketing/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <UserPaths />
      <AiAssistantTeaser />
      <AboutTeaser />
      <BlogTeaser />
      <Testimonials />
      <FaqSection />
      <FinalCta />
    </>
  );
}
