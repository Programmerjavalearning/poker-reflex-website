'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    console.log('Email submitted:', email)
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="relative py-16 md:py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="relative rounded-2xl p-6 sm:p-10 md:p-14 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(22, 28, 37, 0.95) 0%, rgba(13, 17, 23, 0.85) 100%)',
            border: '1px solid rgba(74, 222, 128, 0.45)',
            boxShadow: '0 0 60px rgba(74, 222, 128, 0.2)',
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {submitted ? (
            <div className="text-center">
              <p className="text-green text-3xl font-bold mb-2">You&apos;re in!</p>
              <p className="text-textSecondary text-lg">We&apos;ll keep you updated on new features.</p>
            </div>
          ) : (
            <>
              {/* Radial glow inside */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green/8 via-transparent to-transparent pointer-events-none" />

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 rounded-2xl bg-green/10 border border-green/20 flex items-center justify-center">
                  <svg className="w-7 h-7 text-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
              </div>

              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text mb-3 text-center">
                Stay Updated on New Features
              </h2>
              <p className="text-textSecondary text-lg md:text-xl text-center mb-10">
                Get notified when we release new training scenarios, game modes, and major updates.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  autoComplete="email"
                  className="flex-1 px-6 py-4 rounded-xl text-text text-lg placeholder-textSecondary outline-none transition-all duration-200"
                  style={{
                    background: '#0d1117',
                    border: '1px solid #30363d',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.border = '1px solid rgba(74, 222, 128, 0.6)'
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(74, 222, 128, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.border = '1px solid #30363d'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-green text-background text-lg font-semibold rounded-xl hover:scale-105 hover:brightness-110 transition-all duration-200 whitespace-nowrap"
                >
                  Notify Me
                </button>
              </form>

              <p className="text-textSecondary text-xs text-center mt-4">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </>
          )}
        </motion.div>
      </div>
    </section>
  )
}
