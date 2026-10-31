import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavItemProps {
  to: string;
  icon: string;
  label: string;
  active?: boolean;
  badge?: string;
  gradient?: boolean;
}

function NavItem({ to, icon, label, active, badge, gradient }: NavItemProps) {
  return (
    <Link
      to={to}
      className={`group relative flex items-center gap-3 rounded-xl px-4 py-2.5 text-[15px] transition-colors cursor-pointer ${
        active
          ? "bg-background-950 text-primary-400 font-semibold"
          : "text-foreground-400 hover:text-foreground-50 hover:bg-background-950/60"
      }`}
    >
      <span className="flex h-6 w-6 shrink-0 items-center justify-center">
        <i className={`${icon} text-[20px] leading-none`}></i>
      </span>
      <span className={`truncate ${gradient ? "text-gradient font-semibold" : ""}`}>{label}</span>
      {badge ? (
        <span className="ml-auto shrink-0 rounded-full bg-gradient-brand px-1.5 py-0.5 text-[11px] font-bold text-white">
          {badge}
        </span>
      ) : null}
    </Link>
  );
}

function Divider() {
  return <div className="mx-2 h-px bg-foreground-50/10" />;
}

const tradingAssets = [
  { symbol: "BTC", price: "77536.76", up: false },
  { symbol: "XAUT", price: "3975.79", up: false },
  { symbol: "ETH", price: "2242.67", up: false },
  { symbol: "ZEC", price: "1256.63", up: true },
  { symbol: "AMD", price: "520.55", up: false },
];

const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "pt", label: "Português", flag: "🇵🇹" },
];

interface SidebarContentProps {
  currentPath: string;
  onNavigate?: () => void;
}

