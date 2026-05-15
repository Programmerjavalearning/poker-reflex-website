'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    text: "Finally, a GTO trainer I actually use every day. The swipe interface makes training feel like a game.",
    author: 'Alex M.',
    role: 'Cash Game Grinder',
  },
  {
    id: 2,
    text: "I've tried expensive trainers before. Poker Reflex gives me the same quality for free. The 3-bet scenarios are game-changing.",
    author: 'Sarah K.',
    role: 'Tournament Player',
  },
  {
    id: 3,
    text: "Best preflop trainer on the market. Period. The progress tracking keeps me motivated, and I've already seen improvement at the tables.",
    author: 'James R.',
    role: 'Online Pro',
  },
  {
    id: 4,
    text: "The guided sessions are brilliant. Being able to review my decisions after each session has accelerated my learning curve massively.",
    author: 'Marcus L.',
    role: 'Micro Stakes Player',
  },
]

function TestimonialCard({ t }: { t: typeof testimonials[number] }) {
  return (
    <motion.div
      className="relative rounded-3xl p-8 overflow-hidden flex-shrink-0"
      style={{
        background: '#161c25',
        border: '1px solid #30363d',
      }}
      whileHover={{
        y: -6,
        boxShadow: '0 16px 40px rgba(74, 222, 128, 0.12)',
        borderColor: 'rgba(74, 222, 128, 0.3)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Left accent bar */}
      <div
        className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full"
        style={{ background: 'linear-gradient(180deg, #4ade80, #22c55e)' }}
      />
      <p className="text-amber-400 text-lg mb-4 ml-2">⭐⭐⭐⭐⭐</p>
      <p className="text-text leading-relaxed mb-6 ml-2">&ldquo;{t.text}&rdquo;</p>
      <div className="ml-2">
        <p className="text-text font-semibold">{t.author}</p>
        <p className="text-textSecondary text-sm">{t.role}</p>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [perView, setPerView] = useState(3)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setPerView(1)
      else if (window.innerWidth < 1024) setPerView(2)
      else setPerView(3)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - perView)
  const totalGroups = Math.ceil(testimonials.length / perView)

  const next = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const goToGroup = (groupIndex: number) => {
    const newIndex = groupIndex * perView
    setDirection(newIndex > currentIndex ? 1 : -1)
    setCurrentIndex(Math.min(newIndex, maxIndex))
  }

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + perView)
  const showControls = testimonials.length > perView
  const activeGroup = Math.floor(currentIndex / perView)

  return (
    <section className="relative py-16 md:py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          What Players{' '}
          <span className="text-gradient">Say</span>
        </motion.h2>

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Left arrow */}
          {showControls && (
            <button
              onClick={prev}
              aria-label="Previous testimonials"
              className="absolute top-1/2 -translate-y-1/2 left-2 md:-left-14 w-11 h-11 rounded-full flex items-center justify-center z-10 hover:scale-110 transition-transform"
              style={{
                background: 'rgba(22, 28, 37, 0.9)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(74, 222, 128, 0.3)',
              }}
            >
              <ChevronLeft className="w-5 h-5 text-green" />
            </button>
          )}

          {/* Cards */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="grid gap-6 mx-14 sm:mx-0"
              style={{ gridTemplateColumns: `repeat(${perView}, minmax(0, 1fr))` }}
            >
              {visibleTestimonials.map((t) => (
                <TestimonialCard key={t.id} t={t} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Right arrow */}
          {showControls && (
            <button
              onClick={next}
              aria-label="Next testimonials"
              className="absolute top-1/2 -translate-y-1/2 right-2 md:-right-14 w-11 h-11 rounded-full flex items-center justify-center z-10 hover:scale-110 transition-transform"
              style={{
                background: 'rgba(22, 28, 37, 0.9)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(74, 222, 128, 0.3)',
              }}
            >
              <ChevronRight className="w-5 h-5 text-green" />
            </button>
          )}
        </div>

        {/* Dot indicators */}
        {showControls && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: totalGroups }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToGroup(index)}
                aria-label={`Go to testimonial group ${index + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: activeGroup === index ? 32 : 8,
                  height: 8,
                  backgroundColor: activeGroup === index ? '#4ade80' : 'rgba(75, 85, 99, 0.8)',
                  boxShadow: activeGroup === index ? '0 0 10px rgba(74, 222, 128, 0.5)' : 'none',
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

