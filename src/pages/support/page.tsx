import { useMemo, useState } from "react";
import SiteLayout from "@/components/feature/SiteLayout";
import Accordion from "@/components/base/Accordion";
import { helpCategories, helpArticles, supportChannels } from "@/mocks/support";

export default function Support() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [toast, setToast] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return helpArticles.filter((article) => {
      const matchesCategory = activeCategory === "all" || article.category === activeCategory;
      const matchesQuery =
        !term ||
        article.question.toLowerCase().includes(term) ||
        article.answer.toLowerCase().includes(term);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  const openChannel = (title: string) => {
    setToast(`Opening ${title}… an agent will be with you shortly.`);
    window.setTimeout(() => setToast(null), 3000);
  };

  return (
    <SiteLayout>
      <div className="space-y-6">
        <section className="relative overflow-hidden rounded-2xl border border-foreground-50/10 bg-background-900/60 p-5 md:p-8">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl"></div>
          <div className="absolute -bottom-24 left-1/4 h-56 w-56 rounded-full bg-secondary-500/15 blur-3xl"></div>

          <div className="relative mx-auto max-w-2xl text-center">
            <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-foreground-50/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-foreground-200">
              <i className="ri-customer-service-2-line text-primary-400"></i>
              Help center
            </p>
            <h1 className="font-heading text-2xl font-extrabold tracking-tight text-foreground-50 md:text-4xl">
              How can we <span className="text-gradient">help</span>?
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-foreground-400">
              Search {helpArticles.length} answers, or jump straight into live chat — average reply
              time is under 40 seconds.
            </p>

            <div className="relative mt-5">
              <i className="ri-search-line pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-foreground-500"></i>
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search help articles…"
                className="w-full rounded-xl border border-foreground-50/10 bg-background-950/70 py-3.5 pl-11 pr-4 text-sm text-foreground-100 outline-none transition-colors placeholder:text-foreground-600 focus:border-primary-500/60"
              />
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {helpCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() =>
                setActiveCategory((prev) => (prev === category.id ? "all" : category.id))
              }
              className={`group flex items-start gap-3 rounded-xl border p-4 text-left transition-all cursor-pointer ${
                activeCategory === category.id
                  ? "border-primary-500/50 bg-primary-500/10"
                  : "border-foreground-50/10 bg-background-900/60 hover:border-foreground-50/25"
              }`}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-foreground-50/10">
                <i className={`${category.icon} text-lg text-primary-400`}></i>
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-foreground-50">{category.title}</p>
                <p className="mt-0.5 line-clamp-2 text-[11px] leading-relaxed text-foreground-400">
                  {category.description}
                </p>
                <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-wider text-foreground-500">
                  {category.articles} articles
                </p>
              </div>
            </button>
          ))}
        </section>

        <section className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="font-heading text-lg font-extrabold text-foreground-50 md:text-xl">
              {activeCategory === "all"
                ? query
                  ? `Results for "${query}"`
                  : "Popular questions"
                : helpCategories.find((item) => item.id === activeCategory)?.title}
            </h2>
            {activeCategory !== "all" || query ? (
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("all");
                  setQuery("");
                }}
                className="whitespace-nowrap rounded-full bg-foreground-50/10 px-3 py-1.5 text-[11px] font-semibold text-foreground-300 transition-colors hover:text-foreground-50 cursor-pointer"
              >
                Reset filters
              </button>
            ) : null}
          </div>

          {filtered.length > 0 ? (
            <Accordion
              items={filtered.map((article) => ({
                id: article.id,
                question: article.question,
                answer: article.answer,
              }))}
              defaultOpenId={filtered[0]?.id}
            />
          ) : (
            <div className="rounded-2xl border border-foreground-50/10 bg-background-900/50 px-6 py-14 text-center">
              <i className="ri-search-eye-line text-3xl text-foreground-600"></i>
              <p className="mt-3 text-sm font-semibold text-foreground-200">
                No articles matched that
              </p>
              <p className="mt-1 text-xs text-foreground-500">
                Try a shorter phrase, or ask an agent in live chat.
              </p>
              <button
                type="button"
                onClick={() => openChannel("live chat")}
                className="mt-4 whitespace-nowrap rounded-xl bg-gradient-brand px-5 py-2.5 text-sm font-bold text-white cursor-pointer"
              >
                Start live chat
              </button>
            </div>
          )}
        </section>

        <section className="grid grid-cols-1 gap-2.5 md:grid-cols-3">
          {supportChannels.map((channel) => (
            <div
              key={channel.title}
              className={`rounded-2xl border p-5 ${
                channel.accent
                  ? "border-primary-500/40 bg-primary-500/10"
                  : "border-foreground-50/10 bg-background-900/60"
              }`}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground-50/10">
                <i className={`${channel.icon} text-lg text-foreground-50`}></i>
              </span>
              <p className="mt-3 font-heading text-sm font-bold text-foreground-50">
                {channel.title}
              </p>
              <p className="mt-0.5 text-xs text-foreground-400">{channel.detail}</p>
              <button
                type="button"
                onClick={() => openChannel(channel.title)}
                className={`mt-4 w-full whitespace-nowrap rounded-xl py-2.5 text-xs font-bold transition-colors cursor-pointer ${
                  channel.accent
                    ? "bg-gradient-brand text-white"
                    : "bg-foreground-50/10 text-foreground-100 hover:bg-foreground-50/20"
                }`}
              >
                {channel.action}
              </button>
            </div>
          ))}
        </section>

        <section className="rounded-2xl border border-foreground-50/10 bg-background-900/50 p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-heading text-base font-bold text-foreground-50">
                Worried about your play?
              </h2>
              <p className="mt-1 max-w-xl text-xs leading-relaxed text-foreground-400">
                Deposit limits, cool-off periods and self-exclusion are all available instantly from
                your account settings. No questions asked, and support cannot undo them.
              </p>
            </div>
            <a
              href="/account"
              className="whitespace-nowrap rounded-xl bg-foreground-50/10 px-5 py-2.5 text-center text-xs font-bold text-foreground-50 transition-colors hover:bg-foreground-50/20"
            >
              Responsible gambling tools
            </a>
          </div>
        </section>
      </div>

      {toast ? (
        <div className="fixed bottom-5 left-1/2 z-[70] w-[min(92vw,380px)] -translate-x-1/2 rounded-xl border border-foreground-50/10 bg-background-800 px-4 py-3 text-center text-xs font-semibold text-foreground-50 shadow-2xl float-in">
          <i className="ri-customer-service-2-line mr-1.5 text-primary-400"></i>
          {toast}
        </div>
      ) : null}
    </SiteLayout>
  );
}