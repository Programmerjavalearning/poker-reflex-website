// Poker hand evaluation and equity computation, fully client-side.
// Hand vs hand, with an optional board. Exact enumeration when the number of
// remaining runouts is small, Monte Carlo simulation otherwise (preflop).

export type Card = { rank: number; suit: number } // rank 2..14 (14 = Ace), suit 0..3

export const RANK_CHARS = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A']
export const SUIT_CHARS = ['s', 'h', 'd', 'c'] // spade, heart, diamond, club
export const SUIT_SYMBOLS = ['♠', '♥', '♦', '♣'] // spade heart diamond club
export const SUIT_IS_RED = [false, true, true, false] // hearts and diamonds are red

// Every card in the deck, ordered by rank then suit.
export const ALL_CARDS: Card[] = (() => {
  const out: Card[] = []
  for (let r = 14; r >= 2; r--) for (let s = 0; s < 4; s++) out.push({ rank: r, suit: s })
  return out
})()

export function cardId(c: Card): number {
  return (c.rank - 2) * 4 + c.suit // 0..51, unique per card
}

export function cardLabel(c: Card): string {
  return RANK_CHARS[c.rank - 2] + SUIT_CHARS[c.suit]
}

// Evaluate the best 5-card poker hand out of 7 cards and return a single
// comparable number (higher is better). Category 0 (high card) .. 8 (straight
// flush), packed in base 16 with five rank kickers.
export function evaluate7(cards: Card[]): number {
  const rankCount = new Array(15).fill(0)
  const suitCount = [0, 0, 0, 0]
  const bySuit: number[][] = [[], [], [], []]

  for (const c of cards) {
    rankCount[c.rank]++
    suitCount[c.suit]++
    bySuit[c.suit].push(c.rank)
  }

  const score = (cat: number, k: number[]): number =>
    ((((cat * 16 + k[0]) * 16 + k[1]) * 16 + k[2]) * 16 + k[3]) * 16 + k[4]

  // Highest straight given a presence map (index 2..14). Handles the wheel
  // (A-2-3-4-5) by treating the ace as a low card too.
  const bestStraight = (present: boolean[]): number => {
    const p = present.slice()
    p[1] = present[14]
    for (let high = 14; high >= 5; high--) {
      let ok = true
      for (let k = 0; k < 5; k++) {
        if (!p[high - k]) {
          ok = false
          break
        }
      }
      if (ok) return high
    }
    return 0
  }

  let flushSuit = -1
  for (let s = 0; s < 4; s++) if (suitCount[s] >= 5) flushSuit = s

  // Straight flush
  if (flushSuit >= 0) {
    const present = new Array(15).fill(false)
    for (const r of bySuit[flushSuit]) present[r] = true
    const sfHigh = bestStraight(present)
    if (sfHigh) return score(8, [sfHigh, 0, 0, 0, 0])
  }

  const quads: number[] = []
  const trips: number[] = []
  const pairs: number[] = []
  for (let r = 14; r >= 2; r--) {
    if (rankCount[r] === 4) quads.push(r)
    else if (rankCount[r] === 3) trips.push(r)
    else if (rankCount[r] === 2) pairs.push(r)
  }

  // Four of a kind
  if (quads.length) {
    const q = quads[0]
    let kicker = 0
    for (let r = 14; r >= 2; r--)
      if (r !== q && rankCount[r] > 0) {
        kicker = r
        break
      }
    return score(7, [q, kicker, 0, 0, 0])
  }

  // Full house (trips + a pair, or two sets of trips)
  if (trips.length >= 1 && (pairs.length >= 1 || trips.length >= 2)) {
    const t = trips[0]
    let p = 0
    if (trips.length >= 2) p = trips[1]
    if (pairs.length >= 1) p = Math.max(p, pairs[0])
    return score(6, [t, p, 0, 0, 0])
  }

  // Flush
  if (flushSuit >= 0) {
    const fr = bySuit[flushSuit].slice().sort((a, b) => b - a).slice(0, 5)
    return score(5, [fr[0], fr[1], fr[2], fr[3], fr[4]])
  }

  // Straight
  const presentAll = new Array(15).fill(false)
  for (let r = 2; r <= 14; r++) if (rankCount[r] > 0) presentAll[r] = true
  const stHigh = bestStraight(presentAll)
  if (stHigh) return score(4, [stHigh, 0, 0, 0, 0])

  // Three of a kind
  if (trips.length) {
    const t = trips[0]
    const k: number[] = []
    for (let r = 14; r >= 2 && k.length < 2; r--) if (r !== t && rankCount[r] > 0) k.push(r)
    return score(3, [t, k[0] || 0, k[1] || 0, 0, 0])
  }

  // Two pair
  if (pairs.length >= 2) {
    const hp = pairs[0]
    const lp = pairs[1]
    let kicker = 0
    for (let r = 14; r >= 2; r--)
      if (r !== hp && r !== lp && rankCount[r] > 0) {
        kicker = r
        break
      }
    return score(2, [hp, lp, kicker, 0, 0])
  }

  // One pair
  if (pairs.length === 1) {
    const p = pairs[0]
    const k: number[] = []
    for (let r = 14; r >= 2 && k.length < 3; r--) if (r !== p && rankCount[r] > 0) k.push(r)
    return score(1, [p, k[0] || 0, k[1] || 0, k[2] || 0, 0])
  }

  // High card
  const hc: number[] = []
  for (let r = 14; r >= 2 && hc.length < 5; r--) if (rankCount[r] > 0) hc.push(r)
  return score(0, [hc[0], hc[1], hc[2], hc[3], hc[4]])
}

