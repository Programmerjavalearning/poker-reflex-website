'use client'

import { motion } from 'framer-motion'
import { Lock, CreditCard, Globe, Zap } from 'lucide-react'

const badges = [
  {
    icon: Lock,
    title: 'Privacy-First',
    description: 'No data collection',
  },
  {
    icon: CreditCard,
    title: 'No Credit Card',
    description: 'Start training immediately',
  },
  {
    icon: Globe,
    title: 'Global',
    description: 'Available in 50+ countries',
  },
  {
    icon: Zap,
    title: 'Fast Setup',
    description: 'Ready in 30 seconds',
  },
]

export default function TrustBadges() {
  return (
    <section className="relative py-12 px-4 border-t border-border/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              className="flex flex-col items-center text-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, type: 'spring', stiffness: 300, damping: 30 }}
            >
              <badge.icon className="w-6 h-6 text-green" />
              <p className="text-text text-sm font-semibold">{badge.title}</p>
              <p className="text-textSecondary text-xs">{badge.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
