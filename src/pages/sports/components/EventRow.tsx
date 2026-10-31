import { Link } from "react-router-dom";
import type { MatchItem } from "@/mocks/casino";
import TeamCrest from "@/components/base/TeamCrest";

export interface OddSelection {
  match: MatchItem;
  label: string;
  value: string;
}

interface EventRowProps {
  match: MatchItem;
  selectedKeys: string[];
  onPick: (selection: OddSelection) => void;
}

export default function EventRow({ match, selectedKeys, onPick }: EventRowProps) {
  return (
    <div className="group flex flex-col gap-3 rounded-xl border border-transparent bg-background-950/40 px-3 py-2.5 transition-colors hover:border-foreground-50/10 hover:bg-background-900/70 md:flex-row md:items-center md:gap-4">
      <Link to={`/sports/${match.id}`} className="min-w-0 flex-1 cursor-pointer">
        <span className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[10px] uppercase tracking-wider text-foreground-500">
          {match.live ? (
            <span className="flex items-center gap-1 font-bold text-secondary-400">
              <span className="live-dot h-1.5 w-1.5 rounded-full bg-secondary-400"></span>
              {match.time}
            </span>
          ) : (
            <span className="font-semibold text-foreground-300">{match.time}</span>
          )}
          <span className="text-foreground-700">·</span>
          <span className="normal-case tracking-normal">{match.markets} markets</span>
        </span>

        <span className="mt-1.5 flex flex-col gap-1.5">
          <span className="flex items-center gap-2">
            <TeamCrest team={match.home} size="sm" />
            <span className="truncate text-sm font-semibold text-foreground-100 transition-colors group-hover:text-foreground-50">
              {match.home}
            </span>
          </span>
          <span className="flex items-center gap-2">
            <TeamCrest team={match.away} size="sm" />
            <span className="truncate text-sm font-semibold text-foreground-100 transition-colors group-hover:text-foreground-50">
              {match.away}
            </span>
          </span>
        </span>
      </Link>

      <div className="flex shrink-0 gap-1.5 md:justify-end">
        {match.odds.map((odd) => {
          const key = `${match.id}-${odd.label}`;
          const selected = selectedKeys.includes(key);
          return (
            <button
              key={odd.label}
              type="button"
              onClick={() => onPick({ match, label: odd.label, value: odd.value })}
              className={`flex min-w-[78px] flex-1 flex-col items-center justify-center rounded-lg px-2 py-2 transition-colors cursor-pointer md:flex-none ${
                selected
                  ? "bg-gradient-brand text-white shadow-lg shadow-primary-500/20"
                  : "bg-background-800/80 text-foreground-200 ring-1 ring-inset ring-foreground-50/5 hover:bg-primary-500/15 hover:ring-primary-500/40 hover:text-foreground-50"
              }`}
            >
              <span className="text-[10px] uppercase tracking-wide opacity-70">{odd.label}</span>
              <span className="text-sm font-bold tabular-nums">{odd.value}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}