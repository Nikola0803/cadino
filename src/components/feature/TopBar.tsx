import { Link } from "react-router-dom";

interface TopBarProps {
  onMenu: () => void;
  onLogin: () => void;
  onRegister: () => void;
  onSearch: () => void;
}

export function Logo({ compact }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2 cursor-pointer">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand shadow-lg shadow-primary-500/30">
        <i className="ri-vip-diamond-fill text-lg text-white"></i>
      </span>
      <span
        className={`font-heading font-extrabold tracking-tight text-foreground-50 ${
          compact ? "text-lg" : "text-lg sm:text-xl"
        }`}
      >
        Rola<span className="text-gradient">bets</span>
      </span>
    </Link>
  );
}

export default function TopBar({ onMenu, onLogin, onRegister, onSearch }: TopBarProps) {
  return (
    <header className="sticky top-0 z-40 md:top-3">
      <div className="flex items-center justify-between gap-2 rounded-none border-b border-foreground-50/10 bg-background-950/80 px-3 py-2.5 backdrop-blur-xl md:rounded-2xl md:border md:px-4 md:py-3">
        <div className="flex min-w-0 items-center gap-2 md:gap-3">
          <button
            type="button"
            onClick={onMenu}
            aria-label="Open menu"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-foreground-50/10 text-foreground-100 transition-colors hover:bg-foreground-50/20 lg:hidden cursor-pointer"
          >
            <i className="ri-menu-3-line text-lg"></i>
          </button>
          <Logo />
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={onSearch}
            aria-label="Search games"
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground-50/10 text-foreground-100 transition-colors hover:bg-foreground-50/20 cursor-pointer md:h-11 md:w-11"
          >
            <i className="ri-search-line text-lg"></i>
          </button>
          <button
            type="button"
            onClick={onLogin}
            className="hidden whitespace-nowrap rounded-xl bg-foreground-50/10 px-4 py-2.5 text-sm font-semibold text-foreground-50 transition-colors hover:bg-foreground-50/20 md:flex md:items-center md:gap-2 cursor-pointer"
          >
            Login
            <i className="ri-login-box-line text-base"></i>
          </button>
          <button
            type="button"
            onClick={onRegister}
            className="whitespace-nowrap rounded-xl bg-gradient-brand px-3 py-2.5 text-[13px] font-bold text-white shadow-lg shadow-primary-500/25 transition-transform hover:-translate-y-0.5 md:px-4 md:text-sm cursor-pointer"
          >
            <span className="md:hidden">Sign up</span>
            <span className="hidden md:inline">Registration</span>
          </button>
        </div>
      </div>
    </header>
  );
}