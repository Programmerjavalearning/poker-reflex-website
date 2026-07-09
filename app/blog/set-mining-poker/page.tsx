import type { Metadata } from 'next'
import { type ReactNode } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import QRCodeBlock from '@/components/QRCodeBlock'
import { BRAND_ASSETS, SITE_URL, APP_STORE_URL, PLAY_STORE_URL } from '@/lib/brand'

export const metadata: Metadata = {
  title: 'Set Mining in Poker: Odds, Rules and When to Call',
  description:
    'You only flop a set 11.8% of the time (7.5-to-1). Learn the set-mining implied-odds rule, the exact call or fold math with real chips, and when set mining dies.',
  keywords:
    'set mining poker, odds of flopping a set, set mining rule, implied odds set mining, small pocket pairs poker, when to set mine, flopping a set odds, set mining strategy',
  alternates: { canonical: `${SITE_URL}/blog/set-mining-poker` },
  openGraph: {
    title: 'Set Mining in Poker: Odds, Rules and When to Call',
    description:
      'How often you flop a set, the implied-odds rule that tells you when to call, a worked hand with real chips, and when set mining stops working.',
    url: `${SITE_URL}/blog/set-mining-poker`,
    type: 'article',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Set Mining in Poker: Odds, Rules and When to Call',
    description: 'You flop a set 11.8% of the time. The implied-odds rule, the math, and when to fold.',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Set Mining in Poker: Odds, Rules and When to Call',
  description:
    'A complete guide to set mining: how often you flop a set, the implied-odds rule, worked call or fold math with real chips, stack depth, and common mistakes.',
  author: { '@type': 'Organization', name: 'Poker Reflex' },
  publisher: {
    '@type': 'Organization',
    name: 'Poker Reflex',
    logo: { '@type': 'ImageObject', url: BRAND_ASSETS.squareLogoUrl },
  },
  image: BRAND_ASSETS.squareLogoUrl,
  datePublished: '2026-07-09',
  dateModified: '2026-07-09',
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/set-mining-poker` },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the odds of flopping a set?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With a pocket pair, you flop a set (three of a kind) about 11.8% of the time, which is roughly 7.5-to-1 against. You miss the flop nearly seven times out of eight. If you get to see all five community cards, your chance of making a set by the river rises to about 19%.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the set mining rule?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Call to set mine only when the effective stack behind you is roughly 15 to 20 times the amount you are calling. This is implied odds: because you flop a set only about 1 in 8.5, you need to be able to win a big pot the times you hit to cover all the times you miss. If you are calling 8bb, you want at least about 120 to 160bb sitting behind.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should you set mine when short stacked?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Short stacks kill the implied odds that make set mining work, because you cannot win enough when you hit to pay for all the times you miss. Below roughly 15 to 20 times your call in effective stack, folding is better, and at very short stacks a small pair usually becomes a jam-or-fold decision rather than a set-mining call.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is set mining profitable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, in the right spots. Set mining is a long-term implied-odds play: you lose a small amount many times, then win a big pot occasionally, and the big wins more than cover the small losses. It is profitable when the stacks are deep, the amount you call is small, and your opponent is the type who pays off big hands. Against short stacks or players who fold to aggression, it stops being profitable.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you set mine multiway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and multiway pots are actually great for set mining. More opponents means more people who can pay you off when you flop a set, which increases your implied odds. The only real downside is the rare set-over-set cooler, where someone flops a bigger set than yours, but that is uncommon enough to ignore in most spots.',
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

function OddsFigure() {
  return (
    <figure className="mt-6 mb-6">
      <div className="rounded-2xl border p-6" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          role="img"
          aria-label="The odds of flopping a set with a pocket pair are about 11.8 percent, roughly 7.5 to 1 against, and about 19 percent of making a set by the river if you see all five cards."
        >
          <div className="text-center rounded-xl p-5" style={{ backgroundColor: 'rgba(74, 222, 128, 0.1)' }}>
            <div className="font-heading font-bold text-4xl" style={{ color: 'var(--green)' }}>11.8%</div>
            <div className="mt-1 text-sm font-semibold" style={{ color: 'var(--text)' }}>flop a set</div>
            <div className="mt-1 text-xs" style={{ color: 'var(--text-secondary)' }}>about 7.5 to 1 against</div>
          </div>
          <div className="text-center rounded-xl p-5" style={{ backgroundColor: 'rgba(251, 191, 36, 0.12)' }}>
            <div className="font-heading font-bold text-4xl" style={{ color: 'var(--gold)' }}>~19%</div>
            <div className="mt-1 text-sm font-semibold" style={{ color: 'var(--text)' }}>set by the river</div>
            <div className="mt-1 text-xs" style={{ color: 'var(--text-secondary)' }}>if you see all five cards</div>
          </div>
        </div>
      </div>
      <figcaption className="text-xs mt-3 text-center" style={{ color: 'var(--text-secondary)', opacity: 0.75 }}>
        Your odds of hitting a set with a pocket pair. You miss the flop nearly seven times out of eight, which
        is exactly why set mining needs deep stacks and a payoff.
      </figcaption>
    </figure>
  )
}

export default function SetMiningArticle() {
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
            Set Mining in Poker: Odds, Rules and When to Call
          </h1>
          <div className="flex items-center gap-4 mb-10 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <span>By Poker Reflex</span>
            <span>·</span>
            <span>July 9, 2026</span>
            <span>·</span>
            <span>10 min read</span>
          </div>

          <div className="prose-article" style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>

            {/* Intro */}
            <p>
              You look down at a small pocket pair, someone raises in front of you, and you have a
              decision. Fold it? Or call and try to flop a <S>set</S> (three of a kind) that stacks
              somebody who never sees it coming? That second option is <S>set mining</S>, and done right
              it is one of the most profitable calls in poker. Done wrong, it quietly drains your stack one
              call at a time.
            </p>
            <p className="mt-4">
              The whole thing comes down to <S>one number and one rule</S>. This guide gives you both:
              exactly how often you flop a set (less than you think), the implied-odds rule that tells you
              when the call is profitable, a worked hand with real chips, and the spots where set mining
              stops working and you should just fold.
            </p>

            {/* What is it */}
            <H2>What Is Set Mining in Poker?</H2>
            <p>
              Set mining means <S>calling a raise with a small pocket pair</S> for the specific purpose of
              flopping a set, and planning to fold if you miss. You are not calling because 44 or 66 is a
              strong hand. You are calling because when it hits, it hits huge and hides beautifully.
            </p>
            <p className="mt-4">
              A set is three of a kind made with your <S>pocket pair plus one card on the board</S>, like
              flopping a third five when you hold pocket fives. It is nearly invisible: your opponent with
              an overpair or top pair has no idea you just crushed them, so they pay you off. That
              disguise is the whole point.
            </p>
            <p className="mt-4">
              Set mining is a play for the <S>small and medium pairs</S>, roughly 22 through 88, the ones
              that are too weak to happily call a raise for their high-card value. The bigger pairs (99 and
              up) usually play differently, because they are often already ahead. If the poker shorthand
              like 22 or 88 is not second nature yet, our guide to{' '}
              <A href="/blog/poker-hand-notation">poker hand notation</A> decodes it in a couple of minutes.
            </p>

            {/* Odds */}
            <H2>How Often Do You Actually Flop a Set?</H2>
            <p>
              Here is the number everything hangs on, and it surprises most people. When you hold a pocket
              pair, you flop a set only <S>11.8% of the time</S>. That is about <S>7.5 to 1 against</S>, or
              roughly once every eight and a half hands. You miss the flop almost seven times out of eight.
            </p>

            <OddsFigure />

            <p>
              If you get to see all five community cards, your chance of making a set by the river climbs to
              about 19%. But you rarely get to peel every card for free, so the flop number, 11.8%, is the
              one that drives every decision. Because you miss so often, the times you do hit have to pay
              you a <S>lot</S>. That single fact is what the entire set-mining rule is built on.
            </p>

            {/* The rule */}
            <H2>The Implied-Odds Rule: 15x to 20x Behind</H2>
            <p>
              You are not getting a good price to call right now. You are 7.5 to 1 against hitting, and the
              immediate pot lays you far less than that, so the call looks bad on paper. It works anyway because of{' '}
              <S>implied odds</S>: the money you win <S>later</S>, on the streets after you flop your set. To
              learn how implied odds and equity fit together, our{' '}
              <A href="/blog/poker-equity-explained">poker equity guide</A> lays out the math.
            </p>
            <p className="mt-4">
              The raw break-even math says you need to win about <S>7 to 8 times your call</S> the times you
              hit. Since you almost never win the entire stack every single time (sometimes they fold,
              sometimes the board scares them), you pad that number for safety. That gives the rule of thumb
              you can actually use at the table:
            </p>
            <p className="mt-4" style={{ fontSize: '20px', color: 'var(--text)', fontWeight: 600 }}>
              Call to set mine only if the effective stack behind you is about 15 to 20 times the amount you
              are calling.
            </p>
            <p className="mt-4">
              Notice it is 15 to 20 times <S>your call</S>, not the pot. If you are calling 8bb, you want at
              least about 120 to 160bb sitting behind to make the set mine worth it. Here is the quick
              lookup.
            </p>
            <figure className="mt-6 mb-6 overflow-x-auto">
              <table
                aria-label="Set mining implied-odds guideline based on the effective stack behind you as a multiple of the amount you are calling"
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
                    <th className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Effective stack behind (vs your call)</th>
                    <th className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Verdict</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ backgroundColor: 'var(--surface)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>20x or more</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Ideal, easy set-mine</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--background)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>15x to 20x</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Fine if the opponent pays off big hands</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--surface)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>10x to 15x</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Marginal, only vs a station who stacks off</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--background)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)' }}>Under 10x</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)' }}>Fold, the implied odds are not there</td>
                  </tr>
                </tbody>
              </table>
              <figcaption className="text-xs mt-3 text-center" style={{ color: 'var(--text-secondary)', opacity: 0.75 }}>
                The set-mining stack guideline. To put a real price on any spot, run it through the{' '}
                <A href="/tools/pot-odds-calculator">pot odds calculator</A>.
              </figcaption>
            </figure>

            {/* Worked example */}
            <H2>A Worked Example With Real Chips</H2>
            <p>
              Let&apos;s make it concrete. You are playing $1/$2 with $200 stacks (100 big blinds). A player
              opens to $8, it folds to you on the button, and you have <S>pocket fives</S>. Should you call?
            </p>
            <p className="mt-4">
              Run the rule. You are calling $8, and you have about $192 behind. That is <S>24 times your
              call</S>, comfortably past the 20x line. The stacks are deep, you are in position, and small
              pairs love this spot. Easy call.
            </p>
            <p className="mt-4">
              Now watch both outcomes. Roughly seven times out of eight, the flop misses you, say it comes
              K-9-2. You have nothing, your opponent bets, and you fold. Cost: <S>$8</S>. No agonizing, no
              hero calls, you were never going to win this one. You just let it go.
            </p>
            <p className="mt-4">
              The eighth time, the flop is <S>5-K-9</S>. You just flopped a set, and it is invisible. Your
              opponent with KK or AK or an overpair thinks they are winning. They bet, you raise or slow
              play, and very often the whole $200 goes in. You lost $8 seven times, that is $56, and then
              won a $200 pot once. That is the engine of set mining: <S>small losses, one big win, positive
              in the long run</S>. To see how your set fares against the hands that pay you off, drop them
              into the <A href="/tools/equity-calculator">equity calculator</A>.
            </p>

            {/* CTA 1 */}
            <CTABox
              headline="Make the Call-or-Fold Automatic"
              text="Poker Reflex drills preflop decisions hand by hand, including the small-pair calls that set mining lives on, with instant GTO feedback across positions and stack depths. Free to download."
            />

            {/* Stack depth */}
            <H2>Why Stack Depth Makes or Breaks Set Mining</H2>
            <p>
              Stack depth is not a detail here, it is the <S>whole play</S>. Set mining only prints because
              you can win a huge pot the times you hit. Deep stacks give you that huge pot. Shallow stacks
              take it away, and the same call that was a slam dunk at 100bb becomes a leak at 40bb.
            </p>
            <p className="mt-4">
              Think about it in chips. At 100bb, calling 8bb to set mine, you have about 92bb behind to win
              when you flop your set. That is plenty to stack an overpair. At 40bb, that same 8bb call
              leaves you only about 32bb behind. Now even when you hit, you cannot win enough to pay for all
              the times you miss. The implied odds have quietly disappeared, and the call stops being
              profitable.
            </p>

            {/* Position and opponent */}
            <H2>Position and Opponent: When to Fold Anyway</H2>
            <p>
              Even with the right stack depth, two things can turn a good set mine into a bad one.
            </p>
            <p className="mt-4">
              <S>Position.</S> Set mine wider when you are in position, on or near the button. You get to
              act last, control the pot size, and realize your equity more easily. Out of position,
              especially from the blinds, tighten up, because it is harder to win a big pot when you have to
              act first every street. Our <A href="/blog/poker-positions">poker positions guide</A> covers
              why position changes everything.
            </p>
            <p className="mt-4">
              <S>Opponent type.</S> Set mining needs someone who will <S>pay you off</S>. Against a player
              who stacks off with an overpair or top pair, mine away, they will hand you their chips. But
              against a nit who folds the second you get aggressive, the implied odds evaporate, because you
              will never get paid the big pot you are calling for. No payoff, no set mine. Against a calling
              station, on the other hand, you can loosen up, they pay everything.
            </p>
            <p className="mt-4">
              One myth to kill: <S>multiway is good for set mining</S>, not bad. More players in the pot
              means more people who can pay you off when you hit, which increases your implied odds. Come
              along cheaply with the crowd and let the field fund your sets.
            </p>

            {/* Short stacks */}
            <H2>Why Set Mining Dies at Short Stacks</H2>
            <p>
              Take a common tournament spot. You have 20bb, a player opens to 2.5bb, and you look down at
              44. Your instinct might be to call and set mine. Run the rule first. You are calling 2.5bb
              with about 17.5bb behind, which is only <S>7 times your call</S>, well under the 15x line. The
              implied odds are not there, so calling to set mine is a fold.
            </p>
            <p className="mt-4">
              At short stacks, small pairs stop being set-mining hands and become <S>jam-or-fold</S> hands.
              You either shove them for the fold equity and their raw pair strength, or you let them go. You
              do not call a big chunk of a short stack hoping to hit a 1-in-8.5 flop. For where those
              short-stack shove decisions live, see our{' '}
              <A href="/tools/push-fold-chart">push or fold chart</A>.
            </p>

            {/* Mistakes */}
            <H2>Common Set-Mining Mistakes</H2>
            <p>
              Most of the money lost set mining comes from a short list of errors. Avoid these and the play
              prints for you instead of against you.
            </p>
            <ul className="mt-4 space-y-2 pl-6 list-disc">
              <li><S>Mining too shallow.</S> Calling without 15 to 20 times your call behind. No implied odds, no set mine.</li>
              <li><S>Calling too big a raise.</S> If the raise is a large chunk of the stacks, the multiple collapses and the call goes bad, even at 100bb.</li>
              <li><S>Continuing without a set.</S> You called to flop a set. When you miss, which is most of the time, give up. Do not turn 55 into a bluff-catcher on a king-high flop.</li>
              <li><S>Mining out of position against a nit.</S> The two worst conditions at once: no payoff and no position. Just fold.</li>
              <li><S>Never folding a set.</S> Rare, but when a nit raises you back big on a scary paired or straightening board, your set can be beaten. Do not stack off on autopilot every time.</li>
            </ul>

            {/* FAQ */}
            <H2>Common Questions About Set Mining</H2>
            <p>
              <S>What are the odds of flopping a set?</S>{' '}
              About 11.8%, or roughly 7.5 to 1 against, so you miss nearly seven times out of eight. If you
              see all five cards, your chance of making a set by the river is about 19%.
            </p>
            <p className="mt-4">
              <S>What is the set mining rule?</S>{' '}
              Call only when the effective stack behind you is about 15 to 20 times the amount you are
              calling. Calling 8bb, you want at least about 120 to 160bb behind, because you need to win big
              the times you hit to cover all the times you miss.
            </p>
            <p className="mt-4">
              <S>Should you set mine when short stacked?</S>{' '}
              No. Short stacks kill the implied odds. Below roughly 15 to 20 times your call, fold, and at
              very short stacks a small pair becomes a jam-or-fold hand instead.
            </p>
            <p className="mt-4">
              <S>Is set mining profitable?</S>{' '}
              Yes, with deep stacks, a small call, and an opponent who pays off. It is a long-term play:
              small losses many times, one big win that more than covers them.
            </p>
            <p className="mt-4">
              <S>Can you set mine multiway?</S>{' '}
              Yes, and multiway is great for it. More opponents means more implied odds. The only downside
              is the rare set-over-set cooler, which is uncommon enough to ignore in most spots.
            </p>

            {/* Practice */}
            <H2>Putting It Into Practice</H2>
            <p>
              Set mining is one of the simplest profitable habits in poker once the numbers stick. Small
              pair, small call, deep stacks, an opponent who pays. You flop your set about 1 in 8.5, win a
              big pot when you do, and fold cheaply the rest of the time. Skip it when the stacks are too
              shallow or the opponent will not pay, and you avoid the leak that catches everyone else.
            </p>
            <p className="mt-4">
              The trick is running the stack multiple in your head in real time, every time. That is a
              reflex, and reflexes come from reps. Put real prices on your spots with the{' '}
              <A href="/tools/pot-odds-calculator">pot odds calculator</A>, brush up on which pairs are worth
              playing in our <A href="/blog/poker-starting-hands">starting hands guide</A>, and drill the
              call-or-fold decision until the right answer is instant.
            </p>

            {/* CTA 2 */}
            <CTABox
              headline="Train Your Preflop Game Today"
              text="Drill open, 3-bet, 4-bet, and all-in decisions across every position and stack depth, with instant feedback and an ELO that tracks your progress. Turn preflop math into reflexes. Free to download."
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
