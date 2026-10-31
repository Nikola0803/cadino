import { useEffect, useMemo, useState } from "react";
import { allGames } from "@/mocks/games";
import { sportCategories } from "@/mocks/casino";

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) {
      setQuery("");
      return;
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allGames.slice(0, 6);
    return allGames.filter((game) => game.name.toLowerCase().includes(q)).slice(0, 12);
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center px-3 pt-16 sm:px-4 sm:pt-24">
      <button
        type="button"
        aria-label="Close search"
        onClick={onClose}
        className="absolute inset-0 bg-background-950/80 backdrop-blur-sm cursor-default"
      ></button>
      <div className="float-in relative w-full max-w-2xl overflow-hidden rounded-2xl border border-foreground-50/10 bg-background-900 shadow-2xl">
        <div className="flex items-center gap-3 border-b border-foreground-50/10 px-4 py-3">
          <i className="ri-search-line text-lg text-foreground-400"></i>
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search games, providers, sports"
            className="w-full bg-transparent text-base text-foreground-50 outline-none placeholder:text-foreground-500 md:text-sm"
          />
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-foreground-50/10 px-2 py-1 text-xs text-foreground-300 cursor-pointer"
          >
            ESC
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto p-4 no-scrollbar sm:max-h-[60vh]">
          {results.length > 0 ? (
            <>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-foreground-500">
                {query ? `${results.length} games found` : "Popular right now"}
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {results.map((game) => (
                  <button
                    key={game.id}
                    type="button"
                    onClick={onClose}
                    className="group flex items-center gap-2 rounded-xl bg-background-950/60 p-2 text-left transition-colors hover:bg-background-800 cursor-pointer"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-background-800">
                      <img
                        src={game.image}
                        alt={game.name}
                        className="h-full w-full object-cover"
                      />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-xs font-medium text-foreground-100">
                        {game.name}
                      </span>
                      <span className="block text-[10px] text-foreground-500">
                        {game.players} playing
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <p className="py-8 text-center text-sm text-foreground-400">
              No games match “{query}”. Try a different name.
            </p>
          )}

          <p className="mb-3 mt-5 text-xs font-semibold uppercase tracking-wider text-foreground-500">
            Sports
          </p>
          <div className="flex flex-wrap gap-2">
            {sportCategories.slice(0, 7).map((sport) => (
              <span
                key={sport.id}
                className="flex items-center gap-1.5 rounded-full bg-background-950/60 px-3 py-1.5 text-xs text-foreground-300"
              >
                <i className={sport.icon}></i>
                {sport.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}