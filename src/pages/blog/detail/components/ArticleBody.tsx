import type { BlogBody } from "@/mocks/blogBody";

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

interface ArticleBodyProps {
  body: BlogBody;
}

export default function ArticleBody({ body }: ArticleBodyProps) {
  return (
    <article className="space-y-6">
      <p className="border-l-2 border-primary-500 pl-4 text-base leading-relaxed text-foreground-100 md:text-[17px]">
        {body.intro}
      </p>

      {body.sections.map((section, index) => (
        <section key={section.heading} className="space-y-3">
          <h2
            id={slugify(section.heading)}
            className="scroll-mt-28 font-heading text-lg font-extrabold tracking-tight text-foreground-50 md:text-xl"
          >
            {section.heading}
          </h2>
          {section.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="text-sm leading-[1.85] text-foreground-400 md:text-[15px]"
            >
              {paragraph}
            </p>
          ))}

          {body.quote && index === 1 ? (
            <blockquote className="relative overflow-hidden rounded-2xl border border-primary-500/25 bg-primary-500/10 px-5 py-4">
              <i className="ri-double-quotes-l absolute -top-1 left-3 text-3xl text-primary-500/30"></i>
              <p className="relative font-heading text-base font-bold leading-snug text-foreground-50 md:text-lg">
                {body.quote}
              </p>
            </blockquote>
          ) : null}
        </section>
      ))}

      <div className="flex flex-wrap gap-2 border-t border-foreground-50/10 pt-5">
        {body.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-foreground-50/10 px-3 py-1.5 text-[11px] font-semibold text-foreground-300"
          >
            #{tag}
          </span>
        ))}
      </div>
    </article>
  );
}