import type { Market } from "@/mocks/sportsMarkets";
import type { Pick } from "@/pages/sports-event/components/BetSlip";

interface MarketListProps {
  markets: Market[];
  picks: Pick[];
  onToggle: (pick: Pick) => void;
}

export default function MarketList({ markets, picks, onToggle }: MarketListProps) {
  return (
    <div className="space-y-2.5">
      {markets.map((market) => (
        <section
          key={market.id}
          className="overflow-hidden rounded-2xl border border-foreground-50/10 bg-background-900/50"
        >
          <div className="flex items-center justify-between border-b border-foreground-50/10 px-4 py-2.5">
            <h3 className="font-heading text-sm font-bold text-foreground-50">{market.name}</h3>
            <i className="ri-arrow-down-s-line text-lg text-foreground-500"></i>
          </div>

          <div className="divide-y divide-foreground-50/5">
            {market.rows.map((row) => (
              <div key={row.label} className="px-4 py-3">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-foreground-500">
                  {row.label}
                </p>
                <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-4">
                  {row.selections.map((selection) => {
                    const selected = picks.some((pick) => pick.key === selection.id);
                    return (
                      <button
                        key={selection.id}
                        type="button"
                        onClick={() =>
                          onToggle({
                            key: selection.id,
                            label: selection.label,
                            odds: Number.parseFloat(selection.value),
                            market: market.name,
                          })
                        }
                        className={`flex items-center justify-between gap-2 rounded-lg px-3 py-2 transition-colors cursor-pointer ${
                          selected
                            ? "bg-gradient-brand text-white"
                            : "bg-background-950/70 text-foreground-200 hover:bg-background-800"
                        }`}
                      >
                        <span className="truncate text-[11px] font-medium">{selection.label}</span>
                        <span className="shrink-0 text-xs font-bold tabular-nums">
                          {selection.value}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}