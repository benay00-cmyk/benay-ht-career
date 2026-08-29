import { Hero } from "@/components/marketing/hero";
import { UserPaths } from "@/components/marketing/user-paths";
import { BlogTeaser } from "@/components/marketing/blog-teaser";
import { Testimonials } from "@/components/marketing/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <UserPaths />
      <BlogTeaser />
      <Testimonials />
    </>
  );
}
