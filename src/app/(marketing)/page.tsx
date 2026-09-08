import { Hero } from "@/components/marketing/hero";
import { UserPaths } from "@/components/marketing/user-paths";
import { FreeTestTeaser } from "@/components/marketing/free-test-teaser";
import { AiAssistantTeaser } from "@/components/marketing/ai-assistant-teaser";
import { AboutTeaser } from "@/components/marketing/about-teaser";
import { BlogTeaser } from "@/components/marketing/blog-teaser";
import { Testimonials } from "@/components/marketing/testimonials";
import { FinalCta } from "@/components/marketing/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <UserPaths />
      <FreeTestTeaser />
      <AiAssistantTeaser />
      <AboutTeaser />
      <BlogTeaser />
      <Testimonials />
      <FinalCta />
    </>
  );
}
