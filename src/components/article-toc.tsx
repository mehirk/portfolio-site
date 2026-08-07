"use client";

import { useEffect, useState } from "react";

type TocItem = {
  id: string;
  title: string;
};

export function ArticleToc({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((heading): heading is HTMLElement => Boolean(heading));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleHeading = entries.find((entry) => entry.isIntersecting);
        if (visibleHeading) setActiveId(visibleHeading.target.id);
      },
      { rootMargin: "-15% 0px -75% 0px", threshold: 0 },
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-labelledby="contents-heading">
      <p className="eyebrow" id="contents-heading">In this article</p>
      <ol>
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <li className={isActive ? "is-active" : undefined} key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "location" : undefined}
                onClick={() => setActiveId(item.id)}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
