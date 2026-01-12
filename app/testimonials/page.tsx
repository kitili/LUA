import ScriptLoader from '../components/ScriptLoader'

const testimonialCards = [
  {
    text: "The reliability of QUANTUMGRID ENERGY's solar solutions has exceeded our expectations. We've seen consistent performance and significant cost savings.",
    name: 'Amara Nduka',
    title: 'Head of Operations',
  },
  {
    text: "QUANTUMGRID ENERGY's LED retrofit program transformed our facility's energy efficiency. The results speak for themselves.",
    name: 'Chidi Akachi',
    title: 'Sustainability Manager',
  },
  {
    text: 'We appreciate QUANTUMGRID ENERGY&apos;s commitment to innovation. Their cutting-edge solutions have positioned us as industry leaders.',
    name: 'Nneka Okoro',
    title: 'Head of Procurement',
  },
  {
    text: 'The pre-installation monitoring system from QUANTUMGRID ENERGY gave us complete visibility into our energy consumption patterns.',
    name: 'Kofi Mensah',
    title: 'Energy Manager',
  },
  {
    text: "QUANTUMGRID ENERGY's flexible solutions allowed us to scale our renewable energy infrastructure according to our business needs.",
    name: 'Japhet Obinna',
    title: 'Chief Financial Officer',
  },
  {
    text: "QUANTUMGRID ENERGY's community-focused approach to renewable energy has made a real difference in the areas we serve.",
    name: 'Michael Okoro',
    title: 'Head of CSR',
  },
]

const videoCards = [
  {
    title: 'Enterprise Solar Success',
    copy: 'How Kwasi Obeng saves over 30% in kWh renewable energy.',
    icon: 'fa-home',
    label: 'Solar Installation',
  },
  {
    title: 'Manufacturing Excellence',
    copy: 'How QUANTUMGRID ENERGY increased industrial power usage.',
    icon: 'fa-solar-panel',
    label: 'Solar Farm',
  },
]

const certifications = [
  { title: 'ISO 9001', subtitle: 'Quality Management', icon: 'fa-certificate', color: 'yellow' },
  { title: 'ISO 14001', subtitle: 'Environmental Management', icon: 'fa-leaf', color: 'teal' },
  { title: 'ISO 45001', subtitle: 'Safety Management', icon: 'fa-shield-alt', color: 'yellow' },
  { title: 'Solar Industry Excellence', subtitle: 'Industry Recognition', icon: 'fa-award', color: 'teal' },
]

export default function TestimonialsPage() {
  return (
    <>
      {/* Client Success Stories Hero Section */}
      <section className="testimonials-hero">
        <div className="container">
          <div className="testimonials-hero-content">
            <h1>Client Success Stories</h1>
            <p>See how QUANTUMGRID ENERGY is powering Africa&apos;s renewable energy revolution, one satisfied client at a time.</p>
            <div className="testimonials-stats">
              <div className="testimonial-stat">
                <div className="testimonial-stat-number">500+</div>
                <div className="testimonial-stat-label">Projects Completed</div>
              </div>
              <div className="testimonial-stat">
                <div className="testimonial-stat-number">98%</div>
                <div className="testimonial-stat-label">Client Satisfaction</div>
              </div>
              <div className="testimonial-stat">
                <div className="testimonial-stat-number">15+</div>
                <div className="testimonial-stat-label">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="featured-testimonial">
        <div className="container">
          <div className="featured-testimonial-card">
            <div className="featured-testimonial-image">
              <div className="testimonial-image-placeholder">
                <i className="fas fa-user"></i>
                <p>Client Photo</p>
              </div>
            </div>
            <div className="featured-testimonial-content">
              <div className="quote-icon-large">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="testimonial-text-large">
                QUANTUMGRID ENERGY reduced our energy costs by 30% and provided excellent support throughout the entire implementation.
                Their team&apos;s expertise and commitment to sustainability aligns perfectly with our corporate values.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar-small">
                  <i className="fas fa-user-circle"></i>
                </div>
                <div className="author-info">
                  <div className="author-name">Kelechi Okoli</div>
                  <div className="author-title">CEO, Prime Holdings Africa</div>
                </div>
              </div>
              <div className="testimonial-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Clients Say Section */}
      <section className="client-testimonials">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Read feedback from organizations across Africa who have transformed their energy infrastructure with QUANTUMGRID ENERGY.
          </p>

          <div className="testimonials-grid">
            {testimonialCards.map((card) => (
              <div className="testimonial-card" key={card.name}>
                <div className="testimonial-stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="testimonial-text">{card.text}</p>
                <div className="testimonial-author-small">
                  <div className="author-avatar">
                    <i className="fas fa-user-circle"></i>
                  </div>
                  <div className="author-details">
                    <div className="author-name-small">{card.name}</div>
                    <div className="author-title-small">{card.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="video-testimonials">
        <div className="container">
          <h2 className="section-title">Video Testimonials</h2>
          <p className="section-subtitle">Hear directly from our clients about their QUANTUMGRID ENERGY experience.</p>

          <div className="video-grid">
            {videoCards.map((video) => (
              <div className="video-card" key={video.title}>
                <div className="video-thumbnail">
                  <div className="video-placeholder">
                    <i className={`fas ${video.icon}`}></i>
                    <p>{video.label}</p>
                  </div>
                  <div className="play-button">
                    <i className="fas fa-play"></i>
                  </div>
                </div>
                <div className="video-info">
                  <h3>{video.title}</h3>
                  <p>{video.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certified Excellence Section */}
      <section className="certified-excellence">
        <div className="container">
          <h2 className="section-title white">Certified Excellence</h2>
          <p className="section-subtitle white">Recognized by leading industry organizations across Africa.</p>

          <div className="certifications-grid">
            {certifications.map((cert) => (
              <div className="certification-card" key={cert.title}>
                <div className={`cert-icon ${cert.color}`}>
                  <i className={`fas ${cert.icon}`}></i>
                </div>
                <h3>{cert.title}</h3>
                <p>{cert.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ScriptLoader scripts={[]} pageScripts={['/js/testimonials.js']} />
    </>
  )
}

