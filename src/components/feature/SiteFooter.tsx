import { Link } from "react-router-dom";
import PaymentMarks from "@/components/base/PaymentMarks";

const footerColumns = [
  {
    title: "Support",
    links: [
      { label: "Live Support", to: "/support" },
      { label: "Help Center", to: "/support" },
      { label: "Contact Us", to: "/support" },
      { label: "Game Rules", to: "/support" },
    ],
  },
  {
    title: "Policy",
    links: [
      { label: "AML Policy", to: "/support" },
      { label: "KYC Policy", to: "/support" },
      { label: "Responsible Gambling Policy", to: "/support" },
      { label: "Terms and Conditions", to: "/support" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-foreground-50/10 px-4 pb-4 pt-8 md:mt-10 md:px-2 md:pb-10 md:pt-10">
      <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
        <div className="col-span-2 lg:col-span-1">
          <div className="mb-4 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand">
              <i className="ri-vip-diamond-fill text-lg text-white"></i>
            </span>
            <span className="font-heading text-xl font-extrabold">
              Rola<span className="text-gradient">bets</span>
            </span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-foreground-400">
            Thousands of slots, original games, live tables and the sharpest sports odds — all in
            one lobby.
          </p>
          <div className="mt-5 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground-50/15 text-[10px] font-bold text-foreground-300">
              18+
            </span>
            <span className="rounded-full border border-foreground-50/15 px-3 py-1.5 text-[11px] text-foreground-400">
              Responsible Gaming
            </span>
          </div>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title} className="col-span-1">
            <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-foreground-200">
              {column.title}
            </h3>
            <ul className="space-y-2.5">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-foreground-400 transition-colors hover:text-foreground-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 lg:col-span-1">
          <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-foreground-200">
            Accepted Networks
          </h3>
          <PaymentMarks />

          <h3 className="mb-3 mt-6 font-heading text-sm font-bold uppercase tracking-wider text-foreground-200">
            Community
          </h3>
          <div className="flex gap-2">
            {["ri-twitter-x-line", "ri-instagram-line", "ri-telegram-line"].map((icon) => (
              <Link
                key={icon}
                to="/"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground-50/10 text-foreground-200 transition-colors hover:bg-primary-500 hover:text-white"
              >
                <i className={`${icon} text-base`}></i>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 border-t border-foreground-50/10 pt-6 text-xs leading-relaxed text-foreground-600 md:mt-10 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 rolabets.com. All rights reserved.</p>
        <p className="max-w-2xl text-foreground-500">
          Rolabets is operated under a Curacao gaming licence. Gambling can be addictive — set
          limits, take breaks and never bet more than you can afford to lose.
        </p>
      </div>
    </footer>
  );
}