import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RangeGrid from '@/components/RangeGrid'
import { BRAND_ASSETS, SITE_URL } from '@/lib/brand'

export const metadata: Metadata = {
  title: 'Best Starting Hands in Poker: The Complete Chart & Guide (2026)',
  description:
    'Learn which poker hands to play and which to fold. A clear starting hands chart by position, hand rankings, and a simple system to make better preflop decisions.',
  keywords:
    'poker starting hands, best starting hands poker, texas holdem starting hands, poker hands to play, starting hands chart, which hands to play poker, preflop hands',
  alternates: {
    canonical: `${SITE_URL}/blog/poker-starting-hands`,
  },
  openGraph: {
    title: 'Best Starting Hands in Poker: The Complete Chart & Guide',
    description:
      'Which hands to play and which to fold, by position. A simple system to stop guessing preflop.',
    url: `${SITE_URL}/blog/poker-starting-hands`,
    type: 'article',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Starting Hands in Poker: Complete Chart & Guide',
    description: 'Which hands to play and which to fold, by position.',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Starting Hands in Poker: The Complete Chart & Guide (2026)',
  description:
    'Learn which poker hands to play and which to fold, by position, with a clear starting hands chart and a simple system for better preflop decisions.',
  author: { '@type': 'Organization', name: 'Poker Reflex' },
  publisher: {
    '@type': 'Organization',
    name: 'Poker Reflex',
    logo: { '@type': 'ImageObject', url: BRAND_ASSETS.squareLogoUrl },
  },
  datePublished: '2026-05-26',
  dateModified: '2026-05-26',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/blog/poker-starting-hands`,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best starting hand in poker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The best starting hand in Texas Hold'em is pocket aces (AA). It is a favorite against every other starting hand before the flop.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the worst starting hand in poker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Seven-deuce offsuit (7-2o) is widely considered the worst starting hand. The cards cannot make a straight together, the high card is weak, and they are not suited.",
      },
    },
    {
      '@type': 'Question',
      name: "How many starting hands are there in Texas Hold'em?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are 1,326 possible two-card combinations, which simplify to 169 distinct starting hands when you group them by suited, offsuit, and pairs.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hands should a beginner play?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Beginners should play tight, roughly 15 to 20 percent of hands, and play more hands in late position than in early position.',
      },
    },
  ],
}

const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.alexischup.pokerreflex'
const APP_STORE_URL = 'https://apps.apple.com/us/app/poker-reflex/id6761329446'

function CTABox({ headline, text }: { headline: string; text: string }) {
  return (
    <div
      className="rounded-2xl border p-8 my-10 glow-green"
      style={{
        backgroundColor: 'var(--surface)',
        borderColor: 'rgba(74, 222, 128, 0.35)',
      }}
    >
      <h3
        className="font-heading font-bold text-xl md:text-2xl mb-3"
        style={{ color: 'var(--text)' }}
      >
        {headline}
      </h3>
      <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {text}
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
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
    </div>
  )
}

export default function PokerStartingHandsArticle() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main id="main-content" className="pt-20" style={{ backgroundColor: 'var(--background)' }}>
        <article className="max-w-[720px] mx-auto px-6 py-16">

          {/* Back to blog */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm mb-8 transition-colors hover:opacity-80"
            style={{ color: 'var(--green)' }}
          >
            ← Back to Blog
          </Link>

          {/* Title & meta */}
          <h1
            className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4"
            style={{ color: 'var(--text)' }}
          >
            Best Starting Hands in Poker: The Complete Chart and Guide
          </h1>
          <div
            className="flex items-center gap-4 mb-10 text-sm"
            style={{ color: 'var(--text-secondary)' }}
          >
            <span>By Poker Reflex</span>
            <span>·</span>
            <span>May 26, 2026</span>
            <span>·</span>
            <span>9 min read</span>
          </div>

          {/* Article body */}
          <div
            style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: 'var(--text-secondary)',
            }}
          >
            {/* Intro */}
            <p>
              Every hand of poker starts with the same decision. You look down at two cards and you
              have to choose: <strong style={{ color: 'var(--text)' }}>play or fold</strong>. Get this decision right consistently and you're already
              ahead of most players at the table. Get it wrong and no amount of clever play later in
              the hand will save you. This guide covers exactly which hands are worth playing, which
              to throw away, and how your position at the table changes everything. By the end
              you'll have a clear system instead of a gut feeling.
            </p>

            {/* H2: How Many Starting Hands */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              How Many Starting Hands Are There?
            </h2>
            <p>
              There are 1,326 possible two-card combinations in a standard deck. Once you group
              them into pairs, suited hands, and offsuit hands, that collapses down to <strong style={{ color: 'var(--text)' }}>169 distinct
              starting hands</strong>. Those 169 hands are what strategy charts are built around.
            </p>
            <p className="mt-4">
              A quick note on notation, because it comes up constantly. AKs means ace-king suited
              (both cards share the same suit). AKo means ace-king offsuit. 88 means pocket eights,
              a pair. You'll see this shorthand throughout this guide and in any serious discussion
              of poker strategy.
            </p>

            {/* H2: Premium Hands */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              The Best Starting Hands (The Premium Group)
            </h2>
            <p>
              AA is the best starting hand in poker. Full stop. Before the flop, <strong style={{ color: 'var(--text)' }}>pocket aces</strong> are a
              mathematical favorite against every other hand you'll face. KK sits right behind it.
              Almost as powerful, though it does have one real vulnerability: when an ace hits the
              board, a lot of your opponents become suddenly very interested in the pot.
            </p>
            <p className="mt-4">
              QQ is strong but gets more complicated in multi-way pots, especially when overcards
              fall. AKs (ace-king suited) is the best non-pair hand you can hold. It can make the{' '}
              <strong style={{ color: 'var(--text)' }}>nut flush</strong>, flop top pair with the best possible kicker, and has enough equity to
              commit your stack with preflop in most situations.
            </p>
            <p className="mt-4">
              Round out the premium tier with JJ, AKo, AQs, and TT. These hands are profitable
              opens from any position. The top few (AA through QQ especially) are absolutely worth
              getting your whole stack in before the flop. Don't talk yourself out of it.
            </p>

            {/* H2: Strong and Playable */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              Strong and Playable Hands
            </h2>
            <p>
              The next tier includes AQo, AJs, ATs, KQs, KJs, and pairs from 99 down to 66. Solid
              hands. You can open them from most positions, call a single raise without discomfort,
              and feel good about your spot post-flop.
            </p>
            <p className="mt-4">
              That said, you start being more selective in early position. AQo on the button is a
              different situation than AQo from UTG at a full table. <strong style={{ color: 'var(--text)' }}>Position changes the math</strong>, and
              we'll cover that in detail shortly.
            </p>

            {/* H3: Suited Connectors and Small Pairs */}
            <h3
              className="font-heading font-bold text-xl md:text-2xl mt-8 mb-4"
              style={{ color: 'var(--text)' }}
            >
              Suited Connectors and Small Pairs
            </h3>
            <p>
              These are speculative hands: 87s, 76s, 65s, and small pairs like 22 through 55. They
              don't connect with the board very often. But when they do, the payout tends to be
              real. Straights, flushes, and <strong style={{ color: 'var(--text)' }}>sets win big pots</strong>. A flopped set with 33 against
              someone's overpair is the kind of hand that defines a session.
            </p>
            <p className="mt-4">
              The key with speculative hands is <strong style={{ color: 'var(--text)' }}>seeing the flop cheaply and in position</strong>. Playing
              J7s from under the gun for a 3-bet pot is not the play. Calling a single raise on the
              button with 65s? Entirely reasonable. Most beginners either throw these hands away
              constantly or play them from any seat at any price. Neither extreme is right.
            </p>

            {/* H2: Hands Beginners Overvalue */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              Hands Beginners Overvalue (and Lose Money With)
            </h2>
            <p>
              This section matters more than the premium hand list. Most players already know AA is
              good. The real leaks come from the hands that look decent but quietly drain your
              stack.
            </p>
            <p className="mt-4">
              Weak offsuit aces: A5o, A6o, A8o. The ace looks great. The kicker is the problem. You
              flop top pair with A8, your opponent holds AK. They bet, you call, you lose a big pot.
              This is called being <strong style={{ color: 'var(--text)' }}>dominated</strong>, and it's one of the most expensive situations in
              poker. The ace in your hand is the same ace in theirs, but their kicker beats yours
              on every board.
            </p>
            <p className="mt-4">
              Offsuit broadways like KJo, QTo, KTo are position-dependent. Raise them from the
              cutoff or button? Fine. Open them under the gun at a full table and you're asking for
              trouble. When you face a{' '}
              <Link
                href="/blog/what-is-a-3-bet-in-poker"
                style={{ color: 'var(--green)' }}
                className="hover:opacity-80 transition-opacity underline underline-offset-2"
              >
                3-bet
              </Link>{' '}
              or an ace-high flop, these hands become awkward fast.
            </p>
            <p className="mt-4">
              Any two suited cards: being suited adds roughly <strong style={{ color: 'var(--text)' }}>2 to 3 percent equity</strong> to a hand. It
              does not turn trash into treasure. J3s is a fold. Q4s is a fold. The suited part is a
              bonus on otherwise strong hands. It's not a reason to play weak ones.
            </p>

            {/* H2: Worst Starting Hands */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              The Worst Starting Hands (Just Fold)
            </h2>
            <p>
              <strong style={{ color: 'var(--text)' }}>72o</strong> is the classic worst hand. The two cards can't connect for a straight, the high
              card is weak, and they're not suited. It's bad in every measurable way. Spend any
              time in poker circles and you'll hear it mentioned almost fondly, the hand everyone
              agrees to fold immediately.
            </p>
            <p className="mt-4">
              82o, 93o, 94o, and similar garbage hands belong in the same pile. There's no
              situation where you're happy to see these in the hole. Fold them, forget them, and
              wait for something worth playing.
            </p>

            {/* H2: Why Position Changes Everything */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              Why Position Changes Everything
            </h2>
            <p>
              Position is the single most important factor in deciding which hands to play. The
              later you act in the betting, the more information you have before making a decision.
              More information means you can play more hands profitably. For a full breakdown of
              every seat at the table,{' '}
              <Link
                href="/blog/poker-positions"
                style={{ color: 'var(--green)' }}
                className="hover:opacity-80 transition-opacity underline underline-offset-2"
              >
                check out our guide to poker positions
              </Link>
              .
            </p>
            <p className="mt-4">
              Early position (UTG and UTG+1): you act first throughout most of the hand with almost
              no information about what anyone else is doing. Stick to premium hands. Roughly <strong style={{ color: 'var(--text)' }}>10 to
              15 percent</strong> of hands is the right range.
            </p>
            <p className="mt-4">
              Middle position: open up slightly. Add more broadway hands and mid-pairs. Still
              disciplined, but not as tight as UTG.
            </p>
            <p className="mt-4">
              Late position (cutoff and button): the button can profitably open around <strong style={{ color: 'var(--text)' }}>40 percent
              of hands</strong> or more. You have maximum information and act last on every post-flop street.
              These seats are where money is made. And
              if you're still building your bankroll while you learn all this,{' '}
              <Link
                href="/blog/poker-bankroll-management"
                style={{ color: 'var(--green)' }}
                className="hover:opacity-80 transition-opacity underline underline-offset-2"
              >
                understanding bankroll management
              </Link>{' '}
              is the other side of the equation.
            </p>
            <p className="mt-4">
              The blinds: tricky. You put money in preflop but act first post-flop. Be selective
              about defending the blinds and think carefully before calling from the small blind
              with marginal hands.
            </p>
            <p className="mt-4">
              To tie it all together: the same 99 that's a clear raise on the button might be a
              fold from UTG at a tight table. Position changes the math, and it changes it a lot.
            </p>

            {/* H2: A Simple Starting Hands Chart */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              A Simple Starting Hands Chart
            </h2>
            <p>
              These are solid opening baselines for a standard cash game. They're not rigid rules,
              but they're a reliable starting point.
            </p>

            <p className="mt-6 mb-2" style={{ color: 'var(--text-secondary)' }}>
              Here's what each position's range looks like on a standard 13×13 hand matrix. Green
              cells are hands you open-raise; dark cells are folds.
            </p>

            {/* Early Position */}
            <div className="mt-6">
              <div
                className="rounded-xl p-4"
                style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
              >
                <span
                  className="font-heading font-semibold block mb-1 text-base"
                  style={{ color: 'var(--green)' }}
                >
                  Early position (UTG)
                </span>
                <span className="text-base" style={{ color: 'var(--text-secondary)' }}>
                  77+, AQo+, ATs+, KQs+
                </span>
              </div>
              <RangeGrid
                title="Early Position (UTG)"
                caption="Early position (UTG) opening range for 6-max Texas Hold'em"
                ariaLabel="UTG opening range: play 77 and higher pairs, AQ offsuit and higher, AT suited and higher, KQ suited and higher"
                inRangeHands={[
                  'AA','KK','QQ','JJ','TT','99','88','77',
                  'AKs','AQs','AJs','ATs','KQs','KJs',
                  'AKo','AQo',
                ]}
              />
            </div>

            {/* Middle Position */}
            <div className="mt-10">
              <div
                className="rounded-xl p-4"
                style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
              >
                <span
                  className="font-heading font-semibold block mb-1 text-base"
                  style={{ color: 'var(--green)' }}
                >
                  Middle position
                </span>
                <span className="text-base" style={{ color: 'var(--text-secondary)' }}>
                  55+, AJo+, A9s+, KQo, KJs+, QTs+, JTs
                </span>
              </div>
              <RangeGrid
                title="Middle Position"
                caption="Middle position opening range for 6-max Texas Hold'em"
                ariaLabel="Middle position opening range: play 55 and higher pairs, AJ offsuit and higher, A9 suited and higher, KQ offsuit, KJ suited and higher, QT suited and higher, JT suited"
                inRangeHands={[
                  'AA','KK','QQ','JJ','TT','99','88','77','66','55',
                  'AKs','AQs','AJs','ATs','A9s','KQs','KJs','KTs','QJs','QTs','JTs',
                  'AKo','AQo','AJo','KQo',
                ]}
              />
            </div>

            {/* Late Position */}
            <div className="mt-10">
              <div
                className="rounded-xl p-4"
                style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
              >
                <span
                  className="font-heading font-semibold block mb-1 text-base"
                  style={{ color: 'var(--green)' }}
                >
                  Late position (cutoff / button)
                </span>
                <span className="text-base" style={{ color: 'var(--text-secondary)' }}>
                  22+, A2s+, A9o+, K9s+, suited connectors (65s+), most broadways
                </span>
              </div>
              <RangeGrid
                title="Late Position (Button)"
                caption="Button (late position) opening range for 6-max Texas Hold'em"
                ariaLabel="Button opening range: play all pairs, all suited aces, most suited kings, suited connectors, and many broadway offsuit hands, roughly 40 percent of hands"
                inRangeHands={[
                  'AA','KK','QQ','JJ','TT','99','88','77','66','55','44','33','22',
                  'AKs','AQs','AJs','ATs','A9s','A8s','A7s','A6s','A5s','A4s','A3s','A2s',
                  'KQs','KJs','KTs','K9s','K8s','K7s','K6s','K5s','K4s','K3s','K2s',
                  'QJs','QTs','Q9s','Q8s','Q7s','Q6s',
                  'JTs','J9s','J8s','J7s',
                  'T9s','T8s','T7s',
                  '98s','97s',
                  '87s','86s',
                  '76s','75s',
                  '65s',
                  '54s',
                  'AKo','AQo','AJo','ATo','A9o','A8o','A7o','A6o','A5o','A4o','A3o','A2o',
                  'KQo','KJo','KTo','K9o',
                  'QJo','QTo','Q9o',
                  'JTo','J9o',
                  'T9o',
                  '98o',
                ]}
              />
            </div>

            {/* Blinds (text only, no grid) */}
            <div className="mt-10">
              <div
                className="rounded-xl p-4"
                style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
              >
                <span
                  className="font-heading font-semibold block mb-1 text-base"
                  style={{ color: 'var(--green)' }}
                >
                  Blinds
                </span>
                <span className="text-base" style={{ color: 'var(--text-secondary)' }}>
                  Defend selectively. Lean toward connected and suited hands. Avoid dominated aces.
                </span>
              </div>
            </div>

            <p className="mt-5">
              Good players adjust this based on who's at the table, stack sizes, and tendencies
              they've picked up during the session. The chart is a foundation, not a ceiling.
            </p>

            <p className="mt-6" style={{ color: 'var(--text-secondary)' }}>
              These grids show what to play. The hard part is remembering them at the table. That's
              what{' '}
              <a
                href="https://play.google.com/store/apps/details?id=com.alexischup.pokerreflex"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--green)' }}
                className="hover:opacity-80 transition-opacity underline underline-offset-2"
              >
                Poker Reflex
              </a>{' '}
              trains, until the right play is automatic.
            </p>

            {/* H2: Why Memorizing Charts Isn't Enough */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              Why Memorizing Charts Isn't Enough
            </h2>
            <p>
              Knowing the chart and actually using it under pressure are two different skills. In a
              live hand you have seconds to decide. Your opponent just 3-bet, everyone's watching,
              and the chart you studied this morning isn't going to surface automatically. Not until
              you've drilled these decisions enough that they feel instinctive.
            </p>
            <p className="mt-4">
              The players who improve fastest aren't necessarily the ones who read the most. They're
              the ones who <strong style={{ color: 'var(--text)' }}>put in reps</strong>. Drilling preflop decisions until they're automatic is how
              you close the gap between knowing what's right and actually doing it at the table.
              That's exactly the idea behind Poker Reflex.
            </p>

            {/* CTA Box 1 */}
            <CTABox
              headline="Turn Charts Into Instincts"
              text="Poker Reflex drills your starting hand decisions with a fast swipe trainer, so the right play becomes automatic. Free to download."
            />

            {/* H2: Common Questions */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              Common Questions About Starting Hands
            </h2>
            <p>
              <strong style={{ color: 'var(--text)' }}>
                What is the best starting hand in poker?
              </strong>{' '}
              AA, pocket aces. It's a favorite against every other hand before the flop and the
              only hand you should feel genuinely excited about every time you see it.
            </p>
            <p className="mt-4">
              <strong style={{ color: 'var(--text)' }}>
                What is the worst starting hand?
              </strong>{' '}
              72o. Can't make a straight with the two cards together, low high card, not suited.
              Bad in every direction.
            </p>
            <p className="mt-4">
              <strong style={{ color: 'var(--text)' }}>
                How many hands should a beginner play?
              </strong>{' '}
              Play tight, around 15 to 20 percent of hands. It sounds boring, but discipline early
              is what separates players who build their game from those who spin their wheels for
              years.
            </p>
            <p className="mt-4">
              <strong style={{ color: 'var(--text)' }}>
                Should I always fold weak hands?
              </strong>{' '}
              In most beginner spots, yes. There's always a temptation to play more hands because
              folding feels passive. But patience is a skill. Getting involved with trash hands is
              expensive, and the cost adds up faster than most people expect.
            </p>

            {/* H2: Final Thoughts */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              Final Thoughts
            </h2>
            <p>
              Great preflop play isn't about getting fancy. It's about playing the right hands from
              the right positions, again and again, until it's second nature. The players who master
              that have a foundation everything else can be built on. The ones who skip it spend
              years wondering why their results stay inconsistent.
            </p>
            <p className="mt-4">
              Start simple: play tight in early position, open up on the button, avoid dominated
              hands, and respect position. Those four things alone will put you ahead of a huge
              portion of the field. And when you're ready to understand the math behind these
              ranges, check out our{' '}
              <Link
                href="/blog/gto-poker-for-beginners"
                style={{ color: 'var(--green)' }}
                className="hover:opacity-80 transition-opacity underline underline-offset-2"
              >
                guide to GTO poker for beginners
              </Link>.
            </p>

            {/* CTA Box 2 */}
            <CTABox
              headline="Train Your Preflop Game Today"
              text="Practice open, 3-bet, 4-bet, and all-in decisions across every position. Build real reflexes in minutes a day."
            />
          </div>

          {/* Back to blog bottom */}
          <div className="mt-16 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm transition-colors hover:opacity-80"
              style={{ color: 'var(--green)' }}
            >
              ← Back to Blog
            </Link>
          </div>

        </article>
      </main>
      <Footer />
    </>
  )
}
