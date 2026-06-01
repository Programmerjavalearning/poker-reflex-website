import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/brand'

export const metadata: Metadata = {
  title: 'Poker Blog: Strategy, Tips & Training | Poker Reflex',
  description:
    'Poker strategy articles, bankroll management tips, and preflop training guides from the Poker Reflex team.',
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: 'Poker Blog: Strategy, Tips & Training | Poker Reflex',
    description:
      'Poker strategy articles, bankroll management tips, and preflop training guides.',
    url: `${SITE_URL}/blog`,
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
