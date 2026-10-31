import { useEffect, type ReactNode } from "react";

interface MobileBetSlipProps {
  count: number;
  totalOdds: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
  /** Tailwind breakpoint where the desktop docked slip takes over. */
  desktop?: "lg" | "xl";
}

export default function MobileBetSlip({
  count,
  totalOdds,
  open,
  onOpenChange,
  children,
  desktop = "xl",
}: MobileBetSlipProps) {
  const hideAt = desktop === "lg" ? "lg:hidden" : "xl:hidden";

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onOpenChange]);

  if (count === 0 && !open) return null;

  return (
    <>
      {!open ? (
        <div
          className={`fixed inset-x-0 z-40 px-3 ${hideAt}`}
          style={{ bottom: "calc(58px + env(safe-area-inset-bottom, 0px))" }}
        >
          <button
            type="button"
            onClick={() => onOpenChange(true)}
            className="float-in flex w-full items-center gap-3 rounded-2xl border border-primary-500/40 bg-background-900/95 px-4 py-3 shadow-2xl shadow-background-950/60 backdrop-blur-xl transition-transform active:scale-[0.99] cursor-pointer"
          >
            <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white">
              <i className="ri-shopping-basket-2-line text-base"></i>
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-background-950 px-1 text-[10px] font-bold text-primary-300 tabular-nums">
                {count}
              </span>
            </span>
            <span className="min-w-0 flex-1 text-left">
              <span className="block text-[13px] font-bold leading-tight text-foreground-50">
                {count} {count === 1 ? "selection" : "selections"}
              </span>
              <span className="block text-[11px] leading-tight text-foreground-500">
                Total odds {totalOdds.toFixed(2)}
              </span>
            </span>
            <span className="shrink-0 whitespace-nowrap rounded-xl bg-foreground-50/10 px-3 py-2 text-[11px] font-bold text-foreground-50">
              Open
              <i className="ri-arrow-up-s-line ml-0.5 align-middle"></i>
            </span>
          </button>
        </div>
      ) : null}

      {open ? (
        <div className={`fixed inset-0 z-[75] ${hideAt}`}>
          <button
            type="button"
            aria-label="Close bet slip"
            onClick={() => onOpenChange(false)}
            className="absolute inset-0 bg-background-950/80 backdrop-blur-sm cursor-default"
          ></button>

          <div
            className="float-in absolute inset-x-0 bottom-0 max-h-[88vh] overflow-y-auto rounded-t-3xl border-t border-foreground-50/15 bg-background-900 px-3 pt-3"
            style={{ paddingBottom: "calc(14px + env(safe-area-inset-bottom, 0px))" }}
          >
            <div className="mb-2 flex items-center justify-between gap-3">
              <span className="mx-auto h-1 w-10 rounded-full bg-foreground-50/20"></span>
            </div>
            <div className="mb-2 flex items-center justify-between gap-3">
              <h2 className="font-heading text-base font-extrabold text-foreground-50">Bet slip</h2>
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                aria-label="Close bet slip"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground-50/10 text-foreground-100 cursor-pointer"
              >
                <i className="ri-close-line text-lg"></i>
              </button>
            </div>
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
}