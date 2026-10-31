import { useState } from "react";
import type { MatchItem } from "@/mocks/casino";
import EventRow, { type OddSelection } from "@/pages/sports/components/EventRow";

interface LeagueSectionProps {
  league: string;
  sportId: string;
  matches: MatchItem[];
  selectedKeys: string[];
  onPick: (selection: OddSelection) => void;
}

const icons: Record<string, string> = {
  soccer: "ri-football-line",
  basketball: "ri-basketball-line",
  hockey: "ri-snowy-line",
  tennis: "ri-ping-pong-line",
  boxing: "ri-boxing-line",
  mma: "ri-sword-line",
  esports: "ri-gamepad-line",
};

export default function LeagueSection({
  league,
  sportId,
  matches,
  selectedKeys,
  onPick,
}: LeagueSectionProps) {
  const [open, setOpen] = useState(true);
  const markets = matches.reduce((acc, match) => acc + match.markets, 0);

  return (
    <section className="overflow-hidden rounded-xl border border-foreground-50/10 bg-background-900/40">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center gap-2.5 px-3 py-2.5 text-left transition-colors hover:bg-foreground-50/5 cursor-pointer"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-foreground-50/5 text-foreground-400">
          <i className={`${icons[sportId] ?? "ri-trophy-line"} text-sm`}></i>
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[12px] font-bold uppercase tracking-wider text-foreground-100">
            {league}
          </span>
          <span className="block text-[10px] text-foreground-600">
            {matches.length} events · {markets} markets
          </span>
        </span>
        <i
          className={`ri-arrow-down-s-line text-lg text-foreground-500 transition-transform ${
            open ? "" : "-rotate-90"
          }`}
        ></i>
      </button>

      {open && (
        <div className="space-y-1 px-2 pb-2">
          {matches.map((match) => (
            <EventRow
              key={match.id}
              match={match}
              selectedKeys={selectedKeys}
              onPick={onPick}
            />
          ))}
        </div>
      )}
    </section>
  );
}