import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value.replace(/[<>&'\"]/g, (character) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[character] ?? character);
}

export function GET() {
  const items = getAllPosts().map((post) => `<item><title>${escapeXml(post.title)}</title><link>https://mehirk.dev/blog/${post.slug}</link><guid>https://mehirk.dev/blog/${post.slug}</guid><pubDate>${new Date(`${post.publishedAt}T12:00:00Z`).toUTCString()}</pubDate><description>${escapeXml(post.description)}</description></item>`).join("");
  const xml = `<?xml version="1.0" encoding="UTF-8" ?><rss version="2.0"><channel><title>Mehir Kumar Blog</title><link>https://mehirk.dev/blog</link><description>Notes on engineering systems that last.</description>${items}</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
