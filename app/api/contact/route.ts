import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { BRAND_ASSETS } from '@/lib/brand'

const ALLOWED_TYPES = ['Partnership', 'Creator / Affiliate', 'Press / Media', 'General inquiry'] as const
type InquiryType = (typeof ALLOWED_TYPES)[number]

const SUBJECT_PREFIX: Record<InquiryType, string> = {
  'Partnership': '[Partnership]',
  'Creator / Affiliate': '[Creator]',
  'Press / Media': '[Press]',
  'General inquiry': '[Contact]',
}

function sanitizeField(value: string): string {
  return value.replace(/[\r\n]/g, ' ').trim()
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

function getResendClient(): Resend {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured')
  }

  return new Resend(apiKey)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { inquiryType, name, email, company, message } = body

    // Validate required fields exist and are strings
    if (
      !inquiryType || typeof inquiryType !== 'string' ||
      !name || typeof name !== 'string' ||
      !email || typeof email !== 'string' ||
      !message || typeof message !== 'string'
    ) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      )
    }

    // Validate inquiry type is in allowed list
    if (!ALLOWED_TYPES.includes(inquiryType as InquiryType)) {
      return NextResponse.json(
        { error: 'Invalid inquiry type.' },
        { status: 400 }
      )
    }

    // Validate lengths
    if (name.length > 100) {
      return NextResponse.json(
        { error: 'Name must be 100 characters or fewer.' },
        { status: 400 }
      )
    }
    if (email.length > 200) {
      return NextResponse.json(
        { error: 'Email must be 200 characters or fewer.' },
        { status: 400 }
      )
    }
    if (company && typeof company === 'string' && company.length > 200) {
      return NextResponse.json(
        { error: 'Company name must be 200 characters or fewer.' },
        { status: 400 }
      )
    }
    if (message.length < 20) {
      return NextResponse.json(
        { error: 'Message must be at least 20 characters.' },
        { status: 400 }
      )
    }
    if (message.length > 5000) {
      return NextResponse.json(
        { error: 'Message must be 5000 characters or fewer.' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email) || email.length > 254) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    // Sanitize fields to prevent header injection
    const safeName = sanitizeField(name)
    const safeEmail = sanitizeField(email)
    const safeCompany = company && typeof company === 'string' ? sanitizeField(company) : ''

    const prefix = SUBJECT_PREFIX[inquiryType as InquiryType]
    const subject = `${prefix} New message from ${safeName}`

    const companyLine = safeCompany
      ? `<p><strong>Company:</strong> ${escapeHtml(safeCompany)}</p>`
      : ''

    const resend = getResendClient()

    await resend.emails.send({
      from: 'Poker Reflex Contact <noreply@updates.poker-reflex.com>',
      to: 'contact@poker-reflex.com',
      replyTo: safeEmail,
      subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <img src="${BRAND_ASSETS.emailLogoUrl}" width="160" alt="Poker Reflex" style="display: block; width: 160px; max-width: 160px; height: auto; margin-bottom: 24px;" />
          <h2>${escapeHtml(prefix)} Contact Form Submission</h2>
          <hr style="border: 1px solid #eee;" />
          <p><strong>Inquiry Type:</strong> ${escapeHtml(inquiryType)}</p>
          <p><strong>Name:</strong> ${escapeHtml(safeName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(safeEmail)}</p>
          ${companyLine}
          <hr style="border: 1px solid #eee;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(message.trim())}</p>
          <hr style="border: 1px solid #eee;" />
          <p style="color: #888; font-size: 12px;">Sent from poker-reflex.com/contact at ${new Date().toISOString()}</p>
        </div>
      `,
    })

    return NextResponse.json(
      { success: true, message: 'Message sent successfully.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    )
  }
}
