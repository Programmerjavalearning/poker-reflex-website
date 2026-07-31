import type { Metadata } from 'next'
import { type ReactNode } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import QRCodeBlock from '@/components/QRCodeBlock'
import { BRAND_ASSETS, SITE_URL, APP_STORE_URL, PLAY_STORE_URL } from '@/lib/brand'

export const metadata: Metadata = {
  title: "AK vs 22 Preflop: The Real Odds (It Isn't a Coin Flip)",
  description:
    'Exact odds for AK against pocket deuces, computed board by board. The three numbers everyone confuses, how the suits change it, and what it means for getting it in.',
  keywords:
    'ak vs 22 preflop, ak vs 22, aks vs 22, 22 vs ak odds, is ak vs 22 a coin flip, pocket pair vs two overcards odds, ak vs pocket pair all in, poker coin flip odds, pair vs overcards equity',
  alternates: { canonical: `${SITE_URL}/blog/ak-vs-22-preflop-odds` },
  openGraph: {
    title: "AK vs 22 Preflop: The Real Odds (It Isn't a Coin Flip)",
    description:
      'Exact odds for AK against pocket deuces, computed over all 1,712,304 boards, including how the shared suits move the number.',
    url: `${SITE_URL}/blog/ak-vs-22-preflop-odds`,
    type: 'article',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AK vs 22 Preflop, Exactly',
    description:
      'The deuces are a 53/47 favourite against AK offsuit. Against AK suited they are not favourites at all. Here is why.',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "AK vs 22 Preflop: The Real Odds (and Why It Isn't a Coin Flip)",
  description:
    'Exact equity for ace-king against pocket deuces, enumerated over every possible board, with the win, tie and equity numbers separated, the effect of shared suits, and what it means for shoving versus calling.',
  author: { '@type': 'Organization', name: 'Poker Reflex' },
  publisher: {
    '@type': 'Organization',
    name: 'Poker Reflex',
    logo: { '@type': 'ImageObject', url: BRAND_ASSETS.squareLogoUrl },
  },
  image: BRAND_ASSETS.squareLogoUrl,
  datePublished: '2026-07-31',
  dateModified: '2026-07-31',
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/ak-vs-22-preflop-odds` },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the odds of AK vs 22 preflop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Against AK offsuit, pocket deuces have about 53% equity and AK has about 47%. The exact figure depends on whether the hands share a suit: 53.04% for the deuces when no suits overlap, 52.65% when one overlaps, and 52.26% when both do. Against AK suited the deuces drop to roughly 50%, so the matchup is genuinely dead even.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is AK vs 22 really a coin flip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It is the closest thing to one in poker, but not exactly even. The deuces win around 52% of the time, AK wins around 47%, and about 0.6% of boards are split. Against a suited AK it does become an actual flip, with the two hands within a fifth of a percentage point of each other.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do the odds change when the hands share a suit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because shared suits remove flush outs from one hand. When AK holds a suit that neither deuce holds, AK has more live flush cards. Each shared suit costs the AK a little and gains the deuces a little, which is why the deuces go from 52.26% up to 53.04% as the overlap disappears.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do bigger pocket pairs beat AK more often?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but it stops mattering sooner than most players think. Against AK offsuit, pocket fives have 55.0% equity, pocket eights 55.6%, and pocket tens 57.3%. From tens upward the number stops climbing: jacks are 57.2% and queens 57.2%. Every pair from tens to queens is about a 57/43 favourite, no better.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should you call an all-in with AK against a small pair?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The matchup alone should not decide it. Shoving AK yourself is strong because opponents fold a large part of their range, and that fold equity is where the money comes from. Calling a shove removes all of it and leaves you as a small underdog to any pair. That is why AK is a much better hand to move all-in with than to call all-in with.',
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

const TABLE_STYLE = {
  borderCollapse: 'separate' as const,
  borderSpacing: 0,
  border: '1px solid var(--border)',
  borderRadius: '12px',
  overflow: 'hidden',
  minWidth: '560px',
}

// Every figure below comes from a full enumeration of all C(48,5) = 1,712,304 boards
// for the exact suit configuration named in the row.
type SuitRow = { config: string; win22: string; winAK: string; tie: string; eq: string; best?: boolean }

const SUIT_ROWS: SuitRow[] = [
  { config: 'No shared suit', win22: '52.75%', winAK: '46.67%', tie: '0.58%', eq: '53.04 / 46.96', best: true },
  { config: 'One shared suit', win22: '52.34%', winAK: '47.04%', tie: '0.62%', eq: '52.65 / 47.35' },
  { config: 'Both suits shared', win22: '51.93%', winAK: '47.42%', tie: '0.65%', eq: '52.26 / 47.74' },
]

type PairRow = { pair: string; eq: string; note: string }

const PAIR_ROWS: PairRow[] = [
  { pair: '22', eq: '53.04%', note: 'The classic flip. Barely ahead.' },
  { pair: '55', eq: '55.01%', note: 'Two points better than the deuces.' },
  { pair: '88', eq: '55.57%', note: 'Still climbing, but slowly.' },
  { pair: 'TT', eq: '57.28%', note: 'The peak. This is as good as it gets.' },
  { pair: 'JJ', eq: '57.25%', note: 'No better than tens.' },
  { pair: 'QQ', eq: '57.16%', note: 'No better than tens either.' },
]

export default function AkVs22Article() {
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
            AK vs 22 Preflop: The Real Odds (and Why It Isn&apos;t a Coin Flip)
          </h1>
          <div className="flex items-center gap-4 mb-10 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <span>By Poker Reflex</span>
            <span>·</span>
            <span>July 31, 2026</span>
            <span>·</span>
            <span>9 min read</span>
          </div>

          <div className="prose-article" style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>

            {/* Intro / snippet target */}
            <p>
              You got it all in with ace-king against pocket deuces, lost, and now you want to know
              whether you were even ahead. Short answer: you weren&apos;t.{' '}
              <S>Against AK offsuit, the deuces have about 53% equity and AK has about 47%.</S> The tiny
              pair is the favourite, every time, and the only reason anyone calls this a coin flip is
              that the margin is small enough to feel like one.
            </p>
            <p className="mt-4">
              But that number moves more than you&apos;d expect, and most sources quoting it are quoting
              a different figure without saying so. Every number in this article comes from enumerating
              all <S>1,712,304</S> possible boards for each exact suit combination, so you can check any
              of it yourself.
            </p>

            {/* H2 1 */}
            <H2>Win Percentage, Tie Percentage and Equity Are Three Different Numbers</H2>
            <p>
              This is why the internet cannot agree on this matchup. Search it and you will find 52.34%,
              52.65% and 52.8% quoted as if they were the same thing. They aren&apos;t.
            </p>
            <ul className="mt-4 space-y-2 pl-6 list-disc">
              <li><S>Win percentage</S> is how often the hand wins outright.</li>
              <li><S>Tie percentage</S> is how often the board plays and the pot is split. It is small here, around 0.6%, but it is not zero.</li>
              <li><S>Equity</S> is what you actually care about: wins plus half the ties. It is always slightly higher than the raw win percentage.</li>
            </ul>
            <p className="mt-4">
              Take one exact case, deuces against AK sharing a single suit. The deuces win{' '}
              <S>52.34%</S> of boards, AK wins <S>47.04%</S>, and <S>0.62%</S> split. Add half the ties
              to each and you get equity of <S>52.65 against 47.35</S>. Three correct numbers describing
              the same hand. If you have ever wondered why two sites give you different odds for an
              identical matchup, this is usually why. Our{' '}
              <A href="/blog/poker-equity-explained">guide to poker equity</A> covers what the number
              means and how to estimate it on the fly.
            </p>

            {/* H2 2 */}
            <H2>The Suits Change the Answer</H2>
            <p>
              Here is the part almost nobody publishes. &ldquo;AK vs 22&rdquo; is not one matchup, it is
              several, and which one you are in depends on how many suits the two hands share.
            </p>
            <figure className="mt-6 mb-6 overflow-x-auto">
              <table
                aria-label="Exact results for pocket deuces against ace-king offsuit by suit overlap. With no shared suit the deuces win 52.75 percent and hold 53.04 percent equity. With one shared suit they win 52.34 percent for 52.65 percent equity. With both suits shared they win 51.93 percent for 52.26 percent equity."
                className="w-full text-sm"
                style={TABLE_STYLE}
              >
                <thead>
                  <tr style={{ backgroundColor: 'rgba(74, 222, 128, 0.08)' }}>
                    <th scope="col" className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Suit overlap</th>
                    <th scope="col" className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>22 wins</th>
                    <th scope="col" className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>AK wins</th>
                    <th scope="col" className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Split</th>
                    <th scope="col" className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Equity</th>
                  </tr>
                </thead>
                <tbody>
                  {SUIT_ROWS.map((r, i) => (
                    <tr key={r.config} style={{ backgroundColor: i % 2 === 0 ? 'var(--surface)' : 'var(--background)' }}>
                      <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: i === SUIT_ROWS.length - 1 ? undefined : '1px solid var(--border)' }}>{r.config}</td>
                      <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: i === SUIT_ROWS.length - 1 ? undefined : '1px solid var(--border)' }}>{r.win22}</td>
                      <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: i === SUIT_ROWS.length - 1 ? undefined : '1px solid var(--border)' }}>{r.winAK}</td>
                      <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: i === SUIT_ROWS.length - 1 ? undefined : '1px solid var(--border)' }}>{r.tie}</td>
                      <td className="px-4 py-3" style={{ color: r.best ? 'var(--green)' : 'var(--text-secondary)', fontWeight: r.best ? 700 : 400, borderBottom: i === SUIT_ROWS.length - 1 ? undefined : '1px solid var(--border)' }}>{r.eq}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <figcaption className="text-xs mt-3 text-center" style={{ color: 'var(--text-secondary)', opacity: 0.75 }}>
                Pocket deuces against AK offsuit, enumerated over all 1,712,304 boards for each configuration.
              </figcaption>
            </figure>
            <p>
              The mechanism is flush outs. Every suit the AK shares with a deuce is a suit where one of
              its flush cards is already accounted for. Strip both overlaps away and AK gets its cleanest
              run at a flush, which is worth about <S>three quarters of a percentage point</S> across the
              whole matchup. Small, but it is the difference between the numbers you keep seeing quoted.
            </p>

            {/* CTA 1 */}
            <CTABox
              headline="Stop Finding Out After You Lose"
              text="Poker Reflex deals you real preflop spots and asks one question: open, fold, call or 3-bet. Instant GTO feedback, hand after hand, until the right answer arrives before the doubt does. Free to download."
            />

            {/* H2 3 */}
            <H2>Against a Suited AK, the Deuces Aren&apos;t Favourites at All</H2>
            <p>
              Now the result that surprises people. Give the ace-king a suit and the flip stops being a
              flip.
            </p>
            <p className="mt-4">
              <S>22 against AKs, no shared suit: 49.92 for the deuces, 50.08 for the ace-king.</S> The
              suited hand is very slightly ahead. If the deuces do hold one of AK&apos;s suits, it swings
              back to 50.30 against 49.70. Either way you are looking at the flattest matchup in
              hold&apos;em, decided by a rounding error.
            </p>
            <p className="mt-4">
              Being suited is worth roughly three points of equity here, which is a lot more than it is
              worth in most spots. That is because the deuces have almost no way to improve beyond a set,
              so the extra flushes go almost entirely uncontested. If you want the general version of
              that argument, our <A href="/blog/suited-vs-offsuit">suited vs offsuit guide</A> works
              through what suitedness is actually worth across the board.
            </p>

            {/* H2 4 */}
            <H2>Do Bigger Pairs Do Better? Up to a Point</H2>
            <p>
              The obvious next question is whether a bigger pair widens the gap. It does, and then it
              abruptly stops.
            </p>
            <figure className="mt-6 mb-6 overflow-x-auto">
              <table
                aria-label="Equity of various pocket pairs against ace-king offsuit with no shared suit. Deuces 53.04 percent, fives 55.01, eights 55.57, tens 57.28, jacks 57.25, queens 57.16. The figure peaks at pocket tens and does not improve for bigger pairs."
                className="w-full text-sm"
                style={{ ...TABLE_STYLE, minWidth: '460px' }}
              >
                <thead>
                  <tr style={{ backgroundColor: 'rgba(74, 222, 128, 0.08)' }}>
                    <th scope="col" className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Pair</th>
                    <th scope="col" className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Equity vs AKo</th>
                    <th scope="col" className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {PAIR_ROWS.map((r, i) => (
                    <tr key={r.pair} style={{ backgroundColor: i % 2 === 0 ? 'var(--surface)' : 'var(--background)' }}>
                      <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: i === PAIR_ROWS.length - 1 ? undefined : '1px solid var(--border)' }}>{r.pair}</td>
                      <td className="px-4 py-3" style={{ color: r.pair === 'TT' ? 'var(--green)' : 'var(--text-secondary)', fontWeight: r.pair === 'TT' ? 700 : 400, borderBottom: i === PAIR_ROWS.length - 1 ? undefined : '1px solid var(--border)' }}>{r.eq}</td>
                      <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: i === PAIR_ROWS.length - 1 ? undefined : '1px solid var(--border)' }}>{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <figcaption className="text-xs mt-3 text-center" style={{ color: 'var(--text-secondary)', opacity: 0.75 }}>
                All against AK offsuit with no shared suit, so the rows are directly comparable.
              </figcaption>
            </figure>
            <p>
              Read the bottom three rows again. <S>Tens, jacks and queens are all worth about 57%</S>,
              and if anything the number edges down as the pair grows. So the intuition that a big pair
              is meaningfully safer against AK is wrong past about tens. Queens against ace-king is the
              same race as tens against ace-king, which is worth remembering the next time you agonise
              over getting queens in preflop.
            </p>

            {/* H2 5 */}
            <H2>So Should You Get It In?</H2>
            <p>
              Here is the thing the odds table cannot tell you, and it matters far more than the
              matchup itself. <S>Shoving AK and calling a shove with AK are completely different
              decisions</S>, even though the hand and the equity are identical.
            </p>
            <p className="mt-4">
              When you move all in with ace-king, most of your profit doesn&apos;t come from winning the
              race. It comes from the hands that fold. Every time your opponent lays down a worse ace, a
              suited connector or a small pair they didn&apos;t want to flip with, you win the pot
              without seeing a flop. That is fold equity, and it is why AK is such a strong shoving hand
              at short stacks.
            </p>
            <p className="mt-4">
              Calling an all-in deletes that entirely. There is nothing left to fold out, so you are
              simply racing, and against any pair at all you are the underdog. The same hand that prints
              money as an aggressor becomes a marginal call the moment the chips come at you first.
            </p>
            <p className="mt-4">
              Which is why the honest answer to &ldquo;should I call off with AK here&rdquo; is almost
              never about the deuces. It is about everything else in their shoving range: the worse aces
              you dominate, the broadway hands you flip against, the big pairs that crush you. AK
              performs well against a wide shoving range and badly against a tight one, and the deuces
              are just one line in that calculation. Drop the whole range into our{' '}
              <A href="/tools/equity-calculator">equity calculator</A> instead of eyeballing a single
              matchup.
            </p>
            <p className="mt-4">
              And once stacks are short enough that shove or fold is the only decision left, the whole
              question simplifies. Our <A href="/tools/push-fold-chart">push or fold chart</A> gives you
              the jamming ranges by position and stack, where AK is never a close call.
            </p>

            {/* FAQ */}
            <H2>Common Questions About AK vs 22</H2>
            <p>
              <S>What are the odds of AK vs 22 preflop?</S>{' '}
              Against AK offsuit, pocket deuces have about 53% equity and AK has about 47%. The exact
              figure depends on whether the hands share a suit: 53.04% for the deuces when no suits
              overlap, 52.65% when one overlaps, and 52.26% when both do. Against AK suited the deuces
              drop to roughly 50%, so the matchup is genuinely dead even.
            </p>
            <p className="mt-4">
              <S>Is AK vs 22 really a coin flip?</S>{' '}
              It is the closest thing to one in poker, but not exactly even. The deuces win around 52% of
              the time, AK wins around 47%, and about 0.6% of boards are split. Against a suited AK it
              does become an actual flip, with the two hands within a fifth of a percentage point of each
              other.
            </p>
            <p className="mt-4">
              <S>Why do the odds change when the hands share a suit?</S>{' '}
              Because shared suits remove flush outs from one hand. When AK holds a suit that neither
              deuce holds, AK has more live flush cards. Each shared suit costs the AK a little and gains
              the deuces a little, which is why the deuces go from 52.26% up to 53.04% as the overlap
              disappears.
            </p>
            <p className="mt-4">
              <S>Do bigger pocket pairs beat AK more often?</S>{' '}
              Yes, but it stops mattering sooner than most players think. Against AK offsuit, pocket
              fives have 55.0% equity, pocket eights 55.6%, and pocket tens 57.3%. From tens upward the
              number stops climbing: jacks are 57.2% and queens 57.2%. Every pair from tens to queens is
              about a 57/43 favourite, no better.
            </p>
            <p className="mt-4">
              <S>Should you call an all-in with AK against a small pair?</S>{' '}
              The matchup alone should not decide it. Shoving AK yourself is strong because opponents
              fold a large part of their range, and that fold equity is where the money comes from.
              Calling a shove removes all of it and leaves you as a small underdog to any pair. That is
              why AK is a much better hand to move all-in with than to call all-in with.
            </p>

            {/* Practice */}
            <H2>Putting It Into Practice</H2>
            <p>
              You now know the number better than almost anyone at your table: a shade over 53% for the
              deuces, dead even if the ace-king is suited, and about 57% for any pair from tens up. What
              you should take away is not the decimals though. It is that <S>the matchup is close enough
              to be irrelevant most of the time</S>, and the decision is really about fold equity and
              about the rest of the range.
            </p>
            <p className="mt-4">
              Which is a preflop skill, not a math skill. Knowing you were a 47% dog after the fact
              changes nothing. Recognising the spot before the chips go in is the part worth training.
            </p>

            {/* CTA 2 */}
            <CTABox
              headline="Train the Spot, Not the Post-Mortem"
              text="Poker Reflex drills open, 3-bet, 4-bet and all-in decisions across every position and stack depth, with instant feedback and an ELO that tracks your progress. Free to download."
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
