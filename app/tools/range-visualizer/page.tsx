import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Suspense } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import QRCodeBlock from '@/components/QRCodeBlock'
import RangeGrid from '@/components/RangeGrid'
import RangeVisualizer from '@/components/tools/RangeVisualizer'
import { BRAND_ASSETS, SITE_URL } from '@/lib/brand'
import { RANGES, parseRangeNotation } from '@/lib/poker-ranges'

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Poker Range Visualizer: Free Interactive Preflop Tool | Poker Reflex',
  description:
    'Free interactive poker range visualizer. Click the 13x13 grid, load preflop ranges by position, switch 6-max and 9-max, and learn to read hand ranges.',
  keywords:
    'poker range visualizer, preflop range chart, poker hand range, 13x13 range grid, gto preflop ranges, 6-max ranges, 9-max ranges, poker range calculator',
  alternates: {
    canonical: `${SITE_URL}/tools/range-visualizer`,
  },
  openGraph: {
    title: 'Poker Range Visualizer: Free Interactive Preflop Tool | Poker Reflex',
    description:
      'Click the 13x13 grid, load preflop ranges by position, switch between 6-max and 9-max, and learn to read hand ranges.',
    url: `${SITE_URL}/tools/range-visualizer`,
    siteName: 'Poker Reflex',
    type: 'website',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poker Range Visualizer: Free Interactive Preflop Tool | Poker Reflex',
    description:
      'Click the 13x13 grid, load preflop ranges by position, and learn to read poker hand ranges.',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
}

