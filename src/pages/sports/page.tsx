import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SiteLayout from "@/components/feature/SiteLayout";
import { matches, type MatchItem } from "@/mocks/casino";
import SportFilters from "@/pages/sports/components/SportFilters";
import TopPicks from "@/pages/sports/components/TopPicks";
import LiveNowStrip from "@/pages/sports/components/LiveNowStrip";
import LeagueSection from "@/pages/sports/components/LeagueSection";
import BetSlipPanel, { type SlipPick } from "@/pages/sports/components/BetSlipPanel";
import MobileBetSlip from "@/components/feature/MobileBetSlip";
import type { OddSelection } from "@/pages/sports/components/EventRow";
import { sportsHeroImage } from "@/mocks/sportMedia";

const selectionName = (match: MatchItem, label: string) => {
  if (label === "1") return `${match.home} to win`;
  if (label === "2") return `${match.away} to win`;
  if (label === "X") return "Draw";
  return label;
};

export default function Sports() {
  const [activeSport, setActiveSport] = useState("all");
  const [liveOnly, setLiveOnly] = useState(false);
  const [query, setQuery] = useState("");
  const [picks, setPicks] = useState<SlipPick[]>([]);
  const [stake, setStake] = useState("10");
  const [slipOpen, setSlipOpen] = useState(false);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return matches.filter((match) => {
      if (activeSport !== "all" && match.sportId !== activeSport) return false;
      if (liveOnly && !match.live) return false;
      if (!term) return true;
      return `${match.home} ${match.away} ${match.league}`.toLowerCase().includes(term);
    });
  }, [activeSport, liveOnly, query]);

  const leagues = useMemo(() => {
    const groups: { league: string; sportId: string; matches: MatchItem[] }[] = [];
    filtered.forEach((match) => {
      const existing = groups.find((group) => group.league === match.league);
      if (existing) {
        existing.matches.push(match);
      } else {
        groups.push({ league: match.league, sportId: match.sportId, matches: [match] });
      }
    });
    return groups;
  }, [filtered]);

  const liveMatches = useMemo(
    () => matches.filter((match) => match.live && (activeSport === "all" || match.sportId === activeSport)),
    [activeSport]
  );

  const boosted = useMemo(
    () => matches.filter((match) => match.boosted && (activeSport === "all" || match.sportId === activeSport)),
    [activeSport]
  );

  const selectedKeys = picks.map((pick) => pick.key);
  const slipOdds = picks.reduce((acc, pick) => acc * pick.odds, 1);

  const togglePick = (selection: OddSelection) => {
    const key = `${selection.match.id}-${selection.label}`;
    setPicks((prev) =>
      prev.some((pick) => pick.key === key)
        ? prev.filter((pick) => pick.key !== key)
        : [
            ...prev,
            {
              key,
              eventId: selection.match.id,
              event: `${selection.match.home} vs ${selection.match.away}`,
              selection: selectionName(selection.match, selection.label),
              odds: Number.parseFloat(selection.value),
            },
          ]
    );
  };

  return (
    <SiteLayout>
      <div className="space-y-4">
        <section className="relative overflow-hidden rounded-2xl border border-foreground-50/10 bg-background-950">
          <img
            src={sportsHeroImage}
            alt="Floodlit stadium packed with fans on a big match night"
            title="Live football and sports betting markets"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-45"
          />
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background-950 via-background-950/90 to-background-950/30"></span>
          <span className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background-950 to-transparent"></span>
          <div className="absolute -left-20 -top-28 h-64 w-64 rounded-full bg-secondary-500/15 blur-3xl"></div>
          <div className="absolute -bottom-28 right-0 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl"></div>

          <div className="relative flex flex-col gap-5 p-4 sm:p-5 md:p-7 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-2.5 inline-flex items-center gap-2 rounded-full bg-foreground-50/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-foreground-200">
                <span className="live-dot h-1.5 w-1.5 rounded-full bg-secondary-400"></span>
                3,204 markets live right now
              </p>
              <h1 className="font-heading text-2xl font-extrabold tracking-tight text-foreground-50 md:text-4xl">
                Best odds, <span className="text-gradient">guaranteed</span>
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-foreground-400">
                Football, basketball, tennis, MMA and esports. Pre-match and in-play markets, boosted
                prices daily, and settlements in seconds.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2.5 lg:w-[340px]">
              <div className="rounded-xl border border-foreground-50/10 bg-background-950/60 px-3 py-3">
                <p className="text-[10px] uppercase tracking-wider text-foreground-500">In-play</p>
                <p className="mt-1 font-heading text-lg font-extrabold text-secondary-300 tabular-nums">
                  {liveMatches.length}
                </p>
              </div>
              <div className="rounded-xl border border-foreground-50/10 bg-background-950/60 px-3 py-3">
                <p className="text-[10px] uppercase tracking-wider text-foreground-500">Today</p>
                <p className="mt-1 font-heading text-lg font-extrabold text-foreground-50 tabular-nums">
                  26
                </p>
              </div>
              <div className="rounded-xl border border-foreground-50/10 bg-background-950/60 px-3 py-3">
                <p className="text-[10px] uppercase tracking-wider text-foreground-500">Boosts</p>
                <p className="mt-1 font-heading text-lg font-extrabold text-accent-300 tabular-nums">
                  {boosted.length}
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_330px]">
          <div className="min-w-0 space-y-5">
            <SportFilters active={activeSport} onChange={setActiveSport} />

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <div className="flex flex-1 items-center gap-2 rounded-xl bg-background-900/70 px-3 py-2.5 ring-1 ring-inset ring-foreground-50/10 focus-within:ring-primary-500/60">
                <span className="flex h-4 w-4 items-center justify-center text-foreground-500">
                  <i className="ri-search-line text-sm"></i>
                </span>
                <input
                  type="search"
                  name="sports-search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search team, league or competition"
                  className="w-full bg-transparent text-base text-foreground-100 outline-none placeholder:text-foreground-600 md:text-sm"
                />
              </div>
              <button
                type="button"
                onClick={() => setLiveOnly((prev) => !prev)}
                className={`flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-xl px-3.5 py-2.5 text-xs font-bold transition-colors cursor-pointer ${
                  liveOnly
                    ? "bg-secondary-500/20 text-secondary-300 ring-1 ring-inset ring-secondary-500/40"
                    : "bg-background-900/70 text-foreground-400 ring-1 ring-inset ring-foreground-50/10 hover:text-foreground-100"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    liveOnly ? "bg-secondary-400" : "bg-foreground-600"
                  }`}
                ></span>
                Live only
              </button>
            </div>

            {activeSport === "all" && !liveOnly && !query && (
              <TopPicks matches={boosted} selectedKeys={selectedKeys} onPick={togglePick} />
            )}

            {!query && <LiveNowStrip matches={liveMatches} selectedKeys={selectedKeys} onPick={togglePick} />}

            <section className="space-y-2.5">
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground-100">
                  {liveOnly ? "Live events" : "All events"}
                </h2>
                <span className="text-[11px] text-foreground-600">
                  {filtered.length} {filtered.length === 1 ? "event" : "events"} ·{" "}
                  {leagues.length} {leagues.length === 1 ? "league" : "leagues"}
                </span>
              </div>

              {leagues.length === 0 ? (
                <div className="rounded-xl border border-foreground-50/10 bg-background-900/40 px-6 py-16 text-center">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-foreground-50/5 text-foreground-600">
                    <i className="ri-search-2-line text-xl"></i>
                  </span>
                  <p className="mt-3 text-sm font-semibold text-foreground-200">
                    No events match that search
                  </p>
                  <p className="mt-1 text-[11px] text-foreground-500">
                    Try another team name, or clear the filters to see everything.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setQuery("");
                      setLiveOnly(false);
                      setActiveSport("all");
                    }}
                    className="mt-4 whitespace-nowrap rounded-xl bg-gradient-brand px-4 py-2 text-xs font-bold text-white cursor-pointer"
                  >
                    Reset filters
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  {leagues.map((group) => (
                    <LeagueSection
                      key={group.league}
                      league={group.league}
                      sportId={group.sportId}
                      matches={group.matches}
                      selectedKeys={selectedKeys}
                      onPick={togglePick}
                    />
                  ))}
                </div>
              )}
            </section>
          </div>

          <aside className="space-y-3 xl:sticky xl:top-24 xl:self-start">
            <div className="hidden xl:block">
              <BetSlipPanel
                picks={picks}
                stake={stake}
                onStakeChange={setStake}
                onRemove={(key) => setPicks((prev) => prev.filter((pick) => pick.key !== key))}
                onClear={() => setPicks([])}
              />
            </div>
            <div className="rounded-2xl border border-foreground-50/10 bg-background-900/60 p-4">
              <h3 className="font-heading text-sm font-bold text-foreground-50">Betting with Rolabets</h3>
              <ul className="mt-2.5 space-y-2">
                {[
                  { icon: "ri-flashlight-line", text: "Instant settlements, straight to your wallet" },
                  { icon: "ri-shield-check-line", text: "Licensed bookmaker, audited odds" },
                  { icon: "ri-cash-line", text: "Free withdrawals over $20, every day" },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-2">
                    <span className="mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded bg-primary-500/15 text-primary-400">
                      <i className={`${item.icon} text-[11px]`}></i>
                    </span>
                    <span className="text-[11px] leading-relaxed text-foreground-400">{item.text}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/support"
                className="mt-3 flex items-center justify-center gap-1.5 whitespace-nowrap rounded-lg bg-foreground-50/5 py-2 text-[11px] font-semibold text-foreground-300 transition-colors hover:bg-foreground-50/10 hover:text-foreground-50 cursor-pointer"
              >
                <i className="ri-customer-service-2-line"></i>
                Need a hand? Live support
              </Link>
            </div>
          </aside>
        </div>
      </div>

      <MobileBetSlip
        count={picks.length}
        totalOdds={slipOdds}
        open={slipOpen}
        onOpenChange={setSlipOpen}
      >
        <BetSlipPanel
          picks={picks}
          stake={stake}
          onStakeChange={setStake}
          onRemove={(key) => setPicks((prev) => prev.filter((pick) => pick.key !== key))}
          onClear={() => setPicks([])}
        />
      </MobileBetSlip>
    </SiteLayout>
  );
}