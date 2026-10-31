import { useState } from "react";

interface RoundResult {
  multiplier: number;
  payout: number;
}

interface BetPanelProps {
  onRoundStart: () => void;
  onRoundEnd: (result: RoundResult) => void;
}

const chips = [1, 5, 10, 50, 100];

export default function BetPanel({ onRoundStart, onRoundEnd }: BetPanelProps) {
  const [balance, setBalance] = useState(8412.6);
  const [stake, setStake] = useState(10);
  const [autoCashout, setAutoCashout] = useState(true);
  const [cashoutAt, setCashoutAt] = useState(2);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const placeBet = () => {
    if (busy) return;
    if (stake <= 0) {
      setError("Enter a stake above 0.");
      return;
    }
    if (stake > balance) {
      setError("Stake is higher than your available balance.");
      return;
    }

    setError("");
    setBusy(true);
    setBalance((prev) => Number((prev - stake).toFixed(2)));
    onRoundStart();

    window.setTimeout(() => {
      const roll = Math.random();
      let multiplier = 0;
      if (roll > 0.62) {
        multiplier = 1 + Math.random() * 3.2;
      } else if (roll > 0.38) {
        multiplier = 1 + Math.random() * 0.4;
      }
      const capped = Math.min(multiplier, autoCashout ? cashoutAt : 99);
      const payout = Number((stake * capped).toFixed(2));

      setBalance((prev) => Number((prev + payout).toFixed(2)));
      setBusy(false);
      onRoundEnd({ multiplier: Number(capped.toFixed(2)), payout });
    }, 1500);
  };

  return (
    <div className="rounded-2xl border border-foreground-50/10 bg-background-900/60 p-4">
      <div className="flex items-center justify-between rounded-xl bg-background-950/60 px-3 py-2.5">
        <span className="text-[10px] uppercase tracking-wider text-foreground-500">Balance</span>
        <span className="font-heading text-sm font-extrabold text-foreground-50 tabular-nums">
          {balance.toFixed(2)} USDT
        </span>
      </div>

      <div className="mt-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-wider text-foreground-500">
            Bet amount
          </span>
          <span className="text-[10px] text-foreground-600">Min 0.10 · Max 500</span>
        </div>
        <div className="mt-1.5 flex items-stretch gap-2">
          <button
            type="button"
            aria-label="Decrease stake"
            onClick={() => setStake((prev) => Math.max(0.1, Number((prev / 2).toFixed(2))))}
            className="flex w-11 shrink-0 items-center justify-center rounded-xl bg-foreground-50/10 text-foreground-100 transition-colors hover:bg-foreground-50/20 cursor-pointer"
          >
            <i className="ri-subtract-line"></i>
          </button>
          <input
            type="number"
            min={0.1}
            step={0.1}
            value={stake}
            onChange={(event) => setStake(Number(event.target.value))}
            className="min-w-0 flex-1 rounded-xl border border-foreground-50/10 bg-background-950/70 px-3 py-2.5 text-center text-sm font-bold text-foreground-50 outline-none focus:border-primary-500/60 tabular-nums"
          />
          <button
            type="button"
            aria-label="Double stake"
            onClick={() => setStake((prev) => Number((prev * 2).toFixed(2)))}
            className="flex w-11 shrink-0 items-center justify-center rounded-xl bg-foreground-50/10 text-foreground-100 transition-colors hover:bg-foreground-50/20 cursor-pointer"
          >
            <i className="ri-add-line"></i>
          </button>
        </div>

        <div className="mt-2 grid grid-cols-5 gap-1.5">
          {chips.map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={() => setStake(chip)}
              className={`whitespace-nowrap rounded-lg py-1.5 text-[11px] font-bold transition-colors cursor-pointer ${
                stake === chip
                  ? "bg-gradient-brand text-white"
                  : "bg-foreground-50/10 text-foreground-300 hover:text-foreground-50"
              }`}
            >
              {chip}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-3 rounded-xl border border-foreground-50/10 bg-background-950/40 p-3">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-foreground-200">
            <i className="ri-speed-up-line text-primary-400"></i>
            Auto cash out
          </span>
          <button
            type="button"
            aria-pressed={autoCashout}
            onClick={() => setAutoCashout((prev) => !prev)}
            className={`relative h-5 w-9 shrink-0 rounded-full transition-colors cursor-pointer ${
              autoCashout ? "bg-gradient-brand" : "bg-foreground-50/15"
            }`}
          >
            <span
              className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-all ${
                autoCashout ? "left-[18px]" : "left-0.5"
              }`}
            ></span>
          </button>
        </div>
        {autoCashout ? (
          <div className="mt-2 flex items-center gap-2">
            <input
              type="number"
              min={1.01}
              step={0.1}
              value={cashoutAt}
              onChange={(event) => setCashoutAt(Number(event.target.value))}
              className="min-w-0 flex-1 rounded-lg border border-foreground-50/10 bg-background-950/70 px-2.5 py-1.5 text-xs font-bold text-foreground-50 outline-none focus:border-primary-500/60 tabular-nums"
            />
            <span className="text-[11px] text-foreground-500">x</span>
          </div>
        ) : null}
      </div>

      {error ? (
        <p className="mt-2 flex items-center gap-1.5 rounded-lg bg-primary-500/10 px-2.5 py-1.5 text-[11px] font-semibold text-primary-300">
          <i className="ri-error-warning-line"></i>
          {error}
        </p>
      ) : null}

      <button
        type="button"
        onClick={placeBet}
        disabled={busy}
        className={`mt-3 w-full whitespace-nowrap rounded-xl py-3 text-sm font-extrabold uppercase tracking-wide transition-all cursor-pointer ${
          busy
            ? "bg-foreground-50/10 text-foreground-500"
            : "bg-gradient-brand text-white shadow-lg shadow-primary-500/25 hover:-translate-y-0.5"
        }`}
      >
        {busy ? "Playing…" : `Bet ${stake.toFixed(2)} USDT`}
      </button>

      <p className="mt-2 text-center text-[10px] leading-relaxed text-foreground-600">
        Demo mode — no real funds are moved. Play responsibly.
      </p>
    </div>
  );
}