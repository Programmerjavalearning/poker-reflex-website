import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { BRAND_ASSETS } from '@/lib/brand';
import { rateLimit, getClientIp } from '@/lib/rate-limit';

function getResendClient(): Resend {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured');
  }

  return new Resend(apiKey);
}

export async function POST(request: NextRequest) {
  try {
    // Rate limit: 5 requests per 10 minutes per IP (best-effort, in-memory)
    const ip = getClientIp(request);
    const limit = rateLimit('subscribe:' + ip, 5, 10 * 60 * 1000);
    if (!limit.ok) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': String(limit.retryAfter) } }
      );
    }

    const { email } = await request.json();

    // Basic email validation
    if (!email || typeof email !== 'string' || !email.includes('@') || email.length > 254) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Sanitize email before embedding in HTML to prevent injection
    const safeEmail = email
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;');

    // Send notification to contact@poker-reflex.com
    const resend = getResendClient();

    await resend.emails.send({
      from: 'Poker Reflex <noreply@updates.poker-reflex.com>',
      to: 'contact@poker-reflex.com',
      subject: 'New Newsletter Subscriber',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <img src="${BRAND_ASSETS.emailLogoUrl}" width="160" alt="Poker Reflex" style="display: block; width: 160px; max-width: 160px; height: auto; margin-bottom: 24px;" />
          <h2>New subscriber!</h2>
          <p>A new user subscribed to Poker Reflex updates:</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Subscribed at:</strong> ${new Date().toLocaleString()}</p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Subscribed successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    );
  }
}
