import GameImage from "@/components/base/GameImage";
import { recentWins } from "@/mocks/wins";

export default function RecentWins() {
  const doubled = [...recentWins, ...recentWins];

  return (
    <section className="space-y-3">
      <div className="flex items-baseline justify-between">
        <h2 className="font-heading text-xl font-extrabold tracking-tight text-foreground-50 md:text-2xl">
          Recent Wins
        </h2>
        <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-foreground-500">
          <span className="live-dot h-1.5 w-1.5 rounded-full bg-secondary-400"></span>
          Live
        </span>
      </div>

      <div className="overflow-hidden">
        <div className="wins-track flex w-max gap-2">
          {doubled.map((win, position) => (
            <div key={`${win.id}-${position}`} className="w-[86px] shrink-0">
              <div className="relative">
                <GameImage src={win.image} alt={win.name} className="aspect-square w-full rounded-lg" />
              </div>
              <p className="mt-1 truncate text-[10px] leading-tight text-foreground-400" title={win.name}>
                {win.name}
              </p>
              <p className="text-[11px] font-bold leading-tight text-primary-400">{win.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}