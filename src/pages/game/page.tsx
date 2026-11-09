import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SiteLayout from "@/components/feature/SiteLayout";
import GameRail from "@/pages/home/components/GameRail";
import PlayStage from "@/pages/game/components/PlayStage";
import BetPanel from "@/pages/game/components/BetPanel";
import FairnessCard from "@/pages/game/components/FairnessCard";
import { allGames } from "@/mocks/games";

interface RoundResult {
  multiplier: number;
  payout: number;
}

export default function GameDetail() {
  const { gameId } = useParams();
  const [playing, setPlaying] = useState(false);
  const [result, setResult] = useState<RoundResult | null>(null);
  const [liked, setLiked] = useState(false);

  const game = useMemo(() => allGames.find((item) => item.id === gameId), [gameId]);
  const isHub88 = Boolean(game?.hub88ApiId);

  const similar = useMemo(
    () => allGames.filter((item) => item.id !== gameId).slice(0, 12),
    [gameId]
  );

  if (!game) {
    return (
      <SiteLayout>
        <div className="rounded-2xl border border-foreground-50/10 bg-background-900/50 px-6 py-20 text-center">
          <i className="ri-gamepad-line text-3xl text-foreground-600"></i>
          <h1 className="mt-3 font-heading text-lg font-bold text-foreground-50">
            That game is not in the lobby
          </h1>
          <p className="mt-1 text-xs text-foreground-500">
            It may have been retired — the full library is one click away.
          </p>
          <Link
            to="/casino"
            className="mt-4 inline-block whitespace-nowrap rounded-xl bg-gradient-brand px-5 py-2.5 text-xs font-bold text-white cursor-pointer"
          >
            Browse all games
          </Link>
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <div className="space-y-6">
        <nav className="flex items-center gap-1.5 text-[11px] text-foreground-500">
          <Link to="/" className="transition-colors hover:text-foreground-100">
            Home
          </Link>
          <i className="ri-arrow-right-s-line"></i>
          <Link to="/casino" className="transition-colors hover:text-foreground-100">
            Casino
          </Link>
          <i className="ri-arrow-right-s-line"></i>
          <span className="truncate text-foreground-300">{game.name}</span>
        </nav>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="min-w-0 space-y-3">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0">
                <h1 className="font-heading text-xl font-extrabold tracking-tight text-foreground-50 md:text-3xl">
                  {game.name}
                </h1>
                <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                  <span className="rounded-md bg-foreground-50/10 px-2 py-0.5 text-[10px] font-semibold text-foreground-300">
                    {game.players} players
                  </span>
                  <span className="rounded-md bg-foreground-50/10 px-2 py-0.5 text-[10px] font-semibold text-foreground-300">
                    RTP 99.00%
                  </span>
                  <span className="rounded-md bg-secondary-500/15 px-2 py-0.5 text-[10px] font-semibold text-secondary-300">
                    High volatility
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setLiked((prev) => !prev)}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground-50/10 text-foreground-100 transition-colors hover:bg-foreground-50/20 cursor-pointer"
                  aria-label="Add to favourites"
                >
                  <i className={`${liked ? "ri-heart-fill text-primary-400" : "ri-heart-line"}`}></i>
                </button>
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground-50/10 text-foreground-100 transition-colors hover:bg-foreground-50/20 cursor-pointer"
                  aria-label="Share game"
                >
                  <i className="ri-share-forward-line"></i>
                </button>
              </div>
            </div>

            <PlayStage game={game} result={result} playing={playing} />

            <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4">
              {[
                { label: "Max win", value: "5,000x" },
                { label: "Min bet", value: "0.10 USDT" },
                { label: "Max bet", value: "500 USDT" },
                { label: "Biggest 24h win", value: "8,420 USDT" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-foreground-50/10 bg-background-900/50 p-3"
                >
                  <p className="text-[10px] uppercase tracking-wider text-foreground-500">
                    {stat.label}
                  </p>
                  <p className="mt-0.5 font-heading text-sm font-bold text-foreground-50">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-foreground-50/10 bg-background-900/50 p-4 md:p-5">
              <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground-200">
                About this game
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-foreground-400">
                {game.name} is a provably fair, instant-play title from our in-house studio. Every
                round is settled server-side and can be verified against the seed pair shown on the
                right. Volatility is high — expect long dry spells followed by sharp spikes, so
                stake accordingly.
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["Instant play", "Provably fair", "Mobile ready", "Turbo mode", "Auto bet"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-foreground-50/10 px-2 py-1 text-[10px] font-semibold text-foreground-300"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          <aside className="space-y-3 lg:sticky lg:top-24 lg:self-start">
            {isHub88 ? (
              <div className="rounded-2xl border border-foreground-50/10 bg-background-900/50 p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500/15">
                    <i className="ri-plug-line text-sm text-primary-400"></i>
                  </div>
                  <h3 className="font-heading text-sm font-bold text-foreground-100">Hub88</h3>
                </div>
                <p className="text-xs leading-relaxed text-foreground-500">
                  Betting is handled inside the game. Use the controls within the game
                  window to place bets and adjust stake.
                </p>
                <div className="rounded-lg border border-foreground-50/10 bg-background-950/50 p-3">
                  <p className="mb-1 text-[10px] uppercase tracking-wider text-foreground-600">API ID</p>
                  <code className="break-all font-mono text-[11px] text-primary-300">
                    {game.hub88ApiId}
                  </code>
                </div>
              </div>
            ) : (
              <>
                <BetPanel
                  onRoundStart={() => {
                    setPlaying(true);
                    setResult(null);
                  }}
                  onRoundEnd={(roundResult) => {
                    setPlaying(false);
                    setResult(roundResult);
                  }}
                />
                <FairnessCard />
              </>
            )}
          </aside>
        </div>

        <GameRail title="Players also" highlight="liked" games={similar} />
      </div>
    </SiteLayout>
  );
}