export type EquityResult = {
  p1: number // win share for hand 1 (0..1), counting ties as half
  p2: number
  tie: number
  exact: boolean
  iterations: number
}

const EXACT_THRESHOLD = 50000

function nCk(n: number, k: number): number {
  if (k < 0 || k > n) return 0
  let r = 1
  for (let i = 0; i < k; i++) r = (r * (n - i)) / (i + 1)
  return Math.round(r)
}

// Enumerate every k-combination of `deck` and call cb with each.
function eachCombo(deck: Card[], k: number, cb: (combo: Card[]) => void): void {
  const idx = new Array(k).fill(0).map((_, i) => i)
  const combo = new Array(k)
  if (k === 0) {
    cb([])
    return
  }
  while (true) {
    for (let i = 0; i < k; i++) combo[i] = deck[idx[i]]
    cb(combo)
    let i = k - 1
    while (i >= 0 && idx[i] === deck.length - k + i) i--
    if (i < 0) break
    idx[i]++
    for (let j = i + 1; j < k; j++) idx[j] = idx[j - 1] + 1
  }
}

/**
 * Win probability of hand1 vs hand2 given an optional board (0..5 cards).
 * Returns null on invalid input (incomplete hands or duplicate cards).
 */
export function computeEquity(
  hand1: Card[],
  hand2: Card[],
  board: Card[],
  samples = 100000
): EquityResult | null {
  if (hand1.length !== 2 || hand2.length !== 2) return null

  const all = [...hand1, ...hand2, ...board]
  const used = new Set<number>()
  for (const c of all) {
    const id = cardId(c)
    if (used.has(id)) return null // duplicate card
    used.add(id)
  }

  const deck = ALL_CARDS.filter((c) => !used.has(cardId(c)))
  const need = 5 - board.length
  if (need < 0) return null

  let w1 = 0
  let w2 = 0
  let tie = 0
  let total = 0

  const tally = (full: Card[]) => {
    const s1 = evaluate7([hand1[0], hand1[1], ...full])
    const s2 = evaluate7([hand2[0], hand2[1], ...full])
    if (s1 > s2) w1++
    else if (s2 > s1) w2++
    else tie++
    total++
  }

  const exact = need === 0 || nCk(deck.length, need) <= EXACT_THRESHOLD

  if (exact) {
    eachCombo(deck, need, (combo) => tally([...board, ...combo]))
  } else {
    // Monte Carlo: partial Fisher-Yates draw of `need` cards each iteration.
    const pool = deck.slice()
    const n = pool.length
    const draw: Card[] = new Array(need)
    for (let it = 0; it < samples; it++) {
      for (let i = 0; i < need; i++) {
        const j = i + Math.floor(Math.random() * (n - i))
        const tmp = pool[i]
        pool[i] = pool[j]
        pool[j] = tmp
        draw[i] = pool[i]
      }
      tally([...board, ...draw])
    }
  }

  if (total === 0) return null
  return {
    p1: (w1 + tie / 2) / total,
    p2: (w2 + tie / 2) / total,
    tie: tie / total,
    exact,
    iterations: total,
  }
}
