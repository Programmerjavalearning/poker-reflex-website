import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Poker Reflex',
  description:
    'Get in touch with Poker Reflex for partnerships, creator collaborations, press inquiries, or general questions.',
  alternates: {
    canonical: 'https://poker-reflex.com/contact',
  },
  openGraph: {
    title: 'Contact Poker Reflex',
    description:
      'Partnerships, creators, press, or general inquiries.',
    url: 'https://poker-reflex.com/contact',
    type: 'website',
    images: ['/logo.png'],
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
