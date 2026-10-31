import GameImage from "@/components/base/GameImage";
import type { GameItem } from "@/mocks/games";

interface PlayStageProps {
  game: GameItem;
  result: { multiplier: number; payout: number } | null;
  playing: boolean;
}

export default function PlayStage({ game, result, playing }: PlayStageProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-foreground-50/10 bg-background-950">
      <div className="absolute inset-0">
        <img
          src={game.image}
          alt=""
          aria-hidden="true"
          className="h-full w-full scale-110 object-cover opacity-25 blur-2xl"
        />
      </div>

      <div className="relative flex min-h-[320px] items-center justify-center p-4 md:min-h-[420px]">
        <GameImage
          src={game.image}
          alt={game.name}
          className="aspect-[4/5] w-[190px] rounded-xl shadow-2xl md:w-[240px]"
        />

        {playing ? (
          <div className="absolute inset-0 flex items-center justify-center bg-background-950/70 backdrop-blur-[2px]">
            <div className="flex flex-col items-center gap-3">
              <span className="h-10 w-10 animate-spin rounded-full border-2 border-primary-500/30 border-t-primary-400"></span>
              <p className="font-heading text-sm font-bold uppercase tracking-widest text-foreground-200">
                Round in progress
              </p>
            </div>
          </div>
        ) : null}

        {!playing && result ? (
          <div className="pointer-events-none absolute inset-x-4 bottom-4 mx-auto max-w-xs rounded-xl border border-foreground-50/10 bg-background-900/95 px-4 py-3 text-center shadow-2xl float-in">
            <p className="text-[10px] uppercase tracking-wider text-foreground-500">Last round</p>
            <p
              className={`font-heading text-2xl font-extrabold tabular-nums ${
                result.multiplier > 1 ? "text-secondary-300" : "text-primary-400"
              }`}
            >
              {result.multiplier.toFixed(2)}x
            </p>
            <p className="text-[11px] text-foreground-400 tabular-nums">
              {result.multiplier > 0 ? `Paid ${result.payout.toFixed(2)} USDT` : "No win this time"}
            </p>
          </div>
        ) : null}
      </div>

      <div className="relative flex flex-wrap items-center justify-between gap-2 border-t border-foreground-50/10 px-4 py-2.5">
        <span className="flex items-center gap-1.5 text-[11px] text-foreground-500">
          <i className="ri-shield-check-line text-secondary-400"></i>
          Provably fair · RTP 99.00%
        </span>
        <span className="flex items-center gap-1.5 text-[11px] text-foreground-500">
          <i className="ri-user-3-line"></i>
          {game.players} playing now
        </span>
      </div>
    </div>
  );
}