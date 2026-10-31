import { useMemo, useState } from "react";
import SiteLayout from "@/components/feature/SiteLayout";
import GameCard from "@/pages/home/components/GameCard";
import {
  originalGames,
  mostPlayed,
  gambanaPicks,
  liveCasino,
  newReleases,
  slots,
  trending,
} from "@/mocks/games";
import type { GameItem } from "@/mocks/games";

const filters = [
  { id: "all", label: "All Games" },
  { id: "original", label: "Original" },
  { id: "slots", label: "Slots" },
  { id: "live", label: "Live Casino" },
  { id: "new", label: "New Releases" },
  { id: "trending", label: "Trending" },
];

const pools: Record<string, GameItem[]> = {
  original: originalGames,
  slots,
  live: liveCasino,
  new: newReleases,
  trending,
};

const allList: GameItem[] = [
  ...originalGames,
  ...gambanaPicks,
  ...slots,
  ...liveCasino,
  ...newReleases,
  ...trending,
  ...mostPlayed,
];

export default function Casino() {
  const [active, setActive] = useState("all");

  const games = useMemo(() => (active === "all" ? allList : pools[active] ?? []), [active]);

  const total = useMemo(
    () => games.reduce((sum, game) => sum + game.players, 0),
    [games]
  );

  return (
    <SiteLayout>
      <div className="space-y-5 md:space-y-6">
        <section className="relative overflow-hidden rounded-2xl border border-foreground-50/10 bg-background-900/60 p-4 sm:p-5 md:p-8">
          <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-primary-500/20 blur-3xl"></div>
          <div className="absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-accent-500/20 blur-3xl"></div>
          <div className="relative">
            <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-foreground-50/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-foreground-200">
              <i className="ri-fire-line text-primary-400"></i>
              Casino lobby
            </p>
            <h1 className="font-heading text-2xl font-extrabold tracking-tight text-foreground-50 md:text-4xl">
              Every game, one <span className="text-gradient">lobby</span>
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-foreground-400">
              Originals, slots, live tables and instant games. {games.length} titles ready to play
              with {total.toLocaleString()} players online right now.
            </p>
          </div>
        </section>

        <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActive(filter.id)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors cursor-pointer ${
                active === filter.id
                  ? "bg-gradient-brand text-white shadow-lg shadow-primary-500/25"
                  : "bg-background-900/70 text-foreground-400 ring-1 ring-foreground-50/10 hover:text-foreground-50"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2 md:grid-cols-6 lg:grid-cols-8">
          {games.map((game, position) => (
            <GameCard key={`${game.id}-${position}`} game={game} />
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}