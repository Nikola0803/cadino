import { useMemo, useState } from "react";
import { vipTiers } from "@/mocks/vip";

const rates = vipTiers.map((tier) => ({
  id: tier.id,
  name: tier.name,
  rate: Number.parseFloat(tier.rakeback),
}));

export default function RakebackCalculator() {
  const [volume, setVolume] = useState(50_000);
  const [tierId, setTierId] = useState("gold");

  const current = rates.find((item) => item.id === tierId) ?? rates[2];

  const monthly = useMemo(() => (volume * current.rate) / 100, [volume, current.rate]);
  const weekly = monthly / 4.33;
  const yearly = monthly * 12;

  const format = (value: number) =>
    value.toLocaleString("en-US", { maximumFractionDigits: 0 });

  return (
    <div className="rounded-2xl border border-foreground-50/10 bg-background-900/60 p-5 md:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-heading text-lg font-extrabold text-foreground-50">
            Rakeback calculator
          </h3>
          <p className="mt-1 text-xs text-foreground-400">
            Move the slider to see what your wagering volume gives back.
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {rates.map((rate) => (
            <button
              key={rate.id}
              type="button"
              onClick={() => setTierId(rate.id)}
              className={`whitespace-nowrap rounded-full px-3 py-1.5 text-[11px] font-bold transition-colors cursor-pointer ${
                tierId === rate.id
                  ? "bg-gradient-brand text-white"
                  : "bg-foreground-50/10 text-foreground-300 hover:text-foreground-50"
              }`}
            >
              {rate.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-baseline justify-between">
          <span className="text-xs uppercase tracking-wider text-foreground-500">
            Monthly wagered
          </span>
          <span className="font-heading text-lg font-extrabold text-foreground-50 tabular-nums">
            {format(volume)} USDT
          </span>
        </div>
        <input
          type="range"
          min={5_000}
          max={500_000}
          step={5_000}
          value={volume}
          onChange={(event) => setVolume(Number(event.target.value))}
          aria-label="Monthly wagered volume"
          className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-foreground-50/15 accent-primary-500"
        />
        <div className="mt-1.5 flex justify-between text-[10px] text-foreground-600">
          <span>5K</span>
          <span>500K</span>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
        {[
          { label: "Weekly back", value: weekly, accent: false },
          { label: "Monthly back", value: monthly, accent: true },
          { label: "Yearly back", value: yearly, accent: false },
        ].map((item) => (
          <div
            key={item.label}
            className={`rounded-xl border p-4 ${
              item.accent
                ? "border-primary-500/40 bg-primary-500/10"
                : "border-foreground-50/10 bg-background-950/40"
            }`}
          >
            <p className="text-[10px] uppercase tracking-wider text-foreground-500">{item.label}</p>
            <p className="mt-1 font-heading text-xl font-extrabold text-foreground-50 tabular-nums">
              {format(item.value)}
              <span className="ml-1 text-[11px] font-semibold text-foreground-400">USDT</span>
            </p>
          </div>
        ))}
      </div>

      <p className="mt-3 text-[11px] leading-relaxed text-foreground-600">
        Calculated at {current.rate}% {current.name} rakeback on real-money wagers only.
      </p>
    </div>
  );
}