export function SidebarContent({ currentPath, onNavigate }: SidebarContentProps) {
  const [tradingOpen, setTradingOpen] = useState(true);
  const [showAllAssets, setShowAllAssets] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [language, setLanguage] = useState("English");

  const isCasino = currentPath.startsWith("/casino");
  const isSports = currentPath.startsWith("/sports");
  const visibleAssets = showAllAssets ? tradingAssets : tradingAssets.slice(0, 4);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <div className="mb-5 flex rounded-2xl bg-background-950/80 p-1">
          <Link
            to="/casino"
            onClick={onNavigate}
            className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-1 py-2.5 text-sm transition-colors cursor-pointer ${
              isCasino
                ? "bg-foreground-50/10 text-primary-400"
                : "text-foreground-400 hover:text-foreground-100"
            }`}
          >
            <i className="ri-fire-line text-lg"></i>
            Casino
          </Link>
          <Link
            to="/sports"
            onClick={onNavigate}
            className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-1 py-2.5 text-sm transition-colors cursor-pointer ${
              isSports
                ? "bg-foreground-50/10 text-primary-400"
                : "text-foreground-400 hover:text-foreground-100"
            }`}
          >
            <i className="ri-football-line text-lg"></i>
            Sports
          </Link>
        </div>

        <nav className="flex flex-col gap-1" aria-label="Main">
          <NavItem to="/" icon="ri-home-5-line" label="Home" active={currentPath === "/"} />
          <NavItem to="/casino" icon="ri-heart-3-line" label="Favourites" />
          <NavItem to="/casino" icon="ri-time-line" label="Recently Played" />
          <NavItem to="/casino" icon="ri-vip-diamond-line" label="Original Games" />
          <NavItem to="/promotions" icon="ri-gift-2-line" label="Promotions" />
          <div className="my-2">
            <Divider />
          </div>
          <NavItem to="/vip" icon="ri-rocket-2-line" label="VIP program" />
          <div className="flex items-center justify-between rounded-xl px-4 py-2.5 text-[15px] text-foreground-400 transition-colors hover:bg-background-950/60 hover:text-foreground-50">
            <span className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center">
                <i className="ri-trophy-line text-[20px]"></i>
              </span>
              <span className="truncate">$10K Weekly Race</span>
            </span>
            <span className="text-xs font-semibold text-gradient">2d</span>
          </div>
          <div className="flex items-center justify-between rounded-xl px-4 py-2.5 text-[15px] text-foreground-400 transition-colors hover:bg-background-950/60 hover:text-foreground-50">
            <span className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center">
                <i className="ri-award-line text-[20px]"></i>
              </span>
              <span className="truncate">$100K Monthly Race</span>
            </span>
            <span className="text-xs font-semibold text-gradient">1d</span>
          </div>
          <NavItem to="/promotions" icon="ri-gift-2-line" label="My rewards" gradient />
          <NavItem to="/promotions" icon="ri-flag-2-line" label="Challenges" badge="2" />
          <div className="my-2">
            <Divider />
          </div>
          <NavItem to="/casino" icon="ri-file-list-3-line" label="Casino" />
          <NavItem to="/sports" icon="ri-football-line" label="Sports" />

          <button
            type="button"
            onClick={() => setTradingOpen((prev) => !prev)}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-[15px] text-foreground-400 transition-colors hover:bg-background-950/60 hover:text-foreground-50 cursor-pointer"
          >
            <span className="flex h-6 w-6 items-center justify-center">
              <i className="ri-line-chart-line text-[20px]"></i>
            </span>
            <span className="truncate">Trading</span>
            <i
              className={`ri-arrow-down-s-line ml-auto text-lg transition-transform ${
                tradingOpen ? "rotate-180" : ""
              }`}
            ></i>
          </button>

          {tradingOpen ? (
            <div className="ml-5 border-l border-foreground-50/10 pl-2">
              {visibleAssets.map((asset) => (
                <div
                  key={asset.symbol}
                  className="flex items-center gap-2 rounded-lg px-2 py-2 transition-colors hover:bg-background-950/60"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-foreground-50/10 text-[9px] font-bold text-foreground-100">
                    {asset.symbol.slice(0, 1)}
                  </span>
                  <span className="flex-1 text-xs text-foreground-300">{asset.symbol}</span>
                  <span className="text-xs tabular-nums text-foreground-100">${asset.price}</span>
                  <i
                    className={`text-sm ${
                      asset.up ? "ri-arrow-up-line text-secondary-400" : "ri-arrow-down-line text-primary-400"
                    }`}
                  ></i>
                </div>
              ))}
              <button
                type="button"
                onClick={() => setShowAllAssets((prev) => !prev)}
                className="flex w-full items-center gap-1 rounded-lg px-2 py-2 text-xs text-foreground-400 transition-colors hover:text-foreground-50 cursor-pointer"
              >
                {showAllAssets ? "Show less" : "Show more"}
                <i className={`ri-arrow-down-s-line ${showAllAssets ? "rotate-180" : ""}`}></i>
              </button>
            </div>
          ) : null}

          <NavItem to="/sports" icon="ri-hand-coin-line" label="Tap Trading" />
          <NavItem to="/blog" icon="ri-article-line" label="Blog" />
          <div className="my-2">
            <Divider />
          </div>
          <NavItem to="/affiliate" icon="ri-user-star-line" label="Affiliate Program" gradient />
        </nav>
      </div>

      <div className="mt-auto space-y-3 border-t border-foreground-50/10 pt-3">
        <Link
          to="/account"
          onClick={onNavigate}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-[15px] text-foreground-400 transition-colors hover:bg-foreground-50/5 hover:text-foreground-50 cursor-pointer"
        >
          <span className="flex h-6 w-6 items-center justify-center">
            <i className="ri-user-3-line text-[20px]"></i>
          </span>
          My Account
        </Link>
        <Link
          to="/support"
          onClick={onNavigate}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-[15px] text-foreground-400 transition-colors hover:bg-foreground-50/5 hover:text-foreground-50 cursor-pointer"
        >
          <span className="flex h-6 w-6 items-center justify-center">
            <i className="ri-customer-service-2-line text-[20px]"></i>
          </span>
          Live Support
        </Link>

        <div className="relative">
          <button
            type="button"
            onClick={() => setLangOpen((prev) => !prev)}
            className="flex w-full items-center gap-2 rounded-xl bg-foreground-50/10 px-3 py-2.5 text-sm text-foreground-100 transition-colors hover:bg-foreground-50/15 cursor-pointer"
          >
            <span className="text-base leading-none">
              {languages.find((item) => item.label === language)?.flag}
            </span>
            <span className="truncate">{language}</span>
            <i className="ri-arrow-down-s-line ml-auto text-lg text-foreground-400"></i>
          </button>
          {langOpen ? (
            <div className="absolute bottom-12 left-0 right-0 z-20 overflow-hidden rounded-xl border border-foreground-50/10 bg-background-900 py-1 shadow-xl">
              {languages.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => {
                    setLanguage(item.label);
                    setLangOpen(false);
                  }}
                  className={`flex w-full items-center gap-2 px-3 py-2 text-sm transition-colors hover:bg-foreground-50/10 cursor-pointer ${
                    item.label === language ? "text-primary-400" : "text-foreground-200"
                  }`}
                >
                  <span>{item.flag}</span>
                  {item.label}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function Sidebar() {
  const location = useLocation();
  return (
    <aside className="sticky top-3 hidden h-[calc(100vh_-_24px)] w-[264px] shrink-0 rounded-2xl border border-foreground-50/10 bg-background-900/60 p-3 backdrop-blur-xl lg:block">
      <SidebarContent currentPath={location.pathname} />
    </aside>
  );
}

export default Sidebar;