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
import { Github, GraduationCap, Layers, Mail, Search, Sparkles } from "lucide-react";

type CommandLink = {
  title: string;
  href: string;
  badge?: string;
  icon?: React.ComponentType<{ className?: string }>;
  keywords?: string;
};

const links: CommandLink[] = [
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
  {
    title: "GitHub",
    href: "https://github.com/mehirk",
    badge: "External",
    icon: Github,
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
    if (!q) return links;
    return links.filter((link) =>
      [link.title, link.badge, link.keywords]
        .filter(Boolean)
        .some((text) => text!.toLowerCase().includes(q))
    );
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
            <CommandGroup heading="Sections & Links">
              {filtered.map((item) => (
                <CommandItem
                  key={item.title}
                  value={item.title}
                  onSelect={() => {
                    setOpen(false);
                    const newTab = item.href.startsWith("http");
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
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
