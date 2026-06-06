'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface QRModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QRModal({ isOpen, onClose }: QRModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
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
          onClick={onClose}
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
    </div>,
    document.body
  );
}
