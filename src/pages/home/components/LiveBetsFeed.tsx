import GameImage from "@/components/base/GameImage";
import { liveBets } from "@/mocks/casino";

export default function LiveBetsFeed() {
  return (
    <section className="space-y-4">
      <div className="flex items-baseline justify-between">
        <h2 className="font-heading text-xl font-extrabold tracking-tight text-foreground-50 md:text-2xl">
          Bets live feed
        </h2>
        <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-foreground-500">
          <span className="live-dot h-1.5 w-1.5 rounded-full bg-secondary-400"></span>
          Updating
        </span>
      </div>

      <div className="overflow-hidden rounded-2xl border border-foreground-50/10 bg-background-900/50">
        <div className="hidden grid-cols-[minmax(0,1fr)_140px_100px_100px_110px] gap-3 border-b border-foreground-50/10 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-foreground-500 md:grid">
          <span>Game</span>
          <span>Player</span>
          <span className="text-right">Wager</span>
          <span className="text-right">Multiplier</span>
          <span className="text-right">Payout</span>
        </div>

        <div className="divide-y divide-foreground-50/5">
          {liveBets.map((bet, rowIndex) => (
            <div
              key={bet.id}
              className={`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-2.5 transition-colors hover:bg-background-800/60 md:grid-cols-[minmax(0,1fr)_140px_100px_100px_110px] ${
                rowIndex === 1 ? "bg-primary-500/[0.06]" : ""
              }`}
            >
              <div className="flex min-w-0 items-center gap-2.5">
                <GameImage
                  src={bet.image}
                  alt={bet.game}
                  className="h-9 w-9 shrink-0 rounded-md"
                />
                <span className="truncate text-xs font-medium text-foreground-100">{bet.game}</span>
                {bet.positive ? (
                  <i className="ri-fire-line hidden shrink-0 text-sm text-primary-400 sm:block"></i>
                ) : null}
              </div>

              <span className="hidden truncate text-xs text-foreground-400 md:block">{bet.player}</span>

              <span className="hidden text-right text-xs tabular-nums text-foreground-200 md:block">
                {bet.wager}
              </span>

              <span
                className={`text-right text-xs font-semibold tabular-nums md:block ${
                  bet.positive ? "text-secondary-400" : "text-foreground-500"
                }`}
              >
                {bet.multiplier}
              </span>

              <span
                className={`hidden text-right text-xs font-bold tabular-nums md:block ${
                  bet.positive ? "text-foreground-50" : "text-foreground-500"
                }`}
              >
                {bet.payout}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}