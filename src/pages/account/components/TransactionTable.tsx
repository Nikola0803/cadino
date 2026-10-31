import { transactions as allTransactions } from "@/mocks/account";

interface TransactionTableProps {
  limit?: number;
}

const typeIcon: Record<string, string> = {
  deposit: "ri-arrow-down-line",
  withdrawal: "ri-arrow-up-line",
  bonus: "ri-gift-2-line",
  rakeback: "ri-refund-2-line",
};

const statusStyle: Record<string, string> = {
  Completed: "bg-secondary-500/15 text-secondary-300",
  Pending: "bg-primary-500/15 text-primary-300",
  Failed: "bg-foreground-50/10 text-foreground-500",
};

export default function TransactionTable({ limit }: TransactionTableProps) {
  const rows = limit ? allTransactions.slice(0, limit) : allTransactions;

  return (
    <div className="overflow-hidden rounded-2xl border border-foreground-50/10 bg-background-900/50">
      <div className="grid grid-cols-[minmax(0,1fr)_84px_92px] items-center gap-2 border-b border-foreground-50/10 px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-foreground-600 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_90px_110px_100px] md:px-5">
        <span>Transaction</span>
        <span className="hidden md:block">Method</span>
        <span className="hidden md:block">Date</span>
        <span className="text-right">Amount</span>
        <span className="text-right">Status</span>
      </div>

      <div className="divide-y divide-foreground-50/5">
        {rows.map((row) => (
          <div
            key={row.id}
            className="grid grid-cols-[minmax(0,1fr)_84px_92px] items-center gap-2 px-4 py-3 transition-colors hover:bg-foreground-50/5 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_90px_110px_100px] md:px-5"
          >
            <div className="flex min-w-0 items-center gap-2.5">
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                  row.positive ? "bg-secondary-500/15 text-secondary-300" : "bg-primary-500/15 text-primary-300"
                }`}
              >
                <i className={`${typeIcon[row.type]} text-sm`}></i>
              </span>
              <div className="min-w-0">
                <p className="truncate text-[13px] font-semibold capitalize text-foreground-100">
                  {row.type}
                </p>
                <p className="truncate text-[11px] text-foreground-500 md:hidden">{row.method}</p>
              </div>
            </div>
            <span className="hidden truncate text-xs text-foreground-300 md:block">{row.method}</span>
            <span className="hidden whitespace-nowrap text-[11px] text-foreground-500 md:block">
              {row.date}
            </span>
            <span
              className={`text-right text-[13px] font-bold tabular-nums ${
                row.positive ? "text-secondary-300" : "text-foreground-100"
              }`}
            >
              {row.amount}
            </span>
            <div className="flex justify-end">
              <span
                className={`whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-bold ${statusStyle[row.status]}`}
              >
                {row.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}