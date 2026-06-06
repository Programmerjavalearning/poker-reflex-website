// Simple in-memory, best-effort rate limiter for API routes.
//
// Note: on Vercel serverless the module state is per instance and not shared
// across instances, nor persisted between cold starts. This throttles bursts on
// a warm instance (basic spam) but is not a distributed guarantee. It is a
// deliberate zero-dependency, zero-cost tradeoff. For strict limits, move to a
// shared store (Upstash Redis or Vercel KV).

interface Hit {
  count: number
  resetAt: number
}

const store = new Map<string, Hit>()

// Drop expired entries so the map cannot grow without bound. Cheap to run since
// API traffic on a landing site is low.
function purgeExpired(now: number): void {
  const expired: string[] = []
  store.forEach((hit, key) => {
    if (now > hit.resetAt) {
      expired.push(key)
    }
  })
  expired.forEach((key) => store.delete(key))
}

export interface RateLimitResult {
  ok: boolean
  // Seconds until the caller may retry (0 when allowed).
  retryAfter: number
}

export function rateLimit(key: string, limit: number, windowMs: number): RateLimitResult {
  const now = Date.now()
  const existing = store.get(key)

  if (!existing || now > existing.resetAt) {
    purgeExpired(now)
    store.set(key, { count: 1, resetAt: now + windowMs })
    return { ok: true, retryAfter: 0 }
  }

  if (existing.count >= limit) {
    return { ok: false, retryAfter: Math.ceil((existing.resetAt - now) / 1000) }
  }

  existing.count += 1
  return { ok: true, retryAfter: 0 }
}

// Resolve the client IP behind Vercel's proxy. x-forwarded-for may contain a
// comma-separated list; the first entry is the original client.
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  return request.headers.get('x-real-ip') || 'unknown'
}
