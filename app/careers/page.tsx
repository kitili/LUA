 'use client'

import ScriptLoader from '../components/ScriptLoader'

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="container">
          <div className="careers-hero-content">
            <div className="careers-hero-text">
              <h1>
                Power Africa&apos;s <span className="yellow-text">Future</span> with Us
              </h1>
              <p>
                QUANTUMGRID ENERGY is a clean renewable energy infrastructure company. We offer expertise,
                diversity, and innovation to create sustainable impact for millions of communities.
              </p>
              <div className="careers-hero-buttons">
                <button
                  className="careers-btn-primary"
                  onClick={() => {
                    const el = document.getElementById('open-positions')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  View Open Positions
                </button>
                <button className="careers-btn-secondary">Learn Our Culture</button>
              </div>
            </div>
            <div className="careers-hero-image">
              <div className="image-placeholder-careers">
                <i className="fas fa-users"></i>
                <p>Our Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="open-positions" id="open-positions">
        <div className="container">
          <h2 className="section-title">Open Positions</h2>
          <p className="section-subtitle">
            We&apos;re an equal opportunity employer. We&apos;re always looking for passionate individuals to join our team
            and make a real impact for renewable energy services in Africa.
          </p>

          <div className="jobs-grid">
            {[
              {
                title: 'Senior Software Engineer',
                icon: 'fa-code',
                copy: 'Lead development of innovative software solutions for renewable energy management systems.',
                location: 'Lagos, Nigeria',
              },
              {
                title: 'Solar Project Manager',
                icon: 'fa-solar-panel',
                copy: 'Oversee solar installation projects from conception to completion, ensuring quality and efficiency.',
                location: 'Accra, Ghana',
              },
              {
                title: 'Business Development Lead',
                icon: 'fa-chart-line',
                copy: 'Drive business growth by identifying opportunities and building strategic partnerships across Africa.',
                location: 'Nairobi, Kenya',
              },
              {
                title: 'Field Engineer',
                icon: 'fa-tools',
                copy: 'Install, maintain, and troubleshoot solar energy systems in various field locations.',
                location: 'Cape Town, South Africa',
              },
              {
                title: 'UI/UX Designer',
                icon: 'fa-palette',
                copy: 'Create intuitive and engaging user experiences for our digital energy management platforms.',
                location: 'Johannesburg, South Africa',
              },
              {
                title: 'Community Relations Manager',
                icon: 'fa-handshake',
                copy: 'Build strong relationships with local communities and stakeholders for sustainable project implementation.',
                location: 'Abuja, Nigeria',
              },
            ].map((job) => (
              <div className="job-card" key={job.title}>
                <div className="job-icon">
                  <i className={`fas ${job.icon}`}></i>
                </div>
                <h3>{job.title}</h3>
                <p>{job.copy}</p>
                <div className="job-location">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{job.location}</span>
                </div>
                <button className="apply-btn">Apply Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="why-join">
        <div className="container">
          <div className="why-join-content">
            <div className="why-join-text">
              <h2>Why Join QUANTUMGRID ENERGY?</h2>
              <p>We&apos;re building the future of renewable energy in Africa. Join a team that values innovation, diversity, and meaningful impact.</p>

              <div className="benefits-list">
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <div className="benefit-content">
                    <h3>Innovation at Scale</h3>
                    <p>Be part of groundbreaking projects transforming Africa&apos;s energy landscape.</p>
                  </div>
                </div>

                <div className="benefit-item">
                  <div className="benefit-icon">
                    <i className="fas fa-leaf"></i>
                  </div>
                  <div className="benefit-content">
                    <h3>Sustainable Impact</h3>
                    <p>Contribute directly to environmental sustainability and socio-economic development.</p>
                  </div>
                </div>

                <div className="benefit-item">
                  <div className="benefit-icon">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <div className="benefit-content">
                    <h3>Continuous Learning</h3>
                    <p>Access training, workshops, and mentorship programs to foster professional growth.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="why-join-image">
              <div className="image-placeholder-why-join">
                <i className="fas fa-users"></i>
                <p>Team Collaboration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Apply Section */}
      <section className="quick-apply">
        <div className="container">
          <div className="quick-apply-content">
            <h2>Ready to Power Africa&apos;s Future?</h2>
            <p>
              Can&apos;t see the perfect role? We&apos;re always looking for talented individuals to join our team. Submit your resume for future consideration.
            </p>

            <form className="quick-apply-form" id="career-apply-form">
              <div className="form-row">
                <div className="form-group">
                  <input type="text" id="career-name" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" id="career-email" name="email" placeholder="Your Email" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="file-upload-label">
                    <input type="file" id="career-resume" name="resume" accept=".pdf,.doc,.docx" required />
                    <span className="file-upload-text">
                      <i className="fas fa-upload"></i>
                      Upload Your Resume
                    </span>
                  </label>
                </div>
                <div className="form-group">
                  <select id="career-interest" name="interest" required>
                    <option value="">Select Area of Interest</option>
                    <option value="engineering">Engineering</option>
                    <option value="management">Project Management</option>
                    <option value="sales">Sales &amp; Business Development</option>
                    <option value="design">Design &amp; UX</option>
                    <option value="operations">Operations</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="submit-application-btn">Submit Application</button>
            </form>
          </div>
        </div>
      </section>

      <ScriptLoader scripts={[]} pageScripts={['/js/careers.js']} />
    </>
  )
}

