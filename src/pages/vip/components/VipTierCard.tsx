import type { VipTier } from "@/mocks/vip";

interface VipTierCardProps {
  tier: VipTier;
  current?: boolean;
}

export default function VipTierCard({ tier, current }: VipTierCardProps) {
  return (
    <article
      className={`relative flex h-full flex-col overflow-hidden rounded-2xl border p-5 transition-all ${
        current
          ? "border-primary-500/50 bg-primary-500/10 shadow-lg shadow-primary-500/10"
          : "border-foreground-50/10 bg-background-900/60 hover:border-foreground-50/25"
      }`}
    >
      <div
        className={`pointer-events-none absolute -right-10 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${tier.color} opacity-60 blur-2xl`}
      ></div>

      {current ? (
        <span className="absolute right-4 top-4 rounded-full bg-gradient-brand px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
          Your tier
        </span>
      ) : null}

      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-foreground-50/10">
        <i className={`${tier.icon} text-xl text-foreground-50`}></i>
      </span>

      <h3 className="mt-3 font-heading text-lg font-extrabold text-foreground-50">{tier.name}</h3>
      <p className="mt-0.5 text-[11px] uppercase tracking-wider text-foreground-500">
        Level {tier.level} · {tier.requirement}
      </p>

      <div className="mt-4 space-y-2 border-t border-foreground-50/10 pt-4">
        <div className="flex items-baseline justify-between">
          <span className="text-xs text-foreground-400">Rakeback</span>
          <span className="font-heading text-lg font-extrabold text-gradient">{tier.rakeback}</span>
        </div>
        <div className="flex items-baseline justify-between">
          <span className="text-xs text-foreground-400">Weekly bonus</span>
          <span className="text-sm font-bold text-foreground-100">{tier.weeklyBonus}</span>
        </div>
        <div className="flex items-baseline justify-between">
          <span className="text-xs text-foreground-400">Withdrawals</span>
          <span className="text-sm font-bold text-foreground-100">{tier.withdrawal}</span>
        </div>
      </div>

      <ul className="mt-4 space-y-1.5">
        {tier.perks.map((perk) => (
          <li key={perk} className="flex gap-1.5 text-[11px] leading-relaxed text-foreground-400">
            <i className="ri-check-line mt-0.5 shrink-0 text-secondary-400"></i>
            {perk}
          </li>
        ))}
      </ul>
    </article>
  );
}