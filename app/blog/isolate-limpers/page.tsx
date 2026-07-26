import type { Metadata } from 'next'
import { type ReactNode } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import QRCodeBlock from '@/components/QRCodeBlock'
import { BRAND_ASSETS, SITE_URL, APP_STORE_URL, PLAY_STORE_URL } from '@/lib/brand'

export const metadata: Metadata = {
  title: 'How to Isolate Limpers in Poker (Sizing and Ranges)',
  description:
    'How to isolate limpers in poker: the right raise sizing, which hands to punish them with by position, and when to just check or overlimp instead. With range grids.',
  keywords:
    'isolate limpers, isolating limpers poker, how to isolate limpers, iso raise poker, isolation raise, punishing limpers, poker limpers strategy, iso raise sizing',
  alternates: { canonical: `${SITE_URL}/blog/isolate-limpers` },
  openGraph: {
    title: 'How to Isolate Limpers in Poker (Sizing and Ranges)',
    description:
      'The right iso-raise sizing, which hands to punish limpers with by position, and when to skip it. With range grids and worked hands.',
    url: `${SITE_URL}/blog/isolate-limpers`,
    type: 'article',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Isolate Limpers in Poker',
    description: 'Iso-raise sizing, which hands to use by position, and when not to bother.',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Isolate Limpers in Poker (Sizing and Ranges)',
  description:
    'A complete guide to isolating limpers: what an iso-raise is, why it prints money, how big to size it, which hands to use by position, and when to skip it.',
  author: { '@type': 'Organization', name: 'Poker Reflex' },
  publisher: {
    '@type': 'Organization',
    name: 'Poker Reflex',
    logo: { '@type': 'ImageObject', url: BRAND_ASSETS.squareLogoUrl },
  },
  image: BRAND_ASSETS.squareLogoUrl,
  datePublished: '2026-07-04',
  dateModified: '2026-07-04',
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/isolate-limpers` },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does it mean to isolate a limper?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Isolating a limper means raising over their limp so you play the pot heads-up and in position against a weak, capped range. Instead of calling along, you raise to fold out the other players, take the initiative, and get one on one with the player who showed weakness by limping.',
      },
    },
    {
      '@type': 'Question',
      name: 'How big should an isolation raise be?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A good rule is your normal open size plus one big blind for every limper in the pot. If you normally open to 3bb and one player limps, raise to about 4bb. Two limpers, raise to about 5bb. Go bigger when you are out of position or the limpers are sticky, because you want to charge them to continue and deny their odds.',
      },
    },
    {
      '@type': 'Question',
      name: 'What hands should I isolate limpers with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wider than you would open, because a limper range is weak and capped. From late position you can isolate a huge range, since you will have position and the limper folds a lot. From early position, tighten up and lean on hands that flop well: pairs, suited aces, broadways, and suited connectors.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a limp raise in poker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A limp raise (or limp-reraise) is when a player limps in first, waits for someone behind them to raise, and then reraises. It is the opposite of an isolation raise: with an iso-raise you raise over someone else’s limp, while a limp-raise is a trap set by the limper before you ever acted. At low stakes it is almost always a monster, usually AA or KK, so fold your isolation bluffs and continue only with QQ+ and AK.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should you isolate a calling station?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, not as a bluff. Isolation works through fold equity, and a calling station will not fold, so you cannot isolate them by pushing them out. Against a station, raise your strong, value hands for a bigger pot and drop the wide isolation bluffs. You beat a station by value betting, not by trying to make them fold.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is isolating a limper the same as a 3-bet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. A limp is a call of the big blind, not a raise, so raising over a limp is the first raise in the pot, which is an open-raise (a 2-bet). A 3-bet is a reraise over an opening raise. So isolating a limper is an open, not a 3-bet, even though it feels aggressive.',
      },
    },
  ],
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

const H2 = ({ children }: { children: ReactNode }) => (
  <h2
    className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
    style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
  >
    {children}
  </h2>
)

const S = ({ children }: { children: ReactNode }) => (
  <strong style={{ color: 'var(--text)' }}>{children}</strong>
)

const A = ({ href, children }: { href: string; children: ReactNode }) => (
  <Link
    href={href}
    style={{ color: 'var(--green)' }}
    className="hover:opacity-80 transition-opacity underline underline-offset-2"
  >
    {children}
  </Link>
)

const RANKS = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2']

function handLabel(i: number, j: number): string {
  if (i === j) return RANKS[i] + RANKS[i]
  if (i < j) return RANKS[i] + RANKS[j] + 's'
  return RANKS[j] + RANKS[i] + 'o'
}

// A solid, wide default range for isolating a lone limper from the button.
// A guideline, not gospel: go wider vs a weak limper, tighter from earlier seats.
const BTN_ISO = new Set([
  'AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55', '44', '33', '22',
  'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s',
  'KQs', 'KJs', 'KTs', 'K9s', 'K8s', 'K7s', 'K6s', 'K5s',
  'QJs', 'QTs', 'Q9s', 'Q8s',
  'JTs', 'J9s', 'J8s',
  'T9s', 'T8s',
  '98s', '97s', '87s', '86s', '76s', '65s', '54s',
  'AKo', 'AQo', 'AJo', 'ATo', 'A9o', 'A8o',
  'KQo', 'KJo', 'KTo',
  'QJo', 'QTo', 'JTo',
])

function IsoGrid() {
  return (
    <figure className="mt-6 mb-6 overflow-x-auto">
      <div className="flex flex-wrap gap-4 mb-3 text-xs" style={{ color: 'var(--text-secondary)' }}>
        <span className="inline-flex items-center gap-2">
          <span style={{ width: 12, height: 12, borderRadius: 3, backgroundColor: 'rgba(74, 222, 128, 0.7)', display: 'inline-block' }} /> Isolate (raise)
        </span>
        <span className="inline-flex items-center gap-2">
          <span style={{ width: 12, height: 12, borderRadius: 3, backgroundColor: 'rgba(48, 54, 61, 0.9)', display: 'inline-block' }} /> Fold
        </span>
      </div>
      <div
        role="img"
        aria-label="An example isolation-raise range from the button against a single limper, shown on the 13 by 13 hand grid. It is a wide range: all pairs, all suited aces, most suited kings, the suited broadways and connectors, and the offsuit broadways."
        style={{ display: 'grid', gridTemplateColumns: 'repeat(13, minmax(30px, 1fr))', gap: 2, minWidth: 440 }}
      >
        {RANKS.map((_, i) =>
          RANKS.map((__, j) => {
            const label = handLabel(i, j)
            const inRange = BTN_ISO.has(label)
            return (
              <div
                key={`${i}-${j}`}
                className="flex items-center justify-center rounded"
                style={{
                  backgroundColor: inRange ? 'rgba(74, 222, 128, 0.18)' : 'rgba(48, 54, 61, 0.55)',
                  color: inRange ? 'var(--text)' : 'var(--text-secondary)',
                  fontSize: 10,
                  padding: '6px 2px',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                }}
              >
                {label}
              </div>
            )
          })
        )}
      </div>
      <figcaption className="text-xs mt-3 text-center" style={{ color: 'var(--text-secondary)', opacity: 0.75 }}>
        An example isolation range from the button against one limper (a guideline, roughly a third of hands). Go
        wider against a weak limper, tighter from earlier seats. Build and save your own on the{' '}
        <A href="/tools/range-visualizer">range visualizer</A>.
      </figcaption>
    </figure>
  )
}

export default function IsolateLimpersArticle() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main id="main-content" className="pt-20" style={{ backgroundColor: 'var(--background)' }}>
        <article className="max-w-[720px] mx-auto px-6 py-16">

          <Link href="/blog" className="inline-flex items-center gap-1 text-sm mb-8 transition-colors hover:opacity-80" style={{ color: 'var(--green)' }}>
            ← Back to Blog
          </Link>

          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4" style={{ color: 'var(--text)' }}>
            How to Isolate Limpers in Poker (Sizing and Ranges)
          </h1>
          <div className="flex items-center gap-4 mb-10 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <span>By Poker Reflex</span>
            <span>·</span>
            <span>July 4, 2026</span>
            <span>·</span>
            <span>10 min read</span>
          </div>

          <div className="prose-article" style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>

            {/* Intro */}
            <p>
              Walk into any low-stakes game, live or online, and you will find them: the limpers. A
              player just calls the big blind instead of raising, then another player limps behind, and
              suddenly there is a soft, passive pot sitting there. Most players do the wrong thing with
              it. They limp along too, or they fold and wait. The winning play is to{' '}
              <S>isolate</S>: raise over the limp, punish the weakness, and take the pot heads-up in
              position.
            </p>
            <p className="mt-4">
              This guide covers the isolation raise from top to bottom: what it is, why it is so
              profitable, exactly how big to size it, which hands to use from each position, and, just as
              important, the spots where you should not bother. If you have already read our companion
              piece on <A href="/blog/open-limping-poker">why open limping is a leak</A>, this is the
              other side of the coin: how to make money off the players who have that leak.
            </p>

            {/* What is it */}
            <H2>What It Means to Isolate a Limper</H2>
            <p>
              An <S>isolation raise</S> (an &ldquo;iso-raise&rdquo; or just &ldquo;iso&rdquo;) is a raise
              you make over one or more limpers, with the goal of getting the pot heads-up against the
              limper, in position. Instead of letting a bunch of players see a cheap flop, you raise to
              fold out everyone else and take on the one player who already told you they are weak.
            </p>
            <p className="mt-4">
              Notice this is still an <S>open-raise</S>, not a{' '}
              <A href="/blog/what-is-a-3-bet-in-poker">3-bet</A>. A limp is a call of the big blind, not a
              raise, so when you raise over it you are making the first real raise in the pot. If the
              bet-counting language trips you up, our guide to{' '}
              <A href="/blog/poker-hand-notation">poker hand notation</A> covers how bets are counted. The
              point is simple: isolating feels aggressive, but it is just a raise, and it should be a big
              part of your game against passive players.
            </p>

            {/* Why */}
            <H2>Why Punishing Limpers Prints Money</H2>
            <p>
              Isolating works because of what a limp tells you. Think about who limps. Strong hands raise.
              A player who just calls the big blind almost never has aces or kings sitting there, because
              they would want to build a pot. So the limper&apos;s range is <S>weak and capped</S>: middling
              cards, small pairs, weak aces, the occasional trap that is rare enough to ignore.
            </p>
            <p className="mt-4">
              That gives your iso-raise three edges stacked on top of each other:
            </p>
            <ul className="mt-4 space-y-2 pl-6 list-disc">
              <li><S>Dead money.</S> The limper already put a chip in with a hand they are ready to fold. When they fold, you win it.</li>
              <li><S>Initiative.</S> You are the raiser, so you get to fire the flop and win a lot of pots with a single continuation bet when the limper misses (which they usually do).</li>
              <li><S>Position.</S> When you isolate from later than the limper, you act last on every street. Position is the single biggest edge in poker, and isolating hands it to you for free.</li>
            </ul>
            <p className="mt-4">
              Put those together and the math is lovely. You are taking a weak range, out of position,
              heavy on hands that fold to a raise or miss the flop. That is exactly the opponent you want,
              and the iso-raise is how you manufacture that spot on demand.
            </p>

            {/* Sizing */}
            <H2>How Big to Make Your Iso-Raise</H2>
            <p>
              This is where most players get it wrong. They raise their normal opening size over a limp,
              the limper calls with position-agnostic junk because the price is fine, and the whole point
              is lost. Limpers are sticky, so you have to <S>charge them more</S> to continue. The rule of
              thumb is clean:
            </p>
            <p className="mt-4" style={{ fontSize: '20px', color: 'var(--text)', fontWeight: 600 }}>
              Your normal open size, plus 1 big blind for every limper in the pot.
            </p>
            <figure className="mt-6 mb-6 overflow-x-auto">
              <table
                aria-label="Isolation raise sizing based on the number of limpers, assuming a normal open of 3 big blinds"
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
                    <th className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Limpers in the pot</th>
                    <th className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Iso-raise size (3bb open)</th>
                    <th className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Why</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ backgroundColor: 'var(--surface)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>1 limper</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>~4bb</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>3bb + 1bb for the limper</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--background)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>2 limpers</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>~5bb</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>3bb + 2bb for two limpers</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--surface)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)' }}>3 limpers</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)' }}>~6bb</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)' }}>3bb + 3bb for three limpers</td>
                  </tr>
                </tbody>
              </table>
              <figcaption className="text-xs mt-3 text-center" style={{ color: 'var(--text-secondary)', opacity: 0.75 }}>
                Add a little more when you are out of position or the limpers are stations. For a deeper
                look at raise sizes, see our <A href="/blog/poker-bet-sizing">bet sizing guide</A>.
              </figcaption>
            </figure>
            <p>
              Two adjustments matter. If you are <S>out of position</S> to the limper (rare, but it
              happens from the blinds), size up, because you want to win the pot preflop and not play a
              guessing game after the flop. And if the limpers are the sticky type who call anything, size
              up again, because you want your value hands to get paid and your weak hands are not folding
              anyone out anyway.
            </p>

            {/* Which hands */}
            <H2>Which Hands to Isolate With</H2>
            <p>
              Here is the fun part. Because the limper&apos;s range is so weak, you can isolate with a
              much wider range than you would normally open. You are not up against a raising range, you
              are up against a folding, missing, capped range. So the question is less &ldquo;is my hand
              strong&rdquo; and more &ldquo;does my hand flop well in position against a weak player.&rdquo;
            </p>
            <p className="mt-4">
              Position still sets the width, though, because it decides how many players are left behind
              you who could wake up with a real hand. If you have not internalized how position changes
              everything, our <A href="/blog/poker-positions">poker positions guide</A> is the companion
              read.
            </p>
            <ul className="mt-4 space-y-2 pl-6 list-disc">
              <li><S>Late position (button, cutoff):</S> isolate wide. There is almost no one left to act, you will have position, and the limper folds constantly. Pairs, suited aces, broadways, and suited connectors are all fair game.</li>
              <li><S>Middle position:</S> tighten up. There are still players behind who can 3-bet or wake up with a hand, so lean toward hands that make strong top pairs and good draws.</li>
              <li><S>Early position or out of position:</S> tightest. Isolate mostly for value, with hands that are happy to play a bigger pot, and cut the speculative stuff.</li>
            </ul>

            {/* Range grid */}
            <H2>An Example Iso Range From the Button</H2>
            <p>
              To make it concrete, here is a solid isolation range against a single limper when you are on
              the button. It is wide on purpose, roughly a third of all hands, because the button is the
              best seat and the limper is weak. Treat it as a starting point, not a law: widen it against
              a total nit who limp-folds everything, tighten it against a field that fights back.
            </p>

            <IsoGrid />

            <p>
              The shape tells the story. Every pair, every suited ace, most suited kings, all the suited
              broadways and connectors, plus the offsuit broadways. These are hands that either dominate
              the limper&apos;s range or flop well enough to barrel in position. Notice the trash offsuit
              hands are still folds, being in position does not turn 9-4 offsuit into a raise.
            </p>

            {/* CTA 1 */}
            <CTABox
              headline="Make Iso Spots Automatic"
              text="Poker Reflex drills preflop decisions hand by hand, including open, 3-bet, 4-bet, and all-in spots, with instant GTO feedback. Build the reflexes that turn a table full of limpers into free money. Free to download."
            />

            {/* Worked examples */}
            <H2>Three Worked Hands</H2>
            <p>
              Theory is nice, but you learn iso spots by seeing them. Three quick ones, at a $1/$2 table
              with 100bb stacks.
            </p>
            <p className="mt-4">
              <S>Hand 1, the standard iso.</S> It folds to a lone limper in middle position. You are on
              the button with A&#9824;9&#9824;. Raise to about 4bb (3bb + 1bb for the limper). You will
              almost always take it heads-up, in position, with a hand that flops top pair with a decent
              kicker and dominates most of what the limper called with. This is the bread-and-butter spot,
              and it should feel automatic.
            </p>
            <p className="mt-4">
              <S>Hand 2, isolating two limpers.</S> Two players limp and you are in the cutoff with
              K&#9829;J&#9829;. Raise to about 5bb (3bb + 2bb). KJ suited is a strong isolating hand, and
              the bigger size punishes both limpers and denies the price to the field behind you. If a
              limper calls, you have position and a hand that makes strong top pairs, flushes, and
              straights. To see how well KJs runs against a limp-calling range, drop both into the{' '}
              <A href="/tools/equity-calculator">equity calculator</A>.
            </p>
            <p className="mt-4">
              <S>Hand 3, when it is value only.</S> A known calling station limps under the gun and you
              have Q&#9827;Q&#9827; in the cutoff. Raise, but understand why: you are not isolating to make
              him fold, you are building a big pot with a big hand against a player who cannot let go. Size
              up, value bet the flop, and get paid. Against a station, the iso-raise stops being a bluff
              and becomes a value machine. He is{' '}
              <A href="/blog/poker-elasticity">inelastic</A>: his calling range barely shrinks when you
              size up, so a bigger raise collects more from the same hands.
            </p>

            {/* Limp-raise */}
            <H2>When the Limper Raises You Back: The Limp-Raise</H2>
            <p>
              Sooner or later you iso a limper and they come back over the top. That move has its own
              name, and it is worth knowing because people mix it up with the isolation raise
              constantly. A <S>limp-raise</S> (sometimes written limp-reraise) is when a player limps
              first, waits for someone behind to raise, and then reraises. It is the mirror image of
              what you have been doing all article: you raise <em>over</em> a limp, they raise{' '}
              <em>after</em> limping.
            </p>
            <p className="mt-4">
              The confusion is understandable, since both moves involve a limp and a raise. The
              difference is who acts first. An iso-raise is your opening raise into a passive field.
              A limp-raise is a trap that was set before you ever acted.
            </p>
            <p className="mt-4">
              Here is the part that matters at the table:{' '}
              <S>in low-stakes live games, a limp-raise is almost always a monster.</S> Players who
              limp-raise at $1/$2 are doing it with AA and KK, occasionally QQ or AK, and almost
              nothing else. They limped hoping someone would raise so they could spring the trap. It
              is a transparent play, and the correct response is to believe it.
            </p>
            <ul className="mt-4 space-y-2 pl-6 list-disc">
              <li><S>Fold your isolation bluffs immediately.</S> All those suited connectors and weak suited aces you raised with are drawing nearly dead against the range that limp-raises. There is no shame here, they did their job the other 95% of the time.</li>
              <li><S>Continue only with hands that beat the trap range.</S> That means QQ+ and AK, and even AK is thin against a player who only ever does this with aces and kings.</li>
              <li><S>Set-mine only if the money is deep enough.</S> Small pairs can call if you are deep and the implied odds are there. Our <A href="/blog/set-mining-poker">set mining guide</A> has the exact rule for how much you need behind.</li>
              <li><S>Adjust after you see it once.</S> A player who limp-raises is telling you their limping range is not uniformly weak. Tighten your isolation range against that specific opponent, or size up so the trap costs them more.</li>
            </ul>
            <p className="mt-4">
              Should you limp-raise yourself? Almost never. It only works against opponents who raise
              limps aggressively, it turns your strongest hands face up when it does not get through,
              and it forfeits the pot outright whenever the table checks through behind you. You are
              also limping, which is the leak our{' '}
              <A href="/blog/open-limping-poker">open limping guide</A> takes apart in detail.
              Raising your monsters is simpler and makes more money.
            </p>

            {/* When not to */}
            <H2>When Not to Isolate</H2>
            <p>
              Isolating is powerful, but it is not automatic. Fire it in the wrong spot and you turn a
              small edge into a leak. Skip the iso, or tighten it hard, in these cases.
            </p>
            <ul className="mt-4 space-y-2 pl-6 list-disc">
              <li><S>Against calling stations, as a bluff.</S> Isolation needs fold equity. A player who never folds cannot be isolated by force. Raise your value hands bigger and drop the wide bluffs.</li>
              <li><S>Multiway with limpers behind you.</S> If you raise and there are still three players left to act, you are not isolating anyone, you are bloating a multiway pot out of position. Tighten to real hands.</li>
              <li><S>Out of position and deep against a tricky limper.</S> Some limpers are trapping with monsters or floating you postflop. If you cannot realize your equity, do not inflate the pot.</li>
              <li><S>When your hand plays better as a cheap flop.</S> Sometimes a small suited connector wants to just come along and see a flop for one big blind rather than build a pot as the raiser.</li>
            </ul>

            {/* Overlimp */}
            <H2>Overlimping vs Isolating</H2>
            <p>
              The alternative to isolating is <S>overlimping</S>: just calling the big blind behind the
              limpers to see a cheap flop. It is usually the weaker play, but it has its spots. When the
              table is passive and multiway, when you are deep with a speculative hand that wants
              implied odds, and when raising would just isolate you against a stack you do not want to
              play a big pot with, overlimping can be fine.
            </p>
            <p className="mt-4">
              The mistake is defaulting to it. Most players overlimp far too often because raising feels
              scary. But every time you limp along with a hand that could have isolated, you give up the
              dead money, the initiative, and the fold equity that make the iso-raise so profitable. When
              in doubt, and especially in position, lean toward the raise.
            </p>

            {/* The other side */}
            <H2>The Other Side of the Coin</H2>
            <p>
              One last thing. The best way to appreciate why isolating works is to remember that you never
              want to be the player getting isolated. Limping into a pot hands a good player the exact
              free money we have been talking about. So punish limpers relentlessly, and do not become one
              yourself. Our guide to <A href="/blog/open-limping-poker">open limping</A> lays out why it
              leaks, and our <A href="/blog/preflop-poker-mistakes">common preflop mistakes</A> piece puts
              it alongside the other leaks that quietly drain a stack.
            </p>

            {/* FAQ */}
            <H2>Common Questions About Isolating Limpers</H2>
            <p>
              <S>What does it mean to isolate a limper?</S>{' '}
              It means raising over their limp so you play the pot heads-up and in position against a weak,
              capped range. Instead of calling along, you raise to fold out the field and get one on one
              with the player who showed weakness.
            </p>
            <p className="mt-4">
              <S>How big should an isolation raise be?</S>{' '}
              Your normal open size plus one big blind per limper. If you open to 3bb and one player limps,
              raise to about 4bb. Two limpers, about 5bb. Size up out of position or against sticky
              players.
            </p>
            <p className="mt-4">
              <S>What hands should I isolate with?</S>{' '}
              Wider than you would open, because the limper range is weak. Late position, isolate a huge
              range. Early position, tighten to hands that flop well: pairs, suited aces, broadways, and
              suited connectors.
            </p>
            <p className="mt-4">
              <S>What is a limp raise in poker?</S>{' '}
              A limp raise (or limp-reraise) is when a player limps in first, waits for someone behind
              them to raise, and then reraises. It is the opposite of an isolation raise: with an
              iso-raise you raise over someone else&rsquo;s limp, while a limp-raise is a trap set by
              the limper before you ever acted. At low stakes it is almost always a monster, usually
              AA or KK, so fold your isolation bluffs and continue only with QQ+ and AK.
            </p>
            <p className="mt-4">
              <S>Should you isolate a calling station?</S>{' '}
              Not as a bluff. Stations do not fold, so you cannot push them out. Raise your value hands
              bigger and drop the wide isolation bluffs. You beat a station by value betting.
            </p>
            <p className="mt-4">
              <S>Is isolating the same as a 3-bet?</S>{' '}
              No. A limp is a call, not a raise, so raising over it is an open-raise (a 2-bet). A 3-bet is
              a reraise over an opening raise.
            </p>

            {/* Practice */}
            <H2>Putting It Into Practice</H2>
            <p>
              Isolating limpers is one of the highest-return habits you can build at low stakes, because
              the tables are full of the exact passive players it punishes. The recipe is short: raise
              over the limp, size it to your open plus a big blind per limper, go wide in position and
              tighter out of position, and shut it down against players who cannot fold. Do that
              consistently and you will win a steady stream of pots that most players just let go.
            </p>
            <p className="mt-4">
              The hard part is doing it in the moment, hand after hand, without hesitating. That is a
              reflex, and reflexes come from reps. Build your own isolation ranges on the{' '}
              <A href="/tools/range-visualizer">range visualizer</A>, read up on the ranges you are
              raising with in our <A href="/blog/poker-starting-hands">starting hands guide</A>, and drill
              the decisions until raising over a limp is second nature.
            </p>

            {/* CTA 2 */}
            <CTABox
              headline="Train Your Preflop Game Today"
              text="Drill open, 3-bet, 4-bet, and all-in decisions across every position and stack depth, with instant feedback and an ELO that tracks your progress. Turn preflop theory into reflexes. Free to download."
            />

          </div>

          <div className="mt-16 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
            <Link href="/blog" className="inline-flex items-center gap-1 text-sm transition-colors hover:opacity-80" style={{ color: 'var(--green)' }}>
              ← Back to Blog
            </Link>
          </div>

        </article>
      </main>
      <Footer />
    </>
  )
}
