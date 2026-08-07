import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://mehirk.dev", lastModified: new Date("2026-08-06"), changeFrequency: "monthly", priority: 1 },
    { url: "https://mehirk.dev/blog", lastModified: new Date("2026-08-06"), changeFrequency: "weekly", priority: 0.8 },
    ...getAllPosts().map((post) => ({ url: `https://mehirk.dev/blog/${post.slug}`, lastModified: new Date(post.publishedAt), changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
