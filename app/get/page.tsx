import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { APP_STORE_URL, PLAY_STORE_URL, SITE_URL } from '@/lib/brand'
import GetQr from '@/components/GetQr'

// User-agent based, so it must run per request.
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Download Poker Reflex (Free)',
  description:
    'Install Poker Reflex, the free swipe-based GTO preflop trainer, on iOS or Android.',
  alternates: { canonical: `${SITE_URL}/get` },
  // Utility redirect page: keep it out of the index (no doorway-page risk).
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Download Poker Reflex (Free)',
    description: 'Install Poker Reflex, the free GTO preflop trainer, on iOS or Android.',
    url: `${SITE_URL}/get`,
    type: 'website',
    images: ['/brand/poker-reflex-logo-square-512.png'],
  },
  twitter: {
    card: 'summary',
    title: 'Download Poker Reflex (Free)',
    description: 'Install Poker Reflex, the free GTO preflop trainer, on iOS or Android.',
  },
}

// Bots and link-preview crawlers should see the real page (with noindex + OG
// tags), not a redirect. Everyone else on a phone gets sent straight to a store.
const BOT_UA =
  /bot|crawl|spider|slurp|googlebot|bingpreview|facebookexternalhit|twitterbot|embedly|quora|pinterest|whatsapp|telegram|discordbot|linkedinbot|slackbot|w3c_validator/i

// Tag the outbound link with a campaign source for free install attribution:
// Play uses the install referrer, Apple uses the campaign token (ct).
function withSource(base: string, store: 'ios' | 'android', src?: string) {
  if (!src) return base
  const clean = src.replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 40)
  if (!clean) return base
  const sep = base.includes('?') ? '&' : '?'
  if (store === 'android') {
    return `${base}${sep}referrer=${encodeURIComponent(`utm_source=${clean}`)}`
  }
  return `${base}${sep}ct=${encodeURIComponent(clean)}`
}

export default function GetPage({
  searchParams,
}: {
  searchParams: { src?: string }
}) {
  const ua = headers().get('user-agent') || ''
  const src = typeof searchParams?.src === 'string' ? searchParams.src : undefined

  if (!BOT_UA.test(ua)) {
    if (/iPhone|iPad|iPod/i.test(ua)) redirect(withSource(APP_STORE_URL, 'ios', src))
    if (/Android/i.test(ua)) redirect(withSource(PLAY_STORE_URL, 'android', src))
  }

  const playHref = withSource(PLAY_STORE_URL, 'android', src)
  const appHref = withSource(APP_STORE_URL, 'ios', src)

  // Desktop, bots, or unknown devices: a centered card with both stores and a
  // tap-to-enlarge QR.
  return (
    <main
      id="main-content"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4 py-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green/10 blur-[130px]"
      />

      <div className="relative w-full max-w-lg rounded-3xl border border-green/40 bg-surface p-8 text-center shadow-[0_0_70px_-20px_rgba(74,222,128,0.55)] sm:p-12">
        <a href="/" aria-label="Poker Reflex home" className="inline-flex">
          <img
            src="/brand/poker-reflex-logo-square-512.png"
            alt="Poker Reflex"
            width={80}
            height={80}
            className="h-20 w-20 rounded-2xl shadow-lg ring-1 ring-white/10"
          />
        </a>

        <h1 className="mt-6 font-heading text-4xl font-bold text-white md:text-5xl">
          Download <span className="text-gradient">Poker Reflex</span>
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-base leading-7 text-gray-300 md:text-lg">
          The free, swipe-based GTO preflop trainer. Install it on your phone and start
          training in 30 seconds.
        </p>

        <span className="mt-6 inline-flex items-center rounded-full border border-green/40 bg-green/15 px-3 py-1 text-sm font-semibold text-green">
          Free to download
        </span>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={playHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green px-6 py-3.5 font-semibold text-background transition-transform duration-200 glow-green hover:-translate-y-0.5 hover:scale-[1.03] sm:w-auto"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            Google Play
          </a>
          <a
            href={appHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green px-6 py-3.5 font-semibold text-background transition-transform duration-200 glow-green hover:-translate-y-0.5 hover:scale-[1.03] sm:w-auto"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 21.99C7.78997 22.03 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
            </svg>
            App Store
          </a>
        </div>

        <div className="mt-10 flex flex-col items-center border-t border-white/10 pt-8">
          <GetQr />
        </div>
      </div>
    </main>
  )
}
