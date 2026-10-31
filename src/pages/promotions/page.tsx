import { useMemo, useState } from "react";
import SiteLayout from "@/components/feature/SiteLayout";
import PromoCard from "@/pages/promotions/components/PromoCard";
import PromoModal from "@/pages/promotions/components/PromoModal";
import { promotions, promoCategories, promoSteps } from "@/mocks/promotions";
import type { Promotion } from "@/mocks/promotions";

export default function Promotions() {
  const [active, setActive] = useState("all");
  const [selected, setSelected] = useState<Promotion | null>(null);

  const visible = useMemo(
    () => (active === "all" ? promotions : promotions.filter((item) => item.category === active)),
    [active]
  );

  return (
    <SiteLayout>
      <div className="space-y-5 md:space-y-6">
        <section className="relative overflow-hidden rounded-2xl border border-foreground-50/10 bg-background-900/60 p-4 sm:p-5 md:p-8">
          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-primary-500/25 blur-3xl"></div>
          <div className="absolute -bottom-28 left-1/4 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl"></div>
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-foreground-50/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-foreground-200">
                <i className="ri-gift-2-line text-primary-400"></i>
                {promotions.length} live offers
              </p>
              <h1 className="font-heading text-2xl font-extrabold tracking-tight text-foreground-50 md:text-4xl">
                Bonuses that actually <span className="text-gradient">stack up</span>
              </h1>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-foreground-400">
                Welcome packs, weekly reloads, instant rakeback and leaderboard races — all applied
                automatically to your account. No promo codes, no hunting.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 lg:gap-3">
              {[
                { label: "Total prize pool", value: "$1.4M" },
                { label: "Avg. rakeback", value: "7.5%" },
                { label: "Paid this week", value: "$212K" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-foreground-50/10 bg-background-950/50 px-3 py-3 text-center lg:px-4"
                >
                  <p className="font-heading text-base font-extrabold text-foreground-50 lg:text-xl">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-wide text-foreground-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1">
          {promoCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActive(category.id)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors cursor-pointer ${
                active === category.id
                  ? "bg-gradient-brand text-white shadow-lg shadow-primary-500/25"
                  : "bg-background-900/70 text-foreground-400 ring-1 ring-foreground-50/10 hover:text-foreground-50"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {visible.map((promo) => (
            <PromoCard key={promo.id} promo={promo} onOpen={setSelected} />
          ))}
        </section>

        <section className="rounded-2xl border border-foreground-50/10 bg-background-900/50 p-5 md:p-7">
          <h2 className="font-heading text-lg font-extrabold text-foreground-50 md:text-xl">
            How claiming works
          </h2>
          <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3">
            {promoSteps.map((step, index) => (
              <div
                key={step.title}
                className="relative rounded-xl border border-foreground-50/10 bg-background-950/40 p-4"
              >
                <span className="absolute right-4 top-3 font-heading text-3xl font-extrabold text-foreground-50/10">
                  0{index + 1}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand">
                  <i className={`${step.icon} text-lg text-white`}></i>
                </span>
                <h3 className="mt-3 font-heading text-sm font-bold text-foreground-50">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-foreground-400">{step.copy}</p>
              </div>
            ))}
          </div>
        </section>

        <p className="px-1 text-[11px] leading-relaxed text-foreground-600">
          All bonuses are subject to the general promotion terms. One active welcome offer per
          player, household and IP address. Bonus funds cannot be withdrawn until the wagering
          requirement is met. Gambling can be addictive — set limits before you play.
        </p>
      </div>

      <PromoModal promo={selected} onClose={() => setSelected(null)} />
    </SiteLayout>
  );
}