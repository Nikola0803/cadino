import { useMemo, useState } from "react";
import GameImage from "@/components/base/GameImage";
import { betHistory } from "@/mocks/account";

interface BetHistoryListProps {
  limit?: number;
  compact?: boolean;
}

const filters = [
  { id: "all", label: "All bets" },
  { id: "won", label: "Won" },
  { id: "lost", label: "Lost" },
];

export default function BetHistoryList({ limit, compact }: BetHistoryListProps) {
  const [active, setActive] = useState("all");

  const rows = useMemo(() => {
    const filtered =
      active === "all" ? betHistory : betHistory.filter((bet) => (active === "won" ? bet.won : !bet.won));
    return limit ? filtered.slice(0, limit) : filtered;
  }, [active, limit]);

  return (
    <div className="space-y-3">
      {!compact ? (
        <div className="flex gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActive(filter.id)}
              className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                active === filter.id
                  ? "bg-gradient-brand text-white"
                  : "bg-foreground-50/10 text-foreground-400 hover:text-foreground-50"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      ) : null}

      <div className="overflow-hidden rounded-2xl border border-foreground-50/10 bg-background-900/50">
        <div className="hidden grid-cols-[minmax(0,1.5fr)_90px_90px_90px_100px] items-center gap-2 border-b border-foreground-50/10 px-5 py-2.5 text-[10px] font-bold uppercase tracking-wider text-foreground-600 md:grid">
          <span>Game</span>
          <span className="text-right">Wager</span>
          <span className="text-right">Multiplier</span>
          <span className="text-right">Payout</span>
          <span className="text-right">Time</span>
        </div>

        <div className="divide-y divide-foreground-50/5">
          {rows.map((bet) => (
            <div
              key={bet.id}
              className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-foreground-50/5 md:grid md:grid-cols-[minmax(0,1.5fr)_90px_90px_90px_100px] md:gap-2 md:px-5"
            >
              <div className="flex min-w-0 flex-1 items-center gap-2.5">
                <GameImage
                  src={bet.image}
                  alt={bet.game}
                  className="h-10 w-10 shrink-0 rounded-lg"
                />
                <div className="min-w-0">
                  <p className="truncate text-[13px] font-semibold text-foreground-100">
                    {bet.game}
                  </p>
                  <p className="truncate text-[11px] text-foreground-500">
                    {bet.time} · <span className="tabular-nums">{bet.wager} USDT</span>
                  </p>
                </div>
              </div>

              <span className="hidden text-right text-xs font-semibold text-foreground-300 tabular-nums md:block">
                {bet.wager}
              </span>
              <span
                className={`hidden text-right text-xs font-semibold tabular-nums md:block ${
                  bet.won ? "text-secondary-300" : "text-foreground-500"
                }`}
              >
                {bet.multiplier}
              </span>
              <span
                className={`hidden text-right text-[13px] font-bold tabular-nums md:block ${
                  bet.won ? "text-foreground-50" : "text-foreground-500"
                }`}
              >
                {bet.payout}
              </span>

              <div className="flex shrink-0 flex-col items-end gap-1 md:hidden">
                <span
                  className={`text-[13px] font-bold tabular-nums ${
                    bet.won ? "text-secondary-300" : "text-foreground-500"
                  }`}
                >
                  {bet.won ? `+${bet.payout}` : "0.00"}
                </span>
                <span className="text-[10px] uppercase tracking-wide text-foreground-600">
                  {bet.won ? "Won" : "Lost"}
                </span>
              </div>

              <span className="hidden justify-end md:flex">
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                    bet.won
                      ? "bg-secondary-500/15 text-secondary-300"
                      : "bg-foreground-50/10 text-foreground-500"
                  }`}
                >
                  {bet.won ? "Won" : "Lost"}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}