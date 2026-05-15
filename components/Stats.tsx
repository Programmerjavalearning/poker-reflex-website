'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function CountUpNumber({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const duration = 2200

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        setCount(target)
      }
    }

    const rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [isInView, target])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

const stats = [
  { value: 200, suffix: '+', label: 'Active Players', subtext: 'growing daily' },
  { value: 500, suffix: '+', label: 'Downloads', subtext: 'in our first month 🚀' },
  { value: 50000, suffix: '+', label: 'Hands Trained', subtext: 'this month' },
  { label: 'User Rating', isText: true, text: '5.0 ⭐', subtext: 'Google Play & App Store' },
]

export default function Stats() {
  return (
    <section className="relative py-16 md:py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green/10 border border-green/20 text-green text-sm font-medium">
            🚀 500+ downloads in our first month
          </span>
        </div>

        <motion.h2
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          Join the Poker Reflex{' '}
          <span className="text-gradient">Community</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30, delay: index * 0.1 }}
            >
              <div className="font-heading text-5xl md:text-6xl font-bold mb-3">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold to-green">
                  {'isText' in stat ? (
                    stat.text
                  ) : (
                    <CountUpNumber target={stat.value!} suffix={stat.suffix} />
                  )}
                </span>
              </div>
              <p className="text-textSecondary text-lg">{stat.label}</p>
              <p className="text-textSecondary/60 text-sm mt-1">{stat.subtext}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
