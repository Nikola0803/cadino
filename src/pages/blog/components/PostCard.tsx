import { Link } from "react-router-dom";
import type { BlogPost } from "@/mocks/blog";

interface PostCardProps {
  post: BlogPost;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link
      to={`/blog/${post.id}`}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-foreground-50/10 bg-background-900/60 transition-all hover:-translate-y-1 hover:border-primary-500/40"
    >
      <div className="relative h-[158px] w-full overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          title={`${post.title} — Rolabets journal`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-950/70 to-transparent"></div>
        <span className="absolute left-3 top-3 rounded-full bg-background-950/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground-100 backdrop-blur-sm">
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-heading text-sm font-bold leading-snug text-foreground-50 transition-colors group-hover:text-primary-300">
          {post.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-foreground-400">
          {post.excerpt}
        </p>
        <div className="mt-auto flex items-center gap-2 pt-3 text-[11px] text-foreground-500">
          <span className="truncate font-semibold text-foreground-300">{post.author}</span>
          <span className="h-1 w-1 shrink-0 rounded-full bg-foreground-700"></span>
          <span className="whitespace-nowrap">{post.date}</span>
          <span className="ml-auto whitespace-nowrap">{post.readTime}</span>
        </div>
      </div>
    </Link>
  );
}