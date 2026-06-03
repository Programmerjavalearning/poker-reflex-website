'use client'

import { useState, useId } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, RotateCcw } from 'lucide-react'

// ---------------------------------------------------------------------------
// Pure math helpers
// ---------------------------------------------------------------------------

function gcd(a: number, b: number): number {
  a = Math.abs(Math.round(a))
  b = Math.abs(Math.round(b))
  while (b) {
    const t = b
    b = a % b
    a = t
  }
  return a === 0 ? 1 : a
}

/**
 * Returns the pot odds ratio as a string like "3:1".
 * potBeforeBet + bet = pot before your call.
 * The ratio is (pot before your call) : (your call).
 * Simplified to lowest integer terms.
 */
function formatRatio(potBeforeBet: number, bet: number): string {
  if (bet <= 0 || potBeforeBet < 0) return 'N/A'
  const potBeforeCall = potBeforeBet + bet
  const call = bet
  // Scale to integers (2 decimal places)
  const scale = 100
  const scaledPot = Math.round(potBeforeCall * scale)
  const scaledCall = Math.round(call * scale)
  const d = gcd(scaledPot, scaledCall)
  const simplPot = scaledPot / d
  const simplCall = scaledCall / d

  if (simplCall === 1) return `${simplPot}:1`
  if (simplPot % simplCall === 0) return `${simplPot / simplCall}:1`
  // If numbers are large, fall back to X.X:1
  if (simplPot > 99 || simplCall > 99) {
    const ratio = potBeforeCall / call
    return `${parseFloat(ratio.toFixed(1))}:1`
  }
  return `${simplPot}:${simplCall}`
}

function fmt(n: number, decimals = 1): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals,
  }).format(n)
}

function fmtCurrency(n: number): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(n)
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type Verdict = 'profitable' | 'fold' | 'marginal' | 'enter-values'

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function InputLabel({ htmlFor, label }: { htmlFor: string; label: string }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-semibold mb-1.5"
      style={{ color: 'var(--text)' }}
    >
      {label}
    </label>
  )
}

function NumberInput({
  id,
  value,
  onChange,
  prefix = '$',
}: {
  id: string
  value: number
  onChange: (v: number) => void
  prefix?: string
}) {
  return (
    <div className="relative">
      {prefix && (
        <span
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-medium select-none"
          style={{ color: 'var(--text-secondary)' }}
        >
          {prefix}
        </span>
      )}
      <input
        id={id}
        type="number"
        min={0}
        step="any"
        value={value === 0 ? '' : value}
        placeholder="0"
        onChange={(e) => {
          const raw = parseFloat(e.target.value)
          onChange(isNaN(raw) || raw < 0 ? 0 : raw)
        }}
        className="w-full rounded-xl border px-4 py-3.5 text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-green/50"
        style={{
          backgroundColor: 'var(--background)',
          borderColor: 'var(--border)',
          color: 'var(--text)',
          paddingLeft: prefix ? '2rem' : undefined,
        }}
      />
    </div>
  )
}

// ---------------------------------------------------------------------------
// Animated number display
// ---------------------------------------------------------------------------

function AnimatedValue({ value, suffix = '' }: { value: string; suffix?: string }) {
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={value}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        className="inline-block"
      >
        {value}{suffix}
      </motion.span>
    </AnimatePresence>
  )
}

// ---------------------------------------------------------------------------
// Verdict pill
// ---------------------------------------------------------------------------

