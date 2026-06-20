import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import QRCodeBlock from '@/components/QRCodeBlock'
import RangeGrid from '@/components/RangeGrid'
import { BRAND_ASSETS, SITE_URL, APP_STORE_URL, PLAY_STORE_URL } from '@/lib/brand'

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Poker Equity Explained: How to Read Your Win %',
  description:
    'Poker equity explained simply: what it means, how to estimate win % with the Rule of 2 and 4, equity vs pot odds, fold equity, and the key matchups to memorize.',
  keywords:
    'poker equity, what is equity in poker, how to calculate poker equity, rule of 2 and 4 poker, equity vs pot odds, fold equity, poker outs to equity, preflop matchup odds, required equity to call',
  alternates: { canonical: `${SITE_URL}/blog/poker-equity-explained` },
  openGraph: {
    title: 'Poker Equity Explained: How to Read Your Win %',
    description:
      'What poker equity means, how to estimate it fast with the Rule of 2 and 4, equity vs pot odds, fold equity, and the staple matchups to memorize.',
    url: `${SITE_URL}/blog/poker-equity-explained`,
    siteName: 'Poker Reflex',
    type: 'article',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poker Equity Explained: How to Read Your Win %',
    description:
      'What poker equity means, how to estimate it fast, equity vs pot odds, fold equity, and the staple matchups to memorize.',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
}

