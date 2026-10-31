import { useMemo, useState } from "react";

const tiers = [
  { id: "starter", name: "Starter", share: 25, min: 0 },
  { id: "pro", name: "Pro", share: 32, min: 10 },
  { id: "elite", name: "Elite", share: 40, min: 50 },
  { id: "partner", name: "Partner", share: 45, min: 200 },
];

export default function EarningsCalculator() {
  const [players, setPlayers] = useState(35);
  const [ngr, setNgr] = useState(180);

  const tier = useMemo(() => {
    const matched = [...tiers].reverse().find((item) => players >= item.min);
    return matched ?? tiers[0];
  }, [players]);

  const gross = players * ngr;
  const commission = (gross * tier.share) / 100;

  const money = (value: number) =>
    value.toLocaleString("en-US", { maximumFractionDigits: 0 });

  return (
    <div className="rounded-2xl border border-foreground-50/10 bg-background-900/60 p-5 md:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-heading text-lg font-extrabold text-foreground-50">
          Estimate your earnings
        </h3>
        <span className="rounded-full bg-gradient-brand px-3 py-1 text-[11px] font-bold text-white">
          {tier.name} · {tier.share}%
        </span>
      </div>

      <div className="mt-5 space-y-5">
        <div>
          <div className="flex items-baseline justify-between">
            <span className="text-xs uppercase tracking-wider text-foreground-500">
              Active players referred
            </span>
            <span className="font-heading text-sm font-extrabold text-foreground-50 tabular-nums">
              {players}
            </span>
          </div>
          <input
            type="range"
            min={1}
            max={500}
            step={1}
            value={players}
            onChange={(event) => setPlayers(Number(event.target.value))}
            aria-label="Active players referred"
            className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-foreground-50/15 accent-primary-500"
          />
        </div>

        <div>
          <div className="flex items-baseline justify-between">
            <span className="text-xs uppercase tracking-wider text-foreground-500">
              Avg. monthly NGR per player
            </span>
            <span className="font-heading text-sm font-extrabold text-foreground-50 tabular-nums">
              {ngr} USDT
            </span>
          </div>
          <input
            type="range"
            min={20}
            max={600}
            step={10}
            value={ngr}
            onChange={(event) => setNgr(Number(event.target.value))}
            aria-label="Average monthly NGR per player"
            className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-foreground-50/15 accent-primary-500"
          />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
        <div className="rounded-xl border border-primary-500/40 bg-primary-500/10 p-4">
          <p className="text-[10px] uppercase tracking-wider text-foreground-500">
            Your monthly payout
          </p>
          <p className="mt-1 font-heading text-2xl font-extrabold text-foreground-50 tabular-nums">
            {money(commission)}
            <span className="ml-1 text-[11px] font-semibold text-foreground-400">USDT</span>
          </p>
        </div>
        <div className="rounded-xl border border-foreground-50/10 bg-background-950/40 p-4">
          <p className="text-[10px] uppercase tracking-wider text-foreground-500">
            Yearly projection
          </p>
          <p className="mt-1 font-heading text-2xl font-extrabold text-foreground-50 tabular-nums">
            {money(commission * 12)}
            <span className="ml-1 text-[11px] font-semibold text-foreground-400">USDT</span>
          </p>
        </div>
      </div>

      <p className="mt-3 text-[11px] leading-relaxed text-foreground-600">
        Based on {money(gross)} USDT monthly NGR across your players at a {tier.share}% share.
        Projections are estimates, not guarantees.
      </p>
    </div>
  );
}