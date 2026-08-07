import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <p>© {new Date().getFullYear()} Mehir Kumar</p>
        <div className="footer-links">
          <Link href="/blog">Writing</Link>
          <a href="https://github.com/mehirk" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/mehirkumar" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:mehirk28@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
