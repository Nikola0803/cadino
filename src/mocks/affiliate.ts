export interface CommissionTier {
  id: string;
  name: string;
  players: string;
  share: string;
  bonus: string;
  perks: string[];
}

export const commissionTiers: CommissionTier[] = [
  {
    id: "starter",
    name: "Starter",
    players: "0 – 9 active players",
    share: "25%",
    bonus: "$100 CPA",
    perks: ["Real-time stats dashboard", "Monthly payouts", "Standard marketing kit"],
  },
  {
    id: "pro",
    name: "Pro",
    players: "10 – 49 active players",
    share: "32%",
    bonus: "$150 CPA",
    perks: ["Everything in Starter", "Bi-weekly payouts", "Dedicated affiliate manager"],
  },
  {
    id: "elite",
    name: "Elite",
    players: "50 – 199 active players",
    share: "40%",
    bonus: "$220 CPA",
    perks: ["Everything in Pro", "Weekly payouts", "Custom landing pages", "Hybrid deals"],
  },
  {
    id: "partner",
    name: "Partner",
    players: "200+ active players",
    share: "45%",
    bonus: "Negotiated",
    perks: [
      "Everything in Elite",
      "Revenue share up to 45%",
      "Branded sub-affiliate network",
      "Annual partner summit invite",
    ],
  },
];

export const affiliateSteps = [
  {
    icon: "ri-user-add-line",
    title: "Apply in 2 minutes",
    copy: "Tell us where you traffic. Most applications are approved within 24 hours.",
  },
  {
    icon: "ri-links-line",
    title: "Grab your links",
    copy: "Tracking links, banners, landing pages and deep links to any game or market.",
  },
  {
    icon: "ri-line-chart-line",
    title: "Watch it convert",
    copy: "Live dashboard with clicks, registrations, FTDs and NGR per campaign.",
  },
  {
    icon: "ri-bank-card-line",
    title: "Get paid weekly",
    copy: "Crypto, bank transfer or e-wallet. Minimum payout of just 50 USDT.",
  },
];

export const affiliateFaqs = [
  {
    id: "aff-1",
    question: "How is revenue share calculated?",
    answer:
      "Revenue share is a percentage of the net gaming revenue (NGR) your referred players generate. NGR is total bets minus winnings minus bonus costs minus payment fees. It is calculated daily and displayed live in your dashboard.",
  },
  {
    id: "aff-2",
    question: "Can I mix revenue share and CPA?",
    answer:
      "Yes. From the Pro tier upwards you can request a hybrid deal — a fixed CPA per first deposit plus a reduced revenue share on the same player for their lifetime.",
  },
  {
    id: "aff-3",
    question: "When do I get paid?",
    answer:
      "Starter and Pro tiers are paid monthly and bi-weekly respectively, Elite and Partner weekly. All payouts are processed automatically once your balance passes 50 USDT.",
  },
  {
    id: "aff-4",
    question: "Do you allow sub-affiliates?",
    answer:
      "Partner tier accounts can create sub-affiliate networks and earn an additional 5% of their sub-affiliates' revenue. No approval needed, it is built into the dashboard.",
  },
  {
    id: "aff-5",
    question: "What traffic sources are not allowed?",
    answer:
      "Incentivised traffic, pop-unders on adult-only networks, brand bidding on our trademarks and anything targeting players under 18 are strictly prohibited. Accounts breaching these rules are closed and commissions forfeited.",
  },
  {
    id: "aff-6",
    question: "Is there a negative carryover?",
    answer:
      "No. Your commission never goes negative — a bad month simply resets at zero and your next month starts fresh.",
  },
];