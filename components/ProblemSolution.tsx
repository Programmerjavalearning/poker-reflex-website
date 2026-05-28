'use client'

import { motion } from 'framer-motion'
import { Smartphone, Target, BarChart2, MapPin } from 'lucide-react'

const differentiators = [
  {
    icon: Smartphone,
    title: 'Simple Swipe Interface',
    description: 'Intuitive left/right swipes make training feel natural and addictive. No complicated menus.',
  },
  {
    icon: Target,
    title: 'Comprehensive GTO Ranges',
    description: 'Professional-grade preflop ranges for every position, UTG through BB, cash games and tournaments.',
  },
  {
    icon: BarChart2,
    title: 'Progress Tracking & Analytics',
    description: 'ELO rating, accuracy stats, and session history give you clear insight into your improvement.',
  },
  {
    icon: MapPin,
    title: 'Position-Specific Training',
    description: 'Focus on the spots that matter most. Train each position independently to identify and fix leaks.',
  },
]

export default function ProblemSolution() {
  return (
    <section className="relative py-24 md:py-36 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          Professional GTO Training,{' '}
          <span className="text-gradient">Simplified</span>
        </motion.h2>

        <motion.p
          className="text-gray-200 text-lg text-center max-w-2xl mx-auto mb-16 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.1 }}
        >
          Poker Reflex combines professional-grade GTO strategy with an intuitive swipe interface. Whether you're learning the fundamentals or refining your ranges, our app makes preflop training engaging and effective.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-surface rounded-2xl border border-border p-6 md:p-8 flex items-start gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-green/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-green" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-white mb-1">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
