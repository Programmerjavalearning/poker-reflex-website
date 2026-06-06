'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef, useCallback } from 'react'
import { QrCode, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { BRAND_ASSETS } from '@/lib/brand'
import QRModal from './QRModal'

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.alexischup.pokerreflex'
const APP_STORE_URL = 'https://apps.apple.com/us/app/poker-reflex/id6761329446'

function DownloadButton() {
  const [isQrOpen, setIsQrOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsQrOpen(true)}
        aria-label="Show QR code to download Poker Reflex"
        className="flex items-center gap-2 bg-green text-background font-semibold px-5 py-2.5 rounded-lg hover:bg-green/90 hover:scale-105 transition-all text-sm"
      >
        Download
        <QrCode className="w-4 h-4" />
      </button>

      <QRModal isOpen={isQrOpen} onClose={() => setIsQrOpen(false)} />
    </>
  )
}

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null)

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Focus trap
  useEffect(() => {
    if (!isOpen || !panelRef.current) return
    const panel = panelRef.current
    const focusableEls = panel.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
    const firstEl = focusableEls[0]
    const lastEl = focusableEls[focusableEls.length - 1]
    firstEl?.focus()

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault()
          lastEl?.focus()
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault()
          firstEl?.focus()
        }
      }
    }
    document.addEventListener('keydown', handleTab)
    return () => document.removeEventListener('keydown', handleTab)
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Slide-in panel */}
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            id="mobile-nav"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="fixed right-0 top-0 bottom-0 z-50 w-80 max-w-[90vw] flex flex-col"
            style={{ backgroundColor: 'var(--surface)', borderLeft: '1px solid var(--border)' }}
          >
            {/* Panel header */}
            <div
              className="flex items-center justify-between px-5 h-20 flex-shrink-0"
              style={{ borderBottom: '1px solid var(--border)' }}
            >
              <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
                <Image
                  src={BRAND_ASSETS.emailLogoPath}
                  alt="Poker Reflex"
                  width={36}
                  height={36}
                  unoptimized
                  className="rounded-lg"
                />
                <span className="font-heading font-bold text-base" style={{ color: 'var(--text)' }}>
                  Poker Reflex
                </span>
              </Link>
              <button
                onClick={onClose}
                className="p-2 rounded-lg transition-colors hover:bg-background"
                aria-label="Close navigation menu"
                style={{ color: 'var(--text-secondary)' }}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col px-3 py-5 gap-1 flex-1 overflow-y-auto">
              <Link
                href="/blog"
                onClick={onClose}
                className="flex items-center px-4 py-3.5 rounded-xl text-sm font-medium transition-colors hover:bg-background"
                style={{ color: 'var(--text)' }}
              >
                Blog
              </Link>
              <Link
                href="/tools"
                onClick={onClose}
                className="flex items-center px-4 py-3.5 rounded-xl text-sm font-medium transition-colors hover:bg-background"
                style={{ color: 'var(--text)' }}
              >
                Tools
              </Link>

              <div className="my-3 mx-1 h-px" style={{ backgroundColor: 'var(--border)' }} />

              <p
                className="px-4 pb-1 text-xs font-semibold uppercase tracking-widest"
                style={{ color: 'var(--text-secondary)' }}
              >
                Download Free
              </p>

              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-colors hover:bg-background"
                style={{ color: 'var(--text)' }}
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--green)' }}>
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Google Play
              </a>

              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-colors hover:bg-background"
                style={{ color: 'var(--text)' }}
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--green)' }}>
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                App Store
              </a>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const handleClose = useCallback(() => setIsMobileMenuOpen(false), [])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={BRAND_ASSETS.emailLogoPath}
              alt="Poker Reflex logo"
              width={52}
              height={52}
              unoptimized
              className="rounded-lg"
              style={{ imageRendering: 'crisp-edges' }}
            />
            <span className="font-heading font-bold text-xl text-text">Poker Reflex</span>
          </Link>

          {/* Desktop nav - hidden below md */}
          <nav className="hidden md:flex items-center gap-4 md:gap-6">
            <Link
              href="/blog"
              className="text-textSecondary hover:text-text text-sm transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/tools"
              className="text-textSecondary hover:text-text text-sm transition-colors"
            >
              Tools
            </Link>
            <DownloadButton />
          </nav>

          {/* Mobile hamburger - visible below md */}
          <button
            className="flex md:hidden p-2 rounded-lg transition-colors hover:bg-surface"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
            style={{ color: 'var(--text-secondary)' }}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={handleClose} />
    </>
  )
}
