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
