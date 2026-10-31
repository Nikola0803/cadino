import { useState } from "react";
import type { BlogSection } from "@/mocks/blogBody";
import { slugify } from "@/pages/blog/detail/components/ArticleBody";

interface ArticleSidebarProps {
  sections: BlogSection[];
  title: string;
}

export default function ArticleSidebar({ sections, title }: ArticleSidebarProps) {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <aside className="space-y-3 lg:sticky lg:top-24 lg:self-start">
      <div className="rounded-2xl border border-foreground-50/10 bg-background-900/60 p-4">
        <h2 className="flex items-center gap-2 font-heading text-[11px] font-bold uppercase tracking-wider text-foreground-400">
          <i className="ri-list-unordered text-primary-400"></i>
          In this article
        </h2>
        <nav className="mt-3 space-y-1">
          {sections.map((section, index) => (
            <a
              key={section.heading}
              href={`#${slugify(section.heading)}`}
              className="group flex gap-2 rounded-lg px-2 py-1.5 text-xs leading-snug text-foreground-400 transition-colors hover:bg-foreground-50/5 hover:text-foreground-50"
            >
              <span className="font-mono text-[10px] text-foreground-600 group-hover:text-primary-400">
                0{index + 1}
              </span>
              <span>{section.heading}</span>
            </a>
          ))}
        </nav>
      </div>

      <div className="rounded-2xl border border-foreground-50/10 bg-background-900/60 p-4">
        <h2 className="flex items-center gap-2 font-heading text-[11px] font-bold uppercase tracking-wider text-foreground-400">
          <i className="ri-share-forward-line text-primary-400"></i>
          Share
        </h2>
        <div className="mt-3 flex gap-2">
          <button
            type="button"
            onClick={copyLink}
            aria-label="Copy article link"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground-50/10 text-foreground-200 transition-colors hover:bg-primary-500 hover:text-white cursor-pointer"
          >
            <i className={`${copied ? "ri-check-line" : "ri-link"} text-base`}></i>
          </button>
          {[
            { icon: "ri-twitter-x-line", label: "Share on X" },
            { icon: "ri-telegram-line", label: "Share on Telegram" },
            { icon: "ri-whatsapp-line", label: "Share on WhatsApp" },
          ].map((item) => (
            <button
              key={item.icon}
              type="button"
              aria-label={item.label}
              onClick={copyLink}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground-50/10 text-foreground-200 transition-colors hover:bg-primary-500 hover:text-white cursor-pointer"
            >
              <i className={`${item.icon} text-base`}></i>
            </button>
          ))}
        </div>
        <p className="mt-2.5 text-[10px] leading-relaxed text-foreground-600">
          {copied ? "Link copied to clipboard." : `Share "${title.slice(0, 34)}…" with your crew.`}
        </p>
      </div>
    </aside>
  );
}