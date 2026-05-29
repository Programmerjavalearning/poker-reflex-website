import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'What Is a 3-Bet in Poker? When and How to Use It (2026)',
  description:
    'A 3-bet is the first re-raise before the flop. Learn what it means, when to 3-bet for value or as a bluff, and how to size it correctly with clear examples.',
  keywords:
    '3-bet poker, what is a 3-bet, 3bet meaning poker, when to 3-bet, 3-bet bluff, 3-bet sizing, 3-bet range poker',
  alternates: {
    canonical: 'https://poker-reflex.com/blog/what-is-a-3-bet-in-poker',
  },
  openGraph: {
    title: 'What Is a 3-Bet in Poker? When and How to Use It',
    description:
      'What a 3-bet means, when to do it for value or as a bluff, and how to size it.',
    url: 'https://poker-reflex.com/blog/what-is-a-3-bet-in-poker',
    type: 'article',
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is a 3-Bet in Poker?',
    description:
      'What a 3-bet means, when to do it, and how to size it.',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Is a 3-Bet in Poker? When and How to Use It',
  description:
    'A complete beginner guide to the 3-bet: what it is, when to do it for value or as a bluff, and how to size it.',
  author: { '@type': 'Organization', name: 'Poker Reflex' },
  publisher: {
    '@type': 'Organization',
    name: 'Poker Reflex',
    logo: { '@type': 'ImageObject', url: 'https://poker-reflex.com/logo.png' },
  },
  datePublished: '2026-05-28',
  dateModified: '2026-05-28',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://poker-reflex.com/blog/what-is-a-3-bet-in-poker',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a 3-bet in poker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 3-bet is the first re-raise before the flop. The big blind counts as the first bet, the opening raise is the second bet, and the re-raise is the third bet, which is why it is called a 3-bet.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is it called a 3-bet if it is the second raise?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It is counted in bets, not raises. The big blind is the first bet, the open raise is the second bet, and the re-raise is the third bet. So the second raise is the third bet.',
      },
    },
    {
      '@type': 'Question',
      name: 'How big should a 3-bet be?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A common guideline is about 3 times the original raise when you are in position and about 4 times when you are out of position. Sizes are smaller when stacks are short.',
      },
    },
    {
      '@type': 'Question',
      name: 'What hands should you 3-bet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Strong hands like AA, KK, QQ, and AK are standard value 3-bets. You can also add bluff 3-bets with hands like suited aces (A5s, A4s) to keep your range balanced.',
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

export default function ThreeBetArticle() {
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
            What Is a 3-Bet in Poker? When and How to Use It
          </h1>
          <div
            className="flex items-center gap-4 mb-10 text-sm"
            style={{ color: 'var(--text-secondary)' }}
          >
            <span>By Poker Reflex</span>
            <span>·</span>
            <span>May 28, 2026</span>
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
              If you've spent any time at a poker table or watching streams, you've heard someone
              say "I 3-bet him." It sounds advanced and a little intimidating, but the idea behind
              it is simple once you break it down. The <strong style={{ color: 'var(--text)' }}>3-bet is one of the most powerful tools
              in preflop poker</strong>, and learning to use it well is one of the fastest ways to stop
              being a passive player who just calls and starts being someone other players actually
              fear. Here's exactly what a 3-bet is, why it has a confusing name, and when you
              should be firing one yourself.
            </p>

            {/* H2: What Is a 3-Bet? */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{
                color: 'var(--text)',
                borderLeft: '3px solid var(--green)',
              }}
            >
              What Is a 3-Bet?
            </h2>
            <p>
              A 3-bet is the first re-raise before the flop. The sequence goes like this: someone
              at the table puts in an opening raise, and then another player raises again over the
              top. That second raise is the 3-bet. It's a sign of strength (or at least the
              appearance of it), and it forces your opponent to make a difficult decision with a
              bigger pot at stake.
            </p>
            <p className="mt-4">
              In practice, it looks like this. You're playing $1/$2. A player in middle position
              raises to $6. You look down at pocket kings on the cutoff and raise to $18. That
              raise to $18 is the 3-bet. Simple.
            </p>

            {/* H2: Why Is It Called a 3-Bet? */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{
                color: 'var(--text)',
                borderLeft: '3px solid var(--green)',
              }}
            >
              Why Is It Called a 3-Bet If It's Only the Second Raise?
            </h2>
            <p>
              This trips up almost everyone at first, and the answer is that we count bets, not
              raises. The naming comes from limit poker, where every increase in the pot is counted
              as a separate bet:
            </p>
            <ul className="mt-4 space-y-2 pl-6 list-disc">
              <li>
                The <strong style={{ color: 'var(--text)' }}>big blind</strong> is the first bet (bet number 1, a forced bet).
              </li>
              <li>
                The <strong style={{ color: 'var(--text)' }}>opening raise</strong> is the second bet (bet number 2).
              </li>
              <li>
                The <strong style={{ color: 'var(--text)' }}>re-raise</strong> is the third bet (bet number 3).
              </li>
            </ul>
            <p className="mt-4">
              So the second raise is the third bet. That's where the name comes from. And if
              someone re-raises the 3-bet? That's a 4-bet. Re-raise again? 5-bet. The logic
              stays the same all the way up.
            </p>

            {/* H2: Value 3-Bets vs Bluff 3-Bets */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{
                color: 'var(--text)',
                borderLeft: '3px solid var(--green)',
              }}
            >
              Value 3-Bets vs Bluff 3-Bets
            </h2>
            <p>
              There are two reasons to 3-bet, and understanding the difference between them is
              what separates the players who 3-bet correctly from the ones who just shove it in
              with aces and pray.
            </p>

            {/* H3: Value */}
            <h3
              className="font-heading font-bold text-xl md:text-2xl mt-8 mb-4"
              style={{ color: 'var(--text)' }}
            >
              3-Betting for Value
            </h3>
            <p>
              You have a strong hand and you want to build the pot. The goal is to get more money
              in while you're ahead, because{' '}
              <Link
                href="/blog/poker-starting-hands"
                style={{ color: 'var(--green)' }}
                className="hover:opacity-80 transition-opacity underline underline-offset-2"
              >
                premium starting hands
              </Link>{' '}
              like AA, KK, QQ, and AK are clear favorites against the hands that will call or
              re-raise you.
            </p>
            <p className="mt-4">
              Example: you're in a $1/$2 cash game. A player in the hijack raises to $6. You're
              on the cutoff with KK and you 3-bet to $18. A worse hand like AQo or JJ might call,
              and now you're playing a bigger pot with the better hand. That's the dream scenario.
              If they fold, you still pick up the $9 in the pot (their raise plus the blinds), so
              it's not a disaster either.
            </p>

            {/* H3: Bluff */}
            <h3
              className="font-heading font-bold text-xl md:text-2xl mt-8 mb-4"
              style={{ color: 'var(--text)' }}
            >
              3-Betting as a Bluff
            </h3>
            <p>
              This is where things get more interesting. A <strong style={{ color: 'var(--text)' }}>bluff 3-bet</strong> is a re-raise with a hand
              that isn't strong enough to call, but has some useful properties. The main goal is
              to make your opponent fold. You're not looking to see a flop, you're trying to take
              the pot right now.
            </p>
            <p className="mt-4">
              The best bluff 3-bet hands usually contain an ace or a king. Hands like A5 suited or
              A4 suited are popular choices because they do something subtle: they remove
              combinations of AA, AK, and other big hands from your opponent's range. If you hold
              an ace, there are fewer pocket aces and AK combos available for them. Poker players
              call this "blocking," and it makes your bluff more likely to succeed.
            </p>
            <p className="mt-4">
              Example: the button opens to $6 in your $1/$2 game. You have A5 suited in the big
              blind. Instead of calling (which puts you in a tough spot out of position with a
              mediocre hand), you 3-bet to $24. The button folds most of the time. When they call,
              you still have a suited ace with straight and flush potential.
            </p>

            {/* H2: Why Balance Matters */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{
                color: 'var(--text)',
                borderLeft: '3px solid var(--green)',
              }}
            >
              Why Balance Matters
            </h2>
            <p>
              If you only 3-bet with AA and KK, observant opponents will catch on fast. They'll
              fold every time you re-raise and you'll never get paid off with your best hands. Your
              3-bet becomes a giant neon sign that says "I have a monster." Not ideal.
            </p>
            <p className="mt-4">
              Mixing in some bluffs keeps opponents guessing. When your 3-betting range contains
              both value hands and bluffs, your opponents can't simply fold every time, because
              sometimes you're bluffing and they'd be giving up too much equity. And they can't
              just call every time either, because sometimes you have aces. That tension is exactly
              what you want. A <strong style={{ color: 'var(--text)' }}>balanced 3-bet range</strong> forces mistakes from your opponents no
              matter what they do.
            </p>
            <p className="mt-4">
              You don't need to be perfectly balanced at low stakes. Most opponents aren't paying
              close enough attention. But the habit of mixing value and bluffs will serve you well
              as you move up and face tougher competition.
            </p>

            {/* H2: Sizing */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{
                color: 'var(--text)',
                borderLeft: '3px solid var(--green)',
              }}
            >
              How Much Should You 3-Bet? (Sizing)
            </h2>
            <p>
              Sizing matters more than most beginners realize. Too small and you're giving your
              opponent a cheap price to see a flop (and play a big pot against you, often with
              position). Too big and you scare away everything except the hands that have you
              crushed. Here are the practical guidelines most winning players follow.
            </p>

            {/* Sizing table */}
            <figure className="mt-6 mb-6 overflow-x-auto">
              <table
                aria-label="3-bet sizing guidelines by situation"
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
                    <th className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Situation</th>
                    <th className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Size</th>
                    <th className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Example ($6 open)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ backgroundColor: 'var(--surface)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>In position</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>~3x the raise</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>$18</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--background)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>Out of position</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>~4x the raise</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>$24</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--surface)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)' }}>Short stacks</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)' }}>~2.2x to 2.5x</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)' }}>$13 to $15</td>
                  </tr>
                </tbody>
              </table>
              <figcaption className="text-xs mt-3 text-center" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>
                3-bet sizing guidelines based on your position relative to the raiser.
              </figcaption>
            </figure>

            <p className="mt-4">
              The reason you go bigger out of position is that you're at a disadvantage for the
              rest of the hand (you act first on every street). A larger 3-bet discourages calls,
              which means you take down the pot preflop more often and avoid playing tricky
              postflop spots without position.
            </p>
            <p className="mt-4">
              In tournaments with <strong style={{ color: 'var(--text)' }}>shorter stacks</strong>, sizes drop because the effective stack
              doesn't leave room for big 3-bets. A 2.2x to 2.5x 3-bet still applies plenty of
              pressure when everyone has 25 to 40 big blinds.
            </p>

            {/* H2: Position Changes Everything */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{
                color: 'var(--text)',
                borderLeft: '3px solid var(--green)',
              }}
            >
              Position Changes Everything
            </h2>
            <p>
              A 3-bet against a button open is completely different from a 3-bet against an UTG
              open. The reason is simple:{' '}
              <Link
                href="/blog/poker-positions"
                style={{ color: 'var(--green)' }}
                className="hover:opacity-80 transition-opacity underline underline-offset-2"
              >
                early position players open tighter ranges
              </Link>
              , so their hands are on average much stronger. When UTG raises, they have hands like
              big pairs, AK, and strong broadways. 3-betting that range as a bluff is risky because
              they rarely fold.
            </p>
            <p className="mt-4">
              But when the button or cutoff opens, their range is much wider (often 30 to 40 percent
              of hands). They're holding a lot of medium-strength hands they can't defend against
              a re-raise. That's where bluff 3-bets print money. Your fold equity goes way up
              against late position opens, especially from the blinds.
            </p>
            <p className="mt-4">
              The practical rule: <strong style={{ color: 'var(--text)' }}>3-bet wider against late position opens</strong> and tighter against
              early position opens. Against UTG, your 3-bet range should be almost entirely value
              hands. Against the button, mix in plenty of bluffs.
            </p>

            {/* CTA Box 1 */}
            <CTABox
              headline="Master 3-Bet and 4-Bet Spots"
              text="Poker Reflex trains open, 3-bet, 4-bet, and all-in decisions with a fast swipe trainer, so the right re-raise becomes automatic. Free to download."
            />

            {/* H2: Common Mistakes */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{
                color: 'var(--text)',
                borderLeft: '3px solid var(--green)',
              }}
            >
              Common 3-Bet Mistakes Beginners Make
            </h2>
            <p>
              <strong style={{ color: 'var(--text)' }}>Only 3-betting premium hands.</strong> This is the most common one. If you only
              re-raise with AA, KK, and maybe QQ, your 3-bet becomes completely transparent.
              Regulars will just fold every time and never pay you off. You need bluffs in the mix
              to keep people honest.
            </p>
            <p className="mt-4">
              Sizing wrong is another frequent issue. Some players make their 3-bet just $2 more
              than the open, which accomplishes nothing. Others bomb it to 6x or 7x, which only
              gets called by hands that destroy them. Stick to the 3x in position, 4x out of
              position guideline and you'll be in good shape.
            </p>
            <p className="mt-4">
              Bluff 3-betting against players who never fold is expensive. If someone calls every
              re-raise with any pair or any ace, bluffing them is lighting money on fire. Save your
              bluff 3-bets for opponents who actually fold to aggression. Against calling stations,
              only 3-bet for value with hands that crush their calling range.
            </p>
            <p className="mt-4">
              3-betting out of position too wide is another trap. When you're in the blinds, you
              already have a postflop disadvantage. Widening your 3-bet range from the small blind
              against every open leads to a lot of bloated pots where you're guessing on every
              street. Be selective when out of position.
            </p>
            <p className="mt-4">
              And panicking when you get 4-bet. It happens. You 3-bet A5 suited as a bluff, and
              the original raiser comes back with a 4-bet. Most of the time, you fold your bluff
              hands and move on. That's fine. You'll get 4-bet sometimes, and folding is the correct
              response with the weaker parts of your 3-bet range. The mistake is letting it shake
              you into never bluffing again.
            </p>

            {/* H2: What Happens After You 3-Bet? */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{
                color: 'var(--text)',
                borderLeft: '3px solid var(--green)',
              }}
            >
              What Happens After You 3-Bet?
            </h2>
            <p>
              After you put in a 3-bet, your opponent has three options. They can fold, which means
              you win the pot right there. They can call, which means you play a bigger pot (and
              if you're in position, you have a real advantage going forward). Or they can 4-bet,
              which is a re-raise over your 3-bet.
            </p>
            <p className="mt-4">
              Facing a 4-bet, the decision is usually straightforward. Continue with your strongest
              value hands (AA, KK, and maybe QQ or AK depending on the situation) and fold your
              weakest bluffs. The hands in the middle require judgment, but at low stakes, a 4-bet
              almost always means a <strong style={{ color: 'var(--text)' }}>very strong hand</strong>. Don't overthink it. Fold the bluffs,
              stack off with the monsters.
            </p>
            <p className="mt-4">
              These 3-bet and 4-bet spots come up in every session, and they're exactly the kind
              of decisions that separate breakeven players from winning ones. The more comfortable
              you get with these spots, the more money you'll make.
            </p>

            {/* H2: FAQ */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{
                color: 'var(--text)',
                borderLeft: '3px solid var(--green)',
              }}
            >
              Common Questions About 3-Betting
            </h2>
            <p>
              <strong style={{ color: 'var(--text)' }}>What is a 3-bet in poker?</strong>{' '}
              It's the first re-raise before the flop. Someone opens, you raise over the top. That
              re-raise is the 3-bet.
            </p>
            <p className="mt-4">
              <strong style={{ color: 'var(--text)' }}>Why is it called a 3-bet?</strong>{' '}
              Because we count in bets, not raises. The big blind is bet number 1, the opening
              raise is bet number 2, and the re-raise is bet number 3.
            </p>
            <p className="mt-4">
              <strong style={{ color: 'var(--text)' }}>How big should a 3-bet be?</strong>{' '}
              About 3 times the original raise when you're in position, and about 4 times when
              you're out of position. Smaller with short stacks in tournaments (around 2.2x to
              2.5x).
            </p>
            <p className="mt-4">
              <strong style={{ color: 'var(--text)' }}>What hands should I 3-bet?</strong>{' '}
              AA, KK, QQ, and AK are standard value 3-bets from any position. Add bluff 3-bets
              with suited aces (A5s, A4s) to keep your range balanced, especially against late
              position opens.
            </p>

            {/* H2: Putting It Into Practice */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{
                color: 'var(--text)',
                borderLeft: '3px solid var(--green)',
              }}
            >
              Putting It Into Practice
            </h2>
            <p>
              The 3-bet turns you from a passive caller into an aggressor who takes control before
              the flop. You build bigger pots with your best hands, take down pots preflop with
              your bluffs, and make life harder for everyone who opens in front of you.
            </p>
            <p className="mt-4">
              Start with value 3-bets. Get comfortable re-raising with AA, KK, QQ, and AK. Once
              that feels natural, start adding bluff 3-bets against late position opens with hands
              like A5s and A4s. Pay attention to position, size correctly, and fold when you get
              4-bet with your weakest hands. The players who master this win more pots without
              ever seeing a flop, and that's one of the most efficient ways to grow a stack. If
              you want to understand why these ranges are structured the way they are, our{' '}
              <Link
                href="/blog/gto-poker-for-beginners"
                style={{ color: 'var(--green)' }}
                className="hover:opacity-80 transition-opacity underline underline-offset-2"
              >
                guide to GTO poker for beginners
              </Link>{' '}
              breaks down the theory behind it.
            </p>

            {/* CTA Box 2 */}
            <CTABox
              headline="Train Your Preflop Game Today"
              text="Drill 3-bet and 4-bet decisions across every position and stack depth. Build real reflexes in minutes a day."
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
