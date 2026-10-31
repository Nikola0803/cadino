import { useState } from "react";
import { accountProfile } from "@/mocks/account";

const limitOptions = ["No limit", "250 USDT / day", "500 USDT / day", "1,000 USDT / week"];

export default function SettingsPanel() {
  const [twoFactor, setTwoFactor] = useState(accountProfile.twoFactor);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [raceAlerts, setRaceAlerts] = useState(false);
  const [limit, setLimit] = useState(limitOptions[0]);
  const [saved, setSaved] = useState(false);

  const toggle = (
    label: string,
    description: string,
    value: boolean,
    onToggle: () => void
  ) => (
    <div className="flex items-start justify-between gap-4 border-b border-foreground-50/10 py-3.5 last:border-0">
      <div className="min-w-0">
        <p className="text-sm font-semibold text-foreground-100">{label}</p>
        <p className="mt-0.5 text-[11px] leading-relaxed text-foreground-500">{description}</p>
      </div>
      <button
        type="button"
        aria-pressed={value}
        onClick={onToggle}
        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors cursor-pointer ${
          value ? "bg-gradient-brand" : "bg-foreground-50/15"
        }`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-all ${
            value ? "left-[22px]" : "left-0.5"
          }`}
        ></span>
      </button>
    </div>
  );

  return (
    <div className="space-y-3">
      <section className="rounded-2xl border border-foreground-50/10 bg-background-900/50 p-4 md:p-5">
        <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground-200">
          Profile
        </h3>
        <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {[
            { label: "Username", value: accountProfile.username },
            { label: "Email", value: accountProfile.email },
            { label: "Country", value: accountProfile.country },
            { label: "Member since", value: accountProfile.joined },
          ].map((field) => (
            <div
              key={field.label}
              className="rounded-xl border border-foreground-50/10 bg-background-950/50 px-3.5 py-2.5"
            >
              <p className="text-[10px] uppercase tracking-wider text-foreground-500">
                {field.label}
              </p>
              <p className="mt-0.5 truncate text-sm font-semibold text-foreground-100">
                {field.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-foreground-50/10 bg-background-900/50 p-4 md:p-5">
        <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground-200">
          Security
        </h3>
        <div className="mt-1">
          {toggle(
            "Two-factor authentication",
            "Require a code from your authenticator app on every login and withdrawal.",
            twoFactor,
            () => setTwoFactor((prev) => !prev)
          )}
          {toggle(
            "Login email alerts",
            "Get an email whenever a new device signs into your account.",
            emailAlerts,
            () => setEmailAlerts((prev) => !prev)
          )}
          {toggle(
            "Race and bonus alerts",
            "Notify me when a new race starts or a bonus unlocks.",
            raceAlerts,
            () => setRaceAlerts((prev) => !prev)
          )}
        </div>
      </section>

      <section className="rounded-2xl border border-foreground-50/10 bg-background-900/50 p-4 md:p-5">
        <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground-200">
          Responsible gambling
        </h3>
        <p className="mt-1 text-[11px] leading-relaxed text-foreground-500">
          Limits apply immediately. Increases only take effect after a 24-hour cool-off.
        </p>
        <label className="mt-3 block">
          <span className="text-[10px] uppercase tracking-wider text-foreground-500">
            Deposit limit
          </span>
          <div className="relative mt-1.5">
            <select
              value={limit}
              onChange={(event) => setLimit(event.target.value)}
              className="w-full appearance-none rounded-xl border border-foreground-50/10 bg-background-950/70 px-3.5 py-2.5 text-sm text-foreground-100 outline-none focus:border-primary-500/60 cursor-pointer"
            >
              {limitOptions.map((option) => (
                <option key={option} value={option} className="bg-background-900">
                  {option}
                </option>
              ))}
            </select>
            <i className="ri-arrow-down-s-line pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-lg text-foreground-400"></i>
          </div>
        </label>

        <div className="mt-3 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => {
              setSaved(true);
              window.setTimeout(() => setSaved(false), 2400);
            }}
            className="whitespace-nowrap rounded-xl bg-gradient-brand px-5 py-2.5 text-xs font-bold text-white transition-transform hover:-translate-y-0.5 cursor-pointer"
          >
            {saved ? "Saved" : "Save changes"}
          </button>
          <button
            type="button"
            className="whitespace-nowrap rounded-xl bg-foreground-50/10 px-5 py-2.5 text-xs font-bold text-foreground-100 transition-colors hover:bg-foreground-50/20 cursor-pointer"
          >
            Take a 24-hour break
          </button>
        </div>
      </section>

      <p className="px-1 text-[11px] leading-relaxed text-foreground-600">
        This is a demo account view. Signing in with a real account needs the built-in backend to be
        connected first.
      </p>
    </div>
  );
}