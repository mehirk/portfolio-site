import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogPost, formatPostDate } from "@/lib/blog";

export function ArticleCard({ post }: { post: BlogPost }) {
  return (
    <article className="article-card">
      <Link href={`/blog/${post.slug}`} className="article-card__link" aria-label={`Read ${post.title}`}>
        <span className="article-card__number" aria-hidden="true">Field note 01</span>
        <div className="article-card__content">
          <div className="article-meta">
            <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingMinutes} min read</span>
          </div>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <div className="tag-list" aria-label="Topics">
            {post.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
          </div>
          <span className="article-card__read">Read article <ArrowRight aria-hidden="true" /></span>
        </div>
      </Link>
    </article>
  );
}
