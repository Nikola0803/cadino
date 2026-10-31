import { Link } from "react-router-dom";
import { sportCategories } from "@/mocks/casino";

export default function SportsStrip() {
  return (
    <div className="no-scrollbar -mx-1 overflow-x-auto px-1">
      <div className="flex min-w-full gap-2">
        {sportCategories.map((sport) => (
          <Link
            key={sport.id}
            to="/sports"
            className="group flex min-w-[86px] flex-1 shrink-0 flex-col items-center gap-2 rounded-xl bg-background-900/70 py-3 ring-1 ring-foreground-50/5 transition-colors hover:bg-background-800 md:gap-2.5 md:py-4"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-foreground-50/5 text-foreground-300 transition-colors group-hover:bg-primary-500/15 group-hover:text-primary-400">
              <i className={`${sport.icon} text-lg`}></i>
            </span>
            <span className="text-center text-[11px] leading-none text-foreground-300 transition-colors group-hover:text-foreground-50 md:text-xs">
              {sport.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}