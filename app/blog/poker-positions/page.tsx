import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BRAND_ASSETS, SITE_URL } from '@/lib/brand'

export const metadata: Metadata = {
  title: 'Poker Positions Explained: UTG to Button (2026 Guide)',
  description:
    'Learn all poker table positions, from UTG to the button and blinds. Understand why position is so powerful and how to use each seat to win more pots.',
  keywords:
    'poker positions, poker position explained, UTG poker, button poker, hijack cutoff poker, poker table positions, early middle late position poker',
  alternates: {
    canonical: `${SITE_URL}/blog/poker-positions`,
  },
  openGraph: {
    title: 'Poker Positions Explained: UTG to Button',
    description:
      'Every seat at the table explained, why position wins, and how to use it.',
    url: `${SITE_URL}/blog/poker-positions`,
    type: 'article',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poker Positions Explained: UTG to Button',
    description:
      'Every seat at the table explained, and how to use position to win.',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Poker Positions Explained: From UTG to the Button',
  description:
    'A complete guide to poker table positions, why position matters, and how to play each seat.',
  author: { '@type': 'Organization', name: 'Poker Reflex' },
  publisher: {
    '@type': 'Organization',
    name: 'Poker Reflex',
    logo: { '@type': 'ImageObject', url: BRAND_ASSETS.squareLogoUrl },
  },
  image: BRAND_ASSETS.squareLogoUrl,
  datePublished: '2026-05-28',
  dateModified: '2026-05-28',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/blog/poker-positions`,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best position in poker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The button is the best position in poker. You act last on every postflop street, which gives you maximum information before every decision and lets you play the widest range of hands.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the worst position in poker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Under the gun (UTG) is the worst preflop position because you act first with no information. The big blind and small blind are also difficult because you act first on every street after the flop.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does UTG mean in poker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'UTG stands for under the gun. It is the seat directly to the left of the big blind and the first player to act before the flop.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between the hijack and the cutoff?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The hijack is two seats to the right of the button. The cutoff is one seat to the right of the button. Both are strong positions, but the cutoff is better because only the button acts after you.',
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

export default function PokerPositionsArticle() {
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
            Poker Positions Explained: From UTG to the Button
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
              Position might be the most underrated concept in poker. New players obsess over their
              cards, but experienced players know the truth: <strong style={{ color: 'var(--text)' }}>where you sit at the table matters
              just as much as what you're holding</strong>. The same hand can be a clear raise in one seat
              and an easy fold in another. Money in poker flows toward the players who act last.
              This guide breaks down every position at the table, why some seats print money while
              others bleed it, and how to adjust your game depending on where you're sitting.
            </p>

            {/* H2: What Does Position Mean in Poker? */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{
                color: 'var(--text)',
                borderLeft: '3px solid var(--green)',
              }}
            >
              What Does Position Mean in Poker?
            </h2>
            <p>
              Position is your seat relative to the dealer button. It decides the order you act in,
              both before and after the flop. The player on the button acts last on every postflop
              street. The player under the gun acts first preflop. Everyone else falls somewhere
              in between.
            </p>
            <p className="mt-4">
              The button moves one seat clockwise every hand, so everyone rotates through every
              position over time. Nobody is stuck in a bad seat forever. But over the course of a
              session, <strong style={{ color: 'var(--text)' }}>the hands you play from each seat</strong> and how you play them determines
              whether you're winning or losing money from that position. And the key idea behind
              all of it is simple: acting later means you have more information, and information
              is power in poker.
            </p>

            {/* H2: Why Position Is So Powerful */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{
                color: 'var(--text)',
                borderLeft: '3px solid var(--green)',
              }}
            >
              Why Position Is So Powerful
            </h2>
            <p>
              Acting last lets you see what everyone else does before you decide. If the action
              checks to you, you can bet and often take the pot right there. If someone fires a
              big bet, you can fold without having committed any chips. If they bet small, you can
              raise and put pressure on them. Every street gives you another round of free
              information that players acting before you simply don't get.
            </p>
            <p className="mt-4">
              Players in late position can play more hands profitably because they get to make
              decisions with the most context. They can control the size of the pot, decide when
              to bluff, and read the table before putting chips at risk.
            </p>
            <p className="mt-4">
              Here's the part that surprises newer players: <strong style={{ color: 'var(--text)' }}>winning players make most of their
              money from late position</strong>. They often lose money from early position and the blinds,
              and that's completely normal. The profit from the button and cutoff more than covers
              the cost of playing the earlier seats. If your tracker shows you losing from UTG and
              the blinds but crushing it on the button, you're probably doing it right.
            </p>

            {/* H2: All the Poker Positions */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{
                color: 'var(--text)',
                borderLeft: '3px solid var(--green)',
              }}
            >
              All the Poker Positions (Seat by Seat)
            </h2>
            <p>
              A standard full ring table has 9 seats. Six-max tables, which are the most popular
              format online, use 6. The positions are the same in both formats, just with fewer
              early and middle seats in 6-max. Here's every seat, starting from the blinds and
              working around the table.
            </p>

            {/* H3: The Blinds */}
            <h3
              className="font-heading font-bold text-xl md:text-2xl mt-8 mb-4"
              style={{ color: 'var(--text)' }}
            >
              The Blinds (Small Blind and Big Blind)
            </h3>
            <p>
              The <strong style={{ color: 'var(--text)' }}>small blind</strong> sits immediately to the left of the button. The <strong style={{ color: 'var(--text)' }}>big blind</strong> is
              one seat further left. These are the two players forced to post bets before any cards
              are dealt. That forced money creates the pot everyone else is fighting over.
            </p>
            <p className="mt-4">
              The blinds are tough seats for a reason. You put money in before seeing your cards,
              and after the flop you act first on every street. The big blind at least has money
              already invested, which means you're getting a discount to see flops and should
              defend a wider range. But being out of position for the entire hand makes even
              strong holdings harder to play. The small blind is worse because you still act first
              postflop and your forced bet is smaller, so you don't get the same defensive discount.
            </p>

            {/* H3: Under the Gun */}
            <h3
              className="font-heading font-bold text-xl md:text-2xl mt-8 mb-4"
              style={{ color: 'var(--text)' }}
            >
              Under the Gun (UTG)
            </h3>
            <p>
              <strong style={{ color: 'var(--text)' }}>UTG</strong> is directly to the left of the big blind and the first player to act before
              the flop. This is the toughest preflop seat because everyone at the table still has
              a chance to act after you. If you open a hand from UTG, you need it to be strong
              enough to hold up against the entire table's possible responses. That means premium
              hands only: big pairs, strong aces, and not much else.
            </p>

            {/* H3: Early and Middle Positions */}
            <h3
              className="font-heading font-bold text-xl md:text-2xl mt-8 mb-4"
              style={{ color: 'var(--text)' }}
            >
              Early and Middle Positions (UTG+1, Lojack, Hijack)
            </h3>
            <p>
              On a full ring table, you have a couple of early seats (UTG and UTG+1) before you
              get to the middle positions. The <strong style={{ color: 'var(--text)' }}>lojack</strong> is where middle position starts, and the{' '}
              <strong style={{ color: 'var(--text)' }}>hijack</strong> comes next. As players fold in front of you, the number of opponents left
              to act shrinks, and you can start opening a few more hands.
            </p>
            <p className="mt-4">
              The hijack gets its name from "hijacking" the steal opportunity from the cutoff and
              button. It's the first position where you can realistically start widening your range
              with the goal of picking up the blinds. You're still not in a great spot postflop
              (several players act after you), but preflop the math starts working in your favor.
            </p>

            {/* H3: The Cutoff */}
            <h3
              className="font-heading font-bold text-xl md:text-2xl mt-8 mb-4"
              style={{ color: 'var(--text)' }}
            >
              The Cutoff (CO)
            </h3>
            <p>
              The <strong style={{ color: 'var(--text)' }}>cutoff</strong> sits one seat to the right of the button. It's the second-best seat
              at the table. Only the button acts after you, so if the button folds, you get to
              play in position for the rest of the hand. This is a great spot to open wide, steal
              the blinds, and apply pressure. Many regulars treat the cutoff almost like a second
              button.
            </p>

            {/* H3: The Button */}
            <h3
              className="font-heading font-bold text-xl md:text-2xl mt-8 mb-4"
              style={{ color: 'var(--text)' }}
            >
              The Button (BTN)
            </h3>
            <p>
              The best seat in poker. Period. You act last on the flop, turn, and river. Every
              single postflop street, you get to see what every other player does before you make
              your decision. That's <strong style={{ color: 'var(--text)' }}>maximum information, maximum control</strong>.
            </p>
            <p className="mt-4">
              Good players open 40 percent or more of their hands from the button. Suited
              connectors, weak aces, random broadways, small pairs: hands you'd never touch from
              UTG become profitable opens from the button because position carries them after the
              flop. This is where you make the most money over your poker career. If you're only
              going to focus on one position, focus here.
            </p>

            {/* H2: Early, Middle, and Late: The Three Groups */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{
                color: 'var(--text)',
                borderLeft: '3px solid var(--green)',
              }}
            >
              Early, Middle, and Late: The Three Groups
            </h2>
            <p>
              If remembering every seat individually feels like a lot, think in three buckets
              instead. This mental model covers 90 percent of the decisions you'll face.
            </p>
            <ul className="mt-4 space-y-2 pl-6 list-disc">
              <li>
                <strong style={{ color: 'var(--text)' }}>Early position</strong> (UTG, UTG+1): play tight. Premium hands only. You're
                out of position postflop against most of the table.
              </li>
              <li>
                <strong style={{ color: 'var(--text)' }}>Middle position</strong> (lojack, hijack): open up a little. More broadway hands,
                mid-pairs, some suited connectors in the hijack.
              </li>
              <li>
                <strong style={{ color: 'var(--text)' }}>Late position</strong> (cutoff, button): play wide. Steal, apply pressure, and use
                your informational advantage to control pots.
              </li>
            </ul>

            {/* Positions Table */}
            <figure className="mt-8 mb-6 overflow-x-auto">
              <table
                aria-label="Poker table positions and recommended strategy for each seat"
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
                    <th className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Position</th>
                    <th className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Group</th>
                    <th className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Acts</th>
                    <th className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Strategy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ backgroundColor: 'var(--surface)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>UTG</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Early</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>First preflop</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Very tight, premium hands</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--background)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>UTG+1 / Lojack</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Early / Middle</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Early</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Tight, strong hands</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--surface)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>Hijack</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Middle</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Middle</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Open up, more hands</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--background)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>Cutoff</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Late</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Late</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Wide, steal blinds</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--surface)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>Button</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Late</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Last postflop</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Widest range, max control</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--background)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>Small Blind</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Blinds</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>First postflop</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Selective, out of position</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--surface)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)' }}>Big Blind</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)' }}>Blinds</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)' }}>First postflop</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)' }}>Defend wide but careful</td>
                  </tr>
                </tbody>
              </table>
              <figcaption className="text-xs mt-3 text-center" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>
                Poker table positions and recommended strategy for each seat.
              </figcaption>
            </figure>

            {/* H2: How Position Changes Which Hands You Play */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{
                color: 'var(--text)',
                borderLeft: '3px solid var(--green)',
              }}
            >
              How Position Changes Which Hands You Play
            </h2>
            <p>
              The same hand changes value dramatically depending on which seat you're in. AJ
              offsuit is a fold from UTG at a tough table, but it's a clear raise from the cutoff
              or button. A hand like 87 suited is unplayable from early position, yet it's a
              perfectly fine open on the button because you'll have position for the rest of the
              hand if someone calls.
            </p>
            <p className="mt-4">
              This is why generic "play these hands" advice falls short. The real question is
              always{' '}
              <Link
                href="/blog/poker-starting-hands"
                style={{ color: 'var(--green)' }}
                className="hover:opacity-80 transition-opacity underline underline-offset-2"
              >
                which hands to play from which position
              </Link>
              , and the answer shifts with every seat. Early position ranges might be 12 to 15
              percent of hands. Button ranges go up to 40 percent or more. That gap is entirely
              because of position.
            </p>
            <p className="mt-4">
              Knowing all of this conceptually is one thing. Actually doing it at the table, hand
              after hand, without slipping into autopilot? That's the hard part. And that's where
              repetition comes in.
            </p>

            {/* CTA Box 1 */}
            <CTABox
              headline="Train Every Position the Right Way"
              text="Poker Reflex drills opening decisions from UTG to the button, so you instantly know the right play for every seat. Free to download."
            />

            {/* H2: Common Mistakes With Position */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{
                color: 'var(--text)',
                borderLeft: '3px solid var(--green)',
              }}
            >
              Common Mistakes With Position
            </h2>
            <p>
              <strong style={{ color: 'var(--text)' }}>Playing too many hands from early position</strong> is the most common one. It feels
              boring to fold eight hands in a row, so you convince yourself that KTo from UTG is
              "good enough." It's not. That hand is a long-term money loser from early seats, and
              the occasional time it works out doesn't make up for the times it costs you.
            </p>
            <p className="mt-4">
              On the flip side, <strong style={{ color: 'var(--text)' }}>not stealing enough from late position</strong> is just as costly. Players
              who only open premium hands from the button are leaving money on the table every
              orbit. The blinds are right there, often occupied by players who fold too much. Take
              their money.
            </p>
            <p className="mt-4">
              Defending the blinds is another area where players go wrong in both directions. Some
              defend way too wide because they already have money in the pot and hate giving it up.
              Others fold so tight that the entire table steals from them relentlessly. The right
              approach is somewhere in the middle: defend hands that play reasonably well postflop
              and let go of the ones that don't.
            </p>
            <p className="mt-4">
              A subtler mistake is forgetting that <strong style={{ color: 'var(--text)' }}>position carries through every street</strong>. Being
              in position isn't just a preflop advantage. It helps you on the flop, turn, and
              river too. Players who understand this think about position as a multi-street edge,
              not just a preflop concept. And playing the same range from every seat, as if
              position doesn't exist, is the hallmark of a player who hasn't spent enough time
              studying the game.
            </p>

            {/* H2: Common Questions About Poker Positions */}
            <h2
              className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
              style={{
                color: 'var(--text)',
                borderLeft: '3px solid var(--green)',
              }}
            >
              Common Questions About Poker Positions
            </h2>
            <p>
              <strong style={{ color: 'var(--text)' }}>What is the best position in poker?</strong>{' '}
              The button. You act last on every postflop street, which gives you maximum
              information before every decision. It's the seat where you can play the widest
              range and win the most money.
            </p>
            <p className="mt-4">
              <strong style={{ color: 'var(--text)' }}>What is the worst position?</strong>{' '}
              Under the gun is the toughest preflop position because you act first with zero
              information. The blinds are also rough because you're first to act on every street
              after the flop.
            </p>
            <p className="mt-4">
              <strong style={{ color: 'var(--text)' }}>What does UTG mean?</strong>{' '}
              It stands for "under the gun." It's the seat directly to the left of the big blind
              and the first player to act before the flop.
            </p>
            <p className="mt-4">
              <strong style={{ color: 'var(--text)' }}>What's the difference between the hijack and the cutoff?</strong>{' '}
              The hijack is two seats to the right of the button. The cutoff is one seat to the
              right. Both are strong positions, but the cutoff is better because only the button
              acts after you.
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
              Position is a free edge that costs you nothing to use. You don't need to buy software,
              hire a coach, or study solver outputs. You just need to pay attention to where you're
              sitting and adjust accordingly. Play tighter from early seats, open up from late
              seats, and always be aware of who acts after you.
            </p>
            <p className="mt-4">
              Most players at low stakes ignore position almost entirely. They play the same range
              from every seat, call the same bets regardless of whether they're in or out of
              position, and wonder why their results are flat. Mastering position won't turn you
              into a world-class player overnight. But it will put you solidly ahead of most of
              the competition, and that's where the profit lives. To see how position ties into
              a complete preflop strategy, take a look at our{' '}
              <Link
                href="/blog/gto-poker-for-beginners"
                style={{ color: 'var(--green)' }}
                className="hover:opacity-80 transition-opacity underline underline-offset-2"
              >
                introduction to GTO poker
              </Link>.
            </p>

            {/* CTA Box 2 */}
            <CTABox
              headline="Build Position-Perfect Instincts"
              text="Practice open, 3-bet, 4-bet, and all-in decisions across every position with a fast swipe trainer."
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
