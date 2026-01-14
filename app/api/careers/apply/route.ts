import { NextRequest, NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { put } from '@vercel/blob'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const areaOfInterest = formData.get('interest') as string
    const resume = formData.get('resume') as File | null

    // Validate required fields
    if (!name || !email || !areaOfInterest) {
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

    let savedResumeUrl: string | null = null

    // Validate file if provided
    if (resume && resume.size > 0) {
      const maxSize = 5 * 1024 * 1024 // 5MB
      if (resume.size > maxSize) {
        return NextResponse.json(
          { error: 'Resume file size must be less than 5MB' },
          { status: 400 }
        )
      }

      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      if (!allowedTypes.includes(resume.type)) {
        return NextResponse.json(
          { error: 'Resume must be a PDF or Word document' },
          { status: 400 }
        )
      }

      // Save file to Vercel Blob (serverless-friendly)
      const filename = `resumes/${Date.now()}-${resume.name}`
      const uploadResult = await put(filename, resume, {
        access: 'private',
      })
      savedResumeUrl = uploadResult.url
    }

    // Save to database
    await query(
      `INSERT INTO career_applications 
        (name, email, area_of_interest, resume_path) 
       VALUES ($1, $2, $3, $4)`,
      [name, email, areaOfInterest, savedResumeUrl]
    )

    // TODO: Send email notification
    // Example: await sendEmail({
    //   to: 'careers@quantumgridenergy.com',
    //   subject: `New Career Application - ${areaOfInterest}`,
    //   body: `New application from ${name}...`,
    //   attachments: resume ? [{ filename: resume.name, path: filepath }] : []
    // })

    console.log('Career application submission:', { name, email, areaOfInterest })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your application! We will review it and get back to you soon.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Career application error:', error)
    return NextResponse.json(
      { error: 'Failed to submit application. Please try again later.' },
      { status: 500 }
    )
  }
}

