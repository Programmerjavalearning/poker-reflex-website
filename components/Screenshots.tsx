'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const screenshots = [
  { src: '/screenshots/screenshot-1.png', alt: 'Poker Reflex - Main training interface with swipe gestures' },
  { src: '/screenshots/screenshot-2.png', alt: 'Poker Reflex - Hand position selection screen' },
  { src: '/screenshots/screenshot-3.png', alt: 'Poker Reflex - ELO rating and progress tracking' },
  { src: '/screenshots/screenshot-4.png', alt: 'Poker Reflex - Custom range editor' },
  { src: '/screenshots/screenshot-5.png', alt: 'Poker Reflex - Hand history review' },
]

export default function Screenshots() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? screenshots.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === screenshots.length - 1 ? 0 : c + 1))

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
          See It{' '}
          <span className="text-gradient">in Action</span>
        </motion.h2>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.1 }}
        >
          {/* Main carousel */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="relative aspect-video w-full">
              {screenshots.map((screenshot, index) => (
                <motion.div
                  key={screenshot.src}
                  className="absolute inset-0"
                  initial={false}
                  animate={{
                    opacity: index === current ? 1 : 0,
                    scale: index === current ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  style={{ pointerEvents: index === current ? 'auto' : 'none' }}
                >
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-2 md:-left-14 top-1/2 -translate-y-1/2 w-10 h-10 bg-surface border border-border rounded-full flex items-center justify-center text-text hover:bg-green hover:text-background hover:border-green transition-all hover:scale-110"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 md:-right-14 top-1/2 -translate-y-1/2 w-10 h-10 bg-surface border border-border rounded-full flex items-center justify-center text-text hover:bg-green hover:text-background hover:border-green transition-all hover:scale-110"
            aria-label="Next screenshot"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === current ? 'bg-green w-6' : 'bg-border hover:bg-textSecondary'
                }`}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
