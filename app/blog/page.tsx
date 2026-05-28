import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Poker Blog: Strategy, Tips & Training | Poker Reflex',
  description: 'Poker strategy articles, bankroll management tips, and preflop training guides from the Poker Reflex team.',
  alternates: {
    canonical: 'https://poker-reflex.com/blog',
  },
  openGraph: {
    title: 'Poker Blog: Strategy, Tips & Training | Poker Reflex',
    description: 'Poker strategy articles, bankroll management tips, and preflop training guides.',
    url: 'https://poker-reflex.com/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poker Blog: Strategy, Tips & Training | Poker Reflex',
    description: 'Poker strategy articles, bankroll management tips, and preflop training guides.',
  },
}

const articles = [
  {
    slug: 'poker-starting-hands',
    title: 'Best Starting Hands in Poker: The Complete Chart and Guide',
    excerpt:
      "Every hand of poker starts with the same decision: play or fold. This guide covers exactly which hands are worth playing, which to throw away, and how your position changes everything.",
    readTime: '9 min read',
  },
  {
    slug: 'poker-bankroll-management',
    title: 'Poker Bankroll Management: The Complete Guide for 2026',
    excerpt:
      "Most poker players don't go broke because they're bad at poker. They go broke because they're bad at managing money. This guide breaks down exactly how to protect your bankroll.",
    readTime: '8 min read',
  },
]

export default function BlogPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20 min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
        <section className="max-w-4xl mx-auto px-6 py-16">
          <h1
            className="font-heading font-bold text-4xl md:text-5xl mb-4"
            style={{ color: 'var(--text)' }}
          >
            Blog
          </h1>
          <p className="text-lg mb-12" style={{ color: 'var(--text-secondary)' }}>
            Strategy, bankroll tips, and training guides from the Poker Reflex team.
          </p>

          <div className="grid gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="block rounded-2xl border p-6 transition-all duration-200 hover:border-green/50 hover:shadow-lg group"
                style={{
                  backgroundColor: 'var(--surface)',
                  borderColor: 'var(--border)',
                }}
              >
                <div
                  className="text-xs font-medium mb-3"
                  style={{ color: 'var(--green)' }}
                >
                  {article.readTime}
                </div>
                <h2
                  className="font-heading font-bold text-xl md:text-2xl mb-3 group-hover:text-green transition-colors"
                  style={{ color: 'var(--text)' }}
                >
                  {article.title}
                </h2>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {article.excerpt}
                </p>
                <span
                  className="text-sm font-semibold group-hover:underline"
                  style={{ color: 'var(--green)' }}
                >
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
