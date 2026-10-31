import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SiteLayout from "@/components/feature/SiteLayout";
import TeamCrest from "@/components/base/TeamCrest";
import MarketList from "@/pages/sports-event/components/BetSlipList";
import BetSlip, { type Pick } from "@/pages/sports-event/components/BetSlip";
import MobileBetSlip from "@/components/feature/MobileBetSlip";
import { matches } from "@/mocks/casino";
import {
  eventMarkets,
  genericMarkets,
  matchStats,
  genericStats,
  matchScores,
  trendingMarkets,
} from "@/mocks/sportsMarkets";
import { sportVenues } from "@/mocks/sportMedia";

export default function SportsEvent() {
  const { eventId } = useParams();
  const [picks, setPicks] = useState<Pick[]>([]);
  const [slipOpen, setSlipOpen] = useState(false);

  const match = useMemo(() => matches.find((item) => item.id === eventId), [eventId]);
  const markets = (eventId && eventMarkets[eventId]) || genericMarkets;
  const stats = (eventId && matchStats[eventId]) || genericStats;
  const score = eventId ? matchScores[eventId] : undefined;

  const others = useMemo(() => matches.filter((item) => item.id !== eventId), [eventId]);

  const togglePick = (pick: Pick) => {
    setPicks((prev) =>
      prev.some((item) => item.key === pick.key)
        ? prev.filter((item) => item.key !== pick.key)
        : [...prev, pick]
    );
  };

  if (!match) {
    return (
      <SiteLayout>
        <div className="rounded-2xl border border-foreground-50/10 bg-background-900/50 px-6 py-20 text-center">
          <i className="ri-football-line text-3xl text-foreground-600"></i>
          <h1 className="mt-3 font-heading text-lg font-bold text-foreground-50">
            This event has finished
          </h1>
          <p className="mt-1 text-xs text-foreground-500">
            The market is closed — but there are plenty more live right now.
          </p>
          <Link
            to="/sports"
            className="mt-4 inline-block whitespace-nowrap rounded-xl bg-gradient-brand px-5 py-2.5 text-xs font-bold text-white cursor-pointer"
          >
            Back to sports
          </Link>
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <div className="space-y-4">
        <nav className="flex items-center gap-1.5 text-[11px] text-foreground-500">
          <Link to="/" className="transition-colors hover:text-foreground-100">
            Home
          </Link>
          <i className="ri-arrow-right-s-line"></i>
          <Link to="/sports" className="transition-colors hover:text-foreground-100">
            Sports
          </Link>
          <i className="ri-arrow-right-s-line"></i>
          <span className="truncate text-foreground-300">{match.league}</span>
        </nav>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="min-w-0 space-y-3">
            <section className="relative overflow-hidden rounded-2xl border border-foreground-50/10 bg-background-950 p-4 sm:p-5">
              {sportVenues[match.sportId] && (
                <>
                  <img
                    src={sportVenues[match.sportId]}
                    alt={`${match.sport} venue on match day`}
                    title={`${match.league} match venue`}
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background-950/70 via-background-950/85 to-background-950"></span>
                </>
              )}
              <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-secondary-500/15 blur-3xl"></div>

              <div className="relative flex flex-wrap items-center gap-2">
                <span className="rounded-md bg-foreground-50/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-foreground-300">
                  {match.league}
                </span>
                {match.live ? (
                  <span className="flex items-center gap-1.5 rounded-md bg-secondary-500/15 px-2 py-0.5 text-[10px] font-bold text-secondary-300">
                    <span className="live-dot h-1.5 w-1.5 rounded-full bg-secondary-400"></span>
                    Live · {match.time}
                  </span>
                ) : (
                  <span className="rounded-md bg-foreground-50/10 px-2 py-0.5 text-[10px] font-bold text-foreground-300">
                    {match.time}
                  </span>
                )}
                <span className="ml-auto text-[10px] uppercase tracking-wider text-foreground-600">
                  {markets.length} markets
                </span>
              </div>

              <div className="relative mt-5 grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-start gap-2">
                <div className="flex flex-col items-center gap-1.5">
                  <TeamCrest team={match.home} size="lg" />
                  <p className="w-full truncate text-center text-sm font-bold text-foreground-50 md:text-base">
                    {match.home}
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-foreground-600">Home</p>
                </div>
                <div className="px-1 pt-2 text-center">
                  {score ? (
                    <p className="font-heading text-2xl font-extrabold text-foreground-50 tabular-nums md:text-3xl">
                      {score.home}
                      <span className="mx-1.5 text-foreground-600">–</span>
                      {score.away}
                    </p>
                  ) : (
                    <p className="font-heading text-lg font-extrabold text-foreground-500">vs</p>
                  )}
                  <p className="mt-1 whitespace-nowrap rounded-md bg-foreground-50/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-foreground-300">
                    {score ? score.clock : "Pre-match"}
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <TeamCrest team={match.away} size="lg" />
                  <p className="w-full truncate text-center text-sm font-bold text-foreground-50 md:text-base">
                    {match.away}
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-foreground-600">Away</p>
                </div>
              </div>

              <div className="relative mt-5 space-y-2 border-t border-foreground-50/10 pt-4">
                {stats.map((stat) => {
                  const total = stat.home + stat.away || 1;
                  const width = (stat.home / total) * 100;
                  return (
                    <div key={stat.label}>
                      <div className="flex justify-between text-[10px] text-foreground-500">
                        <span className="font-semibold text-foreground-300 tabular-nums">
                          {stat.home}
                          {stat.unit ?? ""}
                        </span>
                        <span className="uppercase tracking-wider">{stat.label}</span>
                        <span className="font-semibold text-foreground-300 tabular-nums">
                          {stat.away}
                          {stat.unit ?? ""}
                        </span>
                      </div>
                      <div className="mt-1 flex h-1.5 overflow-hidden rounded-full bg-foreground-50/10">
                        <div className="h-full bg-primary-500" style={{ width: `${width}%` }}></div>
                        <div className="h-full flex-1 bg-secondary-500/60"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <MarketList markets={markets} picks={picks} onToggle={togglePick} />

            <section className="rounded-2xl border border-foreground-50/10 bg-background-900/50 p-4">
              <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground-200">
                Trending in this market
              </h2>
              <div className="mt-3 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                {trendingMarkets.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-2 rounded-lg bg-background-950/60 px-3 py-2"
                  >
                    <span className="truncate text-[11px] text-foreground-300">{item.label}</span>
                    <span className="shrink-0 text-[11px] font-bold text-foreground-50 tabular-nums">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-3 lg:sticky lg:top-24 lg:self-start">
            <div className="hidden lg:block">
              <BetSlip
                picks={picks}
                onRemove={(key) => setPicks((prev) => prev.filter((item) => item.key !== key))}
                onClear={() => setPicks([])}
              />
            </div>

            <div className="rounded-2xl border border-foreground-50/10 bg-background-900/60 p-4">
              <h3 className="font-heading text-sm font-bold text-foreground-50">Other events</h3>
              <div className="mt-2.5 space-y-1.5">
                {others.slice(0, 5).map((item) => (
                  <Link
                    key={item.id}
                    to={`/sports/${item.id}`}
                    className="flex items-center justify-between gap-2 rounded-lg px-2 py-2 transition-colors hover:bg-foreground-50/5 cursor-pointer"
                  >
                    <span className="flex min-w-0 items-center gap-2">
                      <TeamCrest team={item.home} size="sm" />
                      <TeamCrest team={item.away} size="sm" />
                      <span className="min-w-0">
                        <span className="block truncate text-[11px] font-semibold text-foreground-200">
                          {item.home} v {item.away}
                        </span>
                        <span className="block truncate text-[10px] text-foreground-600">
                          {item.league}
                        </span>
                      </span>
                    </span>
                    <span className="shrink-0 text-[11px] font-bold text-primary-400 tabular-nums">
                      {item.odds[0]?.value}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <MobileBetSlip
        count={picks.length}
        totalOdds={picks.reduce((acc, pick) => acc * pick.odds, 1)}
        open={slipOpen}
        onOpenChange={setSlipOpen}
        desktop="lg"
      >
        <BetSlip
          picks={picks}
          onRemove={(key) => setPicks((prev) => prev.filter((item) => item.key !== key))}
          onClear={() => setPicks([])}
        />
      </MobileBetSlip>
    </SiteLayout>
  );
}