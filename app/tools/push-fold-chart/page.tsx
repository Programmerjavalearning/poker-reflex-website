import type { Metadata } from 'next'
import { type ReactNode } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import QRCodeBlock from '@/components/QRCodeBlock'
import PushFoldChart from '@/components/tools/PushFoldChart'
import { BRAND_ASSETS, SITE_URL, APP_STORE_URL, PLAY_STORE_URL } from '@/lib/brand'

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'When to Shove: Free Push or Fold Chart Trainer | Poker Reflex',
  description:
    'When to shove a short stack in poker. A free push or fold chart by position and stack (5 to 15bb), with worked jam examples, the SAGE shortcut, antes, and ICM.',
  keywords:
    'push or fold chart, when to shove poker, short stack all in chart, push fold chart, nash push fold ranges, shove or fold, sage poker, heads up push fold',
  alternates: { canonical: `${SITE_URL}/tools/push-fold-chart` },
  openGraph: {
    title: 'When to Shove: Free Push or Fold Chart Trainer | Poker Reflex',
    description:
      'A free push or fold chart by position and stack, with worked jam examples, the SAGE shortcut, antes, and ICM.',
    url: `${SITE_URL}/tools/push-fold-chart`,
    siteName: 'Poker Reflex',
    type: 'website',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'When to Shove: Free Push or Fold Chart Trainer | Poker Reflex',
    description:
      'A free push or fold chart by position and stack, with worked jam examples, the SAGE shortcut, antes, and ICM.',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
}

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

type Section = { heading: string; paragraphs: string[]; bullets?: string[] }

const topSections: Section[] = [
  {
    heading: 'How to read this push or fold chart',
    paragraphs: [
      'The grid is the standard 13x13 layout. Pairs run down the diagonal, suited hands sit above it, offsuit hands sit below.',
      'So the read is simple. Pick your seat, pick your stack, and jam the green. The grid already did the equity work for you.',
    ],
    bullets: [
      'Green means jam. Any green square is a profitable all in at the position and stack you have selected. Push it without thinking twice.',
      'Dark means fold. A dark square is a fold. At these depths there is no limp, no min-raise, no call. You are folding or you are shoving, nothing in between.',
      'Positions widen toward the button. Switch from UTG to the cutoff to the button and watch the green spread out. UTG might be a tight cluster of pairs and big aces, while the button lights up with weak aces, suited gappers, and offsuit broadways.',
    ],
  },
  {
    heading: 'When does push or fold actually apply?',
    paragraphs: [
      'Push/fold is not a style you pick. It is a depth you fall into. The shallower you get, the more it takes over.',
      'The honest summary: live and breathe the chart from 5 to 12bb, lean on it through 15bb, and put it away above that.',
    ],
    bullets: [
      'Single-digit stacks make it near-mandatory. At 5 to 8 big blinds, almost any open commits you. If you raise to 2bb with 6bb behind, you cannot fold to a shove, so you might as well jam and pick up the blinds (and antes) with fold equity intact. At these stacks the chart is close to the whole game.',
      'Around 15bb is the practical ceiling. Push/fold stays correct up to roughly 12 to 15 big blinds. That is the top of the range where shoving still beats the alternatives in most spots.',
      'Above that, open-raising beats jamming. Once you climb past 15bb, a min-raise or a standard open earns more than a shove. You keep fold equity, you can fold to 3-bets, and you stop risking your tournament life on hands that do not need to. So jamming 20bb full ring is a leak, not a play. (Heads-up is the exception, where shoves stay correct deeper.)',
    ],
  },
  {
    heading: 'Why the button jams so much wider than under the gun',
    paragraphs: [
      'Look at the two extremes on the grid. From UTG you are jamming a tight band, around 18 percent at 5bb and tightening toward 6 percent by 15bb. From the button it runs far wider, close to 40 percent at 5bb and still near 30 percent at 15bb. Same player, same stacks, wildly different ranges. Two things drive that gap.',
      'Players left to act. Under the gun, every other player at the table still gets to look at your shove. That is a lot of chances to run into a real hand. On the button, only the small blind and big blind are left, two random hands instead of seven or eight. Fewer opponents means your jam survives more often.',
      'Fold equity. Because so few players can call you on the button, they fold far more often, and those folds are pure profit. You are not just hoping to win at showdown, you are collecting blinds and antes uncontested a huge share of the time. That extra fold equity is what makes hands like K7s, Q8s, and QTo profitable shoves on the button that would be instant folds under the gun.',
      'Put it together and the math is intuitive. UTG you need a hand that is good when called, because you will get called by a strong range and you will see it often. On the button you need a hand that is good enough to win when they fold, which is most of the time, so the bar drops and the green floods the grid.',
    ],
  },
]

