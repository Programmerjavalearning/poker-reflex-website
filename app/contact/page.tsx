'use client'

import { useState, FormEvent } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const INQUIRY_TYPES = [
  'Partnership',
  'Creator / Affiliate',
  'Press / Media',
  'General inquiry',
] as const

const CATEGORIES = [
  {
    emoji: '🤝',
    title: 'Partnerships',
    description: 'Business opportunities and integrations',
  },
  {
    emoji: '📣',
    title: 'Creators & Affiliates',
    description: 'Content creators, streamers, and coaches who want to work with us',
  },
  {
    emoji: '📰',
    title: 'Press & Media',
    description: 'Interviews, features, and press inquiries',
  },
  {
    emoji: '💬',
    title: 'General Inquiries',
    description: 'Anything else',
  },
]

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setErrorMessage('')

    // Client-side validation
    if (!inquiryType || !name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage('Please fill in all required fields.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.')
      return
    }

    if (message.trim().length < 20) {
      setErrorMessage('Your message needs to be at least 20 characters.')
      return
    }

    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          inquiryType,
          name: name.trim(),
          email: email.trim(),
          company: company.trim(),
          message: message.trim(),
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setStatus('error')
        setErrorMessage(data.error || 'Something went wrong. Please try again.')
        return
      }

      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <>
      <Header />
      <main id="main-content" className="pt-20" style={{ backgroundColor: 'var(--background)' }}>

        {/* Hero */}
        <section className="py-16 md:py-20 px-6">
          <div className="max-w-[720px] mx-auto text-center">
            <h1
              className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4"
              style={{ color: 'var(--text)' }}
            >
              Get in Touch
            </h1>
            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Partnerships, affiliations, press, or a question. We read every message.
            </p>
          </div>
        </section>

        {/* Category Cards */}
        <section className="px-6 pb-12">
          <div className="max-w-[720px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="rounded-xl border p-5"
                style={{
                  backgroundColor: 'var(--surface)',
                  borderColor: 'var(--border)',
                }}
              >
                <div className="text-2xl mb-2">{cat.emoji}</div>
                <h3
                  className="font-heading font-bold text-base mb-1"
                  style={{ color: 'var(--text)' }}
                >
                  {cat.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="px-6 pb-16 md:pb-20">
          <div className="max-w-[720px] mx-auto">

            {status === 'success' ? (
              <div
                className="rounded-xl border p-8 text-center"
                style={{
                  backgroundColor: 'var(--surface)',
                  borderColor: 'rgba(74, 222, 128, 0.35)',
                }}
              >
                <div className="text-4xl mb-4">✓</div>
                <h2
                  className="font-heading font-bold text-xl mb-2"
                  style={{ color: 'var(--green)' }}
                >
                  Message sent!
                </h2>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Thanks, we'll get back to you within a few days.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-xl border p-6 md:p-8 space-y-6"
                style={{
                  backgroundColor: 'var(--surface)',
                  borderColor: 'var(--border)',
                }}
              >
                {/* Inquiry Type */}
                <div>
                  <label
                    htmlFor="inquiryType"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: 'var(--text)' }}
                  >
                    Inquiry Type <span style={{ color: 'var(--green)' }}>*</span>
                  </label>
                  <select
                    id="inquiryType"
                    required
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors"
                    style={{
                      backgroundColor: 'var(--background)',
                      borderColor: 'var(--border)',
                      color: inquiryType ? 'var(--text)' : 'var(--text-secondary)',
                    }}
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    {INQUIRY_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: 'var(--text)' }}
                  >
                    Name <span style={{ color: 'var(--green)' }}>*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    maxLength={100}
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:border-[#4ade80]"
                    style={{
                      backgroundColor: 'var(--background)',
                      borderColor: 'var(--border)',
                      color: 'var(--text)',
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: 'var(--text)' }}
                  >
                    Email <span style={{ color: 'var(--green)' }}>*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    maxLength={200}
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:border-[#4ade80]"
                    style={{
                      backgroundColor: 'var(--background)',
                      borderColor: 'var(--border)',
                      color: 'var(--text)',
                    }}
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: 'var(--text)' }}
                  >
                    Company / Organization{' '}
                    <span className="font-normal" style={{ color: 'var(--text-secondary)' }}>
                      (optional)
                    </span>
                  </label>
                  <input
                    id="company"
                    type="text"
                    maxLength={200}
                    placeholder="Your company or organization"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:border-[#4ade80]"
                    style={{
                      backgroundColor: 'var(--background)',
                      borderColor: 'var(--border)',
                      color: 'var(--text)',
                    }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: 'var(--text)' }}
                  >
                    Message <span style={{ color: 'var(--green)' }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    minLength={20}
                    maxLength={5000}
                    rows={5}
                    placeholder="Tell us a bit about your project or what you're looking for"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors resize-y focus:border-[#4ade80]"
                    style={{
                      backgroundColor: 'var(--background)',
                      borderColor: 'var(--border)',
                      color: 'var(--text)',
                    }}
                  />
                </div>

                {/* Error message */}
                {status === 'error' && errorMessage && (
                  <p className="text-sm" style={{ color: '#ef4444' }}>
                    {errorMessage}
                  </p>
                )}
                {status === 'idle' && errorMessage && (
                  <p className="text-sm" style={{ color: '#ef4444' }}>
                    {errorMessage}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full sm:w-auto px-8 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: 'var(--green)',
                    color: 'var(--background)',
                  }}
                >
                  {status === 'sending' ? (
                    <>
                      <svg
                        className="w-4 h-4 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
