import { NextRequest, NextResponse } from 'next/server'
import { query } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { 
      firstName, 
      lastName, 
      email, 
      phone, 
      address, 
      projectType, 
      location 
    } = body
    
    if (!firstName || !lastName || !email || !phone || !address || !projectType || !location) {
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

    // Validate phone format (basic)
    const phoneRegex = /^[\d\s\-\+\(\)]+$/
    if (!phoneRegex.test(phone) || phone.replace(/\D/g, '').length < 10) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      )
    }

    // Save to database
    await query(
      `INSERT INTO quote_requests
        (first_name, last_name, email, phone, address, project_type, location, city, description)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [
        firstName,
        lastName,
        email,
        phone,
        address,
        projectType,
        location,
        body.city || null,
        body.description || null
      ]
    )

    // TODO: Send email notification
    // Example: await sendEmail({ 
    //   to: 'sales@quantumgridenergy.com', 
    //   subject: `New Quote Request - ${projectType}`,
    //   body: `New quote request from ${firstName} ${lastName}...`
    // })

    console.log('Quote form submission:', body)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your quote request! We will contact you shortly with a customized proposal.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Quote form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit quote request. Please try again later.' },
      { status: 500 }
    )
  }
}