// ---------------------------------------------------------------------------
// JSON-LD
// ---------------------------------------------------------------------------

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Poker Equity Explained: How to Read Your Win Percentage',
  description:
    'A plain-English guide to poker equity: what it means, how to estimate it with the Rule of 2 and 4, equity vs pot odds, fold equity, equity vs a range, and the common matchups to memorize.',
  author: { '@type': 'Organization', name: 'Poker Reflex' },
  publisher: {
    '@type': 'Organization',
    name: 'Poker Reflex',
    logo: { '@type': 'ImageObject', url: BRAND_ASSETS.squareLogoUrl },
  },
  image: BRAND_ASSETS.squareLogoUrl,
  datePublished: '2026-06-20',
  dateModified: '2026-06-20',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/blog/poker-equity-explained`,
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
        text: 'Equity is your percentage share of the pot if the hand were run to showdown right now with no more betting. If you have 60 percent equity in a 100 dollar pot, your hand is worth 60 dollars on average. It is a snapshot of how often your hand wins, plus its share of ties, against the cards your opponent could be holding.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I calculate poker equity quickly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use the Rule of 2 and 4. Count your outs, the cards that improve you to the best hand. With one card to come, multiply outs by 2 for your rough equity. With two cards to come on the flop, multiply by 4. A flush draw has 9 outs, so about 18 percent on the turn or roughly 35 percent across both streets once you shave the slight over-count.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between equity and pot odds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Equity is how often you win the hand. Pot odds are the price the pot is offering you to call. You compare the two: if your equity is higher than the required equity the pot odds demand, calling is profitable. Equity alone never tells you to call, you always weigh it against the price.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much equity do I need to call a bet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the bet size relative to the pot. Against a half-pot bet you need about 25 percent equity, against a pot-sized bet about 33 percent, and against a 3 to 1 price about 25 percent. Smaller bets require less equity to call, which is why cheap draws are easy to continue with.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is fold equity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fold equity is the extra value you get from the chance your opponent folds to your bet. It is separate from your showdown equity (how often you win at showdown). When you semi-bluff a draw, your total equity is your chance to hit plus your chance to make them fold, which is why betting a draw is often more profitable than just calling with it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does poker equity change with more players?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and it usually drops. Your hand has to beat more opponents, so the same hand that is a favorite heads-up can be an underdog multiway. AKs is strong against one opponent but its equity falls as more players see the flop, which is why you often raise to thin the field with hands that play best heads-up.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a coinflip in poker really 50/50?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not exactly. A pair against two overcards, like 88 versus AKo, runs about 52.6 to 47.4 in the pair favor, so roughly 53/47, not a true 50/50. People call it a coinflip because it is close, but the small edge matters over many hands. Suitedness and connectedness shift it a point or two.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is equity realization?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Equity realization is how much of your raw equity you actually convert into winnings. You rarely see every hand to showdown, so position, initiative, and how easy your hand is to play all affect it. A hand might have 40 percent raw equity but only realize 35 percent out of position, which is why position matters so much.',
      },
    },
  ],
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const outsRows: string[][] = [
  ['Pair improving to a set', '2', '~4%', '~8%'],
  ['Gutshot straight draw', '4', '~9%', '~17%'],
  ['Two overcards', '6', '~13%', '~24%'],
  ['Open-ended straight draw (OESD)', '8', '~17%', '~31%'],
  ['Flush draw', '9', '~18%', '~35%'],
  ['Flush draw plus gutshot', '12', '~26%', '~45%'],
  ['Combo draw (flush plus OESD)', '15', '~33%', '~54%'],
]

const potOddsRows: string[][] = [
  ['Quarter pot', '1 to win 5', '~17%'],
  ['Third pot', '1 to win 4', '~20%'],
  ['Half pot', '1 to win 3', '25%'],
  ['Two-thirds pot', '2 to win 5', '~29%'],
  ['Full pot', '1 to win 2', '33%'],
  ['4 to 1 odds', '1 to win 4', '20%'],
  ['3 to 1 odds', '1 to win 3', '25%'],
  ['2 to 1 odds', '1 to win 2', '33%'],
]

const matchupRows: string[][] = [
  ['Pair vs two overcards (the race)', '88 vs AKo', '~53/47', 'The pair is a small favorite. People call it a coinflip because it is close.'],
  ['Pair vs one overcard (dominated)', '99 vs A8o', '~70/30', 'The pair is a big favorite. The lone overcard rarely saves the ace.'],
  ['Dominated ace', 'AKo vs AQo', '~73/27', 'Sharing the ace crushes the weaker kicker. Only a queen or running luck helps.'],
  ['Two higher cards vs two lower', 'AJo vs T9o', '~58/42', 'The bigger cards lead, but the connected lower hand has real life.'],
  ['Pair over pair', 'QQ vs 88', '~80/20', 'The bigger pair dominates. The underdog needs to hit a set.'],
]

const streetRows: string[][] = [
  ['Flop', 'You hold AhKh on Qh 7h 2c. Nine clean flush outs, two cards to come.', '~35%'],
  ['Turn (brick)', 'The 3s falls, no help. Still 9 outs, but only one card to come.', '~18%'],
  ['Turn (heart)', 'The 9h falls and you make the nut flush. Now you are a huge favorite.', '~95%+'],
  ['River (brick)', 'The 4d completes the board after the brick turn and you missed.', '0%'],
]

const sampleRange = ['AA', 'KK', 'QQ', 'JJ', 'AKs', 'AKo']

// ---------------------------------------------------------------------------
// Presentational helpers
// ---------------------------------------------------------------------------

function H2({ children }: { children: ReactNode }) {
  return (
    <h2
      className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
      style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
    >
      {children}
    </h2>
  )
}

function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-heading font-bold text-xl md:text-2xl mt-8 mb-4" style={{ color: 'var(--text)' }}>
      {children}
    </h3>
  )
}

function P({ children }: { children: ReactNode }) {
  return <p className="mt-4">{children}</p>
}

function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4" style={{ color: 'var(--text)', fontWeight: 500 }}>
      {children}
    </p>
  )
}

function S({ children }: { children: ReactNode }) {
  return <strong style={{ color: 'var(--text)' }}>{children}</strong>
}

function GL({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} style={{ color: 'var(--green)' }}>
      {children}
    </Link>
  )
}

function EL({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)' }}>
      {children}
    </a>
  )
}

const th3 = 'text-left px-4 py-3 font-heading font-semibold'
const td3 = 'px-4 py-3 align-top'

function ToolCallout() {
  return (
    <div
      className="rounded-2xl border p-6 my-8"
      style={{ backgroundColor: 'var(--surface)', borderColor: 'rgba(74, 222, 128, 0.35)' }}
    >
      <p className="mb-3" style={{ color: 'var(--text)', fontWeight: 600 }}>
        Try it as you read
      </p>
      <p className="mb-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        Type any two hands and an optional board into the free calculator and watch the win
        percentages move. No signup, runs in your browser.
      </p>
      <Link
        href="/tools/equity-calculator"
        className="inline-flex items-center gap-1.5 text-sm font-semibold"
        style={{ color: 'var(--green)' }}
      >
        Open the free poker equity calculator
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </div>
  )
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

export default function PokerEquityArticle() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Header />

      <main id="main-content" className="pt-20" style={{ backgroundColor: 'var(--background)' }}>
        <article className="max-w-[720px] mx-auto px-6 py-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm mb-8 transition-colors hover:opacity-80"
            style={{ color: 'var(--green)' }}
          >
            <span aria-hidden="true">&larr;</span> Back to Blog
          </Link>

          <h1
            className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4"
            style={{ color: 'var(--text)' }}
          >
            Poker Equity Explained: How to Read Your Win Percentage
          </h1>
          <div className="flex items-center gap-4 mb-10 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <span>By Poker Reflex</span>
            <span>&middot;</span>
            <span>June 20, 2026</span>
            <span>&middot;</span>
            <span>11 min read</span>
          </div>

          <div
            className="prose-article"
            style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-secondary)' }}
          >
            <p>
              Poker equity is one of those terms that gets thrown around at every table, usually by
              someone who half understands it. So let&apos;s fix that. Equity is just your share of the
              pot if the hand were dealt out to showdown right now, expressed as a percentage. If your
              hand wins 60 percent of the time against what your opponent could hold, you have 60 percent
              equity. That&apos;s the whole idea.
            </p>
            <P>
              Get this one concept right and a lot of poker suddenly makes sense. You&apos;ll know when a
              draw is worth chasing, when a call is profitable, and why some all-ins that feel like
              coinflips really aren&apos;t. This guide walks you through reading win percentages,
              estimating equity in your head with the Rule of 2 and 4, comparing equity to pot odds, fold
              equity, and the staple matchups worth memorizing. You can also test your own hands in our{' '}
              <GL href="/tools/equity-calculator">free poker equity calculator</GL> while you read.
            </P>

            <H2>What is equity in poker?</H2>
            <Lead>
              <S>Equity</S> is your percentage share of the pot if the hand ran all the way to showdown
              from this exact moment, with no more betting and no folding. It bakes together how often you
              win outright and your share of the times you tie. Think of it as the question, &quot;if we
              dealt the rest of the board a thousand times, how often does my hand end up best?&quot;
            </Lead>
            <P>
              Here&apos;s a clean preflop example. You have AKs and your opponent has QQ, all the chips
              going in before the flop. People assume the big slick is ahead, but it isn&apos;t. QQ is the
              favorite at roughly 54 percent (about 53.6 to 46.4), so your AKs is actually the underdog
              here. The pair stays ahead until you pair an ace or a king or make a straight or flush. That
              gap between what feels right and what the math says is exactly why equity matters.
            </P>
            <H3>Equity vs pot share vs expected value</H3>
            <P>
              These three get muddled, so let&apos;s separate them. <S>Equity</S> is the percentage of the
              pot your hand is worth on average right now. <S>Pot share</S> is that percentage applied to a
              real amount: 60 percent equity in a 100 dollar pot is a 60 dollar pot share.{' '}
              <S>Expected value (EV)</S> goes one step further and accounts for future betting, folds, and
              position, which is why your real long-run profit can be higher or lower than your raw equity
              suggests.
            </P>
            <H3>A quick example: your hand vs one opponent</H3>
            <P>
              You hold AhKh and your opponent turns over 7c7d. This is the classic race. Your two
              overcards plus the flush and straight potential give you a hair over 47 percent, while the
              pair sits a touch under 53. It feels even, and it nearly is, but the pair is the small
              favorite. Knowing that number stops you from overpaying to get it in and helps you read the
              board once the flop lands.
            </P>

            <H2>How to read equity from a calculator</H2>
            <Lead>
              An equity calculator does the heavy lifting you can only estimate by hand. You plug in two
              hands (and an optional board), and it deals out every remaining combination, or simulates a
              huge number of them, then reports the result. The output is three numbers, and once you know
              what they mean you can read any spot in a second.
            </Lead>
            <P>
              Go try a hand yourself in the <GL href="/tools/equity-calculator">free poker equity
              calculator</GL>. Type in AhKh versus 7c7d, leave the board blank, and you&apos;ll see the
              race numbers from the last section appear instantly. Then add a flop and watch them move.
            </P>
            <ToolCallout />
            <H3>Win percent, tie percent, and lose percent</H3>
            <P>
              Every readout splits into three parts. <S>Win percent</S> is how often your hand finishes as
              the only winner. <S>Tie percent</S> is how often you chop the pot, which matters more than
              people think on paired or straightening boards. <S>Lose percent</S> is the rest. Your true
              equity is your win percent plus half of any tie percent (because you only collect half the
              pot on a chop). The three always add up to 100.
            </P>
            <H3>Hand vs hand, and how to handle ranges</H3>
            <P>
              Putting one exact hand against another exact hand gives you a precise number, like AKs versus
              QQ, and that is exactly what our calculator does: hand vs hand with an optional board. But
              real opponents don&apos;t show you one hand, they have a <S>range</S> of possible holdings. To
              approximate your equity against a range, run your hand against the individual hands in that
              range one at a time and weigh the results. We&apos;ll come back to ranges near the end,
              because they quietly change everything.
            </P>

            <H2>How to estimate equity fast: the Rule of 2 and 4</H2>
            <Lead>
              You won&apos;t have a calculator open mid-hand, so you need a shortcut. The <S>Rule of 2 and
              4</S> is that shortcut, and it&apos;s good enough to make real decisions. Count the cards that
              improve you to the best hand (your <S>outs</S>), then do one tiny multiplication.
            </Lead>
            <ul className="mt-4 space-y-2 list-disc pl-6">
              <li>With <S>one card to come</S> (you&apos;re on the turn waiting for the river), multiply your outs by <S>2</S>.</li>
              <li>With <S>two cards to come</S> (you&apos;re on the flop and will see both turn and river), multiply your outs by <S>4</S>.</li>
            </ul>
            <P>
              A flush draw has 9 outs. On the flop that&apos;s roughly 9 times 4, about 36 percent to make
              it by the river. On the turn it&apos;s 9 times 2, about 18 percent. Those approximations are
              within a point or two of the true figures, which is plenty when the clock is ticking.
            </P>
            <H3>Counting your outs correctly</H3>
            <P>
              The trap is counting outs that don&apos;t actually win. If you have a flush draw but your
              opponent could hold a higher flush draw, some of your nine cards make you a loser, not a
              winner. Same with overcards that pair you into second best. Be honest about which cards truly
              give you the winning hand. And don&apos;t double count: a card that completes both a straight
              and a flush is one out, not two.
            </P>
            <H3>When the Rule of 4 overcounts (and the cap)</H3>
            <P>
              The Rule of 4 slightly overstates your equity once you get past about 8 outs, because it
              ignores that hitting on the turn removes a card from the river calculation. For big draws,
              shave a few points off. A combo draw with 15 outs isn&apos;t really 60 percent (15 times 4),
              it&apos;s closer to 54. A handy cap: above 8 outs, subtract roughly the number of outs beyond
              8 from your Rule of 4 total. For a deeper math walk-through, the{' '}
              <EL href="https://en.wikipedia.org/wiki/Poker_probability">poker probability reference</EL>{' '}
              lays out the exact odds.
            </P>

            <H2>Outs to equity reference table</H2>
            <Lead>
              Memorize this and you&apos;ll stop guessing. These are the draws that come up every session,
              mapped to their approximate equity with one card and two cards to come. The bigger draws use
              their true odds rather than the naive Rule of 2 and 4, so these are the practical numbers.
            </Lead>
            <figure className="mt-6 mb-6 overflow-x-auto">
              <table
                aria-label="Outs to equity reference table for common poker draws"
                className="w-full text-sm"
                style={{ borderCollapse: 'separate', borderSpacing: 0, border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}
              >
                <thead>
                  <tr style={{ backgroundColor: 'rgba(74, 222, 128, 0.08)' }}>
                    <th className={th3} style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Draw</th>
                    <th className={th3} style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Outs</th>
                    <th className={th3} style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Equity, one card</th>
                    <th className={th3} style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Equity, two cards</th>
                  </tr>
                </thead>
                <tbody>
                  {outsRows.map((row, i) => (
                    <tr key={row[0]} style={{ backgroundColor: i % 2 === 0 ? 'var(--surface)' : 'var(--background)' }}>
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className={td3}
                          style={{
                            color: j === 0 ? 'var(--text)' : 'var(--text-secondary)',
                            fontWeight: j === 0 ? 600 : 400,
                            borderBottom: i === outsRows.length - 1 ? undefined : '1px solid var(--border)',
                          }}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <figcaption className="text-xs mt-3 text-center" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>
                Common draws mapped to outs and approximate equity with one card (turn) and two cards (flop) to come.
              </figcaption>
            </figure>
            <P>
              Notice how a combo draw with 15 outs is basically a coinflip against a made hand. That&apos;s
              why people get all the money in with flush-and-straight draws and aren&apos;t crazy to do it.
            </P>

            <H2>Equity vs pot odds: when a call is actually profitable</H2>
            <Lead>
              Equity tells you how often you win. It does not, on its own, tell you whether to call. For
              that you need the price the pot is offering, which is your <S>pot odds</S>. The rule is
              simple: compare your equity to the <S>required equity</S> the bet demands. If your equity is
              higher, calling makes money. If it&apos;s lower, folding is correct (unless you have another
              reason, like implied odds, the extra money you expect to win on later streets when you hit).
            </Lead>
            <H3>Turning a bet size into required equity</H3>
            <P>
              Required equity is the size of the bet you&apos;re calling divided by the total pot after
              your call. If the pot is 100 and your opponent bets 50, you&apos;re calling 50 to win 150, so
              you need 50 divided by 200, which is 25 percent. A pot-sized bet (100 into 100) makes you
              call 100 to win 300, so you need 33 percent. Bigger bets demand more equity, smaller bets
              demand less. That&apos;s why a cheap flop bet is so easy to call with a draw. You can check
              any spot with the <GL href="/tools/pot-odds-calculator">pot odds calculator</GL> instead of
              doing the division yourself. The{' '}
              <EL href="https://en.wikipedia.org/wiki/Pot_odds">pot odds definition</EL> covers the
              underlying formula in full.
            </P>
            <H3>A worked call example with real numbers</H3>
            <P>
              You have a flush draw on the turn, so 9 outs, about 18 percent equity with one card to come.
              The pot is 80 and your opponent bets 20. You&apos;re calling 20 to win 120, which means you
              need 20 divided by 120, about 17 percent. Your 18 percent clears the 17 percent bar, so this
              is a profitable call even before counting the extra money you&apos;ll win when the flush
              comes in. Now flip the bet to 60 into 80 (a three-quarter pot bet): you&apos;re calling 60 to
              win 140, so you need 60 divided by 200, which is 30 percent. Your 18 percent is nowhere close,
              and you fold without a strong implied-odds reason.
            </P>

            <H2>Pot odds to required equity chart</H2>
            <Lead>
              Here&apos;s the conversion you&apos;ll use most. Keep these reference points in your head and
              you can price almost any call instantly, no calculator needed. The percentages are the equity
              you need for a break-even call.
            </Lead>
            <figure className="mt-6 mb-6 overflow-x-auto">
              <table
                aria-label="Pot odds to required equity conversion chart"
                className="w-full text-sm"
                style={{ borderCollapse: 'separate', borderSpacing: 0, border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}
              >
                <thead>
                  <tr style={{ backgroundColor: 'rgba(74, 222, 128, 0.08)' }}>
                    <th className={th3} style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Bet size or price</th>
                    <th className={th3} style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>You risk to win</th>
                    <th className={th3} style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Required equity</th>
                  </tr>
                </thead>
                <tbody>
                  {potOddsRows.map((row, i) => (
                    <tr key={row[0]} style={{ backgroundColor: i % 2 === 0 ? 'var(--surface)' : 'var(--background)' }}>
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className={td3}
                          style={{
                            color: j === 0 ? 'var(--text)' : 'var(--text-secondary)',
                            fontWeight: j === 0 ? 600 : 400,
                            borderBottom: i === potOddsRows.length - 1 ? undefined : '1px solid var(--border)',
                          }}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <figcaption className="text-xs mt-3 text-center" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>
                Common bet sizes and odds converted into the equity needed to call profitably.
              </figcaption>
            </figure>
            <P>
              So a half-pot bet and 3 to 1 odds are the same thing, both needing 25 percent. Once you see
              bet sizes and odds as two ways of saying the same number, calling decisions get a lot faster.
            </P>

            <H2>Fold equity: the other way to win</H2>
            <Lead>
              Everything so far has been <S>showdown equity</S>, your share if the hand goes to showdown.
              But there&apos;s a second kind: <S>fold equity</S>, the value you pick up when your opponent
              folds and you win the pot without a showdown at all.
            </Lead>
            <P>
              Fold equity is why betting a draw often beats calling with it. Say you have that flush draw
              with 18 percent to hit on the turn. If you just call, that 18 percent is all you have. If you
              bet instead (a semi-bluff), you add the chance your opponent folds right now. Your draw might
              hit 18 percent of the time and also make them fold another 30 percent of the time, so your
              total way-to-win in the pot is far higher than the raw 18 percent suggests.
            </P>
            <P>
              This is the engine behind aggression. The raiser has two ways to win, make the best hand or
              make everyone fold, while the caller only has one. It&apos;s also why position and a credible
              betting range matter: the more your opponent respects your bets, the more fold equity you
              generate. You can&apos;t fold out a calling station, though, so against those players you lean
              on pure showdown equity and value bet instead of bluffing.
            </P>

            <CTABox
              headline="Turn the equity math into instinct"
              text="Knowing the numbers is one thing. Reading them in two seconds at the table is another. Poker Reflex is a free swipe trainer for preflop decisions, see a hand, swipe to open, fold, call, 3-bet, or 4-bet, and get instant GTO feedback. Drill until you just know whether a hand is ahead. Free to download on iOS and Android."
            />

            <H2>Common preflop matchups to memorize</H2>
            <Lead>
              Stop guessing in all-in spots. A handful of preflop matchups cover the vast majority of
              get-it-in situations, and knowing the rough split keeps you from making expensive mistakes.
              Here are the staples.
            </Lead>
            <figure className="mt-6 mb-6 overflow-x-auto">
              <table
                aria-label="Common preflop matchup odds table"
                className="w-full text-sm"
                style={{ borderCollapse: 'separate', borderSpacing: 0, border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}
              >
                <thead>
                  <tr style={{ backgroundColor: 'rgba(74, 222, 128, 0.08)' }}>
                    <th className={th3} style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Matchup</th>
                    <th className={th3} style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Example</th>
                    <th className={th3} style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Approx split</th>
                    <th className={th3} style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>What it means</th>
                  </tr>
                </thead>
                <tbody>
                  {matchupRows.map((row, i) => (
                    <tr key={row[0]} style={{ backgroundColor: i % 2 === 0 ? 'var(--surface)' : 'var(--background)' }}>
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className={td3}
                          style={{
                            color: j <= 2 ? 'var(--text)' : 'var(--text-secondary)',
                            fontWeight: j === 0 ? 600 : 400,
                            borderBottom: i === matchupRows.length - 1 ? undefined : '1px solid var(--border)',
                          }}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <figcaption className="text-xs mt-3 text-center" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>
                Staple preflop all-in matchups with approximate equity splits and a plain-language note.
              </figcaption>
            </figure>
            <H3>The classic coinflip and why it is not 50/50</H3>
            <P>
              The race everyone calls a coinflip, a pair against two overcards like 88 against AKo, is not
              actually even. It runs about 52.6 to 47.4 in the pair&apos;s favor, so roughly 53/47. People
              round it to 50/50 because it&apos;s close, but that small edge adds up over hundreds of
              all-ins. The split only stretches toward 55/45 when the overcards are lower, unsuited, and
              unconnected. The AK version specifically stays close to a flip, which is the whole point of
              calling it one. Misreading these races is one of the classic{' '}
              <GL href="/blog/preflop-poker-mistakes">preflop poker mistakes</GL> that quietly drains a
              stack.
            </P>
            <H3>Why dominated hands are so costly</H3>
            <P>
              Domination is the silent bankroll killer. When you push AJo and run into AQo, you&apos;re not
              in a race, you&apos;re a 27 percent dog, because the shared ace means you usually need to pair
              your jack and hope they miss. This is exactly why hand selection matters so much. Knowing
              which <GL href="/blog/poker-starting-hands">poker starting hands</GL> play well and which
              ones get dominated keeps you out of these 73/27 disasters in the first place.
            </P>

            <H2>How equity shifts street by street</H2>
            <Lead>
              Equity is a snapshot, and it moves every time a card hits the felt. Watching it shift is the
              best way to internalize the Rule of 2 and 4. Let&apos;s follow one hand all the way through.
            </Lead>
            <figure className="mt-6 mb-6 overflow-x-auto">
              <table
                aria-label="Street by street equity for a flush draw example"
                className="w-full text-sm"
                style={{ borderCollapse: 'separate', borderSpacing: 0, border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}
              >
                <thead>
                  <tr style={{ backgroundColor: 'rgba(74, 222, 128, 0.08)' }}>
                    <th className={th3} style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Street</th>
                    <th className={th3} style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Situation</th>
                    <th className={th3} style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Your equity</th>
                  </tr>
                </thead>
                <tbody>
                  {streetRows.map((row, i) => (
                    <tr key={row[0]} style={{ backgroundColor: i % 2 === 0 ? 'var(--surface)' : 'var(--background)' }}>
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className={td3}
                          style={{
                            color: j === 0 ? 'var(--text)' : 'var(--text-secondary)',
                            fontWeight: j === 0 ? 600 : 400,
                            borderBottom: i === streetRows.length - 1 ? undefined : '1px solid var(--border)',
                          }}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <figcaption className="text-xs mt-3 text-center" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>
                How a flush draw&apos;s equity rises and falls from flop to river in a single hand.
              </figcaption>
            </figure>
            <P>
              That&apos;s the whole story of a draw in one table. You start around a third of the pot, you
              bleed down to 18 percent when the turn bricks, and you either spike to near certainty or fall
              to zero on the river. Every betting decision along the way should track those numbers, not
              your gut feeling about whether you&apos;re &quot;due.&quot;
            </P>

            <H2>Equity vs a range, not just one hand</H2>
            <Lead>
              Here&apos;s the upgrade that separates thinking players from the rest. Your opponent almost
              never has one specific hand. They have a <S>range</S>, the full set of holdings consistent
              with how they&apos;ve played. So the equity number that matters is your hand against that
              entire range, not against the one hand you&apos;re afraid of.
            </Lead>
            <P>
              Say you hold JJ facing an early-position all-in. Against AA you&apos;re a disaster, but they
              don&apos;t only have AA. Against a realistic shoving range of big pairs and AK, your jacks
              land somewhere in the mid-to-high 30s, far better than the worst case but still an underdog.
              To get there, map the combos you&apos;re up against, then run your hand against each one in
              the calculator and weigh the results.
            </P>
            <RangeGrid
              title="A sample tight all-in range"
              caption="A believable early-position shove: the big pairs plus AK. Run JJ against each of these hands to find your real equity."
              ariaLabel="A tight all-in range of AA, KK, QQ, JJ, AKs and AKo highlighted on a 13 by 13 grid"
              inRangeHands={sampleRange}
            />
            <P>
              The highlighted hands (the big pairs plus AK) are a believable tight shove. Against that
              block, JJ does far better than against pocket aces alone, and that weighted number is what
              should drive the call. You can{' '}
              <GL href="/tools/range-visualizer">build and save your own ranges</GL> to map these spots, and
              understanding <GL href="/blog/poker-positions">how position changes your ranges</GL> tells you
              which hands belong in them in the first place. And remember equity drops multiway: a hand
              that&apos;s a favorite heads-up can be an underdog against three players, which is why you
              raise to thin the field.
            </P>
            <H3>Equity realization: why you do not always cash in your raw equity</H3>
            <P>
              Raw equity assumes every hand reaches showdown, but they don&apos;t. <S>Equity realization
              (EQR)</S> is how much of your raw equity you actually convert into winnings once you account
              for getting bet off hands, playing out of position, and how easy your hand is to play. A hand
              with 40 percent raw equity might only realize 35 percent out of position, because you&apos;ll
              fold some of those winning chances before the river. Position, initiative, and playability all
              push your realized equity up or down, which is a core idea in{' '}
              <GL href="/blog/gto-poker-for-beginners">GTO poker for beginners</GL>.
            </P>

            <H2>Practice equity until it is instinct</H2>
            <Lead>
              None of this math is hard. Counting outs, multiplying by 2 or 4, comparing to a
              required-equity number off the chart, it&apos;s all arithmetic a kid could do. The hard part
              is doing it fast, under pressure, with money on the line and a clock running. That only comes
              from reps.
            </Lead>
            <P>
              That&apos;s where drilling pays off. The <S>Poker Reflex</S> app turns these spots into a
              swipe game: you see a hand and a situation, swipe to open, fold, call, 3-bet, or 4-bet, and
              get instant GTO feedback on whether your decision was right. The more you drill, the more the
              equity instinct fires automatically, so at the table you just know whether a hand is ahead
              instead of stopping to calculate. It tracks your accuracy, streaks, and an ELO rating so you
              can watch the progress. It&apos;s free to download.
            </P>
            <P>
              Pair that with the free web tools and you&apos;ve got a full loop. Run real hands in the{' '}
              <GL href="/tools/equity-calculator">free poker equity calculator</GL>, price your calls with
              the <GL href="/tools/pot-odds-calculator">pot odds calculator</GL>, and study opponent ranges
              in the range visualizer. Then go drill until the numbers feel obvious. For the betting side of
              the equation, our guide to <GL href="/blog/poker-bet-sizing">poker bet sizing</GL> and the
              breakdown of <GL href="/blog/what-is-a-3-bet-in-poker">what is a 3-bet in poker</GL> round out
              the picture, and since equity plays out over many all-ins, sound{' '}
              <GL href="/blog/poker-bankroll-management">bankroll management</GL> is what lets variance run
              its course without busting you.
            </P>

            <CTABox
              headline="Drill the spots until the win % is obvious"
              text="Equity is simple math, but speed is everything at the table. Poker Reflex drills preflop decisions hand by hand with instant GTO feedback, accuracy stats, and an ELO rating, in 6-max and 9-max across every position and stack depth. Free to download on iOS and Android."
            />

            <H2>Frequently asked questions</H2>

            <H3>What does equity mean in poker?</H3>
            <P>
              Equity is your percentage share of the pot if the hand were run to showdown right now with no
              more betting. If you have 60 percent equity in a 100 dollar pot, your hand is worth 60 dollars
              on average. It&apos;s a snapshot of how often your hand wins, plus its share of ties, against
              the cards your opponent could be holding.
            </P>

            <H3>How do I calculate poker equity quickly?</H3>
            <P>
              Use the Rule of 2 and 4. Count your outs, the cards that improve you to the best hand. With
              one card to come, multiply outs by 2 for your rough equity. With two cards to come on the
              flop, multiply by 4. A flush draw has 9 outs, so about 18 percent on the turn or roughly 35
              percent across both streets once you shave the slight over-count.
            </P>

            <H3>What is the difference between equity and pot odds?</H3>
            <P>
              Equity is how often you win the hand. Pot odds are the price the pot is offering you to call.
              You compare the two: if your equity is higher than the required equity the pot odds demand,
              calling is profitable. Equity alone never tells you to call, you always weigh it against the
              price.
            </P>

            <H3>How much equity do I need to call a bet?</H3>
            <P>
              It depends on the bet size relative to the pot. Against a half-pot bet you need about 25
              percent equity, against a pot-sized bet about 33 percent, and against a 3 to 1 price about 25
              percent. Smaller bets require less equity to call, which is why cheap draws are easy to
              continue with.
            </P>

            <H3>What is fold equity?</H3>
            <P>
              Fold equity is the extra value you get from the chance your opponent folds to your bet.
              It&apos;s separate from your showdown equity (how often you win at showdown). When you
              semi-bluff a draw, your total way-to-win is your chance to hit plus your chance to make them
              fold, which is why betting a draw is often more profitable than just calling with it.
            </P>

            <H3>Does poker equity change with more players?</H3>
            <P>
              Yes, and it usually drops. Your hand has to beat more opponents, so the same hand that is a
              favorite heads-up can be an underdog multiway. AKs is strong against one opponent but its
              equity falls as more players see the flop, which is why you often raise to thin the field with
              hands that play best heads-up.
            </P>

            <H3>Is a coinflip in poker really 50/50?</H3>
            <P>
              Not exactly. A pair against two overcards, like 88 versus AKo, runs about 52.6 to 47.4 in the
              pair&apos;s favor, so roughly 53/47, not a true 50/50. People call it a coinflip because
              it&apos;s close, but the small edge matters over many hands. Suitedness and connectedness
              shift it a point or two.
            </P>

            <H3>What is equity realization?</H3>
            <P>
              Equity realization is how much of your raw equity you actually convert into winnings. You
              rarely see every hand to showdown, so position, initiative, and how easy your hand is to play
              all affect it. A hand might have 40 percent raw equity but only realize 35 percent out of
              position, which is why position matters so much.
            </P>
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}
