import { Hero } from "@/components/marketing/hero";
import { AiAssistantTeaser } from "@/components/marketing/ai-assistant-teaser";
import { UserPaths } from "@/components/marketing/user-paths";
import { AboutTeaser } from "@/components/marketing/about-teaser";
import { BlogTeaser } from "@/components/marketing/blog-teaser";
import { Testimonials } from "@/components/marketing/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AiAssistantTeaser />
      <UserPaths />
      <AboutTeaser />
      <BlogTeaser />
      <Testimonials />
    </>
  );
}
