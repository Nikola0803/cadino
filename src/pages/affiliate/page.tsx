import { Link } from "react-router-dom";
import SiteLayout from "@/components/feature/SiteLayout";
import Accordion from "@/components/base/Accordion";
import EarningsCalculator from "@/pages/affiliate/components/EarningsCalculator";
import { commissionTiers, affiliateSteps, affiliateFaqs } from "@/mocks/affiliate";

export default function Affiliate() {
  return (
    <SiteLayout>
      <div className="space-y-6">
        <section className="relative overflow-hidden rounded-2xl border border-foreground-50/10 bg-background-900/60 p-5 md:p-8">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-500/25 blur-3xl"></div>
          <div className="absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-primary-500/20 blur-3xl"></div>

          <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <div>
              <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-foreground-50/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-foreground-200">
                <i className="ri-user-star-line text-primary-400"></i>
                Affiliate program
              </p>
              <h1 className="font-heading text-2xl font-extrabold tracking-tight text-foreground-50 md:text-4xl">
                Up to 45% lifetime <span className="text-gradient">revenue share</span>
              </h1>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-foreground-400">
                Bring players, keep earning. No negative carryover, weekly payouts from Elite, and
                a dashboard that shows you every click and every FTD in real time.
              </p>
              <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                <Link
                  to="/account"
                  className="whitespace-nowrap rounded-xl bg-gradient-brand px-5 py-3 text-center text-sm font-bold text-white shadow-lg shadow-primary-500/25 transition-transform hover:-translate-y-0.5 cursor-pointer"
                >
                  Apply to the program
                </Link>
                <Link
                  to="/support"
                  className="whitespace-nowrap rounded-xl bg-foreground-50/10 px-5 py-3 text-center text-sm font-semibold text-foreground-50 transition-colors hover:bg-foreground-50/20 cursor-pointer"
                >
                  Talk to an affiliate manager
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {[
                { value: "45%", label: "Max rev share" },
                { value: "0", label: "Negative carryover" },
                { value: "50 USDT", label: "Min payout" },
                { value: "24h", label: "Approval time" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-foreground-50/10 bg-background-950/50 p-4"
                >
                  <p className="font-heading text-xl font-extrabold text-foreground-50 md:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-wide text-foreground-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl border border-foreground-50/10 bg-background-900/60">
          <div className="border-b border-foreground-50/10 p-5">
            <h2 className="font-heading text-lg font-extrabold text-foreground-50 md:text-xl">
              Commission tiers
            </h2>
            <p className="mt-1 text-xs text-foreground-400">
              Tiers are recalculated monthly on your active player count.
            </p>
          </div>
          <div className="grid grid-cols-1 divide-y divide-foreground-50/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
            {commissionTiers.map((tier, index) => (
              <div
                key={tier.id}
                className={`relative p-5 ${
                  index > 0 ? "lg:border-l lg:border-foreground-50/10" : ""
                } ${index === 2 ? "bg-primary-500/5" : ""}`}
              >
                {index === 2 ? (
                  <span className="absolute right-4 top-4 rounded-full bg-gradient-brand px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                    Popular
                  </span>
                ) : null}
                <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground-300">
                  {tier.name}
                </h3>
                <p className="mt-2 font-heading text-3xl font-extrabold text-gradient">
                  {tier.share}
                </p>
                <p className="mt-1 text-[11px] text-foreground-500">{tier.players}</p>
                <p className="mt-2 text-xs font-semibold text-foreground-200">
                  or {tier.bonus} per FTD
                </p>
                <ul className="mt-3 space-y-1.5">
                  {tier.perks.map((perk) => (
                    <li
                      key={perk}
                      className="flex gap-1.5 text-[11px] leading-relaxed text-foreground-400"
                    >
                      <i className="ri-check-line mt-0.5 shrink-0 text-secondary-400"></i>
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
          <EarningsCalculator />

          <section className="rounded-2xl border border-foreground-50/10 bg-background-900/60 p-5 md:p-6">
            <h3 className="font-heading text-lg font-extrabold text-foreground-50">
              How the program works
            </h3>
            <div className="mt-4 space-y-3">
              {affiliateSteps.map((step, index) => (
                <div key={step.title} className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-foreground-50/10 font-heading text-xs font-bold text-foreground-200">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-foreground-100">{step.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-foreground-400">
                      {step.copy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="space-y-3">
          <h2 className="font-heading text-lg font-extrabold text-foreground-50 md:text-xl">
            Affiliate FAQ
          </h2>
          <Accordion items={affiliateFaqs} defaultOpenId="aff-1" />
        </section>

        <section className="relative overflow-hidden rounded-2xl border border-primary-500/30 bg-primary-500/10 p-5 md:p-7">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary-500/30 blur-3xl"></div>
          <div className="relative flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="font-heading text-lg font-extrabold text-foreground-50 md:text-xl">
                Ready to turn your traffic into recurring income?
              </h2>
              <p className="mt-1 max-w-xl text-xs leading-relaxed text-foreground-400">
                Applications are reviewed within 24 hours. Streamers, tipsters, comparison sites and
                communities all welcome.
              </p>
            </div>
            <Link
              to="/account"
              className="whitespace-nowrap rounded-xl bg-gradient-brand px-5 py-3 text-sm font-bold text-white shadow-lg shadow-primary-500/25 transition-transform hover:-translate-y-0.5 cursor-pointer"
            >
              Become an affiliate
            </Link>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}