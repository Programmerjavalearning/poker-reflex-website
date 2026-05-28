import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Poker Blog: Strategy, Tips & Training | Poker Reflex',
  description:
    'Poker strategy articles, bankroll management tips, and preflop training guides from the Poker Reflex team.',
  alternates: {
    canonical: 'https://poker-reflex.com/blog',
  },
  openGraph: {
    title: 'Poker Blog: Strategy, Tips & Training | Poker Reflex',
    description:
      'Poker strategy articles, bankroll management tips, and preflop training guides.',
    url: 'https://poker-reflex.com/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poker Blog: Strategy, Tips & Training | Poker Reflex',
    description:
      'Poker strategy articles, bankroll management tips, and preflop training guides.',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
