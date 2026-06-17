import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import QRCodeBlock from '@/components/QRCodeBlock'
import RangeGrid from '@/components/RangeGrid'
import { BRAND_ASSETS, SITE_URL } from '@/lib/brand'
import { RANGES, parseRangeNotation } from '@/lib/poker-ranges'

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Preflop Poker Mistakes: 14 Costly Leaks to Fix',
  description:
    'The 14 most common preflop poker mistakes that cost you money, with real hands, real numbers, and a concrete fix for each leak in your game.',
  keywords:
    'preflop poker mistakes, common poker mistakes, playing too many hands poker, open limping mistake, poker hand selection, poker preflop strategy, why do beginners lose at poker, poker position strategy, 3-bet size poker',
  alternates: { canonical: `${SITE_URL}/blog/preflop-poker-mistakes` },
  openGraph: {
    title: '14 Preflop Poker Mistakes That Cost You Money',
    description:
      'The 14 most common preflop poker mistakes, ranked by cost, with real hands and a concrete fix for each one.',
    url: `${SITE_URL}/blog/preflop-poker-mistakes`,
    siteName: 'Poker Reflex',
    type: 'article',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
  twitter: {
    card: 'summary_large_image',
    title: '14 Preflop Poker Mistakes That Cost You Money',
    description:
      'The 14 most common preflop poker mistakes, ranked by cost, with a concrete fix for each one.',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
}

// ---------------------------------------------------------------------------
// JSON-LD
// ---------------------------------------------------------------------------

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Common Preflop Poker Mistakes: 14 Leaks That Cost You Money',
  description:
    'The 14 most common preflop poker mistakes that cost you money, ranked by cost, with real hands, real numbers, and a concrete fix for each leak.',
  author: { '@type': 'Organization', name: 'Poker Reflex' },
  publisher: {
    '@type': 'Organization',
    name: 'Poker Reflex',
    logo: { '@type': 'ImageObject', url: BRAND_ASSETS.squareLogoUrl },
  },
  image: BRAND_ASSETS.squareLogoUrl,
  datePublished: '2026-06-10',
  dateModified: '2026-06-10',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/blog/preflop-poker-mistakes`,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the most common preflop poker mistakes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common preflop poker mistakes are playing too many hands, open limping, ignoring position, and either never 3-betting or 3-betting with the wrong size. These are also the most expensive, because a bad preflop decision forces you to guess on every later street. Postflop and mental leaks come next, but fixing the preflop ones first gives you the biggest improvement for the least effort.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the most common preflop mistake in poker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Playing too many hands is the single most common and most expensive preflop mistake. Beginners open dominated hands like KJo and QJo from early position and small offsuit aces like A7o from under the gun, then bleed chips out of position all session. The fix is to tie your starting range to your seat, roughly the top 10 to 15% from early position widening toward the button, built around pocket pairs, suited broadways, and suited aces.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is open limping a mistake in poker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Open limping (just calling the big blind as the first player into the pot) is a mistake because you can never win the pot preflop, you give up the initiative, and you invite multiple opponents in cheaply against a hand you have shown is weak. Limped pots become the small pots you rarely win and the big pots where you are often dominated. If a hand is worth playing, raise it to 2.5x or 3x; if it is not, fold. There are rare deep-stacked or multiway exceptions, but they should be deliberate choices, not default play.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do beginners lose money playing poker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Beginners usually lose a little at a time through repeated small leaks rather than one big disaster, and most of those leaks are preflop: too many hands, open limping, and ignoring position. Those decisions put them in tough out-of-position spots on every later street, so their postflop trouble is really a consequence of a preflop mistake. They also tend to tilt after bad beats and play above their bankroll, which turns normal variance into real losses.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hands should you play in poker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends entirely on your position. From early seats at a full table, play tight, roughly the top 10 to 15% of hands, mostly pocket pairs, suited broadways, big offsuit broadways, and suited aces. As you move toward the button, widen your range because fewer players act behind you, and on the button you can open a wide range to steal the blinds. The mistake is opening the same range from every seat instead of tightening early and widening late.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the correct 3-bet size in poker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard 3-bet is about 3x the original raise when you are in position and about 4x when you are out of position, with smaller sizes for short stacks and tournaments. So if a player opens to $6 at $1/$2, you would 3-bet to around $18 in position or $24 from the blinds, not a tiny $12. The bigger out-of-position size charges opponents for the fact that they get to act after you on every later street, and a tiny 3-bet just hands them perfect odds to continue.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does position affect your preflop mistakes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Position multiplies almost every other leak because acting last gives you more information on every street, so playing out of position amplifies bad hand selection, bad bet sizing, and loose calling. The same two cards can be a clear fold under the gun and a clear open from the button, like A9o, purely because of how many players act behind you. The fix is to tighten your range when more players are left to act and widen it as you approach the button and blinds.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I stop making the same poker mistakes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start by running a short self-audit (do you limp, open the same range from every seat, never 3-bet light, call draws without checking the price, or tilt after beats), then fix one leak at a time from the most expensive down, which means preflop first. Reading about a mistake only tells you it exists; removing it takes active repetition until the correct decision is automatic. Drilling isolated preflop spots with instant feedback, away from the table and never during live online play, builds the right instincts much faster than chasing results while you play.',
      },
    },
  ],
}

// ---------------------------------------------------------------------------
// Shared constants and data
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

const playerTypes = [
  { type: 'Nit', tell: 'Only plays premiums, 3-bets only AA or KK', adj: 'Stop bluff-3-betting them, fold your medium hands to their 3-bet' },
  { type: 'Tight-aggressive reg', tell: 'Solid, balanced, hard to read', adj: 'Stick close to your baseline, pick smaller spots' },
  { type: 'Loose-aggressive', tell: 'Opens and 3-bets too wide, lots of bluffs', adj: 'Widen your calling and 4-betting range, let them barrel into your strong hands' },
  { type: 'Calling station', tell: 'Calls opens and 3-bets with anything, never folds', adj: 'Cut your bluffs, value-raise relentlessly, size up with strong hands' },
]

const mistakesTable = [
  { m: '1. Playing too many hands', cost: 'Constant small donations out of position', fix: 'Tie your range to position, tight early' },
  { m: '2. Open limping', cost: 'Small pots you lose, big pots you are dominated in', fix: 'Raise it or fold it, never limp' },
  { m: '3. Ignoring position', cost: 'Lose early, leave money on the button', fix: 'Tighten with more players left to act' },
  { m: '4. Never 3-betting or 3-betting wrong', cost: 'Stay passive, or give free odds with tiny sizes', fix: '3x in position, 4x out, value plus bluffs' },
  { m: '5. Sizing bets by hand strength', cost: 'Readable, so you get paid the least', fix: 'Size to the pot, same size value and bluff' },
  { m: '6. Calling too wide from the big blind', cost: 'Trapped out of position, or bled by steals', fix: 'Defend wider vs small opens, still selective' },
  { m: '7. Chasing draws without odds', cost: 'Long-run losing calls when the price is wrong', fix: 'Count outs, weigh pot odds plus implied odds' },
  { m: '8. Not thinking in ranges', cost: 'Hero-fold vs bluffers, hero-call vs nits', fix: 'Assign a range, beat the range not one hand' },
  { m: '9. No GTO baseline', cost: 'Predictable, exploitable patterns', fix: 'Learn a solid default, then exploit on top' },
  { m: '10. Playing above your bankroll', cost: 'Scared money, and busting on a normal run', fix: 'Keep 20-30+ buy-ins, move down with no ego' },
  { m: '11. Letting tilt decide', cost: 'Every other leak fires at once', fix: 'Break, tighten up, set a session stop-loss' },
  { m: '12. Being results-oriented', cost: 'You learn the wrong lessons', fix: 'Judge the process, accept good plays lose' },
  { m: '13. Slowplaying too often', cost: 'Free draws and missed value', fix: 'Bet strong hands by default, rarely trap' },
  { m: '14. Never studying off the table', cost: 'Slow or zero improvement', fix: 'Short, focused reps on preflop spots' },
]

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

// Emphasized lead paragraph after an H2 (featured-snippet friendly).
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

const th3 = 'text-left px-4 py-3 font-heading font-semibold'
const td3 = 'px-4 py-3 align-top'

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

export default function PreflopMistakesArticle() {
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
            Common Preflop Poker Mistakes: 14 Leaks That Cost You Money (and How to Fix Each One)
          </h1>
          <div className="flex items-center gap-4 mb-10 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <span>By Poker Reflex</span>
            <span>·</span>
            <span>June 10, 2026</span>
            <span>·</span>
            <span>15 min read</span>
          </div>

          <div
            className="prose-article"
            style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-secondary)' }}
          >
            <p>
              Most losing players don&apos;t lose because of one big disaster hand. They lose a little
              at a time, the same way, every single session, and they never notice. The leaks are
              almost always preflop and almost always boring: one too many limps, one too many weak
              calls, one open from the wrong seat. That&apos;s good news. Boring mistakes are easy to
              fix once you can name them.
            </p>
            <P>
              This guide walks through the 14 most common preflop poker mistakes (plus the postflop
              and mental leaks they feed), ranked roughly by how much they cost you, with real hands
              like A5s, KJo, and 72o, real sizes at $1/$2, and a specific fix for each one, not a
              vague &quot;just play better.&quot; We lean hard on the preflop leaks because that&apos;s
              where the cheapest, biggest wins are.
            </P>

            <H2>Why Most Poker Losses Happen Before the Flop</H2>
            <Lead>
              Most of the money beginners lose is already decided before the flop. A bad starting hand
              or a bad seat forces you to guess on every later street, so what looks like a postflop
              disaster is usually just a cheap <S>preflop leak</S> playing out.
            </Lead>
            <P>
              Think about how a hand actually unfolds. You pick your two cards, then you make a
              decision on the flop, the turn, and the river. If your starting hand is good and you
              played it from a sensible seat, every later decision is easier. You&apos;ll have the
              lead, a clearer read on what beats you, and a hand that can actually win a big pot. If
              your starting hand is weak or out of position, you&apos;re guessing on every street, and
              guessing costs money.
            </P>
            <P>
              Here&apos;s the framing example we&apos;ll come back to. You open 72o under the gun at
              $1/$2 for $6. Best case, you make some pair and have no idea if it&apos;s good. Worst
              case, you flop top pair and stack off against a better kicker. Compare that to folding
              72o and waiting one hand for something you can actually play. The fold costs you nothing.
              The open costs you a hand you can barely win, and you bought that problem before the
              dealer even put out a flop.
            </P>
            <P>
              So the mistakes below are ranked roughly by how much they bleed per 100 hands, the most
              expensive leaks first. Fix the top items before you worry about the bottom ones.
            </P>

            <H2>Mistake 1: Playing Too Many Hands</H2>
            <Lead>
              <S>Playing too many hands</S> is the single most expensive leak for almost every losing
              player. Every weak hand you take to the flop out of position is a small forced donation,
              and those donations quietly stack up over a session until they swallow your whole win
              rate.
            </Lead>
            <P>
              This is the big one. Beginners see two cards that aren&apos;t garbage and convince
              themselves there&apos;s a reason to play. KJo and QJo from early position, suited junk
              like J6s, small offsuit aces like A7o opened from under the gun. None of these are
              terrible cards in a vacuum. They&apos;re terrible from the wrong seat, and they&apos;re
              terrible in volume.
            </P>
            <P>
              What it costs you is subtle. You&apos;re not stacking off every hand. You&apos;re just
              bleeding two big blinds here, four there, calling a c-bet you should have folded to,
              paying off a river you knew you were beat on. Multiply that across a few hundred hands
              and it&apos;s the difference between a winning night and a losing one.
            </P>
            <P>
              The fix ties hand selection to position. From early seats, play tight, roughly the top 10
              to 15% of hands (tighter at a full 9-handed table, a bit wider 6-max): the pocket pairs,
              the strong suited broadways, the big offsuit broadways, the suited aces. As you move
              toward the button, widen out, because fewer players act behind you. The backbone of any
              opening range in every seat is the same: pocket pairs, suited broadways, and suited aces.
              Those hands flop well, make strong draws, and don&apos;t get dominated as often. If you
              want the full breakdown of{' '}
              <GL href="/blog/poker-starting-hands">which starting hands to play by position</GL>,
              start there, because fixing this one leak alone moves more low-stakes players from losing
              to winning than anything else on this list.
            </P>

            <H3>A quick picture: early position vs the button</H3>
            <P>
              The point of tying range to seat is easier to see than to read. Here are two opening
              ranges side by side, a tight under-the-gun range and a wide button range at the same
              table.
            </P>
            <RangeGrid
              title="Under the Gun (tight)"
              caption="A tight under-the-gun opening range, about 14% of hands."
              ariaLabel="Tight under the gun opening range: pocket pairs, suited broadways, suited aces, the strongest suited connectors, and AJ offsuit and better"
              inRangeHands={utgHands}
            />
            <RangeGrid
              title="Button (wide)"
              caption="A wide button opening range, about 39% of hands."
              ariaLabel="Wide button opening range: all pairs, every suited ace, most suited hands, and a broad set of offsuit aces and broadways"
              inRangeHands={btnHands}
            />
            <P>
              Same KJo, same K9s, one is a fold under the gun and an open on the button. To explore the
              full position-by-position grids,{' '}
              <GL href="/tools/range-visualizer">see hand distributions and range breakdowns</GL> laid
              out visually.
            </P>

            <H2>Mistake 2: Open Limping</H2>
            <Lead>
              <S>Open limping</S> means calling the big blind as the first player to enter the pot
              instead of raising. It&apos;s a leak because you can never win the pot preflop, you give
              up the initiative, and you let multiple players in cheaply against a hand you&apos;ve
              already shown is weak.
            </Lead>
            <P>
              Watch any low-stakes live game and you&apos;ll see it constantly. Three players limp in
              for $2, somebody raises to $12, and now four people are calling $10 more into a bloated,
              multiway pot where nobody knows what anyone has. That&apos;s the limp trap, and it costs
              the limpers money every time.
            </P>
            <P>
              Here&apos;s why it&apos;s bad in plain terms. A limp can never win the hand right there,
              so you give up all the times everyone would have folded to a raise. You enter without the
              lead, which makes every street harder to play. And you invite a crowd, which is the worst
              thing that can happen to a marginal hand. Limped pots end up being the small pots you
              rarely win and the big pots where you&apos;re dominated.
            </P>
            <P>
              The fix is one sentence. If a hand is good enough to play, raise it. If it isn&apos;t,
              fold it. Replace every limp with a 2.5x to 3x open or a fold, nothing in between. Real
              example at $1/$2: you&apos;ve got A5s in the cutoff. Limping for $2 lets the blinds see a
              flop for free and you have no idea where you stand. Raising to $6 either wins it now or
              builds a pot where you have the lead and a hand that can make the nut flush. Same cards,
              much better outcome.
            </P>
            <P>
              Rare exceptions exist (a small pair behind several limpers when deep, the occasional
              small-blind complete), but those are deliberate reads, not what you do because you
              weren&apos;t sure. If you&apos;re limping because you couldn&apos;t decide whether to play
              the hand, you&apos;re making the mistake. Understanding{' '}
              <GL href="/blog/poker-positions">why position is powerful and how to use it</GL> makes it
              obvious when a limp is genuinely okay. For the full breakdown, with the EV math and the few
              spots where a limp is genuinely fine, see{' '}
              <GL href="/blog/open-limping-poker">open limping in poker</GL>.
            </P>

            <H2>Mistake 3: Ignoring Position</H2>
            <Lead>
              <S>Position</S> is one of the strongest edges in poker because acting last gives you more
              information on every street. Ignore it and you bleed chips from early seats while leaving
              easy money on the table from the button, the same two cards turning profitable or
              unprofitable purely by where you sit.
            </Lead>
            <P>
              Position is just where you sit relative to the dealer button, which decides who acts
              first. Acting last is a gift. You see what everyone else does before you commit a chip,
              you control the size of the pot, and you can bluff or value bet with far better
              information. That mechanic is the whole reason a hand can be a fold in one seat and an
              open in another.
            </P>
            <P>
              The cost shows up when players open the same range from every seat. They open A9o under
              the gun, where it&apos;s dominated by half the hands that continue, and they fold it on
              the button, where it&apos;s a clear, profitable steal. Same two cards, opposite correct
              decision, purely because of the seat. Open it early and you lose. Fold it late and
              you&apos;ve left a free pot uncontested.
            </P>
            <P>
              The fix flows from one fact: the more players still to act behind you, the higher the
              chance someone has been dealt a strong hand. So under the gun at a full table you need a
              tighter range, and on the button with only the two blinds left you can open wide and
              steal often. For the actual hand lists by seat, lean on Mistake 1 and the{' '}
              <GL href="/blog/poker-positions">full guide to why position is powerful and how to use it</GL>,
              because once position clicks, half of your other leaks shrink on their own.
            </P>

            <H2>Mistake 4: Never 3-Betting (or 3-Betting Wrong)</H2>
            <Lead>
              <S>3-bet mistakes</S> come in two flavors. One is the player who only ever flat-calls and
              never reraises, staying passive and letting opponents in cheaply. The other is the player
              who min-3-bets, handing the opener perfect odds to continue. Both quietly cost money every
              orbit.
            </Lead>
            <P>
              The first sub-leak is passivity. Some players literally never raise a raise. They just
              call with everything, even KK and AA, which lets weaker hands see a flop cheaply and
              realize their equity. The second sub-leak is the tiny 3-bet. Villain opens to $6, the
              player makes it $12, and now the opener is getting an irresistible price to call with
              their whole range. A 3-bet that small accomplishes nothing.
            </P>
            <P>
              Here&apos;s the sizing rule worth memorizing: 3-bet to about 3x the open when you&apos;re
              in position, about 4x when you&apos;re out of position, and smaller for short stacks and
              tournaments. Concrete example at $1/$2: villain opens to $6. In position with KK, make it
              $18. From the blinds, out of position, make it around $24, not $12. The bigger
              out-of-position size charges them for the fact that they get to act after you on every
              later street. Nudge it up a little when stacks are deep or there&apos;s dead money from
              limpers in the pot.
            </P>
            <P>
              And 3-betting isn&apos;t only for premiums. A good 3-betting range mixes value hands with
              a few bluffs, often suited hands that block big pairs and play well when called, like A5s.
              That mix keeps you from being readable, because if you only ever 3-bet aces and kings,
              observant opponents just fold everything and wait. For the complete picture of{' '}
              <GL href="/blog/what-is-a-3-bet-in-poker">when and how to 3-bet correctly</GL>, including
              which hands make the best light 3-bets, work through the dedicated guide.
            </P>

            <H2>Mistake 5: Sizing Your Bets by Hand Strength</H2>
            <Lead>
              <S>Sizing by hand strength</S>, betting big with monsters and small with weak hands, makes
              you completely readable. Observant opponents fold to your big bets and call your small
              ones, so you get paid the least exactly when you most want to get paid.
            </Lead>
            <P>
              This is one of the easiest tells to spot and one of the most expensive to have. If you
              fire $40 into a $60 pot only when you have the nuts and $15 when you&apos;re bluffing,
              anyone paying attention crushes you. They fold the bluff-catchers when you bet big and pay
              you off light when you bet small. You&apos;ve turned your bet size into a label on your
              hand.
            </P>
            <P>
              The fix and the core rule: size relative to the pot, not the strength of your hand, and
              keep your value and bluff sizing consistent in the same spot. Pick a size for a situation
              (say 33% pot on a dry flop) and use it with your whole range there. The bet size then
              reveals nothing.
            </P>
            <P>
              The preflop tie-in is the clearest example. If you raise to $6 with junk and $12 with aces
              from the same seat, that&apos;s a neon sign flashing your hand strength to the table. Use
              one open size regardless of your cards. For reference, standard sizes are 2.5x to 3x opens
              preflop and roughly half pot to full pot postflop, but the deeper logic is in{' '}
              <GL href="/blog/poker-bet-sizing">the one rule that changes everything, size relative to pot, not hand</GL>.
            </P>

            <H2>Mistake 6: Calling Too Wide Out of the Big Blind</H2>
            <Lead>
              <S>Big blind defense</S> has two opposite errors, defending too loosely and folding too
              tight. Over-defending traps you out of position with dominated hands. Over-folding hands
              the button a steady stream of cheap steals. Both bleed money, just in opposite directions.
            </Lead>
            <P>
              You already have money in the pot as the big blind, so you get a discount to continue.
              That discount tempts a lot of players into defending with hands that are pure trouble out
              of position, and it scares others into folding so much that the button can steal at will.
              Both are leaks, just pointing in opposite directions.
            </P>
            <P>
              Here&apos;s the price logic with a concrete spot. The button min-raises to $4 at $1/$2 and
              you&apos;re in the big blind. You&apos;re getting a great price, so you can defend a wide
              range. Hands like K9o and 65s are fine calls here because the price is so good and they
              flop reasonably. 72o is right at the bottom and folding it is fine. It&apos;s one of the
              worst hands to play out of position even at a great price, so don&apos;t sweat letting it
              go. The discount widens your range, it doesn&apos;t erase standards.
            </P>
            <P>
              The fix is to defend a wider but still selective range against small opens, mostly by
              calling, and to 3-bet your strongest defends rather than just flatting them. The wider the
              price gap (the smaller their raise), the more you defend. The bigger their raise, the
              tighter you get. That&apos;s pot odds thinking applied to a preflop spot. And since this
              is the seat where you play out of position the most, understanding{' '}
              <GL href="/blog/poker-positions">why position is powerful</GL> matters here more than
              anywhere.
            </P>

            <H2>Mistake 7: Chasing Draws Without the Right Odds</H2>
            <Lead>
              <S>Chasing draws</S> means calling bets with flush and straight draws regardless of the
              price, hoping to hit. It loses money because every call where the odds (pot odds plus
              implied odds) don&apos;t justify the draw is a long-run loss, even on the hands where you
              occasionally spike your card.
            </Lead>
            <P>
              The math is not hard, and learning it kills this leak fast. The quick tool is the rule of
              2 and 4: multiply your outs by 2 for one card to come, by 4 for two cards. A nine-out
              flush draw works out to about 19% to hit on the very next card (the rule of 2 gives a
              rough 18%, the true number is 9 out of 47, or 19.1%) and about 35% by the river. An
              open-ended straight draw has eight outs, so a touch less, roughly 17% on the next card and
              about 32% by the river.
            </P>
            <P>
              Now the price, and this is where beginners go wrong in both directions. At $1/$2 you face
              a $20 bet into a $40 pot with a bare flush draw on the flop. You&apos;re calling $20 to
              win $60, so you need to win about 25% of the time to break even on the call alone. Your
              flush hits roughly 19% on the very next card. On raw pot odds alone, that single call is
              short, so it looks like a fold.
            </P>
            <P>
              But raw pot odds aren&apos;t the whole story, and treating them as the whole story is how
              people start over-folding good draws. Add implied odds. If you expect to win at least one
              more bet of around $50 on the roughly 19% of turns where you complete, the call flips to
              clearly profitable. So the fix is a four-step habit: count your outs, estimate your equity
              with the rule of 2 and 4, compare it to the price, then factor in implied odds when stacks
              are deep and you&apos;ll get paid when you hit. No implied odds (short stacks, an obvious
              draw-completing board, a tight opponent who shuts down), and it&apos;s a fold. To run the
              numbers in seconds instead of guessing,{' '}
              <GL href="/tools/pot-odds-calculator">calculate equity and pot odds instantly</GL> with
              the free tool until the estimates become second nature.
            </P>

            <H2>Mistake 8: Not Thinking in Ranges</H2>
            <Lead>
              <S>Range thinking</S> means asking &quot;what range of hands shows up here&quot; instead
              of guessing one specific hand. Skip it and you hero-fold to opponents who have plenty of
              bluffs and hero-call opponents who never bluff, getting it wrong against both extremes.
            </Lead>
            <P>
              Beginners narrow an opponent to one specific hand and then react to that fantasy. &quot;He
              must have the flush.&quot; Maybe. But he raised preflop, c-bet the flop, and barreled the
              turn, and a player does that with a whole collection of hands, not just the one you&apos;re
              scared of. Strong players think about that whole collection.
            </P>
            <P>
              Concrete example. A tight, straightforward player raises under the gun and then 3-bets
              your bet on the flop. What&apos;s his range? Almost never air. It&apos;s big pairs, strong
              top pairs, sets. So your single pair, even a good one, is usually behind that entire range,
              and the fold is easy once you stop staring at your own cards. Flip it around: a loose,
              aggressive player firing three streets on a scary board has plenty of busted draws in his
              range, so your bluff-catcher is worth more.
            </P>
            <P>
              The fix is a habit you build over time. Based on an opponent&apos;s position and his
              actions on each street, assign him a plausible range, then ask how your specific hand does
              against that whole range, not against the one hand you fear. The easiest range to learn
              first is your own opening range by position, because it&apos;s fixed and you can drill it
              until you know every hand cold. Master that and reading opponents gets easier, because you
              already think in groups of hands. To see how hands cluster,{' '}
              <GL href="/tools/range-visualizer">explore hand distributions and range breakdowns</GL>{' '}
              laid out visually.
            </P>

            <CTABox
              headline="Drill these preflop spots until they're automatic"
              text="Reading about a leak tells you it exists. Repping the correct decision a few hundred times is what removes it. Poker Reflex is a free swipe trainer for exactly that: open, 3-bet, 4-bet, and all-in spots across positions and stack depths, in 6-max and 9-max, with instant GTO feedback and an ELO rating that tracks your progress. Free to download."
            />

            <H2>Mistake 9: Playing With No GTO Baseline</H2>
            <Lead>
              <S>A GTO baseline</S> is just a balanced default you adjust away from on purpose, not a
              rigid script. Without one you can&apos;t tell when you&apos;re being exploited or when to
              deviate, so you leak through predictable patterns like always folding to 3-bets or never
              mixing bluffs with value.
            </Lead>
            <P>
              GTO sounds intimidating, so let&apos;s keep it plain. A game-theory-optimal baseline is the
              solid starting point that&apos;s hard to exploit. Once you have it, you can spot when an
              opponent is doing something exploitable and deviate to punish it, and you can spot when
              someone is punishing you.
            </P>
            <P>
              Here&apos;s that abstraction turned into real chips. You face twelve different 3-bets
              across a session and fold every one. A thinking opponent notices in about ten minutes and
              starts 3-betting you with any two cards, risking 6 BB to win your 2.5 BB open uncontested.
              You hand him roughly 2.5 BB a pop, twelve times, until you finally adjust. A sound default
              would have you continuing against 3-bets with something like the top 40% of your opening
              range, calling or 4-betting, so you were never a free target in the first place.
            </P>
            <P>
              The fix is to learn a solid default for the common preflop spots first, the opens, the
              3-bets, the calls and folds versus 3-bets, then layer exploits on top once the baseline is
              automatic. Don&apos;t try to learn the whole tree at once. Get the high-frequency preflop
              decisions sound, then expand. For a beginner-friendly explanation of{' '}
              <GL href="/blog/gto-poker-for-beginners">what GTO means and how to start learning it</GL>{' '}
              without drowning in theory, start with the dedicated guide.
            </P>

            <H2>Mistake 10: Playing Above Your Bankroll</H2>
            <Lead>
              <S>Playing above your bankroll</S> means sitting in games too big for your roll, which
              turns normal variance into a real threat of going broke. Scared money plays badly, and one
              ordinary bad run can wipe you out and force you to quit.
            </Lead>
            <P>
              This one isn&apos;t about strategy at the table, it&apos;s about survival. Poker has huge
              short-term swings even when you play perfectly. If your whole roll is only a few buy-ins
              for the stake you&apos;re sitting at, a completely normal downswing busts you, and busted
              players don&apos;t get better, they just quit or move down in shame.
            </P>
            <P>
              Rough guidelines, not exact laws: for cash games, keep something like 20 to 30 or more
              buy-ins for your stake before you sit (more if the games are tough or you can&apos;t
              stomach swings). For tournaments, where variance is much higher, you want far more, often
              100 buy-ins as a floor and 200 or more for large-field online events. The exact number
              depends on your win rate and field sizes, so treat these as minimums, not targets.
            </P>
            <P>
              The fix is discipline. Pick stakes your roll comfortably supports, and move down without
              ego the moment you drop below your threshold. There&apos;s no shame in it, and the players
              who move down when they need to are the ones still around years later. Bankroll discipline
              also feeds emotional control directly: when you&apos;re playing with money you can
              genuinely afford to lose, you stop playing scared and start playing well. The{' '}
              <GL href="/blog/poker-bankroll-management">practical rules to protect your money</GL> lay
              out the exact buy-in counts and the move-down triggers.
            </P>

            <H2>Mistake 11: Letting Tilt Make Your Decisions</H2>
            <Lead>
              <S>Tilt</S> is emotional, reactive play after a bad beat, a cooler, or even a long
              card-dead stretch. It&apos;s costly because it doesn&apos;t show up as one new mistake. It
              shows up as all your other leaks at once: too many hands, oversized bluffs, hero calls.
            </Lead>
            <P>
              Tilt is the multiplier. You don&apos;t suddenly forget how to play. You just stop caring,
              and every leak you normally keep in check comes roaring back. That&apos;s what makes it so
              expensive. The damage is compound.
            </P>
            <P>
              Concrete example. You get it in with AA against a flush draw, the money goes in good, and
              the flush gets there on the river to crack you. That stings, but it&apos;s not even a rare
              beat: AA against a flush draw on the flop is only about a 2 to 1 favorite, so it loses
              roughly a third of the time. It&apos;s expected variance. The problem is what you do next.
              Hot and looking to get even, you open 72o from under the gun out of pure spite. That&apos;s
              tilt making your decision for you, and it&apos;s how one normal cooler turns into a losing
              session.
            </P>
            <P>
              The fix is a simple recovery protocol you commit to before you ever sit down. Recognize
              the trigger (the pounding heart, the urge to &quot;get it back&quot;), take a short break
              and walk away from the table, drop to a tighter default when you return, and set a
              stop-loss for the session so a bad run can&apos;t become a catastrophe. Tilt also hurts
              less when you&apos;re playing within your bankroll and have a tight default to fall back on.
              And remember, a bad run is not proof you&apos;re playing badly. It&apos;s just poker.
            </P>

            <H2>Mistake 12: Being Results-Oriented</H2>
            <Lead>
              <S>Results-oriented thinking</S> means judging a decision by whether it won or lost instead
              of whether it was correct. It costs you because you learn backwards, abandoning good plays
              that happened to lose and repeating bad plays that happened to win.
            </Lead>
            <P>
              This is the sneakiest mistake on the list because it corrupts your learning itself. If you
              grade every decision by the outcome, the cards teach you the wrong lessons. The river
              doesn&apos;t care whether your call was right. It just falls, and you remember the feeling.
            </P>
            <P>
              Two examples make it concrete. You fold the best hand and the opponent proudly shows you a
              bluff. That feels awful, but it doesn&apos;t mean the fold was wrong, because against his
              range that fold might be correct most of the time. Flip it: you get it all in as a 70/30
              favorite and lose. That&apos;s not a mistake, that&apos;s variance doing exactly what it
              does 30% of the time. Punishing yourself for the loss teaches you to make worse decisions
              next time.
            </P>
            <P>
              The fix is to review decisions on process, not results. Ask whether the play was correct
              given what you knew, track your sessions over a meaningful sample, and accept that good
              decisions still lose plenty of the time. The cleanest feedback comes from the part of the
              game you can isolate and repeat, which for almost everyone is preflop, and that&apos;s
              where the next two sections go.
            </P>

            <H2>Mistake 13: Slowplaying Big Hands Too Often</H2>
            <Lead>
              <S>Over-slowplaying</S> means getting cute, checking and trapping when betting would simply
              win more. It costs you by letting opponents draw out cheaply and by missing value from
              worse hands that would gladly have paid a bet.
            </Lead>
            <P>
              Everybody loves the trap. You flop a monster, you check, you imagine your opponent betting
              into you so you can spring the snare. The problem is that it works far less often than
              beginners think, and the times it fails are expensive.
            </P>
            <P>
              Concrete example. You flop a set on a wet board, say 88 on a 9-8-7 two-tone flop, and you
              check to be tricky. Now the flush draw, the straight draw, and the gutshots all get to see
              the turn for free. One of them gets there, the action picks up only when you&apos;re
              suddenly beat, and the free card just cost you the pot. Meanwhile all the worse hands that
              would have called a bet, top pair, an overpair, a draw, never put money in.
            </P>
            <P>
              The fix is a simple default: bet your strong hands for value and protection, and reserve
              slowplay for the rare spots where betting would fold out absolutely everything (think the
              nuts on a dry board against a player with nothing). This ties back to bet sizing, because
              on wet boards you want to charge the draws, and to range thinking, because betting your
              strong hands keeps your betting range balanced instead of capped. The same logic runs
              preflop with premiums: raise your aces, don&apos;t limp-trap them and let four players in.
              For the full sizing framework on when to bet big and when to size down, see{' '}
              <GL href="/blog/poker-bet-sizing">the one rule that changes everything</GL>.
            </P>

            <H2>Mistake 14: Never Studying Away From the Table</H2>
            <Lead>
              <S>Skipping study</S> means playing thousands of hands without ever reviewing or training,
              so the same errors repeat forever. It costs you the slowest possible improvement and a much
              longer, more expensive climb than necessary.
            </Lead>
            <P>
              Volume alone doesn&apos;t make you better. It just engraves your current habits deeper. If
              you&apos;ve got a limping leak and a calling-too-wide leak, playing ten thousand more hands
              without reflection means ten thousand more reps of those exact leaks. Practice doesn&apos;t
              make perfect. Practice makes permanent.
            </P>
            <P>
              The fix is short, focused study reps on the spots that come up most, which for nearly every
              player are preflop decisions. You face a preflop decision every single hand, multiple times
              an orbit, so even small improvements there pay off constantly. The key distinction is
              between passively reading strategy and actively repping decisions until they&apos;re
              automatic, the way you&apos;d practice scales before a performance. Reading about a leak
              teaches you it exists. Repping the correct decision a few hundred times is what removes it.
            </P>
            <P>
              This is exactly what <GL href="/">Poker Reflex</GL> is built for. It&apos;s a free swipe
              trainer, swipe right to open, left to fold, with instant feedback on whether you got it
              right. You drill opens, 3-bets, 4-bets, and all-in spots across positions and stack depths,
              in both 6-max and 9-max. It tracks your ELO rating, accuracy stats, hand history, and
              streaks, so you can watch a leak shrink in real numbers as you grind it out. And because
              it&apos;s a study tool you use away from the table, never during live online play, it
              builds correct instincts without crossing any line. Stop reading about these preflop leaks
              and rep them until they&apos;re automatic. It&apos;s free to download on iOS and Android.
            </P>

            <H2>Preflop Mistakes That Are Worse in Tournaments</H2>
            <Lead>
              <S>Tournament preflop mistakes</S> carry extra weight because of ICM and short stacks.
              Over-calling all-ins near a pay jump, ignoring how antes widen ranges, and using fat 3x
              opens at 20 to 40 big blinds all cost more in a tournament than they ever would in a cash
              game.
            </Lead>
            <P>
              Most of this guide uses $1/$2 cash examples, but a few leaks get sharper teeth in
              tournaments. The first is ICM. Near a pay jump, busting costs you more than doubling up
              gains you, so the correct call is tighter than the raw equity suggests. Calling off AJo for
              your tournament life on the money bubble can be a clear fold even though it&apos;s
              &quot;ahead of a shoving range,&quot; because the chips you lose are worth more than the
              chips you&apos;d win.
            </P>
            <P>
              The second is antes. Once antes are in play, there&apos;s more dead money in the middle
              every hand, so opening and stealing ranges should get wider, not stay at their cash-game
              width. Players who keep folding tight through the ante levels leave a steady stream of
              blinds and antes uncollected.
            </P>
            <P>
              The third is open sizing. Deep-stacked cash play likes 2.5x to 3x, but at 20 to 40 big
              blinds those sizes commit too much of your stack and remove your room to fold to a shove.
              Shrink your opens toward 2x to 2.2x as stacks get shallower, and learn clean push-fold
              ranges under about 15 big blinds, where raising small and folding to a jam just burns
              chips. The principles are identical to cash (tie range to position, raise or fold, size
              with a plan), but ICM and stack depth change the exact numbers.
            </P>

            <H2>How Player Type Changes Your Preflop Decision</H2>
            <Lead>
              <S>Reading opponent type</S> turns one default into the right exploit. A nit, a
              tight-aggressive regular, a loose-aggressive player, and a calling station each demand a
              different preflop adjustment, and making that adjustment is where real money lives beyond
              the baseline.
            </Lead>
            <P>
              Your GTO baseline is the strategy that&apos;s hard to exploit. But most low-stakes
              opponents are wildly exploitable, and the single biggest preflop edge is reading their type
              and adjusting. Here&apos;s a compact map.
            </P>
            <figure className="mt-6 mb-6 overflow-x-auto">
              <table
                aria-label="Four common opponent types and the single preflop adjustment each one demands"
                className="w-full text-sm"
                style={{ borderCollapse: 'separate', borderSpacing: 0, border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}
              >
                <thead>
                  <tr style={{ backgroundColor: 'rgba(74, 222, 128, 0.08)' }}>
                    <th className={th3} style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Opponent type</th>
                    <th className={th3} style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Tell</th>
                    <th className={th3} style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Your preflop adjustment</th>
                  </tr>
                </thead>
                <tbody>
                  {playerTypes.map((row, i) => (
                    <tr key={row.type} style={{ backgroundColor: i % 2 === 0 ? 'var(--surface)' : 'var(--background)' }}>
                      <td className={td3} style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)', fontWeight: 600 }}>{row.type}</td>
                      <td className={td3} style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>{row.tell}</td>
                      <td className={td3} style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>{row.adj}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <figcaption className="text-xs mt-3 text-center" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>
                Four common opponent types and the single preflop adjustment each one demands.
              </figcaption>
            </figure>
            <P>
              The pattern is simple. Against players who fold too much, bluff more. Against players who
              never fold, bluff less and value bet bigger. The baseline is your home, and reading type is
              how you step away from it on purpose.
            </P>

            <H2>How to Find Your Own Biggest Leaks</H2>
            <Lead>
              <S>Self-auditing</S> turns this list into a diagnostic. Run a short honest review of your
              own game and fix one leak at a time from the top of the ranked list down, since the most
              expensive leaks are almost all preflop and the cheapest to correct.
            </Lead>
            <P>
              A list of mistakes is only useful if you can see which ones are yours. So run through these
              questions honestly after your next session, ideally with a few hands you remember in front
              of you:
            </P>
            <ul className="mt-4 space-y-2 list-disc pl-6">
              <li>Do I limp into pots, ever, when I&apos;m first in?</li>
              <li>Do I open the same range from every seat instead of tightening early and widening late?</li>
              <li>Do I ever 3-bet as a bluff, or do I only ever 3-bet my premiums?</li>
              <li>Do I call with draws without actually checking the price plus my implied odds?</li>
              <li>Do I tilt and loosen up after a bad beat or a cooler?</li>
            </ul>
            <P>
              If you answered yes to any of those, you&apos;ve found a leak. Now resist the urge to fix
              all of them at once. Isolate one, the highest one on this ranked list that applies to you,
              and work on just that until it&apos;s automatic before moving to the next. Since the top
              items are preflop, that&apos;s where you start.
            </P>
            <P>
              A fast feedback loop helps enormously. Tracking your preflop accuracy on isolated spots
              gives you a clean number that goes up as a leak closes, which is far more motivating than a
              vague sense that you&apos;re playing better. And here&apos;s the encouraging part: for most
              low-stakes players, fixing just the top three preflop leaks (playing too many hands, open
              limping, and ignoring position) is enough to move from losing to break-even or better. You
              don&apos;t need to fix all 14 to win. You need to fix the expensive ones first. If
              you&apos;re unsure where your hand selection stands, that&apos;s the first thing to tighten,
              starting with{' '}
              <GL href="/blog/poker-starting-hands">which starting hands to play by position</GL>.
            </P>

            <H2>Quick Reference: The 14 Mistakes and Their Fixes</H2>
            <Lead>
              <S>The full list</S> sits in one scannable table below, each mistake paired with what it
              costs you and the fix in a single line. Screenshot it and check your game against it after
              any session to see which leaks are still open.
            </Lead>
            <figure className="mt-6 mb-6 overflow-x-auto">
              <table
                aria-label="The 14 most common preflop poker mistakes, what each one costs you, and the one-line fix"
                className="w-full text-sm"
                style={{ borderCollapse: 'separate', borderSpacing: 0, border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}
              >
                <thead>
                  <tr style={{ backgroundColor: 'rgba(74, 222, 128, 0.08)' }}>
                    <th className={th3} style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Mistake</th>
                    <th className={th3} style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>What it costs you</th>
                    <th className={th3} style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>The fix</th>
                  </tr>
                </thead>
                <tbody>
                  {mistakesTable.map((row, i) => (
                    <tr key={row.m} style={{ backgroundColor: i % 2 === 0 ? 'var(--surface)' : 'var(--background)' }}>
                      <td className={td3} style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)', fontWeight: 600 }}>{row.m}</td>
                      <td className={td3} style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>{row.cost}</td>
                      <td className={td3} style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>{row.fix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <figcaption className="text-xs mt-3 text-center" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>
                The 14 most common preflop poker mistakes, what each one costs you, and the one-line fix.
              </figcaption>
            </figure>
            <P>
              Notice the pattern. Numbers 1 through 6 are all preflop, and they&apos;re the most
              expensive, because they happen most often and they shape every street that follows. So fix
              the preflop leaks first. They&apos;re the cheapest to correct and the most frequent, which
              means the biggest return on your effort. Once those are automatic, layer in the postflop
              fixes (draws, ranges, slowplaying) and the mental-game fixes (bankroll, tilt,
              results-orientation), and your win rate climbs from both ends.
            </P>

            <CTABox
              headline="Fix the expensive leaks first, one rep at a time"
              text="You don't need to fix all 14 to win. Fix the top preflop leaks until the right decision is automatic. Poker Reflex drills them hand by hand with instant GTO feedback, accuracy stats, and an ELO rating, in 6-max and 9-max, across every position and stack depth. Free to download on iOS and Android."
            />

            <H2>Frequently asked questions</H2>

            <H3>What are the most common preflop poker mistakes?</H3>
            <P>
              The most common preflop poker mistakes are playing too many hands, open limping, ignoring
              position, and either never 3-betting or 3-betting with the wrong size. These are also the
              most expensive, because a bad preflop decision forces you to guess on every later street.
              Postflop and mental leaks come next, but fixing the preflop ones first gives you the
              biggest improvement for the least effort.
            </P>

            <H3>What is the most common preflop mistake in poker?</H3>
            <P>
              Playing too many hands is the single most common and most expensive preflop mistake.
              Beginners open dominated hands like KJo and QJo from early position and small offsuit aces
              like A7o from under the gun, then bleed chips out of position all session. The fix is to
              tie your starting range to your seat, roughly the top 10 to 15% from early position
              widening toward the button, built around pocket pairs, suited broadways, and suited aces.
            </P>

            <H3>Why is open limping a mistake in poker?</H3>
            <P>
              Open limping (just calling the big blind as the first player into the pot) is a mistake
              because you can never win the pot preflop, you give up the initiative, and you invite
              multiple opponents in cheaply against a hand you&apos;ve shown is weak. Limped pots become
              the small pots you rarely win and the big pots where you&apos;re often dominated. If a hand
              is worth playing, raise it to 2.5x or 3x; if it isn&apos;t, fold. There are rare
              deep-stacked or multiway exceptions, but they should be deliberate choices, not default
              play.
            </P>

            <H3>Why do beginners lose money playing poker?</H3>
            <P>
              Beginners usually lose a little at a time through repeated small leaks rather than one big
              disaster, and most of those leaks are preflop: too many hands, open limping, and ignoring
              position. Those decisions put them in tough out-of-position spots on every later street, so
              their postflop trouble is really a consequence of a preflop mistake. They also tend to tilt
              after bad beats and play above their bankroll, which turns normal variance into real
              losses.
            </P>

            <H3>How many hands should you play in poker?</H3>
            <P>
              It depends entirely on your position. From early seats at a full table, play tight, roughly
              the top 10 to 15% of hands, mostly pocket pairs, suited broadways, big offsuit broadways,
              and suited aces. As you move toward the button, widen your range because fewer players act
              behind you, and on the button you can open a wide range to steal the blinds. The mistake is
              opening the same range from every seat instead of tightening early and widening late.
            </P>

            <H3>What is the correct 3-bet size in poker?</H3>
            <P>
              A standard 3-bet is about 3x the original raise when you&apos;re in position and about 4x
              when you&apos;re out of position, with smaller sizes for short stacks and tournaments. So if
              a player opens to $6 at $1/$2, you&apos;d 3-bet to around $18 in position or $24 from the
              blinds, not a tiny $12. The bigger out-of-position size charges opponents for the fact that
              they get to act after you on every later street, and a tiny 3-bet just hands them perfect
              odds to continue.
            </P>

            <H3>How does position affect your preflop mistakes?</H3>
            <P>
              Position multiplies almost every other leak because acting last gives you more information
              on every street, so playing out of position amplifies bad hand selection, bad bet sizing,
              and loose calling. The same two cards can be a clear fold under the gun and a clear open
              from the button, like A9o, purely because of how many players act behind you. The fix is to
              tighten your range when more players are left to act and widen it as you approach the button
              and blinds.
            </P>

            <H3>How do I stop making the same poker mistakes?</H3>
            <P>
              Start by running a short self-audit (do you limp, open the same range from every seat, never
              3-bet light, call draws without checking the price, or tilt after beats), then fix one leak
              at a time from the most expensive down, which means preflop first. Reading about a mistake
              only tells you it exists; removing it takes active repetition until the correct decision is
              automatic. Drilling isolated preflop spots with instant feedback, away from the table and
              never during live online play, builds the right instincts much faster than chasing results
              while you play.
            </P>
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}