function VerdictBadge({ verdict, requiredPct, equityPct }: {
  verdict: Verdict
  requiredPct: number
  equityPct: number
}) {
  if (verdict === 'enter-values') {
    return (
      <div
        className="rounded-xl border px-5 py-4 text-sm"
        style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
      >
        Enter pot and bet values to see your verdict.
      </div>
    )
  }

  const cfg = {
    profitable: {
      label: 'Profitable call',
      detail: `Your equity (${fmt(equityPct, 1)}%) beats the required ${fmt(requiredPct, 1)}%, so this call is profitable.`,
      color: 'var(--green)',
      bg: 'rgba(74, 222, 128, 0.08)',
      border: 'rgba(74, 222, 128, 0.3)',
    },
    fold: {
      label: 'Fold',
      detail: `Your equity (${fmt(equityPct, 1)}%) is below the required ${fmt(requiredPct, 1)}%. Fold.`,
      color: 'var(--red)',
      bg: 'rgba(239, 68, 68, 0.08)',
      border: 'rgba(239, 68, 68, 0.3)',
    },
    marginal: {
      label: 'Marginal',
      detail: `Your equity (${fmt(equityPct, 1)}%) is within 2% of the required ${fmt(requiredPct, 1)}%. This is borderline.`,
      color: 'var(--gold)',
      bg: 'rgba(251, 191, 36, 0.08)',
      border: 'rgba(251, 191, 36, 0.3)',
    },
  }[verdict]

  return (
    <motion.div
      key={verdict + requiredPct + equityPct}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="rounded-xl border px-5 py-4"
      style={{ backgroundColor: cfg.bg, borderColor: cfg.border }}
    >
      <p className="font-heading font-bold text-lg mb-1" style={{ color: cfg.color }}>
        {cfg.label}
      </p>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {cfg.detail}
      </p>
    </motion.div>
  )
}

// ---------------------------------------------------------------------------
// Main calculator component
// ---------------------------------------------------------------------------

const DEFAULTS = { pot: 100, bet: 50, equity: 35, implied: 0 }

