import type { Metadata } from "next";
import { ArticleCard } from "@/components/article-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Mehir Kumar",
  description: "Writing by Mehir Kumar about software engineering, system design, data, and building reliable products.",
  alternates: { canonical: "https://mehirk.dev/blog" },
  openGraph: {
    title: "Blog | Mehir Kumar",
    description: "Notes on software engineering, system design, data, and building reliable products.",
    url: "https://mehirk.dev/blog",
    siteName: "Mehir Kumar",
    type: "website",
  },
  twitter: { card: "summary", title: "Blog | Mehir Kumar", description: "Notes on engineering systems that last." },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <SiteHeader />
      <main className="blog-index shell">
        <header className="blog-index__header">
          <p className="eyebrow">Writing</p>
          <h1>Following the question past the obvious answer.</h1>
          <p>These articles document what I learn by investigating software systems: their hidden assumptions, failure modes, and the decisions that make them reliable.</p>
        </header>
        <div className="blog-index__toolbar">
          <p>{posts.length} {posts.length === 1 ? "article" : "articles"}</p>
          <a href="/rss.xml">RSS feed</a>
        </div>
        {posts.length ? (
          <div className="article-list">{posts.map((post) => <ArticleCard post={post} key={post.slug} />)}</div>
        ) : (
          <div className="empty-state"><h2>Writing in progress.</h2><p>The first article is being edited. Check back soon.</p></div>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
