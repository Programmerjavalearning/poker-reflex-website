// Poker hand range data and notation logic for the Range Visualizer tool.
//
// The 13x13 grid convention (same as components/RangeGrid.tsx):
//   - lower index = higher rank (A is index 0, 2 is index 12)
//   - row === col           -> pocket pair          label "AA"
//   - col  >  row (upper)    -> suited               label "AKs"
//   - col  <  row (lower)    -> offsuit              label "AKo"
//
// The reference ranges below are standard ~100bb cash-game ranges meant for
// learning. They are deliberately rounded and not solver-exact.

export const RANKS = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'] as const
export type Rank = (typeof RANKS)[number]

function rankIdx(ch: string): number {
  return (RANKS as readonly string[]).indexOf(ch)
}

export function getHandLabel(row: number, col: number): string {
  const r1 = RANKS[row]
  const r2 = RANKS[col]
  if (row === col) return `${r1}${r2}`
  if (col > row) return `${r1}${r2}s`
  return `${r2}${r1}o`
}

export function allHands(): string[] {
  const out: string[] = []
  for (let row = 0; row < 13; row++) {
    for (let col = 0; col < 13; col++) {
      out.push(getHandLabel(row, col))
    }
  }
  return out
}

// Build a non-pair label from two rank indices, ordering high card first.
function comboLabel(a: number, b: number, suited: boolean): string {
  const hi = Math.min(a, b)
  const lo = Math.max(a, b)
  return `${RANKS[hi]}${RANKS[lo]}${suited ? 's' : 'o'}`
}

// Expand a dash range like "TT-88", "A5s-A2s", or "KQo-KTo".
function expandRange(aRaw: string, bRaw: string, out: Set<string>): void {
  const a = aRaw.trim().toUpperCase()
  const b = bRaw.trim().toUpperCase()
  const aSuit = a.endsWith('S') ? 's' : a.endsWith('O') ? 'o' : ''
  const bSuit = b.endsWith('S') ? 's' : b.endsWith('O') ? 'o' : ''
  const ar = aSuit ? a.slice(0, -1) : a
  const br = bSuit ? b.slice(0, -1) : b
  if (ar.length !== 2 || br.length !== 2) return

  // Pair range, e.g. TT-88
  if (ar[0] === ar[1] && br[0] === br[1]) {
    const i1 = rankIdx(ar[0])
    const i2 = rankIdx(br[0])
    if (i1 < 0 || i2 < 0) return
    const lo = Math.min(i1, i2)
    const hi = Math.max(i1, i2)
    for (let k = lo; k <= hi; k++) out.add(`${RANKS[k]}${RANKS[k]}`)
    return
  }

  // Suited/offsuit range sharing the same high card, e.g. A5s-A2s
  if (aSuit && aSuit === bSuit) {
    const aHi = Math.min(rankIdx(ar[0]), rankIdx(ar[1]))
    const aLo = Math.max(rankIdx(ar[0]), rankIdx(ar[1]))
    const bHi = Math.min(rankIdx(br[0]), rankIdx(br[1]))
    const bLo = Math.max(rankIdx(br[0]), rankIdx(br[1]))
    if (aHi < 0 || bHi < 0 || aHi !== bHi) return
    const lo = Math.min(aLo, bLo)
    const hi = Math.max(aLo, bLo)
    for (let k = lo; k <= hi; k++) out.add(`${RANKS[aHi]}${RANKS[k]}${aSuit}`)
  }
}

function parseToken(tokenRaw: string, out: Set<string>): void {
  const token = tokenRaw.trim().toUpperCase()
  if (!token) return

  if (token.includes('-')) {
    const [a, b] = token.split('-')
    if (a && b) expandRange(a, b, out)
    return
  }

  const hasPlus = token.endsWith('+')
  const core = hasPlus ? token.slice(0, -1) : token
  const suitChar = core.endsWith('S') ? 's' : core.endsWith('O') ? 'o' : ''
  const ranksPart = suitChar ? core.slice(0, -1) : core
  if (ranksPart.length !== 2) return

  const i = rankIdx(ranksPart[0])
  const j = rankIdx(ranksPart[1])
  if (i < 0 || j < 0) return

  // Pocket pair
  if (ranksPart[0] === ranksPart[1]) {
    if (hasPlus) {
      for (let k = i; k >= 0; k--) out.add(`${RANKS[k]}${RANKS[k]}`)
    } else {
      out.add(`${RANKS[i]}${RANKS[i]}`)
    }
    return
  }

  // Non-pair: if no suit char given, accept both suited and offsuit.
  const suits: boolean[] = suitChar === 's' ? [true] : suitChar === 'o' ? [false] : [true, false]
  const hi = Math.min(i, j)
  const lo = Math.max(i, j)
  for (const suited of suits) {
    if (hasPlus) {
      // Fix the high card, climb the kicker up toward (but not reaching) the high card.
      for (let k = lo; k >= hi + 1; k--) out.add(comboLabel(hi, k, suited))
    } else {
      out.add(comboLabel(hi, lo, suited))
    }
  }
}

// Parse a poker range notation string into a set of hand labels.
// Supports: pairs (66, 66+, TT-88), suited (AQs, AQs+, A5s-A2s),
// offsuit (AQo, AKo+), and bare non-pairs (AK -> AKs + AKo). Invalid tokens are ignored.
export function parseRangeNotation(input: string): Set<string> {
  const out = new Set<string>()
  if (!input) return out
  for (const token of input.split(/[\s,]+/)) parseToken(token, out)
  return out
}