// ---------------------------------------------------------------------------
// JSON-LD schemas
// ---------------------------------------------------------------------------

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Poker Range Visualizer and Complete Guide',
  description:
    'An interactive poker range visualizer plus a complete guide to reading preflop ranges by position, format, and action.',
  author: { '@type': 'Organization', name: 'Poker Reflex' },
  publisher: {
    '@type': 'Organization',
    name: 'Poker Reflex',
    logo: { '@type': 'ImageObject', url: BRAND_ASSETS.squareLogoUrl },
  },
  image: BRAND_ASSETS.squareLogoUrl,
  datePublished: '2026-06-07',
  dateModified: '2026-06-07',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/tools/range-visualizer`,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a poker range?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A poker range is the full set of hands a player could have in a given spot, not one specific holding. Strong players think in ranges because you can never know an opponent\'s exact two cards, so you reason about every hand they would play the same way and respond to the whole group at once.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I read a 13x13 poker range chart?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The grid holds all 169 starting hand types. Pocket pairs run down the diagonal from AA to 22. Suited hands sit in the top right (above the diagonal) and offsuit hands sit in the bottom left. Highlighted squares are the hands in the range, and everything else is a fold.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does notation like 66+ or AQs+ mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '66+ means every pocket pair from 66 up to AA. AQs+ means every suited ace from AQs up to AKs, with the ace fixed and the kicker climbing. The s means suited and the o means offsuit. A dash like A5s-A2s covers the suited aces between those two hands.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hands should I open from each position?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You open tighter early and wider late. A common 6-max baseline is around 14% of hands under the gun, near 26% in the cutoff, and about 39% on the button. The reason is position: acting last after the flop is a real edge, so you can profitably play more hands.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between 6-max and 9-max ranges?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With more players left to act, your hand has to beat more opponents, so early-position ranges in 9-max are tighter than in 6-max. The late positions (button and small blind) stay wide in both formats because few players remain behind you.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I memorize poker ranges?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You do not need to memorize all 169 hands per spot. Learn the boundaries: the weakest pair, the weakest suited ace, and the weakest broadway you open from each position. Understanding why ranges shift by position and stack depth matters more than rote memorization.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are these GTO ranges?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'These are standard reference ranges for roughly 100 big blind cash games, rounded to be easy to learn. They are close to solver output for common spots but are not exact GTO solutions, which shift with stack depth, rake, and opponent tendencies. Use them as a solid starting point, then adjust.',
      },
    },
  ],
}

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Poker Range Visualizer',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  url: `${SITE_URL}/tools/range-visualizer`,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Tools', item: `${SITE_URL}/tools` },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Range Visualizer',
      item: `${SITE_URL}/tools/range-visualizer`,
    },
  ],
}

// ---------------------------------------------------------------------------
// Shared constants
// ---------------------------------------------------------------------------

const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.alexischup.pokerreflex'
const APP_STORE_URL = 'https://apps.apple.com/us/app/poker-reflex/id6761329446'

const utgHands = Array.from(
  parseRangeNotation(RANGES['6max'].open.find((r) => r.position === 'UTG')!.notation)
)
const btnHands = Array.from(
  parseRangeNotation(RANGES['6max'].open.find((r) => r.position === 'BTN')!.notation)
)

// ---------------------------------------------------------------------------
// Presentational helpers
// ---------------------------------------------------------------------------

function H2({ children }: { children: ReactNode }) {
  return (
    <h2
      className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-4 pl-4"
      style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
    >
      {children}
    </h2>
  )
}

function H3({ children }: { children: ReactNode }) {
  return (
    <h3
      className="font-heading font-bold text-xl md:text-2xl mt-8 mb-3"
      style={{ color: 'var(--text)' }}
    >
      {children}
    </h3>
  )
}

function P({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
      {children}
    </p>
  )
}

// Short lead paragraph after an H2, written for featured snippets.
function Summary({ children }: { children: ReactNode }) {
  return (
    <p
      className="mb-5 leading-relaxed font-medium"
      style={{ color: 'var(--text)' }}
    >
      {children}
    </p>
  )
}

function Strong({ children }: { children: ReactNode }) {
  return <strong style={{ color: 'var(--text)' }}>{children}</strong>
}

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

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function RangeVisualizerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Header />

      <main id="main-content" className="pt-20" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-[720px] mx-auto px-6 py-16">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm mb-8">
            <Link href="/tools" className="transition-opacity hover:opacity-80" style={{ color: 'var(--green)' }}>
              Tools
            </Link>
            <span style={{ color: 'var(--text-secondary)' }} aria-hidden="true">/</span>
            <span style={{ color: 'var(--text-secondary)' }}>Range Visualizer</span>
          </nav>

          <h1
            className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4"
            style={{ color: 'var(--text)' }}
          >
            Poker Range Visualizer
          </h1>
          <p className="text-lg leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
            See exactly which hands make up a poker range. Pick a position, switch between 6-max
            and 9-max, toggle opening and 3-bet ranges, or type your own. Free, no signup needed.
          </p>
          <p className="text-xs mb-10" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>
            Updated June 2026
          </p>

          {/* Tool */}
          <Suspense
            fallback={
              <div
                className="rounded-2xl border p-8 text-sm"
                style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
              >
                Loading range visualizer...
              </div>
            }
          >
            <RangeVisualizer />
          </Suspense>

          {/* Article */}
          <article className="mt-16">
            <H2>What is a poker range?</H2>
            <Summary>
              A poker range is the full set of hands a player could be holding in a spot, not one
              specific hand. Because you never see your opponent&apos;s cards, you think about every
              hand they would play the same way and react to that whole group at once.
            </Summary>
            <P>
              Say a tight player raises from under the gun. You can&apos;t know they have exactly{' '}
              <Strong>AK</Strong>. But you can be confident their range is something like the big
              pairs, strong aces, and a few suited broadways. That group of hands is their range,
              and it is far more useful than guessing at one holding.
            </P>
            <P>
              Thinking in ranges is the single biggest shift between a beginner and a winning player.
              Beginners ask &quot;what does he have?&quot; Winning players ask &quot;what does his
              whole range look like, and how does my hand do against it?&quot; The grid above is just
              a way to see a range at a glance.
            </P>

            <H2>How to read the 13x13 grid</H2>
            <Summary>
              The grid holds all 169 starting hand types. Pocket pairs run down the diagonal from AA
              to 22. Suited hands sit above the diagonal (top right) and offsuit hands sit below it
              (bottom left). Highlighted squares are in the range, everything else is a fold.
            </Summary>
            <P>
              There are 1,326 possible two-card combinations in Hold&apos;em, but they collapse into{' '}
              <Strong>169 types</Strong> once you ignore the exact suits. That is what the grid shows:
              13 ranks across and 13 down. The top-left square is <Strong>AA</Strong> and the
              bottom-right is <Strong>22</Strong>.
            </P>
            <P>
              Suited hands live in the top right because they share a suit (like <Strong>AKs</Strong>),
              and there are only 4 ways to make each one. Offsuit hands live in the bottom left (like{' '}
              <Strong>AKo</Strong>), and there are 12 ways to make each one. Pairs sit on the diagonal,
              with 6 combinations each. Click any square in the tool to add or remove that hand.
            </P>

            <H2>Poker hand notation explained</H2>
            <Summary>
              Notation is shorthand for a group of hands. 66+ means every pair from 66 to AA. AQs+
              means every suited ace from AQs to AKs. The s means suited, the o means offsuit, and a
              dash like A5s-A2s covers everything in between.
            </Summary>
            <P>
              The text box in the tool accepts standard notation, so it helps to know the rules:
            </P>
            <ul className="mb-4 space-y-2 list-disc pl-6" style={{ color: 'var(--text-secondary)' }}>
              <li><Strong>Pairs:</Strong> 99 is just pocket nines. 99+ is every pair from 99 up to AA. TT-77 is the pairs between TT and 77.</li>
              <li><Strong>Suited:</Strong> KQs is one hand. KTs+ keeps the king and climbs the kicker (KTs, KJs, KQs).</li>
              <li><Strong>Offsuit:</Strong> AJo is one hand. ATo+ means ATo, AJo, AQo, and AKo.</li>
              <li><Strong>The plus sign</Strong> always means &quot;this hand and every stronger version of it within the same group.&quot;</li>
            </ul>
            <P>
              Try typing <Strong>TT+, AQs+, A5s, KQo</Strong> into the box and watch the grid light up.
              That is a compact way to write a range that would otherwise take a full sentence to
              describe.
            </P>

            <H2>How to use this Range Visualizer</H2>
            <Summary>
              Load a preset with the position buttons, switch between 6-max and 9-max, flip between
              opening and 3-bet ranges, or type your own range in the box. Click individual hands to
              fine-tune, and watch the combo counter update in real time.
            </Summary>
            <P>The tool above gives you four ways to build a range:</P>
            <ul className="mb-4 space-y-2 list-disc pl-6" style={{ color: 'var(--text-secondary)' }}>
              <li><Strong>Position presets:</Strong> tap UTG, CO, BTN, and so on to load a standard range for that seat.</li>
              <li><Strong>Format toggle:</Strong> switch between 6-max and 9-max to see how the same seat tightens up with more players at the table.</li>
              <li><Strong>Action toggle:</Strong> flip between an opening (raise-first-in) range and a 3-bet range.</li>
              <li><Strong>Type a range:</Strong> enter notation by hand, then edit single squares to test ideas.</li>
            </ul>
            <P>
              The counter shows how many combinations you have selected and what percentage of all
              hands that is. It is a fast way to feel how wide or tight a range really is.
            </P>

            <CTABox
              headline="Turn these ranges into instinct"
              text="Reading a chart is one thing. Making the right call in two seconds at the table is another. Poker Reflex drills opens, 3-bets, 4-bets, and all-in spots hand by hand, with instant feedback and an ELO rating that tracks your progress. Free to download."
            />

            <H2>Opening ranges by position</H2>
            <Summary>
              You open tight in early position and wide in late position. The reason is simple:
              acting last after the flop is a lasting edge, so the button can profitably play roughly
              three times as many hands as under the gun.
            </Summary>
            <P>
              Position is the single biggest factor in how wide you should play. Under the gun you have
              the whole table left to act behind you, so you stick to hands that flop well and hold up
              multiway. On the button, only the blinds are left, so you can add suited gappers, weak
              suited aces, and offsuit broadways.
            </P>
            <P>
              Compare the two grids below. The under-the-gun range is compact and value-heavy. The
              button range spreads across most of the suited region and a big chunk of the offsuit
              hands. Same player, same stack, very different ranges.
            </P>
            <RangeGrid
              title="Under the Gun (UTG)"
              caption="A standard 6-max opening range from under the gun, about 14% of hands."
              ariaLabel="UTG opening range: all pocket pairs, strong suited aces and broadways, suited connectors down to 76 suited, and AJ offsuit and better"
              inRangeHands={utgHands}
            />
            <RangeGrid
              title="Button (BTN)"
              caption="A standard 6-max opening range from the button, about 39% of hands."
              ariaLabel="Button opening range: all pairs, every suited ace, most suited hands, and a wide set of offsuit broadways and aces"
              inRangeHands={btnHands}
            />
            <P>
              Want the full breakdown of every seat? Our guide to{' '}
              <Link href="/blog/poker-positions" style={{ color: 'var(--green)' }}>poker positions</Link>{' '}
              walks through UTG to the button, and the{' '}
              <Link href="/blog/poker-starting-hands" style={{ color: 'var(--green)' }}>
                best starting hands
              </Link>{' '}
              guide covers which hands belong in each one.
            </P>

            <H2>6-max vs 9-max ranges</H2>
            <Summary>
              With more players left to act, your hand has to beat more opponents, so early-position
              ranges in 9-max are tighter than in 6-max. The button and small blind stay wide in both
              formats because few players remain behind you.
            </Summary>
            <P>
              In a full-ring 9-max game, the under-the-gun player has eight opponents left to act. In
              6-max, that same seat has only five. More players means more chances someone wakes up with
              a big hand, so you tighten your early-position ranges in 9-max. Flip the format toggle in
              the tool and watch UTG shrink while the button barely moves.
            </P>
            <P>
              This is why a hand like <Strong>A9s</Strong> is a fine under-the-gun open in 6-max but a
              clear fold from the same seat in 9-max. The hand did not change. The number of players
              who can punish it did.
            </P>

            <H2>3-bet ranges</H2>
            <Summary>
              A 3-bet is the first re-raise before the flop. A good 3-bet range mixes value hands you
              want to build a pot with (like QQ+ and AK) and a few bluffs (like suited aces such as
              A5s) that play well when called and can fold out better hands.
            </Summary>
            <P>
              Opening is only half the preflop game. When someone raises in front of you, your strongest
              hands want to re-raise for value, and a handful of bluffs keep your range balanced so you
              are not only 3-betting the nuts. Toggle the action to <Strong>3-bet</Strong> in the tool
              to see typical re-raising ranges by position.
            </P>
            <P>
              Notice the shape. The value hands sit in the top corner (big pairs and AK), and the bluffs
              are often suited wheel aces like <Strong>A5s</Strong> and <Strong>A4s</Strong>. Those
              hands block the aces and kings your opponent would continue with, and they make
              straights and flushes when called. For a deeper look, read{' '}
              <Link href="/blog/what-is-a-3-bet-in-poker" style={{ color: 'var(--green)' }}>
                what a 3-bet is and when to use it
              </Link>.
            </P>

            <H2>GTO vs exploitative ranges</H2>
            <Summary>
              GTO ranges are balanced so they cannot be exploited no matter what your opponent does.
              Exploitative ranges deviate on purpose to punish a specific weakness. Start from a solid
              GTO baseline, then adjust when you have a clear read.
            </Summary>
            <P>
              The presets here are close to game-theory-optimal baselines for 100 big blind cash games.
              GTO play is balanced by design: it is not trying to beat one opponent, it is trying to be
              unbeatable on average. That makes it the right default when you do not have a strong read.
            </P>
            <P>
              Exploitative play is the next layer. If the player to your left folds too much to 3-bets,
              you widen your 3-bet bluffs to attack that leak. If a station never folds, you cut the
              bluffs and 3-bet a pure value range. New to this idea? Our{' '}
              <Link href="/blog/gto-poker-for-beginners" style={{ color: 'var(--green)' }}>
                GTO poker for beginners
              </Link>{' '}
              guide breaks it down without the math headache.
            </P>

            <H2>Combos and percentages</H2>
            <Summary>
              Each pocket pair is 6 combinations, each suited hand is 4, and each offsuit hand is 12.
              There are 1,326 total. Counting combos is how you measure a range&apos;s real size, since
              one offsuit hand is worth as much as two suited hands.
            </Summary>
            <P>
              The grid hides something important: not every square is worth the same. A single offsuit
              hand like <Strong>AKo</Strong> is 12 combinations, while a suited hand like{' '}
              <Strong>AKs</Strong> is only 4. So an offsuit hand counts three times as much toward your
              range as a suited one.
            </P>
            <P>
              That is why the combo counter matters. Type <Strong>TT+</Strong> and you get 5 pairs, which
              is 30 combinations, or about 2.3% of all hands. It feels small because pairs are rare. The
              counter keeps you honest about how wide a range actually is, which is exactly what you need
              when you pair this with a{' '}
              <Link href="/tools/pot-odds-calculator" style={{ color: 'var(--green)' }}>
                pot odds calculation
              </Link>{' '}
              to decide whether a call is profitable.
            </P>

            <H2>Common mistakes with range charts</H2>
            <Summary>
              The biggest mistakes are treating a chart as a fixed rulebook, ignoring position and stack
              depth, and trying to memorize every hand instead of understanding the boundaries. Charts
              are a starting point, not a script.
            </Summary>
            <ul className="mb-4 space-y-3 list-disc pl-6" style={{ color: 'var(--text-secondary)' }}>
              <li><Strong>Treating one chart as universal.</Strong> A 100 big blind cash range is wrong for a 20 big blind tournament stack. Ranges shift with stack depth.</li>
              <li><Strong>Forgetting position.</Strong> The same hand is a raise on the button and a fold under the gun. Always read a chart together with the seat it belongs to.</li>
              <li><Strong>Memorizing instead of understanding.</Strong> You only need the edges of each range. Learn the weakest pair, weakest suited ace, and weakest broadway you play from each seat.</li>
              <li><Strong>Never deviating.</Strong> Against a clear weakness, the chart is the floor, not the ceiling. Adjust when you have a read.</li>
            </ul>

            <CTABox
              headline="Build the reflex, not just the knowledge"
              text="The grid shows you the answer. Poker Reflex makes the answer automatic. Swipe through real preflop spots, get instant GTO feedback, and watch your accuracy and ELO climb. 6-max and 9-max, every position, free to download."
            />

            <H2>Frequently asked questions</H2>
            <H3>What is a poker range?</H3>
            <P>
              A poker range is the full set of hands a player could have in a spot, not one specific
              holding. Since you never see their cards, you reason about every hand they would play the
              same way and respond to the whole group at once.
            </P>
            <H3>How do I read a 13x13 poker range chart?</H3>
            <P>
              Pocket pairs run down the diagonal from AA to 22. Suited hands are above the diagonal in
              the top right, offsuit hands are below it in the bottom left. Highlighted squares are in
              the range, and everything else is a fold.
            </P>
            <H3>What does notation like 66+ or AQs+ mean?</H3>
            <P>
              66+ is every pair from 66 to AA. AQs+ is every suited ace from AQs to AKs, with the ace
              fixed and the kicker climbing. The s means suited and the o means offsuit. A dash like
              A5s-A2s covers the suited aces in between.
            </P>
            <H3>How many hands should I open from each position?</H3>
            <P>
              You open tighter early and wider late. A common 6-max baseline is around 14% under the
              gun, near 26% in the cutoff, and about 39% on the button. Position is the reason: acting
              last after the flop lets you play more hands profitably.
            </P>
            <H3>What is the difference between 6-max and 9-max ranges?</H3>
            <P>
              With more players left to act, your hand has to beat more opponents, so early-position
              ranges in 9-max are tighter than in 6-max. The button and small blind stay wide in both
              formats because few players remain behind you.
            </P>
            <H3>Should I memorize poker ranges?</H3>
            <P>
              No. Learn the boundaries of each range instead: the weakest pair, the weakest suited ace,
              and the weakest broadway you play from each seat. Understanding why ranges shift by
              position and stack depth beats rote memorization.
            </P>
            <H3>Are these GTO ranges?</H3>
            <P>
              They are standard reference ranges for roughly 100 big blind cash games, rounded to be
              easy to learn. They are close to solver output for common spots but not exact GTO
              solutions, which change with stack depth, rake, and opponent tendencies. Use them as a
              starting point, then adjust.
            </P>

            {/* Back to tools */}
            <div className="mt-14 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
              <Link
                href="/tools"
                className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-80"
                style={{ color: 'var(--green)' }}
              >
                <span aria-hidden="true">&larr;</span>
                Back to Tools
              </Link>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </>
  )
}
