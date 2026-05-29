import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Poker Bankroll Management: The Complete Guide for 2026',
  description:
    'Learn how to manage your poker bankroll like a pro. Practical rules, common mistakes to avoid, and a simple system to protect your money and play with confidence.',
  keywords:
    'poker bankroll management, bankroll rules poker, how much bankroll poker, poker money management, cash game bankroll, tournament bankroll',
  alternates: {
    canonical: 'https://poker-reflex.com/blog/poker-bankroll-management',
  },
  openGraph: {
    title: 'Poker Bankroll Management: The Complete Guide for 2026',
    description:
      'Practical bankroll rules, common mistakes, and a simple system to protect your money and play with confidence.',
    url: 'https://poker-reflex.com/blog/poker-bankroll-management',
    type: 'article',
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poker Bankroll Management: The Complete Guide',
    description: 'Practical bankroll rules and a simple system to protect your money.',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Poker Bankroll Management: The Complete Guide for 2026',
  description:
    'Learn how to manage your poker bankroll like a pro. Practical rules, common mistakes to avoid, and a simple system to protect your money.',
  author: {
    '@type': 'Organization',
    name: 'Poker Reflex',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Poker Reflex',
    logo: {
      '@type': 'ImageObject',
      url: 'https://poker-reflex.com/logo.png',
    },
  },
  datePublished: '2026-05-18',
  dateModified: '2026-05-18',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://poker-reflex.com/blog/poker-bankroll-management',
  },
}

const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.alexischup.pokerreflex'
const APP_STORE_URL = 'https://apps.apple.com/us/app/poker-reflex/id6761329446'

