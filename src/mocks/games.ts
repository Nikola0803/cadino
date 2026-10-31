export interface GameItem {
  id: string;
  name: string;
  image: string;
  players: number;
}

export interface BannerItem {
  id: string;
  title: string;
  image: string;
  href: string;
}

export const heroBanners: BannerItem[] = [
  {
    id: "sports",
    title: "Best Odds Guaranteed",
    image:
      "https://api.gambana.com/storage/banners/2/en_desktop_sports.png?v=1779899869&hotfix=2",
    href: "/sports",
  },
  {
    id: "affiliate",
    title: "Affiliate Program",
    image:
      "https://api.gambana.com/storage/banners/1/en_desktop_affilate.png?v=1779900868&hotfix=2",
    href: "/sports",
  },
  {
    id: "rakeback",
    title: "Instant Rakeback",
    image:
      "https://api.gambana.com/storage/banners/3/en_desktop_rakeback.png?v=1779900884&hotfix=2",
    href: "/casino",
  },
  {
    id: "race100k",
    title: "$100K Monthly Race",
    image:
      "https://api.gambana.com/storage/banners/10/en_desktop_race_100k.png?v=1781112217&hotfix=2",
    href: "/casino",
  },
  {
    id: "slots",
    title: "Casino Slots",
    image:
      "https://api.gambana.com/storage/banners/6/en_desktop_casino_slots.png?v=1781111951&hotfix=2",
    href: "/casino",
  },
  {
    id: "original",
    title: "Original Games",
    image:
      "https://api.gambana.com/storage/banners/8/en_desktop_original_games.png?v=1781112051&hotfix=2",
    href: "/casino",
  },
];

export const originalGames: GameItem[] = [
  {
    id: "blackjack-classic",
    name: "Blackjack Classic",
    image: "https://gambana.com/images/originals/blackjack-classic.webp?v=3",
    players: 93,
  },
  {
    id: "baccarat",
    name: "Baccarat",
    image: "https://gambana.com/images/originals/baccarat.webp?v=3",
    players: 102,
  },
  {
    id: "dice",
    name: "Dice",
    image: "https://gambana.com/images/originals/dice.webp?v=3",
    players: 52,
  },
  {
    id: "roulette",
    name: "Roulette",
    image: "https://gambana.com/images/originals/roulette.webp?v=3",
    players: 41,
  },
  {
    id: "keno",
    name: "Keno",
    image: "https://gambana.com/images/originals/keno.webp?v=3",
    players: 33,
  },
  {
    id: "limbo",
    name: "Limbo",
    image: "https://gambana.com/images/originals/limbo.webp?v=3",
    players: 18,
  },
  {
    id: "mines",
    name: "Mines",
    image: "https://gambana.com/images/originals/mines.webp?v=3",
    players: 22,
  },
  {
    id: "plinko",
    name: "Plinko",
    image: "https://gambana.com/images/originals/plinko.webp?v=3",
    players: 18,
  },
  {
    id: "capi",
    name: "Capi",
    image: "https://gambana.com/images/originals/capi.webp?v=3",
    players: 17,
  },
  {
    id: "hilo",
    name: "Hilo",
    image: "https://gambana.com/images/originals/hilo.webp?v=3",
    players: 19,
  },
  {
    id: "blackjack-double",
    name: "Blackjack Double",
    image: "https://gambana.com/images/originals/blackjack-double.webp?v=3",
    players: 21,
  },
  {
    id: "blackjack-switch",
    name: "Blackjack Switch",
    image: "https://gambana.com/images/originals/blackjack-switch.webp?v=3",
    players: 23,
  },
];

