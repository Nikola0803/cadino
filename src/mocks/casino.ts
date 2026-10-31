export interface BetRow {
  id: string;
  game: string;
  player: string;
  wager: string;
  multiplier: string;
  payout: string;
  positive: boolean;
  image: string;
}

export const liveBets: BetRow[] = [
  {
    id: "b1",
    game: "Blast the Bass",
    player: "Salah Abbasi",
    wager: "$0.22",
    multiplier: "0.00x",
    payout: "$0.00",
    positive: false,
    image:
      "https://api.gambana.com/storage/softswiss/games/belatra/BlasttheBass/s6.webp",
  },
  {
    id: "b2",
    game: "The Godfather 3: Pillars of Power",
    player: "TomX",
    wager: "$17.00",
    multiplier: "1.49x",
    payout: "$25.33",
    positive: true,
    image:
      "https://api.gambana.com/storage/softswiss/games/bgmng/TheGodfather3PillarsOfPower/s6.webp",
  },
  {
    id: "b3",
    game: "Big Bass Vegas 1000",
    player: "Marta K.",
    wager: "$33.28",
    multiplier: "1.00x",
    payout: "$33.28",
    positive: true,
    image:
      "https://api.gambana.com/storage/softswiss/games/pragmaticexternal/BigBassVegas1000/s6.webp",
  },
  {
    id: "b4",
    game: "Keno",
    player: "Jack",
    wager: "$52.00",
    multiplier: "4.17x",
    payout: "$216.84",
    positive: true,
    image: "https://gambana.com/images/originals/keno.webp?v=3",
  },
  {
    id: "b5",
    game: "Baccarat",
    player: "Salah Abbasi",
    wager: "$34.19",
    multiplier: "2.10x",
    payout: "$71.79",
    positive: true,
    image: "https://gambana.com/images/originals/baccarat.webp?v=3",
  },
  {
    id: "b6",
    game: "ITERO",
    player: "Nadia S.",
    wager: "$4.50",
    multiplier: "0.00x",
    payout: "$0.00",
    positive: false,
    image:
      "https://api.gambana.com/storage/softswiss/games/hacksaw/ITERO92/s6.webp",
  },
  {
    id: "b7",
    game: "Plinkodegen",
    player: "Dmitri V.",
    wager: "$12.00",
    multiplier: "4.12x",
    payout: "$49.42",
    positive: true,
    image: "https://gambana.com/images/tequity/plinkodegen.jpg?v=5",
  },
];

export interface SportCategory {
  id: string;
  name: string;
  icon: string;
  events: number;
}

export const sportCategories: SportCategory[] = [
  { id: "soccer", name: "Soccer", icon: "ri-football-line", events: 1248 },
  { id: "esports", name: "Esports", icon: "ri-gamepad-line", events: 386 },
  { id: "basketball", name: "Basketball", icon: "ri-basketball-line", events: 412 },
  { id: "hockey", name: "Hockey", icon: "ri-snowy-line", events: 208 },
  { id: "tennis", name: "Tennis", icon: "ri-ping-pong-line", events: 517 },
  { id: "boxing", name: "Boxing", icon: "ri-boxing-line", events: 94 },
  { id: "mma", name: "MMA", icon: "ri-sword-line", events: 121 },
  { id: "all", name: "All Sports", icon: "ri-arrow-right-line", events: 3204 },
];

export interface MatchItem {
  id: string;
  league: string;
  sport: string;
  sportId: string;
  home: string;
  away: string;
  time: string;
  live: boolean;
  odds: { label: string; value: string }[];
  markets: number;
  boosted?: boolean;
}

