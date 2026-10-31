import { useEffect, useState } from "react";

export interface SlipPick {
  key: string;
  eventId: string;
  event: string;
  selection: string;
  odds: number;
}

interface BetSlipPanelProps {
  picks: SlipPick[];
  stake: string;
  onStakeChange: (value: string) => void;
  onRemove: (key: string) => void;
  onClear: () => void;
}

const QUICK_STAKES = ["5", "10", "25", "100"];

export default function BetSlipPanel({
  picks,
  stake,
  onStakeChange,
  onRemove,
  onClear,
}: BetSlipPanelProps) {
  const [placedAmount, setPlacedAmount] = useState<number | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    setPlacedAmount(null);
    setError("");
  }, [picks.length]);

  const totalOdds = picks.reduce((acc, pick) => acc * pick.odds, 1);
  const stakeValue = Number.parseFloat(stake);
  const validStake = Number.isFinite(stakeValue) && stakeValue > 0;
  const potential = validStake ? stakeValue * totalOdds : 0;

  const handlePlace = () => {
    if (picks.length === 0) return;
    if (!validStake || stakeValue < 1) {
      setError("Enter a stake of at least $1 to place this bet.");
      return;
    }
    setError("");
    setPlacedAmount(stakeValue);
  };

  return (
    <div className="rounded-2xl border border-foreground-50/10 bg-background-900/70">
      <div className="flex items-center justify-between gap-2 border-b border-foreground-50/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary-500/15 text-primary-400">
            <i className="ri-shopping-basket-2-line text-base"></i>
          </span>
          <h2 className="font-heading text-sm font-bold text-foreground-50">Bet slip</h2>
          <span className="rounded-md bg-foreground-50/10 px-1.5 py-0.5 text-[10px] font-bold text-foreground-300 tabular-nums">
            {picks.length}
          </span>
        </div>
        {picks.length > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="whitespace-nowrap text-[11px] font-semibold text-foreground-500 transition-colors hover:text-secondary-400 cursor-pointer"
          >
            Clear all
          </button>
        )}
      </div>

      {picks.length === 0 ? (
        <div className="px-4 py-10 text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-foreground-50/5 text-foreground-600">
            <i className="ri-coupon-3-line text-xl"></i>
          </span>
          <p className="mt-3 text-sm font-semibold text-foreground-200">Your slip is empty</p>
          <p className="mx-auto mt-1 max-w-[200px] text-[11px] leading-relaxed text-foreground-500">
            Tap any price to add a selection. Combine picks for a bigger return.
          </p>
        </div>
      ) : (
        <div className="px-3 py-2.5">
          <div className="max-h-[280px] space-y-1.5 overflow-y-auto pr-1">
            {picks.map((pick) => (
              <div
                key={pick.key}
                className="flex items-start gap-2 rounded-lg bg-background-950/60 px-2.5 py-2"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[11px] font-semibold text-foreground-100">
                    {pick.event}
                  </p>
                  <p className="mt-0.5 truncate text-[10px] text-foreground-500">
                    {pick.selection}
                  </p>
                </div>
                <span className="shrink-0 pt-0.5 text-[11px] font-bold text-primary-400 tabular-nums">
                  {pick.odds.toFixed(2)}
                </span>
                <button
                  type="button"
                  onClick={() => onRemove(pick.key)}
                  aria-label={`Remove ${pick.event}`}
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded text-foreground-600 transition-colors hover:bg-foreground-50/10 hover:text-secondary-400 cursor-pointer"
                >
                  <i className="ri-close-line text-sm"></i>
                </button>
              </div>
            ))}
          </div>

          {placedAmount !== null ? (
            <div className="mt-3 rounded-xl border border-secondary-500/30 bg-secondary-500/10 px-3 py-4 text-center">
              <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-secondary-500/20 text-secondary-300">
                <i className="ri-check-line text-lg"></i>
              </span>
              <p className="mt-2 text-sm font-bold text-foreground-50">Bet placed</p>
              <p className="mt-0.5 text-[11px] text-foreground-400">
                ${placedAmount.toFixed(2)} on {picks.length}{" "}
                {picks.length === 1 ? "selection" : "selections"} at {totalOdds.toFixed(2)}
              </p>
              <button
                type="button"
                onClick={onClear}
                className="mt-3 whitespace-nowrap rounded-lg bg-foreground-50/10 px-3 py-1.5 text-[11px] font-bold text-foreground-100 transition-colors hover:bg-foreground-50/15 cursor-pointer"
              >
                New bet
              </button>
            </div>
          ) : (
            <div className="mt-3 space-y-2.5 border-t border-foreground-50/10 pt-3">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-foreground-500">Total odds</span>
                <span className="font-bold text-foreground-50 tabular-nums">
                  {totalOdds.toFixed(2)}
                </span>
              </div>

              <div>
                <label
                  htmlFor="bet-stake"
                  className="mb-1 block text-[10px] uppercase tracking-wider text-foreground-500"
                >
                  Stake
                </label>
                <div className="flex items-center gap-1.5 rounded-lg bg-background-950/70 px-2.5 ring-1 ring-inset ring-foreground-50/10 focus-within:ring-primary-500/60">
                  <span className="text-sm font-semibold text-foreground-500">$</span>
                  <input
                    id="bet-stake"
                    name="stake"
                    type="number"
                    min="1"
                    step="1"
                    inputMode="decimal"
                    value={stake}
                    onChange={(event) => onStakeChange(event.target.value)}
                    className="w-full bg-transparent py-2 text-base font-bold text-foreground-50 tabular-nums outline-none placeholder:text-foreground-600 md:text-sm"
                    placeholder="0.00"
                  />
                </div>
                <div className="mt-1.5 grid grid-cols-4 gap-1.5">
                  {QUICK_STAKES.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => onStakeChange(amount)}
                      className={`whitespace-nowrap rounded-md py-1 text-[11px] font-semibold transition-colors cursor-pointer ${
                        stake === amount
                          ? "bg-primary-500/20 text-primary-300 ring-1 ring-inset ring-primary-500/40"
                          : "bg-background-950/60 text-foreground-400 hover:text-foreground-100"
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-background-950/50 px-2.5 py-2 text-[11px]">
                <span className="text-foreground-500">Potential return</span>
                <span className="font-heading text-sm font-extrabold text-secondary-300 tabular-nums">
                  ${potential.toFixed(2)}
                </span>
              </div>

              {error && (
                <p className="flex items-start gap-1 text-[11px] leading-snug text-secondary-400">
                  <i className="ri-error-warning-line mt-px"></i>
                  {error}
                </p>
              )}

              <button
                type="button"
                onClick={handlePlace}
                className="w-full whitespace-nowrap rounded-xl bg-gradient-brand py-3 text-base font-bold text-white shadow-lg shadow-primary-500/25 transition-transform hover:scale-[1.01] md:py-2.5 md:text-sm cursor-pointer"
              >
                Place bet
              </button>
              <p className="text-center text-[10px] leading-relaxed text-foreground-600">
                Demo lobby — no real money is wagered.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}