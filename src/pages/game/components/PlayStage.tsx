import { useEffect, useRef, useState } from "react";
import GameImage from "@/components/base/GameImage";
import type { GameItem } from "@/mocks/games";
import { fetchHub88GameUrl } from "@/lib/hub88";

interface PlayStageProps {
  game: GameItem;
  result: { multiplier: number; payout: number } | null;
  playing: boolean;
}

type Hub88State =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "ready"; url: string }
  | { status: "error"; message: string };

export default function PlayStage({ game, result, playing }: PlayStageProps) {
  const isHub88 = Boolean(game.hub88ApiId);
  const [hub88, setHub88] = useState<Hub88State>({ status: "idle" });
  const launched = useRef(false);

  useEffect(() => {
    if (!isHub88 || launched.current) return;
    launched.current = true;
    setHub88({ status: "loading" });

    fetchHub88GameUrl({
      apiId: game.hub88ApiId!,
      currency: "USD",
      language: "en",
      demo: true,
    })
      .then((res) => setHub88({ status: "ready", url: res.url }))
      .catch((err: Error) =>
        setHub88({ status: "error", message: err.message })
      );
  }, [isHub88, game.hub88ApiId]);

  if (isHub88) {
    return <Hub88Stage game={game} state={hub88} />;
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-foreground-50/10 bg-background-950">
      <div className="absolute inset-0">
        <img
          src={game.image}
          alt=""
          aria-hidden="true"
          className="h-full w-full scale-110 object-cover opacity-25 blur-2xl"
        />
      </div>

      <div className="relative flex min-h-[320px] items-center justify-center p-4 md:min-h-[420px]">
        <GameImage
          src={game.image}
          alt={game.name}
          className="aspect-[4/5] w-[190px] rounded-xl shadow-2xl md:w-[240px]"
        />

        {playing ? (
          <div className="absolute inset-0 flex items-center justify-center bg-background-950/70 backdrop-blur-[2px]">
            <div className="flex flex-col items-center gap-3">
              <span className="h-10 w-10 animate-spin rounded-full border-2 border-primary-500/30 border-t-primary-400"></span>
              <p className="font-heading text-sm font-bold uppercase tracking-widest text-foreground-200">
                Round in progress
              </p>
            </div>
          </div>
        ) : null}

        {!playing && result ? (
          <div className="pointer-events-none absolute inset-x-4 bottom-4 mx-auto max-w-xs rounded-xl border border-foreground-50/10 bg-background-900/95 px-4 py-3 text-center shadow-2xl float-in">
            <p className="text-[10px] uppercase tracking-wider text-foreground-500">Last round</p>
            <p
              className={`font-heading text-2xl font-extrabold tabular-nums ${
                result.multiplier > 1 ? "text-secondary-300" : "text-primary-400"
              }`}
            >
              {result.multiplier.toFixed(2)}x
            </p>
            <p className="text-[11px] text-foreground-400 tabular-nums">
              {result.multiplier > 0 ? `Paid ${result.payout.toFixed(2)} USDT` : "No win this time"}
            </p>
          </div>
        ) : null}
      </div>

      <div className="relative flex flex-wrap items-center justify-between gap-2 border-t border-foreground-50/10 px-4 py-2.5">
        <span className="flex items-center gap-1.5 text-[11px] text-foreground-500">
          <i className="ri-shield-check-line text-secondary-400"></i>
          Provably fair · RTP 99.00%
        </span>
        <span className="flex items-center gap-1.5 text-[11px] text-foreground-500">
          <i className="ri-user-3-line"></i>
          {game.players} playing now
        </span>
      </div>
    </div>
  );
}

interface Hub88StageProps {
  game: GameItem;
  state: Hub88State;
}

function Hub88Stage({ game, state }: Hub88StageProps) {
  if (state.status === "ready") {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-foreground-50/10 bg-background-950">
        <iframe
          src={state.url}
          title={game.name}
          allow="fullscreen"
          className="h-[520px] w-full border-0 md:h-[640px]"
        />
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-foreground-50/10 px-4 py-2.5">
          <span className="flex items-center gap-1.5 text-[11px] text-foreground-500">
            <i className="ri-plug-line text-primary-400"></i>
            Powered by Hub88 · {game.hub88ApiId}
          </span>
          <span className="flex items-center gap-1.5 text-[11px] text-foreground-500">
            <i className="ri-user-3-line"></i>
            {game.players} playing now
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-foreground-50/10 bg-background-950">
      <div className="absolute inset-0">
        <img
          src={game.image}
          alt=""
          aria-hidden="true"
          className="h-full w-full scale-110 object-cover opacity-20 blur-2xl"
        />
      </div>

      <div className="relative flex min-h-[320px] flex-col items-center justify-center gap-5 p-6 text-center md:min-h-[420px]">
        {state.status === "loading" ? (
          <>
            <span className="h-10 w-10 animate-spin rounded-full border-2 border-primary-500/30 border-t-primary-400"></span>
            <p className="font-heading text-sm font-bold uppercase tracking-widest text-foreground-200">
              Connecting to Hub88
            </p>
          </>
        ) : (
          <>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground-50/10">
              <i className="ri-plug-2-line text-2xl text-foreground-400"></i>
            </div>

            <div className="max-w-sm space-y-2">
              <h3 className="font-heading text-base font-bold text-foreground-100">
                Hub88 Integration Pending
              </h3>
              <p className="text-xs leading-relaxed text-foreground-500">
                This game is registered with Hub88 but the API credentials have not been
                configured yet. Once operator credentials are set up on the backend, the
                game will launch here automatically.
              </p>
            </div>

            <div className="rounded-xl border border-foreground-50/10 bg-background-900/80 px-4 py-3 text-left">
              <p className="mb-1 text-[10px] uppercase tracking-wider text-foreground-600">
                Hub88 API ID
              </p>
              <code className="font-mono text-xs text-primary-300">{game.hub88ApiId}</code>
            </div>

            {state.status === "error" && (
              <p className="max-w-sm rounded-lg border border-secondary-500/20 bg-secondary-500/10 px-3 py-2 text-[11px] text-secondary-300">
                {state.message}
              </p>
            )}
          </>
        )}
      </div>

      <div className="relative flex flex-wrap items-center justify-between gap-2 border-t border-foreground-50/10 px-4 py-2.5">
        <span className="flex items-center gap-1.5 text-[11px] text-foreground-500">
          <i className="ri-plug-line text-foreground-600"></i>
          Hub88 · {game.hub88ApiId}
        </span>
        <span className="flex items-center gap-1.5 text-[11px] text-foreground-500">
          <i className="ri-user-3-line"></i>
          {game.players} playing now
        </span>
      </div>
    </div>
  );
}
