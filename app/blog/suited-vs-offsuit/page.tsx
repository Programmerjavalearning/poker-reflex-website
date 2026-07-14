import type { Metadata } from 'next'
import { type ReactNode } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import QRCodeBlock from '@/components/QRCodeBlock'
import { BRAND_ASSETS, SITE_URL, APP_STORE_URL, PLAY_STORE_URL } from '@/lib/brand'

export const metadata: Metadata = {
  title: 'Suited vs Offsuit Poker: How Much Does It Matter?',
  description:
    'Suited hands add only about 3% equity, not the huge edge beginners think. See the exact numbers, when it changes a preflop decision, and when suited is still a fold.',
  keywords:
    'suited vs offsuit, does suited matter poker, suited vs offsuit equity, how much does suited add, suited hands poker, offsuit poker, suited vs offsuit odds, suited connectors equity',
  alternates: { canonical: `${SITE_URL}/blog/suited-vs-offsuit` },
  openGraph: {
    title: 'Suited vs Offsuit Poker: How Much Does It Matter?',
    description:
      'How much being suited actually adds, how often you flop a flush, when it flips a preflop decision, and when suited is still a fold.',
    url: `${SITE_URL}/blog/suited-vs-offsuit`,
    type: 'article',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suited vs Offsuit Poker: How Much Does It Matter?',
    description: 'Suited adds about 3% equity, not the huge edge beginners think. The real numbers.',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Suited vs Offsuit Poker: How Much Does It Matter?',
  description:
    'A number-driven look at how much being suited adds preflop: the equity edge, how often you flop a flush, when it flips a decision, and when suited is still a fold.',
  author: { '@type': 'Organization', name: 'Poker Reflex' },
  publisher: {
    '@type': 'Organization',
    name: 'Poker Reflex',
    logo: { '@type': 'ImageObject', url: BRAND_ASSETS.squareLogoUrl },
  },
  image: BRAND_ASSETS.squareLogoUrl,
  datePublished: '2026-07-14',
  dateModified: '2026-07-14',
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/suited-vs-offsuit` },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much equity does suited add?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Roughly 2 to 4%, about 3% on average. Smaller for high cards like AK (about 2%), bigger for connectors like 76 (3 to 4%), because connectors use the suit for both flushes and straights.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often do you flop a flush with suited cards?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You flop a made flush only about 0.8% of the time and a flush draw about 11% of the time, and that draw completes by the river about 35% of the time. Real flushes are rare.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is suited or offsuit better?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Suited is always at least as good as its offsuit twin, by about 2 to 4% of equity plus better playability. But the suit does not rescue a bad hand: AKs beats AKo, yet J2s is still a fold.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does being suited matter that much preflop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Less than beginners think. The extra 2 to 4% flips close decisions (ATs opens, ATo folds) but never turns trash into a playable hand. Treat it as a tiebreaker, not a green light.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do range charts include A5s but not A5o?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A5s makes nut flushes and wheel straights and blocks aces, so it works as a bluff and semi-bluff. A5o has none of that and is dominated, so it folds.',
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

export default function SuitedVsOffsuitArticle() {
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
            Suited vs Offsuit Poker: How Much Does It Matter?
          </h1>
          <div className="flex items-center gap-4 mb-10 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <span>By Poker Reflex</span>
            <span>·</span>
            <span>July 14, 2026</span>
            <span>·</span>
            <span>9 min read</span>
          </div>

          <div className="prose-article" style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>

            {/* Intro */}
            <p>
              &ldquo;Suited&rdquo; might be the most overrated word in poker. A new player sees two cards of
              the same suit and suddenly wants to play them, as if the matching colors doubled the hand.
              K7s, Q4s, J3s, in they all go. So it is worth asking the blunt question that nobody quite
              answers: <S>how much does being suited actually matter?</S>
            </p>
            <p className="mt-4">
              The answer, with real numbers, will change how you play. This guide gives you the exact edge
              the suit provides (smaller than you think), how often you truly make a flush, the one spot
              where that small edge flips a real preflop decision, and the myth it does not rescue. By the
              end you will value the suit correctly: a nice bonus on a good hand, and never a reason to play
              a bad one.
            </p>

            {/* Quick answer */}
            <H2>The Quick Answer: How Much Does Suited Add?</H2>
            <div
              className="rounded-2xl border p-6 mt-6 mb-6"
              style={{ backgroundColor: 'var(--surface)', borderColor: 'rgba(74, 222, 128, 0.35)' }}
            >
              <p className="font-heading font-semibold mb-3" style={{ color: 'var(--green)' }}>The short answer</p>
              <p style={{ color: 'var(--text-secondary)' }}>
                Being suited adds only about <S>3% equity</S> (roughly 2 to 4%, a little more for
                connectors). You flop a flush draw about <S>11%</S> of the time, and a made flush only
                about <S>0.8%</S> of the time. It is a real edge, but a small one, and it never turns a
                weak hand into a good one.
              </p>
            </div>
            <p>
              That is the whole thing in three numbers. The suit is a <S>tiebreaker</S>, not a
              transformation. It nudges close hands over the line and adds a bit of playability, but if you
              are counting on it to make bad cards good, you are the player everyone at the table is happy
              to see keep calling.
            </p>

            {/* Defined */}
            <H2>Suited vs Offsuit, Defined</H2>
            <p>
              Quick refresher on the shorthand. A hand written with an <S>s</S> is suited, both cards the
              same suit, so it can make a flush. An <S>o</S> means offsuit, two different suits. AKs is
              Ace-King suited, AKo is Ace-King offsuit, and plain AK means both. If any of that is fuzzy,
              our guide to <A href="/blog/poker-hand-notation">poker hand notation</A> decodes it fast.
            </p>
            <p className="mt-4">
              Here is the part that matters. The <S>only</S> thing being suited changes is flush potential.
              Nothing else. The high cards are the same, the connectedness is the same, the pair value is
              the same. AKs and AKo are the identical two ranks, and the single difference between them is
              that AKs can flop a flush and AKo cannot. So the entire question of &ldquo;how much does
              suited matter&rdquo; is really just &ldquo;how much is that flush potential worth.&rdquo; And
              the honest answer is: not that much.
            </p>
            <p className="mt-4">
              One more number worth knowing: a suited hand has only <S>4 combinations</S>, while its
              offsuit twin has <S>12</S>. So offsuit versions show up three times as often, which is part
              of why the suited ones feel special. They are rarer, but rarer is not the same as far
              stronger.
            </p>

            {/* Equity table */}
            <H2>The Real Numbers: Suited vs Offsuit Equity</H2>
            <p>
              Let&apos;s put actual equities on it. Here is how a few hands run against a single random
              hand, suited version next to offsuit version, so you can see the gap the suit actually buys.
            </p>
            <figure className="mt-6 mb-6 overflow-x-auto">
              <table
                aria-label="Approximate all-in equity against one random hand, comparing the suited and offsuit version of each hand"
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
                    <th className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Hand</th>
                    <th className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Suited (vs a random hand)</th>
                    <th className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Offsuit</th>
                    <th className="text-left px-4 py-3 font-heading font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>The suit adds</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ backgroundColor: 'var(--surface)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>AK</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>about 67%</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>about 65%</td>
                    <td className="px-4 py-3" style={{ color: 'var(--green)', fontWeight: 600, borderBottom: '1px solid var(--border)' }}>~2%</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--background)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>KQ</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>about 63%</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>about 61%</td>
                    <td className="px-4 py-3" style={{ color: 'var(--green)', fontWeight: 600, borderBottom: '1px solid var(--border)' }}>~2%</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--surface)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>AT</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>about 62%</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>about 60%</td>
                    <td className="px-4 py-3" style={{ color: 'var(--green)', fontWeight: 600, borderBottom: '1px solid var(--border)' }}>~2%</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--background)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text)' }}>76 (a connector)</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)' }}>about 51%</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-secondary)' }}>about 48%</td>
                    <td className="px-4 py-3" style={{ color: 'var(--green)', fontWeight: 600 }}>~3%</td>
                  </tr>
                </tbody>
              </table>
              <figcaption className="text-xs mt-3 text-center" style={{ color: 'var(--text-secondary)', opacity: 0.75 }}>
                Approximate all-in equity against one random hand. The suit adds about 2% for high cards and
                3 to 4% for connectors. Test any matchup in the{' '}
                <A href="/tools/equity-calculator">equity calculator</A>.
              </figcaption>
            </figure>
            <p>
              Read the last column. The suited version is always ahead, but by <S>about 2%</S> for the big
              cards and <S>3 to 4%</S> for the connectors. That is the real size of the edge. It is not
              nothing, but it is nowhere near the leap most players imagine when they see two matching
              suits. And keep in mind these are raw all-in equities against one random hand, so a connector
              like 76s is worth more than its 51% suggests once you count the flush and straight draws it
              makes in real pots. For the full picture of how equity works, our{' '}
              <A href="/blog/poker-equity-explained">poker equity guide</A> breaks it down.
            </p>

            {/* Flush odds */}
            <H2>How Often You Actually Flop a Flush</H2>
            <p>
              The reason the edge is small becomes obvious once you count how rarely flushes arrive. Holding
              two suited cards, you flop a <S>made flush only about 0.8%</S> of the time, less than 1 in
              100. You flop a <S>flush draw about 11%</S> of the time, and even then that draw only
              completes by the river about <S>35%</S> of the time (a flush draw has nine outs).
            </p>
            <p className="mt-4">
              So most of the value of being suited is not the flush itself, which almost never shows up. It
              is the <S>flush draws</S>: the extra equity and the semi-bluffing playability they give you on
              the flops where you pick one up. That is a genuine edge, but a modest one, and it is spread
              thin across a lot of hands where the suit simply never comes into play.
            </p>

            {/* CTA 1 */}
            <CTABox
              headline="Train Suited and Offsuit Spots"
              text="Poker Reflex drills preflop decisions hand by hand, so you learn exactly where the suit flips a call into a fold and where it does not. Instant GTO feedback across positions and stack depths. Free to download."
            />

            {/* Where it flips */}
            <H2>Where That Small Edge Flips a Real Decision</H2>
            <p>
              Two percent does not sound like much, and on most hands it changes nothing. A clear premium is
              a raise suited or offsuit, and clear trash is a fold either way. But on the <S>close hands</S>,
              the ones sitting right on the border of your range, that little edge is exactly enough to tip
              the decision.
            </p>
            <p className="mt-4">
              The classic example: <S>ATs is an open where ATo is a fold</S> from earlier positions. Same
              two ranks, but the flush potential lifts ATs just over the opening threshold while ATo sits
              just under it. You see the same split all over a solid range: KJs plays where KJo folds, QTs
              continues where QTo does not. The suit is the deciding vote on the hands that were already a
              coin flip. To see which hands land where, our{' '}
              <A href="/blog/poker-starting-hands">starting hands guide</A> lays out the ranges by position.
            </p>

            {/* Connectors */}
            <H2>Suited Connectors vs Offsuit: The Bigger Gap</H2>
            <p>
              Notice that 76 in the table gained more from the suit than AK did. That is not a fluke.
              <S> Connectors get the most out of being suited</S>, because they can use those matching cards
              for both a flush and a straight at the same time. A hand like 76s can flop a flush draw, a
              straight draw, or both, which is real playability in position.
            </p>
            <p className="mt-4">
              Its offsuit twin, 76o, has none of that flush upside and is close to unplayable outside of a
              few specific spots. This is why <S>suited connectors are a genuine hand class</S> that good
              players use, and offsuit connectors mostly are not. When people say suited matters, this is
              the group where they are most right.
            </p>

            {/* Myth-buster */}
            <H2>Myth-Buster: Suited Trash Is Still Trash</H2>
            <p>
              Here is the trap that costs beginners the most. The extra 2 to 4% does <S>not</S> rescue a bad
              hand. J2s, Q4s, K3s, they are all still folds, exactly like their offsuit versions. The gap
              between the two cards, and the weakness of the low card, drown out the small flush bonus. You
              flop a flush with them so rarely that the times you do never make up for all the trouble they
              cause the rest of the time.
            </p>
            <p className="mt-4">
              Being suited turns a fold into a slightly less-bad fold. It never turns a fold into a call.
              When you catch yourself limping in K5s or calling a raise with Q6s &ldquo;because it is
              suited,&rdquo; that is the suit talking you into a leak. This is one of the classic{' '}
              <A href="/blog/preflop-poker-mistakes">preflop mistakes</A> that quietly drains stacks at low
              stakes.
            </p>

            {/* A5s vs A5o */}
            <H2>Why Trained Ranges Keep A5s but Fold A5o</H2>
            <p>
              The cleanest illustration of when the suit matters is the wheel ace. Look at how a solid range
              treats A5s versus A5o, two hands with the identical ranks.
            </p>
            <ul className="mt-4 space-y-2 pl-6 list-disc">
              <li><S>A5s stays in.</S> It can make the nut flush and the wheel straight (A-2-3-4-5), and the ace blocks aces and Ace-King, so it works beautifully as a 3-bet or 4-bet bluff and as a semi-bluff. It is a real weapon.</li>
              <li><S>A5o folds.</S> No flush, no reliable straight, dominated by every better ace, and no real way to apply pressure. It is just a weak offsuit ace.</li>
            </ul>
            <p className="mt-4">
              Same two ranks, opposite verdicts, and the suit is the entire reason. Those suited wheel aces
              are exactly the blocker bluffs we cover in the{' '}
              <A href="/blog/poker-4-bet">4-bet guide</A>, and they only work <S>because</S> they are
              suited. This is the suit earning its keep, on a specific hand, for a specific reason, which is
              very different from &ldquo;play anything suited.&rdquo;
            </p>

            {/* FAQ */}
            <H2>Common Questions About Suited vs Offsuit</H2>
            <p>
              <S>How much equity does suited add?</S>{' '}
              Roughly 2 to 4%, about 3% on average. Smaller for high cards like AK (about 2%), bigger for
              connectors like 76 (3 to 4%), because connectors use the suit for both flushes and straights.
            </p>
            <p className="mt-4">
              <S>How often do you flop a flush with suited cards?</S>{' '}
              You flop a made flush only about 0.8% of the time and a flush draw about 11% of the time, and
              that draw completes by the river about 35% of the time. Real flushes are rare.
            </p>
            <p className="mt-4">
              <S>Is suited or offsuit better?</S>{' '}
              Suited is always at least as good as its offsuit twin, by about 2 to 4% of equity plus better
              playability. But the suit does not rescue a bad hand: AKs beats AKo, yet J2s is still a fold.
            </p>
            <p className="mt-4">
              <S>Does being suited matter that much preflop?</S>{' '}
              Less than beginners think. The extra 2 to 4% flips close decisions (ATs opens, ATo folds) but
              never turns trash into a playable hand. Treat it as a tiebreaker, not a green light.
            </p>
            <p className="mt-4">
              <S>Why do range charts include A5s but not A5o?</S>{' '}
              A5s makes nut flushes and wheel straights and blocks aces, so it works as a bluff and
              semi-bluff. A5o has none of that and is dominated, so it folds.
            </p>

            {/* Practice */}
            <H2>Putting It Into Practice</H2>
            <p>
              Value the suit for what it is: a bonus of about 2 to 4% that comes mostly from flush draws and
              flips the occasional close decision. Play your suited premiums and your suited connectors,
              lean on the wheel aces as bluffs, and let the suit break the tie on marginal hands. But the
              moment you find yourself playing weak cards <S>because</S> they are suited, stop, that is the
              exact leak this whole article is about.
            </p>
            <p className="mt-4">
              The way to make it stick is to see the numbers for yourself and then drill the decisions. Run
              suited-versus-offsuit matchups in the{' '}
              <A href="/tools/equity-calculator">equity calculator</A>, check which hands make the cut in
              our <A href="/blog/poker-starting-hands">starting hands guide</A>, and rep the open-or-fold
              call until the suit stops fooling you.
            </p>

            {/* CTA 2 */}
            <CTABox
              headline="Train Your Preflop Game Today"
              text="Drill open, 3-bet, 4-bet, and all-in decisions across every position and stack depth, with instant feedback and an ELO that tracks your progress. Learn exactly when the suit matters. Free to download."
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
