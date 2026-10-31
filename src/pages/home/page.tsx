import SiteLayout from "@/components/feature/SiteLayout";
import HeroBanners from "@/pages/home/components/HeroBanners";
import RecentWins from "@/pages/home/components/RecentWins";
import SportsStrip from "@/pages/home/components/SportsStrip";
import GameRail from "@/pages/home/components/GameRail";
import LiveBetsFeed from "@/pages/home/components/LiveBetsFeed";
import Providers from "@/pages/home/components/Providers";
import {
  originalGames,
  mostPlayed,
  gambanaPicks,
  liveCasino,
  newReleases,
  slots,
  trending,
  gameShows,
} from "@/mocks/games";

export default function Home() {
  return (
    <SiteLayout>
      <h1 className="sr-only">Online Casino &amp; Sports Betting</h1>

      <div className="space-y-7 md:space-y-9">
        <HeroBanners />
        <RecentWins />
        <SportsStrip />

        <GameRail title="Original" highlight="Games" games={originalGames} />
        <GameRail title="Most Played" games={mostPlayed} />
        <GameRail title="Rolabets" highlight="Picks" games={gambanaPicks} />
        <GameRail title="Live Casino" games={liveCasino} />
        <GameRail title="New Releases" games={newReleases} />
        <GameRail title="Slots" games={slots} />
        <GameRail title="Trending" games={trending} />
        <GameRail title="Game Shows" games={gameShows} />

        <LiveBetsFeed />
        <Providers />
      </div>
    </SiteLayout>
  );
}