'use client'

import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RotateCcw, Eraser, Copy, Check } from 'lucide-react'
import {
  RANGES,
  FORMAT_LABELS,
  ACTION_LABELS,
  allHands,
  parseRangeNotation,
  formatRange,
  countCombos,
  type Format,
  type Action,
} from '@/lib/poker-ranges'

const FORMATS: Format[] = ['6max', '9max']
const ACTIONS: Action[] = ['open', '3bet']

// True when two hand sets contain exactly the same hands.
function rangesEqual(a: Set<string>, b: Set<string>): boolean {
  if (a.size !== b.size) return false
  let same = true
  a.forEach((h) => {
    if (!b.has(h)) same = false
  })
  return same
}

const STORAGE_KEY = 'pr-range-overrides'

// Storage key for a saved (edited) range, scoped to format + action + position.
function rangeKey(format: Format, action: Action, position: string): string {
  return `${format}-${action}-${position}`
}

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
  const [selectedPosition, setSelectedPosition] = useState('BTN')
  const [overrides, setOverrides] = useState<Record<string, Set<string>>>({})
  const [selected, setSelected] = useState<Set<string>>(
    () => parseRangeNotation(RANGES['6max'].open.find((r) => r.position === 'BTN')!.notation)
  )
  const [notation, setNotation] = useState(
    () => formatRange(parseRangeNotation(RANGES['6max'].open.find((r) => r.position === 'BTN')!.notation))
  )
  const [notationError, setNotationError] = useState(false)
  const [copied, setCopied] = useState(false)

  const positions = RANGES[format][action]
  // The selected position stays your anchor. `current` is the standard preset;
  // `isModified` is true once the shown range (which may be a saved edit) differs.
  const current = positions.find((p) => p.position === selectedPosition) ?? positions[0]
  const presetSet = useMemo(() => parseRangeNotation(current.notation), [current])
  const isModified = useMemo(() => !rangesEqual(selected, presetSet), [selected, presetSet])
  const { combos, percent } = useMemo(() => countCombos(selected), [selected])

  // Load saved edits from localStorage on mount, and apply the one for the
  // starting position if it exists. Runs once, client-side only.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const parsed = JSON.parse(raw) as Record<string, string[]>
      const loaded: Record<string, Set<string>> = {}
      Object.keys(parsed).forEach((k) => {
        loaded[k] = new Set(parsed[k])
      })
      setOverrides(loaded)
      const startKey = rangeKey(format, action, selectedPosition)
      if (loaded[startKey]) {
        const set = new Set(loaded[startKey])
        setSelected(set)
        setNotation(formatRange(set))
      }
    } catch {
      // ignore unreadable storage
    }
  }, [])

  // Persist saved edits whenever they change.
  useEffect(() => {
    try {
      const serial: Record<string, string[]> = {}
      Object.keys(overrides).forEach((k) => {
        serial[k] = Array.from(overrides[k])
      })
      localStorage.setItem(STORAGE_KEY, JSON.stringify(serial))
    } catch {
      // ignore storage write failures (private mode, quota, etc.)
    }
  }, [overrides])

  // Select a position: load your saved edit for it if you have one, otherwise the
  // standard preset. Falls back to the first position if the requested one does
  // not exist for the chosen format/action.
  function selectPosition(fmt: Format, act: Action, position: string) {
    const list = RANGES[fmt][act]
    const found = list.find((r) => r.position === position) || list[0]
    const saved = overrides[rangeKey(fmt, act, found.position)]
    const set = saved ? new Set(saved) : parseRangeNotation(found.notation)
    setFormat(fmt)
    setAction(act)
    setSelectedPosition(found.position)
    setSelected(set)
    setNotation(formatRange(set))
    setNotationError(false)
  }

  // Remember the edited range for the currently selected position.
  function saveOverride(set: Set<string>) {
    setOverrides((prev) => ({ ...prev, [rangeKey(format, action, selectedPosition)]: new Set(set) }))
  }

  function changeFormat(fmt: Format) {
    if (fmt === format) return
    selectPosition(fmt, action, selectedPosition)
  }

  function changeAction(act: Action) {
    if (act === action) return
    selectPosition(format, act, selectedPosition)
  }

  // Editing the grid or the notation keeps the selected position as your anchor
  // and saves your edit for that position.
  function toggleHand(hand: string) {
    const next = new Set(selected)
    if (next.has(hand)) next.delete(hand)
    else next.add(hand)
    setSelected(next)
    setNotation(formatRange(next))
    setNotationError(false)
    saveOverride(next)
  }

  function applyNotation() {
    const parsed = parseRangeNotation(notation)
    if (notation.trim().length > 0 && parsed.size === 0) {
      setNotationError(true)
      return
    }
    setNotationError(false)
    setSelected(parsed)
    setNotation(formatRange(parsed))
    saveOverride(parsed)
  }

  function clearAll() {
    const empty = new Set<string>()
    setSelected(empty)
    setNotation('')
    setNotationError(false)
    saveOverride(empty)
  }

  // Restore the standard preset for the selected position (drops your saved edit).
  function resetCurrent() {
    setOverrides((prev) => {
      const next = { ...prev }
      delete next[rangeKey(format, action, selectedPosition)]
      return next
    })
    const set = parseRangeNotation(current.notation)
    setSelected(set)
    setNotation(formatRange(set))
    setNotationError(false)
  }

  function copyRange() {
    if (!notation) return
    navigator.clipboard?.writeText(notation)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
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
              <ToggleButton key={f} active={format === f} onClick={() => changeFormat(f)}>
                {FORMAT_LABELS[f]}
              </ToggleButton>
            ))}
          </ControlGroup>
          <ControlGroup label="Action">
            {ACTIONS.map((a) => (
              <ToggleButton key={a} active={action === a} onClick={() => changeAction(a)}>
                {ACTION_LABELS[a]}
              </ToggleButton>
            ))}
          </ControlGroup>
        </div>

        <ControlGroup label="Position">
          {positions.map((p) => (
            <ToggleButton
              key={p.position}
              active={selectedPosition === p.position}
              onClick={() => selectPosition(format, action, p.position)}
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
        <div className="text-sm" style={{ color: 'var(--text-secondary)' }} role="status" aria-live="polite">
          <span className="font-bold" style={{ color: 'var(--green)' }}>
            <AnimatedNumber value={String(combos)} />
          </span>{' '}
          combos{' '}
          <span className="opacity-70">
            (<AnimatedNumber value={percent.toFixed(1)} />% of all hands)
          </span>
        </div>
      </div>

      <p className="text-xs mt-2" style={{ color: 'var(--text-secondary)', opacity: 0.85 }}>
        {selected.size === 0
          ? `Empty ${selectedPosition} range (${ACTION_LABELS[action]}, ${FORMAT_LABELS[format]}). Click hands or type a range. Your edits are saved per position.`
          : isModified
          ? `Your saved ${selectedPosition} range (${ACTION_LABELS[action]}, ${FORMAT_LABELS[format]}). Reset to restore the standard.`
          : `${selectedPosition} ${ACTION_LABELS[action]} range, ${FORMAT_LABELS[format]}. ${current.note}.`}
      </p>

      {/* Notation (bidirectional: mirrors the grid, editable, copyable) */}
      <div className="mt-6 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
        <label htmlFor="rv-notation" className="block text-sm font-semibold mb-1" style={{ color: 'var(--text)' }}>
          Range notation
        </label>
        <p className="text-xs mb-2" style={{ color: 'var(--text-secondary)', opacity: 0.85 }}>
          Updates as you edit the grid. Copy it, or type your own and hit Apply.
        </p>
        <input
          id="rv-notation"
          type="text"
          value={notation}
          onChange={(e) => {
            setNotation(e.target.value)
            if (notationError) setNotationError(false)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') applyNotation()
          }}
          placeholder="e.g. TT+, AQs+, A5s, KQo"
          aria-invalid={notationError}
          className="w-full rounded-xl border px-4 py-3 text-base transition-colors focus:outline-none focus:ring-2 focus:ring-green/50"
          style={{ backgroundColor: 'var(--background)', borderColor: notationError ? 'var(--red)' : 'var(--border)', color: 'var(--text)' }}
        />
        {notationError && (
          <p className="text-xs mt-2" style={{ color: 'var(--red)' }} role="alert">
            Couldn&apos;t read that range. Try something like TT+, AQs+, A5s, KQo.
          </p>
        )}
        <div className="flex flex-wrap items-center gap-2 mt-3">
          <button
            type="button"
            onClick={applyNotation}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-transform hover:scale-105"
            style={{ backgroundColor: 'var(--green)', color: 'var(--background)' }}
          >
            Apply
          </button>
          <button
            type="button"
            onClick={copyRange}
            aria-label="Copy the range notation"
            className="px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2"
            style={{ backgroundColor: 'var(--background)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
          >
            {copied ? <Check className="w-4 h-4" style={{ color: 'var(--green)' }} /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied' : 'Copy'}
          </button>
          <button
            type="button"
            onClick={clearAll}
            aria-label="Clear the grid"
            className="px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2"
            style={{ backgroundColor: 'var(--background)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
          >
            <Eraser className="w-4 h-4" />
            Clear
          </button>
          <button
            type="button"
            onClick={resetCurrent}
            aria-label={`Reset ${selectedPosition} to the standard range`}
            className="sm:ml-auto inline-flex items-center gap-1.5 px-3 py-2.5 text-xs font-medium transition-opacity hover:opacity-80"
            style={{ color: 'var(--text-secondary)' }}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}
