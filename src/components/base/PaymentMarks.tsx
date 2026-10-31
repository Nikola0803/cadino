const marks = [
  { id: "visa", label: "Visa" },
  { id: "mastercard", label: "Mastercard" },
  { id: "bitcoin", label: "Bitcoin" },
  { id: "ethereum", label: "Ethereum" },
  { id: "litecoin", label: "Litecoin" },
  { id: "tether", label: "Tether USDT" },
] as const;

type MarkId = (typeof marks)[number]["id"];

function Glyph({ mark }: { mark: MarkId }) {
  switch (mark) {
    case "visa":
      return (
        <span
          className="font-heading text-[13px] font-extrabold italic leading-none tracking-[-0.04em]"
          style={{ color: "#1A1F71" }}
        >
          VISA
        </span>
      );
    case "mastercard":
      return (
        <span className="relative flex h-[18px] w-[28px] items-center justify-center">
          <span
            className="absolute left-0 h-[18px] w-[18px] rounded-full"
            style={{ backgroundColor: "#EB001B" }}
          />
          <span
            className="absolute right-0 h-[18px] w-[18px] rounded-full"
            style={{ backgroundColor: "#F79E1B" }}
          />
          <span
            className="absolute left-1/2 top-1/2 h-[18px] w-[10px] -translate-x-1/2 -translate-y-1/2 rounded-[2px]"
            style={{ backgroundColor: "#FF5F00" }}
          />
        </span>
      );
    case "bitcoin":
      return (
        <span
          className="flex h-[20px] w-[20px] items-center justify-center rounded-full text-[12px] font-bold leading-none"
          style={{ backgroundColor: "#F7931A", color: "#fff" }}
        >
          ₿
        </span>
      );
    case "ethereum":
      return (
        <span
          className="font-heading text-[17px] font-bold leading-none"
          style={{ color: "#627EEA" }}
        >
          Ξ
        </span>
      );
    case "litecoin":
      return (
        <span
          className="font-heading text-[16px] font-bold leading-none"
          style={{ color: "#345D9D" }}
        >
          Ł
        </span>
      );
    case "tether":
      return (
        <span
          className="flex h-[20px] w-[20px] items-center justify-center rounded-full text-[13px] font-bold leading-none"
          style={{ backgroundColor: "#26A17B", color: "#fff" }}
        >
          ₮
        </span>
      );
    default:
      return null;
  }
}

export default function PaymentMarks() {
  return (
    <div className="flex flex-wrap gap-2">
      {marks.map((item) => (
        <span
          key={item.id}
          title={item.label}
          aria-label={item.label}
          className="flex h-9 w-11 items-center justify-center rounded-lg bg-background-50 shadow-sm shadow-black/20"
        >
          <Glyph mark={item.id} />
        </span>
      ))}
    </div>
  );
}