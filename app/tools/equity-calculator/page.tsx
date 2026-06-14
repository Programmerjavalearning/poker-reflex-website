import type { Metadata } from 'next'
import { Suspense, type ReactNode } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import QRCodeBlock from '@/components/QRCodeBlock'
import EquityCalculator from '@/components/tools/EquityCalculator'
import { BRAND_ASSETS, SITE_URL, APP_STORE_URL, PLAY_STORE_URL } from '@/lib/brand'

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Poker Equity Calculator: Free Hand vs Hand Odds | Poker Reflex',
  description:
    'Free poker equity calculator. Pick two hands and an optional board to get instant win percentages, plus a guide on how poker equity works with common matchups.',
  keywords:
    'poker equity calculator, poker odds calculator, hand vs hand, poker hand calculator, all in equity, preflop equity, poker win percentage',
  alternates: {
    canonical: `${SITE_URL}/tools/equity-calculator`,
  },
  openGraph: {
    title: 'Poker Equity Calculator: Free Hand vs Hand Odds | Poker Reflex',
    description:
      'Free poker equity calculator. Pick two hands and an optional board to get instant win percentages.',
    url: `${SITE_URL}/tools/equity-calculator`,
    siteName: 'Poker Reflex',
    type: 'website',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poker Equity Calculator: Free Hand vs Hand Odds | Poker Reflex',
    description:
      'Free poker equity calculator. Pick two hands and an optional board to get instant win percentages.',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
}

