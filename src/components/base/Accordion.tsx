import { useState } from "react";

export interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
}

export default function Accordion({ items, defaultOpenId }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);

  return (
    <div className="divide-y divide-foreground-50/10 overflow-hidden rounded-xl border border-foreground-50/10 bg-background-900/50">
      {items.map((item) => {
        const open = openId === item.id;
        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => setOpenId(open ? null : item.id)}
              aria-expanded={open}
              className="flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors hover:bg-foreground-50/5 cursor-pointer"
            >
              <span
                className={`flex-1 text-sm font-semibold ${
                  open ? "text-primary-300" : "text-foreground-100"
                }`}
              >
                {item.question}
              </span>
              <i
                className={`ri-add-line shrink-0 text-lg text-foreground-400 transition-transform ${
                  open ? "rotate-45" : ""
                }`}
              ></i>
            </button>
            {open ? (
              <p className="px-4 pb-4 pr-10 text-xs leading-relaxed text-foreground-400">
                {item.answer}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}