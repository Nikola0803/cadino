import { useState } from "react";
import SiteLayout from "@/components/feature/SiteLayout";
import PaymentMarks from "@/components/base/PaymentMarks";
import ProfilePanel, { accountTabs } from "@/pages/account/components/ProfilePanel";
import TransactionTable from "@/pages/account/components/TransactionTable";
import BetHistoryList from "@/pages/account/components/BetHistoryList";
import BonusesSection from "@/pages/account/components/BonusesSection";
import SettingsPanel from "@/pages/account/components/SettingsPanel";
import { accountSummary } from "@/mocks/account";

export default function Account() {
  const [tab, setTab] = useState("overview");

  const stats = [
    { label: "Total wagered", value: accountSummary.totalWagered, tone: "text-foreground-50" },
    { label: "Deposited", value: accountSummary.deposited, tone: "text-foreground-50" },
    { label: "Withdrawn", value: accountSummary.withdrawn, tone: "text-foreground-50" },
    { label: "Net profit", value: accountSummary.netProfit, tone: "text-secondary-300" },
  ];

  const tabLabel = accountTabs.find((item) => item.id === tab)?.label ?? "Overview";

  return (
    <SiteLayout>
      <div className="space-y-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-foreground-50/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-foreground-200">
              <i className="ri-user-3-line text-primary-400"></i>
              My account
            </p>
            <h1 className="mt-2 font-heading text-2xl font-extrabold tracking-tight text-foreground-50 md:text-3xl">
              {tabLabel}
            </h1>
          </div>
          <p className="text-[11px] text-foreground-500">
            Level {accountSummary.level} · {accountSummary.tier} member
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-[280px_minmax(0,1fr)]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ProfilePanel activeTab={tab} onChangeTab={setTab} />
          </div>

          <div className="min-w-0 space-y-3">
            {tab === "overview" ? (
              <>
                <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-foreground-50/10 bg-background-900/50 p-4"
                    >
                      <p className="text-[10px] uppercase tracking-wider text-foreground-500">
                        {stat.label}
                      </p>
                      <p className={`mt-1 font-heading text-lg font-extrabold tabular-nums ${stat.tone}`}>
                        {stat.value}
                      </p>
                      <p className="text-[10px] text-foreground-600">USDT</p>
                    </div>
                  ))}
                </div>

                <section className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground-200">
                      Active bonuses
                    </h2>
                    <button
                      type="button"
                      onClick={() => setTab("bonuses")}
                      className="whitespace-nowrap text-[11px] font-semibold text-primary-400 hover:text-primary-300 cursor-pointer"
                    >
                      View all
                    </button>
                  </div>
                  <BonusesSection />
                </section>

                <section className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground-200">
                      Recent bets
                    </h2>
                    <button
                      type="button"
                      onClick={() => setTab("bets")}
                      className="whitespace-nowrap text-[11px] font-semibold text-primary-400 hover:text-primary-300 cursor-pointer"
                    >
                      Full history
                    </button>
                  </div>
                  <BetHistoryList limit={4} compact />
                </section>

                <section className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground-200">
                      Latest transactions
                    </h2>
                    <button
                      type="button"
                      onClick={() => setTab("wallet")}
                      className="whitespace-nowrap text-[11px] font-semibold text-primary-400 hover:text-primary-300 cursor-pointer"
                    >
                      Open wallet
                    </button>
                  </div>
                  <TransactionTable limit={4} />
                </section>
              </>
            ) : null}

            {tab === "wallet" ? (
              <>
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                  <div className="relative overflow-hidden rounded-2xl border border-primary-500/30 bg-primary-500/10 p-4">
                    <p className="text-[10px] uppercase tracking-wider text-foreground-500">
                      Available
                    </p>
                    <p className="mt-1 font-heading text-xl font-extrabold text-foreground-50 tabular-nums">
                      {accountSummary.balance}
                    </p>
                    <p className="text-[10px] text-foreground-500">Ready to play or withdraw</p>
                  </div>
                  <div className="rounded-2xl border border-foreground-50/10 bg-background-900/50 p-4">
                    <p className="text-[10px] uppercase tracking-wider text-foreground-500">
                      Bonus funds
                    </p>
                    <p className="mt-1 font-heading text-xl font-extrabold text-foreground-50 tabular-nums">
                      {accountSummary.bonus}
                    </p>
                    <p className="text-[10px] text-foreground-500">Wagering required</p>
                  </div>
                  <div className="rounded-2xl border border-foreground-50/10 bg-background-900/50 p-4">
                    <p className="text-[10px] uppercase tracking-wider text-foreground-500">
                      Rakeback pending
                    </p>
                    <p className="mt-1 font-heading text-xl font-extrabold text-secondary-300 tabular-nums">
                      {accountSummary.rakeback}
                    </p>
                    <p className="text-[10px] text-foreground-500">Credited instantly</p>
                  </div>
                </div>

                <section className="rounded-2xl border border-foreground-50/10 bg-background-900/50 p-4">
                  <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground-200">
                    Deposit methods
                  </h2>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <PaymentMarks />
                    <span
                      title="Bank transfer"
                      className="flex h-9 items-center gap-1.5 rounded-lg bg-background-50 px-2.5 text-[11px] font-bold text-foreground-900 shadow-sm shadow-black/20"
                    >
                      <i className="ri-bank-line text-[14px]"></i>
                      Bank
                    </span>
                  </div>
                  <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                    <button
                      type="button"
                      className="whitespace-nowrap rounded-xl bg-gradient-brand px-5 py-2.5 text-xs font-bold text-white cursor-pointer"
                    >
                      Deposit
                    </button>
                    <button
                      type="button"
                      className="whitespace-nowrap rounded-xl bg-foreground-50/10 px-5 py-2.5 text-xs font-bold text-foreground-100 hover:bg-foreground-50/20 transition-colors cursor-pointer"
                    >
                      Withdraw
                    </button>
                    <span className="text-[11px] leading-relaxed text-foreground-500 sm:self-center">
                      Crypto withdrawals are processed instantly for Gold and above.
                    </span>
                  </div>
                </section>

                <section className="space-y-2.5">
                  <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground-200">
                    Transaction history
                  </h2>
                  <TransactionTable />
                </section>
              </>
            ) : null}

            {tab === "bets" ? <BetHistoryList /> : null}

            {tab === "bonuses" ? <BonusesSection /> : null}

            {tab === "settings" ? <SettingsPanel /> : null}
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}