const spotsIntro: Section = {
  heading: 'Three spots, three lessons',
  paragraphs: [
    'Charts only help if you can read them under pressure. So let us walk three real short-stack spots, each checked hand by hand against the exact jam range for that seat and stack. One easy button jam, one early-position fold that traps people, and one wide small-blind shove that feels too loose until you see the range.',
    'Same chip stack range, wildly different correct plays, all driven by one thing: how many players are left to act and whether they have to put money in. From UTG you fold a real-looking KJo. On the button you happily ship J9s. In the small blind you jam Q5o, a hand most players muck on sight. Run these exact spots on the trainer above until the seat tells you the answer before you even read the cards.',
  ],
}

type Example = { title: string; verdict: 'JAM' | 'FOLD'; explanation: string }

const examples: Example[] = [
  {
    title: 'J9s on the button at 10bb',
    verdict: 'JAM',
    explanation:
      'Folded to you on the button with 10 big behind, holding J9 of hearts. The button 10bb jam range is 22+, A2s+, A2o+, K6s+, KTo+, Q8s+, QTo+, J8s+, JTo, T8s+, 97s+, 87s, 76s. Find the jack-high suited part: J8s+ means J8s, J9s, and JTs all jam. J9s sits right in that group, so it is a clear shove. The lesson is fold equity plus position. Only two players are left to act, and the small blind has to put money in blind. A suited jack with a nine kicker has live cards, makes straights and flushes, and rarely dominates itself into a disaster. From under the gun this same hand is a fold. On the button it is a routine jam.',
  },
  {
    title: 'KJo under the gun at 12bb',
    verdict: 'FOLD',
    explanation:
      'First to act, nine-handed, 12bb deep, holding KJ offsuit. It looks like a hand, two big cards plus a king, and people shove it on autopilot. The UTG 12bb jam range is TT+, ATs+, AJo+, KJs+, QJs. Go through it slowly. The only offsuit Broadways allowed are AJo+, which is AJo, AQo, and AKo. King-jack appears only as KJs+, the suited version. KJ offsuit is nowhere in this range. It misses the offsuit cutoff and it is not a suited king. Why so tight up front? You have seven players behind who can wake up with a real hand, and KJo gets dominated constantly (AK, AJ, KQ, AQ all crush it, and even a random ace flips you). The fold equity that saves you on the button just is not there from UTG. KJo from early position is a fold at 12bb, full stop.',
  },
  {
    title: 'Q5o in the small blind at 8bb',
    verdict: 'JAM',
    explanation:
      'Folded all the way to you in the small blind with 8 big. One opponent left, the big blind, and they have to defend or surrender. You hold Q5 offsuit, and most players muck it. The small-blind range when it folds to you is enormous because there is only one player left and they are out of position with the worst pot odds in poker against an all-in. At 8bb it includes, among many others, 22+, A2s+, A2o+, K2s+, K2o+, Q2s+, Q4o+, J2s+, J7o+, T4s+, T7o+, 95s+, 97o+, 84s+, 87o, 74s+, 76o, 64s+, 53s+, 43s. Look at the offsuit queens: Q4o+ runs from Q4o all the way up through QJo, so Q5o is comfortably inside and it jams. The boundary sits at Q4o, which means Q3o is the fold, one pip of kicker away. You are not jamming because Q5o is strong. You are jamming because the big blind cannot call wide enough to punish it, and the dead money plus your fold equity does the work.',
  },
]

