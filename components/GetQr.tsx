'use client'

import { useState } from 'react'
import QRModal from './QRModal'

// Clickable QR that opens the same enlarge modal used across the site.
export default function GetQr() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Enlarge the QR code to install Poker Reflex"
        className="group inline-flex flex-col items-center"
      >
        <span className="rounded-2xl bg-white p-3 ring-2 ring-green/30 transition-all duration-200 group-hover:scale-[1.03] group-hover:ring-green/70">
          <img
            src="/qr-onelink.svg"
            alt="QR code to install Poker Reflex"
            width={160}
            height={160}
            className="block"
          />
        </span>
        <span className="mt-3 text-sm text-gray-400">
          Scan to install,{' '}
          <span className="font-medium text-green/80 transition-colors group-hover:text-green">
            tap to enlarge
          </span>
        </span>
      </button>

      <QRModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  )
}
