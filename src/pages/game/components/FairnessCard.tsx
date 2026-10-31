import { useState } from "react";

const makeHash = () =>
  Array.from({ length: 32 }, () => "0123456789abcdef"[Math.floor(Math.random() * 16)]).join("");

export default function FairnessCard() {
  const [hash, setHash] = useState("9f2c41d7b8a05e63c1d4f7a90b2e5c8d");
  const [clientSeed, setClientSeed] = useState("salah-abbasi-2026");
  const [nonce, setNonce] = useState(1482);
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="rounded-2xl border border-foreground-50/10 bg-background-900/60 p-4">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-1.5 font-heading text-sm font-bold text-foreground-50">
          <i className="ri-shield-check-line text-secondary-400"></i>
          Provably fair
        </h3>
        <span className="rounded-full bg-secondary-500/15 px-2 py-0.5 text-[10px] font-bold text-secondary-300">
          Verified
        </span>
      </div>

      <div className="mt-3 space-y-2">
        <div className="rounded-lg bg-background-950/60 px-3 py-2">
          <p className="text-[10px] uppercase tracking-wider text-foreground-600">Server seed hash</p>
          <p className="mt-0.5 truncate font-mono text-[11px] text-foreground-300">{hash}</p>
        </div>

        <label className="block rounded-lg bg-background-950/60 px-3 py-2">
          <span className="text-[10px] uppercase tracking-wider text-foreground-600">
            Client seed
          </span>
          <input
            type="text"
            value={clientSeed}
            onChange={(event) => setClientSeed(event.target.value)}
            className="mt-0.5 w-full bg-transparent font-mono text-[11px] text-foreground-100 outline-none"
          />
        </label>

        <div className="flex items-center justify-between rounded-lg bg-background-950/60 px-3 py-2">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-foreground-600">Nonce</p>
            <p className="mt-0.5 font-mono text-[11px] text-foreground-300">{nonce}</p>
          </div>
          <button
            type="button"
            onClick={() => {
              setNonce((prev) => prev + 1);
              setRevealed(false);
            }}
            className="whitespace-nowrap rounded-lg bg-foreground-50/10 px-2.5 py-1 text-[10px] font-bold text-foreground-200 transition-colors hover:bg-foreground-50/20 cursor-pointer"
          >
            Change seed
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={() => {
          if (revealed) {
            setHash(makeHash());
            setNonce(0);
            setRevealed(false);
          } else {
            setRevealed(true);
          }
        }}
        className="mt-3 w-full whitespace-nowrap rounded-lg border border-foreground-50/15 py-2 text-[11px] font-bold text-foreground-200 transition-colors hover:bg-foreground-50/5 cursor-pointer"
      >
        {revealed ? "Rotate seed pair" : "Reveal & verify last round"}
      </button>

      {revealed ? (
        <p className="mt-2 text-[10px] leading-relaxed text-foreground-500">
          Last round hash verified against your client seed and nonce. Paste both into any
          HMAC-SHA256 tool to reproduce the outcome yourself.
        </p>
      ) : null}
    </div>
  );
}