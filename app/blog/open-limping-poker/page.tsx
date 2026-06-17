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
  title: 'Open Limping Poker: When to Limp vs Raise Preflop',
  description:
    'Open limping is usually a preflop leak that costs you fold equity and pots. Learn why, see the real EV and rake math, and the few spots where limping is correct.',
  keywords:
    'open limping poker, limping in poker, is open limping bad, when to limp in poker, open limp vs raise, why is limping a leak, over limping poker, limp vs open raise, should you ever limp preflop, button limp short stack, blind vs blind limp',
  alternates: { canonical: `${SITE_URL}/blog/open-limping-poker` },
  openGraph: {
    title: "Open Limping in Poker: Why It's a Leak (and When It's Not)",
    description:
      'Why open limping is usually a leak, the real EV and rake math behind it, and the few spots where limping preflop is actually correct.',
    url: `${SITE_URL}/blog/open-limping-poker`,
    siteName: 'Poker Reflex',
    type: 'article',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Open Limping in Poker: Why It's a Leak (and When It's Not)",
    description:
      'Why open limping is usually a leak, the real EV and rake math, and the few spots where limping preflop is correct.',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
}

// ---------------------------------------------------------------------------
// JSON-LD
// ---------------------------------------------------------------------------

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Open Limping in Poker: Why It's a Leak (and the Few Spots Where It's Not)",
  description:
    'Why open limping is usually a leak, the real EV and rake math behind it, and the few spots where limping preflop is actually correct, with limp vs raise range grids and a decision framework.',
  author: { '@type': 'Organization', name: 'Poker Reflex' },
  publisher: {
    '@type': 'Organization',
    name: 'Poker Reflex',
    logo: { '@type': 'ImageObject', url: BRAND_ASSETS.squareLogoUrl },
  },
  image: BRAND_ASSETS.squareLogoUrl,
  datePublished: '2026-06-17',
  dateModified: '2026-06-17',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/blog/open-limping-poker`,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is open limping ever good in poker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Almost never as a first-in play. The default is raise or fold. The legitimate exceptions are narrow: short-stack limp-or-jam constructions (roughly 12 to 18bb, mostly from the small blind), completing the small blind in blind-vs-blind spots, a read-based limp-reraise against a player who attacks limps too aggressively, and a few live-game adjustments against very passive pools. Modern solvers do show tiny small-blind complete frequencies even at 100bb, so the small blind is a genuine partial exception, but in a standard 100bb cash game from any other seat, open limping is a leak.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is limping considered a leak?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An open limp gives up fold equity, because the big blind always gets to check their option and see a flop for free, so you can almost never win the pot uncontested before the flop. It also surrenders the initiative that comes with being the raiser, tends to create multiway pots where your hand equity drops, and caps your range, since strong players raise their best hands, so a limp signals you do not have a premium. Raising instead can take the pot down immediately and isolates one opponent.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between open limping and over limping?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Open limping is entering the pot for one big blind as the first player to act, with no raise before you. Over limping (or limping behind) is just calling the big blind after one or more players have already limped in front of you. Open limping is almost always a mistake. Over limping a speculative hand in position can sometimes be defensible because the pot odds and multiway implied odds are better, and unlike an open limp, players still to act behind you can fold.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is it OK to limp on the button?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Less often than people think. At around 20bb on the button, the standard first-in play is a 2x min-raise (or an open-jam with the top and bottom of your range), not an open limp. A genuine limping option mostly shows up shorter, around 12 to 18bb, and mainly from the small blind in limp-or-jam constructions, not as a passive button open. At 100bb you should simply raise or fold from the button.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does open limping actually cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It costs you the fold equity you would have gained by raising plus the edge of playing heads-up with initiative instead of multiway out of control. In a worked A9o from the button example, raising picks up the blinds a meaningful share of the time and plays a clean heads-up pot the rest, while limping wins almost nothing uncontested and bloats into multiway pots. Rake makes it worse, but not because limped pots are raked at a higher rate. It is because a raise often wins the pot preflop and pays zero rake, while a limp almost guarantees a raked flop.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should you limp small pocket pairs to set mine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Open limping small pairs as the first player in is still usually a leak. You would rather raise to take the pot down or play heads-up with initiative. Over limping a small pair behind several other limpers in position can be fine because you are getting cheap multiway implied odds to flop a set. The key is deep enough stacks, roughly 15 to 20 times the amount you have to call (so calling 1bb wants about 15 to 20bb behind, not 15 to 20 times the pot), so the times you hit pay you off.',
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

const btnHands = Array.from(
  parseRangeNotation(RANGES['6max'].open.find((r) => r.position === 'BTN')!.notation)
)

// The narrow set of hands that can appear in a short-stack limp-or-jam plan.
// Suited connectors plus a few suited blockers, no small offsuit junk.
const limpEligible = ['76s', '87s', '98s', 'T9s', '65s', '54s', 'K9s', 'Q9s', 'J9s', 'A5s']

const compareCols = ['', 'Open limp', 'Over limp', 'Complete the SB']
const compareRows: string[][] = [
  ['Definition', 'Call the BB as the first player in', 'Call after someone already limped', 'SB matches the BB, folded to you'],
  ['Mistake level', 'High, almost always a leak first-in', 'Low to medium, often defensible', 'Low, a real mixed strategy in BvB'],
  ['When it can be right', 'Narrow: short-stack limp-or-jam, soft live pools', 'Speculative hands in position, deep multiway', 'Blind vs blind, getting a price closing the action'],
  ['Better default', 'Raise or fold', 'Often raise to isolate instead', 'Mix completes with raises and folds'],
]

const formatRows: string[][] = [
  ['Deep cash (100bb+)', '100bb and up', 'Closed, except SB complete in BvB', 'Raise or fold'],
  ['MTT, mid stack', '25 to 50bb', 'Mostly closed', 'Raise (smaller) or fold'],
  ['MTT, short stack', '12 to 18bb', 'Narrow, limp-or-jam (mostly SB)', 'Min-raise, jam, or limp-or-jam'],
  ['9-max full ring', 'Any', 'Closed first-in', 'Tighter raise or fold (more players behind)'],
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

export default function OpenLimpingArticle() {
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
            Open Limping in Poker: Why It&apos;s a Leak (and the Few Spots Where It&apos;s Not)
          </h1>
          <div className="flex items-center gap-4 mb-10 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <span>By Poker Reflex</span>
            <span>&middot;</span>
            <span>June 17, 2026</span>
            <span>&middot;</span>
            <span>11 min read</span>
          </div>

          <div
            className="prose-article"
            style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-secondary)' }}
          >
            <p>
              Walk into any low-stakes live game and you&apos;ll see it within the first orbit. Somebody
              tosses in one chip to match the big blind, then another player does the same, and suddenly
              five people are seeing a flop for the minimum with no idea what anyone holds. That&apos;s open
              limping, and for most of those players it&apos;s quietly costing them money every single
              session.
            </p>
            <P>
              So is open limping bad? As a first-in play, almost always yes. But &quot;almost always&quot; is
              doing real work in that sentence, because there are a handful of spots where a limp is genuinely
              correct. This guide gives you the verdict up front, the actual EV and rake math behind why
              limping loses, a table-ready decision framework, visual limp-vs-raise range grids, and the short
              list of exceptions that hold up. The skill this whole article is about, deciding to open or fold
              instantly, is exactly what a swipe trainer drills into your instincts.
            </P>

            <H2>What is open limping in poker?</H2>
            <Lead>
              <S>Open limping</S> means entering the pot for exactly one big blind as the first player to act,
              with no raise in front of you. You&apos;re calling the big blind rather than raising it. And for
              almost every seat at almost every stack depth, it&apos;s a leak.
            </Lead>
            <P>
              The word &quot;open&quot; matters because it separates this from two other actions people lump
              together. An open limp is you, first in, choosing to call instead of raise or fold. That&apos;s
              different from limping behind someone, and it&apos;s different from completing the small blind.
              Those distinctions change the math, so let&apos;s pin them down before we go anywhere else.
            </P>

            <H3>Open limp vs over limp vs completing the small blind</H3>
            <P>
              An <S>open limp</S> is first-in passivity. Nobody has entered the pot, the action folds to you,
              and instead of raising a hand worth playing or folding one that isn&apos;t, you flat the big
              blind. An <S>over limp</S> (also called limping behind) is when one or more players have already
              limped and you call along. A <S>small blind complete</S> is the specific case where the action
              folds to you in the small blind and you put in the extra half-bet to match the big blind rather
              than raising or folding. These are not the same decision, and they don&apos;t carry the same
              penalty.
            </P>
            <figure className="mt-6 mb-6 overflow-x-auto">
              <table
                aria-label="Comparison of open limping, over limping, and completing the small blind"
                className="w-full text-sm"
                style={{ borderCollapse: 'separate', borderSpacing: 0, border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}
              >
                <thead>
                  <tr style={{ backgroundColor: 'rgba(74, 222, 128, 0.08)' }}>
                    {compareCols.map((c) => (
                      <th key={c || 'label'} className={th3} style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>
                        {c || ' '}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row, i) => (
                    <tr key={row[0]} style={{ backgroundColor: i % 2 === 0 ? 'var(--surface)' : 'var(--background)' }}>
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className={td3}
                          style={{
                            color: j === 0 ? 'var(--text)' : 'var(--text-secondary)',
                            fontWeight: j === 0 ? 600 : 400,
                            borderBottom: i === compareRows.length - 1 ? undefined : '1px solid var(--border)',
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
                Comparison of open limping, over limping, and completing the small blind.
              </figcaption>
            </figure>

            <H3>The one-line verdict: limp first-in is almost always a mistake</H3>
            <P>
              Here&apos;s the takeaway you can act on right now. If you&apos;re the first player into the pot,
              raise the hands worth playing and fold the rest. Open limping should be a deliberate, read-based
              exception, not your default. The rest of this guide proves why with real numbers, then shows you
              the exact spots where a limp earns its keep. If you want the wider context, open limping is one
              of the{' '}
              <GL href="/blog/preflop-poker-mistakes">common preflop poker mistakes</GL> that bleed low-stakes
              players the most.
            </P>

            <H2>Why open limping is usually a leak</H2>
            <Lead>
              Open limping caps your range, surrenders the initiative that comes with raising, hands away most
              of your fold equity, and tends to drag you into <S>multiway pots</S> where your hand realizes far
              less of its equity. None of those costs are huge on their own. Stacked together, orbit after
              orbit, they&apos;re a real leak.
            </Lead>

            <H3>You give up fold equity (an open limp can&apos;t take it down)</H3>
            <P>
              When you raise first-in, a big chunk of your profit comes from everyone folding. You pick up the
              blinds (and any antes) uncontested, risk nothing further, and move on. An <S>open limp</S> throws
              that away. Because you&apos;re not the last to act, the big blind always gets to check their
              option and see a flop for free, so an open limp can almost never win the pot before the flop.
              You&apos;ve removed the single easiest way the hand makes money.
            </P>
            <P>
              That&apos;s specific to opening, by the way. If you limp behind other players (an over limp), the
              people still to act behind you can fold, and a limp-reraise can win uncontested after someone
              raises. But the open limp, first-in, with the big blind guaranteed a free look? That one really
              does forfeit your fold equity.
            </P>

            <H3>You cap your range and lose initiative</H3>
            <P>
              Strong players raise their best hands. So when you limp, observant opponents read your range as
              capped, you almost certainly don&apos;t have aces, kings, or anything premium, because you&apos;d
              have raised those. That makes you easy to play against. They can attack your limp with an{' '}
              <S>isolation raise</S>, and you&apos;re stuck calling out of position with a hand you&apos;ve
              already advertised as weak.
            </P>
            <P>
              Raising does the opposite. The raiser carries <S>preflop initiative</S> into the flop. You get to
              make the first continuation bet, you represent the strongest range, and you put the decisions on
              your opponent. Being the aggressor is worth real money across a session, and the limp gives it
              away for free.
            </P>

            <H3>You invite multiway pots that crush your equity</H3>
            <P>
              A raise prices people out. A limp invites them in. When the price to enter is one big blind, hands
              that would never call a raise happily tag along, and now you&apos;re four-handed to a flop with a
              marginal holding. That&apos;s a disaster for <S>equity realization</S>. A hand like KJo might have
              decent equity heads-up, but against three other ranges it gets dominated constantly and rarely
              gets to the river as the best hand. Limping manufactures exactly the multiway mess that marginal
              hands hate.
            </P>

            <H3>You let the big blind see a free flop</H3>
            <P>
              This is the cleanest single argument. Limp first-in and the big blind, who already has a full bet
              in, gets to check and see the flop without paying another chip. You&apos;ve given a random hand a
              free shot to flop two pair or a set against you, with no chance to fold it out preflop. Raise
              instead and that same big blind has to either commit more chips with a real hand or fold the junk.
              For a fuller look at why your seat changes all of this, see{' '}
              <GL href="/blog/poker-positions">how poker positions change your strategy</GL>.
            </P>

            <H2>The math: what open limping actually costs you</H2>
            <Lead>
              The cost of limping isn&apos;t abstract. You can put numbers on it. Raising a marginal hand picks
              up the blinds a meaningful share of the time and plays a clean heads-up pot the rest. Limping wins
              almost nothing uncontested and bloats into multiway pots where your equity drops. Then rake
              quietly takes its cut on top.
            </Lead>

            <H3>A worked example: raise vs limp with A9o on the button</H3>
            <P>
              Let&apos;s use A9o on the button at $1/$2, 100bb deep, folded to you. A9o is a textbook open here.
              It&apos;s too good to fold on the button, but it&apos;s the kind of marginal-but-playable hand
              people are tempted to limp. Compare the two lines outcome by outcome.
            </P>
            <P>
              If you raise to $6, the blinds fold often enough that you simply collect the $3 in blinds a
              healthy share of the time, risk-free. When you do get called, you&apos;re heads-up, in position,
              with initiative and a hand that flops top pair plenty. If you limp for $2 instead, you basically
              never win it preflop (the big blind checks and sees a flop free), and you frequently end up
              multiway and out of control. Here&apos;s the rough EV picture.
            </P>
            <figure className="mt-6 mb-6 overflow-x-auto">
              <table
                aria-label="Worked EV comparison of raising versus open limping A9o from the button"
                className="w-full text-sm"
                style={{ borderCollapse: 'separate', borderSpacing: 0, border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}
              >
                <thead>
                  <tr style={{ backgroundColor: 'rgba(74, 222, 128, 0.08)' }}>
                    <th className={th3} style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Outcome</th>
                    <th className={th3} style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Approx. frequency</th>
                    <th className={th3} style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Raise to $6</th>
                    <th className={th3} style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Open limp $2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ backgroundColor: 'var(--surface)' }}>
                    <td className={td3} style={{ color: 'var(--text)', fontWeight: 600, borderBottom: '1px solid var(--border)' }}>Everyone folds</td>
                    <td className={td3} style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>~55% raise / ~0% limp</td>
                    <td className={td3} style={{ color: 'var(--green)', fontWeight: 600, borderBottom: '1px solid var(--border)' }}>Win $3 uncontested</td>
                    <td className={td3} style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Almost never happens</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--background)' }}>
                    <td className={td3} style={{ color: 'var(--text)', fontWeight: 600, borderBottom: '1px solid var(--border)' }}>Heads-up, in position</td>
                    <td className={td3} style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>~35% raise / ~30% limp</td>
                    <td className={td3} style={{ color: 'var(--green)', fontWeight: 600, borderBottom: '1px solid var(--border)' }}>Edge with initiative</td>
                    <td className={td3} style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>No initiative, smaller pot</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--surface)' }}>
                    <td className={td3} style={{ color: 'var(--text)', fontWeight: 600 }}>Multiway flop</td>
                    <td className={td3} style={{ color: 'var(--text-secondary)' }}>~10% raise / ~70% limp</td>
                    <td className={td3} style={{ color: 'var(--text-secondary)' }}>Rare, manageable</td>
                    <td className={td3} style={{ color: 'var(--red)', fontWeight: 600 }}>Equity crushed, OOP guessing</td>
                  </tr>
                </tbody>
              </table>
              <figcaption className="text-xs mt-3 text-center" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>
                Worked EV comparison of raising versus open limping A9o from the button. Frequencies are
                approximate and depend on opponents.
              </figcaption>
            </figure>
            <P>
              The frequencies are rough, but the shape is the point. The raise wins a small pot outright more
              than half the time and keeps the rest clean and heads-up. The limp converts almost all of that
              free money into multiway flops where A9o is exactly the hand you don&apos;t want to be playing
              four ways out of position.
            </P>

            <H3>Fold equity has real dollar value</H3>
            <P>
              Stealing $3 in blinds at $1/$2 doesn&apos;t sound like much. But over thousands of hands, the
              steals you collect with no showdown are a large slice of a winning player&apos;s profit. Every
              time you limp instead of raise, you opt out of that slice. Multiply $3 by the number of times
              you&apos;d have taken it down across a year of play and the &quot;free&quot; money you skipped is
              enormous. Raising your{' '}
              <GL href="/blog/poker-starting-hands">starting hands worth opening</GL> instead of limping them
              captures that value hand after hand.
            </P>

            <H3>How rake quietly punishes limped pots</H3>
            <P>
              Rake makes limping worse, but not in the way people usually say. Most online rake is capped
              (commonly around 5% with a cap of just a few big blinds at low stakes), and many sites use
              &quot;no flop, no drop,&quot; meaning a hand that ends preflop is raked nothing at all. So the
              real cost isn&apos;t that limped pots are raked at a higher rate. It&apos;s that a raise
              frequently wins the pot before the flop and pays zero rake, while a limp almost guarantees you see
              a flop, which means that pot gets raked every time. A line that often ends the hand rake-free
              beats a line that locks in a raked flop. To put real prices on your own spots, you can{' '}
              <GL href="/tools/pot-odds-calculator">run the pot odds yourself</GL> with the free calculator.
            </P>

            <CTABox
              headline="Turn raise-or-fold into a reflex"
              text="The whole skill this article is about, opening the right hands and folding the rest first-in, is what Poker Reflex drills. Swipe right to open, left to fold, with instant GTO feedback across positions and stack depths, in 6-max and 9-max. Free to download on iOS and Android."
            />

            <H2>Limp vs raise vs fold: a simple table decision framework</H2>
            <Lead>
              You don&apos;t need a solver running in your head at the table. You need a default you can apply
              in two seconds. Here it is: if a hand is worth playing, raise it. If it isn&apos;t, fold it. Limp
              only in the specific exception spots below, and never just because you couldn&apos;t decide.
            </Lead>

            <H3>The default rule: raise or fold, rarely limp</H3>
            <P>
              The vast majority of your preflop decisions collapse to two choices, raise or fold. Limping enters
              the picture only in a short list of structural spots: very short stacks where the play is really
              limp-or-jam, blind-vs-blind from the small blind, and a few soft-live adjustments. If your
              situation isn&apos;t on that list, you&apos;re choosing between raising and folding. Full stop.
            </P>
            <figure className="mt-6 mb-6 overflow-x-auto">
              <table
                aria-label="Preflop decision table for when to limp, raise, or fold"
                className="w-full text-sm"
                style={{ borderCollapse: 'separate', borderSpacing: 0, border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}
              >
                <thead>
                  <tr style={{ backgroundColor: 'rgba(74, 222, 128, 0.08)' }}>
                    <th className={th3} style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Situation</th>
                    <th className={th3} style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Action</th>
                    <th className={th3} style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Why</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ backgroundColor: 'var(--surface)' }}>
                    <td className={td3} style={{ color: 'var(--text)', fontWeight: 600, borderBottom: '1px solid var(--border)' }}>First in, 100bb, any seat</td>
                    <td className={td3} style={{ color: 'var(--green)', fontWeight: 600, borderBottom: '1px solid var(--border)' }}>Raise or fold</td>
                    <td className={td3} style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Capture fold equity, keep initiative</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--background)' }}>
                    <td className={td3} style={{ color: 'var(--text)', fontWeight: 600, borderBottom: '1px solid var(--border)' }}>First in, button, ~20bb</td>
                    <td className={td3} style={{ color: 'var(--green)', fontWeight: 600, borderBottom: '1px solid var(--border)' }}>Min-raise or fold</td>
                    <td className={td3} style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>A 2x is the standard short-stack open, not a limp</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--surface)' }}>
                    <td className={td3} style={{ color: 'var(--text)', fontWeight: 600, borderBottom: '1px solid var(--border)' }}>Small blind, folded to you (BvB)</td>
                    <td className={td3} style={{ color: 'var(--gold)', fontWeight: 600, borderBottom: '1px solid var(--border)' }}>Mix: complete, raise, or fold</td>
                    <td className={td3} style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>A genuine mixed strategy, even deep</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--background)' }}>
                    <td className={td3} style={{ color: 'var(--text)', fontWeight: 600, borderBottom: '1px solid var(--border)' }}>Limpers in front, position, speculative hand</td>
                    <td className={td3} style={{ color: 'var(--gold)', fontWeight: 600, borderBottom: '1px solid var(--border)' }}>Over-limp or raise to isolate</td>
                    <td className={td3} style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Cheap implied odds, or charge the limpers</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--surface)' }}>
                    <td className={td3} style={{ color: 'var(--text)', fontWeight: 600 }}>Strong hand, aggressive iso-raiser behind</td>
                    <td className={td3} style={{ color: 'var(--gold)', fontWeight: 600 }}>Limp with intent to re-raise</td>
                    <td className={td3} style={{ color: 'var(--text-secondary)' }}>Read-based limp-shove trap only</td>
                  </tr>
                </tbody>
              </table>
              <figcaption className="text-xs mt-3 text-center" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>
                Preflop decision table for when to limp, raise, or fold.
              </figcaption>
            </figure>

            <H3>Reading the table: position, stack depth, action in front</H3>
            <P>
              Three inputs decide everything. Your <S>position</S> sets how wide you can play and how much fold
              equity a raise carries. Your <S>effective stack depth</S> decides whether a normal raise is even
              the right size, since short stacks change the structure entirely. And the action in front of you
              decides whether you&apos;re opening, over-limping, or trapping. Notice that not one row says
              &quot;open limp first-in because the hand felt marginal.&quot; That&apos;s the line to delete from
              your game. For the sizing side of the raise option, see{' '}
              <GL href="/blog/poker-bet-sizing">correct preflop bet sizing</GL>.
            </P>

            <H2>Limp vs raise preflop ranges by position</H2>
            <Lead>
              It helps to see how wide a legitimate raising range is compared to how tiny a legitimate limping
              range is. The button and cutoff open a lot of hands first-in. The spots where limping is actually
              correct cover almost nothing by comparison. Here are the grids.
            </Lead>

            <H3>Standard open-raise range (button, 100bb)</H3>
            <P>
              One quick note before the grid. The cutoff and button are not the same range, so I&apos;m not
              going to mash them into one square. The button opens roughly 40 to 48% of hands first-in, the
              cutoff more like 27 to 32%. Showing them as one grid would either make the cutoff look way too
              wide or the button look way too tight. Since our worked example is A9o on the button, here&apos;s
              the button raise-first-in range. Every highlighted hand is a raise, and there is no limp in it.
            </P>
            <RangeGrid
              title="Button open-raise range (100bb)"
              caption="A standard button opening range, about 40% of hands. Every highlighted hand is a raise, none are limps."
              ariaLabel="Standard button open-raise range at 100 big blinds: all pairs, every suited ace, suited broadways and connectors, and a broad set of offsuit aces and broadways, all raised first in with no limps"
              inRangeHands={btnHands}
            />
            <P>
              Look at how much green there is. The button raises a wide, linear-leaning range first-in, and not
              a single one of those hands is a limp. The cutoff version of this grid is tighter, dropping the
              weakest offsuit aces and the loosest suited connectors, but the principle is identical: raise the
              ones worth playing, fold the rest.
            </P>

            <H3>The short-stack limp window (roughly 12 to 18bb)</H3>
            <P>
              Now the limp range, and here&apos;s where I have to correct a popular myth. At around 20bb on the
              button, the standard play first-in is still a 2x min-raise (or an open-jam with the very top and
              bottom of your shoving range), not an open limp. Pure button open-limping as a deliberate strategy
              is rare. Where a limping option genuinely appears, it&apos;s mostly a <S>small blind</S> phenomenon
              or a limp-or-jam construction nearer 12 to 18bb. So the legitimate limp set is tiny. These are
              roughly the only hands that want to limp rather than raise or shove.
            </P>
            <figure className="mt-6 mb-6">
              <div
                aria-label="The small set of hands that can limp inside a short-stack limp-or-jam construction"
                className="rounded-2xl border p-6"
                style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
              >
                <div className="flex flex-wrap gap-2 justify-center">
                  {limpEligible.map((hand) => (
                    <span
                      key={hand}
                      className="inline-flex items-center justify-center rounded-md font-semibold"
                      style={{
                        backgroundColor: 'rgba(251, 191, 36, 0.9)',
                        color: 'var(--background)',
                        padding: '6px 12px',
                        fontSize: '14px',
                      }}
                    >
                      {hand}
                    </span>
                  ))}
                </div>
                <p className="text-center mt-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  That&apos;s the whole legitimate limp set: a sliver of suited connectors and a couple of
                  suited blockers, inside a limp-or-jam plan. Everything else is raise, shove, or fold.
                </p>
              </div>
              <figcaption className="text-xs mt-3 text-center" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>
                Illustrative limp-eligible hands inside a short-stack limp-or-jam construction. The button
                default at 20bb stays raise or fold.
              </figcaption>
            </figure>

            <H3>Build and save your own limp vs raise ranges</H3>
            <P>
              Reading a grid is one thing. Building one yourself burns it into memory. You can{' '}
              <GL href="/tools/range-visualizer">build and save your own limp vs raise ranges</GL> in the free
              Range Visualizer, color them, store them per position in your browser, and tweak them as your
              reads sharpen. That hands-on step is how these abstract grids turn into real recall at the table.
            </P>

            <H2>The few times open limping is actually fine</H2>
            <Lead>
              Here&apos;s the honest exceptions list, each with the condition that makes it correct. Notice
              every one is narrow and structural. If your spot doesn&apos;t match a condition below, you&apos;re
              back to raise or fold.
            </Lead>

            <H3>Short-stack limp-or-jam (roughly 12 to 18bb)</H3>
            <P>
              At very short stacks, mostly from the small blind and in limp-or-jam constructions, a limping
              option can appear. The condition is the structure: you&apos;re shallow enough (around 12 to 18bb)
              that you&apos;re playing a limp-and-shove-back or limp-or-jam strategy, not a passive open-fold
              limp. At a clean 20bb on the button, that window isn&apos;t open yet, the default there is a
              min-raise or fold. So treat short-stack limping as a specific limp-or-jam tool, not a general
              short-stack habit.
            </P>

            <H3>Completing the small blind in blind vs blind</H3>
            <P>
              This is the most legitimate limp of all, and it&apos;s not only a short-stack play.{' '}
              <S>Blind vs blind</S>, when it folds to you in the small blind, completing (putting in the extra
              half-bet) is a genuine mixed strategy that modern solvers use even deep at 100bb. You&apos;re
              already invested, you&apos;re getting a price to close toward a heads-up flop, and your range can
              include completes alongside raises and folds. The condition: it&apos;s folded to you and
              you&apos;re in the small blind. This is the real deep-stack exception, the spot where limping is
              legitimately part of a sound strategy rather than a leak.
            </P>

            <H3>Limp with the intention to re-raise against an over-aggressive iso-raiser</H3>
            <P>
              This one trips people up because it sounds passive, but it isn&apos;t. The play is to open-limp a
              strong hand with the intention to re-raise, a <S>limp-reraise</S> (limp-shove or limp-3bet) trap,
              against a specific player who attacks limps too aggressively. You&apos;re not limping to play a
              small passive pot. You&apos;re limping to induce their wide isolation raise, then re-raising or
              jamming over the top for value. The required condition is a clear, specific read: you know a
              particular player behind you iso-raises limpers very wide. Without that read, this is just a fancy
              way to spew. With it, you turn their aggression into your value.
            </P>

            <H3>Soft live games: when a limp-heavy pool changes the math</H3>
            <P>
              In a passive, <S>limp-heavy live pool</S>, the math shifts. When the table folds far less than a
              solver assumes and players limp-call light, some of limping&apos;s downsides shrink. You&apos;ll
              still usually be better off raising to isolate and build pots with your good hands, but
              over-limping speculative hands behind the crowd, and occasionally taking a cheap flop, can be
              defensible against opponents who pay off big when you hit. The condition: a genuinely passive pool
              that doesn&apos;t punish limps and pays off your made hands. This is an exploit, not a default.
              And it lives almost entirely in live $1/$2 and $1/$3 limp-fests, since online pools rarely limp
              and punish it hard. For the framework behind these adjustments, see{' '}
              <GL href="/blog/gto-poker-for-beginners">GTO poker for beginners</GL>, then deviate on purpose.
            </P>

            <H2>Over limping: when calling behind other limpers is OK</H2>
            <Lead>
              Over limping is a different animal from open limping, and it&apos;s often fine. Calling behind
              players who&apos;ve already limped, with a speculative hand in position, can be defensible because
              the pot odds and multiway implied odds are good. The trick is knowing when to over-limp and when
              to raise to isolate instead.
            </Lead>

            <H3>Speculative hands in position multiway</H3>
            <P>
              Say two players limp in front of you and you&apos;re on the button with 76s or 55. Calling along
              gets you a cheap, multiway flop in position with a hand that wants exactly that, lots of opponents
              to pay you off when you flop a straight, a flush, or a set. This is real <S>implied odds</S> and{' '}
              <S>set mining</S> territory. <S>Suited connectors</S> and <S>small pocket pairs</S> realize their
              equity best when they can hit big and get paid, which a multiway limped pot supplies. The
              set-mining rule of thumb: you want your effective stack to be roughly 15 to 20 times the amount
              you have to call. So if you&apos;re calling 1bb to set-mine a small pair, you want about 15 to
              20bb behind (not 15 to 20 times the pot) so the times you flop a set pay you off enough to cover
              the times you miss.
            </P>

            <H3>When to raise to isolate limpers instead</H3>
            <P>
              Over-limping isn&apos;t always best. With a strong but not premium hand, raising to{' '}
              <S>isolate</S> the limpers is often better than tagging along. An <S>isolation raise</S> charges
              the limpers, thins the field, and lets you play a heads-up pot in position with initiative against
              a capped range (they limped, so they probably don&apos;t have a monster). A simple sizing
              heuristic: raise to your normal open plus about one big blind per limper. So over two limpers at
              $1/$2 you&apos;d make it roughly $12 to $14, and a bit more in position. The rule: speculative
              hand that wants a crowd, over-limp; strong hand that wants the limpers heads-up and paying, raise
              to isolate. And with true premiums, always raise, because limping aces into a four-way pot is the
              trap you set for yourself. If you&apos;re unsure how big to make that iso-raise, the logic is in{' '}
              <GL href="/blog/poker-bet-sizing">correct preflop bet sizing</GL>, and choosing to raise over limp
              ties straight into{' '}
              <GL href="/blog/what-is-a-3-bet-in-poker">raising and 3-betting instead of limping</GL>.
            </P>

            <H2>Cash vs tournament and 6-max vs 9-max differences</H2>
            <Lead>
              The limping calculus shifts with format and table size. Deeper cash stacks make raising even more
              clearly correct. Short tournament stacks crack open the narrow limp-or-jam window. And full ring
              plays a touch differently than 6-max because more players sit behind you first-in.
            </Lead>
            <figure className="mt-6 mb-6 overflow-x-auto">
              <table
                aria-label="How limping strategy changes across cash, tournament, 6-max, and 9-max"
                className="w-full text-sm"
                style={{ borderCollapse: 'separate', borderSpacing: 0, border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}
              >
                <thead>
                  <tr style={{ backgroundColor: 'rgba(74, 222, 128, 0.08)' }}>
                    <th className={th3} style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Format</th>
                    <th className={th3} style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Typical stack depth</th>
                    <th className={th3} style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Limp window?</th>
                    <th className={th3} style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Default first-in</th>
                  </tr>
                </thead>
                <tbody>
                  {formatRows.map((row, i) => (
                    <tr key={row[0]} style={{ backgroundColor: i % 2 === 0 ? 'var(--surface)' : 'var(--background)' }}>
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className={td3}
                          style={{
                            color: j === 0 ? 'var(--text)' : 'var(--text-secondary)',
                            fontWeight: j === 0 ? 600 : 400,
                            borderBottom: i === formatRows.length - 1 ? undefined : '1px solid var(--border)',
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
                How limping strategy changes across cash, tournament, 6-max, and 9-max.
              </figcaption>
            </figure>

            <H3>Why deep cash stacks make limping worse</H3>
            <P>
              The deeper the stacks, the more your positional and initiative edge compounds across streets, and
              the more it hurts to surrender that edge by limping out of position. With 100bb behind, the raiser
              can apply pressure on every street and realize equity far better than the passive limper.{' '}
              <S>Reverse implied odds</S> bite the limper too: deep, your dominated marginal hands can win a
              small pot and lose a huge one. So deep cash is where raise-or-fold is most clearly correct.
            </P>

            <H3>Why short tournament stacks open the limp window</H3>
            <P>
              Shorten the stacks and the structure changes. Below roughly 18bb, you can&apos;t raise-call
              comfortably, so play shifts toward jamming and, in some spots (mostly the small blind), a
              limp-or-jam construction. The <S>big blind ante</S> common in modern tournaments adds dead money
              that nudges some short-stack ranges, but it still doesn&apos;t turn the button at 20bb into a
              limping seat. The window is narrow and structural, not a green light.
            </P>

            <H3>6-max vs 9-max first-in dynamics</H3>
            <P>
              In <S>6-max</S>, fewer players sit behind you first-in, so opening ranges run wider and stealing
              is more frequent. In <S>9-max full ring</S>, more players are left to act from early seats, so
              first-in ranges tighten and the under-the-gun open is a real commitment. Neither format makes open
              limping the default. Full ring just means you fold more of the marginal hands you&apos;d never
              have limped anyway. The app lets you drill both 6-max and 9-max so the first-in math becomes
              automatic in each.
            </P>

            <H2>How to fix the limping leak fast</H2>
            <Lead>
              Fixing the limping leak isn&apos;t complicated. Adopt a raise-or-fold default, memorize your
              first-in ranges by position, and drill the open-or-fold decision until it fires without thinking.
              Reading this article tells you the leak exists. Repetition is what removes it.
            </Lead>

            <H3>Adopt a raise-or-fold default</H3>
            <P>
              Make a rule with yourself: when you&apos;re first into the pot, you raise or you fold, with the
              only exceptions being the structural spots above (short-stack limp-or-jam, blind-vs-blind
              complete, a read-based limp-reraise, a soft live pool). If none of those apply, the limp option
              doesn&apos;t exist for you. That single rule deletes the most common version of this leak
              overnight, the lazy limp you make because you couldn&apos;t decide whether the hand was worth
              playing. If it wasn&apos;t worth a raise, it wasn&apos;t worth playing.
            </P>
            <P>
              If you use a tracker, there&apos;s a clean way to spot this leak in your own stats. A big gap
              between your VPIP (how often you put money in preflop) and your PFR (how often you raise first-in)
              is the statistical fingerprint of limping. Close that gap and aim for a near-zero limp frequency,
              and you&apos;ll know the fix is working in real numbers.
            </P>

            <H3>Drill first-in decisions until they&apos;re automatic</H3>
            <P>
              The fastest way to internalize raise-or-fold is repetition with instant feedback, away from the
              table. Drilling isolated first-in spots, hundreds of them, builds the reflex so that by the time
              you&apos;re at the felt, opening the right hands and folding the rest is automatic. That&apos;s
              exactly what <GL href="/">Poker Reflex</GL> is built for. It&apos;s a free swipe trainer: swipe
              right to open, left to fold, with instant GTO feedback telling you whether you got it right. You
              rep opens, 3-bets, 4-bets, and all-in spots across positions and stack depths, in both 6-max and
              9-max, with an ELO rating and accuracy stats that let you watch the limping leak shrink in real
              numbers. And because it&apos;s a study tool you use away from live play, never during it, it
              builds correct instincts without crossing any line. Stop limping out of indecision. Drill the
              open-or-fold call until it&apos;s a reflex. Free to download on iOS and Android.
            </P>

            <CTABox
              headline="Cut the limp from your game for good"
              text="Raise or fold is a habit, and habits come from reps. Poker Reflex drills first-in open-or-fold decisions hand by hand, with instant GTO feedback, accuracy stats, and an ELO rating, in 6-max and 9-max across every position and stack depth. Free to download on iOS and Android."
            />

            <H2>Frequently asked questions</H2>

            <H3>Is open limping ever good in poker?</H3>
            <P>
              Almost never as a first-in play. The default is raise or fold. The legitimate exceptions are
              narrow: short-stack limp-or-jam constructions (roughly 12 to 18bb, mostly from the small blind),
              completing the small blind in blind-vs-blind spots, a read-based limp-reraise against a player who
              attacks limps too aggressively, and a few live-game adjustments against very passive pools. Modern
              solvers do show tiny small-blind complete frequencies even at 100bb, so the small blind is a
              genuine partial exception, but in a standard 100bb cash game from any other seat, open limping is
              a leak.
            </P>

            <H3>Why is limping considered a leak?</H3>
            <P>
              An open limp gives up fold equity, because the big blind always gets to check their option and see
              a flop for free, so you can almost never win the pot uncontested before the flop. It also
              surrenders the initiative that comes with being the raiser, tends to create multiway pots where
              your hand equity drops, and caps your range, since strong players raise their best hands, so a
              limp signals you don&apos;t have a premium. Raising instead can take the pot down immediately and
              isolates one opponent.
            </P>

            <H3>What is the difference between open limping and over limping?</H3>
            <P>
              Open limping is entering the pot for one big blind as the first player to act, with no raise
              before you. Over limping (or limping behind) is just calling the big blind after one or more
              players have already limped in front of you. Open limping is almost always a mistake. Over limping
              a speculative hand in position can sometimes be defensible because the pot odds and multiway
              implied odds are better, and unlike an open limp, players still to act behind you can fold.
            </P>

            <H3>When is it OK to limp on the button?</H3>
            <P>
              Less often than people think. At around 20bb on the button, the standard first-in play is a 2x
              min-raise (or an open-jam with the top and bottom of your range), not an open limp. A genuine
              limping option mostly shows up shorter, around 12 to 18bb, and mainly from the small blind in
              limp-or-jam constructions, not as a passive button open. At 100bb you should simply raise or fold
              from the button.
            </P>

            <H3>How much does open limping actually cost?</H3>
            <P>
              It costs you the fold equity you&apos;d have gained by raising plus the edge of playing heads-up
              with initiative instead of multiway out of control. In a worked A9o from the button example,
              raising picks up the blinds a meaningful share of the time and plays a clean heads-up pot the
              rest, while limping wins almost nothing uncontested and bloats into multiway pots. Rake makes it
              worse, but not because limped pots are raked at a higher rate. It&apos;s because a raise often wins
              the pot preflop and pays zero rake, while a limp almost guarantees a raked flop.
            </P>

            <H3>Should you limp small pocket pairs to set mine?</H3>
            <P>
              Open limping small pairs as the first player in is still usually a leak. You&apos;d rather raise to
              take the pot down or play heads-up with initiative. Over limping a small pair behind several other
              limpers in position can be fine because you&apos;re getting cheap multiway implied odds to flop a
              set. The key is deep enough stacks, roughly 15 to 20 times the amount you have to call (so calling
              1bb wants about 15 to 20bb behind, not 15 to 20 times the pot), so the times you hit pay you off.
            </P>
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}
