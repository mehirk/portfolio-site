"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Github,
  GraduationCap,
  Layers,
  Mail,
  Search,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

type Item = {
  title: string;
  href?: string;
  badge?: string;
  icon?: React.ComponentType<{ className?: string }>;
  keywords?: string;
  action?: () => void;
};

const sections: { heading: string; items: Item[] }[] = [
  {
    heading: "Jump to",
    items: [
      {
        title: "About / Hero",
        href: "#about",
        badge: "Intro",
        icon: Sparkles,
        keywords: "analytics engineer rbc hero",
      },
      {
        title: "Experience",
        href: "#experience",
        badge: "Work",
        icon: Layers,
        keywords: "rbc analytics engineer co-op acadia desk assistant resident assistant",
      },
      {
        title: "Projects",
        href: "#projects",
        badge: "Builds",
        icon: Search,
        keywords: "ai learning dashboard study link secura staff app",
      },
      {
        title: "Skills",
        href: "#skills",
        badge: "Stacks",
        icon: GraduationCap,
        keywords: "typescript react next prisma postgres docker",
      },
      {
        title: "Contact",
        href: "#contact",
        badge: "Reach out",
        icon: Mail,
        keywords: "email linkedin",
      },
    ],
  },
  {
    heading: "Projects",
    items: [
      {
        title: "AI Learning Dashboard",
        href: "https://ailearnly.com",
        badge: "Live",
        icon: ArrowUpRight,
        keywords: "react tailwind firebase chart js ai",
      },
      {
        title: "Study Link",
        href: "https://studylink.dryft.ca",
        badge: "Live",
        icon: ArrowUpRight,
        keywords: "collaboration express postgres prisma docker",
      },
      {
        title: "Secura Staff App",
        href: "https://github.com/mehirk/Secura-Staff-App",
        badge: "Repo",
        icon: ArrowUpRight,
        keywords: "python encryption tkinter csv",
      },
    ],
  },
  {
    heading: "Contact & Links",
    items: [
      {
        title: "Copy email",
        badge: "Action",
        icon: Mail,
        action: () => navigator.clipboard?.writeText("mehirk28@gmail.com"),
        keywords: "email clipboard",
      },
      {
        title: "Email",
        href: "mailto:mehirk28@gmail.com",
        badge: "Reach",
        icon: Mail,
      },
      {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/mehirkumar",
        badge: "External",
        icon: ArrowUpRight,
      },
      {
        title: "GitHub",
        href: "https://github.com/mehirk",
        badge: "External",
        icon: Github,
      },
    ],
  },
];

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    if (!q) return sections;
    return sections
      .map((section) => ({
        ...section,
        items: section.items.filter((item) =>
          [item.title, item.badge, item.keywords]
            .filter(Boolean)
            .some((text) => text!.toLowerCase().includes(q))
        ),
      }))
      .filter((section) => section.items.length > 0);
  }, [query]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-semibold text-white transition hover:border-emerald-300/60 hover:text-emerald-100"
      >
        <Search className="h-4 w-4" />
        <span>Search (⌘K)</span>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput
            placeholder="Search portfolio..."
            value={query}
            onValueChange={setQuery}
            icon={<Search className="h-4 w-4" />}
          />
          <CommandList>
            <CommandEmpty>No results.</CommandEmpty>
            {filtered.map((section) => (
              <CommandGroup key={section.heading} heading={section.heading}>
                {section.items.map((item) => (
                  <CommandItem
                    key={item.title}
                    value={item.title}
                    onSelect={() => {
                      setOpen(false);
                      if (item.action) {
                        item.action();
                        return;
                      }
                      if (!item.href) return;
                      const newTab = item.href.startsWith("http") || item.href.startsWith("mailto:");
                      if (newTab) {
                        window.open(item.href, "_blank", "noopener,noreferrer");
                      } else {
                        window.location.hash = item.href;
                      }
                    }}
                  >
                    {item.icon ? <item.icon className="mr-2 h-4 w-4" /> : null}
                    <span className="flex-1">{item.title}</span>
                    {item.badge ? (
                      <span className="rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em]">
                        {item.badge}
                      </span>
                    ) : null}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
