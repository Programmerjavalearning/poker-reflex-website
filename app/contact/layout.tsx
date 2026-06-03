import type { Metadata } from 'next'
import { BRAND_ASSETS, SITE_URL } from '@/lib/brand'

export const metadata: Metadata = {
  title: 'Contact Us | Poker Reflex',
  description:
    'Get in touch with Poker Reflex for partnerships, creator collaborations, press inquiries, or general questions.',
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: 'Contact Poker Reflex',
    description:
      'Partnerships, creators, press, or general inquiries.',
    url: `${SITE_URL}/contact`,
    type: 'website',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Poker Reflex',
    description:
      'Partnerships, creators, press, or general inquiries.',
    images: [BRAND_ASSETS.squareLogoUrl],
  },
  robots: { index: true, follow: true },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
