export interface HelpCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  articles: number;
}

export const helpCategories: HelpCategory[] = [
  {
    id: "account",
    title: "Account & verification",
    description: "Registration, KYC documents, 2FA and login issues.",
    icon: "ri-user-settings-line",
    articles: 18,
  },
  {
    id: "payments",
    title: "Deposits & withdrawals",
    description: "Crypto, cards, processing times and missing deposits.",
    icon: "ri-wallet-3-line",
    articles: 24,
  },
  {
    id: "bonuses",
    title: "Bonuses & wagering",
    description: "How bonus funds, rakeback and wagering requirements work.",
    icon: "ri-gift-2-line",
    articles: 15,
  },
  {
    id: "games",
    title: "Games & fairness",
    description: "Game rules, RTP, provably fair seeds and stuck rounds.",
    icon: "ri-gamepad-line",
    articles: 21,
  },
  {
    id: "sports",
    title: "Sports betting",
    description: "Bet slip, settlements, cash out and market rules.",
    icon: "ri-football-line",
    articles: 12,
  },
  {
    id: "responsible",
    title: "Responsible gambling",
    description: "Limits, cool-off periods and self-exclusion tools.",
    icon: "ri-shield-check-line",
    articles: 9,
  },
];

export interface HelpArticle {
  id: string;
  question: string;
  answer: string;
  category: string;
  popular?: boolean;
}

export const helpArticles: HelpArticle[] = [
  {
    id: "faq-withdrawal-time",
    question: "How long do withdrawals take?",
    answer:
      "Crypto withdrawals are processed instantly once approved, usually under two minutes. Card and bank withdrawals take between one and three business days depending on your bank. VIP Gold and above skip the manual review queue entirely.",
    category: "payments",
    popular: true,
  },
  {
    id: "faq-kyc",
    question: "What documents do I need for verification?",
    answer:
      "A government-issued photo ID (passport, driving licence or national ID) plus a proof of address dated within the last three months. If you deposit with a card, we may also ask for a photo of the card with the middle digits covered.",
    category: "account",
    popular: true,
  },
  {
    id: "faq-wagering",
    question: "What does x40 wagering actually mean?",
    answer:
      "It means you must place real-money bets totalling 40 times the bonus amount before the bonus converts to withdrawable cash. For example, a 100 USDT bonus needs 4,000 USDT of qualifying wagers. Slots count 100%, live casino counts 10%.",
    category: "bonuses",
    popular: true,
  },
  {
    id: "faq-rakeback",
    question: "When is rakeback paid?",
    answer:
      "Instantly. Every settled real-money bet generates rakeback at your tier rate, and it lands in your balance the moment the round ends. There is no minimum and nothing to claim.",
    category: "bonuses",
    popular: true,
  },
  {
    id: "faq-missing-deposit",
    question: "My crypto deposit is not showing up",
    answer:
      "Check the transaction on a block explorer first and confirm you used the exact address and network shown in the cashier. Most delays are network confirmations. If it shows confirmed and your balance is still empty after 30 minutes, send the tx hash to live support.",
    category: "payments",
    popular: true,
  },
  {
    id: "faq-provably-fair",
    question: "How do I verify a provably fair round?",
    answer:
      "Open the game, click the fairness icon and copy the server seed hash, client seed and nonce. After the round is revealed you can paste all three into any HMAC-SHA256 calculator to reproduce the result yourself.",
    category: "games",
  },
  {
    id: "faq-stuck-round",
    question: "A game round froze — what happens to my bet?",
    answer:
      "Do not refresh repeatedly. Our game engine settles every accepted bet server-side, so the outcome is already recorded. Refresh once, and if the balance does not update within ten minutes contact support with the round ID.",
    category: "games",
  },
  {
    id: "faq-cashout",
    question: "Why did my cash out offer disappear?",
    answer:
      "Cash out is dynamic and recalculates on every market movement. If the price swings against your position, the offer can be suspended for a few seconds or withdrawn entirely.",
    category: "sports",
  },
  {
    id: "faq-void-bet",
    question: "When is a sports bet voided?",
    answer:
      "Bets are voided when a match is abandoned before completion, a venue changes, or a participant withdraws before the event starts. Voided selections are returned in full to your balance.",
    category: "sports",
  },
  {
    id: "faq-limits",
    question: "How do I set a deposit limit?",
    answer:
      "Go to My Account → Settings → Responsible gambling. You can set daily, weekly or monthly deposit limits, and decreases take effect immediately while increases apply after 24 hours.",
    category: "responsible",
  },
  {
    id: "faq-self-exclusion",
    question: "Can I take a break from playing?",
    answer:
      "Yes. You can activate a 24-hour cool-off, a 7-day break or a permanent self-exclusion from the responsible gambling page. During any of these you cannot deposit or bet, and support cannot reverse them.",
    category: "responsible",
  },
  {
    id: "faq-2fa",
    question: "How do I turn on two-factor authentication?",
    answer:
      "Head to My Account → Settings → Security and scan the QR code with any authenticator app. Keep the backup codes somewhere safe — support cannot restore access without them.",
    category: "account",
  },
];

export const supportChannels = [
  {
    icon: "ri-customer-service-2-line",
    title: "Live chat",
    detail: "Average reply under 40 seconds",
    action: "Open chat",
    accent: true,
  },
  {
    icon: "ri-telegram-line",
    title: "Telegram",
    detail: "@rolabets_support · 24/7",
    action: "Message us",
    accent: false,
  },
  {
    icon: "ri-mail-send-line",
    title: "Email",
    detail: "Replies within 4 hours",
    action: "Send email",
    accent: false,
  },
];