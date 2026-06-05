import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import QRCodeBlock from '@/components/QRCodeBlock'
import { BRAND_ASSETS, SITE_URL } from '@/lib/brand'

export const metadata: Metadata = {
  title: 'Poker Bet Sizing: How Much Should You Actually Bet? (2026 Guide)',
  description:
    'Learn how to size your bets and raises in poker. Simple rules for preflop opens, 3-bets, continuation bets, value bets, and bluffs, with real examples.',
  keywords:
    'poker bet sizing, how much to bet in poker, poker bet size strategy, c-bet sizing, preflop bet sizing, pot size bet, postflop bet sizing',
  alternates: {
    canonical: `${SITE_URL}/blog/poker-bet-sizing`,
  },
  openGraph: {
    title: 'Poker Bet Sizing: How Much Should You Actually Bet?',
    description:
      'Simple rules and real examples for sizing your bets preflop and postflop.',
    url: `${SITE_URL}/blog/poker-bet-sizing`,
    type: 'article',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poker Bet Sizing: How Much Should You Bet?',
    description:
      'Simple bet sizing rules with real examples.',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Poker Bet Sizing: How Much Should You Actually Bet?',
  description:
    'A complete guide to bet sizing in poker, covering preflop opens, 3-bets, continuation bets, value bets, and bluffs.',
  author: { '@type': 'Organization', name: 'Poker Reflex' },
  publisher: {
    '@type': 'Organization',
    name: 'Poker Reflex',
    logo: { '@type': 'ImageObject', url: BRAND_ASSETS.squareLogoUrl },
  },
  image: BRAND_ASSETS.squareLogoUrl,
  datePublished: '2026-05-30',
  dateModified: '2026-05-30',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/blog/poker-bet-sizing`,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much should you bet in poker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bet sizes are measured relative to the pot. Most postflop bets fall between half pot and full pot. Preflop opens are usually 2.5 to 3 big blinds online and 3 to 4 big blinds live. The right size depends on board texture, position, and your goal.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a standard preflop raise size?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Online, a 2.5x to 3x big blind open is standard. Live, 3x to 4x is more common because pots tend to play deeper and there are more callers. Add one big blind for each limper before you.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a continuation bet size?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A continuation bet, or c-bet, is usually 25 to 50 percent of the pot on dry boards and 60 to 75 percent on wet boards. In 3-bet pots, smaller sizes around 25 to 40 percent of the pot are common.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should you bet bigger with strong hands?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not always. If you bet big only with strong hands and small with weak hands, observant opponents read you instantly. Strong players use the same size with value hands and bluffs from the same range, so the bet size reveals nothing.',
      },
    },
  ],
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

export default function BetSizingArticle() {
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
            Poker Bet Sizing: How Much Should You Actually Bet?
          </h1>
          <div
            className="flex items-center gap-4 mb-10 text-sm"
            style={{ color: 'var(--text-secondary)' }}
          >
            <span>By Poker Reflex</span>
            <span>·</span>
            <span>May 30, 2026</span>
            <span>·</span>
            <span>9 min read</span>
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
              Most poker players spend hours learning which hands to play and almost no time
              thinking about how much to bet. That's a huge mistake. Bet sizing is one of the
              biggest separators between winning and losing players. The same hand on the same
              board can win you a stack or barely a few chips depending on how you size your bets.
              This guide breaks down exactly how much to bet in the most common spots, why those
              numbers work, and the mistakes that quietly cost beginners money every session.
            </p>

            {/* H2: The One Rule That Changes Everything */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{
                color: 'var(--text)',
                borderLeft: '3px solid var(--green)',
              }}
            >
              The One Rule That Changes Everything
            </h2>
            <p>
              The single most important idea: in no-limit hold'em, bets are measured{' '}
              <strong style={{ color: 'var(--text)' }}>relative to the size of the pot</strong>,
              not the strength of your hand or the size of your stack. Most beginners size their
              bets based on how much they like their hand (big with monsters, small with weak ones)
              and become completely transparent. Strong players think in fractions of the pot: a
              half pot bet, a 75 percent bet, a pot-sized bet. Make this shift and you instantly
              play better.
            </p>

            {/* H2: Preflop Bet Sizing */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{
                color: 'var(--text)',
                borderLeft: '3px solid var(--green)',
              }}
            >
              Preflop Bet Sizing
            </h2>

            {/* H3: Open Raises */}
            <h3
              className="font-heading font-bold text-xl md:text-2xl mt-8 mb-4"
              style={{ color: 'var(--text)' }}
            >
              Open Raises
            </h3>
            <p>
              The standard online opening raise is{' '}
              <strong style={{ color: 'var(--text)' }}>2.5x to 3x the big blind</strong>. Live
              games tend to play larger, usually 3x to 4x, because pots run deeper and you get
              more callers. Add <strong style={{ color: 'var(--text)' }}>one big blind for each
              limper</strong> in front of you, because every limper makes it cheaper for the next
              player to call.
            </p>
            <p className="mt-4">
              Example: at $1/$2 live, a button open over two limpers should be around $14-$16,
              not $6. Why? Two people already committed $2 each, so the pot is already $7 with
              the blinds. A tiny raise gives everyone a great price to call. Bump it up to make
              them pay for the privilege. Knowing{' '}
              <Link
                href="/blog/poker-starting-hands"
                style={{ color: 'var(--green)' }}
                className="hover:opacity-80 transition-opacity underline underline-offset-2"
              >
                which starting hands deserve that raise
              </Link>{' '}
              is the first step.
            </p>

            {/* H3: 3-Bet Sizing */}
            <h3
              className="font-heading font-bold text-xl md:text-2xl mt-8 mb-4"
              style={{ color: 'var(--text)' }}
            >
              3-Bet Sizing
            </h3>
            <p>
              Standard 3-bets are about{' '}
              <strong style={{ color: 'var(--text)' }}>3x the original raise in position</strong>{' '}
              and <strong style={{ color: 'var(--text)' }}>4x the original raise out of
              position</strong>. So if someone opens to $6, you 3-bet to around $18 in position
              or $24 out of position. Tournaments and short stacks use smaller sizes (2.2x to
              2.5x). Why the difference? Out of position you need to charge more because they
              get to act after you on every street. For a deeper look at when and why to 3-bet,
              see our full guide on{' '}
              <Link
                href="/blog/what-is-a-3-bet-in-poker"
                style={{ color: 'var(--green)' }}
                className="hover:opacity-80 transition-opacity underline underline-offset-2"
              >
                what a 3-bet is and how to use it
              </Link>.
            </p>

            {/* H3: 4-Bets */}
            <h3
              className="font-heading font-bold text-xl md:text-2xl mt-8 mb-4"
              style={{ color: 'var(--text)' }}
            >
              4-Bets
            </h3>
            <p>
              Standard 4-bet size is about{' '}
              <strong style={{ color: 'var(--text)' }}>2.2x to 2.5x the 3-bet</strong> in position
              and a bit more out of position. So if they 3-bet you to $18, you 4-bet to roughly
              $42-$45. Going much bigger just risks too many chips when they only call with hands
              that beat you.
            </p>

            {/* H2: Postflop Bet Sizing */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{
                color: 'var(--text)',
                borderLeft: '3px solid var(--green)',
              }}
            >
              Postflop Bet Sizing
            </h2>

            {/* H3: The Continuation Bet */}
            <h3
              className="font-heading font-bold text-xl md:text-2xl mt-8 mb-4"
              style={{ color: 'var(--text)' }}
            >
              The Continuation Bet (C-Bet)
            </h3>
            <p>
              The c-bet is the bet you make on the flop after raising preflop. Your sizing should
              match the board texture:
            </p>
            <ul className="mt-4 space-y-2 pl-6 list-disc">
              <li>
                <strong style={{ color: 'var(--text)' }}>Dry boards</strong> (like K72 rainbow):
                25-40% of the pot is plenty. Nobody has much, a small bet gets the same folds as
                a big bet.
              </li>
              <li>
                <strong style={{ color: 'var(--text)' }}>Wet boards</strong> (like 9-8-7
                two-tone): 60-75% of the pot. Lots of draws are out there, you need to charge
                them.
              </li>
              <li>
                <strong style={{ color: 'var(--text)' }}>In 3-bet pots</strong>: 25-40% of the pot
                is standard, the pot is already large.
              </li>
            </ul>
            <p className="mt-4">
              Concrete example: you open to $6 from the cutoff at $1/$2 and only the big blind
              calls. The pot is about $13. The flop comes K-7-2 rainbow. A c-bet of $4-$5 (roughly
              a third of the pot) puts your opponent in an awkward spot with most of their range.
              They fold the same hands whether you bet $4 or $10, so why risk more?
            </p>

            {/* H3: Value Bets */}
            <h3
              className="font-heading font-bold text-xl md:text-2xl mt-8 mb-4"
              style={{ color: 'var(--text)' }}
            >
              Value Bets
            </h3>
            <p>
              A value bet is a bet you want called by worse hands. Size it as{' '}
              <strong style={{ color: 'var(--text)' }}>big as you think a worse hand will
              pay</strong>. If your opponent is loose and pays off, bet 75-100% of the pot. If
              they're tight, drop to 50-60% so they can talk themselves into a call with weaker
              hands. Reading your opponent matters more than any chart here.
            </p>
            <p className="mt-4">
              Example: you have top two pair on the river, the pot is $80, and your opponent has
              been calling with middle pair the whole way. They'll likely call $50-$60 but fold to
              a pot-sized jam. Bet $55 and get the call. The extra $25 you didn't bet is money
              you're getting that you wouldn't have gotten with a bigger size.
            </p>

            {/* H3: Bluffs */}
            <h3
              className="font-heading font-bold text-xl md:text-2xl mt-8 mb-4"
              style={{ color: 'var(--text)' }}
            >
              Bluffs
            </h3>
            <p>
              A bluff should be sized so the math works for you: you need fewer folds the bigger
              you bet. A pot-sized bet only needs to fold opponents{' '}
              <strong style={{ color: 'var(--text)' }}>50% of the time</strong> to be break-even.
              A half-pot bluff needs them to fold 33% of the time. Bigger bluff means more
              pressure but more risk. Most beginners under-bluff and under-size their bluffs.
            </p>
            <p className="mt-4">
              The key: pick a size that's consistent with your value bets in the same spot. If
              you always bet $40 into $60 when you have the nuts and $20 when you're bluffing,
              anyone paying attention will crush you. Use the same sizing for both.
            </p>

            {/* H3: Overbets */}
            <h3
              className="font-heading font-bold text-xl md:text-2xl mt-8 mb-4"
              style={{ color: 'var(--text)' }}
            >
              Overbets
            </h3>
            <p>
              An overbet is any bet bigger than the pot. They work best on{' '}
              <strong style={{ color: 'var(--text)' }}>rivers</strong> in spots where you have a
              polarized range (very strong hands or pure bluffs) and your opponent's range is full
              of bluff-catchers. Don't overuse them, but don't ignore them either. The river is
              where overbets earn (and cost) the most money.
            </p>
            <p className="mt-4">
              Example: you flopped a set, turned a full house, and the river completes an obvious
              flush draw. Your opponent probably has a flush or nothing. A 150% pot overbet puts
              maximum pressure on the flush. They'll call because they can't fold a flush, and
              when you're bluffing this spot, that same sizing makes them agonize over the decision.
            </p>

            {/* H2: Why Bet Size Tells a Story */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{
                color: 'var(--text)',
                borderLeft: '3px solid var(--green)',
              }}
            >
              Why Bet Size Tells a Story
            </h2>
            <p>
              The hidden danger: if you always bet big with strong hands and small with weak hands,
              observant players read you in two orbits. They fold every time you bet big and call
              (or raise) every time you bet small. Your sizing becomes a neon sign announcing
              your hand strength.
            </p>
            <p className="mt-4">
              Strong players keep the{' '}
              <strong style={{ color: 'var(--text)' }}>same sizing for value and bluffs</strong>{' '}
              in similar spots, so the size reveals nothing about their hand. They pick a sizing
              bucket for a given situation (say, 66% pot on wet flops) and use it with their
              entire range. Stay consistent within your bet-sizing buckets and your opponents
              are left guessing.
            </p>

            {/* H2: How Position Changes Your Sizing */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{
                color: 'var(--text)',
                borderLeft: '3px solid var(--green)',
              }}
            >
              How Position Changes Your Sizing
            </h2>
            <p>
              Position affects sizing in two ways.{' '}
              <Link
                href="/blog/poker-positions"
                style={{ color: 'var(--green)' }}
                className="hover:opacity-80 transition-opacity underline underline-offset-2"
              >
                Out of position
              </Link>{' '}
              you tend to size larger to charge opponents who get to act after you, and you c-bet
              less often but with bigger sizes when you do. In position you can use smaller sizes
              more often because you control the flow of the hand. You see their reaction before
              you commit more chips.
            </p>
            <p className="mt-4">
              This is why the same hand might be a 33% pot c-bet in position but a 60% pot c-bet
              out of position. In position, the small bet still works because you can barrel the
              turn profitably if they call. Out of position, you need to charge now because you
              won't have that luxury later.
            </p>

            {/* CTA Box 1 */}
            <CTABox
              headline="Master the Preflop Decisions"
              text="Poker Reflex drills your opens, 3-bets, and 4-bets across every position and stack depth, so the right play (and the right size) becomes automatic. Free to download."
            />

            {/* H2: Common Bet Sizing Mistakes */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{
                color: 'var(--text)',
                borderLeft: '3px solid var(--green)',
              }}
            >
              Common Bet Sizing Mistakes
            </h2>
            <p>
              <strong style={{ color: 'var(--text)' }}>Betting based on hand strength instead of
              pot size.</strong> This is the number one leak. You have aces and bet $30 into a $12
              pot. You have a draw and bet $3 into the same pot. Regulars at your table thank you
              every time.
            </p>
            <p className="mt-4">
              C-betting too big on dry boards. If the flop is K-7-2 and you fire 80% pot, you're
              risking way more than you need to. The hands that fold to a third-pot bet fold to a
              big bet too. You're just losing more when they have you beat.
            </p>
            <p className="mt-4">
              C-betting too small on wet boards. A $4 bet into a $20 pot on a J-T-8 two-tone
              board gives every draw the perfect price to call (use the free{' '}
              <Link
                href="/tools/pot-odds-calculator"
                style={{ color: 'var(--green)' }}
                className="hover:opacity-80 transition-opacity underline underline-offset-2"
              >
                pot odds calculator
              </Link>{' '}
              to see exactly what equity they're getting). You're basically handing out free
              cards. Size up to 60-75% when the board is coordinated.
            </p>
            <p className="mt-4">
              Under-sizing river value bets. You hit a full house, the pot is $100, and you bet
              $20. Why? The opponent who would have called $60 folds to $20 anyway (no, they
              don't, they call both). You left $40 on the table for no reason. When you have a
              big hand on the river, bet as large as you think they'll call.
            </p>
            <p className="mt-4">
              Making bets that don't set up the next street. If you bet the flop and turn in
              sizes that leave you 3x pot behind on the river, your river bet looks forced no
              matter what you do. Think one street ahead. A good flop bet size leaves a
              comfortable turn bet, which leaves a comfortable river shove.
            </p>
            <p className="mt-4">
              Ignoring stack-to-pot ratio (SPR). If there's $50 in the pot and you have $500
              behind, you have room for three streets of betting. If there's $50 in the pot and
              you have $60 left, you're basically committed. Your sizing should always account
              for what's behind, not just what's in front.
            </p>

            {/* H2: A Simple Bet Sizing Cheat Sheet */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{
                color: 'var(--text)',
                borderLeft: '3px solid var(--green)',
              }}
            >
              A Simple Bet Sizing Cheat Sheet
            </h2>
            <p>
              Here's a clean reference you can keep in mind. These aren't rigid rules, they're
              solid baselines that work in the majority of spots.
            </p>

            <figure className="mt-6 mb-6 overflow-x-auto">
              <table
                aria-label="Poker bet sizing cheat sheet for preflop and postflop situations"
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
                    <th className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Spot</th>
                    <th className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Standard Size</th>
                    <th className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ backgroundColor: 'var(--surface)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>Preflop open (online)</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>2.5-3x BB</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Add 1bb per limper</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--background)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>Preflop open (live)</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>3-4x BB</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Add 1bb per limper</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--surface)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>3-bet in position</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>~3x the open</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}></td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--background)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>3-bet out of position</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>~4x the open</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Charge more, you act first postflop</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--surface)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>4-bet</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>~2.2-2.5x the 3-bet</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}></td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--background)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>C-bet (dry board)</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>25-40% pot</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Small bet gets same folds as big bet</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--surface)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>C-bet (wet board)</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>60-75% pot</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Charge the draws</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--background)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>C-bet (3-bet pot)</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>25-40% pot</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Pot is already large</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--surface)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>Value bet (river)</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>50-100% pot</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Size to what worse hands will call</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--background)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>Bluff (river)</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>75-100% pot or overbet</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Bigger size = more pressure</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--surface)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)' }}>Overbet</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)' }}>100%+ pot</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)' }}>Best on rivers with polarized ranges</td>
                  </tr>
                </tbody>
              </table>
              <figcaption className="text-xs mt-3 text-center" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>
                Poker bet sizing cheat sheet for preflop and postflop situations.
              </figcaption>
            </figure>

            {/* H2: Common Questions About Bet Sizing */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{
                color: 'var(--text)',
                borderLeft: '3px solid var(--green)',
              }}
            >
              Common Questions About Bet Sizing
            </h2>
            <p>
              <strong style={{ color: 'var(--text)' }}>How much should you bet in poker?</strong>{' '}
              Relative to the pot, not your hand. Most postflop bets fall between half pot and
              full pot. Preflop opens are 2.5-3x the big blind online and 3-4x live. The right
              size depends on board texture, position, and whether you're betting for value or
              as a bluff.
            </p>
            <p className="mt-4">
              <strong style={{ color: 'var(--text)' }}>What is a standard preflop raise size?</strong>{' '}
              Online, 2.5x to 3x the big blind. Live, 3x to 4x. Add one big blind for each
              limper already in the pot. These numbers are starting points, not laws.
            </p>
            <p className="mt-4">
              <strong style={{ color: 'var(--text)' }}>What is a continuation bet size?</strong>{' '}
              On dry boards (few draws), 25-40% of the pot. On wet boards (lots of draws),
              60-75%. In 3-bet pots where the pot is already big, 25-40% is standard.
            </p>
            <p className="mt-4">
              <strong style={{ color: 'var(--text)' }}>Should you bet bigger with strong hands?</strong>{' '}
              Not always. If you only bet big with strong hands and small with weak hands,
              observant opponents read you instantly. Strong players use the same size with value
              hands and bluffs from the same range, so the bet size reveals nothing.
            </p>

            {/* H2: Putting It All Together */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{
                color: 'var(--text)',
                borderLeft: '3px solid var(--green)',
              }}
            >
              Putting It All Together
            </h2>
            <p>
              Bet sizing is one of the highest-leverage skills in poker because every single hand
              involves at least one bet. Know the basic sizes for each spot, stay consistent
              within ranges, and adjust to your opponent. The preflop sizes are relatively fixed
              (2.5-3x opens, 3-4x 3-bets). Postflop is where you get creative, but even there,
              the framework is simple: small on dry boards, bigger on wet boards, and always the
              same size for value and bluffs in similar situations.
            </p>
            <p className="mt-4">
              Master this and you'll squeeze more value from your good hands and lose less with
              your weak ones. And the best part: most players at low stakes don't think about
              sizing at all. Just by reading this and applying even half of it, you're already
              ahead.
            </p>

            {/* CTA Box 2 */}
            <CTABox
              headline="Train Your Preflop Game Today"
              text="Build real instincts for every preflop spot with a fast swipe trainer. Open, 3-bet, 4-bet, and all-in scenarios across multiple stack depths."
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
