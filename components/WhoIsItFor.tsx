'use client'

import { motion } from 'framer-motion'
import AnimatedCard from './AnimatedCard'

const audiences = [
  {
    title: 'Beginners',
    emoji: '🃏',
    description: 'New to poker? Start with ready-to-use GTO opening ranges and build solid fundamentals from day one.',
  },
  {
    title: 'Intermediate Players',
    emoji: '🎯',
    description: 'Already grinding cash games or tournaments? Sharpen your preflop game and eliminate leaks in your ranges.',
  },
  {
    title: 'Serious Students',
    emoji: '📈',
    description: 'Want to take your game to the next level? Access comprehensive training tools with our premium features.',
  },
]

export default function WhoIsItFor() {
  return (
    <section className="relative py-24 md:py-36 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          Built for Players{' '}
          <span className="text-gradient">Like You</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <AnimatedCard key={audience.title} delay={index * 0.1}>
              <div className="text-4xl mb-4">{audience.emoji}</div>
              <h3 className="font-heading text-xl font-bold text-text mb-3">
                {audience.title}
              </h3>
              <p className="text-textSecondary leading-relaxed">
                {audience.description}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}
