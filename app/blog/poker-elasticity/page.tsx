import type { Metadata } from 'next'
import { type ReactNode } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import QRCodeBlock from '@/components/QRCodeBlock'
import { BRAND_ASSETS, SITE_URL, APP_STORE_URL, PLAY_STORE_URL } from '@/lib/brand'

export const metadata: Metadata = {
  title: "Poker Elasticity: Why One Bet Size Doesn't Fit Both",
  description:
    'Elastic or inelastic? How much an opponent calling range moves when you size up, why "bet bigger against stations" loses money, and what to do instead.',
  keywords:
    'poker elasticity, inelastic poker, elastic vs inelastic poker, bet sizing against calling station, how much to bet against a fish, exploitative bet sizing, value bet sizing poker, calling range bet size',
  alternates: { canonical: `${SITE_URL}/blog/poker-elasticity` },
  openGraph: {
    title: "Poker Elasticity: Why One Bet Size Doesn't Fit Both",
    description:
      'How much an opponent calling range moves when you size up, the arithmetic that picks the right size, and why the popular advice about calling stations is wrong.',
    url: `${SITE_URL}/blog/poker-elasticity`,
    type: 'article',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poker Elasticity, Decoded',
    description:
      'Your bet is worth call frequency times size. Maximise the product, not the size. Here is why that changes everything.',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Poker Elasticity: Why One Bet Size Doesn't Fit Both Opponents",
  description:
    'What elastic and inelastic calling ranges mean, the call-frequency-times-size arithmetic that picks your bet size, why sizing up against calling stations often loses money, and how bluffing changes.',
  author: { '@type': 'Organization', name: 'Poker Reflex' },
  publisher: {
    '@type': 'Organization',
    name: 'Poker Reflex',
    logo: { '@type': 'ImageObject', url: BRAND_ASSETS.squareLogoUrl },
  },
  image: BRAND_ASSETS.squareLogoUrl,
  datePublished: '2026-07-26',
  dateModified: '2026-07-26',
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/poker-elasticity` },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is elasticity in poker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Elasticity describes how much an opponent calling range changes when your bet size changes. Against an elastic range, sizing up makes them fold a lot more, so their calling frequency drops sharply. Against an inelastic range, the calling frequency barely moves whether you bet a third of the pot or the whole thing. The term is borrowed from economics, where it measures how demand responds to price.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is an inelastic calling range?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An inelastic calling range is one that barely shrinks as the price goes up. A recreational player who has decided to see the showdown calls a third-pot bet and a pot-sized bet with almost the same hands. Because the calling frequency stays high, a bigger bet collects more money from the same range, which is why your strongest hands want a larger size against these players.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much should you bet against a calling station?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your hand, not just on the player. With a hand that beats the top of their calling range, size up, because their calling frequency barely drops. With a thin value hand, size down: a big bet folds out exactly the weak hands you were targeting and leaves you called mainly by better. The popular advice to always bet bigger against stations is only correct for the strong half of your range.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should you bluff against an inelastic opponent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rarely, and only very small. A bluff of size B into a pot of P needs them to fold more than B divided by (P plus B). If someone folds a flat 20% at any size, bluffs work only below 25 dollars into a 100 dollar pot: a 20 dollar bluff makes 4 dollars, a 30 dollar bluff loses 4. There is a profitable size, it is just so small that in most spots the bluff is not worth making.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is elasticity a player type or a situation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A situation. Elasticity describes a range in a specific spot, not a permanent label on a person. The same solid regular is completely inelastic holding a flopped set and extremely elastic holding a bluff-catcher on a scary river. Labelling someone inelastic and applying it to every hand they play is the most expensive mistake in this whole topic.',
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

// Verified arithmetic: EV of a value bet you always win = call frequency x bet size.
// Pot is $100 on the river in every row.
type Row = { size: string; stickyCall: string; stickyEv: string; regCall: string; regEv: string; best?: 'sticky' | 'reg' }

const EV_ROWS: Row[] = [
  { size: '$33 (a third)', stickyCall: '60%', stickyEv: '$19.80', regCall: '65%', regEv: '$21.45' },
  { size: '$66 (two thirds)', stickyCall: '58%', stickyEv: '$38.28', regCall: '50%', regEv: '$33.00' },
  { size: '$100 (pot)', stickyCall: '55%', stickyEv: '$55.00', regCall: '35%', regEv: '$35.00', best: 'reg' },
  { size: '$200 (overbet)', stickyCall: '45%', stickyEv: '$90.00', regCall: '15%', regEv: '$30.00', best: 'sticky' },
]

export default function PokerElasticityArticle() {
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
            Poker Elasticity: Why One Bet Size Doesn&apos;t Fit Both Opponents
          </h1>
          <div className="flex items-center gap-4 mb-10 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <span>By Poker Reflex</span>
            <span>·</span>
            <span>July 26, 2026</span>
            <span>·</span>
            <span>11 min read</span>
          </div>

          <div className="prose-article" style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>

            {/* Intro */}
            <p>
              Same board, same hand, same pot. On your left, a recreational player who has called every
              street since the flop. On your right, a solid regular who folds when the price gets
              serious. You&apos;re value betting the river against one of them. Should the bet be the
              same size?
            </p>
            <p className="mt-4">
              Obviously not. Every player knows that much. What almost nobody can do is say{' '}
              <S>how much different, and why</S>, without hand-waving at &ldquo;read your opponent.&rdquo;
              That&apos;s what elasticity is for. It&apos;s a borrowed piece of economics that turns a
              vague read into a number you can actually compare. This guide covers what it means, the
              one calculation that picks your size, why the popular advice about calling stations is
              wrong for half your range, and what changes when you&apos;re bluffing instead of value
              betting. If you want the baseline sizes to start from, our{' '}
              <A href="/blog/poker-bet-sizing">bet sizing guide</A> covers those, and this article is
              the layer on top: who you&apos;re betting against.
            </p>

            {/* H2 1 */}
            <H2>What Elasticity Actually Means</H2>
            <p>
              In economics, elasticity measures how much demand moves when the price moves. Raise the
              price of petrol and people buy roughly the same amount, because they still have to get to
              work. That&apos;s inelastic demand. Raise the price of one brand of chocolate and buyers
              switch to the one next to it. That&apos;s elastic.
            </p>
            <p className="mt-4">
              Poker imported the idea, and the price is your bet size. So:
            </p>
            <ul className="mt-4 space-y-2 pl-6 list-disc">
              <li><S>An elastic calling range</S> shrinks a lot as your bet grows. Bet small and they continue with plenty of hands. Bet big and most of those hands disappear.</li>
              <li><S>An inelastic calling range</S> barely moves. They call a third of the pot with roughly the same hands they call a pot-sized bet with, because whatever made them want to see the showdown had nothing to do with the price.</li>
            </ul>
            <p className="mt-4">
              One warning before anything else, because it&apos;s the mistake that costs the most money.{' '}
              <S>Elasticity describes a range in a spot, not a person.</S> The same solid regular is
              completely inelastic when he flopped a set, and wildly elastic when he holds a
              bluff-catcher on a river that completed every draw. &ldquo;He&apos;s a station&rdquo; is a
              starting point, never a conclusion. To see which slice of a range is which, our{' '}
              <A href="/tools/range-visualizer">range visualizer</A> lets you shade one in and look at
              it.
            </p>

            {/* H2 2 */}
            <H2>The Only Calculation You Need</H2>
            <p>
              Here&apos;s the part that makes elasticity useful rather than academic. Suppose you hold a
              hand that beats every hand your opponent could call with. Then the bet either gets called
              or it doesn&apos;t, and you win the pot either way. So the money the bet itself earns is
              simply:
            </p>
            <p className="mt-4" style={{ textAlign: 'center', fontSize: '20px', color: 'var(--text)' }}>
              <S>value of the bet = how often they call × how much you bet</S>
            </p>
            <p className="mt-4">
              Read that again, because the whole topic collapses into it. You are not trying to bet as
              big as possible. You are trying to <S>maximise the product</S> of two numbers that pull
              against each other. Betting more increases one and decreases the other. Elasticity is just
              the name for how fast the second one falls.
            </p>
            <p className="mt-4">
              So let&apos;s put real numbers on it. River, heads up, $100 in the pot, and you hold a
              hand that beats their entire calling range. Two opponents: a sticky recreational player
              and a thinking regular.
            </p>
            <figure className="mt-6 mb-6 overflow-x-auto">
              <table
                aria-label="Value of a river bet into a 100 dollar pot at four sizes against two opponents. Against the sticky caller the value climbs with every size, peaking at 90 dollars for a 200 dollar overbet. Against the thinking regular it peaks at 35 dollars for a pot-sized bet and then falls to 30 dollars for the overbet."
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
                    <th scope="col" className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Your bet</th>
                    <th scope="col" className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Sticky caller</th>
                    <th scope="col" className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Worth</th>
                    <th scope="col" className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Thinking reg</th>
                    <th scope="col" className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Worth</th>
                  </tr>
                </thead>
                <tbody>
                  {EV_ROWS.map((r, i) => (
                    <tr key={r.size} style={{ backgroundColor: i % 2 === 0 ? 'var(--surface)' : 'var(--background)' }}>
                      <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: i === EV_ROWS.length - 1 ? undefined : '1px solid var(--border)' }}>{r.size}</td>
                      <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: i === EV_ROWS.length - 1 ? undefined : '1px solid var(--border)' }}>{r.stickyCall}</td>
                      <td className="px-4 py-3" style={{ color: r.best === 'sticky' ? 'var(--green)' : 'var(--text-secondary)', fontWeight: r.best === 'sticky' ? 700 : 400, borderBottom: i === EV_ROWS.length - 1 ? undefined : '1px solid var(--border)' }}>{r.stickyEv}</td>
                      <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: i === EV_ROWS.length - 1 ? undefined : '1px solid var(--border)' }}>{r.regCall}</td>
                      <td className="px-4 py-3" style={{ color: r.best === 'reg' ? 'var(--green)' : 'var(--text-secondary)', fontWeight: r.best === 'reg' ? 700 : 400, borderBottom: i === EV_ROWS.length - 1 ? undefined : '1px solid var(--border)' }}>{r.regEv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <figcaption className="text-xs mt-3 text-center" style={{ color: 'var(--text-secondary)', opacity: 0.75 }}>
                A $100 river pot, holding a hand that beats their whole calling range. The best size is highlighted for each opponent. Against the sticky caller the overbet is worth 1.6 times the pot-sized bet. Against the reg it is worth less than the pot-sized bet.
              </figcaption>
            </figure>
            <p>
              Look at the sticky caller&apos;s column. His calling frequency slides from 60% to 45%
              while your bet goes up six times over. That&apos;s an inelastic range, and the arithmetic
              says jam it in: <S>$90 from the overbet against $19.80 from the small bet.</S> Now the
              reg. His calling frequency collapses from 65% to 15%, and the value peaks at a pot-sized
              bet and then <S>falls</S>. The overbet earns him less than a two-thirds bet would.
            </p>
            <p className="mt-4">
              Same hand, same board, same pot. Two different right answers, and now you can say why.
            </p>

            {/* CTA 1 */}
            <CTABox
              headline="Read Opponents Faster Than You Read Charts"
              text="Poker Reflex drills preflop decisions hand after hand with instant GTO feedback, so the baseline becomes automatic and your attention is free for the thing that actually makes money: the player across the table. Free to download."
            />

            {/* H2 3 */}
            <H2>Why &ldquo;Just Bet Bigger Against Stations&rdquo; Costs You Money</H2>
            <p>
              That table has a hidden assumption, and it&apos;s doing a lot of work: you held a hand
              that beat their <S>entire</S> calling range. Change that and the conclusion flips.
            </p>
            <p className="mt-4">
              With anything less than the nuts, sizing up does two things at once. It shrinks how often
              they call, which the table already showed. But it also <S>strengthens the range that
              does call</S>, because the hands that stick around against a big bet are the good ones. So
              you win a smaller share of the pots you do get called in.
            </p>
            <p className="mt-4">
              Put numbers on it. Same $100 river, same thinking reg, but now you hold top pair with a
              good kicker instead of a monster.
            </p>
            <ul className="mt-4 space-y-2 pl-6 list-disc">
              <li><S>Bet $33.</S> He calls 65% of the time, and you have the best hand in about 70% of those calls. That bet is worth about <S>+$8.58</S>.</li>
              <li><S>Bet $100.</S> He calls 35% of the time, but now you only have the best hand in about 35% of those calls, because he folded everything you were beating. That bet is worth about <S>−$10.50</S>.</li>
            </ul>
            <p className="mt-4">
              The identical hand goes from a solid value bet to a losing one purely from the size. And
              this isn&apos;t only a problem against regulars. Andrew Brokos, writing on the GTO Wizard
              blog in April 2026 about exploiting calling stations, found that solver strategies against
              them use bets that are <S>mostly small, almost exclusively 40% of pot or less</S>, because
              a small bet keeps their range wide and prints money from the bottom of it. His line is
              worth quoting: waiting for monsters and then betting huge is <S>one</S> way to beat a
              station, but it is not the most profitable way.
            </p>
            <p className="mt-4">
              So here is the correction, and it&apos;s the sentence to take away from this whole
              article. <S>Elasticity is not uniform across a range.</S> Even a station has an elastic
              bottom to their range, and a big bet shaves off exactly the weak hands your thin value bet
              was aiming at. Size up with the hands that beat the strong part of what calls you. Size
              down with the thin ones. To check where your hand actually sits against a range you
              suspect, put both into the <A href="/tools/equity-calculator">equity calculator</A> rather
              than guessing.
            </p>

            {/* H2 4 */}
            <H2>Bluffing Changes the Question Entirely</H2>
            <p>
              Everything above was about value. Bluffing runs on the opposite engine: you need folds,
              and an inelastic opponent is defined by not giving you any extra ones when you pay more
              for them.
            </p>
            <p className="mt-4">
              A bluff of size B into a pot of P needs them to fold more than B divided by (P + B) to
              break even. That&apos;s just the price of the bluff, the mirror image of the pot odds
              you&apos;d be giving them, which our <A href="/tools/pot-odds-calculator">pot odds
              calculator</A> works out from the caller&apos;s side.
            </p>
            <p className="mt-4">
              Now take a genuinely inelastic opponent, someone who folds a flat 20% no matter what you
              bet. Run the numbers into a $100 pot:
            </p>
            <ul className="mt-4 space-y-2 pl-6 list-disc">
              <li><S>Bluff $10:</S> you need 9% folds and you get 20%. Worth <S>+$12</S>.</li>
              <li><S>Bluff $20:</S> you need 17% folds and you get 20%. Worth <S>+$4</S>.</li>
              <li><S>Bluff $30:</S> you need 23% folds and you only get 20%. Worth <S>−$4</S>.</li>
              <li><S>Bluff $100:</S> you need 50% folds and you get 20%. Worth <S>−$60</S>.</li>
            </ul>
            <p className="mt-4">
              Note what that actually says, because most articles get this wrong in one direction or the
              other. It is <S>not</S> true that bluffing is hopeless against an inelastic opponent:
              there&apos;s a profitable size, and the threshold is exactly where B equals their fold
              percentage times the pot, divided by the rest. Against a 20% folder into $100, anything
              under $25 shows a profit.
            </p>
            <p className="mt-4">
              But look at what &ldquo;profitable&rdquo; buys you. A $10 bet into $100 is a strange,
              tiny, transparent bet that a thinking opponent reads instantly, and it wins $12 when it
              works. In practice that&apos;s why bluffs against inelastic ranges shrink toward zero:
              not because no size is profitable, but because the only profitable sizes are too small to
              be worth making. You beat these players by <A href="/blog/poker-equity-explained">showdown
              equity</A>, not by moving them off hands.
            </p>
            <p className="mt-4">
              One trap to name, because it lives in the same mental drawer. You&apos;ve probably read
              that bigger bets require more bluffs to stay balanced. True, and irrelevant here.
              That&apos;s a rule about keeping <S>yourself</S> unexploitable against a perfect opponent.
              Applied to a station it tells you to add bluffs against the one range you should be
              bluffing least. Balance and exploitation are different jobs, and our{' '}
              <A href="/blog/gto-poker-for-beginners">GTO guide</A> covers where the baseline ends and
              the adjustment starts.
            </p>

            {/* H2 5 */}
            <H2>How to Spot It at the Table</H2>
            <p>
              You don&apos;t need a tracker for this, which is convenient, because the stats that would
              answer it directly need thousands of hands per opponent to mean anything. What you need is
              cheaper and works live.
            </p>
            <ul className="mt-4 space-y-2 pl-6 list-disc">
              <li><S>Watch a showdown, not a fold.</S> Folds tell you nothing about what they would have called with. A showdown tells you exactly what price they were willing to pay and with what.</li>
              <li><S>Ask what made them call, not how often they call.</S> Someone who calls because they have a piece and want to see it through is inelastic. Someone who calls because the price was right is elastic by definition, and will fold when it isn&apos;t.</li>
              <li><S>Notice the pain threshold.</S> Almost nobody is inelastic across every size. Recreational players are typically price-blind up to about a pot-sized bet, then turn sharply elastic above it, because an unusual number snaps them out of autopilot and makes them think. Find that ceiling and stay under it.</li>
              <li><S>Beware the strong-range imposter.</S> The most expensive error in this topic is sizing up against someone who is inelastic because their range is genuinely strong, not because they are loose. They aren&apos;t paying you off, they&apos;re happy. Player type is a clue, and our <A href="/blog/preflop-poker-mistakes">preflop mistakes guide</A> covers reading it, but the board and the action tell you more.</li>
            </ul>

            {/* H2 6 */}
            <H2>Elasticity Before the Flop</H2>
            <p>
              Preflop gets treated as a place where sizing barely matters, and that is only half right.
              It depends entirely on who is left to act.
            </p>
            <p className="mt-4">
              The big blind is the most <S>elastic</S> caller in poker. They close the action and
              they&apos;re getting a direct price, so their defending range widens sharply against a 2x
              open and tightens against a 3x or 4x. That sensitivity is exactly why open sizes have
              shrunk over the past decade: smaller opens buy cheap fold equity from everyone else while
              the blinds defend wider for less. Change the price, change what continues. That is
              elasticity doing its job.
            </p>
            <p className="mt-4">
              Limpers are the opposite. Someone who has already put a chip in with a hand they
              didn&apos;t think was worth raising is usually coming along regardless, which is why the
              iso-raise formula sizes up against them without expecting many more folds. Our{' '}
              <A href="/blog/isolate-limpers">guide to isolating limpers</A> works through that spot,
              including why an isolation raise against a true station stops being a bluff and becomes a
              value bet.
            </p>
            <p className="mt-4">
              And there is one spot where elasticity disappears completely. Once stacks are short enough
              that the decision is shove or fold, there is no size to choose, so there is nothing for
              your opponent&apos;s calling range to respond to. Our{' '}
              <A href="/tools/push-fold-chart">push or fold chart</A> is the clean case: price stops
              being a variable and only the hand matters.
            </p>

            {/* FAQ */}
            <H2>Common Questions About Poker Elasticity</H2>
            <p>
              <S>What is elasticity in poker?</S>{' '}
              Elasticity describes how much an opponent calling range changes when your bet size
              changes. Against an elastic range, sizing up makes them fold a lot more, so their calling
              frequency drops sharply. Against an inelastic range, the calling frequency barely moves
              whether you bet a third of the pot or the whole thing. The term is borrowed from
              economics, where it measures how demand responds to price.
            </p>
            <p className="mt-4">
              <S>What is an inelastic calling range?</S>{' '}
              An inelastic calling range is one that barely shrinks as the price goes up. A recreational
              player who has decided to see the showdown calls a third-pot bet and a pot-sized bet with
              almost the same hands. Because the calling frequency stays high, a bigger bet collects
              more money from the same range, which is why your strongest hands want a larger size
              against these players.
            </p>
            <p className="mt-4">
              <S>How much should you bet against a calling station?</S>{' '}
              It depends on your hand, not just on the player. With a hand that beats the top of their
              calling range, size up, because their calling frequency barely drops. With a thin value
              hand, size down: a big bet folds out exactly the weak hands you were targeting and leaves
              you called mainly by better. The popular advice to always bet bigger against stations is
              only correct for the strong half of your range.
            </p>
            <p className="mt-4">
              <S>Should you bluff against an inelastic opponent?</S>{' '}
              Rarely, and only very small. A bluff of size B into a pot of P needs them to fold more
              than B divided by (P plus B). If someone folds a flat 20% at any size, bluffs work only
              below 25 dollars into a 100 dollar pot: a 20 dollar bluff makes 4 dollars, a 30 dollar
              bluff loses 4. There is a profitable size, it is just so small that in most spots the
              bluff is not worth making.
            </p>
            <p className="mt-4">
              <S>Is elasticity a player type or a situation?</S>{' '}
              A situation. Elasticity describes a range in a specific spot, not a permanent label on a
              person. The same solid regular is completely inelastic holding a flopped set and extremely
              elastic holding a bluff-catcher on a scary river. Labelling someone inelastic and applying
              it to every hand they play is the most expensive mistake in this whole topic.
            </p>

            {/* Practice */}
            <H2>Putting It Into Practice</H2>
            <p>
              You don&apos;t need to compute anything at the table. You need one question running in the
              background of every bet you size: <S>if I made this bigger, would they really fold
              more?</S> If the honest answer is no, and your hand beats what calls, make it bigger. If
              the answer is yes, the small bet is usually collecting more.
            </p>
            <p className="mt-4">
              And it works because elasticity is where your opponent stops being a mystery and becomes a
              number. Everything else in this article, the table, the thin-value trap, the bluff
              threshold, is just that question with the arithmetic filled in. Get the baseline sizes
              automatic from our <A href="/blog/poker-bet-sizing">bet sizing guide</A>, then spend your
              attention on the person, because that is where the money is.
            </p>

            {/* CTA 2 */}
            <CTABox
              headline="Free Up Your Attention for the Player"
              text="Every second spent working out a standard preflop spot is a second you are not spending reading the table. Poker Reflex drills open, 3-bet, 4-bet and all-in decisions until they are reflex, with instant feedback and an ELO that tracks your progress. Free to download."
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
