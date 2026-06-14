'use client'

import { useEffect, useMemo, useState } from 'react'
import { Shuffle, RotateCcw } from 'lucide-react'
import {
  ALL_CARDS,
  RANK_CHARS,
  SUIT_CHARS,
  SUIT_SYMBOLS,
  SUIT_IS_RED,
  cardId,
  computeEquity,
  type Card,
} from '@/lib/poker-equity'

const MC_SAMPLES = 80000

// Build a card from a short string like "As" (rank char + suit char).
const C = (s: string): Card => ({
  rank: RANK_CHARS.indexOf(s[0]) + 2,
  suit: SUIT_CHARS.indexOf(s[1]),
})

// Slot layout: [P1a, P1b, P2a, P2b, B1, B2, B3, B4, B5]
const DEFAULT_SLOTS: (Card | null)[] = [
  C('As'), C('Ks'), C('Qh'), C('Qd'), null, null, null, null, null,
]

const GROUPS = [
  { label: 'Player 1', start: 0, len: 2 },
  { label: 'Player 2', start: 2, len: 2 },
  { label: 'Board (flop, turn, river)', start: 4, len: 5 },
]

function handLabel(a: Card | null, b: Card | null): string {
  if (!a || !b) return ''
  const hi = a.rank >= b.rank ? a : b
  const lo = a.rank >= b.rank ? b : a
  const rh = RANK_CHARS[hi.rank - 2]
  const rl = RANK_CHARS[lo.rank - 2]
  if (hi.rank === lo.rank) return rh + rl
  return rh + rl + (hi.suit === lo.suit ? 's' : 'o')
}

function CardFace({ card }: { card: Card }) {
  const color = SUIT_IS_RED[card.suit] ? '#dc2626' : '#111827'
  return (
    <span className="flex h-full w-full flex-col items-center justify-center rounded-md bg-white leading-none">
      <span className="text-base font-bold" style={{ color }}>
        {RANK_CHARS[card.rank - 2]}
      </span>
      <span className="text-sm" style={{ color }}>
        {SUIT_SYMBOLS[card.suit]}
      </span>
    </span>
  )
}

