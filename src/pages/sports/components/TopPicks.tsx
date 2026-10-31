import { Link } from "react-router-dom";
import type { MatchItem } from "@/mocks/casino";
import { sportVenues } from "@/mocks/sportMedia";
import TeamCrest from "@/components/base/TeamCrest";
import type { OddSelection } from "@/pages/sports/components/EventRow";

interface TopPicksProps {
  matches: MatchItem[];
  selectedKeys: string[];
  onPick: (selection: OddSelection) => void;
}

export default function TopPicks({ matches, selectedKeys, onPick }: TopPicksProps) {
  if (matches.length === 0) return null;

  return (
    <section>
      <div className="mb-2.5 flex items-end justify-between gap-3">
        <div>
          <h2 className="flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wider text-foreground-100">
            <i className="ri-flashlight-fill text-accent-400"></i>
            Price boosts
          </h2>
          <p className="mt-0.5 text-[11px] text-foreground-500">
            Hand-picked markets with the margin taken off.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2.5 md:grid-cols-3">
        {matches.map((match) => {
          const odd = match.odds[0];
          const boostedValue = Number.parseFloat(odd.value);
          const previous = (boostedValue / 1.14).toFixed(2);
          const key = `${match.id}-${odd.label}`;
          const selected = selectedKeys.includes(key);
          const venue = sportVenues[match.sportId];

          return (
            <div
              key={match.id}
              className="relative overflow-hidden rounded-xl border border-foreground-50/10 bg-background-900/70"
            >
              {venue && (
                <>
                  <img
                    src={venue}
                    alt={`${match.sport} background`}
                    title={`${match.league} boosted market`}
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-900/70 via-background-950/85 to-accent-900/60"></span>
                </>
              )}

              <div className="relative p-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1 rounded-md bg-accent-500/25 px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-accent-200">
                    <i className="ri-arrow-up-double-line text-[11px]"></i>
                    Boosted
                  </span>
                  <span className="truncate text-[10px] uppercase tracking-wider text-foreground-400">
                    {match.league}
                  </span>
                </div>

                <Link to={`/sports/${match.id}`} className="mt-2.5 block space-y-1.5 cursor-pointer">
                  <span className="flex items-center gap-2">
                    <TeamCrest team={match.home} size="sm" />
                    <span className="truncate text-sm font-semibold text-foreground-50">
                      {match.home}
                    </span>
                  </span>
                  <span className="flex items-center gap-2">
                    <TeamCrest team={match.away} size="sm" />
                    <span className="truncate text-sm font-semibold text-foreground-50">
                      {match.away}
                    </span>
                  </span>
                </Link>

                <p className="mt-1.5 truncate text-[10px] text-foreground-500">
                  {match.home} to win · {match.time}
                </p>

                <div className="mt-2.5 flex items-center justify-between gap-2">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-heading text-lg font-extrabold text-accent-300 tabular-nums">
                      {odd.value}
                    </span>
                    <span className="text-[11px] text-foreground-600 line-through tabular-nums">
                      {previous}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onPick({ match, label: odd.label, value: odd.value })}
                    className={`whitespace-nowrap rounded-lg px-2.5 py-1.5 text-[11px] font-bold transition-colors cursor-pointer ${
                      selected
                        ? "bg-gradient-brand text-white"
                        : "bg-foreground-50/10 text-foreground-100 hover:bg-primary-500/25"
                    }`}
                  >
                    {selected ? "Added" : "Add to slip"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}