// Count concrete combinations: pair = 6, suited = 4, offsuit = 12 (1326 total).
export function countCombos(hands: Set<string>): { combos: number; percent: number } {
  let combos = 0
  hands.forEach((h) => {
    if (h.length === 2) combos += 6
    else if (h.endsWith('s')) combos += 4
    else combos += 12
  })
  return { combos, percent: (combos / 1326) * 100 }
}

// ---------------------------------------------------------------------------
// Reference ranges (standard ~100bb cash, rounded for learning)
// ---------------------------------------------------------------------------

export type Format = '6max' | '9max'
export type Action = 'open' | '3bet'

export interface PositionRange {
  position: string
  notation: string
  note: string
}

export const FORMAT_LABELS: Record<Format, string> = {
  '6max': '6-max',
  '9max': '9-max',
}

export const ACTION_LABELS: Record<Action, string> = {
  open: 'Open (RFI)',
  '3bet': '3-bet',
}

export const RANGES: Record<Format, Record<Action, PositionRange[]>> = {
  '6max': {
    open: [
      { position: 'UTG', note: 'About 14% of hands', notation: '22+, ATs+, KTs+, QTs+, JTs, T9s, 98s, 87s, 76s, AJo+, KQo' },
      { position: 'MP', note: 'About 17% of hands', notation: '22+, A9s+, KTs+, QTs+, J9s+, T9s, 98s, 87s, 76s, 65s, ATo+, KJo+, QJo' },
      { position: 'CO', note: 'About 26% of hands', notation: '22+, A2s+, K9s+, Q9s+, J9s+, T8s+, 97s+, 86s+, 76s, 65s, 54s, A8o+, KTo+, QTo+, JTo' },
      { position: 'BTN', note: 'About 39% of hands', notation: '22+, A2s+, K5s+, Q7s+, J8s+, T8s+, 97s+, 86s+, 75s+, 64s+, 54s, A2o+, K8o+, Q9o+, J9o+, T9o, 98o' },
      { position: 'SB', note: 'About 35% of hands (raise-first-in)', notation: '22+, A2s+, K7s+, Q8s+, J8s+, T8s+, 97s+, 86s+, 75s+, 65s, 54s, A4o+, K9o+, Q9o+, J9o+, T9o' },
    ],
    '3bet': [
      { position: 'MP', note: 'vs an UTG open', notation: 'QQ+, AKs, AKo, A5s' },
      { position: 'CO', note: 'vs a MP open', notation: 'JJ+, AQs+, AKo, A5s, A4s' },
      { position: 'BTN', note: 'vs a CO open', notation: 'TT+, AJs+, AQo+, A5s-A2s, KJs+, QJs' },
      { position: 'SB', note: 'vs a BTN open', notation: '99+, ATs+, AJo+, A5s-A2s, KTs+, QTs+, JTs' },
      { position: 'BB', note: 'vs a BTN open', notation: 'TT+, AJs+, AQo+, A5s-A3s, KQs, KJs, QJs, JTs, T9s' },
    ],
  },
  '9max': {
    open: [
      { position: 'UTG', note: 'About 10% of hands', notation: '55+, ATs+, KJs+, QJs, JTs, T9s, AQo+, KQo' },
      { position: 'UTG+1', note: 'About 13% of hands', notation: '44+, A9s+, KTs+, QTs+, JTs, T9s, 98s, AJo+, KQo' },
      { position: 'MP', note: 'About 16% of hands', notation: '33+, A8s+, KTs+, QTs+, J9s+, T9s, 98s, 87s, ATo+, KJo+' },
      { position: 'HJ', note: 'About 19% of hands', notation: '22+, A5s+, K9s+, Q9s+, J9s+, T8s+, 98s, 87s, 76s, ATo+, KJo+, QJo' },
      { position: 'CO', note: 'About 25% of hands', notation: '22+, A2s+, K9s+, Q9s+, J9s+, T8s+, 97s+, 86s+, 76s, 65s, A9o+, KTo+, QTo+, JTo' },
      { position: 'BTN', note: 'About 39% of hands', notation: '22+, A2s+, K5s+, Q7s+, J8s+, T8s+, 97s+, 86s+, 75s+, 64s+, 54s, A2o+, K8o+, Q9o+, J9o+, T9o, 98o' },
      { position: 'SB', note: 'About 29% of hands (raise-first-in)', notation: '22+, A2s+, K8s+, Q9s+, J9s+, T8s+, 97s+, 86s+, 76s, 65s, A5o+, KTo+, QTo+, JTo' },
    ],
    '3bet': [
      { position: 'MP', note: 'vs an early-position open', notation: 'QQ+, AKs, AKo, A5s' },
      { position: 'CO', note: 'vs a MP open', notation: 'JJ+, AQs+, AKo, A5s, A4s' },
      { position: 'BTN', note: 'vs a CO open', notation: 'TT+, AJs+, AQo+, A5s-A3s, KJs+, QJs' },
      { position: 'BB', note: 'vs a BTN open', notation: '99+, ATs+, AJo+, A5s-A2s, KTs+, QTs+, JTs' },
    ],
  },
}
