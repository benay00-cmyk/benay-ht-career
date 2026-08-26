import type { MetadataRoute } from "next";

import { blogPosts } from "@/features/blog/data/posts";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3001";

const staticRoutes = [
  "",
  "/is-arayanlar",
  "/ik-profesyonelleri",
  "/ik-profesyonelleri/prompt-kutuphanesi",
  "/ai-asistan",
  "/egitimler",
  "/danismanlik",
  "/ik-haritasi",
  "/ik-haritasi/mentorluk",
  "/blog",
  "/hakkimda",
  "/iletisim",
  "/gizlilik-politikasi",
  "/cerez-politikasi",
  "/kvkk-aydinlatma-metni",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.6,
  }));

  const postEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.category}/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...postEntries];
}