export default function EquityCalculator() {
  const [slots, setSlots] = useState<(Card | null)[]>(DEFAULT_SLOTS)
  const [active, setActive] = useState<number>(4) // first board slot
  const [result, setResult] = useState<ReturnType<typeof computeEquity>>(null)

  const usedIds = useMemo(() => {
    const set = new Set<number>()
    for (const c of slots) if (c) set.add(cardId(c))
    return set
  }, [slots])

  const handsComplete = !!(slots[0] && slots[1] && slots[2] && slots[3])

  // Recompute equity whenever the cards change (runs after paint).
  useEffect(() => {
    if (!handsComplete) {
      setResult(null)
      return
    }
    const board = slots.slice(4).filter(Boolean) as Card[]
    const r = computeEquity(
      [slots[0]!, slots[1]!],
      [slots[2]!, slots[3]!],
      board,
      MC_SAMPLES
    )
    setResult(r)
  }, [slots, handsComplete])

  function nextEmpty(from: number, arr: (Card | null)[]): number {
    for (let i = from + 1; i < arr.length; i++) if (!arr[i]) return i
    for (let i = 0; i < arr.length; i++) if (!arr[i]) return i
    return -1
  }

  function placeCard(card: Card) {
    if (active < 0 || usedIds.has(cardId(card))) return
    const next = slots.slice()
    next[active] = card
    setSlots(next)
    setActive(nextEmpty(active, next))
  }

  function selectSlot(i: number) {
    if (slots[i]) {
      const next = slots.slice()
      next[i] = null
      setSlots(next)
    }
    setActive(i)
  }

  function dealRandom() {
    const deck = ALL_CARDS.slice()
    for (let i = 0; i < 4; i++) {
      const j = i + Math.floor(Math.random() * (deck.length - i))
      const t = deck[i]
      deck[i] = deck[j]
      deck[j] = t
    }
    const next: (Card | null)[] = [deck[0], deck[1], deck[2], deck[3], null, null, null, null, null]
    setSlots(next)
    setActive(4)
  }

  function clearBoard() {
    const next = slots.slice()
    for (let i = 4; i < 9; i++) next[i] = null
    setSlots(next)
    setActive(4)
  }

  function clearAll() {
    setSlots([null, null, null, null, null, null, null, null, null])
    setActive(0)
  }

  const p1Label = handLabel(slots[0], slots[1])
  const p2Label = handLabel(slots[2], slots[3])
  const boardCount = slots.slice(4).filter(Boolean).length

  return (
    <div
      className="rounded-2xl border"
      style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
    >
      <div className="p-5 md:p-8">
        <h2 className="font-heading font-bold text-xl md:text-2xl mb-1" style={{ color: 'var(--text)' }}>
          Equity Calculator
        </h2>
        <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
          Pick two cards for each player, add a board if you want, and see who is ahead. An
          example is filled in to start.
        </p>

        {/* Slots */}
        <div className="space-y-4">
          {GROUPS.map((g) => (
            <div key={g.label}>
              <span className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--text-secondary)' }}>
                {g.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: g.len }).map((_, k) => {
                  const i = g.start + k
                  const card = slots[i]
                  const isActive = active === i
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => selectSlot(i)}
                      aria-label={card ? `${RANK_CHARS[card.rank - 2]}${SUIT_CHARS[card.suit]}, tap to change` : 'Empty card slot, tap to select'}
                      className="h-16 w-11 rounded-md transition-all"
                      style={{
                        padding: card ? '2px' : 0,
                        backgroundColor: card ? '#ffffff' : 'var(--background)',
                        border: `2px ${card ? 'solid' : 'dashed'} ${isActive ? 'var(--green)' : 'var(--border)'}`,
                        boxShadow: isActive ? '0 0 0 3px rgba(74,222,128,0.25)' : 'none',
                      }}
                    >
                      {card ? (
                        <CardFace card={card} />
                      ) : (
                        <span className="text-xl" style={{ color: 'var(--text-secondary)', opacity: 0.5 }}>
                          +
                        </span>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2 mt-5">
          <button
            type="button"
            onClick={dealRandom}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium border transition-colors hover:bg-background"
            style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
          >
            <Shuffle className="w-3.5 h-3.5" /> Random hands
          </button>
          <button
            type="button"
            onClick={clearBoard}
            className="px-3 py-2 rounded-lg text-sm font-medium border transition-colors hover:bg-background"
            style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
          >
            Clear board
          </button>
          <button
            type="button"
            onClick={clearAll}
            className="ml-auto inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium border transition-colors hover:bg-background"
            style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset
          </button>
        </div>

        {/* Card picker */}
        <div className="mt-6 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
          <p className="text-xs mb-3" style={{ color: 'var(--text-secondary)' }}>
            {active >= 0 ? 'Tap a card to fill the highlighted slot.' : 'All slots are full. Tap a card slot above to change it.'}
          </p>
          <div className="space-y-1.5" style={{ maxWidth: '460px' }}>
            {[0, 1, 2, 3].map((suit) => (
              <div key={suit} className="flex items-center gap-2">
                <span className="w-5 text-center text-lg leading-none" style={{ color: SUIT_IS_RED[suit] ? '#ef4444' : 'var(--text-secondary)' }}>
                  {SUIT_SYMBOLS[suit]}
                </span>
                <div className="grid flex-1 gap-1" style={{ gridTemplateColumns: 'repeat(13, 1fr)' }}>
                  {RANK_CHARS.map((rc, ri) => {
                    const card: Card = { rank: ri + 2, suit }
                    const used = usedIds.has(cardId(card))
                    return (
                      <button
                        key={rc}
                        type="button"
                        disabled={used || active < 0}
                        onClick={() => placeCard(card)}
                        aria-label={`${rc}${SUIT_CHARS[suit]}`}
                        className="rounded text-[11px] font-bold transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
                        style={{
                          aspectRatio: '3 / 4',
                          backgroundColor: 'var(--background)',
                          border: '1px solid var(--border)',
                          color: SUIT_IS_RED[suit] ? '#f87171' : 'var(--text)',
                        }}
                      >
                        {rc}
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mt-6 pt-6" style={{ borderTop: '1px solid var(--border)' }} role="status" aria-live="polite">
          <h3 className="font-heading font-semibold text-base mb-4" style={{ color: 'var(--text)' }}>
            Equity
          </h3>

          {!handsComplete || !result ? (
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Pick two cards for each player to see the win percentages.
            </p>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="rounded-xl border p-4" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}>
                  <p className="text-xs font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>
                    Player 1 {p1Label && <span className="opacity-70">({p1Label})</span>}
                  </p>
                  <p className="font-heading font-bold text-2xl tabular-nums" style={{ color: 'var(--green)' }}>
                    {(result.p1 * 100).toFixed(1)}%
                  </p>
                </div>
                <div className="rounded-xl border p-4" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}>
                  <p className="text-xs font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>
                    Player 2 {p2Label && <span className="opacity-70">({p2Label})</span>}
                  </p>
                  <p className="font-heading font-bold text-2xl tabular-nums" style={{ color: 'var(--gold)' }}>
                    {(result.p2 * 100).toFixed(1)}%
                  </p>
                </div>
              </div>

              {/* Split bar */}
              <div className="flex h-3 w-full overflow-hidden rounded-full" style={{ backgroundColor: 'var(--border)' }}>
                <div style={{ width: `${result.p1 * 100}%`, backgroundColor: 'var(--green)', transition: 'width 0.25s ease' }} />
                <div style={{ width: `${result.tie * 100}%`, backgroundColor: 'var(--text-secondary)', transition: 'width 0.25s ease' }} />
                <div style={{ width: `${result.p2 * 100}%`, backgroundColor: 'var(--gold)', transition: 'width 0.25s ease' }} />
              </div>

              <p className="text-xs mt-3" style={{ color: 'var(--text-secondary)' }}>
                Tie: <strong style={{ color: 'var(--text)' }}>{(result.tie * 100).toFixed(1)}%</strong>
                {' '}&middot;{' '}
                {result.exact
                  ? `Exact result (${result.iterations.toLocaleString('en-US')} runouts)`
                  : `Simulated over ${result.iterations.toLocaleString('en-US')} runouts (about ${'±'}0.2%)`}
                {boardCount > 0 && boardCount < 5 ? ', with cards still to come' : ''}.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
