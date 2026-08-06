import type { Metadata } from 'next'
import { type ReactNode } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import QRCodeBlock from '@/components/QRCodeBlock'
import { BRAND_ASSETS, SITE_URL, APP_STORE_URL, PLAY_STORE_URL } from '@/lib/brand'

export const metadata: Metadata = {
  title: 'Is My Ace Dominated? The Real Odds by Kicker and Players',
  description:
    'How often someone holds a better ace than yours, computed for every kicker from A2 to AQ and every table size. Three questions most charts confuse into one.',
  keywords:
    'is my ace dominated, odds my ace is dominated, ace kicker probability by number of players, probability opponent has a better ace, weak ace poker odds, A9 dominated odds, dominated ace probability, should i play weak aces',
  alternates: { canonical: `${SITE_URL}/blog/is-my-ace-dominated` },
  openGraph: {
    title: 'Is My Ace Dominated? The Real Odds by Kicker and Players',
    description:
      'A full table of domination odds, from A2 to AQ, from heads-up to nine-handed, with the combinatorics behind every cell.',
    url: `${SITE_URL}/blog/is-my-ace-dominated`,
    type: 'article',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Is My Ace Dominated?',
    description:
      'A9 at a nine-handed table: someone holds an ace 69% of the time, but a better ace only 30% of the time. Those are different questions.',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Is My Ace Dominated? The Real Odds by Kicker and Table Size',
  description:
    'The probability that an opponent holds a better ace than yours, computed for every kicker and every table size, with the difference between someone holding an ace, someone holding a better ace, and someone actually being ahead of you.',
  author: { '@type': 'Organization', name: 'Poker Reflex' },
  publisher: {
    '@type': 'Organization',
    name: 'Poker Reflex',
    logo: { '@type': 'ImageObject', url: BRAND_ASSETS.squareLogoUrl },
  },
  image: BRAND_ASSETS.squareLogoUrl,
  datePublished: '2026-08-06',
  dateModified: '2026-08-06',
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/is-my-ace-dominated` },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the odds my ace is dominated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Against one opponent it depends almost entirely on your kicker: 11.0% with A2, 4.2% with A9, and 1.2% with AQ. At a nine-handed table, with eight opponents, those become 66.5%, 30.3% and 9.6%. Domination here means an opponent holds AA or an ace with a strictly better kicker. An identical kicker is a chop, not domination.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often does someone else have an ace at a full table?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'About 69.5% of the time when you hold one ace and eight opponents are dealt in. But that number says nothing about whether you are behind, because most of those aces have a worse kicker than yours. Holding A9 at that same table, the chance someone holds a better ace is only 30.3%.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why can you not just multiply the one-opponent odds by the number of players?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because the hands are dealt from one shared deck and only three aces remain, so the events are not independent. For A9 against eight opponents, the usual shortcut of one minus (one minus p) to the power of eight gives 28.8%, while the true figure is 30.3%. The shortcut understates it, because an opponent missing an ace makes the next opponent slightly more likely to hold one.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does each kicker rank actually change the odds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Against a single opponent, exactly 12 combinations out of the 1,225 possible hands, which is 0.98 percentage points per rank. AQ is dominated by 15 combinations, A9 by 51, and A2 by 135. The effect compounds with more opponents, but not evenly: at a nine-handed table the step from AQ to AJ costs about 7 points while the step from A3 to A2 costs about 4.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a full ring table twice as dangerous as six-max for weak aces?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, it is roughly half again as dangerous, not double. Going from five opponents to eight multiplies the domination chance by about 1.4 for A2, 1.5 for A9 and 1.6 for AQ. The jump is real but smaller than most players assume, and it matters more for strong kickers than for weak ones.',
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

const TABLE_STYLE = {
  borderCollapse: 'separate' as const,
  borderSpacing: 0,
  border: '1px solid var(--border)',
  borderRadius: '12px',
  overflow: 'hidden',
}

// One opponent is exact (closed form over C(50,2) = 1,225 hands).
// Multiway is simulated over 4 million deals per cell, because the hands come from
// one shared deck and the events are not independent.
const DOM_ROWS: Array<[string, string, string, string, string, string]> = [
  ['A2', '11.02%', '21.20%', '30.55%', '47.05%', '66.51%'],
  ['A3', '10.04%', '19.40%', '28.07%', '43.52%', '62.20%'],
  ['A4', '9.06%', '17.54%', '25.49%', '39.86%', '57.71%'],
  ['A5', '8.08%', '15.72%', '22.93%', '36.08%', '52.90%'],
  ['A6', '7.10%', '13.86%', '20.31%', '32.17%', '47.74%'],
  ['A7', '6.12%', '11.96%', '17.64%', '28.15%', '42.27%'],
  ['A8', '5.14%', '10.12%', '14.93%', '24.00%', '36.43%'],
  ['A9', '4.16%', '8.22%', '12.16%', '19.72%', '30.29%'],
  ['AT', '3.18%', '6.32%', '9.35%', '15.30%', '23.70%'],
  ['AJ', '2.20%', '4.39%', '6.52%', '10.75%', '16.87%'],
  ['AQ', '1.22%', '2.45%', '3.67%', '6.04%', '9.60%'],
]

const THREE_ROWS: Array<[string, string, string, string]> = [
  ['A2', '69.5%', '66.5%', '80.1%'],
  ['A6', '69.5%', '47.8%', '68.1%'],
  ['A9', '69.5%', '30.3%', '56.8%'],
  ['AQ', '69.5%', '9.6%', '43.3%'],
]

export default function IsMyAceDominatedArticle() {
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
            Is My Ace Dominated? The Real Odds by Kicker and Table Size
          </h1>
          <div className="flex items-center gap-4 mb-10 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <span>By Poker Reflex</span>
            <span>·</span>
            <span>August 6, 2026</span>
            <span>·</span>
            <span>10 min read</span>
          </div>

          <div className="prose-article" style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>

            {/* Intro */}
            <p>
              You look down at A9 offsuit under the gun at a nine-handed table. Somewhere in the back of
              your head is a number you half remember about how often someone else has a better ace. It
              is probably the wrong number, and it is probably answering a different question than the
              one you are actually asking.
            </p>
            <p className="mt-4">
              Here is the honest answer for that exact spot. Someone else holds an ace{' '}
              <S>69.5%</S> of the time. Someone holds a <S>better</S> ace only <S>30.3%</S> of the time.
              And someone holds a hand that is genuinely ahead of your A9, ace or not,{' '}
              <S>56.8%</S> of the time. Three numbers, three questions, and almost every chart online
              collapses them into one.
            </p>

            {/* H2 1 */}
            <H2>Three Questions That Keep Getting Confused</H2>
            <p>
              Search this topic and you will find tables answering &ldquo;how often does another player
              hold an ace.&rdquo; That is a real question with a clean answer, and it is almost useless
              at the table, because most of those aces have a worse kicker than yours and are the hands
              you want them to have.
            </p>
            <p className="mt-4">
              Separate them properly and the picture changes completely.
            </p>
            <figure className="mt-6 mb-6 overflow-x-auto">
              <table
                aria-label="Three different questions answered for four different aces at a nine-handed table with eight opponents. Someone holds an ace stays at 69.5 percent regardless of your kicker. Someone holds a better ace falls from 66.5 percent with A2 to 9.6 percent with AQ. Someone is ahead of you falls from 80.1 percent to 43.3 percent."
                className="w-full text-sm"
                style={{ ...TABLE_STYLE, minWidth: '560px' }}
              >
                <thead>
                  <tr style={{ backgroundColor: 'rgba(74, 222, 128, 0.08)' }}>
                    <th scope="col" className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Your hand</th>
                    <th scope="col" className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Someone has an ace</th>
                    <th scope="col" className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Someone has a better ace</th>
                    <th scope="col" className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Someone is ahead of you</th>
                  </tr>
                </thead>
                <tbody>
                  {THREE_ROWS.map((r, i) => (
                    <tr key={r[0]} style={{ backgroundColor: i % 2 === 0 ? 'var(--surface)' : 'var(--background)' }}>
                      <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: i === THREE_ROWS.length - 1 ? undefined : '1px solid var(--border)' }}>{r[0]}</td>
                      <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: i === THREE_ROWS.length - 1 ? undefined : '1px solid var(--border)' }}>{r[1]}</td>
                      <td className="px-4 py-3" style={{ color: 'var(--green)', fontWeight: 700, borderBottom: i === THREE_ROWS.length - 1 ? undefined : '1px solid var(--border)' }}>{r[2]}</td>
                      <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: i === THREE_ROWS.length - 1 ? undefined : '1px solid var(--border)' }}>{r[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <figcaption className="text-xs mt-3 text-center" style={{ color: 'var(--text-secondary)', opacity: 0.75 }}>
                Nine-handed, eight opponents dealt random hands. &ldquo;Ahead of you&rdquo; counts a better ace or any pocket pair, since even deuces are a small favourite over two overcards.
              </figcaption>
            </figure>
            <p>
              Look at the first column. It never moves. Whether you hold A2 or AQ, the chance that
              someone else was dealt an ace is the same <S>69.5%</S>, because it depends only on the
              three aces left in the deck and has nothing to do with your kicker. Quoting that number as
              though it tells you whether you are in trouble is the single most common mistake on this
              topic.
            </p>
            <p className="mt-4">
              The middle column is the one you actually want. And notice the third column is higher than
              the middle one for every hand, because plenty of hands beat your ace without containing an
              ace at all. Any pocket pair is already a small favourite, which is the same race we work
              through in our <A href="/blog/ak-vs-22-preflop-odds">AK versus pocket deuces breakdown</A>.
            </p>

            {/* H2 2, the asset */}
            <H2>The Full Table: Every Kicker, Every Table Size</H2>
            <p>
              This is the chart the question deserves. Read down for your kicker, across for how many
              players are still to be dealt in.
            </p>
            <figure className="mt-6 mb-6 overflow-x-auto">
              <table
                aria-label="Probability that at least one opponent holds a better ace, by your kicker from A2 down to AQ, and by number of opponents from one to eight. With A2 it runs from 11.02 percent heads up to 66.51 percent against eight opponents. With A9, from 4.16 percent to 30.29 percent. With AQ, from 1.22 percent to 9.60 percent."
                className="w-full text-sm"
                style={{ ...TABLE_STYLE, minWidth: '540px' }}
              >
                <thead>
                  <tr style={{ backgroundColor: 'rgba(74, 222, 128, 0.08)' }}>
                    <th scope="col" className="text-left px-3 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Hand</th>
                    <th scope="col" className="text-left px-3 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>1 opp</th>
                    <th scope="col" className="text-left px-3 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>2 opp</th>
                    <th scope="col" className="text-left px-3 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>3 opp</th>
                    <th scope="col" className="text-left px-3 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>5 opp</th>
                    <th scope="col" className="text-left px-3 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>8 opp</th>
                  </tr>
                </thead>
                <tbody>
                  {DOM_ROWS.map((r, i) => (
                    <tr key={r[0]} style={{ backgroundColor: i % 2 === 0 ? 'var(--surface)' : 'var(--background)' }}>
                      <td className="px-3 py-3" style={{ color: 'var(--text)', borderBottom: i === DOM_ROWS.length - 1 ? undefined : '1px solid var(--border)' }}>{r[0]}</td>
                      <td className="px-3 py-3" style={{ color: 'var(--text-secondary)', borderBottom: i === DOM_ROWS.length - 1 ? undefined : '1px solid var(--border)' }}>{r[1]}</td>
                      <td className="px-3 py-3" style={{ color: 'var(--text-secondary)', borderBottom: i === DOM_ROWS.length - 1 ? undefined : '1px solid var(--border)' }}>{r[2]}</td>
                      <td className="px-3 py-3" style={{ color: 'var(--text-secondary)', borderBottom: i === DOM_ROWS.length - 1 ? undefined : '1px solid var(--border)' }}>{r[3]}</td>
                      <td className="px-3 py-3" style={{ color: 'var(--text-secondary)', borderBottom: i === DOM_ROWS.length - 1 ? undefined : '1px solid var(--border)' }}>{r[4]}</td>
                      <td className="px-3 py-3" style={{ color: 'var(--green)', fontWeight: 700, borderBottom: i === DOM_ROWS.length - 1 ? undefined : '1px solid var(--border)' }}>{r[5]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <figcaption className="text-xs mt-3 text-center" style={{ color: 'var(--text-secondary)', opacity: 0.75 }}>
                Chance that at least one opponent holds AA or an ace with a better kicker. One opponent is exact. Multiway is simulated over four million deals per cell.
              </figcaption>
            </figure>
            <p>
              Two things jump out. Heads-up, even the worst ace is fine: A2 is dominated only{' '}
              <S>11%</S> of the time, which is why weak aces are perfectly playable short-handed. And at
              a full table the bottom of the chart falls apart: <S>A2 is behind a better ace two times
              in three</S>, while AQ is in trouble less than one time in ten.
            </p>
            <p className="mt-4">
              A note on what counts. Domination here means an opponent holds AA or an ace with a{' '}
              <S>strictly better</S> kicker. If they hold your exact kicker rank, that is a chop, not a
              disaster, so it is not counted.
            </p>

            {/* CTA 1 */}
            <CTABox
              headline="Know Before You Look It Up"
              text="Poker Reflex deals you real preflop spots and asks one question: open, fold, call or 3-bet. Instant GTO feedback hand after hand, until weak aces from early position stop feeling like a judgement call. Free to download."
            />

            {/* H2 3 */}
            <H2>Where These Numbers Come From</H2>
            <p>
              The heads-up column is simple enough to do by hand, and it is worth seeing once because it
              explains the whole shape of the table.
            </p>
            <p className="mt-4">
              You hold an ace and a kicker, so 50 cards remain and your opponent has{' '}
              <S>1,225</S> possible two-card hands. Of those, the ones that dominate you are:
            </p>
            <ul className="mt-4 space-y-2 pl-6 list-disc">
              <li><S>Pocket aces:</S> three aces are left, so there are 3 ways to pair them.</li>
              <li><S>An ace with a better kicker:</S> 3 aces multiplied by every card ranking above your kicker.</li>
            </ul>
            <p className="mt-4">
              Hold AQ and only kings beat your kicker, so that is 3 &times; 4 = 12 hands, plus the 3
              pocket aces, giving <S>15 out of 1,225, or 1.22%</S>. Hold A9 and four ranks beat you
              (ten through king), so 3 &times; 16 = 48, plus 3, giving <S>51 out of 1,225, or 4.16%</S>.
              Hold A2 and eleven ranks beat you, giving <S>135 out of 1,225, or 11.02%</S>.
            </p>
            <p className="mt-4">
              Which gives you a rule you can actually carry: <S>every rank you drop your kicker adds
              exactly 12 dominating hands</S>, worth almost exactly one percentage point against a
              single opponent. If notation like A9 or A2 is not yet automatic, our{' '}
              <A href="/blog/poker-hand-notation">hand notation guide</A> covers it.
            </p>

            {/* H2 4 */}
            <H2>Why You Cannot Just Multiply by the Number of Players</H2>
            <p>
              The obvious move for the multiway columns is to take the heads-up number and apply it
              independently to each opponent. It is wrong, and interestingly it is wrong in the
              direction almost nobody expects.
            </p>
            <p className="mt-4">
              For A9 against eight opponents, that shortcut gives <S>28.8%</S>. The true answer is{' '}
              <S>30.3%</S>. The shortcut <S>understates</S> the danger.
            </p>
            <p className="mt-4">
              The reason is that everyone is dealt from the same deck and only three aces are left. If
              the first opponent turns out not to have an ace, those three aces are still in there
              waiting, so the next opponent is slightly <S>more</S> likely to hold one. The events push
              against each other, and when events are related that way the chance that at least one of
              them happens goes up, not down. Small effect, but it is the difference between a number
              you can trust and one you cannot.
            </p>

            {/* H2 5 */}
            <H2>Six-Max Against Full Ring: Less Than You Think</H2>
            <p>
              Everybody knows weak aces are worse at a full table. The size of the difference is usually
              overstated.
            </p>
            <p className="mt-4">
              Going from five opponents to eight multiplies the domination chance by about{' '}
              <S>1.4 for A2, 1.5 for A9 and 1.6 for AQ</S>. So a full ring table is roughly{' '}
              <S>half again</S> as dangerous, not twice as dangerous. And the multiplier is largest for
              the strong kickers, which is counterintuitive until you realise those numbers start from
              almost nothing, so there is more room to grow proportionally.
            </p>
            <p className="mt-4">
              In practice this means the six-max player who moves to a nine-handed game should tighten
              the bottom of their ace range, but not panic about it. A9 goes from being dominated one
              time in five to a bit under one in three.
            </p>

            {/* H2 6 */}
            <H2>What It Actually Changes at the Table</H2>
            <p>
              Numbers are only useful if they move a decision, so here is where they do.
            </p>
            <ul className="mt-4 space-y-2 pl-6 list-disc">
              <li><S>Weak aces from early position are a fold, and the table says why.</S> Opening A5 under the gun at a full table means eight players behind you and a 52.9% chance one of them holds a better ace before anyone has acted. That is not a marginal spot.</li>
              <li><S>The same hand is fine on the button.</S> With two players left, A5 is dominated 15.7% of the time. Position does not change your cards, it changes how many chances there are to be beaten. Our <A href="/blog/poker-positions">positions guide</A> covers why that shapes everything.</li>
              <li><S>Kicker quality matters more than the ace.</S> AQ against eight opponents is safer than A5 against two. If you take one thing from the chart, take that.</li>
              <li><S>Do not read the folds as good news.</S> When six players fold to you on the button, it is tempting to jump to the two-opponent column. But players fold ace-poor hands, so the aces that are left concentrate among the players still to act. The true figure sits a little above the raw column, not below it.</li>
            </ul>
            <p className="mt-4">
              And once you are dominated, the news is bad in a specific way: a dominated ace has roughly
              a quarter of the equity, not a third or a half. Our{' '}
              <A href="/blog/poker-equity-explained">equity guide</A> has the matchup numbers, and you
              can check any pairing yourself in the{' '}
              <A href="/tools/equity-calculator">equity calculator</A>.
            </p>

            {/* FAQ */}
            <H2>Common Questions About Dominated Aces</H2>
            <p>
              <S>What are the odds my ace is dominated?</S>{' '}
              Against one opponent it depends almost entirely on your kicker: 11.0% with A2, 4.2% with
              A9, and 1.2% with AQ. At a nine-handed table, with eight opponents, those become 66.5%,
              30.3% and 9.6%. Domination here means an opponent holds AA or an ace with a strictly
              better kicker. An identical kicker is a chop, not domination.
            </p>
            <p className="mt-4">
              <S>How often does someone else have an ace at a full table?</S>{' '}
              About 69.5% of the time when you hold one ace and eight opponents are dealt in. But that
              number says nothing about whether you are behind, because most of those aces have a worse
              kicker than yours. Holding A9 at that same table, the chance someone holds a better ace is
              only 30.3%.
            </p>
            <p className="mt-4">
              <S>Why can you not just multiply the one-opponent odds by the number of players?</S>{' '}
              Because the hands are dealt from one shared deck and only three aces remain, so the events
              are not independent. For A9 against eight opponents, the usual shortcut of one minus (one
              minus p) to the power of eight gives 28.8%, while the true figure is 30.3%. The shortcut
              understates it, because an opponent missing an ace makes the next opponent slightly more
              likely to hold one.
            </p>
            <p className="mt-4">
              <S>How much does each kicker rank actually change the odds?</S>{' '}
              Against a single opponent, exactly 12 combinations out of the 1,225 possible hands, which
              is 0.98 percentage points per rank. AQ is dominated by 15 combinations, A9 by 51, and A2
              by 135. The effect compounds with more opponents, but not evenly: at a nine-handed table
              the step from AQ to AJ costs about 7 points while the step from A3 to A2 costs about 4.
            </p>
            <p className="mt-4">
              <S>Is a full ring table twice as dangerous as six-max for weak aces?</S>{' '}
              No, it is roughly half again as dangerous, not double. Going from five opponents to eight
              multiplies the domination chance by about 1.4 for A2, 1.5 for A9 and 1.6 for AQ. The jump
              is real but smaller than most players assume, and it matters more for strong kickers than
              for weak ones.
            </p>

            {/* Practice */}
            <H2>Putting It Into Practice</H2>
            <p>
              The table above is worth one honest caveat. It assumes opponents hold random cards, and
              real opponents do not. A player who already raised has an ace far more often than the
              chart says, and a player who folded has one far less often. Treat these numbers as the
              baseline you adjust from, not as a read.
            </p>
            <p className="mt-4">
              But the baseline is the part almost nobody has right, and getting it right kills a whole
              category of mistake. Weak aces are not the problem. Weak aces{' '}
              <S>with a lot of players behind you</S> are the problem, and now you know roughly what the
              price is. What remains is recognising the spot fast enough to act on it, which comes from
              seeing it a few hundred times, not from remembering a chart. Our{' '}
              <A href="/blog/poker-starting-hands">starting hands guide</A> covers where the ace range
              should start from each seat.
            </p>

            {/* CTA 2 */}
            <CTABox
              headline="Turn the Chart Into a Reflex"
              text="Poker Reflex drills open, fold, call, 3-bet, 4-bet and all-in decisions across every position and stack depth, with instant feedback and an ELO that tracks your progress. Free to download."
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
