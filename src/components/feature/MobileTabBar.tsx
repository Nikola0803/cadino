import { Link, useLocation } from "react-router-dom";

const items = [
  { to: "/", label: "Home", icon: "ri-home-5-line", activeIcon: "ri-home-5-fill" },
  { to: "/casino", label: "Casino", icon: "ri-fire-line", activeIcon: "ri-fire-fill" },
  { to: "/sports", label: "Sports", icon: "ri-football-line", activeIcon: "ri-football-fill" },
  { to: "/promotions", label: "Offers", icon: "ri-gift-2-line", activeIcon: "ri-gift-2-fill" },
  { to: "/account", label: "Account", icon: "ri-user-3-line", activeIcon: "ri-user-3-fill" },
];

export default function MobileTabBar() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-foreground-50/10 bg-background-950/95 backdrop-blur-xl lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="flex h-[58px] items-stretch px-1">
        {items.map((item) => {
          const active = isActive(item.to);
          return (
            <Link
              key={item.to}
              to={item.to}
              aria-current={active ? "page" : undefined}
              className={`relative flex flex-1 flex-col items-center justify-center gap-1 rounded-xl transition-colors cursor-pointer ${
                active ? "text-primary-400" : "text-foreground-400 active:text-foreground-100"
              }`}
            >
              {active ? (
                <span className="absolute top-0 h-0.5 w-7 rounded-full bg-gradient-brand"></span>
              ) : null}
              <span className="flex h-5 w-5 items-center justify-center">
                <i className={`${active ? item.activeIcon : item.icon} text-[21px] leading-none`}></i>
              </span>
              <span className="text-[10px] font-semibold leading-none">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}