const bottomSections: Section[] = [
  {
    heading: 'Heads-up push or fold (it is just the small blind)',
    paragraphs: [
      'Heads-up is a different animal, and you have already been using it. When it folds to the small blind, the SB sits on the button, acts first before the flop, and only the big blind can call. That is heads-up. So the small blind row on the chart above is your heads-up push range, and the numbers look almost reckless next to the early-position seats.',
      'Even at 15bb the small blind jams about 46 percent of hands, and the shorter you get the wider it goes, up near 71 percent at 5bb. That is nearly every pair, every ace, every king, most broadways, and a thick band of suited connectors. It works because there is exactly one player left to wake up with a hand, so you pick up the blinds uncontested a huge share of the time. Just never carry that width back to a 9-handed seat like UTG, where you would go broke.',
    ],
  },
  {
    heading: 'The wheel-ace effect (A5 beats A6)',
    paragraphs: [
      'Here is a detail that trips people up: A5 actually shoves and calls wider than A6. That feels backwards. A6 is the higher card, so should it not be stronger? Not when you get called. When your jam gets snapped off, A5 plays better than A6 because the 5 helps make a wheel (A-2-3-4-5) and connects with more straight outs against the kind of hands that call you.',
      'The wheel aces (A2 through A5) carry extra straight equity that A6, A7, and A8 just do not have. So you will see A5, A4, A3, and A2 staying in the jamming range a little wider than the middle aces sitting right above them. You see it most clearly in the tighter early spots. From UTG at 12bb, A5s through A3s jam while A6s through A8s fold. In the much wider small-blind ranges every ace already jams, so the edge is baked in even if there is no hard cutoff to point at.',
    ],
  },
  {
    heading: 'SAGE: the do-it-in-your-head mode',
    paragraphs: [
      'You will not always have a chart in front of you, especially live. SAGE (the Sit And Go Endgame system) is the back-of-the-napkin method for heads-up play at very short stacks, roughly 7bb and under. It trades a tiny bit of accuracy for something you can actually run in your head at the table.',
      'The core of it is the Power Index, or PI. You score your hand with one formula: PI = 2 times the value of the higher card, plus the value of the lower card, then add 22 if it is a pair, and add 2 if it is suited. Card values: A = 15, K = 13, Q = 12, J = 11, T = 10, and everything else is just its number (9 = 9, down to 2 = 2).',
      'Once you have your PI, compare it to the push number for your stack. R is your stack in big blinds after you post the small blind. As a sanity check on the formula: AA scores 67 (2x15 + 15 + 22 for the pair), AKs scores 45 (2x15 + 13 + 2 suited), and the worst hand in poker, 72o, scores 16 (2x7 + 2). So almost everything clears the push number at a short stack, which is exactly the point. At 7bb heads-up you are jamming a huge chunk of hands.',
    ],
    bullets: [
      'R = 1: push 17, the big blind calls with anything',
      'R = 2: push 21, call 17',
      'R = 3: push 22, call 24',
      'R = 4: push 23, call 26',
      'R = 5: push 24, call 28',
      'R = 6: push 25, call 29',
      'R = 7: push 26, call 30',
    ],
  },
  {
    heading: 'One worked PI calculation',
    paragraphs: [
      'Let us run a real borderline. You are heads-up, you have 7bb after posting (R = 7), it is folded to you on the button, and you look down at J5o. Score it: the higher card is the Jack (J = 11), double it for 22. Add the lower card (the 5) to reach 27. It is not a pair, so no +22. It is offsuit, so no +2. PI = 27.',
      'The push number at R = 7 is 26. Your 27 clears it, so SAGE says jam. It is thin, the kind of hand you would fold without a second thought in a full-ring game, but heads-up at 7bb with the button and one player to get through, J5o is a profitable shove. Drop it down to J4o and the PI falls to 26, still exactly on the line. J3o scores 25 and now you are below 26, so that one folds.',
      'That is the whole system. Score the hand, check the number, push or fold. It will not perfectly match a solver, but for heads-up endgames at 7bb and under it gets you within a hair of the right play without a chart or an app open at the table.',
    ],
  },
  {
    heading: 'Antes and ICM: why real ranges shift',
    paragraphs: [
      'A quick, honest note on scope. The chart above is no-ante chip-EV. It assumes you are playing pure chip equity, every chip in your stack is worth the same, and nobody has posted an ante. That covers a lot of real spots, especially early levels and most cash-style short-stack situations. But two things move these ranges once you are deep in a tournament.',
      'Antes widen everything. Once antes are in the pot, there is more dead money to win every time you jam. That extra reward pushes your break-even point lower, so you can shove a bit wider from every position and your opponents can call a touch wider too. A button range that ends at K7s with no ante might stretch to K5s or so once a full round of antes is sitting out there. The effect is real but not huge. Do not treat an ante table as a license to jam any two cards, just nudge the bottom of each range out a little.',
      'ICM near a pay jump tightens your calls. ICM (the Independent Chip Model) values your stack in real money, not raw chips. The chips you can lose are worth more than the chips you can win, so busting hurts more than doubling helps. On the bubble or right before a big pay jump, that asymmetry is sharp. You still open-jam fairly wide because fold equity is gold when nobody wants to bust, but your calling ranges get noticeably tighter. So read this chart as your chip-EV baseline, then tighten your calls under ICM pressure and loosen your shoves slightly with antes in play.',
    ],
  },
]

