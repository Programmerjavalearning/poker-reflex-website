import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Poker Reflex',
  description: 'Privacy Policy for the Poker Reflex poker training app. Learn how your data is handled.',
  alternates: {
    canonical: 'https://poker-reflex.com/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Poker Reflex',
    description: 'Privacy Policy for the Poker Reflex poker training app. Learn how your data is handled.',
    url: 'https://poker-reflex.com/privacy-policy',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy | Poker Reflex',
    description: 'Privacy Policy for the Poker Reflex poker training app.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-sm mb-12" style={{ color: 'var(--text-secondary)' }}>
            Last updated: March 25, 2026
          </p>

          <div
            style={{
              fontSize: '17px',
              lineHeight: '1.75',
              color: 'var(--text-secondary)',
            }}
          >
            <p>
              This Privacy Policy explains how Poker Reflex appears to handle information based on
              the current mobile app codebase reviewed for this website. If the app's data practices
              change, this page should be updated before release.
            </p>

            <h2
              className="font-heading font-bold text-xl md:text-2xl mt-10 mb-4 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              What Poker Reflex is
            </h2>
            <p>
              Poker Reflex is a poker training app shell being prepared for a new provider-backed
              range engine. Current builds may show range and training features as unavailable.
            </p>

            <h2
              className="font-heading font-bold text-xl md:text-2xl mt-10 mb-4 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              Data the app appears to store
            </h2>
            <p>
              Based on the current codebase, the app appears to store most user data locally on the
              device using local app storage.
            </p>
            <ul className="mt-3 space-y-2 pl-6 list-disc">
              <li>
                Gameplay progress such as ELO, streaks, total swipes, and correct swipes.
              </li>
              <li>
                Training history, including timestamps, actions taken, correctness, position, stack
                depth, hand, and expected action.
              </li>
              <li>
                Onboarding and review-prompt state used to control in-app experience.
              </li>
            </ul>

            <h2
              className="font-heading font-bold text-xl md:text-2xl mt-10 mb-4 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              Data the app does not clearly appear to collect
            </h2>
            <ul className="mt-3 space-y-2 pl-6 list-disc">
              <li>No account creation or login flow was identified in the reviewed codebase.</li>
              <li>
                No server-side user profile or cloud sync flow was identified in the reviewed
                codebase.
              </li>
              <li>
                No advertising SDKs, payment SDKs, or third-party analytics/crash reporting SDKs
                were identified in the reviewed codebase.
              </li>
            </ul>

            <h2
              className="font-heading font-bold text-xl md:text-2xl mt-10 mb-4 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              Audio and device permissions
            </h2>
            <p>
              The current Android app configuration declares audio-related permissions, including
              microphone and audio settings permissions. The reviewed source code clearly includes
              in-app sound playback for feedback sounds. The reviewed source code did not clearly
              show remote audio upload or server-side audio processing.
            </p>
            <p className="mt-3">
              If microphone capture or recording is enabled in a production release, this policy
              should be updated to describe that use more specifically.
            </p>

            <h2
              className="font-heading font-bold text-xl md:text-2xl mt-10 mb-4 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              How the stored data is used
            </h2>
            <ul className="mt-3 space-y-2 pl-6 list-disc">
              <li>To run the training flow and show whether a decision is correct.</li>
              <li>To calculate performance statistics and ELO progress.</li>
              <li>To preserve onboarding state between sessions.</li>
              <li>
                To trigger native in-app store review prompts after certain milestones.
              </li>
            </ul>

            <h2
              className="font-heading font-bold text-xl md:text-2xl mt-10 mb-4 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              Where data is stored
            </h2>
            <p>
              Based on the current codebase, user data appears to be stored on the device. No
              remote database or account-backed sync service was clearly identified.
            </p>

            <h2
              className="font-heading font-bold text-xl md:text-2xl mt-10 mb-4 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              Your choices
            </h2>
            <p>
              The app includes an in-app Reset All Data option for gameplay progress and related
              stored data. Based on the current code, some one-time onboarding flags may remain
              after that reset. Removing the app or clearing app data through device settings may
              remove remaining local app data.
            </p>

            <h2
              className="font-heading font-bold text-xl md:text-2xl mt-10 mb-4 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              Third-party services
            </h2>
            <p>
              The app uses standard mobile app libraries and platform services to run on the device.
              Based on the reviewed codebase, no separate third-party analytics, crash-reporting,
              ad-network, or payment service integration was clearly identified.
            </p>

            <h2
              className="font-heading font-bold text-xl md:text-2xl mt-10 mb-4 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              Contact
            </h2>
            <p>Developer / business name: Poker Reflex Inc.</p>
            <p className="mt-2">
              Privacy contact email:{' '}
              <a
                href="mailto:contact@poker-reflex.com"
                className="transition-colors hover:opacity-80"
                style={{ color: 'var(--green)' }}
              >
                contact@poker-reflex.com
              </a>
            </p>
            <p className="mt-2">
              Support contact email:{' '}
              <a
                href="mailto:contact@poker-reflex.com"
                className="transition-colors hover:opacity-80"
                style={{ color: 'var(--green)' }}
              >
                contact@poker-reflex.com
              </a>
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