function CTABox({
  headline,
  text,
}: {
  headline: string
  text: string
}) {
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

export default function BankrollManagementArticle() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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
            Poker Bankroll Management: The Complete Guide for 2026
          </h1>
          <div className="flex items-center gap-4 mb-10 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <span>By Poker Reflex</span>
            <span>·</span>
            <span>May 18, 2026</span>
            <span>·</span>
            <span>8 min read</span>
          </div>

          {/* Article body */}
          <div
            className="prose-article"
            style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: 'var(--text-secondary)',
            }}
          >

            {/* Intro */}
            <p>
              Most poker players don't go broke because they're bad at poker. They go broke because
              they're bad at <strong style={{ color: 'var(--text)' }}>managing money</strong>. You can be the sharpest player at the table and still
              lose everything if you sit down with your entire bankroll on the line. Bankroll
              management is the boring part of poker that nobody wants to talk about, and it's also
              the single biggest reason some players last for years while others quit after a brutal
              month. This guide breaks down exactly how to protect your money, how much you actually
              need, and the mistakes that quietly destroy bankrolls.
            </p>

            {/* H2: What Is a Bankroll, Really? */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{
                color: 'var(--text)',
                borderLeft: '3px solid var(--green)',
              }}
            >
              What Is a Bankroll, Really?
            </h2>
            <p>
              A bankroll is the money you've set aside specifically for poker. Not your rent. Not
              groceries. Not the money you need for anything else in your life. It lives in a
              separate account, or at minimum a separate mental category, and it's the only money
              you ever bring to the table.
            </p>
            <p className="mt-4">
              The golden rule: never play with <strong style={{ color: 'var(--text)' }}>money you can't afford to lose</strong>. That sounds simple,
              but a surprising number of players ignore it. Say you have $1,500 in savings and you
              decide to use $500 of it to play poker. If that $500 is also covering part of your
              phone bill next month, it's not really a poker bankroll. It's just borrowed time. Real
              bankroll management starts by treating your poker money as completely separate from
              your living expenses, full stop.
            </p>

            {/* H2: Why Bankroll Management Matters More Than You Think */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{
                color: 'var(--text)',
                borderLeft: '3px solid var(--green)',
              }}
            >
              Why Bankroll Management Matters More Than You Think
            </h2>
            <p>
              Variance is the word poker players use to explain bad luck, and it's brutal. Even a
              winning player at a given stake can lose 10, 20, sometimes <strong style={{ color: 'var(--text)' }}>30 buy-ins in a row</strong> without
              making any major mistakes. That's just how the math works. If you're playing $100
              buy-ins and you only have $500 in your bankroll, a completely normal downswing wipes
              you out before your edge has time to show.
            </p>
            <p className="mt-4">
              But here's the part that gets overlooked. When you're underrolled, you <strong style={{ color: 'var(--text)' }}>play scared</strong>.
              You fold too much in marginal spots because every pot feels life-or-death. You can't
              make the aggressive plays your strategy requires because you're terrified of busting.
              So you stop being a winning player, not because you got worse, but because financial
              pressure turned your decision-making into a mess. A proper bankroll removes that
              pressure and lets you play your actual game.
            </p>

            {/* H2: The Classic Bankroll Rules */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{
                color: 'var(--text)',
                borderLeft: '3px solid var(--green)',
              }}
            >
              The Classic Bankroll Rules
            </h2>
            <p>
              These aren't arbitrary numbers. They come from decades of player experience and the
              math behind how long downswings tend to last.
            </p>

            <h3
              className="font-heading font-bold text-xl md:text-2xl mt-8 mb-4"
              style={{ color: 'var(--text)' }}
            >
              Cash Games
            </h3>
            <p>
              The standard guideline for cash games is <strong style={{ color: 'var(--text)' }}>20 to 30 buy-ins</strong> for the stake you're
              playing. So if you're sitting at a $0.50/$1 table with a $100 max buy-in, you'd want
              $2,000 to $3,000 in your bankroll before playing that level regularly. More
              conservative players go for 40 to 50 buy-ins, especially if the game is tough or
              they're playing higher variance styles. That's $4,000 to $5,000 for the same $100
              buy-in game. Yes, it sounds like a lot. It's also the difference between riding out a
              downswing and going broke.
            </p>

            <h3
              className="font-heading font-bold text-xl md:text-2xl mt-8 mb-4"
              style={{ color: 'var(--text)' }}
            >
              Tournaments
            </h3>
            <p>
              Tournament variance is a whole different beast. The rule jumps to <strong style={{ color: 'var(--text)' }}>100 buy-ins or more</strong>,
              and for good reason. In a tournament, you can play a near-perfect game and cash zero
              times across 30 events. That's not a bad run. That's just the structure working
              against you. The bigger the field, the higher the variance, and the more cushion you
              need. A $50 weekly tournament with 100 players is manageable. A $100 Sunday major with
              5,000 entries requires serious bankroll depth if you're playing it regularly.
            </p>
            <p className="mt-4">
              Some grinders recommend even more: 150 to 200 buy-ins for high-variance formats like
              rebuys, satellites, or large-field MTTs. It's conservative, but it's what keeps you
              in the game long enough to run above expectation.
            </p>

            {/* CTA Box 1 */}
            <CTABox
              headline="Stop Guessing Your Preflop Decisions"
              text="Poker Reflex trains you to make the right preflop call every time, so your bankroll lasts longer."
            />

            {/* H2: How to Know When to Move Up (and Down) */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{
                color: 'var(--text)',
                borderLeft: '3px solid var(--green)',
              }}
            >
              How to Know When to Move Up (and Down)
            </h2>
            <p>
              Moving up in stakes is the part every player looks forward to. Moving down is the part
              nobody wants to think about. But both matter just as much.
            </p>
            <p className="mt-4">
              The rule for moving up is simple: you need the bankroll AND a <strong style={{ color: 'var(--text)' }}>proven win rate</strong> at your
              current stake. Having 30 buy-ins for the next level doesn't mean you're ready if
              you're barely breaking even where you are. Take your time. Build both the bankroll and
              the confidence through actual results, not just through ambition.
            </p>
            <p className="mt-4">
              Moving down is harder psychologically, but it's the move that saves bankrolls. If your
              stack drops below the threshold for your current stake, <strong style={{ color: 'var(--text)' }}>move down</strong>. No ego, no
              negotiations with yourself. This is where most players fail. They keep playing the
              same level while their bankroll shrinks, telling themselves they're due for a heater.
              Sometimes that heater comes. Often, it doesn't come fast enough and they bust. The
              math doesn't care about your feelings, and neither does the table.
            </p>

            {/* H2: The Mistakes That Quietly Kill Bankrolls */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{
                color: 'var(--text)',
                borderLeft: '3px solid var(--green)',
              }}
            >
              The Mistakes That Quietly Kill Bankrolls
            </h2>
            <p>
              These don't usually happen in one dramatic moment. They accumulate slowly, session by
              session, until one day the bankroll is gone and you're not sure how it happened.
            </p>
            <p className="mt-4">
              Playing too high to "win it back faster" is probably the most common one. You drop a
              few buy-ins at your regular stake and suddenly you're sitting at a table two levels
              higher, chasing losses. The logic feels almost reasonable in the moment. It's not.
              Higher stakes mean tougher competition and bigger swings, which makes digging out
              harder, not easier.
            </p>
            <p className="mt-4">
              <strong style={{ color: 'var(--text)' }}>Not tracking results</strong> is another silent killer. Without a session log, you're
              guessing about whether you're actually winning. Perception bias is real: players
              remember the big wins clearly and blur the losing sessions. Track every session, even
              if it's just a note in your phone with date, stake, buy-in, and result.
            </p>
            <p className="mt-4">
              Mixing poker money with life money erodes the discipline bankroll management requires.
              When the bankroll is also the emergency fund, every tough spot at the table carries
              weight it shouldn't. Keep them separate, always.
            </p>
            <p className="mt-4">
              <strong style={{ color: 'var(--text)' }}>Chasing losses</strong> mid-session is a version of the same problem. You're stuck two buy-ins
              and you reload a third time, playing a looser, more aggressive style to get back to
              even fast. That third buy-in is usually gone faster than the first two.
            </p>
            <p className="mt-4">
              And taking shots at high stakes after a good session is tempting but dangerous. You
              had a great night at $1/$2 and you wander over to the $5/$10 table with half your
              profit. It's fun until it isn't. Shots at higher stakes should be planned and
              deliberate, not impulsive celebrations.
            </p>

            {/* H2: A Simple System You Can Actually Follow */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{
                color: 'var(--text)',
                borderLeft: '3px solid var(--green)',
              }}
            >
              A Simple System You Can Actually Follow
            </h2>
            <p>
              You don't need a spreadsheet with 15 tabs. You need a routine you'll actually stick
              to.
            </p>
            <ol className="mt-4 space-y-3 pl-6 list-decimal">
              <li>
                Set your bankroll. Deposit a specific amount dedicated to poker and nothing else.
              </li>
              <li>
                Pick your stake based on the buy-in rule. For cash games, pick the highest stake
                where your bankroll covers at least <strong style={{ color: 'var(--text)' }}>20 buy-ins</strong>. For tournaments, aim for 100.
              </li>
              <li>
                Track every session. Date, game type, stake, hours played, result. Five seconds of
                effort, enormous long-term value.
              </li>
              <li>
                Review monthly. Look at your win rate, your biggest losing sessions, whether you
                moved stakes, and whether you stuck to your rules.
              </li>
              <li>
                Move up or down based on the numbers, not your feelings. Hit 40 buy-ins at your
                current level? Consider moving up. Drop below 20? Move down.
              </li>
            </ol>
            <p className="mt-4">
              That's it. Simple doesn't mean easy, but it's the kind of simple that works over
              months and years.
            </p>

            {/* H2: Bankroll Management Starts With Better Decisions */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{
                color: 'var(--text)',
                borderLeft: '3px solid var(--green)',
              }}
            >
              Bankroll Management Starts With Better Decisions
            </h2>
            <p>
              The best bankroll protection isn't a spreadsheet. It's making fewer mistakes in the
              first place. <strong style={{ color: 'var(--text)' }}>Most leaks start before the flop.</strong> Players who bleed money slowly are
              usually the ones guessing at preflop decisions instead of knowing them. They call 3-bets
              with hands they should fold. They open too wide from early position. They don't know
              their 4-bet range. These spots come up constantly, and getting them wrong is expensive
              over thousands of hands.
            </p>
            <p className="mt-4">
              If you want your bankroll to go further, sharpen your preflop game first. Start with{' '}
              <Link
                href="/blog/poker-starting-hands"
                style={{ color: 'var(--green)' }}
                className="hover:opacity-80 transition-opacity underline underline-offset-2"
              >
                getting your starting hand selection right
              </Link>
              , learn the basics of{' '}
              <Link
                href="/blog/gto-poker-for-beginners"
                style={{ color: 'var(--green)' }}
                className="hover:opacity-80 transition-opacity underline underline-offset-2"
              >
                GTO poker
              </Link>
              , and the rest follows naturally.
            </p>

            {/* CTA Box 2 */}
            <CTABox
              headline="Train Your Preflop Game for Free"
              text="Master open, 3-bet, 4-bet, and all-in decisions with a simple swipe-based trainer. Free to download."
            />

            {/* H2: Final Thoughts */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{
                color: 'var(--text)',
                borderLeft: '3px solid var(--green)',
              }}
            >
              Final Thoughts
            </h2>
            <p>
              Bankroll management is what separates players who last from players who flame out.
              It's not glamorous, it's not the part anyone talks about at the table, and it takes
              real discipline to follow when variance is punching you in the face. But the players
              who are still grinding five years from now are the ones who <strong style={{ color: 'var(--text)' }}>took it seriously from the
              start</strong>.
            </p>
            <p className="mt-4">
              Set the rules, follow them without exceptions, and let the math do the rest. Your
              future self at the table will thank you.
            </p>

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