// ---------------------------------------------------------------------------
// JSON-LD schemas
// ---------------------------------------------------------------------------

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Poker Equity Calculator and Guide',
  description:
    'Free poker equity calculator for hand vs hand with an optional board, plus a guide on how poker equity works with common matchups.',
  author: { '@type': 'Organization', name: 'Poker Reflex' },
  publisher: {
    '@type': 'Organization',
    name: 'Poker Reflex',
    logo: { '@type': 'ImageObject', url: BRAND_ASSETS.squareLogoUrl },
  },
  image: BRAND_ASSETS.squareLogoUrl,
  datePublished: '2026-06-14',
  dateModified: '2026-06-14',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/tools/equity-calculator`,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does equity mean in poker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Equity is the share of the pot a hand is worth right now, expressed as the percentage of the time it would win if the hand were played to showdown against the other hand (or hands). If your hand has 60% equity, it wins 60 times out of 100 on average. Ties are usually split, counting as half a win for each player.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is poker equity calculated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You take every possible way the remaining board cards can come, play each hand to showdown, and count how often each one wins. When there are only a few cards to come (on the flop, turn, or river), you can enumerate every runout exactly. Preflop there are over 1.7 million runouts for a single hand-vs-hand spot, so calculators use Monte Carlo simulation: they deal a large random sample of boards and measure the win rate, which is accurate to a fraction of a percent.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a coin flip or race in poker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A coin flip (or race) is a roughly 50/50 matchup. The classic example is a pair against two higher cards, like 22 against AK. The pair is a tiny favorite at about 53%, because it is already made, while AK has to pair up or make a straight or flush. People call it a flip because the equities are so close that the result feels like chance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is AK better than a pair before the flop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the pair. AK is a slight underdog to any pair preflop. Against a small or medium pair it is about a 47% race, and against a big pair like QQ it falls to about 46%. AK is strong because it makes the best top pair and has good playability, but as raw all-in equity it is behind any pocket pair.',
      },
    },
    {
      '@type': 'Question',
      name: 'How accurate is this equity calculator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'On the flop, turn, and river it enumerates every remaining runout, so the result is exact. Preflop it runs a Monte Carlo simulation of about 80,000 random boards, which is accurate to roughly plus or minus 0.2%. The hand evaluator was validated against exact enumeration of full matchups and against published equity figures.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I calculate equity against a range instead of one hand?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This calculator is hand vs hand, which is the cleanest way to learn the common matchups. To think in ranges, pair it with the Range Visualizer to see which hands an opponent opens or 3-bets from each position, then test your hand against the specific hands in that range one by one.',
      },
    },
  ],
}

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Poker Equity Calculator',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  url: `${SITE_URL}/tools/equity-calculator`,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
}

// ---------------------------------------------------------------------------
// CTA component (matches existing tool and blog pages)
// ---------------------------------------------------------------------------

function CTABox({ headline, text }: { headline: string; text: string }) {
  return (
    <div
      className="rounded-2xl border p-8 my-10 glow-green"
      style={{ backgroundColor: 'var(--surface)', borderColor: 'rgba(74, 222, 128, 0.35)' }}
    >
      <h3 className="font-heading font-bold text-xl md:text-2xl mb-3" style={{ color: 'var(--text)' }}>
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

const H2 = ({ children }: { children: ReactNode }) => (
  <h2
    className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
    style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
  >
    {children}
  </h2>
)

const matchups = [
  { m: 'AA vs KK', eq: '~82% / 18%', note: 'Pair over pair. The big favorite.' },
  { m: 'QQ vs JJ', eq: '~81% / 19%', note: 'Any higher pair dominates a lower one.' },
  { m: 'AK vs QQ', eq: '~46% / 54%', note: 'Two overcards are a slight dog to a pair.' },
  { m: 'AK vs 22', eq: '~47% / 53%', note: 'The classic coin flip (race).' },
  { m: 'AK vs AQ', eq: '~74% / 26%', note: 'Domination: same ace, worse kicker.' },
  { m: '99 vs A7', eq: '~71% / 29%', note: 'A pair beats one overcard handily.' },
  { m: 'AK vs T9s', eq: '~60% / 40%', note: 'Overcards vs suited connectors.' },
  { m: 'JJ vs AK', eq: '~54% / 46%', note: 'A medium pair is a small favorite.' },
]

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function EquityCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }} />

      <Header />

      <main id="main-content" className="pt-20" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-[720px] mx-auto px-6 py-16">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm mb-8">
            <Link href="/tools" className="transition-opacity hover:opacity-80" style={{ color: 'var(--green)' }}>
              Tools
            </Link>
            <span style={{ color: 'var(--text-secondary)' }} aria-hidden="true">/</span>
            <span style={{ color: 'var(--text-secondary)' }}>Equity Calculator</span>
          </nav>

          {/* H1 */}
          <h1
            className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4"
            style={{ color: 'var(--text)' }}
          >
            Poker Equity Calculator
          </h1>
          <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}>
            Pick two hands and an optional board, and see who is ahead and by how much. Exact on
            the flop, turn, and river, simulated preflop. Free, no signup needed.
          </p>

          {/* Calculator */}
          <Suspense
            fallback={
              <div className="rounded-2xl border p-8 text-sm" style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
                Loading calculator...
              </div>
            }
          >
            <EquityCalculator />
          </Suspense>

          {/* Quick reference */}
          <div className="mt-14">
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mb-5 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              Common preflop matchups
            </h2>
            <figure>
              <div className="overflow-x-auto">
                <table
                  aria-label="Common preflop poker matchups and their approximate equity"
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
                      <th className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Matchup</th>
                      <th className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Equity</th>
                      <th className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>What it teaches</th>
                    </tr>
                  </thead>
                  <tbody>
                    {matchups.map((row, i) => (
                      <tr key={row.m} style={{ backgroundColor: i % 2 === 0 ? 'var(--surface)' : 'var(--background)' }}>
                        <td className="px-4 py-3 font-semibold" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{row.m}</td>
                        <td className="px-4 py-3 tabular-nums" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>{row.eq}</td>
                        <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <figcaption className="text-xs mt-2 text-center" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>
                Approximate all-in equity. Exact numbers vary slightly with the specific suits, which the calculator above accounts for.
              </figcaption>
            </figure>
          </div>

          {/* CTA 1 */}
          <CTABox
            headline="Train the spots these numbers come from"
            text="Poker Reflex drills preflop ranges with instant GTO feedback, so the right play becomes a reflex. Free to download."
          />

          {/* ARTICLE */}
          <article style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>

            <H2>What is equity in poker?</H2>
            <p>
              Equity is the share of the pot your hand is worth right now. Put two hands all in and
              run the board out a million times, and equity is simply how often each hand wins. If
              your hand has 60% equity, it takes the pot 60 times out of 100 on average. Ties get
              split, so each player gets credit for half.
            </p>
            <p className="mt-4">
              Equity is the number behind almost every decision in poker. It tells you whether a
              call is profitable when you compare it to your{' '}
              <Link href="/tools/pot-odds-calculator" style={{ color: 'var(--green)' }} className="hover:opacity-80 transition-opacity underline underline-offset-2">
                pot odds
              </Link>
              , and it tells you which preflop hands are actually ahead when the money goes in.
            </p>

            <H2>How to use this equity calculator</H2>
            <p>
              It takes about five seconds. Tap a card slot, then tap a card below to fill it.
            </p>
            <ol className="mt-4 space-y-2 pl-6 list-decimal">
              <li>Pick two cards for Player 1 and two for Player 2.</li>
              <li>Leave the board empty for a preflop all-in, or add a flop, turn, or river.</li>
              <li>The win percentages update instantly. Hit Random hands to explore matchups fast.</li>
            </ol>
            <p className="mt-4">
              An example is filled in to start (AK suited against a pair of queens) so you can see a
              result right away.
            </p>

            <H2>Exact vs simulated: how the numbers are calculated</H2>
            <p>
              On the flop, turn, and river there are only a handful of ways the board can finish, so
              the calculator enumerates every single runout and gives you the exact equity. Preflop
              is different. With two known hands there are over 1.7 million possible boards, which is
              a lot to grind through on every keystroke, so the tool runs a Monte Carlo simulation:
              it deals about 80,000 random boards and measures the win rate. That is accurate to
              roughly a fifth of a percent, close enough that you will not notice the difference.
            </p>
            <p className="mt-4">
              The hand evaluator behind it was checked against exact enumeration of full matchups and
              against published equity figures, so the numbers you see are trustworthy.
            </p>

            <H2>Common matchups worth memorizing</H2>
            <p>
              A handful of equities come up again and again. Learn these and you will read most all-in
              spots instantly.
            </p>
            <p className="mt-4">
              <strong style={{ color: 'var(--text)' }}>Pair over pair is crushing.</strong> AA against
              KK, or QQ against JJ, is about 81 to 82%. The bigger pair is a huge favorite because the
              smaller pair needs to hit one of only two remaining cards.
            </p>
            <p className="mt-4">
              <strong style={{ color: 'var(--text)' }}>A pair against two overcards is a coin flip.</strong>{' '}
              22 against AK is about 53/47 for the pair. It is already made, while AK has to improve.
              These races decide a huge number of tournament hands.
            </p>
            <p className="mt-4">
              <strong style={{ color: 'var(--text)' }}>Two overcards beat a pair when the pair is
              lower than both.</strong> AK against QQ is still a slight underdog at about 46%, because
              the queens are made. But AK against a pair below the king, plus a board, often flips
              fast. Domination is the real danger: AK against AQ is about 74/26, because they share
              the ace and your kicker plays.
            </p>

            <H2>Equity and ranges</H2>
            <p>
              Hand vs hand is the cleanest way to learn the matchups, which is why this calculator
              starts there. In a real hand you rarely know the exact two cards your opponent holds, so
              the next step is to think in ranges. Use the{' '}
              <Link href="/tools/range-visualizer" style={{ color: 'var(--green)' }} className="hover:opacity-80 transition-opacity underline underline-offset-2">
                Range Visualizer
              </Link>{' '}
              to see which hands a player opens or 3-bets from each position, then test your hand
              against the specific hands in that range. If you are new to which hands belong in a
              range, the guide on{' '}
              <Link href="/blog/poker-starting-hands" style={{ color: 'var(--green)' }} className="hover:opacity-80 transition-opacity underline underline-offset-2">
                poker starting hands
              </Link>{' '}
              is a good place to start, and{' '}
              <Link href="/blog/what-is-a-3-bet-in-poker" style={{ color: 'var(--green)' }} className="hover:opacity-80 transition-opacity underline underline-offset-2">
                what a 3-bet is
              </Link>{' '}
              covers the spots where these all-in equities matter most.
            </p>

            <H2>Frequently asked questions</H2>
            <div className="space-y-8 mt-6">
              {[
                {
                  q: 'What does equity mean in poker?',
                  a: 'Equity is the share of the pot your hand is worth right now, measured as how often it would win at showdown against the other hand. 60% equity means it wins 60 times out of 100. Ties are split, counting as half a win for each player.',
                },
                {
                  q: 'How is poker equity calculated?',
                  a: 'You run out every possible board, play each hand to showdown, and count the wins. Postflop there are few enough runouts to enumerate exactly. Preflop there are over 1.7 million, so calculators sample a large number of random boards (Monte Carlo) and measure the win rate.',
                },
                {
                  q: 'What is a coin flip or race?',
                  a: 'A roughly 50/50 matchup, usually a pair against two higher cards like 22 against AK. The pair is a small favorite around 53% because it is already made while the overcards still have to improve.',
                },
                {
                  q: 'Is AK better than a pair before the flop?',
                  a: 'As raw all-in equity, AK is a slight underdog to any pair: about 47% against a small or medium pair and about 46% against a big one. AK is still a premium hand because of how well it plays after the flop, but it is behind every pocket pair preflop.',
                },
                {
                  q: 'How accurate is this calculator?',
                  a: 'Exact on the flop, turn, and river, since it enumerates every runout. Preflop it simulates about 80,000 boards, accurate to roughly plus or minus 0.2%. The evaluator was validated against exact enumeration and published equities.',
                },
                {
                  q: 'Can I calculate equity against a range?',
                  a: 'This tool is hand vs hand. To work with ranges, use the Range Visualizer to see an opponent’s range by position, then test your hand against the hands in it.',
                },
              ].map(({ q, a }) => (
                <div key={q}>
                  <h3 className="font-heading font-bold text-lg md:text-xl mb-3" style={{ color: 'var(--text)' }}>
                    {q}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)' }}>{a}</p>
                </div>
              ))}
            </div>
          </article>

          {/* CTA 2 */}
          <CTABox
            headline="Turn this math into instinct"
            text="Knowing the equities is one thing. Making the right preflop decision in two seconds is another. Poker Reflex trains exactly that, for free."
          />

          {/* Back to tools */}
          <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
            <Link href="/tools" className="inline-flex items-center gap-1 text-sm transition-opacity hover:opacity-80" style={{ color: 'var(--green)' }}>
              ← Back to Tools
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}
