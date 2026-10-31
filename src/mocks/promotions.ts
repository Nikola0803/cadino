export interface Promotion {
  id: string;
  title: string;
  tag: string;
  category: string;
  description: string;
  headline: string;
  headlineLabel: string;
  wagering: string;
  expires: string;
  image: string;
  requirements: string[];
}

export const promoCategories = [
  { id: "all", label: "All offers" },
  { id: "welcome", label: "Welcome" },
  { id: "reload", label: "Reload" },
  { id: "cashback", label: "Cashback" },
  { id: "races", label: "Races" },
  { id: "crypto", label: "Crypto" },
];

export const promotions: Promotion[] = [
  {
    id: "welcome-pack",
    title: "Welcome Pack — 5 deposits",
    tag: "New players",
    category: "welcome",
    description:
      "Start strong with a boosted first deposit plus four reloads across your first week. Every stage unlocks automatically, no code needed.",
    headline: "2,000 USDT",
    headlineLabel: "Total bonus",
    wagering: "x40 bonus",
    expires: "Ongoing",
    image:
      "https://readdy.ai/api/search-image?query=dark%20neon%20violet%20casino%20promo%20card%20background%20with%20glowing%20pink%20chips%20and%20gold%20coins%20floating%20over%20deep%20purple%20gradient%2C%20premium%20editorial%20product%20photography%2C%20soft%20volumetric%20light&width=800&height=450&seq=promo-welcome-pack&orientation=landscape",
    requirements: [
      "Minimum deposit of 20 USDT per stage",
      "Bonus funds carry a x40 wagering requirement",
      "Slots contribute 100%, live casino 10%",
      "Offer available once per player and household",
    ],
  },
  {
    id: "rakeback",
    title: "Instant Rakeback",
    tag: "Every bet",
    category: "cashback",
    description:
      "Get a slice of every wager back, credited to your balance the moment the round settles. No waiting, no claiming.",
    headline: "up to 12%",
    headlineLabel: "Rakeback rate",
    wagering: "No wagering",
    expires: "Lifetime",
    image:
      "https://readdy.ai/api/search-image?query=abstract%20dark%20casino%20scene%20with%20glowing%20green%20percentage%20symbols%20and%20falling%20coins%20over%20deep%20indigo%20smoke%2C%20moody%20neon%20lighting%2C%20ultra%20clean%20commercial%20render&width=800&height=450&seq=promo-rakeback&orientation=landscape",
    requirements: [
      "Rate scales with your VIP level",
      "Credited automatically, no minimum",
      "Calculated on real-money wagers only",
      "Excluded on bonus-funded bets",
    ],
  },
  {
    id: "weekly-race",
    title: "$10K Weekly Race",
    tag: "Leaderboard",
    category: "races",
    description:
      "Climb the weekly leaderboard by wagering on qualifying slots. Top 250 players split the prize pool every Sunday.",
    headline: "$10,000",
    headlineLabel: "Prize pool",
    wagering: "No wagering",
    expires: "Resets in 2d 04h",
    image:
      "https://readdy.ai/api/search-image?query=stylised%20dark%20race%20track%20with%20glowing%20pink%20and%20purple%20light%20trails%20and%20a%20trophy%20in%20the%20distance%2C%20cinematic%20neon%20atmosphere%2C%20deep%20black%20background%2C%20high%20contrast%20commercial%20photography&width=800&height=450&seq=promo-weekly-race&orientation=landscape",
    requirements: [
      "Minimum wager of 0.20 USDT per spin",
      "Only slots from participating studios count",
      "Prizes paid as cash, no wagering",
      "Leaderboard updates every 60 seconds",
    ],
  },
  {
    id: "monthly-race",
    title: "$100K Monthly Race",
    tag: "Flagship",
    category: "races",
    description:
      "Our biggest event of the month. Every game, every provider, one giant leaderboard with a 25,000 USDT top prize.",
    headline: "$100,000",
    headlineLabel: "Prize pool",
    wagering: "No wagering",
    expires: "Resets in 1d 09h",
    image:
      "https://readdy.ai/api/search-image?query=luxury%20dark%20stage%20with%20giant%20glowing%20gold%20trophy%20surrounded%20by%20violet%20laser%20beams%20and%20confetti%2C%20dramatic%20premium%20casino%20award%20ceremony%2C%20rich%20black%20and%20magenta%20tones&width=800&height=450&seq=promo-monthly-race&orientation=landscape",
    requirements: [
      "Open to all verified players",
      "Ranking based on total wagered volume",
      "Top prize paid in a single instalment",
      "Full terms in the race lobby",
    ],
  },
  {
    id: "crypto-boost",
    title: "Crypto Deposit Boost",
    tag: "BTC · ETH · USDT",
    category: "crypto",
    description:
      "Deposit with Bitcoin, Ethereum or USDT and receive an instant balance boost plus zero network fees on withdrawals.",
    headline: "+15%",
    headlineLabel: "Deposit boost",
    wagering: "x25 bonus",
    expires: "Ends in 6 days",
    image:
      "https://readdy.ai/api/search-image?query=floating%20glowing%20gold%20bitcoin%20and%20ethereum%20coins%20above%20a%20dark%20reflective%20surface%20with%20purple%20and%20orange%20rim%20lighting%2C%20premium%20fintech%20product%20photography%2C%20deep%20black%20background&width=800&height=450&seq=promo-crypto-boost&orientation=landscape",
    requirements: [
      "Minimum deposit of 50 USDT equivalent",
      "Boost capped at 500 USDT",
      "x25 wagering on the boost amount",
      "One crypto boost per calendar month",
    ],
  },
  {
    id: "weekend-reload",
    title: "Weekend Reload 50%",
    tag: "Fri — Sun",
    category: "reload",
    description:
      "Top up any time between Friday and Sunday and half of it comes back as bonus credit, up to 400 USDT.",
    headline: "50%",
    headlineLabel: "Reload match",
    wagering: "x30 bonus",
    expires: "Weekly",
    image:
      "https://readdy.ai/api/search-image?query=weekend%20celebration%20scene%20with%20neon%20pink%20and%20blue%20glow%20sticks%2C%20confetti%20and%20stacked%20casino%20chips%20on%20a%20dark%20marble%20table%2C%20moody%20nightlife%20photography&width=800&height=450&seq=promo-weekend-reload&orientation=landscape",
    requirements: [
      "One reload per weekend per player",
      "Minimum deposit of 25 USDT",
      "Bonus expires after 14 days",
      "Live casino wagers count at 10%",
    ],
  },
  {
    id: "first-lossback",
    title: "First Deposit Lossback",
    tag: "Safety net",
    category: "cashback",
    description:
      "If your first deposit wipes out within 24 hours, we put 30% of it straight back into your cash balance.",
    headline: "30% back",
    headlineLabel: "Lossback",
    wagering: "No wagering",
    expires: "First deposit only",
    image:
      "https://readdy.ai/api/search-image?query=soft%20dark%20studio%20still%20life%20with%20a%20comfy%20purple%20cushion%2C%20glowing%20shield%20icon%20and%20scattered%20casino%20chips%2C%20calm%20violet%20gradient%20background%2C%20premium%20minimal%20commercial%20photography&width=800&height=450&seq=promo-lossback&orientation=landscape",
    requirements: [
      "Applies to the first deposit only",
      "Claim within 24 hours of the deposit",
      "Paid as real cash, no restrictions",
      "Maximum lossback of 200 USDT",
    ],
  },
  {
    id: "refer-friend",
    title: "Refer a Friend",
    tag: "Invite only",
    category: "welcome",
    description:
      "Share your link, and when a friend deposits you both get a bonus on the spot — plus a share of their rake forever.",
    headline: "100 USDT",
    headlineLabel: "Per friend",
    wagering: "x10 bonus",
    expires: "Unlimited",
    image:
      "https://readdy.ai/api/search-image?query=two%20glowing%20neon%20outline%20silhouettes%20high%20fiving%20on%20a%20dark%20stage%20with%20purple%20haze%20and%20floating%20gift%20boxes%2C%20modern%20playful%20commercial%20render&width=800&height=450&seq=promo-refer-friend&orientation=landscape",
    requirements: [
      "Referred player must deposit 30 USDT",
      "Bonus credited to both accounts",
      "Lifetime revenue share from affiliates",
      "Self-referrals and duplicate accounts void",
    ],
  },
];

export const promoSteps = [
  {
    icon: "ri-user-add-line",
    title: "Create your account",
    copy: "Registration takes under a minute. Email or crypto wallet, your call.",
  },
  {
    icon: "ri-wallet-3-line",
    title: "Make a deposit",
    copy: "Fund with crypto, card or instant bank transfer. Boosts apply automatically.",
  },
  {
    icon: "ri-rocket-2-line",
    title: "Play and unlock",
    copy: "Wager through the requirement and your bonus converts to real cash.",
  },
];