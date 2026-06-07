'use client'

import { useMemo, useState, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RotateCcw, Eraser } from 'lucide-react'
import {
  RANGES,
  FORMAT_LABELS,
  ACTION_LABELS,
  allHands,
  parseRangeNotation,
  countCombos,
  type Format,
  type Action,
} from '@/lib/poker-ranges'

const FORMATS: Format[] = ['6max', '9max']
const ACTIONS: Action[] = ['open', '3bet']

function ToggleButton({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className="px-3 py-2 rounded-lg text-sm font-semibold transition-colors"
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

export default function RangeVisualizer() {
  const hands = useMemo(() => allHands(), [])

  const [format, setFormat] = useState<Format>('6max')
  const [action, setAction] = useState<Action>('open')
  const [activePosition, setActivePosition] = useState<string | null>('BTN')
  const [selected, setSelected] = useState<Set<string>>(
    () => parseRangeNotation(RANGES['6max'].open.find((r) => r.position === 'BTN')!.notation)
  )
  const [notation, setNotation] = useState('')

  const positions = RANGES[format][action]
  const current = positions.find((p) => p.position === activePosition) ?? null
  const { combos, percent } = useMemo(() => countCombos(selected), [selected])

  function applyPreset(fmt: Format, act: Action, position: string | null) {
    const list = RANGES[fmt][act]
    const found = (position && list.find((r) => r.position === position)) || list[0]
    setFormat(fmt)
    setAction(act)
    setActivePosition(found.position)
    setSelected(parseRangeNotation(found.notation))
    setNotation('')
  }

  function toggleHand(hand: string) {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(hand)) next.delete(hand)
      else next.add(hand)
      return next
    })
    setActivePosition(null)
    setNotation('')
  }

  function applyNotation() {
    setSelected(parseRangeNotation(notation))
    setActivePosition(null)
  }

  function clearAll() {
    setSelected(new Set())
    setActivePosition(null)
    setNotation('')
  }

  return (
    <div
      className="rounded-2xl border p-5 md:p-7 glow-green"
      style={{ backgroundColor: 'var(--surface)', borderColor: 'rgba(74, 222, 128, 0.35)' }}
    >
      <h2
        className="font-heading font-bold text-2xl md:text-3xl mb-1"
        style={{ color: 'var(--text)' }}
      >
        Range Visualizer
      </h2>
      <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
        Pick a position, switch formats, or type your own range. Click any hand to edit the grid.
      </p>

      {/* Controls */}
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex flex-wrap gap-6">
          <ControlGroup label="Format">
            {FORMATS.map((f) => (
              <ToggleButton key={f} active={format === f} onClick={() => applyPreset(f, action, activePosition)}>
                {FORMAT_LABELS[f]}
              </ToggleButton>
            ))}
          </ControlGroup>
          <ControlGroup label="Action">
            {ACTIONS.map((a) => (
              <ToggleButton key={a} active={action === a} onClick={() => applyPreset(format, a, activePosition)}>
                {ACTION_LABELS[a]}
              </ToggleButton>
            ))}
          </ControlGroup>
        </div>

        <ControlGroup label="Position">
          {positions.map((p) => (
            <ToggleButton
              key={p.position}
              active={activePosition === p.position}
              onClick={() => applyPreset(format, action, p.position)}
            >
              {p.position}
            </ToggleButton>
          ))}
        </ControlGroup>
      </div>

      {/* Grid */}
      <div
        role="group"
        aria-label="13 by 13 poker hand grid. Click a hand to toggle it in the range."
        className="grid mx-auto w-full"
        style={{ maxWidth: '480px', gridTemplateColumns: 'repeat(13, 1fr)', gap: '2px' }}
      >
        {hands.map((hand) => {
          const active = selected.has(hand)
          return (
            <button
              key={hand}
              type="button"
              onClick={() => toggleHand(hand)}
              aria-pressed={active}
              aria-label={hand}
              title={hand}
              className="flex items-center justify-center rounded-[3px] select-none transition-colors"
              style={{
                aspectRatio: '1',
                backgroundColor: active ? 'rgba(74, 222, 128, 0.85)' : '#161c25',
                color: active ? '#0d1117' : '#6b7280',
                fontSize: 'clamp(7px, 2.2vw, 11px)',
                fontWeight: active ? 700 : 500,
                lineHeight: 1,
                border: '1px solid #30363d',
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
            In range
          </span>
          <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-secondary)' }}>
            <span className="inline-block w-3 h-3 rounded-sm" style={{ backgroundColor: '#161c25', border: '1px solid #30363d' }} />
            Folded
          </span>
        </div>
        <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          <span className="font-bold" style={{ color: 'var(--green)' }}>
            <AnimatedNumber value={String(combos)} />
          </span>{' '}
          combos{' '}
          <span className="opacity-70">
            (<AnimatedNumber value={percent.toFixed(1)} />% of all hands)
          </span>
        </div>
      </div>

      <p className="text-xs mt-2" style={{ color: 'var(--text-secondary)', opacity: 0.8 }}>
        {current ? `${current.position} ${ACTION_LABELS[action]} range, ${FORMAT_LABELS[format]}. ${current.note}.` : 'Custom range. Edit hands directly on the grid or type a new range below.'}
      </p>

      {/* Notation input */}
      <div className="mt-6 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
        <label htmlFor="rv-notation" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text)' }}>
          Type a range
        </label>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            id="rv-notation"
            type="text"
            value={notation}
            onChange={(e) => setNotation(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') applyNotation()
            }}
            placeholder="e.g. TT+, AQs+, A5s, KQo"
            className="flex-1 rounded-xl border px-4 py-3 text-base transition-colors focus:outline-none focus:ring-2 focus:ring-green/50"
            style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)', color: 'var(--text)' }}
          />
          <button
            type="button"
            onClick={applyNotation}
            className="px-5 py-3 rounded-xl text-sm font-semibold transition-transform hover:scale-105"
            style={{ backgroundColor: 'var(--green)', color: 'var(--background)' }}
          >
            Apply
          </button>
          <button
            type="button"
            onClick={clearAll}
            aria-label="Clear the grid"
            className="px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2"
            style={{ backgroundColor: 'var(--background)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
          >
            <Eraser className="w-4 h-4" />
            Clear
          </button>
        </div>
        <button
          type="button"
          onClick={() => applyPreset('6max', 'open', 'BTN')}
          className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium transition-opacity hover:opacity-80"
          style={{ color: 'var(--text-secondary)' }}
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset to default
        </button>
      </div>
    </div>
  )
}
