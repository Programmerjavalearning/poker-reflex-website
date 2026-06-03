import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SITE_URL } from '@/lib/brand'

export const metadata: Metadata = {
  title: 'Support | Poker Reflex',
  description: 'Get help with Poker Reflex. Contact support, manage your account, request data deletion, and learn about common topics.',
  alternates: {
    canonical: `${SITE_URL}/support`,
  },
  openGraph: {
    title: 'Support | Poker Reflex',
    description: 'Get help with Poker Reflex. Contact support, manage your account, request data deletion, and learn about common topics.',
    url: `${SITE_URL}/support`,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Support | Poker Reflex',
    description: 'Get help with Poker Reflex. Contact support, manage your account, or request data deletion.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function SupportPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20" style={{ backgroundColor: 'var(--background)' }}>
        <article className="max-w-[720px] mx-auto px-6 py-16">

          {/* Back to home */}
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm mb-8 transition-colors hover:opacity-80"
            style={{ color: 'var(--green)' }}
          >
            ← Back to Home
          </Link>

          <h1
            className="font-heading font-bold text-3xl md:text-4xl mb-3"
            style={{ color: 'var(--text)' }}
          >
            Support
          </h1>
          <p className="text-sm mb-12" style={{ color: 'var(--text-secondary)' }}>
            Questions, bug reports, account help, and data deletion requests
          </p>

          <div
            style={{
              fontSize: '17px',
              lineHeight: '1.75',
              color: 'var(--text-secondary)',
            }}
          >
            <p>
              For support questions, bug reports, account help, or privacy-related requests,
              contact us at{' '}
              <a
                href="mailto:contact@poker-reflex.com"
                className="transition-colors hover:opacity-80"
                style={{ color: 'var(--green)' }}
              >
                contact@poker-reflex.com
              </a>
              .
            </p>
            <p className="mt-3">
              Signed-in users can also contact the team directly from inside the app. In-app
              support submissions are stored with your account so you can track your own
              support history.
            </p>

            <h2
              className="font-heading font-bold text-xl md:text-2xl mt-10 mb-4 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              Common topics
            </h2>

            <p className="mt-4">
              <strong style={{ color: 'var(--text)' }}>Do I need an account?</strong>
              <br />
              No. Account creation is optional. All training features are available locally and
              work offline without signing in.
            </p>

            <p className="mt-4">
              <strong style={{ color: 'var(--text)' }}>How do I reset local progress?</strong>
              <br />
              Use the in-app Profile or Statistics reset action to clear local gameplay progress
              on your device.
            </p>

            <p className="mt-4">
              <strong style={{ color: 'var(--text)' }}>How do I reset cloud backup data?</strong>
              <br />
              If you are signed in, go to Profile account settings and use the cloud data reset
              option. This clears your cloud backup without affecting local training data on your
              device.
            </p>

            <p className="mt-4">
              <strong style={{ color: 'var(--text)' }}>
                My progress didn&apos;t restore after reinstalling. What should I do?
              </strong>
              <br />
              Cross-device restore requires an account. Sign in with the same email you used
              before and your cloud backup will be retrieved automatically. If you trained without
              an account, progress was stored only on the device and cannot be restored after
              uninstall.
            </p>

            <p className="mt-4">
              <strong style={{ color: 'var(--text)' }}>How do I delete my account?</strong>
              <br />
              In the app, go to Profile settings and use Delete Account. This deletes the
              Supabase Auth account and all app-owned account data, including cloud backup,
              support requests, and feature votes. Local training data on the device is
              preserved unless you separately reset it.
            </p>

            <p className="mt-4">
              <strong style={{ color: 'var(--text)' }}>
                I cannot access the app. How do I request account deletion?
              </strong>
              <br />
              Email{' '}
              <a
                href="mailto:contact@poker-reflex.com"
                className="transition-colors hover:opacity-80"
                style={{ color: 'var(--green)' }}
              >
                contact@poker-reflex.com
              </a>{' '}
              from the email address used for your Poker Reflex account, or include that account
              email in your message. Ask to delete your Poker Reflex account and associated data.
            </p>

            <h2
              className="font-heading font-bold text-xl md:text-2xl mt-10 mb-4 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              When contacting support
            </h2>
            <p>
              To help us resolve your issue quickly, please include:
            </p>
            <p className="mt-3">
              You can optionally attach screenshots when contacting support from inside the app.
              Screenshots help us understand bugs or account/app issues more quickly, but they are
              not required. Before attaching a screenshot, please make sure you are comfortable
              sharing everything visible in the image.
            </p>
            <ul className="mt-3 space-y-2 pl-6 list-disc">
              <li>Device model and operating system version</li>
              <li>App version and build version (visible in Profile settings)</li>
              <li>Account email if relevant</li>
              <li>A short description of the issue</li>
            </ul>
            <p className="mt-3">
              Do not include passwords, one-time passwords, magic link URLs, access tokens, or
              other secrets.
            </p>

            <h2
              className="font-heading font-bold text-xl md:text-2xl mt-10 mb-4 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              Developer details
            </h2>
            <p>Developer / business name: Poker Reflex Inc.</p>
            <p className="mt-2">
              Contact:{' '}
              <a
                href="mailto:contact@poker-reflex.com"
                className="transition-colors hover:opacity-80"
                style={{ color: 'var(--green)' }}
              >
                contact@poker-reflex.com
              </a>
            </p>
            <p className="mt-4">
              For full details on how your data is handled, see our{' '}
              <Link
                href="/privacy-policy"
                className="transition-colors hover:opacity-80"
                style={{ color: 'var(--green)' }}
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          {/* Back to home bottom */}
          <div className="mt-16 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-sm transition-colors hover:opacity-80"
              style={{ color: 'var(--green)' }}
            >
              ← Back to Home
            </Link>
          </div>

        </article>
      </main>
      <Footer />
    </>
  )
}
