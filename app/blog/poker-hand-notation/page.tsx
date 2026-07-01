import type { Metadata } from 'next'
import { type ReactNode } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import QRCodeBlock from '@/components/QRCodeBlock'
import { BRAND_ASSETS, SITE_URL, APP_STORE_URL, PLAY_STORE_URL } from '@/lib/brand'

export const metadata: Metadata = {
  title: 'Poker Hand Notation Explained: AKs, AKo, 22+, ATs+',
  description:
    'Confused by AKs, AKo, 22+ or ATs+ in a poker chart? Learn exactly what suited, offsuit, the plus sign, and range shorthand mean, with a simple 13x13 grid.',
  keywords:
    'poker hand notation, poker hand notation explained, what does AKs mean, AKs vs AKo, suited vs offsuit poker, 22+ poker meaning, poker range notation, ATs+ meaning, how to read a poker chart',
  alternates: { canonical: `${SITE_URL}/blog/poker-hand-notation` },
  openGraph: {
    title: 'Poker Hand Notation Explained: AKs, AKo, 22+, ATs+',
    description:
      'What suited, offsuit, the plus sign, and range shorthand actually mean, with a simple 13x13 grid you can read at a glance.',
    url: `${SITE_URL}/blog/poker-hand-notation`,
    type: 'article',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poker Hand Notation Explained',
    description: 'AKs, AKo, 22+, ATs+ and the 13x13 grid, decoded in one read.',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Poker Hand Notation Explained: AKs, AKo, 22+, ATs+',
  description:
    'A complete guide to poker hand notation: suited and offsuit suffixes, the plus sign, range shorthand, the 13x13 grid, and how to read any range chart.',
  author: { '@type': 'Organization', name: 'Poker Reflex' },
  publisher: {
    '@type': 'Organization',
    name: 'Poker Reflex',
    logo: { '@type': 'ImageObject', url: BRAND_ASSETS.squareLogoUrl },
  },
  image: BRAND_ASSETS.squareLogoUrl,
  datePublished: '2026-07-01',
  dateModified: '2026-07-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/poker-hand-notation` },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does AKs mean in poker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AKs means Ace-King suited, both cards of the same suit (for example the ace and king of hearts). The little s stands for suited. AKo means Ace-King offsuit, the two cards in different suits. Written on its own with no suffix, AK means both, so AKs and AKo together.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between AKs and AKo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The suit and, because of it, the strength. AKs is suited, so it can make flushes and plays a little better, and there are only 4 combinations of it. AKo is offsuit and there are 12 combinations of it. That is why range charts often treat them differently, using AKs one way and AKo another.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does 22+ mean in poker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The plus sign means that pair and every stronger pair. So 22+ means every pocket pair from twos up to aces (22, 33, 44, all the way to AA). TT+ means tens and higher: TT, JJ, QQ, KK, AA.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does ATs+ mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ATs+ keeps the top card fixed (the ace) and moves the kicker up toward it. So ATs+ means ATs, AJs, AQs, and AKs, all suited. The plus always points up, never down. A2s+ would mean every suited ace from A2s through AKs.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many starting hands are there in poker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are 1,326 exact two-card combinations, but only 169 strategically distinct starting hands, because suits are interchangeable before the flop. Those 169 break down into 13 pocket pairs, 78 suited hands, and 78 offsuit hands, which is exactly what the 13x13 grid displays.',
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

function cellFor(i: number, j: number): { label: string; kind: 'pair' | 'suited' | 'offsuit' } {
  if (i === j) return { label: RANKS[i] + RANKS[i], kind: 'pair' }
  if (i < j) return { label: RANKS[i] + RANKS[j] + 's', kind: 'suited' }
  return { label: RANKS[j] + RANKS[i] + 'o', kind: 'offsuit' }
}

const CELL_STYLE: Record<'pair' | 'suited' | 'offsuit', { backgroundColor: string; color: string }> = {
  pair: { backgroundColor: 'rgba(251, 191, 36, 0.20)', color: 'var(--text)' },
  suited: { backgroundColor: 'rgba(74, 222, 128, 0.16)', color: 'var(--text)' },
  offsuit: { backgroundColor: 'rgba(239, 68, 68, 0.12)', color: 'var(--text-secondary)' },
}

function LegendDot({ color }: { color: string }) {
  return (
    <span
      style={{ width: 12, height: 12, borderRadius: 3, backgroundColor: color, display: 'inline-block' }}
    />
  )
}

function HandGrid() {
  return (
    <figure className="mt-6 mb-6 overflow-x-auto">
      <div className="flex flex-wrap gap-4 mb-3 text-xs" style={{ color: 'var(--text-secondary)' }}>
        <span className="inline-flex items-center gap-2">
          <LegendDot color="rgba(251, 191, 36, 0.7)" /> Pairs (the diagonal)
        </span>
        <span className="inline-flex items-center gap-2">
          <LegendDot color="rgba(74, 222, 128, 0.7)" /> Suited (top-right)
        </span>
        <span className="inline-flex items-center gap-2">
          <LegendDot color="rgba(239, 68, 68, 0.55)" /> Offsuit (bottom-left)
        </span>
      </div>
      <div
        role="img"
        aria-label="The 13 by 13 poker hand grid. Pocket pairs run down the diagonal from AA to 22, suited hands fill the top-right triangle, and offsuit hands fill the bottom-left triangle."
        style={{ display: 'grid', gridTemplateColumns: 'repeat(13, minmax(30px, 1fr))', gap: 2, minWidth: 440 }}
      >
        {RANKS.map((_, i) =>
          RANKS.map((__, j) => {
            const c = cellFor(i, j)
            return (
              <div
                key={`${i}-${j}`}
                className="flex items-center justify-center rounded"
                style={{
                  backgroundColor: CELL_STYLE[c.kind].backgroundColor,
                  color: CELL_STYLE[c.kind].color,
                  fontSize: 10,
                  padding: '6px 2px',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                }}
              >
                {c.label}
              </div>
            )
          })
        )}
      </div>
      <figcaption className="text-xs mt-3 text-center" style={{ color: 'var(--text-secondary)', opacity: 0.75 }}>
        The 13x13 grid holds all 169 starting-hand shapes: 13 pairs on the diagonal, 78 suited hands top-right,
        78 offsuit hands bottom-left. Build and color your own on the{' '}
        <A href="/tools/range-visualizer">range visualizer</A>.
      </figcaption>
    </figure>
  )
}

export default function HandNotationArticle() {
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
            Poker Hand Notation Explained: AKs, AKo, 22+, ATs+
          </h1>
          <div className="flex items-center gap-4 mb-10 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <span>By Poker Reflex</span>
            <span>·</span>
            <span>July 1, 2026</span>
            <span>·</span>
            <span>9 min read</span>
          </div>

          <div className="prose-article" style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>

            {/* Intro */}
            <p>
              You open a poker chart, a training app, or a solver output, and it hits you like a wall of
              code: AKs, AKo, 22+, ATs+, KJo+. It looks like a secret language. It isn&apos;t. It is a
              simple shorthand, and once you can read it, every range chart and strategy article suddenly
              makes sense. This guide decodes all of it, piece by piece.
            </p>
            <p className="mt-4">
              We will cover why hands get written this way, the <S>s</S> and <S>o</S> suffixes, the plus
              sign, the dashes, and the 13x13 grid that ties everything together. By the end you will read
              a line like &ldquo;22+, ATs+, KQs, AJo+&rdquo; at a glance and know exactly which hands it
              means. Notation is the alphabet of poker strategy. It is quick to learn, and it unlocks
              everything else.
            </p>

            {/* Why */}
            <H2>Why Poker Hands Get Written as AKs, AKo, and 22+</H2>
            <p>
              Start with a number that surprises people. There are exactly <S>1,326</S> different two-card
              hands you can be dealt in Hold&apos;em. Writing all of them out would be madness. So we use
              a shortcut, and it works because of one key fact: before the flop, <S>suits are
              interchangeable</S>. The ace and king of hearts play exactly the same as the ace and king of
              spades. Nothing about the strategy changes.
            </p>
            <p className="mt-4">
              Once you group hands that play the same, those 1,326 combinations collapse into just{' '}
              <S>169 strategically distinct hands</S>. That is a number you can actually work with. And
              those 169 hands split into three neat buckets:
            </p>
            <ul className="mt-4 space-y-2 pl-6 list-disc">
              <li><S>13 pocket pairs:</S> AA, KK, QQ, all the way down to 22.</li>
              <li><S>78 suited hands:</S> two different cards of the same suit, like AKs or T9s.</li>
              <li><S>78 offsuit hands:</S> two different cards of different suits, like AKo or T9o.</li>
            </ul>
            <p className="mt-4">
              Add them up: 13 plus 78 plus 78 equals 169. That is the whole universe of starting hands.
              Notation exists so you can describe a chunk of that universe in a single line instead of
              listing twenty hands by hand.
            </p>

            {/* Suited / offsuit */}
            <H2>The Suited (s) and Offsuit (o) Suffix, Decoded</H2>
            <p>
              This is the first and most important piece. The little letter after a two-card hand tells
              you the suits:
            </p>
            <ul className="mt-4 space-y-2 pl-6 list-disc">
              <li><S>s = suited.</S> Both cards share a suit. AKs is the ace and king of the same suit.</li>
              <li><S>o = offsuit.</S> The two cards are different suits. AKo is an ace and a king of different suits.</li>
            </ul>
            <p className="mt-4">
              A couple of conventions come with this. The <S>higher card is always written first</S>, so it
              is AK, never KA. And a two-card hand written with <S>no suffix at all</S> means both versions
              at once. When a chart just says &ldquo;AK,&rdquo; it means AKs and AKo together.
            </p>
            <p className="mt-4">
              The suffix is not just bookkeeping. It changes the count of how many ways you can be dealt the
              hand, which matters more than beginners expect:
            </p>
            <ul className="mt-4 space-y-2 pl-6 list-disc">
              <li><S>AKs = 4 combinations</S> (one for each suit).</li>
              <li><S>AKo = 12 combinations.</S></li>
              <li><S>AK = 16 combinations</S> (the 4 suited plus the 12 offsuit).</li>
            </ul>
            <p className="mt-4">
              That is why offsuit hands show up three times as often as their suited twins, and it is why
              charts treat them differently. A suited hand can make flushes, so it is worth more. You will
              constantly see ranges that include AKs but not AKo, or that 3-bet AJs while only calling with
              AJo. The suffix is doing real work.
            </p>
            <p className="mt-4">
              One more rule and it is a common trip-up: <S>pocket pairs never get a suffix</S>. A pair like
              QQ is two different suits by definition (you only hold one queen of each suit), so &ldquo;QQs&rdquo;
              is not a thing. Pairs are just written as the two ranks: AA, TT, 66. Each pair has 6 combinations.
            </p>

            {/* Pairs and plus */}
            <H2>Pocket Pairs and the Plus Sign: What 22+ and TT+ Really Mean</H2>
            <p>
              The plus sign is where a lot of people get lost, and it is genuinely simple once you hear the
              rule. The <S>plus means &ldquo;this hand and everything stronger.&rdquo;</S>
            </p>
            <p className="mt-4">
              For pocket pairs, stronger means higher. So the plus walks up the ladder of pairs:
            </p>
            <ul className="mt-4 space-y-2 pl-6 list-disc">
              <li><S>22+</S> means every pair from twos up: 22, 33, 44, 55, all the way to AA. That is all 13 pairs.</li>
              <li><S>TT+</S> means tens and higher: TT, JJ, QQ, KK, AA. Five pairs.</li>
              <li><S>QQ+</S> means QQ, KK, AA. Three pairs, the premium block.</li>
            </ul>
            <p className="mt-4">
              So when a chart tells you to open &ldquo;TT+,&rdquo; it is not one hand, it is a shorthand for
              opening every pair from tens up. Read the plus as &ldquo;and up&rdquo; and pairs become easy.
            </p>

            {/* Range shorthand */}
            <H2>Reading Range Shorthand: ATs+, A2s+, KJo+ and Dashes Like 55-88</H2>
            <p>
              Now the same plus sign on a non-pair. The logic is the same idea, &ldquo;and stronger,&rdquo;
              but here stronger has a direction: the <S>top card stays fixed and the kicker climbs up toward
              it</S>.
            </p>
            <ul className="mt-4 space-y-2 pl-6 list-disc">
              <li><S>ATs+</S> keeps the ace and moves the kicker up: ATs, AJs, AQs, AKs. Four hands, all suited.</li>
              <li><S>A2s+</S> is every suited ace: A2s, A3s, A4s, and so on up to AKs.</li>
              <li><S>KJo+</S> keeps the king and climbs the kicker: KJo, KQo. Two hands, offsuit.</li>
            </ul>
            <p className="mt-4">
              Here is the mistake to avoid, and almost everyone makes it once. The plus <S>always points
              up</S>, never down. ATs+ does not mean ATs, A9s, A8s. It means ATs and the better suited aces
              above it. If you catch yourself sliding the kicker downward, stop and flip it. Up toward the
              top card, every time.
            </p>
            <p className="mt-4">
              The last symbol is the dash, which marks a <S>range between two hands</S>. You see it most with
              pairs. <S>55-88</S> means 55, 66, 77, 88, the pairs from fives up to eights and nothing
              outside that band. It also shows up on runs of suited connectors, like 76s-54s for 76s, 65s,
              54s, but the pair version is the one you will meet first.
            </p>

            {/* Grid */}
            <H2>The 13x13 Grid: Where Every Notation Lives</H2>
            <p>
              Every chart, tool, and solver draws hands on the same map: a 13 by 13 grid. Once you see it,
              notation stops being abstract and becomes a place on the board. The columns run A, K, Q, down
              to 2, and so do the rows. Three regions:
            </p>
            <ul className="mt-4 space-y-2 pl-6 list-disc">
              <li>The <S>diagonal</S> (top-left to bottom-right) is the pocket pairs: AA, KK, QQ, down to 22.</li>
              <li>The <S>top-right triangle</S>, above the diagonal, is every suited hand.</li>
              <li>The <S>bottom-left triangle</S>, below the diagonal, is every offsuit hand.</li>
            </ul>
            <p className="mt-4">
              Suddenly the notation is spatial. &ldquo;22+&rdquo; is the whole diagonal. &ldquo;A2s+&rdquo;
              is the top row of suited aces. A tight range like QQ+ is just the top corner of the diagonal.
              Here is the full grid with each hand in its place.
            </p>

            <HandGrid />

            {/* Worked examples */}
            <H2>Worked Examples: Turning a Chart Line Into Real Hands</H2>
            <p>
              Theory is nice, but the skill is reading a live line of shorthand and knowing the exact hands.
              Let&apos;s decode two.
            </p>
            <p className="mt-4">
              <S>Example 1, a typical opening range:</S> &ldquo;22+, ATs+, KQs, AJo+&rdquo;. Break it into
              pieces:
            </p>
            <ul className="mt-4 space-y-2 pl-6 list-disc">
              <li><S>22+</S> is all 13 pocket pairs.</li>
              <li><S>ATs+</S> is ATs, AJs, AQs, AKs.</li>
              <li><S>KQs</S> is just that one hand, King-Queen suited.</li>
              <li><S>AJo+</S> is AJo, AQo, AKo.</li>
            </ul>
            <p className="mt-4">
              That one short line describes 13 pairs plus a handful of big suited and offsuit aces plus KQs,
              maybe two dozen hands, in eleven characters. That is the power of the shorthand.
            </p>
            <p className="mt-4">
              <S>Example 2, a tight reraising range:</S> &ldquo;QQ+, AK, A5s-A2s&rdquo;. This one:
            </p>
            <ul className="mt-4 space-y-2 pl-6 list-disc">
              <li><S>QQ+</S> is QQ, KK, AA.</li>
              <li><S>AK</S> (no suffix) is both AKs and AKo.</li>
              <li><S>A5s-A2s</S> is the suited wheel aces: A5s, A4s, A3s, A2s.</li>
            </ul>
            <p className="mt-4">
              If that last group looks familiar, it should. Those suited wheel aces are the classic blocker
              bluffs we cover in the <A href="/blog/poker-4-bet">4-bet guide</A>, and being able to read the
              notation is what lets you see why a range is built that way. For a fuller tour of which hands
              belong in your opening ranges, our <A href="/blog/poker-starting-hands">starting hands guide</A>{' '}
              lays them out position by position.
            </p>

            {/* CTA 1 */}
            <CTABox
              headline="See the Notation Come to Life"
              text="Poker Reflex puts real hands in front of you in real spots, so AKs and A5s stop being letters on a chart and become decisions you drill. Open, 3-bet, 4-bet, and all-in, with instant GTO feedback. Free to download."
            />

            {/* In the tools */}
            <H2>How Notation Shows Up in the Range Visualizer and Charts</H2>
            <p>
              The reason this matters so much is that every tool you will ever use speaks this language. Our{' '}
              <A href="/tools/range-visualizer">range visualizer</A> is literally the 13x13 grid from above:
              you paint hands onto it, and it thinks in exactly this notation. Type or click A2s+ and it
              lights up the whole row of suited aces.
            </p>
            <p className="mt-4">
              The same goes for the <A href="/tools/push-fold-chart">push or fold chart</A>, which lists
              short-stack shoving ranges in this shorthand, and for the GTO feedback inside the app, which
              refers to hands the same way. Learn the notation once and you can read all of it. It is the
              single prerequisite that makes every other resource usable. If you want the strategy layer
              underneath the symbols, <A href="/blog/gto-poker-for-beginners">GTO poker for beginners</A>{' '}
              is the natural next read, and <A href="/blog/poker-positions">poker positions</A> explains why
              ranges change seat to seat.
            </p>

            {/* Common mistakes */}
            <H2>Common Notation Mistakes New Players Make</H2>
            <p>
              A few small misreads cause most of the confusion. Knowing them in advance saves you from
              building the wrong range off a chart you read backwards.
            </p>
            <ul className="mt-4 space-y-2 pl-6 list-disc">
              <li><S>Thinking &ldquo;AK&rdquo; means only suited.</S> With no suffix it means both, all 16 combos of AKs and AKo.</li>
              <li><S>Reading the plus sign downward.</S> ATs+ climbs up to AKs, it does not slide down to A9s. The plus always points toward the top.</li>
              <li><S>Writing a pair with a suffix.</S> There is no such thing as &ldquo;AAs.&rdquo; Pairs are never suited, so they carry no suffix.</li>
              <li><S>Assuming every hand is equally likely.</S> An offsuit hand (12 combos) is three times as common as its suited version (4 combos), and pairs (6 combos) sit in between. This is exactly why blocker effects work.</li>
              <li><S>Confusing suited with connected.</S> K2s is suited but nowhere near connected. 98o is connected but not suited. They are two different properties.</li>
            </ul>

            {/* Cheat sheet */}
            <H2>Quick-Reference Cheat Sheet</H2>
            <p>
              Bookmark this. Once these seven lines click, you can read any range chart in the game.
            </p>
            <figure className="mt-6 mb-6 overflow-x-auto">
              <table
                aria-label="Poker hand notation quick-reference cheat sheet"
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
                    <th className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Notation</th>
                    <th className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>What it means</th>
                    <th className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ backgroundColor: 'var(--surface)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>XYs</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Suited (same suit)</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>AKs = Ace-King, same suit</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--background)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>XYo</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Offsuit (different suits)</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>AKo = Ace-King, different suits</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--surface)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>XY</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Both suited and offsuit</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>AK = AKs + AKo (16 combos)</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--background)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>XX</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>A pocket pair (no suffix)</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>QQ = a pair of queens</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--surface)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>NN+</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>That pair and every higher pair</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>22+ = all pairs, 22 to AA</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--background)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>XYs+</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Top card fixed, kicker climbs up</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>ATs+ = ATs, AJs, AQs, AKs</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--surface)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)' }}>NN-MM</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)' }}>A band of pairs between two ranks</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)' }}>55-88 = 55, 66, 77, 88</td>
                  </tr>
                </tbody>
              </table>
              <figcaption className="text-xs mt-3 text-center" style={{ color: 'var(--text-secondary)', opacity: 0.75 }}>
                The seven building blocks of poker hand notation. X and Y are card ranks, N and M are pair
                ranks.
              </figcaption>
            </figure>

            {/* FAQ */}
            <H2>Common Questions About Poker Hand Notation</H2>
            <p>
              <S>What does AKs mean in poker?</S>{' '}
              AKs means Ace-King suited, both cards of the same suit. The s stands for suited. AKo means
              Ace-King offsuit, the two cards in different suits. Written alone as AK, it means both.
            </p>
            <p className="mt-4">
              <S>What is the difference between AKs and AKo?</S>{' '}
              The suit, and the strength that comes with it. AKs is suited, can make flushes, and has only 4
              combinations. AKo is offsuit and has 12 combinations. Charts often use AKs one way and AKo
              another because of that difference.
            </p>
            <p className="mt-4">
              <S>What does 22+ mean in poker?</S>{' '}
              The plus means that pair and every stronger one. So 22+ is every pocket pair from twos up to
              aces. TT+ is TT, JJ, QQ, KK, AA.
            </p>
            <p className="mt-4">
              <S>What does ATs+ mean?</S>{' '}
              It keeps the top card fixed (the ace) and moves the kicker up: ATs, AJs, AQs, AKs, all suited.
              The plus always points up, never down.
            </p>
            <p className="mt-4">
              <S>How many starting hands are there in poker?</S>{' '}
              There are 1,326 exact combinations but only 169 strategically distinct hands, since suits are
              interchangeable preflop. Those 169 are 13 pairs, 78 suited hands, and 78 offsuit hands, which
              is exactly what the 13x13 grid shows.
            </p>

            {/* Practice */}
            <H2>Putting It Into Practice</H2>
            <p>
              Notation is the alphabet of poker. It looks intimidating for about five minutes, and then it
              disappears into the background and you just read hands. Suited is s, offsuit is o, no suffix
              means both, pairs stand alone, the plus climbs up, and the dash marks a band. That is the
              entire language.
            </p>
            <p className="mt-4">
              The fastest way to lock it in is to use it. Open the{' '}
              <A href="/tools/range-visualizer">range visualizer</A> and build a range by typing a line like
              &ldquo;22+, ATs+, KQs, AJo+,&rdquo; then watch it paint the grid. Read a{' '}
              <A href="/blog/poker-starting-hands">starting hands chart</A> now that the symbols make sense.
              And when you drill spots in the app, you will read the hands without even thinking about it.
              The notation was never the hard part. It was just the door.
            </p>

            {/* CTA 2 */}
            <CTABox
              headline="Train Your Preflop Game Today"
              text="Now that you can read any range chart, put it to work. Drill open, 3-bet, 4-bet, and all-in decisions across every position and stack depth, with instant feedback and an ELO that tracks your progress. Free to download."
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
