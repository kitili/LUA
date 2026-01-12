-- Database Schema for QUANTUMGRID ENERGY
-- This is a PostgreSQL schema example. Adjust for your database choice.

-- Contact Form Submissions
CREATE TABLE contact_submissions (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'new' -- new, read, replied
);

-- Quote Requests
CREATE TABLE quote_requests (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    address TEXT NOT NULL,
    project_type VARCHAR(50) NOT NULL, -- residential, commercial, industrial, rural
    location VARCHAR(255) NOT NULL,
    city VARCHAR(100),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'pending' -- pending, quoted, accepted, rejected
);

-- Career Applications
CREATE TABLE career_applications (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(255) NOT NULL,
    area_of_interest VARCHAR(100) NOT NULL,
    resume_path VARCHAR(500), -- Path to uploaded resume file
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'pending' -- pending, reviewing, accepted, rejected
);

-- Create indexes for better query performance
CREATE INDEX idx_contact_email ON contact_submissions(email);
CREATE INDEX idx_contact_created ON contact_submissions(created_at);
CREATE INDEX idx_quote_email ON quote_requests(email);
CREATE INDEX idx_quote_status ON quote_requests(status);
CREATE INDEX idx_career_email ON career_applications(email);
CREATE INDEX idx_career_status ON career_applications(status);

