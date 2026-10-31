import type { Promotion } from "@/mocks/promotions";

interface PromoCardProps {
  promo: Promotion;
  onOpen: (promo: Promotion) => void;
}

export default function PromoCard({ promo, onOpen }: PromoCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-foreground-50/10 bg-background-900/60 transition-all hover:-translate-y-1 hover:border-primary-500/40">
      <div className="relative h-[150px] w-full overflow-hidden md:h-[168px]">
        <img
          src={promo.image}
          alt={promo.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-900 via-background-950/30 to-transparent"></div>
        <span className="absolute left-3 top-3 rounded-full bg-background-950/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground-100 backdrop-blur-sm">
          {promo.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-heading text-base font-bold leading-snug text-foreground-50">
          {promo.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-foreground-400">
          {promo.description}
        </p>

        <div className="mt-3 flex items-end gap-2">
          <span className="font-heading text-2xl font-extrabold text-gradient">{promo.headline}</span>
          <span className="pb-1 text-[11px] uppercase tracking-wide text-foreground-500">
            {promo.headlineLabel}
          </span>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className="rounded-md bg-foreground-50/10 px-2 py-1 text-[10px] font-semibold text-foreground-300">
            {promo.wagering}
          </span>
          <span className="rounded-md bg-foreground-50/10 px-2 py-1 text-[10px] font-semibold text-foreground-300">
            {promo.expires}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onOpen(promo)}
          className="mt-4 w-full whitespace-nowrap rounded-xl bg-gradient-brand py-2.5 text-sm font-bold text-white shadow-lg shadow-primary-500/20 transition-transform hover:-translate-y-0.5 cursor-pointer"
        >
          Claim bonus
        </button>
      </div>
    </article>
  );
}