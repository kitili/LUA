import ScriptLoader from '../components/ScriptLoader'

export default function Contact() {
  return (
    <>
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1>Contact <span className="yellow-text">Us</span></h1>
            <p>We&apos;re happy to help you. Tell us about your challenge and let&apos;s build a more sustainable future with renewable energy experts.</p>
            <div className="hero-contact-hint">
              <i className="fas fa-map-marker-alt"></i>
              <span>Get in touch with us</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-main">
        <div className="container">
          <div className="contact-content">
            <div className="contact-left">
              <h2>Get In Touch</h2>
              <p className="intro-text">You need to know us better, but we are happy to answer all your questions. We are here to help you. Reach out to us.</p>
              
              <div className="contact-cards">
                <div className="contact-card">
                  <div className="card-border yellow"></div>
                  <div className="card-icon green">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="card-content">
                    <h3>Headquarters</h3>
                    <div className="card-details">
                      <p>QUANTUMGRID ENERGY</p>
                      <p>New York Business</p>
                      <p>Parklands Road, 00100</p>
                      <p>Nairobi, Kenya</p>
                      <p>South Africa</p>
                    </div>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="card-border blue"></div>
                  <div className="card-icon blue">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="card-content">
                    <h3>Phone Support</h3>
                    <div className="card-details">
                      <p>+254 700 000 000</p>
                      <p>Company Support: +254 700 000 000</p>
                      <p>Email: info@quantumgridenergy.com</p>
                    </div>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="card-border green"></div>
                  <div className="card-icon green">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="card-content">
                    <h3>Email Contact</h3>
                    <div className="card-details">
                      <p>Sales: sales@quantumgridenergy.com</p>
                      <p>Support: support@quantumgridenergy.com</p>
                      <p>General: info@quantumgridenergy.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-social">
                <a href="#" className="social-square green">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-square blue">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-square yellow">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            <div className="contact-right">
              <h2>Send Us a Message</h2>
              <p className="intro-text">Fill in the form below and we&apos;ll get back to you as soon as possible.</p>
              
              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">Your Name *</label>
                    <input type="text" id="firstName" placeholder="Enter your name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">&nbsp;</label>
                    <input type="text" id="lastName" placeholder="Enter your last name" required />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Your Email *</label>
                  <input type="email" id="email" placeholder="Enter your email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input type="text" id="subject" placeholder="Enter your subject" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" rows={6} placeholder="Enter your message" required></textarea>
                </div>
                
                <div className="form-checkbox">
                  <input type="checkbox" id="terms" required />
                  <label htmlFor="terms">I agree to the terms and conditions</label>
                </div>
                
                <button type="submit" className="submit-btn">
                  <span>Send Message</span>
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <ScriptLoader scripts={[]} pageScripts={['/js/contact.js']} />
    </>
  )
}

