import { providers } from "@/mocks/casino";

export default function Providers() {
  return (
    <section className="space-y-4">
      <div className="flex items-baseline justify-between">
        <h2 className="font-heading text-xl font-extrabold tracking-tight text-foreground-50 md:text-2xl">
          Providers
        </h2>
        <span className="text-xs font-semibold text-foreground-400">120+ studios</span>
      </div>

      <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
        {providers.map((provider) => (
          <div
            key={provider.name}
            className="group flex h-16 min-w-[132px] shrink-0 items-center justify-center rounded-xl border border-foreground-50/10 bg-background-900/60 px-4 transition-colors hover:border-primary-500/40 hover:bg-background-800"
          >
            <span className="text-center font-heading text-sm font-bold tracking-tight text-foreground-400 transition-colors group-hover:text-foreground-50">
              {provider.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}