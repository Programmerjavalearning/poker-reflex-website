'use client'

import { motion } from 'framer-motion'
import { Download, Zap, TrendingUp } from 'lucide-react'

const steps = [
  {
    number: 1,
    icon: Download,
    title: 'Download & Open',
    description: 'Get Poker Reflex from Google Play or App Store. Create your account in seconds.',
  },
  {
    number: 2,
    icon: Zap,
    title: 'Swipe & Learn',
    description: 'See a hand (e.g., A♠K♠) and position (e.g., UTG). Swipe right to open, left to fold. Get instant GTO feedback.',
  },
  {
    number: 3,
    icon: TrendingUp,
    title: 'Track Progress',
    description: 'Build streaks, improve your ELO rating, and watch your accuracy climb day by day.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-36 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          Train Preflop in{' '}
          <span className="text-gradient">3 Simple Steps</span>
        </motion.h2>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-gold via-green to-gold opacity-30" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30, delay: index * 0.15 }}
              >
                {/* Number circle */}
                <div className="relative w-28 h-28 rounded-full bg-surface border-2 border-gold flex items-center justify-center mb-6 z-10">
                  <span className="font-heading text-3xl font-bold text-gold">
                    {step.number}
                  </span>
                  <step.icon className="absolute -bottom-1 -right-1 w-8 h-8 text-green bg-background rounded-full p-1.5 border border-border" />
                </div>

                <h3 className="font-heading text-xl font-bold text-text mb-3">
                  {step.title}
                </h3>
                <p className="text-textSecondary leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
