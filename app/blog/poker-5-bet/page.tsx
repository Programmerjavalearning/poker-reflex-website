import type { Metadata } from 'next'
import { type ReactNode } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import QRCodeBlock from '@/components/QRCodeBlock'
import { BRAND_ASSETS, SITE_URL, APP_STORE_URL, PLAY_STORE_URL } from '@/lib/brand'

export const metadata: Metadata = {
  title: 'What Is a 5-Bet in Poker? Sizing, Ranges & When to Jam',
  description:
    'A 5-bet is the reraise of a 4-bet, and at 100bb it is almost always all-in. Learn the betting ladder, 5-bet sizing, value and bluff ranges, and when to fold.',
  keywords:
    '5-bet poker, what is a 5-bet, 5-bet meaning, 5-bet range, 5-bet bluff, 5-bet all in, 5-bet sizing, 3-bet 4-bet 5-bet, preflop raising war',
  alternates: { canonical: `${SITE_URL}/blog/poker-5-bet` },
  openGraph: {
    title: 'What Is a 5-Bet in Poker? Sizing, Ranges & When to Jam',
    description:
      'The reraise of a 4-bet, decoded: the 1-bet to 5-bet ladder, 5-bet sizing, value and bluff ranges, and what to do when you face one.',
    url: `${SITE_URL}/blog/poker-5-bet`,
    type: 'article',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is a 5-Bet in Poker?',
    description: 'The reraise of a 4-bet, and at 100bb almost always all-in. Sizing, ranges, and when to jam.',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Is a 5-Bet in Poker? Sizing, Ranges and When to Jam',
  description:
    'A complete guide to the 5-bet: the preflop betting ladder, why a 100bb 5-bet is usually all-in, value and bluff ranges, sizing, and how to respond to one.',
  author: { '@type': 'Organization', name: 'Poker Reflex' },
  publisher: {
    '@type': 'Organization',
    name: 'Poker Reflex',
    logo: { '@type': 'ImageObject', url: BRAND_ASSETS.squareLogoUrl },
  },
  image: BRAND_ASSETS.squareLogoUrl,
  datePublished: '2026-07-18',
  dateModified: '2026-07-18',
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/poker-5-bet` },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a 5-bet in poker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It is the third reraise preflop: open, 3-bet, 4-bet, 5-bet. At 100bb it is almost always all-in because the pot is already big enough to commit your stack.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a 5-bet always all-in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At 100bb, effectively yes. With 150bb or deeper a non-all-in 5-bet becomes possible, but it is rare and mostly a high-stakes play.',
      },
    },
    {
      '@type': 'Question',
      name: 'What hands do you 5-bet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For value, mainly AA and KK (plus QQ or AKs against aggressive opponents). For bluffs, ace-blocker hands like A5s and A4s. At low stakes, keep it almost pure value.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should you 5-bet bluff at low stakes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Usually no. Low-stakes players rarely 4-bet bluff, so a 5-bet bluff folds out nothing and gets called only by better. Save it for tougher games.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should you do when facing a 5-bet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It is almost always a jam, so call off with the top of your range (AA, KK, sometimes AKs or QQ) and fold the rest. At low stakes, over-fold, because a 5-bet there is almost never a bluff.',
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

type Rung = { label: string; amount: string; note: string; top?: boolean }

const LADDER: Rung[] = [
  { label: '5-bet', amount: 'All-in, $200', note: 'The third reraise. At 100bb it commits your stack, so it is a jam.', top: true },
  { label: '4-bet', amount: 'to $42', note: 'Reraises the 3-bet. Reopens the war or takes it down.' },
  { label: '3-bet', amount: 'to $18', note: 'The first reraise, reraising the open.' },
  { label: 'Open (2-bet)', amount: 'to $6', note: 'The first voluntary raise of the hand.' },
  { label: 'Big blind (1-bet)', amount: '$2', note: 'The forced bet everyone counts from.' },
]

export default function Poker5BetArticle() {
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
            What Is a 5-Bet in Poker? Sizing, Ranges and When to Jam
          </h1>
          <div className="flex items-center gap-4 mb-10 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <span>By Poker Reflex</span>
            <span>·</span>
            <span>July 18, 2026</span>
            <span>·</span>
            <span>10 min read</span>
          </div>

          <div className="prose-article" style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>

            {/* Intro */}
            <p>
              Most preflop pots end after a raise or a 3-bet. Once in a while the betting keeps climbing: someone
              opens, someone 3-bets, the opener 4-bets, and then the 3-bettor fires one more shell. That last one
              is the <S>5-bet</S>, and by the time it lands the pot is usually all the chips. It is the top rung
              of the preflop raising war, and it is one of the few spots where you can put 100 big blinds in the
              middle before a single community card is dealt.
            </p>
            <p className="mt-4">
              It looks scary, but a 5-bet is simpler than it seems. At 100bb it's almost always all-in, which
              turns it into a clean call-or-fold problem. This guide covers the whole ladder, why the numbering
              works the way it does, how a 5-bet is sized, the tiny value-and-bluff range it uses, and what to do
              when one gets shoved in your face. If you have not read our{' '}
              <A href="/blog/poker-4-bet">4-bet guide</A> yet, the 5-bet is the answer to it, so the two go
              together.
            </p>

            {/* The ladder */}
            <H2>The Preflop Betting Ladder: How We Get to Five</H2>
            <p>
              The numbering confuses people because it does not match the number of raises. The trick is that
              the <S>big blind counts as the first bet</S>. Everything is numbered from there:
            </p>
            <figure className="mt-6 mb-6">
              <div
                className="rounded-2xl border p-4 md:p-6 space-y-2"
                style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
                role="img"
                aria-label="The preflop betting ladder at 100 big blinds in a 1 dollar 2 dollar game. Big blind is the 1-bet at 2 dollars, the open is the 2-bet to 6 dollars, the 3-bet is to 18 dollars, the 4-bet is to 42 dollars, and the 5-bet is all-in for 200 dollars."
              >
                {LADDER.map((r) => (
                  <div
                    key={r.label}
                    className="flex flex-col gap-1 sm:flex-row sm:items-start sm:gap-4 rounded-xl px-4 py-3"
                    style={{
                      backgroundColor: r.top ? 'rgba(74, 222, 128, 0.12)' : 'var(--background)',
                      border: r.top ? '1px solid rgba(74, 222, 128, 0.4)' : '1px solid var(--border)',
                    }}
                  >
                    <div className="shrink-0 w-32">
                      <span className="font-heading font-bold" style={{ color: r.top ? 'var(--green)' : 'var(--text)' }}>{r.label}</span>
                    </div>
                    <div className="shrink-0 w-24 font-mono text-sm" style={{ color: r.top ? 'var(--green)' : 'var(--text-secondary)' }}>{r.amount}</div>
                    <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{r.note}</div>
                  </div>
                ))}
              </div>
              <figcaption className="text-xs mt-3 text-center" style={{ color: 'var(--text-secondary)', opacity: 0.75 }}>
                A $1/$2 game, 100bb deep ($200 stacks). Read it bottom to top: each rung reraises the one below it.
              </figcaption>
            </figure>
            <p>
              So an open is technically a 2-bet (nobody calls it that, but that is why the next raise is a
              3-bet). A 3-bet is the first reraise, a 4-bet is the second, and a <S>5-bet is the third reraise</S>.
              Notice the sizes: a 3-bet is about 3 times the open, a 4-bet a bit over 2 times the 3-bet, and by
              the time you reach the 5-bet the numbers have blown past half your stack, which is exactly why it
              turns into a shove.
              For the general logic behind these jumps, see our{' '}
              <A href="/blog/poker-bet-sizing">bet sizing guide</A>.
            </p>

            {/* Why all-in */}
            <H2>Why a 5-Bet Is Almost Always All-In</H2>
            <p>
              Look at the ladder again. After the 4-bet to $42, there is already roughly $60 in the pot. You put
              in $18 with your 3-bet, so you have about $182 behind. If you make a &ldquo;small&rdquo; 5-bet to,
              say, $95, you have committed nearly half your stack and left yourself only about $105 behind into a
              pot that is now enormous.
              You can't fold to a shove at that point without lighting money on fire, so the small 5-bet gains
              you nothing over just jamming.
            </p>
            <p className="mt-4">
              That's the whole reason a 100bb 5-bet is a jam: the <S>stack-to-pot ratio has collapsed</S>. There
              is no room left to maneuver, so you either put it all in or you fold. Non-all-in 5-bets only start
              to make sense when stacks are much deeper (150bb or 200bb), and even then they are mostly a
              high-stakes tool. At the stakes almost everyone plays, treat a 5-bet as a shove and your life gets
              much simpler.
            </p>

            {/* CTA 1 */}
            <CTABox
              headline="Train the Whole Raising War"
              text="Poker Reflex drills open, 3-bet, 4-bet, and all-in decisions hand by hand, with instant GTO feedback. Learn where the 5-bet jam is correct and where it is a punt. Free to download."
            />

            {/* Ranges */}
            <H2>What Hands Do You 5-Bet?</H2>
            <p>
              Because a 5-bet is a shove, the range is tiny and <S>polarized</S>: your very best hands for value,
              and a few blocker hands as bluffs, with nothing in between. Middling strong hands do not jam,
              because they are too good to fold cheaply but crushed by the range that calls a shove. Here is the
              shape of it at 100bb:
            </p>
            <figure className="mt-6 mb-6 overflow-x-auto">
              <table
                aria-label="How different hand groups fit into a 100bb 5-bet decision: value jams, thin value, bluff jams, and hands that should not 5-bet"
                className="w-full text-sm"
                style={{
                  borderCollapse: 'separate',
                  borderSpacing: 0,
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  minWidth: '520px',
                }}
              >
                <thead>
                  <tr style={{ backgroundColor: 'rgba(74, 222, 128, 0.08)' }}>
                    <th scope="col" className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Role in a 5-bet</th>
                    <th scope="col" className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Example hands</th>
                    <th scope="col" className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Why</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ backgroundColor: 'var(--surface)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>Value jam</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>AA, KK</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>You beat almost every hand that calls a shove.</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--background)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>Thin value</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>QQ, AKs</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Only against opponents who 4-bet too wide.</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--surface)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>Bluff jam</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>A5s, A4s</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Ace blockers that cannot profitably call.</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--background)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)' }}>Not a 5-bet</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)' }}>JJ, AQs, AKo</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)' }}>Too strong to fold, too weak to jam. Call or fold.</td>
                  </tr>
                </tbody>
              </table>
              <figcaption className="text-xs mt-3 text-center" style={{ color: 'var(--text-secondary)', opacity: 0.75 }}>
                A typical 100bb 5-bet range. The exact hands shift with position and opponent, but the polarized shape holds.
              </figcaption>
            </figure>
            <p>
              The bluff hands are the interesting part. A5s and A4s are not random: they hold an <S>ace blocker</S>,
              which removes combinations of AA and AK from the hands your opponent can have, making it a little
              less likely they hold a monster. They also make the nut flush and the wheel straight on the rare
              times you get called and see a flop. These are the same blocker bluffs we cover in the{' '}
              <A href="/blog/poker-4-bet">4-bet guide</A>, and if the notation like A5s is new to you, our{' '}
              <A href="/blog/poker-hand-notation">hand notation guide</A> decodes it.
            </p>

            {/* Value vs bluff balance */}
            <H2>Value and Bluffs: The Balance (and Why Low Stakes Breaks It)</H2>
            <p>
              In theory you want both halves of that range, so a thinking opponent can never be sure whether your
              jam is AA or A5s. That balance is what makes the 5-bet unexploitable against strong players. It is
              also why a 5-bet is one of the sharpest tools in the game: the <S>3-bet</S> opened the door, the{' '}
              <A href="/blog/what-is-a-3-bet-in-poker">3-bet guide</A> covers that rung, and the 5-bet slams it.
            </p>
            <p className="mt-4">
              But here is the practical truth for most games. <S>At low stakes, drop the bluffs.</S> A 5-bet bluff
              only earns money when your opponent 4-bet with hands weak enough to fold to a shove. Low-stakes
              players almost never 4-bet bluff. When a $1/$2 regular 4-bets, they have QQ+ and AK, full stop. Jam
              A5s into that and you get called by a better hand every time, having folded out nothing. So keep
              your low-stakes 5-bets close to pure value: AA and KK, jammed, and go get paid.
            </p>

            {/* Facing a 5-bet */}
            <H2>What to Do When You Face a 5-Bet</H2>
            <p>
              Since a 5-bet is a jam, facing one is a clean call-or-fold decision. You already 4-bet, so your
              range is strong. Now you ask a single question: does my hand beat the range that just shoved on me?
            </p>
            <ul className="mt-4 space-y-2 pl-6 list-disc">
              <li><S>Call off</S> with the very top: AA and KK for sure, and AKs or QQ depending on how aggressive the player is.</li>
              <li><S>Fold</S> the rest of your 4-bet range, including your own 4-bet bluffs. They did their job by taking the pot uncontested most of the time; when they run into a 5-bet, let them go.</li>
            </ul>
            <p className="mt-4">
              And the low-stakes adjustment matters even more on this side: <S>over-fold to 5-bets</S>. Because
              almost nobody down there is 5-bet bluffing, a 5-bet is a near-certain AA or KK. If you are holding
              QQ or AK and a tight player jams over your 4-bet, folding is often the right, disciplined lay-down,
              as painful as it feels.
            </p>

            {/* Short stacks */}
            <H2>Short Stacks Change Everything</H2>
            <p>
              Everything above assumes 100bb. When stacks get short, the ladder collapses even faster. At 40bb a
              3-bet can already be most of your chips, and the 4-bet or 5-bet is just a formality on the way
              all-in. Under about 20bb, the whole raising war disappears into a single <S>push-or-fold</S>
              decision preflop, where you either shove or fold and the 3-bet/4-bet/5-bet layers stop existing.
            </p>
            <p className="mt-4">
              That short-stack world has its own math, and it is worth knowing cold for tournaments. Our{' '}
              <A href="/tools/push-fold-chart">push or fold chart</A> shows exactly which hands to jam by
              position and stack size once you are in shove territory.
            </p>

            {/* Mistakes */}
            <H2>Common 5-Bet Mistakes</H2>
            <ul className="mt-4 space-y-2 pl-6 list-disc">
              <li><S>Bluff 5-betting where nobody folds.</S> The number one leak. Against a player who only 4-bets QQ+ and AK, your A5s jam is lighting money on fire.</li>
              <li><S>5-betting QQ or AK for thin value into a nit.</S> If a tight player 4-bets and you jam AK, you are often flipping at best and dominated at worst. Against nits, these hands call or fold, they do not jam.</li>
              <li><S>Making a small, non-committing 5-bet at 100bb.</S> It commits you anyway, so it just gives a savvy opponent information and a cheaper price. Jam or do not 5-bet at all.</li>
              <li><S>Refusing to fold to a 5-bet.</S> Calling off QQ or AK against a tight player&apos;s shove because you &ldquo;already have so much in&rdquo; is the sunk-cost trap. The chips in the pot aren't yours anymore.</li>
            </ul>

            {/* FAQ */}
            <H2>Common Questions About 5-Bets</H2>
            <p>
              <S>What is a 5-bet in poker?</S>{' '}
              It is the third reraise preflop: open, 3-bet, 4-bet, 5-bet. At 100bb it is almost always all-in
              because the pot is already big enough to commit your stack.
            </p>
            <p className="mt-4">
              <S>Is a 5-bet always all-in?</S>{' '}
              At 100bb, effectively yes. With 150bb or deeper a non-all-in 5-bet becomes possible, but it is rare
              and mostly a high-stakes play.
            </p>
            <p className="mt-4">
              <S>What hands do you 5-bet?</S>{' '}
              For value, mainly AA and KK (plus QQ or AKs against aggressive opponents). For bluffs, ace-blocker
              hands like A5s and A4s. At low stakes, keep it almost pure value.
            </p>
            <p className="mt-4">
              <S>Should you 5-bet bluff at low stakes?</S>{' '}
              Usually no. Low-stakes players rarely 4-bet bluff, so a 5-bet bluff folds out nothing and gets
              called only by better. Save it for tougher games.
            </p>
            <p className="mt-4">
              <S>What should you do when facing a 5-bet?</S>{' '}
              It is almost always a jam, so call off with the top of your range (AA, KK, sometimes AKs or QQ) and
              fold the rest. At low stakes, over-fold, because a 5-bet there is almost never a bluff.
            </p>

            {/* Practice */}
            <H2>Putting It Into Practice</H2>
            <p>
              The 5-bet is the last rung of a ladder you now understand top to bottom: the open, the{' '}
              <A href="/blog/what-is-a-3-bet-in-poker">3-bet</A>, the{' '}
              <A href="/blog/poker-4-bet">4-bet</A>, and the jam that ends it. You don't need to use it often. You
              need to recognize the spot, know your two or three value hands, and have the discipline to fold when
              a tight player fires the final shell back at you.
            </p>
            <p className="mt-4">
              The fastest way to build that instinct is repetition. Drilling these preflop wars until the right
              answer is automatic beats memorizing a chart you will freeze on at the table, which is exactly what
              the trainer below is for.
            </p>

            {/* CTA 2 */}
            <CTABox
              headline="Make the Right Preflop Decision Automatic"
              text="Drill 3-bet, 4-bet, and all-in spots across every position and stack depth, with instant feedback and an ELO that tracks your progress. Free to download, no account needed."
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
