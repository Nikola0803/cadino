export interface Pick {
  key: string;
  label: string;
  odds: number;
  market: string;
}

interface BetSlipProps {
  picks: Pick[];
  onRemove: (key: string) => void;
  onClear: () => void;
}

export default function BetSlip({ picks, onRemove, onClear }: BetSlipProps) {
  const totalOdds = picks.reduce((acc, pick) => acc * pick.odds, 1);
  const stake = 10;
  const returns = totalOdds * stake;

  return (
    <div className="rounded-2xl border border-foreground-50/10 bg-background-900/60 p-4">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-1.5 font-heading text-sm font-bold text-foreground-50">
          <i className="ri-coupon-3-line text-primary-400"></i>
          Bet slip
          <span className="rounded-full bg-foreground-50/10 px-1.5 py-0.5 text-[10px] font-bold text-foreground-300">
            {picks.length}
          </span>
        </h3>
        {picks.length > 0 ? (
          <button
            type="button"
            onClick={onClear}
            className="whitespace-nowrap text-[10px] font-semibold text-foreground-500 transition-colors hover:text-primary-400 cursor-pointer"
          >
            Clear all
          </button>
        ) : null}
      </div>

      {picks.length === 0 ? (
        <div className="mt-6 flex flex-col items-center gap-2 py-6 text-center">
          <i className="ri-coupon-3-line text-2xl text-foreground-700"></i>
          <p className="text-xs font-semibold text-foreground-400">Your slip is empty</p>
          <p className="max-w-[190px] text-[11px] leading-relaxed text-foreground-600">
            Tap any price on the markets to add a selection here.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-3 space-y-2">
            {picks.map((pick) => (
              <div
                key={pick.key}
                className="flex items-center gap-2 rounded-xl bg-background-950/60 px-3 py-2.5"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[11px] uppercase tracking-wide text-foreground-600">
                    {pick.market}
                  </p>
                  <p className="truncate text-xs font-semibold text-foreground-100">{pick.label}</p>
                </div>
                <span className="shrink-0 rounded-md bg-foreground-50/10 px-2 py-1 text-[11px] font-bold text-foreground-100 tabular-nums">
                  {pick.odds.toFixed(2)}
                </span>
                <button
                  type="button"
                  onClick={() => onRemove(pick.key)}
                  aria-label={`Remove ${pick.label}`}
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-foreground-500 transition-colors hover:bg-primary-500/20 hover:text-primary-300 cursor-pointer"
                >
                  <i className="ri-close-line text-sm"></i>
                </button>
              </div>
            ))}
          </div>

          <div className="mt-3 space-y-1.5 rounded-xl border border-foreground-50/10 bg-background-950/40 p-3 text-xs">
            <div className="flex justify-between text-foreground-400">
              <span>Total odds</span>
              <span className="font-bold text-foreground-100 tabular-nums">
                {totalOdds.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-foreground-400">
              <span>Stake</span>
              <span className="font-bold text-foreground-100 tabular-nums">{stake.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-t border-foreground-50/10 pt-1.5">
              <span className="font-semibold text-foreground-200">Potential return</span>
              <span className="font-heading font-extrabold text-secondary-300 tabular-nums">
                {returns.toFixed(2)}
              </span>
            </div>
          </div>

          <button
            type="button"
            className="mt-3 w-full whitespace-nowrap rounded-xl bg-gradient-brand py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-lg shadow-primary-500/25 transition-transform hover:-translate-y-0.5 cursor-pointer"
          >
            Place bet
          </button>
        </>
      )}

      <p className="mt-2 text-center text-[10px] leading-relaxed text-foreground-600">
        Single bet on the current selection. Demo mode only.
      </p>
    </div>
  );
}