const faq = [
  {
    q: 'When should I shove a short stack in poker?',
    a: 'Once you are around 12 to 15 big blinds or fewer, open-jamming becomes your main tool, because raising small leaves you pot-committed anyway and shoving steals the fold equity. Below 10bb it is almost always push or fold with no flat-calling. Use the chart above for your exact position and stack, since a hand like A9o is a clear jam on the button at 10bb but a fold from UTG.',
  },
  {
    q: 'Is push/fold still correct at 15 big blinds?',
    a: 'At 15bb you are right at the edge. From early and middle positions, pure push/fold still holds up well, and the chart 15bb ranges (TT+, ATs+, AQo+ from UTG, for example) are solid. But from late position, and especially with antes in play, a min-raise or small open starts to beat jamming because it keeps weaker hands in your range and lets you fold to a shove. Treat 15bb as the top of the push/fold zone, not the middle of it.',
  },
  {
    q: 'How wide do I jam from the button when short stacked?',
    a: 'Very wide, because only the blinds are left to act and your fold equity is highest. At 5bb the button shoves close to 40 percent of hands (22+, every suited ace, K2s+, plus a pile of suited connectors and offsuit broadways). Even at 10bb you are still jamming hands like K6s, Q8s, J8s, and 76s. The button is the one seat where these trash jams are correct, so do not copy that range from any earlier position.',
  },
  {
    q: 'What is SAGE in poker?',
    a: 'SAGE (the Sit And Go Endgame System) is a simple heads-up push/fold shortcut for very short stacks, roughly 7bb or fewer. You compute a Power Index for your hand: PI = 2 times the higher card value, plus the lower card value, add 22 for a pair and 2 for suited (Ace counts as 15, King 13, and so on). Then you push if your PI meets the threshold for your stack size, for instance jam any PI of 23 or higher at 4bb, and the big blind calls off with a separate, looser number. It is a quick mental approximation of Nash, not a replacement for it.',
  },
  {
    q: 'Does heads-up push/fold get wider, like jamming at 10bb?',
    a: 'Yes. Heads-up the small blind is the button and only the big blind can call, so ranges blow open compared to full ring. At 10bb heads-up you are jamming nearly every pair, every ace, every king and most broadways, and a wide band of suited connectors. The wheel aces (A5 down to A2) are especially strong here, because they make straights when called. Just never carry that width back to a 9-handed table.',
  },
  {
    q: 'Does this chart account for antes?',
    a: 'No. Version 1 is no-ante, chip-EV, 9-handed (with the small blind range computed heads-up versus the big blind). Antes add dead money and widen every jam and call slightly, so in an ante format you can shove a bit looser than what is shown here. ICM near a pay jump pulls the other way and tightens your calling ranges, so use this as your baseline and adjust for the table you are actually at.',
  },
]