export const mostPlayed: GameItem[] = [
  {
    id: "kenodegen",
    name: "Keno Degen",
    image: "https://gambana.com/images/tequity/kenodegen.jpg?v=5",
    players: 13,
  },
  {
    id: "baccarat-most",
    name: "Baccarat",
    image: "https://gambana.com/images/originals/baccarat.webp?v=3",
    players: 102,
  },
  {
    id: "plinkodegen",
    name: "Plinko Degen",
    image: "https://gambana.com/images/tequity/plinkodegen.jpg?v=5",
    players: 11,
  },
  {
    id: "crash",
    name: "Crash",
    image: "https://gambana.com/images/tequity/crash.jpg?v=5",
    players: 16,
  },
  {
    id: "blackjack-classic-most",
    name: "Blackjack Classic",
    image: "https://gambana.com/images/originals/blackjack-classic.webp?v=3",
    players: 93,
  },
  {
    id: "crosstheroad",
    name: "Cross The Road",
    image: "https://gambana.com/images/tequity/cross-the-road.jpg?v=5",
    players: 21,
  },
  {
    id: "diamonds",
    name: "Diamonds",
    image: "https://gambana.com/images/tequity/diamonds.jpg?v=5",
    players: 20,
  },
  {
    id: "slider",
    name: "Slider",
    image: "https://gambana.com/images/tequity/slider.jpg?v=5",
    players: 16,
  },
  {
    id: "wheeldegen",
    name: "Wheel Degen",
    image: "https://gambana.com/images/tequity/wheeldegen.jpg?v=5",
    players: 12,
  },
  {
    id: "keno-most",
    name: "Keno",
    image: "https://gambana.com/images/originals/keno.webp?v=3",
    players: 33,
  },
];

export const gambanaPicks: GameItem[] = [
  {
    id: "godfather-3",
    name: "The Godfather 3",
    image:
      "https://api.gambana.com/storage/softswiss/games/bgmng/TheGodfather3PillarsOfPower/s6.webp",
    players: 44,
  },
  {
    id: "blast-the-bass",
    name: "Blast the Bass",
    image:
      "https://api.gambana.com/storage/softswiss/games/belatra/BlasttheBass/s6.webp",
    players: 61,
  },
  {
    id: "itero",
    name: "ITERO",
    image:
      "https://api.gambana.com/storage/softswiss/games/hacksaw/ITERO92/s6.webp",
    players: 37,
  },
  {
    id: "big-bass-bonanza",
    name: "Big Bass Bonanza",
    image:
      "https://api.gambana.com/storage/softswiss/games/pragmaticexternal/BigBassBonanza/s6.webp",
    players: 88,
  },
  {
    id: "gates-super-scatter",
    name: "Gates of Olympus Super Scatter",
    image:
      "https://api.gambana.com/storage/softswiss/games/pragmaticexternal/GatesofOlympusSuperScatter/s6.webp",
    players: 74,
  },
  {
    id: "wild-wild-riches",
    name: "Wild Wild Riches",
    image:
      "https://api.gambana.com/storage/softswiss/games/pragmaticexternal/WildWildRiches/s6.webp",
    players: 52,
  },
  {
    id: "coins-of-cleo",
    name: "Coins of Cleo",
    image:
      "https://api.gambana.com/storage/softswiss/games/yggdrasil/CoinsofCleo/s6.webp",
    players: 29,
  },
  {
    id: "multihand-blackjack",
    name: "Multihand Blackjack Pro 2",
    image:
      "https://api.gambana.com/storage/softswiss/games/bgmng/MultihandBlackjackPro2/s6.webp",
    players: 48,
  },
];

export const liveCasino: GameItem[] = [
  {
    id: "live-roulette",
    name: "Flash Roulette",
    image: "https://gambana.com/images/originals/roulette.webp?v=3",
    players: 128,
  },
  {
    id: "live-blackjack",
    name: "Blackjack Live",
    image: "https://gambana.com/images/originals/blackjack-classic.webp?v=3",
    players: 96,
  },
  {
    id: "live-baccarat",
    name: "Baccarat Live",
    image: "https://gambana.com/images/originals/baccarat.webp?v=3",
    players: 84,
  },
  {
    id: "live-capi",
    name: "Capi Live",
    image: "https://gambana.com/images/originals/capi.webp?v=3",
    players: 45,
  },
  {
    id: "live-dice",
    name: "Dice Live",
    image: "https://gambana.com/images/originals/dice.webp?v=3",
    players: 38,
  },
  {
    id: "live-hilo",
    name: "Hilo Live",
    image: "https://gambana.com/images/originals/hilo.webp?v=3",
    players: 31,
  },
];

