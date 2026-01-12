 'use client'

import ScriptLoader from '../components/ScriptLoader'

export default function QuotePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="quote-hero">
        <div className="container">
          <div className="quote-hero-content">
            <div className="quote-hero-text">
              <h1>
                Ready to Power Your <span className="yellow-text">Future?</span>
              </h1>
              <p>
                Get a free, customized solar energy system tailored to your unique project.
                Expert equipment, zero obligation, and accessible financing options available.
              </p>
              <div className="hero-buttons">
                <button
                  className="hero-btn-primary"
                  onClick={() => {
                    const form = document.getElementById('quote-form')
                    if (form) form.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Get Started
                </button>
                <button className="hero-btn-secondary">Learn More</button>
              </div>
            </div>
            <div className="quote-hero-image">
              <div className="image-placeholder-quote">
                <i className="fas fa-solar-panel"></i>
                <p>Solar Installation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="quote-main">
        <div className="container">
          <div className="quote-content">
            {/* Left Column - Why Choose */}
            <div className="quote-left">
              <h2>Why Choose QUANTUMGRID ENERGY?</h2>
              <div className="why-choose-features">
                <div className="why-feature-card">
                  <div className="why-icon yellow">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <div className="why-content">
                    <h3>Robust Guarantee</h3>
                    <p>QUANTUMGRID ENERGY offers robust quality assurance and guarantees for peace of mind.</p>
                  </div>
                </div>

                <div className="why-feature-card">
                  <div className="why-icon teal">
                    <i className="fas fa-dollar-sign"></i>
                  </div>
                  <div className="why-content">
                    <h3>Flexible Financing</h3>
                    <p>We provide flexible financing options tailored to your budget and needs.</p>
                  </div>
                </div>

                <div className="why-feature-card">
                  <div className="why-icon blue">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="why-content">
                    <h3>Local Expertise</h3>
                    <p>Our team of local experts understands regional regulations and environmental factors.</p>
                  </div>
                </div>

                <div className="why-feature-card">
                  <div className="why-icon purple">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="why-content">
                    <h3>24-Hour Warranty</h3>
                    <p>Comprehensive warranty on our products and installations.</p>
                  </div>
                </div>
              </div>

              <div className="inquire-section">
                <p>Inquire by WhatsApp/Email</p>
                <div className="inquire-links">
                  <a href="#" className="inquire-link whatsapp">
                    <i className="fab fa-whatsapp"></i>
                    <span>Get in touch</span>
                  </a>
                  <a href="/contact" className="inquire-link email">
                    <i className="fas fa-envelope"></i>
                    <span>Get in touch</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Quote Form */}
            <div className="quote-right">
              <h2>Get Your Free Quote</h2>
              <p className="form-intro">Fill out the form below to get a free, no-obligation quote for your solar energy system.</p>

              <form className="quote-form" id="quote-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input type="text" id="firstName" name="firstName" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="address">Address/Region *</label>
                    <input type="text" id="address" name="address" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="projectType">Project Type *</label>
                    <select id="projectType" name="projectType" required>
                      <option value="">Select Project Type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="industrial">Industrial</option>
                      <option value="rural">Rural Electrification</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="location">Project Location *</label>
                    <input type="text" id="location" name="location" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="city">City/Country</label>
                    <input type="text" id="city" name="city" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="description">Project Description</label>
                  <textarea id="description" name="description" rows={4}></textarea>
                </div>

                <div className="form-checkbox">
                  <input type="checkbox" id="privacy" name="privacy" required />
                  <label htmlFor="privacy">
                    I agree to the <a href="#">QUANTUMGRID ENERGY Privacy Policy</a>.
                  </label>
                </div>

                <button type="submit" className="quote-submit-btn">Get My Free Quote</button>

                <p className="form-disclaimer">
                  By clicking &apos;Get My Free Quote&apos;, you agree to our <a href="#">Terms &amp; Conditions</a> and <a href="#">Privacy Policy</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <ScriptLoader scripts={[]} pageScripts={['/js/quote.js']} />
    </>
  )
}