export const matches: MatchItem[] = [
  {
    id: "m1",
    league: "Premier League",
    sport: "Soccer",
    sportId: "soccer",
    home: "Arsenal",
    away: "Newcastle",
    time: "Live 67'",
    live: true,
    markets: 148,
    odds: [
      { label: "1", value: "1.85" },
      { label: "X", value: "3.60" },
      { label: "2", value: "4.20" },
    ],
  },
  {
    id: "m2",
    league: "NBA",
    sport: "Basketball",
    sportId: "basketball",
    home: "Boston Celtics",
    away: "Miami Heat",
    time: "Today 20:30",
    live: false,
    markets: 96,
    odds: [
      { label: "1", value: "1.42" },
      { label: "2", value: "2.95" },
    ],
  },
  {
    id: "m3",
    league: "Champions League",
    sport: "Soccer",
    sportId: "soccer",
    home: "Real Madrid",
    away: "Inter Milan",
    time: "Today 21:00",
    live: false,
    markets: 212,
    boosted: true,
    odds: [
      { label: "1", value: "2.05" },
      { label: "X", value: "3.45" },
      { label: "2", value: "3.55" },
    ],
  },
  {
    id: "m4",
    league: "UFC 312",
    sport: "MMA",
    sportId: "mma",
    home: "R. Du Plessis",
    away: "S. Strickland",
    time: "Sat 23:00",
    live: false,
    markets: 64,
    boosted: true,
    odds: [
      { label: "1", value: "1.70" },
      { label: "2", value: "2.15" },
    ],
  },
  {
    id: "m5",
    league: "NHL",
    sport: "Hockey",
    sportId: "hockey",
    home: "Maple Leafs",
    away: "Rangers",
    time: "Live 2nd",
    live: true,
    markets: 88,
    odds: [
      { label: "1", value: "2.25" },
      { label: "X", value: "4.10" },
      { label: "2", value: "2.60" },
    ],
  },
  {
    id: "m6",
    league: "ATP Vienna",
    sport: "Tennis",
    sportId: "tennis",
    home: "J. Sinner",
    away: "A. Zverev",
    time: "Today 18:00",
    live: false,
    markets: 54,
    odds: [
      { label: "1", value: "1.55" },
      { label: "2", value: "2.40" },
    ],
  },
  {
    id: "m7",
    league: "Premier League",
    sport: "Soccer",
    sportId: "soccer",
    home: "Liverpool",
    away: "Man City",
    time: "Tomorrow 17:30",
    live: false,
    markets: 236,
    boosted: true,
    odds: [
      { label: "1", value: "2.60" },
      { label: "X", value: "3.55" },
      { label: "2", value: "2.45" },
    ],
  },
  {
    id: "m8",
    league: "La Liga",
    sport: "Soccer",
    sportId: "soccer",
    home: "Barcelona",
    away: "Atletico Madrid",
    time: "Tomorrow 20:00",
    live: false,
    markets: 174,
    odds: [
      { label: "1", value: "1.72" },
      { label: "X", value: "3.90" },
      { label: "2", value: "4.60" },
    ],
  },
  {
    id: "m9",
    league: "Bundesliga",
    sport: "Soccer",
    sportId: "soccer",
    home: "Bayern Munich",
    away: "Dortmund",
    time: "Sat 18:30",
    live: false,
    markets: 168,
    odds: [
      { label: "1", value: "1.60" },
      { label: "X", value: "4.20" },
      { label: "2", value: "4.80" },
    ],
  },
  {
    id: "m10",
    league: "Ligue 1",
    sport: "Soccer",
    sportId: "soccer",
    home: "PSG",
    away: "Marseille",
    time: "Sun 20:45",
    live: false,
    markets: 132,
    odds: [
      { label: "1", value: "1.48" },
      { label: "X", value: "4.60" },
      { label: "2", value: "6.20" },
    ],
  },
  {
    id: "m11",
    league: "NBA",
    sport: "Basketball",
    sportId: "basketball",
    home: "LA Lakers",
    away: "Golden State",
    time: "Live 3rd",
    live: true,
    markets: 102,
    odds: [
      { label: "1", value: "1.78" },
      { label: "2", value: "2.05" },
    ],
  },
  {
    id: "m12",
    league: "EuroLeague",
    sport: "Basketball",
    sportId: "basketball",
    home: "Real Madrid",
    away: "Olympiacos",
    time: "Today 19:45",
    live: false,
    markets: 74,
    odds: [
      { label: "1", value: "1.65" },
      { label: "2", value: "2.30" },
    ],
  },
  {
    id: "m13",
    league: "NHL",
    sport: "Hockey",
    sportId: "hockey",
    home: "Bruins",
    away: "Canadiens",
    time: "Tomorrow 01:00",
    live: false,
    markets: 68,
    odds: [
      { label: "1", value: "1.90" },
      { label: "X", value: "4.00" },
      { label: "2", value: "3.10" },
    ],
  },
  {
    id: "m14",
    league: "ATP Finals",
    sport: "Tennis",
    sportId: "tennis",
    home: "C. Alcaraz",
    away: "N. Djokovic",
    time: "Tomorrow 15:00",
    live: false,
    markets: 61,
    odds: [
      { label: "1", value: "1.88" },
      { label: "2", value: "1.92" },
    ],
  },
  {
    id: "m15",
    league: "UFC 312",
    sport: "MMA",
    sportId: "mma",
    home: "I. Makhachev",
    away: "A. Tsarukyan",
    time: "Sat 22:15",
    live: false,
    markets: 58,
    odds: [
      { label: "1", value: "1.45" },
      { label: "2", value: "2.85" },
    ],
  },
  {
    id: "m16",
    league: "WBC Heavyweight",
    sport: "Boxing",
    sportId: "boxing",
    home: "T. Fury",
    away: "O. Usyk",
    time: "Sat 23:50",
    live: false,
    markets: 47,
    odds: [
      { label: "1", value: "2.10" },
      { label: "2", value: "1.75" },
    ],
  },
  {
    id: "m17",
    league: "CS2 Major",
    sport: "Esports",
    sportId: "esports",
    home: "NAVI",
    away: "Vitality",
    time: "Today 22:00",
    live: false,
    markets: 38,
    odds: [
      { label: "1", value: "1.95" },
      { label: "2", value: "1.85" },
    ],
  },
  {
    id: "m18",
    league: "LoL Worlds",
    sport: "Esports",
    sportId: "esports",
    home: "T1",
    away: "Gen.G",
    time: "Sun 12:00",
    live: false,
    markets: 42,
    odds: [
      { label: "1", value: "2.20" },
      { label: "2", value: "1.68" },
    ],
  },
];

export const providers: { name: string; accent: string }[] = [
  { name: "Rolabets", accent: "originals" },
  { name: "mascot gaming", accent: "mascot" },
  { name: "BGaming", accent: "bga" },
  { name: "Endorphina", accent: "endorphina" },
  { name: "Evolution", accent: "evolution" },
  { name: "Ezugi", accent: "ezugi" },
  { name: "Hacksaw", accent: "hacksaw" },
  { name: "Yggdrasil", accent: "yggdrasil" },
  { name: "Play'n GO", accent: "playngo" },
  { name: "Pragmatic Play", accent: "pragmatic" },
  { name: "Belatra", accent: "belatra" },
];