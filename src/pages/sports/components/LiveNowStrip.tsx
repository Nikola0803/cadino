import { Link } from "react-router-dom";
import type { MatchItem } from "@/mocks/casino";
import { matchScores } from "@/mocks/sportsMarkets";
import { sportVenues } from "@/mocks/sportMedia";
import TeamCrest from "@/components/base/TeamCrest";
import type { OddSelection } from "@/pages/sports/components/EventRow";

interface LiveNowStripProps {
  matches: MatchItem[];
  selectedKeys: string[];
  onPick: (selection: OddSelection) => void;
}

export default function LiveNowStrip({ matches, selectedKeys, onPick }: LiveNowStripProps) {
  if (matches.length === 0) return null;

  return (
    <section>
      <div className="mb-2.5 flex items-center justify-between">
        <h2 className="flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wider text-foreground-100">
          <span className="live-dot h-2 w-2 rounded-full bg-secondary-400"></span>
          In-play now
          <span className="rounded-md bg-secondary-500/15 px-1.5 py-0.5 text-[10px] font-bold normal-case tracking-normal text-secondary-300">
            {matches.length} live
          </span>
        </h2>
        <span className="hidden text-[11px] text-foreground-600 sm:block">
          Odds refresh every 5 seconds
        </span>
      </div>

      <div className="no-scrollbar -mx-1 flex gap-2.5 overflow-x-auto px-1 pb-1">
        {matches.map((match) => {
          const score = matchScores[match.id];
          const venue = sportVenues[match.sportId];
          return (
            <div
              key={match.id}
              className="relative flex w-[290px] shrink-0 flex-col overflow-hidden rounded-xl border border-foreground-50/10 bg-background-900/60 p-3 transition-colors hover:border-secondary-500/30"
            >
              {venue && (
                <>
                  <img
                    src={venue}
                    alt={`${match.sport} venue`}
                    title={`${match.league} live venue`}
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background-950/70 via-background-950/85 to-background-950/95"></span>
                </>
              )}

              <div className="relative flex items-center justify-between gap-2 text-[10px] uppercase tracking-wider">
                <span className="truncate text-foreground-400">{match.league}</span>
                <span className="flex shrink-0 items-center gap-1 font-bold text-secondary-400">
                  <span className="live-dot h-1.5 w-1.5 rounded-full bg-secondary-400"></span>
                  {match.time}
                </span>
              </div>

              <Link to={`/sports/${match.id}`} className="relative mt-2 flex flex-col gap-1.5 cursor-pointer">
                <span className="flex items-center gap-2">
                  <TeamCrest team={match.home} size="sm" />
                  <span className="min-w-0 flex-1 truncate text-sm font-semibold text-foreground-50">
                    {match.home}
                  </span>
                  <span className="shrink-0 font-heading text-base font-extrabold text-foreground-50 tabular-nums">
                    {score?.home ?? "0"}
                  </span>
                </span>
                <span className="flex items-center gap-2">
                  <TeamCrest team={match.away} size="sm" />
                  <span className="min-w-0 flex-1 truncate text-sm font-semibold text-foreground-50">
                    {match.away}
                  </span>
                  <span className="shrink-0 font-heading text-base font-extrabold text-foreground-50 tabular-nums">
                    {score?.away ?? "0"}
                  </span>
                </span>
              </Link>

              <div className="relative mt-2.5 flex gap-1.5">
                {match.odds.map((odd) => {
                  const key = `${match.id}-${odd.label}`;
                  const selected = selectedKeys.includes(key);
                  return (
                    <button
                      key={odd.label}
                      type="button"
                      onClick={() => onPick({ match, label: odd.label, value: odd.value })}
                      className={`flex flex-1 items-center justify-between gap-1 rounded-lg px-2 py-1.5 text-[11px] transition-colors cursor-pointer ${
                        selected
                          ? "bg-gradient-brand text-white"
                          : "bg-background-950/80 text-foreground-300 ring-1 ring-inset ring-foreground-50/5 hover:bg-primary-500/15 hover:text-foreground-50"
                      }`}
                    >
                      <span className="uppercase opacity-70">{odd.label}</span>
                      <span className="font-bold tabular-nums">{odd.value}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}