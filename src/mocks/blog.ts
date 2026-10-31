export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export const blogCategories = [
  { id: "all", label: "All" },
  { id: "news", label: "News" },
  { id: "guides", label: "Guides" },
  { id: "winners", label: "Winner stories" },
  { id: "sports", label: "Sports" },
  { id: "crypto", label: "Crypto" },
];

export const blogPosts: BlogPost[] = [
  {
    id: "100k-race-recap",
    title: "Inside the $100K race: how crypt0whale turned 5,000 into a leaderboard crown",
    excerpt:
      "Three days, one relentless session and a strategy built entirely around Rakeback maths. We spoke to the October race winner about patience, bankroll tiers and why he never spins above 20 USDT.",
    category: "winners",
    author: "Marta Kowalski",
    date: "29 Oct 2026",
    readTime: "7 min read",
    image:
      "https://readdy.ai/api/search-image?query=confident%20player%20silhouette%20in%20dark%20room%20lit%20by%20violet%20monitor%20glow%20and%20neon%20pink%20accents%2C%20premium%20editorial%20portrait%2C%20moody%20cinematic%20lighting%2C%20shallow%20depth%20of%20field&width=1200&height=675&seq=blog-race-recap&orientation=landscape",
    featured: true,
  },
  {
    id: "provably-fair-explained",
    title: "Provably fair, explained like you are five (but with hashes)",
    excerpt:
      "Every original game we run is verifiable. Here is exactly how the seed pair works and how you can check a round yourself in under a minute.",
    category: "guides",
    author: "Dev Team",
    date: "27 Oct 2026",
    readTime: "5 min read",
    image:
      "https://readdy.ai/api/search-image?query=abstract%20dark%20visualisation%20of%20cryptographic%20hash%20blocks%20connected%20by%20glowing%20cyan%20and%20magenta%20light%20lines%2C%20futuristic%20data%20aesthetic%2C%20deep%20black%20background&width=800&height=450&seq=blog-provably-fair&orientation=landscape",
  },
  {
    id: "new-slots-october",
    title: "Six new slots landed this week — here is what is actually worth your spins",
    excerpt:
      "Hacksaw and Pragmatic both shipped surprise releases. We ran 2,000 spins on each so you do not have to waste your balance finding the good one.",
    category: "news",
    author: "Tomas Reyes",
    date: "26 Oct 2026",
    readTime: "9 min read",
    image:
      "https://readdy.ai/api/search-image?query=row%20of%20glowing%20neon%20slot%20machine%20screens%20in%20a%20dark%20arcade%20hall%2C%20purple%20and%20pink%20light%20spill%2C%20cinematic%20night%20photography%2C%20high%20detail&width=800&height=450&seq=blog-new-slots&orientation=landscape",
  },
  {
    id: "in-play-football",
    title: "In-play football: five live market traps that quietly eat your edge",
    excerpt:
      "Live betting rewards speed, but these five common decisions are where most punters bleed value without noticing. A breakdown with real numbers.",
    category: "sports",
    author: "Elliot Marsh",
    date: "24 Oct 2026",
    readTime: "6 min read",
    image:
      "https://readdy.ai/api/search-image?query=dramatic%20dark%20football%20stadium%20floodlights%20with%20neon%20green%20pitch%20glow%20and%20blurred%20crowd%2C%20cinematic%20sports%20photography%20at%20night%2C%20deep%20shadows&width=800&height=450&seq=blog-inplay-football&orientation=landscape",
  },
  {
    id: "usdt-onboarding",
    title: "USDT deposits just got 40% faster — here is how the new routing works",
    excerpt:
      "We switched to a smarter network router that picks the cheapest chain automatically. Your deposit lands in seconds, even at peak hours.",
    category: "crypto",
    author: "Dev Team",
    date: "22 Oct 2026",
    readTime: "4 min read",
    image:
      "https://readdy.ai/api/search-image?query=glowing%20teal%20tether%20coin%20above%20a%20dark%20glass%20surface%20with%20network%20routing%20lines%20and%20soft%20violet%20haze%2C%20premium%20fintech%20render&width=800&height=450&seq=blog-usdt-routing&orientation=landscape",
  },
  {
    id: "bankroll-guide",
    title: "The 1% rule: a bankroll plan that survives a bad month",
    excerpt:
      "Bet sizing is boring and it is also the only thing standing between you and a zero balance. Here is the plan our VIP hosts recommend.",
    category: "guides",
    author: "Marta Kowalski",
    date: "20 Oct 2026",
    readTime: "8 min read",
    image:
      "https://readdy.ai/api/search-image?query=neatly%20stacked%20casino%20chips%20next%20to%20a%20notebook%20and%20pen%20on%20a%20dark%20desk%2C%20warm%20moody%20lighting%20with%20a%20hint%20of%20magenta%2C%20editorial%20still%20life&width=800&height=450&seq=blog-bankroll-guide&orientation=landscape",
  },
  {
    id: "evolution-live-tables",
    title: "Evolution just launched three new live tables — and one is 24/7 in 4K",
    excerpt:
      "Lightning Roulette gets a sibling, Baccarat Squeeze goes multilingual, and there is a new high-stakes Blackjack room with 50,000 limits.",
    category: "news",
    author: "Tomas Reyes",
    date: "18 Oct 2026",
    readTime: "5 min read",
    image:
      "https://readdy.ai/api/search-image?query=elegant%20dark%20live%20casino%20table%20with%20green%20felt%2C%20glowing%20roulette%20wheel%20and%20dealer%20silhouette%2C%20rich%20purple%20ambient%20lighting%2C%20luxury%20cinematic%20photography&width=800&height=450&seq=blog-live-tables&orientation=landscape",
  },
  {
    id: "esports-week",
    title: "Esports week: the three matchups our traders are watching",
    excerpt:
      "Two underdog rosters are being mispriced heading into the group stage. Our head trader explains where the value sits.",
    category: "sports",
    author: "Elliot Marsh",
    date: "16 Oct 2026",
    readTime: "6 min read",
    image:
      "https://readdy.ai/api/search-image?query=esports%20arena%20with%20glowing%20blue%20and%20magenta%20stage%20lights%2C%20large%20screens%20and%20competitive%20gaming%20setup%20in%20darkness%2C%20cinematic%20wide%20shot&width=800&height=450&seq=blog-esports-week&orientation=landscape",
  },
  {
    id: "vip-host-story",
    title: "What a VIP host actually does all day",
    excerpt:
      "Custom limits, birthday surprises and one very specific request involving a helicopter. A day in the life of our Platinum desk.",
    category: "winners",
    author: "Nadia Sorensen",
    date: "14 Oct 2026",
    readTime: "7 min read",
    image:
      "https://readdy.ai/api/search-image?query=modern%20dark%20lounge%20interior%20with%20velvet%20chairs%2C%20violet%20accent%20lighting%20and%20city%20skyline%20through%20floor%20to%20ceiling%20windows%20at%20night%2C%20luxury%20interior%20photography&width=800&height=450&seq=blog-vip-host&orientation=landscape",
  },
];