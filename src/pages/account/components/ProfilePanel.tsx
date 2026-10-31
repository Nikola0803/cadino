import { accountProfile, accountSummary } from "@/mocks/account";

interface ProfilePanelProps {
  activeTab: string;
  onChangeTab: (tab: string) => void;
}

export const accountTabs = [
  { id: "overview", label: "Overview", icon: "ri-dashboard-line" },
  { id: "wallet", label: "Wallet", icon: "ri-wallet-3-line" },
  { id: "bets", label: "Bet history", icon: "ri-history-line" },
  { id: "bonuses", label: "Bonuses", icon: "ri-gift-2-line" },
  { id: "settings", label: "Settings", icon: "ri-settings-3-line" },
];

export default function ProfilePanel({ activeTab, onChangeTab }: ProfilePanelProps) {
  return (
    <div className="space-y-3">
      <div className="relative overflow-hidden rounded-2xl border border-foreground-50/10 bg-background-900/60 p-5">
        <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary-500/20 blur-2xl"></div>
        <div className="relative flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand font-heading text-lg font-extrabold text-white">
            {accountProfile.username.slice(0, 1).toUpperCase()}
          </span>
          <div className="min-w-0">
            <p className="flex items-center gap-1.5 truncate font-heading text-sm font-bold text-foreground-50">
              {accountProfile.username}
              {accountProfile.verified ? (
                <i className="ri-verified-badge-fill text-sm text-secondary-400"></i>
              ) : null}
            </p>
            <p className="truncate text-[11px] text-foreground-500">{accountProfile.email}</p>
          </div>
        </div>

        <div className="relative mt-4 rounded-xl border border-foreground-50/10 bg-background-950/60 p-3.5">
          <p className="text-[10px] uppercase tracking-wider text-foreground-500">
            Total balance
          </p>
          <p className="mt-0.5 font-heading text-2xl font-extrabold text-foreground-50 tabular-nums">
            {accountSummary.balance}
            <span className="ml-1 text-[11px] font-semibold text-foreground-400">USDT</span>
          </p>
          <div className="mt-2 flex items-center gap-2 text-[11px]">
            <span className="rounded-md bg-foreground-50/10 px-2 py-0.5 text-foreground-300">
              Bonus {accountSummary.bonus}
            </span>
            <span className="rounded-md bg-secondary-500/15 px-2 py-0.5 font-semibold text-secondary-300">
              +{accountSummary.rakeback} rakeback
            </span>
          </div>
        </div>

        <div className="relative mt-2.5 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => onChangeTab("wallet")}
            className="whitespace-nowrap rounded-xl bg-gradient-brand py-2.5 text-xs font-bold text-white transition-transform hover:-translate-y-0.5 cursor-pointer"
          >
            Deposit
          </button>
          <button
            type="button"
            onClick={() => onChangeTab("wallet")}
            className="whitespace-nowrap rounded-xl bg-foreground-50/10 py-2.5 text-xs font-bold text-foreground-50 transition-colors hover:bg-foreground-50/20 cursor-pointer"
          >
            Withdraw
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-foreground-50/10 bg-background-900/60 p-2">
        <div className="no-scrollbar flex gap-1 overflow-x-auto lg:flex-col">
          {accountTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => onChangeTab(tab.id)}
              className={`flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-xl px-3.5 py-2.5 text-[13px] transition-colors cursor-pointer lg:w-full ${
                activeTab === tab.id
                  ? "bg-background-950 font-semibold text-primary-400"
                  : "text-foreground-400 hover:bg-background-950/60 hover:text-foreground-50"
              }`}
            >
              <i className={`${tab.icon} text-base`}></i>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-primary-500/30 bg-primary-500/10 p-4">
        <p className="flex items-center gap-1.5 text-xs font-bold text-foreground-50">
          <i className="ri-vip-crown-line text-primary-300"></i>
          Gold tier · {accountSummary.tierPercent}%
        </p>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-foreground-50/10">
          <div
            className="h-full rounded-full bg-gradient-brand"
            style={{ width: `${accountSummary.tierPercent}%` }}
          ></div>
        </div>
        <p className="mt-1.5 text-[11px] text-foreground-400">
          85,500 USDT wagered to {accountSummary.nextTier}
        </p>
      </div>
    </div>
  );
}