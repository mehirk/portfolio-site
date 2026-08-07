import "server-only";

import fs from "node:fs";
import path from "node:path";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  tags: string[];
  author: string;
  content: string;
  readingMinutes: number;
};

type BlogPostMeta = Omit<BlogPost, "content" | "readingMinutes"> & {
  file: string;
};

const posts: BlogPostMeta[] = [
  {
    slug: "cache-paradox",
    file: "cache-paradox.md",
    title: "The Cache Paradox: When an Optimization Becomes a Dependency",
    description:
      "Caching can make an application dramatically faster, but what happens when the database quietly becomes dependent on it?",
    publishedAt: "2026-08-06",
    author: "Mehir Kumar",
    tags: ["Caching", "System Design", "Databases", "Reliability"],
  },
];

const contentDirectory = path.join(process.cwd(), "src/content/blog");

function readingTime(content: string) {
  const plainText = content
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#>*_`|\[\]()\-]/g, " ");
  const words = plainText.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

function hydratePost(meta: BlogPostMeta): BlogPost {
  const content = fs.readFileSync(path.join(contentDirectory, meta.file), "utf8");
  const { file: _file, ...post } = meta;
  void _file;
  return { ...post, content, readingMinutes: readingTime(content) };
}

export function getAllPosts() {
  return posts
    .map(hydratePost)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

export function getPost(slug: string) {
  const post = posts.find((item) => item.slug === slug);
  return post ? hydratePost(post) : null;
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export function slugifyHeading(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function getTableOfContents(content: string) {
  return content
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const title = line.slice(3).trim();
      return { title, id: slugifyHeading(title) };
    });
}
