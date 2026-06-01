import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import { BRAND_ASSETS, SITE_URL } from '@/lib/brand'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Poker Reflex: GTO Preflop Trainer App | Master Poker Strategy',
  description: 'Train open, 3-bet, 4-bet, and all-in decisions with our swipe-based GTO poker trainer. Build unshakeable preflop reflexes through fast repetition and clear feedback.',
  keywords: 'poker training, GTO poker, preflop trainer, poker ranges, poker app, poker reflex, poker strategy, 3-bet trainer, 4-bet trainer',
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: BRAND_ASSETS.squareLogoPath,
    shortcut: BRAND_ASSETS.squareLogoPath,
    apple: BRAND_ASSETS.squareLogoPath,
  },
  openGraph: {
    title: 'Poker Reflex: GTO Preflop Trainer',
    description: 'Master open, 3-bet, 4-bet, and all-in decisions. Join players building GTO reflexes with our swipe-based trainer.',
    images: [
      {
        url: BRAND_ASSETS.squareLogoUrl,
        width: 512,
        height: 512,
        alt: 'Poker Reflex logo',
      },
    ],
    url: SITE_URL,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poker Reflex: GTO Preflop Trainer',
    description: 'Train open, 3-bet, 4-bet, and all-in scenarios. Master every preflop decision with simple swipes.',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        {/* Skip to main content for keyboard/screen reader users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-green focus:text-background focus:rounded-lg focus:font-semibold"
        >
          Skip to main content
        </a>

        {/* JSON-LD structured data */}
        <Script id="schema-app" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MobileApplication',
            name: 'Poker Reflex',
            description: 'Train open, 3-bet, 4-bet, and all-in preflop decisions with a swipe-based GTO poker trainer.',
            operatingSystem: 'ANDROID, IOS',
            applicationCategory: 'GameApplication',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', ratingCount: '80' },
            url: SITE_URL,
            installUrl: 'https://play.google.com/store/apps/details?id=com.alexischup.pokerreflex',
          })}
        </Script>
        <Script id="schema-organization" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Poker Reflex',
            url: SITE_URL,
            logo: BRAND_ASSETS.squareLogoUrl,
          })}
        </Script>

        {children}
      </body>
    </html>
  )
}
