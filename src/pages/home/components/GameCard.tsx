import { useState } from "react";
import GameImage from "@/components/base/GameImage";
import type { GameItem } from "@/mocks/games";

interface GameCardProps {
  game: GameItem;
}

export default function GameCard({ game }: GameCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="group relative">
      <div className="relative overflow-hidden rounded-xl ring-1 ring-foreground-50/5">
        <GameImage
          src={game.image}
          alt={game.name}
          className="aspect-[4/5] w-full"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background-950/80 via-background-950/0 to-background-950/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

        <div className="absolute right-1.5 top-1.5 flex items-center gap-1 rounded-md bg-background-950/70 px-1.5 py-0.5 text-[10px] font-bold text-foreground-100 backdrop-blur-sm">
          <i className="ri-user-3-fill text-[9px] text-foreground-300"></i>
          <span className="tabular-nums">{game.players}</span>
        </div>

        <button
          type="button"
          aria-label={`Favourite ${game.name}`}
          onClick={() => setLiked((prev) => !prev)}
          className="absolute left-1.5 top-1.5 flex h-7 w-7 items-center justify-center rounded-md bg-background-950/60 text-foreground-100 opacity-0 backdrop-blur-sm transition-all hover:bg-primary-500 group-hover:opacity-100 cursor-pointer"
        >
          <i className={`${liked ? "ri-heart-fill text-primary-400" : "ri-heart-line"} text-sm`}></i>
        </button>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-center pb-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="rounded-full bg-gradient-brand px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
            Play now
          </span>
        </div>
      </div>
      <p className="mt-1.5 truncate text-xs font-medium text-foreground-300 transition-colors group-hover:text-foreground-50 md:text-[13px]">
        {game.name}
      </p>
    </div>
  );
}