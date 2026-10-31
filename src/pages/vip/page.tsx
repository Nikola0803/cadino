import SiteLayout from "@/components/feature/SiteLayout";
import VipTierCard from "@/pages/vip/components/VipTierCard";
import RakebackCalculator from "@/pages/vip/components/RakebackCalculator";
import { vipTiers, vipProgress, raceLeaderboard, vipBenefits } from "@/mocks/vip";

export default function Vip() {
  return (
    <SiteLayout>
      <div className="space-y-6">
        <section className="relative overflow-hidden rounded-2xl border border-foreground-50/10 bg-background-900/60 p-5 md:p-8">
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-primary-500/25 blur-3xl"></div>
          <div className="absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-accent-500/20 blur-3xl"></div>

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-foreground-50/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-foreground-200">
                <i className="ri-vip-crown-line text-primary-400"></i>
                VIP program
              </p>
              <h1 className="font-heading text-2xl font-extrabold tracking-tight text-foreground-50 md:text-4xl">
                Five tiers. Real <span className="text-gradient">cashback</span>.
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-foreground-400">
                Every wager feeds your tier and your rakeback rate. No points to convert, no
                expiration dates — just a bigger slice back on everything you play.
              </p>
            </div>

            <div className="w-full max-w-sm rounded-2xl border border-foreground-50/10 bg-background-950/60 p-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-foreground-500">
                  Your progress
                </span>
                <span className="rounded-full bg-gradient-brand px-2 py-0.5 text-[10px] font-bold text-white">
                  {vipProgress.currentTier}
                </span>
              </div>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-foreground-50/10">
                <div
                  className="h-full rounded-full bg-gradient-brand"
                  style={{ width: `${vipProgress.percent}%` }}
                ></div>
              </div>
              <div className="mt-2 flex items-baseline justify-between text-xs">
                <span className="font-semibold text-foreground-100 tabular-nums">
                  {vipProgress.wagered.toLocaleString()} USDT
                </span>
                <span className="text-foreground-500 tabular-nums">
                  {vipProgress.target.toLocaleString()} to {vipProgress.nextTier}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {vipTiers.map((tier) => (
            <VipTierCard key={tier.id} tier={tier} current={tier.name === vipProgress.currentTier} />
          ))}
        </section>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          <RakebackCalculator />

          <section className="rounded-2xl border border-foreground-50/10 bg-background-900/60 p-5 md:p-6">
            <h3 className="font-heading text-lg font-extrabold text-foreground-50">
              What you unlock
            </h3>
            <div className="mt-4 space-y-3">
              {vipBenefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-foreground-50/10">
                    <i className={`${benefit.icon} text-base text-primary-400`}></i>
                  </span>
                  <div>
                    <p className="text-sm font-bold text-foreground-100">{benefit.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-foreground-400">
                      {benefit.copy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="overflow-hidden rounded-2xl border border-foreground-50/10 bg-background-900/60">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-foreground-50/10 p-5">
            <div>
              <h2 className="font-heading text-lg font-extrabold text-foreground-50 md:text-xl">
                $100K Monthly Race
              </h2>
              <p className="mt-0.5 text-xs text-foreground-400">
                Live standings · resets in 1d 09h
              </p>
            </div>
            <span className="rounded-full bg-secondary-500/15 px-3 py-1 text-[11px] font-bold text-secondary-300">
              Prize pool $100,000
            </span>
          </div>

          <div className="grid grid-cols-[40px_minmax(0,1fr)_80px_72px] gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-foreground-600 md:grid-cols-[52px_minmax(0,1fr)_140px_110px_60px] md:px-5">
            <span>Rank</span>
            <span>Player</span>
            <span className="text-right">Wagered</span>
            <span className="text-right">Prize</span>
            <span className="hidden text-right md:block">Trend</span>
          </div>

          <div className="divide-y divide-foreground-50/5">
            {raceLeaderboard.map((row) => (
              <div
                key={row.rank}
                className={`grid grid-cols-[40px_minmax(0,1fr)_80px_72px] items-center gap-2 px-4 py-2.5 text-sm md:grid-cols-[52px_minmax(0,1fr)_140px_110px_60px] md:px-5 ${
                  row.you ? "bg-primary-500/10" : "hover:bg-foreground-50/5"
                }`}
              >
                <span
                  className={`font-heading text-sm font-extrabold tabular-nums ${
                    row.rank === 1
                      ? "text-primary-400"
                      : row.rank === 2
                        ? "text-foreground-100"
                        : row.rank === 3
                          ? "text-accent-300"
                          : "text-foreground-500"
                  }`}
                >
                  {row.rank}
                </span>
                <span className="flex min-w-0 items-center gap-2">
                  <span className="text-base leading-none">{row.country}</span>
                  <span
                    className={`truncate text-[13px] ${
                      row.you ? "font-bold text-primary-300" : "text-foreground-200"
                    }`}
                  >
                    {row.you ? "You" : row.player}
                  </span>
                </span>
                <span className="text-right text-xs font-semibold text-foreground-300 tabular-nums">
                  {row.wagered}
                </span>
                <span className="text-right text-xs font-bold text-secondary-300 tabular-nums">
                  ${row.prize}
                </span>
                <span className="hidden text-right md:block">
                  <i
                    className={`text-sm ${
                      row.move === "up"
                        ? "ri-arrow-up-line text-secondary-400"
                        : row.move === "down"
                          ? "ri-arrow-down-line text-primary-400"
                          : "ri-subtract-line text-foreground-600"
                    }`}
                  ></i>
                </span>
              </div>
            ))}
          </div>
        </section>

        <p className="px-1 text-[11px] leading-relaxed text-foreground-600">
          Tier requirements are assessed on a rolling 90-day wagering window. Rakeback rates are
          reviewed quarterly and never reduced without 30 days notice. Diamond membership is by
          invitation only.
        </p>
      </div>
    </SiteLayout>
  );
}