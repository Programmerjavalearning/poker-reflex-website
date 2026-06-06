'use client'

import { motion } from 'framer-motion'
import { Layers, Users, BarChart3, Award, History, Flame } from 'lucide-react'
import AnimatedCard from './AnimatedCard'

const features = [
  {
    icon: Layers,
    title: 'Complete Preflop Coverage',
    description: 'Train open, 3-bet, 4-bet, and all-in decisions. Master every preflop situation from facing raises to complex multi-street scenarios.',
  },
  {
    icon: Users,
    title: '6-Max & 9-Max Support',
    description: 'Train both formats with their own ranges. Switch between short-handed cash tables and full ring spots in one tap to match the games you actually play.',
  },
  {
    icon: BarChart3,
    title: 'Multiple Stack Sizes',
    description: 'Practice across different stack depths. Learn how stack sizes change optimal strategy for opens, 3-bets, and 4-bets.',
  },
  {
    icon: Award,
    title: 'ELO Rating & Accuracy',
    description: 'Track your progress with ELO rating and accuracy stats. See yourself improve every session.',
  },
  {
    icon: History,
    title: 'Hand Review & History',
    description: 'Review every decision you made. Learn from mistakes and reinforce correct plays.',
  },
  {
    icon: Flame,
    title: 'Daily Streaks & Sessions',
    description: 'Build consistent habits. 5 minutes a day is enough to improve. Track your daily streaks.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative pt-16 pb-8 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          Everything You Need to{' '}
          <span className="text-gradient">Build GTO Reflexes</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <AnimatedCard key={feature.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="w-fit mb-4"
              >
                <feature.icon className="w-8 h-8 text-green" />
              </motion.div>
              <h3 className="font-heading text-xl font-bold text-text mb-2">
                {feature.title}
              </h3>
              <p className="text-textSecondary leading-relaxed">
                {feature.description}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}
