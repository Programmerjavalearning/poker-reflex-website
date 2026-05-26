'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function AnimatedCard({ children, className = '', delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      className={`bg-surface rounded-2xl border border-border p-6 md:p-8 hover:shadow-glow-green transition-shadow duration-300 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, delay }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
      style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
    >
      {children}
    </motion.div>
  )
}
