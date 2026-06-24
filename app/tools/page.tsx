import type { Metadata } from 'next'
import Link from 'next/link'
import { Calculator, TrendingUp, Grid3X3, Zap, type LucideIcon } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BRAND_ASSETS, SITE_URL } from '@/lib/brand'

export const metadata: Metadata = {
  title: 'Free Poker Tools | Poker Reflex',
  description:
    'Free tools to help you play smarter poker: calculators and trainers for pot odds, ranges, equity, and push/fold. No signup needed.',
  alternates: {
    canonical: `${SITE_URL}/tools`,
  },
  openGraph: {
    title: 'Free Poker Tools | Poker Reflex',
    description: 'Free tools to help you play smarter poker: calculators and trainers for pot odds, ranges, equity, and push/fold. No signup needed.',
    url: `${SITE_URL}/tools`,
    siteName: 'Poker Reflex',
    type: 'website',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Poker Tools | Poker Reflex',
    description: 'Free tools to help you play smarter poker: calculators and trainers for pot odds, ranges, equity, and push/fold. No signup needed.',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
}

type Tool = {
  href: string
  icon: LucideIcon
  title: string
  description: string
  badge: string
  badgeColor: 'green' | 'gold'
  disabled?: boolean
}

const tools: Tool[] = [
  {
    href: '/tools/pot-odds-calculator',
    icon: Calculator,
    title: 'Pot Odds Calculator',
    description:
      'Enter the pot size, bet size, and your estimated equity. Get instant pot odds, required equity, and a clear call-or-fold verdict with implied odds support.',
    badge: 'Available now',
    badgeColor: 'green' as const,
  },
  {
    href: '/tools/range-visualizer',
    icon: Grid3X3,
    title: 'Range Visualizer',
    description:
      'Explore preflop hand ranges on an interactive 13x13 grid. Load ranges by position, switch between 6-max and 9-max, toggle opens and 3-bets, or type your own.',
    badge: 'Available now',
    badgeColor: 'green' as const,
  },
  {
    href: '/tools/equity-calculator',
    icon: TrendingUp,
    title: 'Equity Calculator',
    description:
      'Pick two hands and an optional board to see the win percentages instantly. Exact on the flop, turn, and river, simulated preflop.',
    badge: 'Available now',
    badgeColor: 'green' as const,
  },
  {
    href: '/tools/push-fold-chart',
    icon: Zap,
    title: 'Push or Fold Chart',
    description:
      'See the math-perfect short-stack shove ranges by position and stack depth, from 5 to 15 big blinds. Tap any hand for an instant jam or fold verdict.',
    badge: 'Available now',
    badgeColor: 'green' as const,
  },
]

export default function ToolsHubPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">

          {/* Page header */}
          <div className="mb-12 md:mb-16">
            <h1
              className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4"
              style={{ color: 'var(--text)' }}
            >
              Free Poker Tools
            </h1>
            <p
              className="text-lg max-w-2xl leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              No signup. No paywalls. Just tools that help you understand the math behind
              good poker decisions.
            </p>
          </div>

          {/* Tools grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {tools.map((tool) => {
              const Icon = tool.icon
              const card = (
                <div
                  className={[
                    'rounded-2xl border p-6 h-full flex flex-col transition-all duration-200',
                    tool.disabled
                      ? 'opacity-60 cursor-default'
                      : 'hover:-translate-y-1 cursor-pointer',
                  ].join(' ')}
                  style={{
                    backgroundColor: 'var(--surface)',
                    borderColor: 'var(--border)',
                    willChange: tool.disabled ? undefined : 'transform',
                  }}
                >
                  {/* Icon + badge row */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgba(74, 222, 128, 0.1)' }}
                    >
                      <Icon className="w-6 h-6" style={{ color: 'var(--green)' }} />
                    </div>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor:
                          tool.badgeColor === 'green'
                            ? 'rgba(74, 222, 128, 0.12)'
                            : 'rgba(251, 191, 36, 0.12)',
                        color:
                          tool.badgeColor === 'green' ? 'var(--green)' : 'var(--gold)',
                      }}
                    >
                      {tool.badge}
                    </span>
                  </div>

                  <h2
                    className="font-heading font-bold text-lg mb-2"
                    style={{ color: 'var(--text)' }}
                  >
                    {tool.title}
                  </h2>
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {tool.description}
                  </p>

                  {!tool.disabled && (
                    <div className="mt-5">
                      <span
                        className="inline-flex items-center gap-1.5 text-sm font-semibold"
                        style={{ color: 'var(--green)' }}
                      >
                        Open tool
                        <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  )}
                </div>
              )

              return tool.disabled ? (
                <div key={tool.title}>{card}</div>
              ) : (
                <Link key={tool.title} href={tool.href} className="block h-full">
                  {card}
                </Link>
              )
            })}
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
