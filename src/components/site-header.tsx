import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link className="wordmark" href="/" aria-label="Mehir Kumar, home">
          <span className="wordmark__mark" aria-hidden="true">MK</span>
          <span>Mehir Kumar</span>
        </Link>
        <nav className="primary-nav" aria-label="Primary navigation">
          <Link href="/#work">Work</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/blog">Blog</Link>
          <a href="mailto:mehirk28@gmail.com">Contact</a>
        </nav>
      </div>
    </header>
  );
}
