export interface Selection {
  id: string;
  label: string;
  value: string;
}

export interface Market {
  id: string;
  name: string;
  note?: string;
  columns?: string[];
  rows: { label: string; selections: Selection[] }[];
}

export const eventMarkets: Record<string, Market[]> = {
  m1: [
    {
      id: "match-result",
      name: "Match result",
      rows: [
        {
          label: "Full time",
          selections: [
            { id: "m1-1", label: "Arsenal", value: "1.85" },
            { id: "m1-x", label: "Draw", value: "3.60" },
            { id: "m1-2", label: "Newcastle", value: "4.20" },
          ],
        },
      ],
    },
    {
      id: "double-chance",
      name: "Double chance",
      rows: [
        {
          label: "Full time",
          selections: [
            { id: "m1-dc1x", label: "Arsenal or Draw", value: "1.24" },
            { id: "m1-dc12", label: "Arsenal or Newcastle", value: "1.30" },
            { id: "m1-dcx2", label: "Draw or Newcastle", value: "1.95" },
          ],
        },
      ],
    },
    {
      id: "over-under",
      name: "Total goals",
      rows: [
        {
          label: "Over / Under 1.5",
          selections: [
            { id: "m1-o15", label: "Over 1.5", value: "1.22" },
            { id: "m1-u15", label: "Under 1.5", value: "4.10" },
          ],
        },
        {
          label: "Over / Under 2.5",
          selections: [
            { id: "m1-o25", label: "Over 2.5", value: "1.72" },
            { id: "m1-u25", label: "Under 2.5", value: "2.05" },
          ],
        },
        {
          label: "Over / Under 3.5",
          selections: [
            { id: "m1-o35", label: "Over 3.5", value: "3.10" },
            { id: "m1-u35", label: "Under 3.5", value: "1.36" },
          ],
        },
      ],
    },
    {
      id: "btts",
      name: "Both teams to score",
      rows: [
        {
          label: "Full time",
          selections: [
            { id: "m1-btts-y", label: "Yes", value: "1.68" },
            { id: "m1-btts-n", label: "No", value: "2.10" },
          ],
        },
      ],
    },
    {
      id: "correct-score",
      name: "Correct score",
      rows: [
        {
          label: "Popular scores",
          selections: [
            { id: "m1-cs10", label: "1 : 0", value: "7.50" },
            { id: "m1-cs20", label: "2 : 0", value: "9.00" },
            { id: "m1-cs11", label: "1 : 1", value: "6.80" },
            { id: "m1-cs21", label: "2 : 1", value: "8.50" },
            { id: "m1-cs01", label: "0 : 1", value: "12.00" },
          ],
        },
      ],
    },
    {
      id: "goalscorer",
      name: "Anytime goalscorer",
      rows: [
        {
          label: "Arsenal",
          selections: [
            { id: "m1-gs-saka", label: "B. Saka", value: "2.60" },
            { id: "m1-gs-havertz", label: "K. Havertz", value: "2.90" },
            { id: "m1-gs-gyokeres", label: "V. Gyökeres", value: "2.40" },
          ],
        },
        {
          label: "Newcastle",
          selections: [
            { id: "m1-gs-isak", label: "A. Isak", value: "3.30" },
            { id: "m1-gs-gordon", label: "A. Gordon", value: "4.20" },
          ],
        },
      ],
    },
  ],
  m2: [
    {
      id: "moneyline",
      name: "Moneyline",
      rows: [
        {
          label: "Including overtime",
          selections: [
            { id: "m2-1", label: "Celtics", value: "1.42" },
            { id: "m2-2", label: "Heat", value: "2.95" },
          ],
        },
      ],
    },
    {
      id: "spread",
      name: "Point spread",
      rows: [
        {
          label: "Celtics -5.5",
          selections: [
            { id: "m2-sp-h", label: "Celtics -5.5", value: "1.90" },
            { id: "m2-sp-a", label: "Heat +5.5", value: "1.90" },
          ],
        },
      ],
    },
    {
      id: "total",
      name: "Total points",
      rows: [
        {
          label: "Over / Under 214.5",
          selections: [
            { id: "m2-o", label: "Over 214.5", value: "1.88" },
            { id: "m2-u", label: "Under 214.5", value: "1.92" },
          ],
        },
      ],
    },
  ],
  m3: [
    {
      id: "match-result",
      name: "Match result",
      rows: [
        {
          label: "Full time",
          selections: [
            { id: "m3-1", label: "Real Madrid", value: "2.05" },
            { id: "m3-x", label: "Draw", value: "3.45" },
            { id: "m3-2", label: "Inter", value: "3.55" },
          ],
        },
      ],
    },
    {
      id: "over-under",
      name: "Total goals",
      rows: [
        {
          label: "Over / Under 2.5",
          selections: [
            { id: "m3-o25", label: "Over 2.5", value: "1.80" },
            { id: "m3-u25", label: "Under 2.5", value: "1.95" },
          ],
        },
      ],
    },
    {
      id: "btts",
      name: "Both teams to score",
      rows: [
        {
          label: "Full time",
          selections: [
            { id: "m3-btts-y", label: "Yes", value: "1.62" },
            { id: "m3-btts-n", label: "No", value: "2.20" },
          ],
        },
      ],
    },
  ],
};