export const newReleases: GameItem[] = [
  {
    id: "sweet-bonanza-pop",
    name: "Sweet Bonanza POP",
    image:
      "https://api.gambana.com/storage/softswiss/games/pragmaticexternal/SweetBonanzaPOP/s6.webp",
    players: 66,
  },
  {
    id: "chests-of-cai-shen",
    name: "Chests of Cai Shen",
    image:
      "https://api.gambana.com/storage/softswiss/games/pragmaticexternal/ChestsOfCaiShenInfinity/s6.webp",
    players: 41,
  },
  {
    id: "death-becomes-you",
    name: "Death Becomes You",
    image:
      "https://api.gambana.com/storage/softswiss/games/hacksaw/DeathBecomesYou92/s6.webp",
    players: 27,
  },
  {
    id: "le-vampire",
    name: "Le Vampire",
    image:
      "https://api.gambana.com/storage/softswiss/games/hacksaw/LeVampire92/s6.webp",
    players: 22,
  },
  {
    id: "5-sevens",
    name: "5 Sevens Hold and Win",
    image:
      "https://api.gambana.com/storage/softswiss/games/yggdrasil/5SevensHoldandWin/s6.webp",
    players: 35,
  },
  {
    id: "banana-rush",
    name: "Banana Rush",
    image:
      "https://api.gambana.com/storage/softswiss/games/playngo/BananaRush/s6.webp",
    players: 30,
  },
];

export const slots: GameItem[] = [
  {
    id: "temple-of-prosperity",
    name: "Temple of Prosperity",
    image:
      "https://api.gambana.com/storage/softswiss/games/playngo/TempleofProsperity/s6.webp",
    players: 58,
  },
  {
    id: "argonauts",
    name: "Argonauts",
    image:
      "https://api.gambana.com/storage/softswiss/games/pragmaticexternal/Argonauts/s6.webp",
    players: 44,
  },
  {
    id: "tiki-fruits",
    name: "Tiki Fruits",
    image:
      "https://api.gambana.com/storage/softswiss/games/evolution/TikiFruits/s6.webp",
    players: 39,
  },
  {
    id: "bombuster",
    name: "Bombuster",
    image:
      "https://api.gambana.com/storage/softswiss/games/evolution/Bombuster/s6.webp",
    players: 51,
  },
  {
    id: "champion-underworld",
    name: "Champion of the Underworld",
    image:
      "https://api.gambana.com/storage/softswiss/games/yggdrasil/ChampionoftheUnderworld/s6.webp",
    players: 33,
  },
  {
    id: "hot-to-burn",
    name: "Hot to Burn Extreme",
    image:
      "https://api.gambana.com/storage/softswiss/games/pragmaticexternal/HottoBurnExtreme/s6.webp",
    players: 47,
  },
];

export const trending: GameItem[] = [
  {
    id: "big-bass-vegas",
    name: "Big Bass Vegas 1000",
    image:
      "https://api.gambana.com/storage/softswiss/games/pragmaticexternal/BigBassVegas1000/s6.webp",
    players: 71,
  },
  {
    id: "trending-keno",
    name: "Keno",
    image: "https://gambana.com/images/originals/keno.webp?v=3",
    players: 33,
  },
  {
    id: "trending-blast",
    name: "Blast the Bass",
    image:
      "https://api.gambana.com/storage/softswiss/games/belatra/BlasttheBass/s6.webp",
    players: 61,
  },
  {
    id: "trending-limbo",
    name: "Limbo",
    image: "https://gambana.com/images/originals/limbo.webp?v=3",
    players: 18,
  },
  {
    id: "trending-blackjack",
    name: "Blackjack Classic",
    image: "https://gambana.com/images/originals/blackjack-classic.webp?v=3",
    players: 93,
  },
  {
    id: "trending-mines",
    name: "Mines",
    image: "https://gambana.com/images/originals/mines.webp?v=3",
    players: 22,
  },
];

export const gameShows: GameItem[] = [
  {
    id: "show-roulette",
    name: "Flash Roulette",
    image: "https://gambana.com/images/originals/roulette.webp?v=3",
    players: 128,
  },
  {
    id: "show-craps",
    name: "Craps",
    image: "https://gambana.com/images/originals/dice.webp?v=3",
    players: 57,
  },
  {
    id: "show-bombuster",
    name: "Bombuster",
    image:
      "https://api.gambana.com/storage/softswiss/games/evolution/Bombuster/s6.webp",
    players: 51,
  },
  {
    id: "show-sugar",
    name: "Sugar Monster",
    image:
      "https://api.gambana.com/storage/softswiss/games/evolution/SugarMonster/s6.webp",
    players: 42,
  },
  {
    id: "show-race",
    name: "The Race",
    image:
      "https://api.gambana.com/storage/softswiss/games/evolution/TheRace95/s6.webp",
    players: 36,
  },
];

export const allGames: GameItem[] = [
  ...originalGames,
  ...mostPlayed,
  ...gambanaPicks,
  ...newReleases,
  ...slots,
  ...trending,
  ...gameShows,
];