// ---------------------------------------------------------------------------
// JSON-LD schemas
// ---------------------------------------------------------------------------

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'When to Shove: Push or Fold Chart and Guide',
  description:
    'A free short-stack push or fold chart by position and stack depth, with worked jam examples, the SAGE system, and notes on antes and ICM.',
  author: { '@type': 'Organization', name: 'Poker Reflex' },
  publisher: {
    '@type': 'Organization',
    name: 'Poker Reflex',
    logo: { '@type': 'ImageObject', url: BRAND_ASSETS.squareLogoUrl },
  },
  image: BRAND_ASSETS.squareLogoUrl,
  datePublished: '2026-06-24',
  dateModified: '2026-06-24',
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/tools/push-fold-chart` },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Push or Fold Chart',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  url: `${SITE_URL}/tools/push-fold-chart`,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

// ---------------------------------------------------------------------------
// Reusable bits
// ---------------------------------------------------------------------------

const H2 = ({ children }: { children: ReactNode }) => (
  <h2
    className="font-heading font-bold text-2xl md:text-3xl mt-12 mb-5 pl-4"
    style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
  >
    {children}
  </h2>
)

function SectionBlock({ section }: { section: Section }) {
  return (
    <>
      <H2>{section.heading}</H2>
      {section.paragraphs.map((p, i) => (
        <p key={i} className={i === 0 ? '' : 'mt-4'}>
          {p}
        </p>
      ))}
      {section.bullets && section.bullets.length > 0 && (
        <ul className="mt-4 space-y-2 pl-6 list-disc">
          {section.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </>
  )
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

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function PushFoldChartPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }} />

      <Header />

      <main id="main-content" className="pt-20" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-[720px] mx-auto px-6 py-16">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm mb-8">
            <Link href="/tools" className="transition-opacity hover:opacity-80" style={{ color: 'var(--green)' }}>
              Tools
            </Link>
            <span style={{ color: 'var(--text-secondary)' }} aria-hidden="true">/</span>
            <span style={{ color: 'var(--text-secondary)' }}>Push or Fold Chart</span>
          </nav>

          {/* H1 */}
          <h1
            className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4"
            style={{ color: 'var(--text)' }}
          >
            When to Shove: Push or Fold Chart Trainer
          </h1>
          <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}>
            You shove a short stack when you are down to around 15 big blinds or fewer and a normal
            raise would commit too much of your stack to fold later. At that depth, going all in
            before the flop turns messy postflop spots into one clean math decision, and the chart
            below tells you exactly which hands to jam from each position. Free, no signup needed.
          </p>

          {/* Tool */}
          <PushFoldChart />

          {/* Article */}
          <article style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
            <p className="mt-12">
              Set your position and stack size on the grid, then read off your range. The further you
              sit from the blinds, the tighter you jam. The closer you get to the button, the wider
              you can go. Everything below explains why those shapes look the way they do, and when
              push/fold is actually the right tool. If you want to see how full-stack opening ranges
              compare, the{' '}
              <Link href="/tools/range-visualizer" style={{ color: 'var(--green)' }} className="hover:opacity-80 transition-opacity underline underline-offset-2">
                Range Visualizer
              </Link>{' '}
              covers deeper preflop play.
            </p>

            {topSections.map((s) => (
              <SectionBlock key={s.heading} section={s} />
            ))}

            {/* Worked examples */}
            <SectionBlock section={spotsIntro} />
            <div className="mt-6">
              {examples.map((ex) => {
                const jam = ex.verdict === 'JAM'
                return (
                  <div
                    key={ex.title}
                    className="rounded-2xl border p-6 my-6"
                    style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
                  >
                    <div className="flex items-center justify-between gap-3 mb-3 flex-wrap">
                      <h3 className="font-heading font-bold text-lg md:text-xl" style={{ color: 'var(--text)' }}>
                        {ex.title}
                      </h3>
                      <span
                        className="text-xs font-bold px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: jam ? 'rgba(74, 222, 128, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                          color: jam ? 'var(--green)' : 'var(--red)',
                        }}
                      >
                        {ex.verdict}
                      </span>
                    </div>
                    <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {ex.explanation}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* CTA 1 */}
            <CTABox
              headline="Train the shove, not just the chart"
              text="Reading a chart is one thing. Jamming the right hand in two seconds with your tournament life on the line is another. Poker Reflex drills opens, 3-bets, 4-bets, and all-in spots hand by hand, with instant GTO feedback and an ELO rating that tracks your progress. Free to download."
            />

            {bottomSections.map((s) => (
              <SectionBlock key={s.heading} section={s} />
            ))}

            {/* FAQ */}
            <H2>Frequently asked questions</H2>
            <div className="space-y-8 mt-6">
              {faq.map(({ q, a }) => (
                <div key={q}>
                  <h3 className="font-heading font-bold text-lg md:text-xl mb-3" style={{ color: 'var(--text)' }}>
                    {q}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)' }}>{a}</p>
                </div>
              ))}
            </div>

            {/* Related */}
            <H2>Keep sharpening your preflop game</H2>
            <p>
              Push/fold is the short-stack endgame, but every chip you save before you get short
              starts earlier. Learn why seat order decides so much in{' '}
              <Link href="/blog/poker-positions" style={{ color: 'var(--green)' }} className="hover:opacity-80 transition-opacity underline underline-offset-2">
                poker positions explained
              </Link>
              , tighten up your opens with the guide to{' '}
              <Link href="/blog/poker-starting-hands" style={{ color: 'var(--green)' }} className="hover:opacity-80 transition-opacity underline underline-offset-2">
                poker starting hands
              </Link>
              , and avoid the leaks that cost short stacks the most in{' '}
              <Link href="/blog/preflop-poker-mistakes" style={{ color: 'var(--green)' }} className="hover:opacity-80 transition-opacity underline underline-offset-2">
                common preflop mistakes
              </Link>
              . To check how a jam runs when it gets called, test the matchup in the{' '}
              <Link href="/tools/equity-calculator" style={{ color: 'var(--green)' }} className="hover:opacity-80 transition-opacity underline underline-offset-2">
                Equity Calculator
              </Link>
              .
            </p>
          </article>

          {/* CTA 2 */}
          <CTABox
            headline="Make the short-stack spots automatic"
            text="Knowing the chart is one thing. Jamming the right hand without hesitating is another. Poker Reflex turns these ranges into reflexes, drilling open, 3-bet, 4-bet, and all-in decisions across stack depths with instant feedback. Free to download."
          />

          {/* Back to tools */}
          <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
            <Link href="/tools" className="inline-flex items-center gap-1 text-sm transition-opacity hover:opacity-80" style={{ color: 'var(--green)' }}>
              ← Back to Tools
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}