export const genericMarkets: Market[] = [
  {
    id: "winner",
    name: "Match winner",
    rows: [
      {
        label: "Full time",
        selections: [
          { id: "gen-1", label: "Home", value: "1.78" },
          { id: "gen-x", label: "Draw", value: "3.40" },
          { id: "gen-2", label: "Away", value: "4.05" },
        ],
      },
    ],
  },
  {
    id: "totals",
    name: "Totals",
    rows: [
      {
        label: "Over / Under 2.5",
        selections: [
          { id: "gen-o25", label: "Over 2.5", value: "1.85" },
          { id: "gen-u25", label: "Under 2.5", value: "1.92" },
        ],
      },
    ],
  },
  {
    id: "handicap",
    name: "Handicap",
    rows: [
      {
        label: "Home -1",
        selections: [
          { id: "gen-h-h", label: "Home -1", value: "2.40" },
          { id: "gen-h-a", label: "Away +1", value: "1.55" },
        ],
      },
    ],
  },
];

export interface MatchStat {
  label: string;
  home: number;
  away: number;
  unit?: string;
}

export const matchStats: Record<string, MatchStat[]> = {
  m1: [
    { label: "Possession", home: 58, away: 42, unit: "%" },
    { label: "Shots", home: 14, away: 7 },
    { label: "Shots on target", home: 6, away: 2 },
    { label: "Corners", home: 8, away: 3 },
    { label: "Fouls", home: 9, away: 13 },
  ],
  m2: [
    { label: "Field goal %", home: 49, away: 44, unit: "%" },
    { label: "Rebounds", home: 38, away: 31 },
    { label: "Assists", home: 24, away: 19 },
    { label: "Turnovers", home: 9, away: 14 },
  ],
};

export const genericStats: MatchStat[] = [
  { label: "Possession", home: 52, away: 48, unit: "%" },
  { label: "Shots", home: 11, away: 10 },
  { label: "Shots on target", home: 4, away: 3 },
  { label: "Corners", home: 5, away: 6 },
];

export const trendingMarkets = [
  { label: "Arsenal to win & Over 2.5", value: "2.75" },
  { label: "Both teams to score", value: "1.68" },
  { label: "Havertz anytime scorer", value: "2.90" },
  { label: "Over 9.5 corners", value: "1.95" },
];

export interface LiveScore {
  home: string;
  away: string;
  clock: string;
}

export const matchScores: Record<string, LiveScore> = {
  m1: { home: "2", away: "1", clock: "67'" },
  m5: { home: "1", away: "1", clock: "2nd period" },
  m11: { home: "88", away: "84", clock: "3rd · 4:12" },
};