import { useEffect, useState } from "react";
import type { Promotion } from "@/mocks/promotions";

interface PromoModalProps {
  promo: Promotion | null;
  onClose: () => void;
}

export default function PromoModal({ promo, onClose }: PromoModalProps) {
  const [claimed, setClaimed] = useState(false);
  const [toast, setToast] = useState(false);

  useEffect(() => {
    setClaimed(false);
    setToast(false);
  }, [promo]);

  useEffect(() => {
    if (!promo) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [promo]);

  if (!promo) return null;

  const handleClaim = () => {
    setClaimed(true);
    setToast(true);
    window.setTimeout(() => setToast(false), 2600);
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-4">
      <button
        type="button"
        aria-label="Close promotion"
        onClick={onClose}
        className="absolute inset-0 bg-background-950/85 backdrop-blur-sm cursor-default"
      ></button>

      <div className="relative flex max-h-[92vh] w-full max-w-lg flex-col overflow-y-auto rounded-t-2xl border border-foreground-50/10 bg-background-900 no-scrollbar sm:rounded-2xl">
        <div className="relative h-40 w-full shrink-0 overflow-hidden">
          <img src={promo.image} alt={promo.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background-900 via-background-950/40 to-transparent"></div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-background-950/70 text-foreground-100 backdrop-blur-sm cursor-pointer"
          >
            <i className="ri-close-line text-base"></i>
          </button>
        </div>

        <div className="-mt-8 px-5 pb-5">
          <span className="relative inline-flex rounded-full bg-gradient-brand px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            {promo.tag}
          </span>
          <h2 className="mt-3 font-heading text-xl font-extrabold leading-tight text-foreground-50">
            {promo.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-foreground-400">{promo.description}</p>

          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="rounded-xl bg-foreground-50/5 p-3">
              <p className="text-[10px] uppercase tracking-wider text-foreground-500">
                {promo.headlineLabel}
              </p>
              <p className="mt-1 font-heading text-sm font-bold text-foreground-50">
                {promo.headline}
              </p>
            </div>
            <div className="rounded-xl bg-foreground-50/5 p-3">
              <p className="text-[10px] uppercase tracking-wider text-foreground-500">Wagering</p>
              <p className="mt-1 font-heading text-sm font-bold text-foreground-50">
                {promo.wagering}
              </p>
            </div>
            <div className="rounded-xl bg-foreground-50/5 p-3">
              <p className="text-[10px] uppercase tracking-wider text-foreground-500">Valid</p>
              <p className="mt-1 font-heading text-sm font-bold text-foreground-50">
                {promo.expires}
              </p>
            </div>
          </div>

          <h3 className="mt-5 font-heading text-sm font-bold uppercase tracking-wider text-foreground-200">
            Terms
          </h3>
          <ul className="mt-2 space-y-2">
            {promo.requirements.map((item) => (
              <li key={item} className="flex gap-2 text-xs leading-relaxed text-foreground-400">
                <i className="ri-checkbox-circle-line mt-0.5 shrink-0 text-primary-400"></i>
                {item}
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={handleClaim}
            disabled={claimed}
            className={`mt-5 w-full whitespace-nowrap rounded-xl py-3 text-sm font-bold transition-colors cursor-pointer ${
              claimed
                ? "bg-secondary-500/15 text-secondary-300"
                : "bg-gradient-brand text-white shadow-lg shadow-primary-500/25 hover:-translate-y-0.5 transition-transform"
            }`}
          >
            {claimed ? "Bonus activated — check My Account" : "Claim this bonus"}
          </button>
          <p className="mt-2 text-center text-[11px] text-foreground-600">
            18+ only. Full terms apply. Demo environment — no real funds.
          </p>
        </div>

        {toast ? (
          <div className="pointer-events-none absolute inset-x-4 bottom-4 flex items-center gap-2 rounded-xl bg-secondary-500 px-4 py-3 text-sm font-semibold text-background-950 shadow-2xl float-in">
            <i className="ri-checkbox-circle-fill text-lg"></i>
            {promo.title} added to your active bonuses
          </div>
        ) : null}
      </div>
    </div>
  );
}