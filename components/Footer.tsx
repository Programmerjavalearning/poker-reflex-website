'use client'

import Image from 'next/image'
import { BRAND_ASSETS } from '@/lib/brand'

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left - Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Image
              src={BRAND_ASSETS.emailLogoPath}
              alt="Poker Reflex logo"
              width={28}
              height={28}
              unoptimized
              className="rounded-lg"
            />
            <span className="font-heading font-bold text-text">Poker Reflex</span>
          </div>
          <p className="text-textSecondary text-sm mb-4">
            Built by poker players, for poker players
          </p>
          <p className="text-textSecondary text-xs mb-3">Follow us</p>
          <div className="flex items-center gap-3 mb-4">
            <a
              href="https://www.instagram.com/poker_reflex/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-background border border-border flex items-center justify-center text-gray-400 hover:border-green hover:text-green transition-all duration-200"
              aria-label="Follow us on Instagram"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@PokerReflex"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-background border border-border flex items-center justify-center text-gray-400 hover:border-green hover:text-green transition-all duration-200"
              aria-label="Subscribe on YouTube"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Center - Quick Links */}
        <div>
          <h4 className="font-heading font-semibold text-text mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#features" className="text-textSecondary hover:text-text text-sm transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#faq" className="text-textSecondary hover:text-text text-sm transition-colors">
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#download"
                className="text-textSecondary hover:text-text text-sm transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('download')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
              >
                Download
              </a>
            </li>
          </ul>
        </div>

        {/* Right - Legal & Contact */}
        <div>
          <h4 className="font-heading font-semibold text-text mb-4">Legal & Contact</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="/privacy-policy"
                className="text-textSecondary hover:text-text text-sm transition-colors"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-textSecondary hover:text-text text-sm transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/support"
                className="text-textSecondary hover:text-text text-sm transition-colors"
              >
                Support
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@poker-reflex.com"
                className="text-textSecondary hover:text-text text-sm transition-colors"
              >
                contact@poker-reflex.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-textSecondary text-sm text-center md:text-left max-w-6xl mx-auto mt-8 px-4">
        © {new Date().getFullYear()} Poker Reflex. All rights reserved.
      </p>
    </footer>
  )
}
