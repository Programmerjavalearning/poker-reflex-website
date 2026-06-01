import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BRAND_ASSET_LIST, SITE_URL } from '@/lib/brand'

export const metadata: Metadata = {
  title: 'Brand Assets | Poker Reflex',
  description: 'Public Poker Reflex logo assets for web, email, and SEO usage.',
  alternates: {
    canonical: `${SITE_URL}/brand`,
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: 'Brand Assets | Poker Reflex',
    description: 'Public Poker Reflex logo assets.',
    url: `${SITE_URL}/brand`,
    type: 'website',
    images: ['/brand/poker-reflex-logo-square-512.png'],
  },
  twitter: {
    card: 'summary',
    title: 'Brand Assets | Poker Reflex',
    description: 'Public Poker Reflex logo assets.',
  },
}

export default function BrandPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-background pt-20">
        <section className="mx-auto max-w-5xl px-6 py-16">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-green">
              Poker Reflex
            </p>
            <h1 className="font-heading text-4xl font-bold text-text md:text-5xl">
              Brand Assets
            </h1>
            <p className="mt-4 text-base leading-7 text-textSecondary">
              Static public logo URLs for website metadata, transactional emails, and app
              references.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {BRAND_ASSET_LIST.map((asset) => (
              <article
                key={asset.path}
                className="rounded-lg border border-border bg-surface p-5"
              >
                <div className="mb-5 flex aspect-square items-center justify-center rounded-md border border-border bg-background p-6">
                  <img
                    src={asset.path}
                    alt={`${asset.name} preview`}
                    width={160}
                    height={160}
                    className="h-auto max-h-full w-auto max-w-full rounded-md"
                  />
                </div>

                <h2 className="font-heading text-lg font-semibold text-text">{asset.name}</h2>
                <p className="mt-1 text-sm text-textSecondary">{asset.usage}</p>

                <div className="mt-4 rounded-md border border-border bg-background p-3">
                  <code className="block break-all text-xs leading-5 text-textSecondary">
                    {asset.url}
                  </code>
                </div>

                <a
                  href={asset.path}
                  className="mt-4 inline-flex text-sm font-semibold text-green transition-colors hover:text-green/80"
                >
                  Open asset
                </a>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-border bg-surface p-5">
            <h2 className="font-heading text-lg font-semibold text-text">Recommended email HTML</h2>
            <div className="mt-4 rounded-md border border-border bg-background p-3">
              <code className="block break-all text-xs leading-5 text-textSecondary">
                {'<img src="https://www.poker-reflex.com/brand/poker-reflex-logo-email.png" width="160" alt="Poker Reflex" />'}
              </code>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
