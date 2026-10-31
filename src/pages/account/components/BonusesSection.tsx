import { activeBonuses } from "@/mocks/account";

export default function BonusesSection() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 gap-2.5 md:grid-cols-3">
        <div className="rounded-2xl border border-foreground-50/10 bg-background-900/50 p-4">
          <p className="text-[10px] uppercase tracking-wider text-foreground-500">Active bonuses</p>
          <p className="mt-1 font-heading text-xl font-extrabold text-foreground-50">
            {activeBonuses.length}
          </p>
        </div>
        <div className="rounded-2xl border border-foreground-50/10 bg-background-900/50 p-4">
          <p className="text-[10px] uppercase tracking-wider text-foreground-500">Bonus balance</p>
          <p className="mt-1 font-heading text-xl font-extrabold text-foreground-50 tabular-nums">
            800.00
            <span className="ml-1 text-[11px] font-semibold text-foreground-400">USDT</span>
          </p>
        </div>
        <div className="rounded-2xl border border-foreground-50/10 bg-background-900/50 p-4">
          <p className="text-[10px] uppercase tracking-wider text-foreground-500">Cleared this month</p>
          <p className="mt-1 font-heading text-xl font-extrabold text-secondary-300 tabular-nums">
            1,400.00
            <span className="ml-1 text-[11px] font-semibold text-foreground-400">USDT</span>
          </p>
        </div>
      </div>

      {activeBonuses.map((bonus) => (
        <div
          key={bonus.id}
          className="rounded-2xl border border-foreground-50/10 bg-background-900/50 p-4 md:p-5"
        >
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-foreground-50">{bonus.name}</p>
              <p className="mt-0.5 text-[11px] text-foreground-500">
                {bonus.remaining} · expires in {bonus.expires}
              </p>
            </div>
            <span className="rounded-full bg-gradient-brand px-2.5 py-1 text-[10px] font-bold text-white">
              {bonus.amount}
            </span>
          </div>
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-foreground-50/10">
            <div
              className="h-full rounded-full bg-gradient-brand transition-all"
              style={{ width: `${bonus.progress}%` }}
            ></div>
          </div>
          <div className="mt-1.5 flex justify-between text-[10px] text-foreground-500">
            <span>{bonus.progress}% cleared</span>
            <span>{bonus.expires}</span>
          </div>
        </div>
      ))}
    </div>
  );
}