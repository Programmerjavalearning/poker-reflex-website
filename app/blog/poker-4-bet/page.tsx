import type { Metadata } from 'next'
import { type ReactNode } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import QRCodeBlock from '@/components/QRCodeBlock'
import { BRAND_ASSETS, SITE_URL, APP_STORE_URL, PLAY_STORE_URL } from '@/lib/brand'

export const metadata: Metadata = {
  title: 'What Is a 4-Bet in Poker? When to 4-Bet, Sizing & Bluffs',
  description:
    'A 4-bet is the reraise of a 3-bet preflop. Learn what a 4-bet is, when to 4-bet for value (QQ+/AK), the best blocker bluffs, sizing, and when to fold.',
  keywords:
    '4-bet poker, what is a 4-bet, when to 4-bet, 4-bet bluff, 4-bet sizing, 3-bet vs 4-bet, 4-bet range poker',
  alternates: { canonical: `${SITE_URL}/blog/poker-4-bet` },
  openGraph: {
    title: 'What Is a 4-Bet in Poker? When to 4-Bet, Sizing & Bluffs',
    description:
      'What a 4-bet is, when to 4-bet for value, the blocker hands that make the best bluffs, sizing, and what to do when you face one.',
    url: `${SITE_URL}/blog/poker-4-bet`,
    type: 'article',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is a 4-Bet in Poker?',
    description: 'When to 4-bet for value, the best blocker bluffs, sizing, and facing a 4-bet.',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Is a 4-Bet in Poker? When to 4-Bet, Sizing & Bluffs',
  description:
    'A complete guide to the 4-bet: what it is, when to 4-bet for value, the blocker hands that make the best bluffs, sizing, and what to do when you face one.',
  author: { '@type': 'Organization', name: 'Poker Reflex' },
  publisher: {
    '@type': 'Organization',
    name: 'Poker Reflex',
    logo: { '@type': 'ImageObject', url: BRAND_ASSETS.squareLogoUrl },
  },
  image: BRAND_ASSETS.squareLogoUrl,
  datePublished: '2026-06-27',
  dateModified: '2026-06-27',
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/poker-4-bet` },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is AK a 4-bet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. AK (both AKs and AKo) is part of the standard 4-bet value range alongside QQ+. It has strong equity against the hands that call a 4-bet, and it blocks AA and KK, which makes it less likely you are running into the top of an opponent range. At shorter stacks, AK is usually a 4-bet shove rather than a flat.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should I 4-bet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not very often. The 4-bet is a rare action because it only happens after an open and a 3-bet, and your value core is tight (QQ+ and AK). Add a few blocker bluffs like A5s and A4s against opponents who can fold, and your total 4-betting frequency stays low. If you are 4-betting a lot, you are almost certainly doing it too light.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a 3-bet and a 4-bet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 3-bet is the first reraise after an opening raise, and a 4-bet is the reraise of that 3-bet. So the order is open (2-bet), 3-bet, then 4-bet. A 4-bet can only happen once someone has opened and someone else has 3-bet.',
      },
    },
    {
      '@type': 'Question',
      name: 'What hands make the best 4-bet bluffs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Blocker hands, mainly the suited wheel aces: A5s, A4s, A3s, and A2s. Holding an ace removes combos of AA and AK from the opponent continuing range, so you get more folds, and when you do get called the suited ace can still make nut straights and nut flushes. Hands like KQs, KJs, QJs, and JTs are bad 4-bet bluffs because they block almost nothing and play better as a flat-call or a fold.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I do when someone 4-bets me?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fold most of the time. Continue only with a tight range, roughly KK+ and AK, and choose to call or 5-bet jam based on stack depth and how loose the 4-bettor is. QQ and AK get tricky against a tight opponent, so do not stack off light just because you have a big hand.',
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

export default function FourBetArticle() {
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
            What Is a 4-Bet in Poker? When to 4-Bet, Sizing &amp; Bluffs
          </h1>
          <div className="flex items-center gap-4 mb-10 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <span>By Poker Reflex</span>
            <span>·</span>
            <span>June 27, 2026</span>
            <span>·</span>
            <span>10 min read</span>
          </div>

          <div className="prose-article" style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>

            {/* Intro */}
            <p>
              A 4-bet is the reraise of a 3-bet. Someone opens, someone else reraises (that is the{' '}
              <A href="/blog/what-is-a-3-bet-in-poker">3-bet</A>), and then a third player or the
              original raiser raises again over the top. That last raise is the 4-bet. Because the
              pot is already large and both ranges are tight, it is one of the heaviest weapons in
              preflop poker, so the hands you pick matter a lot.
            </p>
            <p className="mt-4">
              This article is the sequel to that 3-bet guide, so we will assume you already know how
              a reraise works and why position matters. Here we will cover what a 4-bet actually is,
              the hands you should 4-bet for value, the surprisingly specific hands that make the best
              4-bet bluffs (the blocker logic is the part most players get wrong), how to size it in
              position versus out of position, and what to do when someone fires a 4-bet at you. By
              the end you will know when to put in that fourth bet and, just as important, when to
              shut it down and fold.
            </p>

            {/* What is a 4-bet */}
            <H2>What Is a 4-Bet in Poker?</H2>
            <p>
              A 4-bet is the second reraise before the flop, the raise that comes right after a 3-bet.
              Just like with the 3-bet, the name confuses people because it sounds like it should be
              the fourth raise. It isn&apos;t. We count bets, not raises, and the count starts with the
              blinds.
            </p>
            <p className="mt-4">
              Notice the order of events that has to happen first. A 4-bet can only exist after someone
              opens and someone else 3-bets. No open, no 3-bet, no 4-bet. The fourth bet is always a
              response to the third bet, which was a response to the open. It is a chain, and each link
              has to be there.
            </p>
            <ul className="mt-4 space-y-2 pl-6 list-disc">
              <li>The <S>big blind</S> is the 1-bet (the first forced bet that sets the price).</li>
              <li>The <S>open</S> is the 2-bet (the first voluntary raise).</li>
              <li>The <S>3-bet</S> is the first reraise (a raise over the open).</li>
              <li>The <S>4-bet</S> is the reraise of the 3-bet (a raise over the reraise).</li>
              <li>The <S>5-bet</S> is the next raise on top, and at 100bb it is almost always all-in.</li>
            </ul>
            <p className="mt-4">
              Here is what it looks like at a $1/$2 table. A player in the cutoff opens to $6. The
              button reraises to $20 (the 3-bet). Action comes back to the cutoff, who makes it $50.
              That $50 raise is the 4-bet. The pot is already big, both players have shown real
              strength, and someone is about to make a tough decision for a lot of chips. That pressure
              is exactly why you have to be careful about which hands you use it with.
            </p>

            {/* Value */}
            <H2>When to 4-Bet for Value</H2>
            <p>
              A value 4-bet is the easy half to understand. You have a hand that beats the range your
              opponent will continue with, and you want the money in. The standard value core facing a
              3-bet at 100 big blinds is <S>QQ+ and AK</S> (both AKs and AKo). In the tightest spots,
              against players who only 3-bet you with monsters, that core shrinks to KK+. But QQ+ and
              AK is the safe, standard answer you can lean on.
            </p>
            <p className="mt-4">
              Why these hands and not a notch wider? Because when you 4-bet, you fold out almost
              everything except your opponent&apos;s strongest holdings. So you have to ask what calls
              or jams over a 4-bet. The answer is hands like QQ, KK, AA, and AK. Against that tight
              continuing range, you want to be holding the top of it yourself. AA and KK are crushing
              it. QQ and AK are flipping or slightly behind the very top, but they have enough equity
              to get the stacks in profitably once you factor in the fold equity from all the worse
              hands you blow off the pot.
            </p>
            <p className="mt-4">
              Here is the picture in practice. You open AA on the button to $6 in a $1/$2 game. The big
              blind 3-bets to $24. You 4-bet to about $55. If they fold, you take down a nice pot. If
              they jam or call, you are thrilled, because the only hands that keep playing are exactly
              the ones you dominate or flip against. You are not trying to make them fold. You are
              building the biggest pot you can while you hold the best hand.
            </p>
            <p className="mt-4">
              QQ and AK are the spots that take judgment. Against a loose, aggressive 3-bettor who jams
              a wide range, they are clear value 4-bets. Against a nit who only ever 4-bet-jams KK+,
              your QQ is suddenly in trouble. So the strength of a value 4-bet is always relative to
              who you are up against. To see how AK fares against a realistic 4-bet calling range, run
              it through the <A href="/tools/equity-calculator">equity calculator</A> and watch how
              much the result swings as you tighten or loosen the range you put them on.
            </p>

            {/* Bluff */}
            <H2>When to 4-Bet as a Bluff</H2>
            <p>
              This is the part most players get wrong, and it is the most useful idea in the whole
              article. If you 4-bet only QQ+ and AK, a thinking opponent folds every time and you never
              win an extra chip. You need some bluffs. But not just any hand works as a 4-bet bluff. The
              best ones share a specific property.
            </p>
            <p className="mt-4">
              The best 4-bet bluffs are <S>blocker hands</S>, and the cleanest examples are the suited
              wheel aces: A5s, A4s, A3s, and A2s (with some suited kings mixed in). On the surface these
              look like junk to reraise with. So why are they the gold standard for 4-bet bluffing? Two
              reasons.
            </p>
            <p className="mt-4">
              Reason one is the blocker effect. Your opponent is folding everything except roughly QQ+
              and AK. Count the combos. There are 6 ways to be dealt AA and 16 ways to be dealt AK.
              Every one of those holdings requires an ace. When you hold the ace of clubs in your A5s,
              you have physically removed a chunk of those combinations from the deck. Fewer AA and AK
              combos in their range means more folds against your 4-bet. You are bluffing with the
              specific hand that makes the bluff more likely to work.
            </p>
            <p className="mt-4">
              Reason two is the fallback. The wheel aces are not just blockers, they are playable. When
              your A4s gets called and the flop brings a wheel draw or a flush draw, you can make the
              nut straight (A-2-3-4-5) or the nut flush. So on the rare occasions your 4-bet bluff gets
              looked up, you still have a hand that can win a big pot. They block, and they make nut
              hands.
            </p>
            <p className="mt-4">
              Here is the trap. Beginners reach for a &ldquo;decent&rdquo; hand like KQs, KJs, QJs, or
              JTs because they are pretty cards. But they are some of the worst 4-bet bluffs. They block
              almost nothing useful: a king or a queen does not remove many of the hands your opponent
              continues with, since the bulk of the calling range (AA, AK) holds neither. They are
              dominated when called: against AK, AA, KK, and QQ, your KJ is crushed and gets you stacked
              making second-best pairs. And they are worth more doing something else, as flat-calls
              against a 3-bet or as folds. Burning a hand like KQs as a 4-bet bluff wastes a hand that
              had a better, cheaper job to do. This is one of the classic{' '}
              <A href="/blog/preflop-poker-mistakes">preflop mistakes</A> that quietly costs
              intermediate players money.
            </p>
            <ul className="mt-4 space-y-2 pl-6 list-disc">
              <li><S>A5s to A2s: best bluffs.</S> The ace blocks AA and AK, and they make the nuts when called.</li>
              <li><S>Some suited kings (Kxs): okay bluffs.</S> A king blocks KK and AK, but they are weaker than the wheel aces.</li>
              <li><S>KQs, KJs, QJs, JTs: bad bluffs.</S> They block nothing useful, are dominated when called, and play better as a flat or a fold.</li>
            </ul>
            <p className="mt-4">
              So the rule flips your intuition on its head. The &ldquo;nice&rdquo; broadway hands are
              bad bluffs and good calls. The &ldquo;ugly&rdquo; suited wheel aces are bad calls and
              great bluffs. It feels backwards until you frame everything around blockers, and then it
              clicks.
            </p>
            <p className="mt-4">
              One important caveat. This whole bluffing layer only works against opponents who can fold.
              Against a nit or a fish who only 3-bets premium hands and never lays one down, the blocker
              math does not save you. Against those players, skip the bluffs entirely, fold your
              non-premiums, and 4-bet only for value.
            </p>
            <p className="mt-4">
              If you want to feel how a real 4-bet range fits together, build one in the{' '}
              <A href="/tools/range-visualizer">range visualizer</A>. Drop QQ+ and AK in as your value,
              add A5s through A2s as your bluffs, and you can see at a glance how the blocker hands sit
              on the grid next to the value hands. For more on how raw hand strength feeds into all of
              this, our guide to <A href="/blog/poker-starting-hands">poker starting hands</A> is a
              useful companion read, and <A href="/blog/poker-equity-explained">poker equity explained</A>{' '}
              covers the math behind it.
            </p>

            {/* CTA 1 */}
            <CTABox
              headline="Make 4-Bet Spots Automatic"
              text="Poker Reflex drills open, 3-bet, 4-bet, and all-in decisions hand by hand with instant GTO feedback, so the right reraise becomes a reflex. Free to download."
            />

            {/* Position */}
            <H2>Position Changes How You 4-Bet</H2>
            <p>
              Where you sit at the table changes your whole 4-betting plan. Position decides how wide
              you go, how many bluffs you mix in, and how big you size. If you are new to thinking in
              seats, the breakdown in our <A href="/blog/poker-positions">poker positions guide</A> will
              make the rest of this section click faster.
            </p>
            <p className="mt-4">
              Here is the core idea. When you 4-bet in position, you get to act last on every street
              after the flop. That edge lets you widen your range, add more bluffs, and keep your sizing
              smaller. A 4-bet to about 2.2x to 2.5x the 3-bet does the job, and a few extra punishing
              bluffs like the suited wheel aces fit nicely.
            </p>
            <p className="mt-4">
              Out of position is a different animal. You will have to act first after the flop, which is
              a real disadvantage, so you tighten up. Fewer bluffs, more value, and a bigger size,
              roughly 2.5x to 3x the 3-bet. The larger sizing charges your opponent more to continue and
              denies the equity of all those hands that would happily peel a smaller raise.
            </p>
            <p className="mt-4">
              From the blinds, you play the tightest of all. You are guaranteed to be out of position
              postflop against the original opener, and your range is already capped because you cannot
              credibly represent every premium. So 4-bet the blinds mostly for value, trim the bluffs
              hard, and lean on the larger out-of-position sizing.
            </p>

            {/* How big */}
            <H2>How Big Should a 4-Bet Be?</H2>
            <p>
              The good news is that 4-bet sizing is simpler than open sizing. You are not picking a
              number out of thin air, you are reacting to the 3-bet that is already in front of you. The
              rule of thumb is to multiply the size of the 3-bet.
            </p>
            <p className="mt-4">
              Let&apos;s put real chips on it. Say you are playing 100bb and an opponent opens to 3bb.
              You 3-bet to 10bb, and they come back over the top with a 4-bet. If they are in position, a
              2.2x to 2.5x 4-bet lands at roughly 22bb to 25bb. The 4-bet isn&apos;t some scary mountain
              of chips, it is a touch more than double the 3-bet. Out of position, that same spot pushes
              toward 25bb to 30bb instead.
            </p>
            <ul className="mt-4 space-y-2 pl-6 list-disc">
              <li><S>In position:</S> about 2.2x to 2.5x the 3-bet.</li>
              <li><S>Out of position:</S> about 2.5x to 3x the 3-bet, because you want to deny equity and charge more for playing a big pot while you are out of position.</li>
              <li><S>Short stacks:</S> forget the multiplier. Just shove. If a 2.2x to 3x 4-bet would commit most of your stack anyway, going all-in is cleaner and takes away your opponent&apos;s chance to play perfectly against you.</li>
            </ul>
            <p className="mt-4">
              Notice how small the actual multiplier feels once it is in chips. A lot of beginners
              overcook the 4-bet to 35bb or 40bb out of fear, which only bloats the pot and tells a
              tighter opponent exactly what you have. Stick to the multiplier. If you want to see why the
              size matters for the player facing it, run the call price through the{' '}
              <A href="/tools/pot-odds-calculator">pot odds calculator</A>, and for a deeper read on
              raise sizes in general, our <A href="/blog/poker-bet-sizing">bet sizing guide</A> goes seat
              by seat.
            </p>

            {/* Position / sizing cheat sheet table */}
            <figure className="mt-6 mb-6 overflow-x-auto">
              <table
                aria-label="How position changes your 4-bet range and sizing"
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
                    <th className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Scenario</th>
                    <th className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>4-bet range</th>
                    <th className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Sizing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ backgroundColor: 'var(--surface)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>In position</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Wider, more bluffs</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>~2.2x to 2.5x the 3-bet</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--background)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>Out of position</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Tighter, fewer bluffs</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>~2.5x to 3x the 3-bet</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--surface)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>From the blinds</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Tightest, mostly value</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Larger (2.5x to 3x)</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--background)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)' }}>Short stacks (any seat)</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)' }}>Value heavy, no flatting plan</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)' }}>Just shove (all-in)</td>
                  </tr>
                </tbody>
              </table>
              <figcaption className="text-xs mt-3 text-center" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>
                How your seat changes your 4-bet range and sizing. Short-stack ranges live in our{' '}
                <A href="/tools/push-fold-chart">push or fold chart</A>.
              </figcaption>
            </figure>

            {/* When to fold instead */}
            <H2>When to Just Fold Instead</H2>
            <p>
              Here is the part most players skip. A 4-bet bluff only works against someone who can fold.
              If your opponent will not lay down a strong hand, the bluff has nothing to do. You are just
              lighting money on fire.
            </p>
            <p className="mt-4">
              Think about the nits and the fish you play against every session. The nit only 3-bets KK
              and AA. The fish 3-bets a random ace and then refuses to fold it. Neither of those players
              is folding to a 4-bet, so a 4-bet bluff against them is pointless. They do not have the
              fold button you are trying to press. This is one of the most common mistakes at low stakes:
              bluffing into people who literally cannot fold.
            </p>
            <p className="mt-4">
              So against those players, do the boring thing. Fold your non-premiums and only 4-bet for
              value. When a known nit 3-bets you and you are holding A5s, that suited wheel ace is a fold,
              not a 4-bet bluff. Save your 4-bets for QQ+ and AK, the hands that actually want the money
              in against a tight range.
            </p>
            <p className="mt-4">
              4-bet bluffing is a tool for one specific situation: a thinking opponent who is 3-betting
              light and is capable of folding a strong but non-nutted hand to extra pressure. If that
              describes the player, bluff away. If it doesn&apos;t, fold and wait for a better spot.
              Knowing the difference is worth more than any range chart.
            </p>

            {/* Facing a 4-bet */}
            <H2>What to Do When You Get 4-Bet</H2>
            <p>
              Eventually you will 3-bet, get raised again, and have to act. Facing a 4-bet is one of the
              tightest spots in poker, and the default answer is short: fold most hands. A 4-bet
              represents real strength, so you do not need to defend anywhere near as wide as you might
              think.
            </p>
            <p className="mt-4">
              Your continuing range is roughly <S>KK+ and AK</S>. Everything else you 3-bet with,
              including all your bluffs and most of your value, just folds. Yes, that means folding hands
              like JJ, AQ, and even QQ against a tight 4-bettor. It feels bad in the moment, but those
              hands are usually behind the range that 4-bets you. The player who calls a 4-bet with QQ or
              AQ because it is a big pair is the player who bleeds money in this exact spot.
            </p>
            <ul className="mt-4 space-y-2 pl-6 list-disc">
              <li><S>Deeper stacks (100bb+):</S> you can flat a 4-bet with your strongest hands and play postflop, or 5-bet jam with AA and KK to get it in. AK is often a call or a jam depending on the opponent.</li>
              <li><S>Shorter stacks:</S> there is no room to play postflop, so the decision is simpler. With KK+ and often AK, your move is to 5-bet shove all in. Everything else folds.</li>
              <li>Whatever the depth, do not stack off light just because you have a big hand.</li>
            </ul>
            <p className="mt-4">
              QQ and AK are the genuine grey-area hands. Against a maniac who 4-bets light, they are an
              easy continue. Against a rock who has never bluffed a 4-bet in his life, QQ becomes a fold
              and AK gets a lot less comfortable. Pay attention to who is doing the raising, and use the{' '}
              <A href="/tools/equity-calculator">equity calculator</A> to run AK against a tight
              4-bet-calling range so you can see exactly where you stand.
            </p>

            {/* FAQ */}
            <H2>Common Questions About 4-Betting</H2>
            <p>
              <S>Is AK a 4-bet?</S>{' '}
              Yes. AK (both AKs and AKo) is part of the standard 4-bet value range alongside QQ+. It has
              strong equity against the hands that call a 4-bet, and it blocks AA and KK. At shorter
              stacks, AK is usually a 4-bet shove rather than a flat.
            </p>
            <p className="mt-4">
              <S>How often should I 4-bet?</S>{' '}
              Not very often. The 4-bet only happens after an open and a 3-bet, and your value core is
              tight (QQ+ and AK). Add a few blocker bluffs like A5s and A4s against opponents who can
              fold, and your total 4-betting frequency stays low. If you are 4-betting a lot, you are
              almost certainly doing it too light.
            </p>
            <p className="mt-4">
              <S>What is the difference between a 3-bet and a 4-bet?</S>{' '}
              A 3-bet is the first reraise after an opening raise, and a 4-bet is the reraise of that
              3-bet. So the order is open (the 2-bet), then 3-bet, then 4-bet. A 4-bet can only happen
              once someone has opened and someone else has 3-bet.
            </p>
            <p className="mt-4">
              <S>What hands make the best 4-bet bluffs?</S>{' '}
              Blocker hands, mainly the suited wheel aces A5s, A4s, A3s, and A2s. Holding an ace removes
              combos of AA and AK from the calling range, so you get more folds, and the suited ace can
              still make nut straights and nut flushes when called. Hands like KQs and KJs are bad 4-bet
              bluffs because they block almost nothing and play better as a flat-call or a fold.
            </p>
            <p className="mt-4">
              <S>What should I do when someone 4-bets me?</S>{' '}
              Fold most of the time. Continue only with a tight range, roughly KK+ and AK, and call or
              5-bet jam based on stack depth and how loose the 4-bettor is. Do not stack off light just
              because you have a big hand.
            </p>

            {/* Putting it into practice */}
            <H2>Putting It Into Practice</H2>
            <p>
              The 4-bet is rare, but it is one of the highest-leverage decisions in preflop poker. Get it
              right and you win big pots with your premiums and steal others outright with the perfect
              blocker bluff. Get it wrong and you either spew with hands that cannot fold anyone out, or
              you call off a tight 4-bettor with a hand that is drawing thin.
            </p>
            <p className="mt-4">
              Start simple. 4-bet QQ+ and AK for value, every time. Once that feels automatic, add A5s
              through A2s as bluffs against thinking opponents who can fold, and fold those same hands
              against the players who cannot. Size to about 2.2x to 2.5x the 3-bet in position, a touch
              more out of position, and shove when you are short. And when someone 4-bets you, trust the
              read and let most hands go. If you want the theory behind why these ranges are built the
              way they are, our <A href="/blog/gto-poker-for-beginners">guide to GTO poker for beginners</A>{' '}
              ties it all together.
            </p>

            {/* CTA 2 */}
            <CTABox
              headline="Train Your Preflop Game Today"
              text="Drill open, 3-bet, 4-bet, and all-in decisions across every position and stack depth, with instant feedback and an ELO that tracks your progress. Free to download."
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
