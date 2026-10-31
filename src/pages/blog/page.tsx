import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SiteLayout from "@/components/feature/SiteLayout";
import PostCard from "@/pages/blog/components/PostCard";
import { blogPosts, blogCategories } from "@/mocks/blog";

const PAGE_SIZE = 6;

export default function Blog() {
  const [active, setActive] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const featured = blogPosts.find((post) => post.featured) ?? blogPosts[0];
  const rest = useMemo(
    () => blogPosts.filter((post) => post.id !== featured.id),
    [featured.id]
  );

  const filtered = useMemo(() => {
    const list = active === "all" ? rest : rest.filter((post) => post.category === active);
    return list;
  }, [active, rest]);

  const shown = filtered.slice(0, visibleCount);

  const changeCategory = (id: string) => {
    setActive(id);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <SiteLayout>
      <div className="space-y-6">
        <section className="space-y-2">
          <p className="inline-flex items-center gap-2 rounded-full bg-foreground-50/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-foreground-200">
            <i className="ri-article-line text-primary-400"></i>
            The Rolabets journal
          </p>
          <h1 className="font-heading text-2xl font-extrabold tracking-tight text-foreground-50 md:text-4xl">
            Winners, guides and <span className="text-gradient">insider notes</span>
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-foreground-400">
            Stories from the lobby, breakdowns from our traders and the occasional reminder to
            actually set a bankroll.
          </p>
        </section>

        <article className="group relative grid cursor-pointer grid-cols-1 overflow-hidden rounded-2xl border border-foreground-50/10 bg-background-900/60 transition-colors hover:border-primary-500/40 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          <Link to={`/blog/${featured.id}`} className="absolute inset-0 z-10 cursor-pointer" aria-label={`Read ${featured.title}`}>
            <span className="sr-only">{featured.title}</span>
          </Link>
          <div className="relative h-[220px] w-full overflow-hidden lg:h-full lg:min-h-[300px]">
            <img
              src={featured.image}
              alt={featured.title}
              title={`${featured.title} — Rolabets journal`}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-950/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-background-900/80"></div>
            <span className="absolute left-4 top-4 rounded-full bg-gradient-brand px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              Featured
            </span>
          </div>

          <div className="flex flex-col justify-center gap-3 p-5 md:p-7">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-foreground-50/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground-200">
              {featured.category}
            </span>
            <h2 className="font-heading text-xl font-extrabold leading-tight text-foreground-50 md:text-2xl">
              {featured.title}
            </h2>
            <p className="line-clamp-3 text-sm leading-relaxed text-foreground-400">
              {featured.excerpt}
            </p>
            <div className="mt-1 flex items-center gap-2 text-[11px] text-foreground-500">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-brand text-[10px] font-bold text-white">
                {featured.author.slice(0, 1)}
              </span>
              <span className="font-semibold text-foreground-300">{featured.author}</span>
              <span className="h-1 w-1 rounded-full bg-foreground-700"></span>
              <span>{featured.date}</span>
              <span className="h-1 w-1 rounded-full bg-foreground-700"></span>
              <span>{featured.readTime}</span>
            </div>
            <span className="mt-1 inline-flex items-center gap-1 text-sm font-bold text-primary-400">
              Read the story
              <i className="ri-arrow-right-line"></i>
            </span>
          </div>
        </article>

        <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1">
          {blogCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => changeCategory(category.id)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors cursor-pointer ${
                active === category.id
                  ? "bg-gradient-brand text-white shadow-lg shadow-primary-500/25"
                  : "bg-background-900/70 text-foreground-400 ring-1 ring-foreground-50/10 hover:text-foreground-50"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {shown.length > 0 ? (
          <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {shown.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </section>
        ) : (
          <div className="rounded-2xl border border-foreground-50/10 bg-background-900/50 px-6 py-14 text-center">
            <i className="ri-quill-pen-line text-3xl text-foreground-600"></i>
            <p className="mt-3 text-sm font-semibold text-foreground-200">Nothing here yet</p>
            <p className="mt-1 text-xs text-foreground-500">
              We are still writing in this category — check back next week.
            </p>
          </div>
        )}

        {visibleCount < filtered.length ? (
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
              className="whitespace-nowrap rounded-xl bg-foreground-50/10 px-6 py-3 text-sm font-semibold text-foreground-50 transition-colors hover:bg-foreground-50/20 cursor-pointer"
            >
              Load more stories
            </button>
          </div>
        ) : null}
      </div>
    </SiteLayout>
  );
}