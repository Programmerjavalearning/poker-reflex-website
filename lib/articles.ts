export interface Article {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
}

export const categories = ['All', 'Preflop', 'Fundamentals'] as const

export const articles: Article[] = [
  {
    slug: 'poker-5-bet',
    title: 'What Is a 5-Bet in Poker? Sizing, Ranges & When to Jam',
    excerpt:
      'The reraise of a 4-bet, and at 100bb almost always all-in. The 1-bet to 5-bet ladder, 5-bet sizing, value and bluff ranges, and when to fold.',
    category: 'Preflop',
    readTime: '10 min read',
    date: '2026-07-18',
  },
  {
    slug: 'suited-vs-offsuit',
    title: 'Suited vs Offsuit Poker: How Much Does It Matter?',
    excerpt:
      'Being suited adds only about 3% equity, not the huge edge beginners think. The real numbers, when it flips a preflop decision, and when suited is still a fold.',
    category: 'Fundamentals',
    readTime: '9 min read',
    date: '2026-07-14',
  },
  {
    slug: 'set-mining-poker',
    title: 'Set Mining in Poker: Odds, Rules and When to Call',
    excerpt:
      'You only flop a set 11.8% of the time. The implied-odds rule that tells you when to call, the math with real chips, and when set mining stops working.',
    category: 'Preflop',
    readTime: '10 min read',
    date: '2026-07-09',
  },
  {
    slug: 'isolate-limpers',
    title: 'How to Isolate Limpers in Poker (Sizing and Ranges)',
    excerpt:
      'How to punish limpers with the isolation raise: the right sizing (your open plus 1bb per limper), which hands to use by position, and when to skip it.',
    category: 'Preflop',
    readTime: '10 min read',
    date: '2026-07-04',
  },
  {
    slug: 'poker-hand-notation',
    title: 'Poker Hand Notation Explained: AKs, AKo, 22+, ATs+',
    excerpt:
      'What AKs, AKo, 22+, and ATs+ actually mean. Decode suited, offsuit, the plus sign, and range shorthand, with a simple 13x13 grid you can read at a glance.',
    category: 'Fundamentals',
    readTime: '9 min read',
    date: '2026-07-01',
  },
  {
    slug: 'poker-4-bet',
    title: 'What Is a 4-Bet in Poker? When to 4-Bet, Sizing & Bluffs',
    excerpt:
      'A 4-bet is the reraise of a 3-bet. When to 4-bet for value, the blocker hands that make the best bluffs, sizing, and what to do when you face one.',
    category: 'Preflop',
    readTime: '10 min read',
    date: '2026-06-27',
  },
  {
    slug: 'poker-equity-explained',
    title: 'Poker Equity Explained: How to Read Your Win %',
    excerpt:
      'What poker equity means, how to estimate it fast with the Rule of 2 and 4, equity vs pot odds, fold equity, and the matchups to memorize.',
    category: 'Fundamentals',
    readTime: '11 min read',
    date: '2026-06-20',
  },
  {
    slug: 'open-limping-poker',
    title: "Open Limping in Poker: Why It's a Leak (and When It's Not)",
    excerpt:
      'Why open limping is usually a preflop leak, the EV and rake math behind it, and the few spots where limping is actually correct.',
    category: 'Preflop',
    readTime: '11 min read',
    date: '2026-06-17',
  },
  {
    slug: 'preflop-poker-mistakes',
    title: 'Common Preflop Poker Mistakes: 14 Leaks That Cost You Money',
    excerpt:
      'The 14 most common preflop poker mistakes, ranked by cost, with real hands and a concrete fix for each leak.',
    category: 'Preflop',
    readTime: '15 min read',
    date: '2026-06-10',
  },
  {
    slug: 'poker-bet-sizing',
    title: 'Poker Bet Sizing: How Much Should You Actually Bet?',
    excerpt:
      'A clear guide to sizing your bets and raises preflop and postflop, with simple rules and real examples.',
    category: 'Fundamentals',
    readTime: '9 min read',
    date: '2026-05-30',
  },
  {
    slug: 'gto-poker-for-beginners',
    title: 'GTO Poker for Beginners: What It Means and How to Start',
    excerpt:
      'What GTO poker really means, why it matters even at low stakes, and a clear path to learn it without drowning in solvers.',
    category: 'Fundamentals',
    readTime: '12 min read',
    date: '2026-05-29',
  },
  {
    slug: 'what-is-a-3-bet-in-poker',
    title: 'What Is a 3-Bet in Poker? When and How to Use It',
    excerpt:
      'Learn what a 3-bet is, when to do it for value or as a bluff, and how to size it correctly.',
    category: 'Preflop',
    readTime: '8 min read',
    date: '2026-05-28',
  },
  {
    slug: 'poker-starting-hands',
    title: 'Best Starting Hands in Poker: The Complete Chart and Guide',
    excerpt:
      'Learn which hands to play and which to fold, by position, with clear range charts.',
    category: 'Preflop',
    readTime: '9 min read',
    date: '2026-05-26',
  },
  {
    slug: 'poker-positions',
    title: 'Poker Positions Explained: From UTG to the Button',
    excerpt:
      'Understand every seat at the table, why position is so powerful, and how to use it to win more.',
    category: 'Fundamentals',
    readTime: '8 min read',
    date: '2026-05-28',
  },
  {
    slug: 'poker-bankroll-management',
    title: 'Poker Bankroll Management: The Complete Guide',
    excerpt:
      'Practical rules to protect your money and play with confidence.',
    category: 'Fundamentals',
    readTime: '8 min read',
    date: '2026-05-18',
  },
]
