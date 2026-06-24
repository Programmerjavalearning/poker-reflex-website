'use client'

import { useMemo, useState, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { allHands, parseRangeNotation, countCombos } from '@/lib/poker-ranges'
import {
  PUSH_FOLD_RANGES,
  PF_POSITIONS,
  PF_STACKS,
  PF_POSITION_NOTES,
  type PFPosition,
  type PFStack,
} from '@/lib/push-fold-ranges'

function ToggleButton({
  active,
  onClick,
  children,
  ariaLabel,
}: {
  active: boolean
  onClick: () => void
  children: ReactNode
  ariaLabel?: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      aria-label={ariaLabel}
      className="px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors"
      style={{
        backgroundColor: active ? 'rgba(74, 222, 128, 0.15)' : 'var(--background)',
        color: active ? 'var(--green)' : 'var(--text-secondary)',
        border: `1px solid ${active ? 'rgba(74, 222, 128, 0.5)' : 'var(--border)'}`,
      }}
    >
      {children}
    </button>
  )
}

function ControlGroup({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <span
        className="block text-xs font-semibold uppercase tracking-wide mb-2"
        style={{ color: 'var(--text-secondary)' }}
      >
        {label}
      </span>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  )
}

function AnimatedNumber({ value }: { value: string }) {
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={value}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="inline-block tabular-nums"
      >
        {value}
      </motion.span>
    </AnimatePresence>
  )
}

export default function PushFoldChart() {
  const hands = useMemo(() => allHands(), [])
  const [position, setPosition] = useState<PFPosition>('BTN')
  const [stack, setStack] = useState<PFStack>(10)
  const [selectedHand, setSelectedHand] = useState<string | null>(null)

  const rangeStr = PUSH_FOLD_RANGES[position][stack]
  const rangeSet = useMemo(() => parseRangeNotation(rangeStr), [rangeStr])
  const { combos, percent } = useMemo(() => countCombos(rangeSet), [rangeSet])

  const selectedInRange = selectedHand ? rangeSet.has(selectedHand) : false

  return (
    <div
      className="rounded-2xl border p-5 md:p-7 glow-green"
      style={{ backgroundColor: 'var(--surface)', borderColor: 'rgba(74, 222, 128, 0.35)' }}
    >
      <h2 className="font-heading font-bold text-2xl md:text-3xl mb-1" style={{ color: 'var(--text)' }}>
        Push or Fold Chart
      </h2>
      <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
        Pick your position and stack size. Green hands are a jam (all-in), dark hands are a fold. Tap
        any hand for the verdict.
      </p>

      {/* Controls */}
      <div className="flex flex-col gap-4 mb-6">
        <ControlGroup label="Position">
          {PF_POSITIONS.map((p) => (
            <ToggleButton key={p} active={position === p} onClick={() => setPosition(p)}>
              {p}
            </ToggleButton>
          ))}
        </ControlGroup>
        <ControlGroup label="Stack (big blinds)">
          {PF_STACKS.map((s) => (
            <ToggleButton
              key={s}
              active={stack === s}
              onClick={() => setStack(s)}
              ariaLabel={`${s} big blinds`}
            >
              {s} bb
            </ToggleButton>
          ))}
        </ControlGroup>
      </div>

      {/* Grid */}
      <div
        role="group"
        aria-label={`13 by 13 jam range grid for the ${position} at ${stack} big blinds. Green hands are all-in, dark hands are a fold.`}
        className="grid mx-auto w-full"
        style={{ maxWidth: '480px', gridTemplateColumns: 'repeat(13, 1fr)', gap: '2px' }}
      >
        {hands.map((hand) => {
          const active = rangeSet.has(hand)
          const isSelected = hand === selectedHand
          return (
            <button
              key={hand}
              type="button"
              onClick={() => setSelectedHand(hand)}
              aria-label={`${hand}: ${active ? 'jam' : 'fold'}`}
              title={hand}
              className="flex items-center justify-center rounded-[3px] select-none transition-colors"
              style={{
                aspectRatio: '1',
                backgroundColor: active ? 'rgba(74, 222, 128, 0.85)' : '#161c25',
                color: active ? '#0d1117' : '#9ca3af',
                fontSize: 'clamp(7px, 2.2vw, 11px)',
                fontWeight: active ? 700 : 500,
                lineHeight: 1,
                border: isSelected ? '2px solid var(--gold)' : '1px solid #30363d',
              }}
            >
              {hand}
            </button>
          )
        })}
      </div>

      {/* Legend + count */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-secondary)' }}>
            <span className="inline-block w-3 h-3 rounded-sm" style={{ backgroundColor: 'rgba(74, 222, 128, 0.85)' }} />
            Jam (all-in)
          </span>
          <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-secondary)' }}>
            <span className="inline-block w-3 h-3 rounded-sm" style={{ backgroundColor: '#161c25', border: '1px solid #30363d' }} />
            Fold
          </span>
        </div>
        <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          <span className="font-bold" style={{ color: 'var(--green)' }}>
            <AnimatedNumber value={String(combos)} />
          </span>{' '}
          combos jam{' '}
          <span className="opacity-70">
            (<AnimatedNumber value={percent.toFixed(1)} />% of hands)
          </span>
        </div>
      </div>

      {/* Selected hand verdict */}
      <div
        className="mt-4 rounded-xl px-4 py-3 text-sm"
        style={{ backgroundColor: 'var(--background)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
        role="status"
        aria-live="polite"
      >
        {selectedHand ? (
          <span>
            <span className="font-bold" style={{ color: 'var(--text)' }}>{selectedHand}</span> from the{' '}
            <span className="font-bold" style={{ color: 'var(--text)' }}>{position}</span> at{' '}
            <span className="font-bold" style={{ color: 'var(--text)' }}>{stack}bb</span>:{' '}
            <span className="font-bold" style={{ color: selectedInRange ? 'var(--green)' : 'var(--red)' }}>
              {selectedInRange ? 'JAM (shove all-in)' : 'FOLD'}
            </span>
          </span>
        ) : (
          <span>Tap a hand in the grid to see whether it is a jam or a fold from this seat and stack.</span>
        )}
      </div>

      <p className="text-xs mt-3" style={{ color: 'var(--text-secondary)', opacity: 0.85 }}>
        {PF_POSITION_NOTES[position]} These are no-ante, chip-EV Nash ranges. With antes, jam a touch
        wider. Near a pay jump (ICM), call tighter.
      </p>
    </div>
  )
}
