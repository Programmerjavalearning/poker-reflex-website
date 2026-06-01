import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SITE_URL } from '@/lib/brand'

export const metadata: Metadata = {
  title: 'Privacy Policy | Poker Reflex',
  description: 'Privacy Policy for the Poker Reflex poker training app. Learn how your data is collected, stored, and used.',
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },
  openGraph: {
    title: 'Privacy Policy | Poker Reflex',
    description: 'Privacy Policy for the Poker Reflex poker training app. Learn how your data is collected, stored, and used.',
    url: `${SITE_URL}/privacy-policy`,
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
            Last updated: May 29, 2026
          </p>

          <div
            style={{
              fontSize: '17px',
              lineHeight: '1.75',
              color: 'var(--text-secondary)',
            }}
          >
            <p>
              This Privacy Policy describes how Poker Reflex handles data in the current production
              app. Account creation is optional: you can use all training features without signing in.
            </p>

            <h2
              className="font-heading font-bold text-xl md:text-2xl mt-10 mb-4 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              Local training data
            </h2>
            <p>
              Poker Reflex is local-first. Training history, decisions, progress, ELO, streaks,
              onboarding state, review prompt state, and app preferences are stored on your device
              so the app can work fully offline.
            </p>
            <p className="mt-3">
              Reset All Data clears gameplay progress stored on the device. Some account prompt
              and device settings may remain so the app can keep basic preferences.
            </p>

            <h2
              className="font-heading font-bold text-xl md:text-2xl mt-10 mb-4 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              Optional account data
            </h2>
            <p>
              If you create or sign in to an account, Poker Reflex uses Supabase Auth for email
              magic link sign-in — no password is required. Supabase stores your account email,
              account identifier, session metadata, and authentication state.
            </p>
            <p className="mt-3">
              The app may also store profile fields you choose, including username and the local
              guest profile identifier used to connect local app data to your account.
            </p>

            <h2
              className="font-heading font-bold text-xl md:text-2xl mt-10 mb-4 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              Optional cloud backup & cross-device restore
            </h2>
            <p>
              When you are signed in, Poker Reflex can upload your retained training data to
              Supabase for cloud backup. This may include sessions, hands, decisions, timestamps,
              positions, actions, correctness, ELO history, progress snapshots, sync batch
              metadata, and skipped-entity parse errors.
            </p>
            <p className="mt-3">
              Cloud backup also enables cross-device restore: if you sign in on a new device or
              reinstall the app, your training history and progress are retrieved from the cloud
              and restored locally. Each device is registered individually; the app enforces a
              limit on the number of active devices per account and retains only the most recent
              backup snapshots.
            </p>
            <p className="mt-3">
              Cloud backup is used for app functionality and support. Local training data remains
              the immediate source of truth in the app.
            </p>

            <h2
              className="font-heading font-bold text-xl md:text-2xl mt-10 mb-4 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              Support and feature feedback
            </h2>
            <p>
              Users can submit support requests, bug reports, range feedback, and feature feedback
              in the app. Most categories can be submitted anonymously (without an account).
              Account-related help requires sign-in. Submissions are stored in Supabase and may
              include your account email if signed in, message content, subject, category,
              platform, app version, build version, source screen, and diagnostic context
              included by the app.
            </p>
            <p className="mt-3">
              When you contact Poker Reflex support from within the app, you may choose to attach
              screenshots to help us understand and resolve your issue. Attaching screenshots is
              optional, and you can submit a support request without providing any screenshots.
            </p>
            <p className="mt-3">
              If you attach a screenshot, it may contain personal information depending on what is
              visible in the image you selected. We use support screenshots only to investigate,
              debug, reproduce, and resolve the support request you submitted. We do not use support
              screenshots for advertising, tracking, profiling, or unrelated analytics.
            </p>
            <p className="mt-3">
              Support screenshots are transmitted through our support flow, stored in private
              restricted-access storage, and may be made available to our support/development team
              through temporary access links. Access is limited to team members who need it to
              handle the support request.
            </p>
            <p className="mt-3">
              Poker Reflex uses Resend to send transactional support notification emails to the
              support inbox. Resend may process email delivery metadata for those transactional
              messages. Poker Reflex does not send marketing email from this support flow.
            </p>
            <p className="mt-3">
              Feature voting stores your vote choice and optional comment linked to your account.
              The app may show public aggregate vote counts, but raw individual votes are not public.
            </p>

            <h2
              className="font-heading font-bold text-xl md:text-2xl mt-10 mb-4 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              Data not currently collected
            </h2>
            <ul className="mt-3 space-y-2 pl-6 list-disc">
              <li>No advertising SDK is included in the current app.</li>
              <li>No third-party analytics SDK is included in the current app.</li>
              <li>No third-party crash reporting SDK is included in the current app.</li>
              <li>No payment, purchase receipt, or subscription data is collected yet.</li>
              <li>No marketing email list is implemented.</li>
            </ul>

            <h2
              className="font-heading font-bold text-xl md:text-2xl mt-10 mb-4 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              Audio and device permissions
            </h2>
            <p>
              The app includes sound playback for training feedback. The app does not record audio
              or upload audio to any server. If a future build adds microphone recording or remote
              audio upload, this policy will be updated before release.
            </p>
            <p className="mt-3">
              Poker Reflex may request access to your photo library only when you choose to attach
              screenshots to a support request.
            </p>

            <h2
              className="font-heading font-bold text-xl md:text-2xl mt-10 mb-4 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              Deletion and retention
            </h2>
            <p>
              If you are signed in, you can delete your account from the app in Profile settings.
              Account deletion removes the Supabase Auth account and all app-owned account rows,
              including cloud backup data, support requests, feature votes, and entitlement rows.
              Local training data on your device is preserved unless you separately reset local
              data or uninstall the app.
            </p>
            <p className="mt-3">
              If you cannot access the app, use the{' '}
              <Link
                href="/support"
                className="transition-colors hover:opacity-80"
                style={{ color: 'var(--green)' }}
              >
                support page
              </Link>{' '}
              to request account and data deletion. Some limited records may be retained only
              where needed for security, abuse prevention, or legal compliance.
            </p>
            {/* TODO: Confirm support screenshot retention/deletion timing with product/legal before release. */}

            <h2
              className="font-heading font-bold text-xl md:text-2xl mt-10 mb-4 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              Third-party processors
            </h2>
            <ul className="mt-3 space-y-2 pl-6 list-disc">
              <li>
                <strong style={{ color: 'var(--text)' }}>Supabase</strong> — authentication,
                database storage, Edge Functions, and account deletion.
              </li>
              <li>
                <strong style={{ color: 'var(--text)' }}>Resend</strong> — transactional support
                email delivery when support email is configured.
              </li>
              <li>
                <strong style={{ color: 'var(--text)' }}>Apple and Google platform services</strong>{' '}
                — app distribution, system review prompts, and platform-level purchase services if
                added later.
              </li>
            </ul>

            <h2
              className="font-heading font-bold text-xl md:text-2xl mt-10 mb-4 pl-4"
              style={{ color: 'var(--text)', borderLeft: '3px solid var(--green)' }}
            >
              Contact
            </h2>
            <p>Developer / business name: Poker Reflex Inc.</p>
            <p className="mt-2">
              Privacy contact:{' '}
              <a
                href="mailto:contact@poker-reflex.com"
                className="transition-colors hover:opacity-80"
                style={{ color: 'var(--green)' }}
              >
                contact@poker-reflex.com
              </a>
            </p>
            <p className="mt-2">
              Support:{' '}
              <Link
                href="/support"
                className="transition-colors hover:opacity-80"
                style={{ color: 'var(--green)' }}
              >
                poker-reflex.com/support
              </Link>
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
