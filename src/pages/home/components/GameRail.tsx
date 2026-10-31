import { useRef } from "react";
import { Link } from "react-router-dom";
import GameCard from "@/pages/home/components/GameCard";
import type { GameItem } from "@/mocks/games";

interface GameRailProps {
  title: string;
  games: GameItem[];
  viewAllTo?: string;
  highlight?: string;
}

export default function GameRail({ title, games, viewAllTo = "/casino", highlight }: GameRailProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: number) => {
    const node = trackRef.current;
    if (!node) return;
    node.scrollBy({ left: direction * node.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <section className="space-y-3">
      <div className="flex items-end justify-between gap-3">
        <div className="flex flex-1 items-baseline gap-3">
          <h2 className="font-heading text-xl font-extrabold tracking-tight text-foreground-50 md:text-2xl">
            {title}
            {highlight ? <span className="ml-2 text-gradient">{highlight}</span> : null}
          </h2>
          <Link
            to={viewAllTo}
            className="whitespace-nowrap text-xs font-semibold text-foreground-400 transition-colors hover:text-foreground-50 md:text-sm"
          >
            View All
          </Link>
        </div>
        <div className="hidden gap-1.5 md:flex">
          <button
            type="button"
            aria-label={`Scroll ${title} left`}
            onClick={() => scrollBy(-1)}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground-50/10 text-foreground-100 transition-colors hover:bg-foreground-50/20 cursor-pointer"
          >
            <i className="ri-arrow-left-s-line text-lg"></i>
          </button>
          <button
            type="button"
            aria-label={`Scroll ${title} right`}
            onClick={() => scrollBy(1)}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground-50/10 text-foreground-100 transition-colors hover:bg-foreground-50/20 cursor-pointer"
          >
            <i className="ri-arrow-right-s-line text-lg"></i>
          </button>
        </div>
      </div>

      <div ref={trackRef} className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
        {games.map((game) => (
          <div
            key={game.id}
            className="shrink-0 basis-[calc((100%_-_1rem)/3)] md:basis-[calc((100%_-_2.5rem)/6)]"
          >
            <GameCard game={game} />
          </div>
        ))}
      </div>
    </section>
  );
}