export default function PotOddsCalculator() {
  const [pot, setPot] = useState(DEFAULTS.pot)
  const [bet, setBet] = useState(DEFAULTS.bet)
  const [equity, setEquity] = useState(DEFAULTS.equity)
  const [implied, setImplied] = useState(DEFAULTS.implied)
  const [showAdvanced, setShowAdvanced] = useState(false)

  const potId = useId()
  const betId = useId()
  const equityId = useId()
  const impliedId = useId()

  // ---- calculations ----
  const hasValues = pot > 0 && bet > 0

  // required equity = call / (pot + 2 * bet)
  //   where pot is pot before opponent's bet, bet = call amount
  const requiredPct = hasValues
    ? (bet / (pot + 2 * bet)) * 100
    : 0

  // with implied odds: required = call / (pot + 2*bet + implied)
  const requiredPctWithImplied =
    hasValues && implied > 0
      ? (bet / (pot + 2 * bet + implied)) * 100
      : requiredPct

  const ratio = hasValues ? formatRatio(pot, bet) : 'N/A'

  const diff = equity - requiredPct
  const MARGINAL_THRESHOLD = 2

  const verdict: Verdict = !hasValues
    ? 'enter-values'
    : Math.abs(diff) <= MARGINAL_THRESHOLD
    ? 'marginal'
    : diff > 0
    ? 'profitable'
    : 'fold'

  const diffWithImplied = equity - requiredPctWithImplied
  const verdictWithImplied: Verdict =
    implied > 0 && hasValues
      ? Math.abs(diffWithImplied) <= MARGINAL_THRESHOLD
        ? 'marginal'
        : diffWithImplied > 0
        ? 'profitable'
        : 'fold'
      : verdict

  function handleReset() {
    setPot(DEFAULTS.pot)
    setBet(DEFAULTS.bet)
    setEquity(DEFAULTS.equity)
    setImplied(DEFAULTS.implied)
    setShowAdvanced(false)
  }

  return (
    <div
      className="rounded-2xl border"
      style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
    >
      <div className="p-6 md:p-8">
        <h2
          className="font-heading font-bold text-xl md:text-2xl mb-6"
          style={{ color: 'var(--text)' }}
        >
          Pot Odds Calculator
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Pot size */}
          <div>
            <InputLabel htmlFor={potId} label="Pot size before the bet" />
            <NumberInput id={potId} value={pot} onChange={setPot} />
          </div>

          {/* Opponent's bet */}
          <div>
            <InputLabel htmlFor={betId} label="Opponent's bet" />
            <NumberInput id={betId} value={bet} onChange={setBet} />
          </div>
        </div>

        {/* Equity slider */}
        <div className="mt-5">
          <div className="flex items-center justify-between mb-1.5">
            <InputLabel htmlFor={equityId} label="Your estimated equity" />
            <span
              className="text-sm font-semibold tabular-nums"
              style={{ color: 'var(--green)' }}
            >
              {equity}%
            </span>
          </div>
          <input
            id={equityId}
            type="range"
            min={0}
            max={100}
            step={1}
            value={equity}
            onChange={(e) => setEquity(Number(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer"
            style={{
              accentColor: 'var(--green)',
              backgroundColor: 'var(--border)',
            }}
            aria-label={`Your estimated equity: ${equity}%`}
          />
          <div
            className="flex justify-between text-xs mt-1"
            style={{ color: 'var(--text-secondary)' }}
          >
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>

        {/* Advanced section */}
        <div className="mt-5">
          <button
            onClick={() => setShowAdvanced((v) => !v)}
            className="flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-80"
            style={{ color: 'var(--text-secondary)' }}
            aria-expanded={showAdvanced}
          >
            <ChevronDown
              className="w-4 h-4 transition-transform duration-200"
              style={{ transform: showAdvanced ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
            Advanced: implied odds
          </button>

          <AnimatePresence>
            {showAdvanced && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="mt-4"
              >
                <InputLabel
                  htmlFor={impliedId}
                  label="Extra chips you expect to win on later streets"
                />
                <NumberInput id={impliedId} value={implied} onChange={setImplied} />
                <p className="text-xs mt-2" style={{ color: 'var(--text-secondary)' }}>
                  Implied odds reduce the required equity by factoring in future winnings when
                  you hit your draw.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Reset button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg border transition-colors hover:bg-background"
            style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset
          </button>
        </div>

        {/* ---- Results ---- */}
        <div
          className="mt-6 pt-6"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <h3
            className="font-heading font-semibold text-base mb-5"
            style={{ color: 'var(--text)' }}
          >
            Results
          </h3>

          {/* Metrics row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            <div
              className="rounded-xl border p-4"
              style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}
            >
              <p className="text-xs font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>
                Pot odds (ratio)
              </p>
              <p className="font-heading font-bold text-xl tabular-nums" style={{ color: 'var(--text)' }}>
                <AnimatedValue value={hasValues ? ratio : 'N/A'} />
              </p>
            </div>

            <div
              className="rounded-xl border p-4"
              style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}
            >
              <p className="text-xs font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>
                Required equity
              </p>
              <p className="font-heading font-bold text-xl tabular-nums" style={{ color: 'var(--text)' }}>
                <AnimatedValue value={hasValues ? fmt(requiredPct, 1) : 'N/A'} suffix={hasValues ? '%' : ''} />
              </p>
            </div>

            <div
              className="rounded-xl border p-4 col-span-2 sm:col-span-1"
              style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}
            >
              <p className="text-xs font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>
                Your equity
              </p>
              <p className="font-heading font-bold text-xl tabular-nums" style={{ color: 'var(--green)' }}>
                <AnimatedValue value={String(equity)} suffix="%" />
              </p>
            </div>
          </div>

          {/* Pot summary */}
          {hasValues && (
            <p className="text-xs mb-5" style={{ color: 'var(--text-secondary)' }}>
              Pot before call: <strong style={{ color: 'var(--text)' }}>${fmtCurrency(pot + bet)}</strong>
              {' '}&nbsp;&middot;&nbsp; Total pot after call: <strong style={{ color: 'var(--text)' }}>${fmtCurrency(pot + 2 * bet)}</strong>
              {implied > 0 && (
                <> &nbsp;&middot;&nbsp; Effective pot (with implied): <strong style={{ color: 'var(--text)' }}>${fmtCurrency(pot + 2 * bet + implied)}</strong></>
              )}
            </p>
          )}

          {/* Base verdict */}
          <VerdictBadge verdict={verdict} requiredPct={requiredPct} equityPct={equity} />

          {/* Implied odds verdict */}
          {implied > 0 && hasValues && (
            <div className="mt-3">
              <p className="text-xs mb-2" style={{ color: 'var(--text-secondary)' }}>
                With implied odds (${fmtCurrency(implied)} expected on later streets):
              </p>
              <VerdictBadge
                verdict={verdictWithImplied}
                requiredPct={requiredPctWithImplied}
                equityPct={equity}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
