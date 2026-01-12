import { NextRequest, NextResponse } from 'next/server'
import { query } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { firstName, lastName, email, subject, message } = body
    
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Save to database
    await query(
      `INSERT INTO contact_submissions 
        (first_name, last_name, email, subject, message) 
       VALUES ($1, $2, $3, $4, $5)`,
      [firstName, lastName, email, subject, message]
    )

    // TODO: Send email notification
    // Example: await sendEmail({ to: 'info@quantumgridenergy.com', subject, body: message })

    // Log the submission (remove in production or use proper logging)
    console.log('Contact form submission:', { firstName, lastName, email, subject, message })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for contacting us! We will get back to you soon.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit contact form. Please try again later.' },
      { status: 500 }
    )
  }
}

