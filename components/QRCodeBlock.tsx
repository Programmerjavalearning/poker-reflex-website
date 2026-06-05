'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface QRCodeBlockProps {
  variant: 'hero' | 'finalCta';
}

export default function QRCodeBlock({ variant }: QRCodeBlockProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', handleEscape);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  const isHero = variant === 'hero';

  const cardClasses = [
    'hidden md:inline-flex items-center gap-6 group w-fit text-left cursor-pointer',
    'p-5 rounded-2xl',
    'bg-gradient-to-br from-[rgba(74,222,128,0.12)] via-[var(--surface)] to-[var(--surface)]',
    'border-2 border-[var(--green)]/40',
    'transition-all duration-200 hover:scale-[1.02] hover:border-[var(--green)]/70 will-change-transform',
    isHero
      ? 'mb-6 shadow-[0_0_50px_-10px_rgba(74,222,128,0.5)] hover:shadow-[0_0_60px_-8px_rgba(74,222,128,0.7)]'
      : 'shadow-[0_0_40px_-10px_rgba(74,222,128,0.4)] hover:shadow-[0_0_50px_-8px_rgba(74,222,128,0.6)]',
  ].join(' ');

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open enlarged QR code to install Poker Reflex"
        className={cardClasses}
      >
        <div className="bg-white p-3 rounded-xl shrink-0 ring-2 ring-[var(--green)]/30 group-hover:ring-[var(--green)]/60 transition-all duration-200">
          <img
            src="/qr-onelink.svg"
            alt="QR code linking to Poker Reflex app stores"
            width={130}
            height={130}
            className="block"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-2xl leading-tight">
            <span className="text-[var(--green)]">Scan</span>
            <span className="text-white"> to install</span>
          </span>
          <span className="text-[var(--text-secondary)] text-base mt-2">
            iOS or Android
          </span>
          <span className="inline-flex items-center mt-4 px-3 py-1 rounded-full bg-[var(--green)]/15 text-[var(--green)] text-sm font-semibold border border-[var(--green)]/40 w-fit">
            Free to download
          </span>
          <span className="text-xs text-[var(--text-secondary)] mt-3 opacity-60 group-hover:opacity-100 transition-opacity">
            Click to enlarge
          </span>
        </div>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="QR code to install Poker Reflex"
        >
          <div
            className="relative bg-[var(--surface)] rounded-3xl p-8 md:p-12 max-w-md w-full border-2 border-[var(--green)]/40 shadow-[0_0_80px_-10px_rgba(74,222,128,0.6)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close QR code modal"
              className="absolute top-4 right-4 p-2 rounded-full text-[var(--text-secondary)] hover:text-white hover:bg-white/10 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col items-center">
              <h3 className="font-bold text-2xl mb-2 text-center">
                <span className="text-[var(--green)]">Scan</span>
                <span className="text-white"> to install</span>
              </h3>
              <p className="text-[var(--text-secondary)] text-sm mb-6 text-center">
                Point your phone camera at the code below
              </p>

              <div className="bg-white p-5 rounded-2xl ring-2 ring-[var(--green)]/30">
                <img
                  src="/qr-onelink.svg"
                  alt="Large QR code linking to Poker Reflex app stores"
                  width={280}
                  height={280}
                  className="block"
                />
              </div>

              <p className="text-[var(--text-secondary)] text-xs mt-6 text-center">
                Press <kbd className="px-2 py-0.5 bg-white/10 rounded text-white font-mono">Esc</kbd> or click outside to close
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
