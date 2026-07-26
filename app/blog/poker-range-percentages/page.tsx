import type { Metadata } from 'next'
import { type ReactNode } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import QRCodeBlock from '@/components/QRCodeBlock'
import RangeGrid from '@/components/RangeGrid'
import { BRAND_ASSETS, SITE_URL, APP_STORE_URL, PLAY_STORE_URL } from '@/lib/brand'
import { parseRangeNotation, countCombos } from '@/lib/poker-ranges'

export const metadata: Metadata = {
  title: 'Poker Range Percentages: What 10%, 20% and 30% Look Like',
  description:
    'See exactly which hands make up a 5%, 10%, 15%, 20%, 30% or 40% poker range, with real combo counts and six 13x13 grids you can read at a glance.',
  keywords:
    'poker range percentages, what does a 20% range look like, top 15% of poker hands, top 10 percent of poker hands, convert poker range percentage to hands, how many combos in a poker range, poker range combos, poker range chart percentage',
  alternates: { canonical: `${SITE_URL}/blog/poker-range-percentages` },
  openGraph: {
    title: 'Poker Range Percentages: What 10%, 20% and 30% Look Like',
    description:
      'Six side-by-side 13x13 grids showing exactly which hands sit inside a 5%, 10%, 15%, 20%, 30% and 40% range, with the combo count for each.',
    url: `${SITE_URL}/blog/poker-range-percentages`,
    type: 'article',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poker Range Percentages, Decoded',
    description:
      'A 20% range is 266 combos, not 34 boxes on the grid. Here is exactly which hands make the cut.',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
}

// Every grid below is generated from its notation string by the site's own
// parser, so the printed combo counts and the coloured boxes can never drift
// apart. Ordering follows the PokerStove / Equilab convention (hand equity
// against three random hands), which is what a reader gets if they check.
function band(notation: string) {
  const hands = parseRangeNotation(notation)
  const { combos, percent } = countCombos(hands)
  return {
    notation,
    hands: Array.from(hands),
    boxes: hands.size,
    combos,
    percent,
    boxPercent: (hands.size / 169) * 100,
  }
}

const B5 = band('99+, AJs+, KQs, AKo')
const B10 = band('88+, A9s+, KTs+, QTs+, AJo+, KQo')
const B15 = band('77+, A7s+, K9s+, QTs+, JTs, ATo+, KTo+, QJo')
const B20 = band('66+, A4s+, K9s+, Q9s+, J9s+, T9s, A9o+, KTo+, QTo+, JTo')
const B30 = band('55+, A2s+, K5s+, Q7s+, J8s+, T8s+, 98s, A7o+, A5o, K9o+, Q9o+, J9o+, T9o')
const B40 = band('44+, A2s+, K2s+, Q4s+, J7s+, T7s+, 97s+, 87s, A3o+, K7o+, Q8o+, J8o+, T9o')

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Poker Range Percentages: What a 10%, 20% or 30% Range Actually Looks Like',
  description:
    'A visual decoder for poker range percentages: why a percentage counts combinations and not grid boxes, the 6-4-12 weighting, and six 13x13 grids showing the top 5%, 10%, 15%, 20%, 30% and 40% of hands with exact combo counts.',
  author: { '@type': 'Organization', name: 'Poker Reflex' },
  publisher: {
    '@type': 'Organization',
    name: 'Poker Reflex',
    logo: { '@type': 'ImageObject', url: BRAND_ASSETS.squareLogoUrl },
  },
  image: BRAND_ASSETS.squareLogoUrl,
  datePublished: '2026-07-26',
  dateModified: '2026-07-26',
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/poker-range-percentages` },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a 20% range look like in poker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 20% range is about 266 of the 1,326 possible starting hands. Using the standard equity ordering that works out to 66+, A4s+, K9s+, Q9s+, J9s+, T9s, A9o+, KTo+, QTo+ and JTo, which is exactly 266 combos or 20.1%. On the 13x13 grid that fills 40 of the 169 boxes, clustered in the top-left corner.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many combos are in a poker range?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Multiply the percentage by 13.26. There are 1,326 total combinations, so 1% is 13.26 combos: a 10% range is about 133 combos, a 20% range about 265, and a 45% button opening range about 597. Counting the other way, weight each grid box 6 combos for a pocket pair, 4 for a suited hand and 12 for an offsuit hand.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the top 10% of poker hands?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Roughly 88+, A9s+, KTs+, QTs+, AJo+ and KQo, which is 130 combos or 9.8% of all hands. That is only 21 of the 169 boxes on the grid, so a 10% range is tighter than most players picture: no suited connectors, no small pairs, and no offsuit hands below AJo apart from KQo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do pocket pairs make up such a small percentage of hands?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because each pair is only 6 combinations while each offsuit hand is 12. All 13 pocket pairs together are 78 combos, which is 5.88% of the 1,326 total, even though they take up 13 of the 169 boxes. One offsuit box like KQo carries twice the weight of a pair box.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does my chart 20% range look different from an equity tool 20% range?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Equity calculators sort hands by raw all-in strength against random hands, so their 20% includes a weak offsuit ace like A9o. Solver-built opening ranges sort by playability, so a real 20% open usually drops A9o and adds small pairs or suited connectors instead. Same size, different hands. Treat a percentage as a measurement of how wide a range is, not as a fixed hand list.',
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

const TH = ({ children }: { children: ReactNode }) => (
  <th
    scope="col"
    className="text-left px-4 py-3 font-heading font-semibold"
    style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}
  >
    {children}
  </th>
)

const TD = ({ children, head = false, last = false }: { children: ReactNode; head?: boolean; last?: boolean }) => (
  <td
    className="px-4 py-3"
    style={{
      color: head ? 'var(--text)' : 'var(--text-secondary)',
      borderBottom: last ? undefined : '1px solid var(--border)',
    }}
  >
    {children}
  </td>
)

const TABLE_STYLE = {
  borderCollapse: 'separate' as const,
  borderSpacing: 0,
  border: '1px solid var(--border)',
  borderRadius: '12px',
  overflow: 'hidden',
  minWidth: '520px',
}

const WEIGHTS = [
  { type: 'Pocket pairs', boxes: '13', each: '6', total: '78', share: '5.9%' },
  { type: 'Suited hands', boxes: '78', each: '4', total: '312', share: '23.5%' },
  { type: 'Offsuit hands', boxes: '78', each: '12', total: '936', share: '70.6%' },
]

const CHEATSHEET = [
  { range: 'AA', combos: '6', pct: '0.45%' },
  { range: 'AKs', combos: '4', pct: '0.30%' },
  { range: 'AK (suited and offsuit)', combos: '16', pct: '1.21%' },
  { range: 'QQ+', combos: '18', pct: '1.36%' },
  { range: 'TT+', combos: '30', pct: '2.26%' },
  { range: 'Suited connectors, JTs down to 54s', combos: '28', pct: '2.11%' },
  { range: '22+ (every pocket pair)', combos: '78', pct: '5.88%' },
  { range: 'Any two broadway cards', combos: '190', pct: '14.33%' },
  { range: 'Any ace', combos: '198', pct: '14.93%' },
  { range: 'Any suited hand', combos: '312', pct: '23.53%' },
  { range: 'Any offsuit non-pair', combos: '936', pct: '70.59%' },
  { range: 'Any two cards', combos: '1,326', pct: '100%' },
]

export default function PokerRangePercentagesArticle() {
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
            Poker Range Percentages: What a 10%, 20% or 30% Range Actually Looks Like
          </h1>
          <div className="flex items-center gap-4 mb-10 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <span>By Poker Reflex</span>
            <span>·</span>
            <span>July 26, 2026</span>
            <span>·</span>
            <span>11 min read</span>
          </div>

          <div className="prose-article" style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>

            {/* Intro */}
            <p>
              You read a chart that says &ldquo;open 22% from the cutoff&rdquo;, or a video where the coach
              mentions a villain who &ldquo;3-bets 8%&rdquo;, and you nod along. But if someone handed you a
              blank grid and asked you to shade in that 22%, could you? Most players can&apos;t, and it&apos;s
              not because they&apos;re bad at poker. It&apos;s because almost nobody explains what the
              percentage is a percentage <S>of</S>.
            </p>
            <p className="mt-4">
              Here&apos;s the answer up front, because it&apos;s the part every other guide skips: a range
              percentage counts <S>combinations</S>, not squares on the grid. There are 1,326 possible starting
              hands but only 169 boxes, and those boxes are wildly different sizes. Get that backwards and every
              number you read will be off. This guide fixes it, then shows you six grids so you can see exactly
              what 5%, 10%, 15%, 20%, 30% and 40% look like. If shorthand like A4s+ or 66+ still reads as code,
              our <A href="/blog/poker-hand-notation">hand notation guide</A> decodes it first.
            </p>

            {/* H2 1 */}
            <H2>Why 20% of the Grid Isn&apos;t a 20% Range</H2>
            <p>
              A deck of 52 cards makes exactly <S>1,326 two-card combinations</S> (52 × 51 ÷ 2). But we don&apos;t
              think about AhKh and AsKs separately, because they play the same, so we collapse them into
              <S> 169 strategically distinct hands</S>: 13 pocket pairs, 78 suited hands, 78 offsuit hands. That
              collapse is what makes the 13x13 grid readable. It&apos;s also what makes it lie to you.
            </p>
            <p className="mt-4">
              The grid draws all 169 boxes the same size. The deck doesn&apos;t. Offsuit hands take up 78 boxes,
              the same as suited hands, but they account for <S>936 of the 1,326 combinations</S> while suited
              hands account for only 312. So offsuit hands are 46% of the grid by area and over <S>70% of the
              hands you&apos;ll actually be dealt</S>. Count boxes and you&apos;ll be wrong every time.
            </p>

            {/* H2 2 */}
            <H2>The 6-4-12 Rule: One Offsuit Box Outweighs Three Suited Ones</H2>
            <p>
              Every box on the grid is worth a fixed number of combinations. A pocket pair box is <S>6</S>, because
              there are six ways to pick two cards from four of the same rank. A suited box is <S>4</S>, one per
              suit. An offsuit box is <S>12</S>, four choices for the first card times three remaining suits for
              the second.
            </p>
            <figure className="mt-6 mb-6 overflow-x-auto">
              <table
                aria-label="How the 169 boxes on a poker hand grid map to the 1,326 possible starting hand combinations. Pocket pairs are 13 boxes worth 6 combos each for 78 total or 5.9 percent. Suited hands are 78 boxes worth 4 combos each for 312 total or 23.5 percent. Offsuit hands are 78 boxes worth 12 combos each for 936 total or 70.6 percent."
                className="w-full text-sm"
                style={TABLE_STYLE}
              >
                <thead>
                  <tr style={{ backgroundColor: 'rgba(74, 222, 128, 0.08)' }}>
                    <TH>Hand type</TH>
                    <TH>Boxes</TH>
                    <TH>Combos each</TH>
                    <TH>Total combos</TH>
                    <TH>Share of all hands</TH>
                  </tr>
                </thead>
                <tbody>
                  {WEIGHTS.map((w, i) => (
                    <tr key={w.type} style={{ backgroundColor: i % 2 === 0 ? 'var(--surface)' : 'var(--background)' }}>
                      <TD head>{w.type}</TD>
                      <TD>{w.boxes}</TD>
                      <TD>{w.each}</TD>
                      <TD>{w.total}</TD>
                      <TD>{w.share}</TD>
                    </tr>
                  ))}
                  <tr style={{ backgroundColor: 'rgba(74, 222, 128, 0.08)' }}>
                    <TD head last>Total</TD>
                    <TD last>169</TD>
                    <TD last>&nbsp;</TD>
                    <TD last>1,326</TD>
                    <TD last>100%</TD>
                  </tr>
                </tbody>
              </table>
              <figcaption className="text-xs mt-3 text-center" style={{ color: 'var(--text-secondary)', opacity: 0.75 }}>
                The grid shows 169 equal boxes. The deck deals 1,326 combinations, and they are not spread evenly.
              </figcaption>
            </figure>
            <p>
              Now the consequence, which is the single most useful thing on this page.{' '}
              <S>KQo alone costs you as much range percentage as KQs, KJs and KTs combined.</S> One offsuit box
              is 12 combos, three suited boxes are 12 combos. That&apos;s why adding a few weak offsuit hands
              blows up a range percentage so fast: putting A5o through A2o into your range adds 48 combos
              (3.6% of all hands), while A5s through A2s adds only 16 (1.2%). Same four boxes on the grid, triple
              the cost. If you want the strategic side of that split, our{' '}
              <A href="/blog/suited-vs-offsuit">suited vs offsuit guide</A> covers what those extra combos are
              actually worth.
            </p>

            {/* H2 3 */}
            <H2>What the Top 5%, 10% and 15% of Poker Hands Look Like</H2>
            <p>
              Ranges are built by taking hands in order of strength until you hit your target number of combos.
              The grids below use the ordering equity calculators like PokerStove and Equilab use, which ranks
              each hand by how it performs all-in against random opposition. Every combo count is computed from
              the notation string printed under it, so you can check the arithmetic yourself.
            </p>
            <p className="mt-4">
              Start tight. The top 5% is smaller than almost anyone pictures: big pairs, the best suited
              broadways, and AK offsuit. That&apos;s it.
            </p>
            <RangeGrid
              title="Top 5% of hands"
              caption={`${B5.notation} · ${B5.combos} combos · ${B5.percent.toFixed(1)}% of all hands · ${B5.boxes} of 169 boxes`}
              ariaLabel="A 5 percent poker range grid: pocket pairs nine-nine and better, ace-jack suited and better, king-queen suited, and ace-king offsuit. 64 combinations, 11 boxes."
              inRangeHands={B5.hands}
            />
            <RangeGrid
              title="Top 10% of hands"
              caption={`${B10.notation} · ${B10.combos} combos · ${B10.percent.toFixed(1)}% of all hands · ${B10.boxes} of 169 boxes`}
              ariaLabel="A 10 percent poker range grid: pocket pairs eight-eight and better, ace-nine suited and better, king-ten suited and better, queen-ten suited and better, ace-jack offsuit and better, and king-queen offsuit. 130 combinations, 21 boxes."
              inRangeHands={B10.hands}
            />
            <RangeGrid
              title="Top 15% of hands"
              caption={`${B15.notation} · ${B15.combos} combos · ${B15.percent.toFixed(1)}% of all hands · ${B15.boxes} of 169 boxes`}
              ariaLabel="A 15 percent poker range grid: pocket pairs seven-seven and better, ace-seven suited and better, king-nine suited and better, queen-ten suited and better, jack-ten suited, ace-ten offsuit and better, king-ten offsuit and better, and queen-jack offsuit. 200 combinations, 30 boxes."
              inRangeHands={B15.hands}
            />
            <p>
              Look at what happens between them. Going from 5% to 10% doubles the percentage but adds only
              10 boxes. Going from 10% to 15% adds another 9 boxes and 70 combos, and most of that weight is
              offsuit broadways, not new suited hands. The grid grows slowly while the percentage runs.
              For which of these hands are genuinely worth playing rather than just counted, see our{' '}
              <A href="/blog/poker-starting-hands">starting hands guide</A>.
            </p>

            {/* CTA 1 */}
            <CTABox
              headline="Stop Reading Ranges. Start Playing Them."
              text="Poker Reflex deals you real preflop spots and asks one question: open, fold, call or 3-bet. Instant GTO feedback, hand after hand, until the right answer stops being a chart lookup. Free to download."
            />

            {/* H2 4 */}
            <H2>What a 20%, 30% or 40% Range Looks Like</H2>
            <p>
              Now the wide bands, the ones people quote most often. Notice how the shading spreads down and to
              the right from the top-left corner, and how much of the new territory is offsuit.
            </p>
            <RangeGrid
              title="20% range"
              caption={`${B20.notation} · ${B20.combos} combos · ${B20.percent.toFixed(1)}% of all hands · ${B20.boxes} of 169 boxes`}
              ariaLabel="A 20 percent poker range grid: pocket pairs six-six and better, ace-four suited and better, king-nine suited and better, queen-nine suited and better, jack-nine suited and better, ten-nine suited, ace-nine offsuit and better, king-ten offsuit and better, queen-ten offsuit and better, and jack-ten offsuit. 266 combinations, 40 boxes."
              inRangeHands={B20.hands}
            />
            <RangeGrid
              title="30% range"
              caption={`${B30.notation} · ${B30.combos} combos · ${B30.percent.toFixed(1)}% of all hands · ${B30.boxes} of 169 boxes`}
              ariaLabel="A 30 percent poker range grid: pocket pairs five-five and better, every suited ace, king-five suited and better, queen-seven suited and better, jack-eight suited and better, ten-eight suited and better, nine-eight suited, ace-seven offsuit and better plus ace-five offsuit, king-nine offsuit and better, queen-nine offsuit and better, jack-nine offsuit and better, and ten-nine offsuit. 400 combinations, 59 boxes."
              inRangeHands={B30.hands}
            />
            <RangeGrid
              title="40% range"
              caption={`${B40.notation} · ${B40.combos} combos · ${B40.percent.toFixed(1)}% of all hands · ${B40.boxes} of 169 boxes`}
              ariaLabel="A 40 percent poker range grid: pocket pairs four-four and better, every suited ace and every suited king, queen-four suited and better, jack-seven suited and better, ten-seven suited and better, nine-seven suited and better, eight-seven suited, ace-three offsuit and better, king-seven offsuit and better, queen-eight offsuit and better, jack-eight offsuit and better, and ten-nine offsuit. 530 combinations, 77 boxes."
              inRangeHands={B40.hands}
            />
            <p>
              Here&apos;s the payoff of the 6-4-12 rule in one line: the 40% range fills{' '}
              <S>{B40.boxes} of 169 boxes, which is {B40.boxPercent.toFixed(0)}% of the grid&apos;s area</S>,
              but only {B40.percent.toFixed(0)}% of the hands. The gap between area and percentage is the whole
              illusion. Tight ranges are suited-heavy, and suited hands are cheap, so a tight range always covers
              more of the grid than its percentage suggests.
            </p>
            <p className="mt-4">
              One oddity worth flagging before you spot it and think it&apos;s a bug: the 30% grid includes A5o
              but not A6o. That&apos;s correct. A5 makes the wheel straight, and that extra straight equity is
              enough to jump it ahead. Different tools also disagree about one or two hands right at the edge of
              any band, because several boundary hands are near-tied. The grids here follow the PokerStove and
              Equilab convention.
            </p>

            {/* H2 5 */}
            <H2>How to Convert a Range Percentage Into Combos (and Back)</H2>
            <p>
              You don&apos;t need a calculator for this. Since there are 1,326 combinations,{' '}
              <S>1% is 13.26 combos</S>. Multiply the percentage by 13 and you&apos;re within a couple of combos
              of the real number, which is close enough at the table.
            </p>
            <ul className="mt-4 space-y-2 pl-6 list-disc">
              <li>A 10% range is about <S>133 combos</S>.</li>
              <li>A 20% range is about <S>265 combos</S> (our grid above lands on {B20.combos}).</li>
              <li>An 8% 3-bet range is about <S>106 combos</S>.</li>
              <li>A 45% button open is about <S>597 combos</S>.</li>
            </ul>
            <p className="mt-4">
              Going the other way is just as easy. Count a written range by weighting each box 6, 4 or 12.
              Take &ldquo;TT+, AKs, AKo&rdquo;: five pocket pairs at 6 each is 30, plus 4 for AKs, plus 12 for
              AKo, which is <S>46 combos, or 3.5%</S>. That&apos;s a genuinely tight 4-bet-ish range, and now you
              can say so with a number instead of a feeling. To see how a range you&apos;ve written actually
              performs against a specific hand, drop it into our{' '}
              <A href="/tools/equity-calculator">equity calculator</A>.
            </p>

            {/* H2 6 */}
            <H2>Cheat Sheet: Common Ranges and Their Percentages</H2>
            <p>
              Reference table for the ranges that come up constantly. Every figure is exact.
            </p>
            <figure className="mt-6 mb-6 overflow-x-auto">
              <table
                aria-label="Reference table of common poker ranges with their exact combination counts and percentage of all 1,326 starting hands, from pocket aces at 6 combos and 0.45 percent up to any two cards at 1,326 combos and 100 percent."
                className="w-full text-sm"
                style={TABLE_STYLE}
              >
                <thead>
                  <tr style={{ backgroundColor: 'rgba(74, 222, 128, 0.08)' }}>
                    <TH>Range</TH>
                    <TH>Combos</TH>
                    <TH>% of all hands</TH>
                  </tr>
                </thead>
                <tbody>
                  {CHEATSHEET.map((c, i) => (
                    <tr key={c.range} style={{ backgroundColor: i % 2 === 0 ? 'var(--surface)' : 'var(--background)' }}>
                      <TD head last={i === CHEATSHEET.length - 1}>{c.range}</TD>
                      <TD last={i === CHEATSHEET.length - 1}>{c.combos}</TD>
                      <TD last={i === CHEATSHEET.length - 1}>{c.pct}</TD>
                    </tr>
                  ))}
                </tbody>
              </table>
              <figcaption className="text-xs mt-3 text-center" style={{ color: 'var(--text-secondary)', opacity: 0.75 }}>
                Combination counts for common ranges, out of the 1,326 possible starting hands.
              </figcaption>
            </figure>
            <p>
              The row that surprises people every time: <S>every pocket pair in the deck combined is under 6%
              of hands</S>. Thirteen boxes, 78 combos, 5.88%. So &ldquo;22+&rdquo; looks like a big commitment
              spread across the whole diagonal, and it&apos;s actually one of the smallest ranges you can name.
              You&apos;ll be dealt a pocket pair about once every 17 hands.
            </p>

            {/* H2 7 */}
            <H2>What Percentage Should You Actually Be Opening?</H2>
            <p>
              The numbers only matter once they attach to a decision. For 6-max cash at 100bb, standard opening
              frequencies land roughly here: <S>UTG around 17%, hijack around 21%, cutoff around 27%, button
              around 43%, small blind around 40%</S>. Treat those as bands rather than exact targets, because
              solvers and coaches genuinely differ by a few points.
            </p>
            <p className="mt-4">
              Translate one and it clicks. A 27% cutoff open is about <S>358 combos</S>, which sits between the
              20% and 30% grids above. So when you open from the cutoff, picture that 30% grid with its outer
              edge trimmed back a little. Reraising ranges are far tighter: a typical 3-bet is <S>6% to 9%</S>
              (roughly 80 to 120 combos) and a 4-bet is <S>2% to 3%</S>. Our{' '}
              <A href="/blog/what-is-a-3-bet-in-poker">3-bet guide</A> covers which hands fill that 8%, and the{' '}
              <A href="/blog/poker-positions">positions guide</A> explains why the number climbs the closer you
              get to the button.
            </p>

            {/* H2 8 */}
            <H2>Why Your Chart&apos;s 20% Doesn&apos;t Match an Equity Tool&apos;s 20%</H2>
            <p>
              If you compare the 20% grid above against a solver-built 20% opening range, they won&apos;t match,
              and neither one is broken. They&apos;re sorted by different things.
            </p>
            <p className="mt-4">
              Equity calculators rank hands by <S>raw all-in strength</S>. That pushes weak offsuit aces up,
              because A9o beats a random hand often enough. Real opening ranges are built for{' '}
              <S>playability</S>: how a hand performs postflop, in position, against a range that already folded
              its worst hands. By that measure A9o is mediocre (it makes weak top pairs and gets dominated),
              while small pairs and suited connectors are much better than their raw equity suggests, because
              they flop sets and draws that win big pots.
            </p>
            <p className="mt-4">
              The swap is almost exactly one for one. Drop A9o from the grid above and you free up 12 combos.
              Add 55 and 44 and you spend 12 combos. Same {B20.combos}-combo range, same 20%, meaningfully
              different hands. So the practical takeaway: <S>use a percentage as a measurement of how wide a
              range is, not as a hand list</S>. Two players can both open 20% and hold different cards.
              The fastest way to feel this is to build one yourself, which is what our{' '}
              <A href="/tools/range-visualizer">range visualizer</A> is for. Shade in your own 20%, save it, and
              compare it to the grid above.
            </p>

            {/* FAQ */}
            <H2>Common Questions About Range Percentages</H2>
            <p>
              <S>What does a 20% range look like in poker?</S>{' '}
              A 20% range is about 266 of the 1,326 possible starting hands. Using the standard equity ordering
              that works out to {B20.notation}, which is exactly {B20.combos} combos or {B20.percent.toFixed(1)}%.
              On the 13x13 grid that fills {B20.boxes} of the 169 boxes, clustered in the top-left corner.
            </p>
            <p className="mt-4">
              <S>How many combos are in a poker range?</S>{' '}
              Multiply the percentage by 13.26. There are 1,326 total combinations, so 1% is 13.26 combos: a 10%
              range is about 133 combos, a 20% range about 265, and a 45% button opening range about 597.
              Counting the other way, weight each grid box 6 combos for a pocket pair, 4 for a suited hand and
              12 for an offsuit hand.
            </p>
            <p className="mt-4">
              <S>What are the top 10% of poker hands?</S>{' '}
              Roughly {B10.notation}, which is {B10.combos} combos or {B10.percent.toFixed(1)}% of all hands.
              That&apos;s only {B10.boxes} of the 169 boxes on the grid, so a 10% range is tighter than most
              players picture: no suited connectors, no small pairs, and no offsuit hands below AJo apart from
              KQo.
            </p>
            <p className="mt-4">
              <S>Why do pocket pairs make up such a small percentage of hands?</S>{' '}
              Because each pair is only 6 combinations while each offsuit hand is 12. All 13 pocket pairs
              together are 78 combos, which is 5.88% of the 1,326 total, even though they take up 13 of the 169
              boxes. One offsuit box like KQo carries twice the weight of a pair box.
            </p>
            <p className="mt-4">
              <S>Why does my chart&apos;s 20% range look different from an equity tool&apos;s 20%?</S>{' '}
              Equity calculators sort hands by raw all-in strength against random hands, so their 20% includes a
              weak offsuit ace like A9o. Solver-built opening ranges sort by playability, so a real 20% open
              usually drops A9o and adds small pairs or suited connectors instead. Same size, different hands.
              Treat a percentage as a measurement of how wide a range is, not as a fixed hand list.
            </p>

            {/* Practice */}
            <H2>Putting It Into Practice</H2>
            <p>
              You can now read the language. &ldquo;Opens 22%&rdquo; is roughly 290 combos filling the upper-left
              of the grid, a bit wider than the 20% picture above. &ldquo;3-bets 8%&rdquo; is about 106 combos of
              premiums and blockers. &ldquo;He plays any two&rdquo; is 1,326. The percentages stop being noise and
              start being shapes you can picture.
            </p>
            <p className="mt-4">
              But percentages describe ranges, they don&apos;t make decisions. Knowing that the cutoff opens 27%
              doesn&apos;t help if you freeze when K9s is folded to you on the button. That gap closes through
              repetition, by seeing the same spots often enough that the answer arrives before the chart does.
              Go build a range on the <A href="/tools/range-visualizer">range visualizer</A> to make these
              shapes stick, and keep the{' '}
              <A href="/blog/poker-hand-notation">notation guide</A> handy for the shorthand.
            </p>

            {/* CTA 2 */}
            <CTABox
              headline="Turn Range Percentages Into Instant Decisions"
              text="Knowing that 20% is 266 combos is one thing. Making the right open, call, 3-bet or fold in two seconds is another. Poker Reflex drills every preflop spot by position and stack depth, with instant feedback and an ELO that tracks your progress. Free to download."
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
