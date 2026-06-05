'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'
import { ChevronDown } from 'lucide-react'
import QRCodeBlock from './QRCodeBlock'

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.alexischup.pokerreflex'

const screenshots = [
  { src: '/screenshots/screenshot-1.png', alt: 'Poker Reflex - preflop training interface' },
  { src: '/screenshots/screenshot-2.png', alt: 'Poker Reflex - 3-bet scenario training' },
  { src: '/screenshots/screenshot-3.png', alt: 'Poker Reflex - progress tracking' },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    if (isHovered) return
    const timer = setInterval(nextSlide, 4500)
    return () => clearInterval(timer)
  }, [isHovered, nextSlide])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide()
      if (e.key === 'ArrowRight') nextSlide()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [nextSlide, prevSlide])

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-x-hidden px-4 pt-24 pb-16 md:pb-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-surface" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(74,222,128,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
        {/* Left Column - Text */}
        <div className="lg:col-span-3">
          <motion.h1
            className="font-heading text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.1 }}
          >
            Master Every Preflop Decision with{' '}
            <span className="text-gradient">Simple Swipes</span>
          </motion.h1>

          <motion.p
            className="text-gray-200 text-base sm:text-lg lg:text-xl max-w-xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.2 }}
          >
            Master open, 3-bet, 4-bet, and all-in decisions with our comprehensive GTO trainer. Handle any preflop situation with confidence through fast repetition and clear feedback.
          </motion.p>

          <motion.div
            className="flex flex-col gap-3 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.3 }}
          >
            <div className="flex items-center gap-2 text-text">
              <span className="text-green">✓</span> Make confident preflop decisions every time
            </div>
            <div className="flex items-center gap-2 text-text">
              <span className="text-green">✓</span> Train real spots from your actual games
            </div>
            <div className="flex items-center gap-2 text-text">
              <span className="text-green">✓</span> Watch your game improve session after session
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-6 md:hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.4 }}
          >
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-green text-background font-semibold rounded-xl hover:scale-105 hover:brightness-110 transition-all duration-300 glow-green hover:glow-green-hover"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Download on Google Play
            </a>
            <a
              href="https://apps.apple.com/us/app/poker-reflex/id6761329446"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download on App Store"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-green text-background font-semibold rounded-xl hover:scale-105 hover:brightness-110 transition-all duration-300 glow-green hover:glow-green-hover"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 21.99C7.78997 22.03 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
              </svg>
              Download on App Store
            </a>
          </motion.div>

          <QRCodeBlock variant="hero" />

          {/* Social proof */}
          <motion.div
            className="flex flex-wrap items-center gap-2 font-medium text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="text-base md:text-lg">500+ downloads in under a month</span>
            <span className="hidden sm:inline text-gray-500">•</span>
            <span className="w-full sm:w-auto flex items-center gap-1 whitespace-nowrap flex-shrink-0">
              <span className="text-base md:text-lg">Rated 5.0</span>
              <div className="flex items-center gap-0.5 stars-shimmer">
                <span className="text-xl">⭐</span>
                <span className="text-xl">⭐</span>
                <span className="text-xl">⭐</span>
                <span className="text-xl">⭐</span>
                <span className="text-xl">⭐</span>
              </div>
            </span>
          </motion.div>
        </div>

        {/* Right Column - Clean Screenshot Carousel */}
        <motion.div
          className="lg:col-span-2 flex flex-col items-center mt-4 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 25, delay: 0.3 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Static carousel wrapper */}
          <div className="relative w-full max-w-[240px] sm:max-w-[280px]">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-green/5 blur-3xl rounded-2xl -z-10" />

            {/* Screenshot container - natural image sizing, zero letterboxing */}
            <motion.div
              className="relative overflow-hidden rounded-xl cursor-grab active:cursor-grabbing"
              style={{
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                border: '1px solid rgba(74, 222, 128, 0.12)',
                transform: 'translateZ(0)',
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50) nextSlide()
                else if (info.offset.x > 50) prevSlide()
              }}
            >
              {/* Invisible spacer - always rendered, holds container height, prevents layout shift */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={screenshots[0].src}
                alt=""
                aria-hidden="true"
                className="w-full h-auto block"
                style={{ visibility: 'hidden' }}
                draggable={false}
              />
              {/* Fading screenshot - absolutely positioned over the spacer */}
              <AnimatePresence initial={false} mode="sync">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <motion.img
                  key={currentSlide}
                  src={screenshots[currentSlide].src}
                  alt={screenshots[currentSlide].alt}
                  className="absolute inset-0 w-full h-full block pointer-events-none select-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  draggable={false}
                />
              </AnimatePresence>
            </motion.div>

            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-2 mt-3" role="tablist" aria-label="Screenshot navigation">
              {screenshots.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  role="tab"
                  aria-selected={i === currentSlide}
                  aria-label={`Go to screenshot ${i + 1}`}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === currentSlide ? 10 : 6,
                    height: i === currentSlide ? 10 : 6,
                    backgroundColor: i === currentSlide ? '#4ade80' : 'rgba(75, 85, 99, 0.8)',
                    boxShadow: i === currentSlide ? '0 0 10px rgba(74, 222, 128, 0.6)' : 'none',
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <ChevronDown className="w-6 h-6 text-green opacity-60" />
      </motion.div>
    </section>
  )
}
