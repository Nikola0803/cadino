export interface VipTier {
  id: string;
  name: string;
  level: number;
  icon: string;
  requirement: string;
  rakeback: string;
  weeklyBonus: string;
  withdrawal: string;
  color: string;
  perks: string[];
}

export const vipTiers: VipTier[] = [
  {
    id: "bronze",
    name: "Bronze",
    level: 1,
    icon: "ri-medal-line",
    requirement: "Sign up",
    rakeback: "3%",
    weeklyBonus: "—",
    withdrawal: "Instant",
    color: "from-amber-800/40 to-background-900",
    perks: ["Instant rakeback on every bet", "Weekly cashback drop", "Standard support queue"],
  },
  {
    id: "silver",
    name: "Silver",
    level: 2,
    icon: "ri-medal-2-line",
    requirement: "10,000 USDT wagered",
    rakeback: "5%",
    weeklyBonus: "25 USDT",
    withdrawal: "Instant",
    color: "from-slate-500/40 to-background-900",
    perks: ["Everything in Bronze", "Weekly bonus box", "Priority withdrawals", "Birthday bonus"],
  },
  {
    id: "gold",
    name: "Gold",
    level: 3,
    icon: "ri-trophy-line",
    requirement: "75,000 USDT wagered",
    rakeback: "7.5%",
    weeklyBonus: "100 USDT",
    withdrawal: "Under 5 min",
    color: "from-yellow-500/40 to-background-900",
    perks: [
      "Everything in Silver",
      "Dedicated account manager",
      "Exclusive race invites",
      "Higher betting limits",
    ],
  },
  {
    id: "platinum",
    name: "Platinum",
    level: 4,
    icon: "ri-vip-crown-line",
    requirement: "300,000 USDT wagered",
    rakeback: "10%",
    weeklyBonus: "400 USDT",
    withdrawal: "Under 2 min",
    color: "from-cyan-400/40 to-background-900",
    perks: [
      "Everything in Gold",
      "Custom bonus packages",
      "Tailored game releases",
      "Personal VIP host on Telegram",
    ],
  },
  {
    id: "diamond",
    name: "Diamond",
    level: 5,
    icon: "ri-vip-diamond-line",
    requirement: "Invite only",
    rakeback: "12%",
    weeklyBonus: "1,000 USDT",
    withdrawal: "Instant, uncapped",
    color: "from-primary-500/50 to-background-900",
    perks: [
      "Everything in Platinum",
      "Negotiated rakeback above 12%",
      "Physical gifts and event trips",
      "Private tournaments with pros",
    ],
  },
];

export const vipProgress = {
  currentTier: "Gold",
  nextTier: "Platinum",
  wagered: 214_500,
  target: 300_000,
  percent: 71,
};

export interface RaceRow {
  rank: number;
  player: string;
  country: string;
  wagered: string;
  prize: string;
  move: "up" | "down" | "same";
  you?: boolean;
}

export const raceLeaderboard: RaceRow[] = [
  { rank: 1, player: "crypt0whale", country: "🇲🇹", wagered: "1,284,000", prize: "25,000", move: "same" },
  { rank: 2, player: "Nadia.S", country: "🇩🇪", wagered: "942,310", prize: "15,000", move: "up" },
  { rank: 3, player: "TomX", country: "🇬🇧", wagered: "884,020", prize: "8,000", move: "down" },
  { rank: 4, player: "plinko_papi", country: "🇧🇷", wagered: "612,450", prize: "5,000", move: "up" },
  { rank: 5, player: "Dmitri.V", country: "🇨🇦", wagered: "498,900", prize: "3,500", move: "down" },
  { rank: 6, player: "Yuki_K", country: "🇯🇵", wagered: "404,110", prize: "2,500", move: "same" },
  { rank: 7, player: "Salah Abbasi", country: "🇸🇦", wagered: "376,840", prize: "2,000", move: "up" },
  { rank: 8, player: "mines_max", country: "🇸🇪", wagered: "322,700", prize: "1,500", move: "down" },
  { rank: 9, player: "you", country: "🇬🇧", wagered: "214,500", prize: "1,000", move: "up", you: true },
  { rank: 10, player: "Ken0Degen", country: "🇦🇺", wagered: "198,340", prize: "750", move: "down" },
];

export const vipBenefits = [
  {
    icon: "ri-refund-2-line",
    title: "Instant rakeback",
    copy: "A percentage of every real-money wager lands back in your balance the second the round settles.",
  },
  {
    icon: "ri-gift-2-line",
    title: "Weekly bonus box",
    copy: "Every Monday your tier unlocks a fresh bonus box. The higher the tier, the bigger the contents.",
  },
  {
    icon: "ri-flashlight-line",
    title: "Priority everything",
    copy: "Withdrawals, support tickets and bet limits all jump the queue once you hit Gold.",
  },
  {
    icon: "ri-user-star-line",
    title: "Personal host",
    copy: "Platinum and Diamond players get a real human on Telegram, 24 hours a day.",
  },
];