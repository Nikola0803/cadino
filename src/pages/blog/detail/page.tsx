import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SiteLayout from "@/components/feature/SiteLayout";
import PostCard from "@/pages/blog/components/PostCard";
import ArticleBody from "@/pages/blog/detail/components/ArticleBody";
import ArticleSidebar from "@/pages/blog/detail/components/ArticleSidebar";
import { blogPosts, blogCategories } from "@/mocks/blog";
import { blogBodies } from "@/mocks/blogBody";

export default function BlogDetail() {
  const { postId } = useParams();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const value = height > 0 ? (window.scrollY / height) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, value)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [postId]);

  const post = blogPosts.find((item) => item.id === postId);
  const body = postId ? blogBodies[postId] : undefined;

  if (!post || !body) {
    return (
      <SiteLayout>
        <div className="rounded-2xl border border-foreground-50/10 bg-background-900/50 px-6 py-16 text-center">
          <i className="ri-file-unknow-line text-3xl text-foreground-600"></i>
          <p className="mt-3 font-heading text-lg font-bold text-foreground-50">
            This story has moved
          </p>
          <p className="mx-auto mt-1 max-w-sm text-xs leading-relaxed text-foreground-500">
            We could not find that article. The journal still has plenty worth reading though.
          </p>
          <Link
            to="/blog"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-2.5 text-sm font-bold text-white cursor-pointer"
          >
            Back to the journal
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </SiteLayout>
    );
  }

  const category = blogCategories.find((item) => item.id === post.category);
  const related = blogPosts
    .filter((item) => item.id !== post.id)
    .sort((a, b) => (a.category === post.category ? -1 : 0) - (b.category === post.category ? -1 : 0))
    .slice(0, 3);

  return (
    <SiteLayout>
      <div className="fixed left-0 right-0 top-0 z-50 h-[3px] bg-transparent">
        <div
          className="h-full bg-gradient-brand transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-2 text-[11px] text-foreground-500">
          <Link to="/blog" className="flex items-center gap-1 transition-colors hover:text-foreground-50">
            <i className="ri-arrow-left-line"></i>
            Journal
          </Link>
          <i className="ri-arrow-right-s-line text-foreground-700"></i>
          <span className="rounded-full bg-foreground-50/10 px-2.5 py-1 font-bold uppercase tracking-wider text-foreground-200">
            {category?.label ?? post.category}
          </span>
          <span className="ml-auto hidden items-center gap-1 sm:flex">
            <i className="ri-eye-line"></i>
            4.8k reads
          </span>
        </div>

        <header className="max-w-3xl space-y-3">
          <h1 className="font-heading text-2xl font-extrabold leading-tight tracking-tight text-foreground-50 md:text-4xl">
            {post.title}
          </h1>
          <p className="text-sm leading-relaxed text-foreground-400 md:text-base">{post.excerpt}</p>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-brand text-xs font-bold text-white">
              {post.author.slice(0, 1)}
            </span>
            <div className="leading-tight">
              <p className="text-xs font-bold text-foreground-100">{post.author}</p>
              <p className="text-[11px] text-foreground-500">
                {post.date} · {post.readTime}
              </p>
            </div>
            <span className="ml-auto flex items-center gap-1.5 rounded-full border border-foreground-50/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-foreground-400">
              <i className="ri-article-line text-primary-400"></i>
              Editorial
            </span>
          </div>
        </header>

        <div className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-foreground-50/10 md:h-[380px]">
          <img
            src={post.image}
            alt={post.title}
            title={`${post.title} — Rolabets journal`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-950/60 via-transparent to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="min-w-0 space-y-6">
            <ArticleBody body={body} />

            <section className="flex flex-col gap-3 rounded-2xl border border-foreground-50/10 bg-background-900/60 p-4 sm:flex-row sm:items-center">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-sm font-bold text-white">
                {post.author.slice(0, 1)}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-foreground-50">{post.author}</p>
                <p className="text-[11px] leading-relaxed text-foreground-500">
                  Writes for the Rolabets journal on {category?.label.toLowerCase()} and the numbers
                  behind them.
                </p>
              </div>
              <button
                type="button"
                className="whitespace-nowrap rounded-xl bg-foreground-50/10 px-4 py-2.5 text-xs font-bold text-foreground-50 transition-colors hover:bg-foreground-50/20 cursor-pointer"
              >
                Follow
              </button>
            </section>

            <section className="relative overflow-hidden rounded-2xl border border-primary-500/30 bg-primary-500/10 p-5 md:p-6">
              <div className="absolute -right-8 -top-10 h-28 w-28 rounded-full bg-primary-500/25 blur-2xl"></div>
              <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-200">
                    Put it into practice
                  </p>
                  <p className="mt-1 font-heading text-lg font-extrabold text-foreground-50">
                    Grab the welcome bonus and test it yourself
                  </p>
                </div>
                <Link
                  to="/promotions"
                  className="whitespace-nowrap rounded-xl bg-gradient-brand px-5 py-2.5 text-center text-sm font-bold text-white shadow-lg shadow-primary-500/25 cursor-pointer"
                >
                  See offers
                </Link>
              </div>
            </section>
          </div>

          <ArticleSidebar sections={body.sections} title={post.title} />
        </div>

        <section className="space-y-3 border-t border-foreground-50/10 pt-6">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground-200">
              Keep reading
            </h2>
            <Link
              to="/blog"
              className="whitespace-nowrap text-[11px] font-semibold text-primary-400 hover:text-primary-300 cursor-pointer"
            >
              All stories
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {related.map((item) => (
              <PostCard key={item.id} post={item} />
            ))}
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}