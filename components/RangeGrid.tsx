'use client'

const RANKS = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'] as const

function getHandLabel(row: number, col: number): string {
  const r1 = RANKS[row]
  const r2 = RANKS[col]
  if (row === col) return `${r1}${r2}`
  if (col > row) return `${r1}${r2}s`
  return `${r2}${r1}o`
}

function getAllHandLabels(): string[][] {
  return RANKS.map((_, row) =>
    RANKS.map((_, col) => getHandLabel(row, col))
  )
}

interface RangeGridProps {
  title: string
  caption: string
  ariaLabel: string
  inRangeHands: string[]
}

export default function RangeGrid({ title, caption, ariaLabel, inRangeHands }: RangeGridProps) {
  const grid = getAllHandLabels()
  const inRange = new Set(inRangeHands)

  return (
    <figure className="my-10">
      <h3
        className="font-heading font-bold text-xl md:text-2xl mb-4 text-center"
        style={{ color: 'var(--text)' }}
      >
        {title}
      </h3>
      <div
        role="img"
        aria-label={ariaLabel}
        className="grid mx-auto w-full"
        style={{
          maxWidth: '420px',
          gridTemplateColumns: 'repeat(13, 1fr)',
          gap: '2px',
        }}
      >
        {grid.flat().map((hand) => {
          const active = inRange.has(hand)
          return (
            <div
              key={hand}
              className="flex items-center justify-center rounded-[3px] select-none"
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
            </div>
          )
        })}
      </div>
      <div className="flex items-center justify-center gap-5 mt-3">
        <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-secondary)' }}>
          <span
            className="inline-block w-3 h-3 rounded-sm"
            style={{ backgroundColor: 'rgba(74, 222, 128, 0.85)' }}
          />
          Play / Raise
        </span>
        <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-secondary)' }}>
          <span
            className="inline-block w-3 h-3 rounded-sm"
            style={{ backgroundColor: '#161c25', border: '1px solid #30363d' }}
          />
          Fold
        </span>
      </div>
      <figcaption
        className="text-center text-sm mt-2"
        style={{ color: 'var(--text-secondary)' }}
      >
        {caption}
      </figcaption>
    </figure>
  )
}
