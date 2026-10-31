export interface Transaction {
  id: string;
  type: "deposit" | "withdrawal" | "bonus" | "rakeback";
  method: string;
  amount: string;
  usd: string;
  status: "Completed" | "Pending" | "Failed";
  date: string;
  positive: boolean;
}

export const transactions: Transaction[] = [
  {
    id: "tx-9041",
    type: "deposit",
    method: "USDT · TRC20",
    amount: "+250.00",
    usd: "$250.00",
    status: "Completed",
    date: "30 Oct 2026, 14:22",
    positive: true,
  },
  {
    id: "tx-9038",
    type: "withdrawal",
    method: "Bitcoin",
    amount: "-120.00",
    usd: "$120.00",
    status: "Pending",
    date: "30 Oct 2026, 11:08",
    positive: false,
  },
  {
    id: "tx-9033",
    type: "rakeback",
    method: "Instant rakeback",
    amount: "+4.86",
    usd: "$4.86",
    status: "Completed",
    date: "30 Oct 2026, 09:51",
    positive: true,
  },
  {
    id: "tx-9027",
    type: "bonus",
    method: "Weekly bonus box",
    amount: "+100.00",
    usd: "$100.00",
    status: "Completed",
    date: "28 Oct 2026, 18:30",
    positive: true,
  },
  {
    id: "tx-9019",
    type: "deposit",
    method: "Visa ···· 4412",
    amount: "+500.00",
    usd: "$500.00",
    status: "Completed",
    date: "27 Oct 2026, 20:14",
    positive: true,
  },
  {
    id: "tx-9011",
    type: "withdrawal",
    method: "Ethereum",
    amount: "-300.00",
    usd: "$300.00",
    status: "Completed",
    date: "26 Oct 2026, 16:02",
    positive: false,
  },
  {
    id: "tx-9004",
    type: "bonus",
    method: "Weekend reload 50%",
    amount: "+200.00",
    usd: "$200.00",
    status: "Completed",
    date: "25 Oct 2026, 12:44",
    positive: true,
  },
  {
    id: "tx-8997",
    type: "deposit",
    method: "Litecoin",
    amount: "+75.00",
    usd: "$75.00",
    status: "Failed",
    date: "24 Oct 2026, 08:19",
    positive: true,
  },
];

export interface BetHistory {
  id: string;
  game: string;
  image: string;
  wager: string;
  multiplier: string;
  payout: string;
  time: string;
  won: boolean;
}

export const betHistory: BetHistory[] = [
  {
    id: "bet-77120",
    game: "Blast the Bass",
    image: "https://api.gambana.com/storage/softswiss/games/belatra/BlasttheBass/s6.webp",
    wager: "2.00",
    multiplier: "24.60x",
    payout: "49.20",
    time: "30 Oct, 14:41",
    won: true,
  },
  {
    id: "bet-77114",
    game: "Keno",
    image: "https://gambana.com/images/originals/keno.webp?v=3",
    wager: "5.00",
    multiplier: "0.00x",
    payout: "0.00",
    time: "30 Oct, 14:12",
    won: false,
  },
  {
    id: "bet-77108",
    game: "Baccarat",
    image: "https://gambana.com/images/originals/baccarat.webp?v=3",
    wager: "25.00",
    multiplier: "1.95x",
    payout: "48.75",
    time: "30 Oct, 13:58",
    won: true,
  },
  {
    id: "bet-77099",
    game: "Big Bass Vegas 1000",
    image:
      "https://api.gambana.com/storage/softswiss/games/pragmaticexternal/BigBassVegas1000/s6.webp",
    wager: "1.00",
    multiplier: "33.28x",
    payout: "33.28",
    time: "29 Oct, 22:31",
    won: true,
  },
  {
    id: "bet-77088",
    game: "Mines",
    image: "https://gambana.com/images/originals/mines.webp?v=3",
    wager: "10.00",
    multiplier: "0.00x",
    payout: "0.00",
    time: "29 Oct, 21:06",
    won: false,
  },
  {
    id: "bet-77076",
    game: "Blackjack Classic",
    image: "https://gambana.com/images/originals/blackjack-classic.webp?v=3",
    wager: "50.00",
    multiplier: "1.55x",
    payout: "77.60",
    time: "29 Oct, 19:44",
    won: true,
  },
  {
    id: "bet-77061",
    game: "ITERO",
    image: "https://api.gambana.com/storage/softswiss/games/hacksaw/ITERO92/s6.webp",
    wager: "0.50",
    multiplier: "0.00x",
    payout: "0.00",
    time: "28 Oct, 17:23",
    won: false,
  },
];

export interface ActiveBonus {
  id: string;
  name: string;
  remaining: string;
  progress: number;
  expires: string;
  amount: string;
}

export const activeBonuses: ActiveBonus[] = [
  {
    id: "bonus-weekly",
    name: "Weekly bonus box · Gold",
    remaining: "620 / 1,000 USDT wagered",
    progress: 62,
    expires: "3 days left",
    amount: "100 USDT",
  },
  {
    id: "bonus-reload",
    name: "Weekend reload 50%",
    remaining: "1,840 / 6,000 USDT wagered",
    progress: 31,
    expires: "11 days left",
    amount: "200 USDT",
  },
  {
    id: "bonus-crypto",
    name: "Crypto deposit boost",
    remaining: "5,910 / 12,500 USDT wagered",
    progress: 47,
    expires: "21 days left",
    amount: "500 USDT",
  },
];

export const accountSummary = {
  balance: "8,412.60",
  bonus: "800.00",
  rakeback: "4.86",
  tier: "Gold",
  tierPercent: 71,
  nextTier: "Platinum",
  deposited: "12,450.00",
  withdrawn: "6,900.00",
  totalWagered: "214,500.00",
  netProfit: "1,512.60",
  level: 34,
};

export const accountProfile = {
  username: "salah_abbasi",
  email: "s****.abbasi@mail.com",
  joined: "11 Mar 2025",
  country: "United Kingdom",
  verified: true,
  twoFactor: false,
};