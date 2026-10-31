import { sportCategories } from "@/mocks/casino";

interface SportFiltersProps {
  active: string;
  onChange: (id: string) => void;
}

export default function SportFilters({ active, onChange }: SportFiltersProps) {
  return (
    <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
      {sportCategories.map((sport) => {
        const isActive = active === sport.id;
        return (
          <button
            key={sport.id}
            type="button"
            onClick={() => onChange(sport.id)}
            className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-colors cursor-pointer ${
              isActive
                ? "bg-gradient-brand text-white shadow-lg shadow-primary-500/25"
                : "bg-background-900/70 text-foreground-400 ring-1 ring-inset ring-foreground-50/10 hover:text-foreground-50"
            }`}
          >
            <span className="flex h-4 w-4 items-center justify-center">
              <i className={`${sport.icon} text-base`}></i>
            </span>
            {sport.name}
            <span
              className={`rounded-md px-1.5 py-0.5 text-[10px] tabular-nums ${
                isActive ? "bg-white/20 text-white" : "bg-foreground-50/5 text-foreground-500"
              }`}
            >
              {sport.events}
            </span>
          </button>
        );
      })}
    </div>
  );
}