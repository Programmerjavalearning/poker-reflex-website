import { NextRequest, NextResponse } from 'next/server'
import { SITE_URL } from '@/lib/brand'

const INDEXNOW_KEY = '46f36b2948104bc49b915173f6e23ae5'
const INDEXNOW_KEY_LOCATION = `${SITE_URL}/46f36b2948104bc49b915173f6e23ae5.txt`
const HOST = 'www.poker-reflex.com'
const ALLOWED_HOSTS = ['poker-reflex.com', HOST]

export async function POST(request: NextRequest) {
  try {
    // Security: require a secret token in a custom header
    const providedSecret = request.headers.get('x-indexnow-secret') || ''
    const expectedToken = process.env.INDEXNOW_SECRET

    if (!expectedToken) {
      return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
    }

    if (providedSecret !== expectedToken) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Parse the URL list from the request body
    const body = await request.json()
    const urls: string[] = body.urls

    if (!Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json({ error: 'urls array required' }, { status: 400 })
    }

    // Validate URLs all belong to our host
    for (const url of urls) {
      let parsedUrl: URL

      try {
        parsedUrl = new URL(url)
      } catch {
        return NextResponse.json({ error: `URL does not match host` }, { status: 400 })
      }

      if (parsedUrl.protocol !== 'https:' || !ALLOWED_HOSTS.includes(parsedUrl.hostname)) {
        return NextResponse.json({ error: `URL does not match host` }, { status: 400 })
      }
    }

    // Cap at 10000 URLs (IndexNow limit)
    if (urls.length > 10000) {
      return NextResponse.json({ error: 'Too many URLs' }, { status: 400 })
    }

    // Submit to IndexNow
    const indexNowResponse = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: INDEXNOW_KEY_LOCATION,
        urlList: urls,
      }),
    })

    if (indexNowResponse.ok || indexNowResponse.status === 202) {
      return NextResponse.json({
        success: true,
        status: indexNowResponse.status,
        urlsSubmitted: urls.length,
      })
    } else {
      return NextResponse.json(
        {
          success: false,
          status: indexNowResponse.status,
          error: 'IndexNow rejected the submission',
        },
        { status: 502 }
      )
    }
  } catch (error) {
    console.error('IndexNow submission error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
