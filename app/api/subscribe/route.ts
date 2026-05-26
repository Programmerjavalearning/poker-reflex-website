import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
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
    await resend.emails.send({
      from: 'Poker Reflex <noreply@updates.poker-reflex.com>',
      to: 'contact@poker-reflex.com',
      subject: 'New Newsletter Subscriber',
      html: `
        <div>
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
