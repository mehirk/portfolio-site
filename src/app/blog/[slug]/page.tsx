import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArticleToc } from "@/components/article-toc";
import { ReadingProgress } from "@/components/reading-progress";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { formatPostDate, getAllPosts, getPost, getTableOfContents, slugifyHeading } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `https://mehirk.dev/blog/${post.slug}`;
  return {
    title: `${post.title} | Mehir Kumar`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: "Mehir Kumar",
      type: "article",
    publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: { card: "summary", title: post.title, description: post.description },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const posts = getAllPosts();
  const postIndex = posts.findIndex((item) => item.slug === post.slug);
  const nextPost = posts[postIndex + 1] ?? null;
  const url = `https://mehirk.dev/blog/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Person", name: post.author, url: "https://mehirk.dev" },
    publisher: { "@type": "Person", name: post.author },
    keywords: post.tags.join(", "),
  };
  const tableOfContents = getTableOfContents(post.content);

  return (
    <>
      <SiteHeader />
      <main className="article-page">
        <ReadingProgress />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
        <article>
          <header className="article-header shell">
            <Link href="/blog" className="back-link"><ArrowLeft aria-hidden="true" /> All articles</Link>
            <div className="article-header__content">
              <p className="eyebrow">Systems & reliability</p>
              <h1>{post.title}</h1>
              <p className="article-header__description">{post.description}</p>
              <div className="article-meta article-meta--large">
                <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time><span>·</span><span>{post.readingMinutes} min read</span>
              </div>
              <ul className="tag-list" aria-label="Article topics">{post.tags.map((tag) => <li className="tag" key={tag}>{tag}</li>)}</ul>
            </div>
          </header>
          <div className="article-layout shell">
            <aside className="article-toc">
              <ArticleToc items={tableOfContents} />
            </aside>
            <div className="prose">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h2: ({ children }) => <h2 id={slugifyHeading(String(children))}>{children}</h2>,
                  code: ({ className, children, ...props }) => (
                    <code className={className} aria-label={className === "language-text" ? "System diagram" : undefined} {...props}>{children}</code>
                  ),
                }}
              >{post.content}</ReactMarkdown>
            </div>
          </div>
          <footer className="article-footer">
            <div className="author-card">
              <div className="author-card__mark" aria-hidden="true">MK</div>
              <div><p className="eyebrow">Written by</p><h2>{post.author}</h2><p>Computer science student building and studying reliable software systems across the stack.</p></div>
            </div>
            <div className="next-article">
              <p className="eyebrow">Keep reading</p>
              {nextPost ? <Link href={`/blog/${nextPost.slug}`}>{nextPost.title}<ArrowRight aria-hidden="true" /></Link> : <div><h2>More field notes are on the way.</h2><p>This is the first article in the collection. The next one is currently taking shape.</p><Link className="text-link" href="/blog">Browse all articles <ArrowRight aria-hidden="true" /></Link></div>}
            </div>
          </footer>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
