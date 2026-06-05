import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import QRCodeBlock from '@/components/QRCodeBlock'
import PotOddsCalculator from '@/components/tools/PotOddsCalculator'
import { BRAND_ASSETS, SITE_URL } from '@/lib/brand'

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Pot Odds Calculator: Free Tool + How to Calculate | Poker Reflex',
  description:
    'Free pot odds calculator with implied odds and equity comparison. Plus a complete guide on how to calculate pot odds in poker, with cheat sheet and examples.',
  keywords:
    'pot odds calculator, pot odds, pot odds poker, implied odds, poker equity calculator',
  alternates: {
    canonical: `${SITE_URL}/tools/pot-odds-calculator`,
  },
  openGraph: {
    title: 'Pot Odds Calculator: Free Tool + How to Calculate | Poker Reflex',
    description:
      'Free pot odds calculator with implied odds and equity comparison. Plus a complete guide on how to calculate pot odds in poker.',
    url: `${SITE_URL}/tools/pot-odds-calculator`,
    siteName: 'Poker Reflex',
    type: 'website',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pot Odds Calculator: Free Tool + How to Calculate | Poker Reflex',
    description:
      'Free pot odds calculator with implied odds and equity comparison. Plus a complete guide on how to calculate pot odds in poker.',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
}

// ---------------------------------------------------------------------------
// JSON-LD schemas
// ---------------------------------------------------------------------------

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Pot Odds Calculator and Complete Guide',
  description:
    'Free pot odds calculator with implied odds and equity comparison. Plus a complete guide on how to calculate pot odds in poker, with cheat sheet and examples.',
  author: { '@type': 'Organization', name: 'Poker Reflex' },
  publisher: {
    '@type': 'Organization',
    name: 'Poker Reflex',
    logo: { '@type': 'ImageObject', url: BRAND_ASSETS.squareLogoUrl },
  },
  image: BRAND_ASSETS.squareLogoUrl,
  datePublished: '2026-06-03',
  dateModified: '2026-06-03',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/tools/pot-odds-calculator`,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are pot odds in simple terms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pot odds are the ratio between the size of the pot and the size of the bet you have to call. They tell you the minimum percentage of the time you need to win the hand to make the call break even. If the pot is $100 and someone bets $50, you need to win at least 25% of the time to profit from calling.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I calculate pot odds in my head while playing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The fastest shortcut is to memorize a few common bet sizes. A half-pot bet requires 25% equity. A pot-sized bet requires 33%. A two-thirds pot bet requires around 29%. For other sizes, divide the bet by the total pot after your call (pot plus opponent bet plus your call) to get the required equity percentage.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the difference between pot odds and implied odds?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pot odds are based only on the money already in the pot and the current bet. Implied odds add in the extra chips you expect to win on future streets if you hit your draw. Pot odds are certain math. Implied odds are an estimate that depends on your opponent's stack size and how likely they are to pay you off when you complete your hand.",
      },
    },
    {
      '@type': 'Question',
      name: 'How many outs do I need to call a half pot bet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A half-pot bet requires 25% equity to break even. On the flop with two cards to come, you can use the rule of 4: multiply your outs by 4 to estimate your equity. 25% equity means you need about 6 to 7 outs. A flush draw (9 outs, about 36%) easily clears that bar. A gutshot (4 outs, about 16%) does not.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use pot odds preflop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but it is less straightforward. Preflop equity is easy to calculate (for example, a suited connector has around 35 to 40% equity against a tight range), but you also need to account for position, implied odds with speculative hands, and the fact that you have multiple streets ahead. Pot odds are most cleanly applied postflop when you are drawing to a specific hand.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do pot odds work in tournaments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The math is the same, but tournament context adds complexity. In a tournament, chip value is not linear because of the payout structure (ICM). A marginal call that is slightly profitable in chip equity terms might be wrong if it risks tournament elimination. Near the bubble or at the final table, you often need more equity than the raw pot odds suggest.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if there are multiple players still in the hand?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In multiway pots, the pot odds calculation stays the same, but your required equity changes because you now need to beat multiple opponents, not just one. If you have a flush draw and you need 25% equity to call the bet, you still need 25% to win the whole pot, but in a three-way pot your flush draw might only win 50% of the time it hits because another player might also hold a better flush or a full house. Multiway pots require you to discount your equity.',
      },
    },
  ],
}

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Pot Odds Calculator',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  url: `${SITE_URL}/tools/pot-odds-calculator`,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
}

// ---------------------------------------------------------------------------
// Shared constants
// ---------------------------------------------------------------------------

const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.alexischup.pokerreflex'
const APP_STORE_URL = 'https://apps.apple.com/us/app/poker-reflex/id6761329446'

// ---------------------------------------------------------------------------
// CTA component (matches existing blog articles style)
// ---------------------------------------------------------------------------

function CTABox({ headline, text }: { headline: string; text: string }) {
  return (
    <div
      className="rounded-2xl border p-8 my-10 glow-green"
      style={{
        backgroundColor: 'var(--surface)',
        borderColor: 'rgba(74, 222, 128, 0.35)',
      }}
    >
      <h3
        className="font-heading font-bold text-xl md:text-2xl mb-3"
        style={{ color: 'var(--text)' }}
      >
        {headline}
      </h3>
      <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {text}
      </p>
      <div className="flex flex-col sm:flex-row gap-3 md:hidden">
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
          style={{ backgroundColor: 'var(--green)', color: 'var(--background)' }}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
          </svg>
          Download on Google Play
        </a>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
          style={{ backgroundColor: 'var(--green)', color: 'var(--background)' }}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
          </svg>
          Download on App Store
        </a>
      </div>
      <div className="hidden md:flex justify-center">
        <QRCodeBlock variant="finalCta" />
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function PotOddsCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />

      <Header />

      <main id="main-content" className="pt-20" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-[720px] mx-auto px-6 py-16">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm mb-8">
            <Link
              href="/tools"
              className="transition-opacity hover:opacity-80"
              style={{ color: 'var(--green)' }}
            >
              Tools
            </Link>
            <span style={{ color: 'var(--text-secondary)' }} aria-hidden="true">/</span>
            <span style={{ color: 'var(--text-secondary)' }}>Pot Odds Calculator</span>
          </nav>

          {/* H1 */}
          <h1
            className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4"
            style={{ color: 'var(--text)' }}
          >
            Pot Odds Calculator
          </h1>
          <p
            className="text-lg leading-relaxed mb-10"
            style={{ color: 'var(--text-secondary)' }}
          >
            Enter the pot, the bet, and your equity. Get instant pot odds, required equity,
            and a clear call-or-fold verdict. Free, no signup needed.
          </p>

          {/* Calculator */}
          <Suspense
            fallback={
              <div
                className="rounded-2xl border p-8 text-sm"
                style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
              >
                Loading calculator...
              </div>
            }
          >
            <PotOddsCalculator />
          </Suspense>

          {/* Quick reference tables */}
          <div className="mt-14">
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mb-5 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              Quick reference
            </h2>

            {/* A. Pot odds cheat sheet */}
            <h3
              className="font-heading font-bold text-xl mt-8 mb-3"
              style={{ color: 'var(--text)' }}
            >
              Pot odds cheat sheet
            </h3>
            <figure>
              <div className="overflow-x-auto">
                <table
                  aria-label="Pot odds by bet size: required equity for common bet sizes"
                  className="w-full text-sm"
                  style={{
                    borderCollapse: 'separate',
                    borderSpacing: 0,
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                  }}
                >
                  <thead>
                    <tr style={{ backgroundColor: 'rgba(74, 222, 128, 0.08)' }}>
                      <th className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Bet size (vs pot)</th>
                      <th className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Pot odds</th>
                      <th className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Required equity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { size: '1/4 pot', odds: '1:5', equity: '16.7%' },
                      { size: '1/3 pot', odds: '1:4', equity: '20%' },
                      { size: '1/2 pot', odds: '1:3', equity: '25%' },
                      { size: '2/3 pot', odds: '1:2.5', equity: '28.6%' },
                      { size: '3/4 pot', odds: '1:2.33', equity: '30%' },
                      { size: 'Pot-sized', odds: '1:2', equity: '33.3%' },
                      { size: '1.5x pot', odds: '1:1.67', equity: '37.5%' },
                      { size: '2x pot (overbet)', odds: '1:1.5', equity: '40%' },
                    ].map((row, i) => (
                      <tr
                        key={row.size}
                        style={{ backgroundColor: i % 2 === 0 ? 'var(--surface)' : 'var(--background)' }}
                      >
                        <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{row.size}</td>
                        <td className="px-4 py-3 tabular-nums" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>{row.odds}</td>
                        <td className="px-4 py-3 font-semibold tabular-nums" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>{row.equity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <figcaption
                className="text-xs mt-2 text-center"
                style={{ color: 'var(--text-secondary)', opacity: 0.7 }}
              >
                Required equity to break even on the call. Formula: bet / (pot + 2 x bet).
              </figcaption>
            </figure>

            {/* B. Outs to equity */}
            <h3
              className="font-heading font-bold text-xl mt-10 mb-3"
              style={{ color: 'var(--text)' }}
            >
              Outs to equity (rule of 2 and 4)
            </h3>
            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
              On the <strong style={{ color: 'var(--text)' }}>flop</strong> (two cards to come), multiply your outs by{' '}
              <strong style={{ color: 'var(--text)' }}>4</strong> for an estimate.
              On the <strong style={{ color: 'var(--text)' }}>turn</strong> (one card to come), multiply by{' '}
              <strong style={{ color: 'var(--text)' }}>2</strong>.
            </p>
            <figure>
              <div className="overflow-x-auto">
                <table
                  aria-label="Outs to equity conversion using rule of 2 and 4"
                  className="w-full text-sm"
                  style={{
                    borderCollapse: 'separate',
                    borderSpacing: 0,
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                  }}
                >
                  <thead>
                    <tr style={{ backgroundColor: 'rgba(74, 222, 128, 0.08)' }}>
                      <th className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Outs / Draw type</th>
                      <th className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Equity by river (x4)</th>
                      <th className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Equity by turn (x2)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { outs: '1', label: '1 out', byRiver: '~4%', byTurn: '~2%' },
                      { outs: '2', label: '2 outs', byRiver: '~8%', byTurn: '~4%' },
                      { outs: '3', label: '3 outs', byRiver: '~12%', byTurn: '~6%' },
                      { outs: '4', label: '4 outs - Gutshot', byRiver: '~16%', byTurn: '~8%' },
                      { outs: '5', label: '5 outs', byRiver: '~20%', byTurn: '~10%' },
                      { outs: '6', label: '6 outs', byRiver: '~24%', byTurn: '~12%' },
                      { outs: '7', label: '7 outs', byRiver: '~28%', byTurn: '~14%' },
                      { outs: '8', label: '8 outs - OESD', byRiver: '~32%', byTurn: '~16%' },
                      { outs: '9', label: '9 outs - Flush draw', byRiver: '~36%', byTurn: '~18%' },
                      { outs: '10', label: '10 outs', byRiver: '~40%', byTurn: '~20%' },
                      { outs: '11', label: '11 outs', byRiver: '~44%', byTurn: '~22%' },
                      { outs: '12', label: '12 outs', byRiver: '~48%', byTurn: '~24%' },
                      { outs: '13', label: '13 outs', byRiver: '~52%', byTurn: '~26%' },
                      { outs: '14', label: '14 outs', byRiver: '~56%', byTurn: '~28%' },
                      { outs: '15', label: '15 outs - OESD + flush draw', byRiver: '~60%', byTurn: '~30%' },
                    ].map((row, i) => (
                      <tr
                        key={row.outs}
                        style={{ backgroundColor: i % 2 === 0 ? 'var(--surface)' : 'var(--background)' }}
                      >
                        <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{row.label}</td>
                        <td className="px-4 py-3 tabular-nums" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>{row.byRiver}</td>
                        <td className="px-4 py-3 tabular-nums" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>{row.byTurn}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <figcaption
                className="text-xs mt-2 text-center"
                style={{ color: 'var(--text-secondary)', opacity: 0.7 }}
              >
                Approximate equity using the rule of 2 and 4. Actual equity varies slightly.
              </figcaption>
            </figure>
          </div>

          {/* CTA 1 */}
          <CTABox
            headline="Drill the preflop ranges that create these spots"
            text="Master GTO ranges with Poker Reflex. Thousands of preflop scenarios, instant feedback, zero cost."
          />

          {/* ----------------------------------------------------------------- */}
          {/* ARTICLE                                                            */}
          {/* ----------------------------------------------------------------- */}
          <article
            style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: 'var(--text-secondary)',
            }}
          >

            {/* H2: What are pot odds */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              What are pot odds in poker?
            </h2>
            <p>
              Pot odds are the ratio between the size of the pot and the size of the bet you
              have to call. They answer one question: how often do you need to win this hand
              to make the call profitable?
            </p>
            <p className="mt-4">
              Concrete example. The pot is $100 and your opponent bets $50. To call, you put
              in $50 to win a total pot of $200. That means you need to win $50 out of $200
              invested, which is 25% of the time. If your actual chance of winning exceeds
              25%, the call makes money over time. If it doesn't, folding is the right play.
            </p>
            <p className="mt-4">
              This is the core of every calling decision in poker. It's the same math whether
              you're in a $1/$2 cash game or a final table. And it's the foundation that all{' '}
              <Link
                href="/blog/gto-poker-for-beginners"
                style={{ color: 'var(--green)' }}
                className="hover:opacity-80 transition-opacity underline underline-offset-2"
              >
                GTO ranges
              </Link>{' '}
              are built on. If a range is balanced, every hand in it should have at least
              enough equity to justify its calling or raising frequency.
            </p>

            {/* H2: How to calculate pot odds */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              How to calculate pot odds (the formula nobody actually uses at the table)
            </h2>

            <h3
              className="font-heading font-bold text-xl md:text-2xl mt-8 mb-4"
              style={{ color: 'var(--text)' }}
            >
              The textbook formula
            </h3>
            <p>
              The formula is:
            </p>
            <div
              className="rounded-xl border px-5 py-4 my-4 font-mono text-sm"
              style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--text)' }}
            >
              required equity (%) = call / (pot + opponent&apos;s bet + call) x 100
            </div>
            <p>
              Broken down step by step:
            </p>
            <ol className="mt-4 space-y-2 pl-6 list-decimal">
              <li>Note the pot size before the bet.</li>
              <li>Note the bet size. Your call equals the bet.</li>
              <li>Add them all up: pot + bet + call (call equals bet, so it's pot + 2 x bet).</li>
              <li>Divide your call by that total. Multiply by 100.</li>
            </ol>
            <p className="mt-4">
              Example: pot = $100, bet = $50, call = $50.
            </p>
            <p className="mt-2">
              Required equity = 50 / (100 + 50 + 50) x 100 = 50 / 200 x 100 ={' '}
              <strong style={{ color: 'var(--text)' }}>25%</strong>.
            </p>
            <p className="mt-4">
              Another example: pot = $100, bet = $100 (a pot-sized bet).
            </p>
            <p className="mt-2">
              Required equity = 100 / (100 + 100 + 100) x 100 = 100 / 300 x 100 ={' '}
              <strong style={{ color: 'var(--text)' }}>33.3%</strong>.
            </p>

            <h3
              className="font-heading font-bold text-xl md:text-2xl mt-8 mb-4"
              style={{ color: 'var(--text)' }}
            >
              The shortcut for live play
            </h3>
            <p>
              In a live game, you can't pause to run long division. The shortcut: think in
              terms of the bet as a fraction of the pot, then look up the required equity.
              Half pot is always 25%. Pot-sized is always 33%. Two-thirds pot is 28.6%. These
              numbers are worth memorizing. The cheat sheet above covers the rest.
            </p>
            <p className="mt-4">
              Or you can think in ratios. If someone bets $50 into a $100 pot, the total pot
              before your call is $150. You're calling $50 to win $150. That's{' '}
              <strong style={{ color: 'var(--text)' }}>3:1 pot odds</strong>. To convert to
              a percentage: 1 / (3 + 1) = 25%. The rule: take the ratio X:1, divide 1 by
              (X + 1), and you have the required equity.
            </p>

            {/* H2: Pot odds vs equity */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              Pot odds vs equity: when to call
            </h2>
            <p>
              Pot odds tell you how often you <em>need</em> to win. Equity tells you how
              often you <em>actually will</em>. Calling is profitable when your equity exceeds
              the required equity. That's it.
            </p>
            <p className="mt-4">
              Let's use a real hand. You have 9 8 of hearts on a flop of K 7 2 with two
              hearts. You have a flush draw. With 9 outs and two cards to come, the rule of 4
              gives you roughly{' '}
              <strong style={{ color: 'var(--text)' }}>36% equity</strong>. Your opponent bets
              half the pot. Required equity: 25%. Your 36% clears that bar with room to
              spare. Easy call.
            </p>
            <p className="mt-4">
              Now change the scenario. Your opponent bets pot instead. Required equity: 33%.
              You still have 36%, so calling is profitable, but it's much closer. Every
              little thing matters now: position, stack depth, read on the opponent.
            </p>
            <p className="mt-4">
              Now change to a gutshot instead of a flush draw. Four outs, roughly 16% equity.
              Against any bet larger than about 10% of the pot, you don't have the required
              equity and should fold without implied odds. The calculator above handles all
              of these scenarios in real time. For a deeper look at how bet sizes relate to
              these decisions, see the guide on{' '}
              <Link
                href="/blog/poker-bet-sizing"
                style={{ color: 'var(--green)' }}
                className="hover:opacity-80 transition-opacity underline underline-offset-2"
              >
                poker bet sizing
              </Link>.
            </p>

            {/* H2: Implied odds */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              Implied odds: the math gets even better
            </h2>
            <p>
              Pot odds are based only on what's in the pot right now. Implied odds factor in
              what you expect to win on later streets if you hit your draw. They let you call
              profitably even when the raw pot odds are slightly against you.
            </p>
            <p className="mt-4">
              Modified formula when you add implied odds:
            </p>
            <div
              className="rounded-xl border px-5 py-4 my-4 font-mono text-sm"
              style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--text)' }}
            >
              required equity = call / (pot + bet + call + implied extra)
            </div>
            <p className="mt-4">
              Example: pot = $60, opponent bets $20 on the flop. Without implied odds, required
              equity = 20 / (60 + 20 + 20) = 20%. Now add $60 in expected river winnings when
              you hit (your implied odds). Required equity = 20 / (60 + 20 + 20 + 60) = 12.5%.
              You can call with hands that have less equity than the pot alone would justify.
            </p>
            <p className="mt-4">
              The catch: implied odds are an estimate, not a guarantee. Two things need to be
              true for them to be real. First, your opponent needs to have chips behind.
              Second, they need to be willing to call (or lead into you) when you hit. Against
              a tight player who folds the moment a flush card lands, your implied odds are
              close to zero even if their stack is huge. Be honest about this before you use
              it as justification for a loose call.
            </p>

            {/* H2: Reverse implied odds */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              Reverse implied odds (briefly)
            </h2>
            <p>
              Reverse implied odds are the flip side. Sometimes when you hit your draw, you
              lose more money rather than winning more. This happens when you draw to a
              second-best hand.
            </p>
            <p className="mt-4">
              The clearest example: you hold J 9 of clubs on a K 8 2 board with two clubs.
              You're drawing to a flush, but if another player holds A 5 of clubs, they're
              drawing to the same flush with a better kicker. When the club hits, you pay off
              their nut flush with your second-best flush. Your implied odds are negative. You
              call expecting to gain chips, but you end up losing a big pot when you hit.
            </p>
            <p className="mt-4">
              Watch for this when the board has a lot of possible Broadway flushes and you
              hold low suited cards, when drawing to the low end of a straight, or when
              playing small pocket pairs and hoping to hit a set but the board is coordinated.
              Reverse implied odds don't change the pot odds formula, they just mean the
              actual winnings column in your estimate should be shrunk, sometimes to near zero.
            </p>

            {/* H2: Common mistakes */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              Common mistakes when using pot odds
            </h2>
            <p>
              Pot odds are simple math, but there are several ways to misapply them.
            </p>
            <p className="mt-4">
              <strong style={{ color: 'var(--text)' }}>Ignoring the turn check-raise.</strong>{' '}
              You call a flop bet with a flush draw because the pot odds justify it. Fine. But
              if you're out of position and your opponent has a habit of check-raising turns,
              your effective call is much more than the flop bet. You may end up putting in
              far more chips than the pot odds supported.
            </p>
            <p className="mt-4">
              <strong style={{ color: 'var(--text)' }}>Calling when the board pairs.</strong>{' '}
              You flop a flush draw and the turn pairs the board. Now your opponent might have
              a full house, and hitting your flush doesn't guarantee winning the pot. Your
              effective outs drop. A 9-out flush draw can become a 7-out draw in the right
              circumstances. Always discount outs that might not be clean winners.
            </p>
            <p className="mt-4">
              <strong style={{ color: 'var(--text)' }}>Using pot odds in multiway pots without
              adjustment.</strong>{' '}
              In a three-way pot, calling with a flush draw still needs 25% (or whatever the
              required equity is), but your actual equity is lower because another opponent
              might also be drawing. If two players are drawing to a flush alongside you, the
              odds of scooping the pot are much lower than 36%. Reduce your equity estimate
              in multiway spots.
            </p>
            <p className="mt-4">
              <strong style={{ color: 'var(--text)' }}>Forgetting rake at low stakes.</strong>{' '}
              In a $1/$2 live game, rake can take $5 to $10 from every contested pot. A call
              that's technically profitable on paper might be marginally negative after rake.
              This especially hits thin calls at small stakes. When the required equity is
              close to your actual equity, factor in what the house takes.
            </p>
            <p className="mt-4">
              <strong style={{ color: 'var(--text)' }}>Treating pot odds as the only factor.</strong>{' '}
              Pot odds tell you whether a call is mathematically sound. They don't tell you
              whether your equity estimate is accurate. If you think you have a flush draw but
              one of your outs completes an opponent's full house, or if your hand read on
              the villain is wrong, the correct calculation gives you the wrong answer. Garbage
              in, garbage out.
            </p>
            <p className="mt-4">
              <strong style={{ color: 'var(--text)' }}>Overestimating implied odds.</strong>{' '}
              New players love the phrase "I have implied odds." Usually they're optimistically
              assuming the opponent will stack off every time the draw hits. In practice,
              experienced players often slow down when a draw completes. Be conservative.
            </p>

            {/* H2: Different stakes and stack depths */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              Pot odds at different stakes and stack depths
            </h2>
            <p>
              The formula works the same at every stake. $1/$2 live, $25/$50, or a major
              tournament, required equity = call / (pot + 2 x call). The math doesn't care.
            </p>
            <p className="mt-4">
              What changes is the context around the math. In deep-stacked cash games, implied
              odds are stronger because there are more chips to win on future streets. Speculative
              hands like suited connectors become more attractive. In tournaments near the
              bubble or at a final table, ICM pressure means you should need more equity than
              the raw odds suggest. Surviving and accumulating chips that are worth less per
              unit (because of the jump structure) makes marginal calls expensive.
            </p>
            <p className="mt-4">
              Short-stack play flips things again. When you're under 15 big blinds, you're often
              looking at a push-or-fold decision, not a draw decision. Pot odds still apply,
              but the key calculation shifts to fold equity and push/fold charts. Understanding
              how your{' '}
              <Link
                href="/blog/poker-positions"
                style={{ color: 'var(--green)' }}
                className="hover:opacity-80 transition-opacity underline underline-offset-2"
              >
                table position
              </Link>{' '}
              affects your range and your pot odds commitments is part of that picture.
            </p>
            <p className="mt-4">
              In live cash games at low stakes, one more thing matters: the players. If your
              table has five callers to every flop, pot odds look great on paper, but those
              multiway pots require much stronger hands to scoop. A flush draw that's a clear
              call heads-up can be a fold in a four-way pot where two other players might be
              drawing to the same suit.
            </p>

            {/* H2: FAQ */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              Frequently asked questions
            </h2>

            <div className="space-y-8 mt-6">
              {[
                {
                  q: 'What are pot odds in simple terms?',
                  a: `Pot odds are the ratio between the pot and the bet you have to call. They
                      tell you the minimum win rate needed for the call to be profitable. If
                      the pot is $100 and your opponent bets $50, you need to win at least 25%
                      of the time to break even.`,
                },
                {
                  q: 'How do I calculate pot odds in my head while playing?',
                  a: `The fastest way is to memorize a few key bet sizes. Half pot requires
                      25% equity, pot-sized requires 33%, two-thirds pot requires about 29%.
                      For anything else, divide the call by the total pot after your call. It
                      takes practice but becomes automatic after a few sessions of focused effort.`,
                },
                {
                  q: "What's the difference between pot odds and implied odds?",
                  a: `Pot odds are calculated from money already in the pot. Implied odds add
                      in what you expect to win on later streets if your draw completes. Pot odds
                      are certain math. Implied odds are an estimate that depends on stack sizes
                      and your opponent's willingness to pay off when you hit.`,
                },
                {
                  q: 'How many outs do I need to call a half-pot bet?',
                  a: `A half-pot bet requires 25% equity. On the flop with two cards to come,
                      multiply your outs by 4. That means you need roughly 6 to 7 outs. A flush
                      draw has 9 outs (about 36%) and easily clears the bar. A gutshot straight
                      draw has 4 outs (about 16%) and falls short.`,
                },
                {
                  q: 'Can I use pot odds preflop?',
                  a: `Yes, but it's less clean than postflop. Preflop pot odds apply most
                      naturally when you're in the big blind facing a small raise, or when
                      calling a short-stack all-in. In most preflop spots, position, ranges,
                      and postflop playability matter more than pot odds alone.`,
                },
                {
                  q: 'Do pot odds work in tournaments?',
                  a: `The math is identical, but ICM changes the correct decision near pay jumps.
                      A call that's slightly profitable in chip equity terms can be wrong if it
                      risks elimination with significant money jumps ahead. Use pot odds as a
                      floor, then apply tournament context on top.`,
                },
                {
                  q: 'What if there are multiple players still in the hand?',
                  a: `The required equity stays the same (it's based on the bet and pot size),
                      but your actual equity is lower because you need to beat everyone, not
                      just one opponent. In a three-way pot, a flush draw might have only 24%
                      to 28% effective equity rather than 36%, because another player may also
                      be drawing to a better flush or a made hand. Discount your outs in
                      multiway pots.`,
                },
              ].map(({ q, a }) => (
                <div key={q}>
                  <h3
                    className="font-heading font-bold text-lg md:text-xl mb-3"
                    style={{ color: 'var(--text)' }}
                  >
                    {q}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)' }}>{a}</p>
                </div>
              ))}
            </div>

          </article>

          {/* CTA 2 */}
          <CTABox
            headline="Build instincts for the spots these numbers create"
            text="Poker Reflex drills every preflop scenario across positions and stack depths, so the right call or fold becomes automatic. Free to download."
          />

          {/* Back to tools */}
          <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
            <Link
              href="/tools"
              className="inline-flex items-center gap-1 text-sm transition-opacity hover:opacity-80"
              style={{ color: 'var(--green)' }}
            >
              ← Back to Tools
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}
