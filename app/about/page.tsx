import ScriptLoader from '../components/ScriptLoader'
import Link from 'next/link'

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>Empowering Africa with <span className="yellow-text">Clean Energy</span></h1>
            <p>We are dedicated to transforming the energy landscape across Africa, providing sustainable, affordable, and reliable solar power solutions that empower communities and drive economic growth.</p>
            <div className="hero-indicators">
              <div className="indicator active"></div>
              <div className="indicator"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <div className="story-image-wrapper">
              <div className="story-image">
                <div className="image-placeholder-story">
                  <i className="fas fa-solar-panel"></i>
                  <p>Solar Installation Team</p>
                </div>
              </div>
              <div className="decorative-square square-1"></div>
              <div className="decorative-square square-2"></div>
            </div>
            <div className="story-text">
              <h2>Our Story</h2>
              <p>Founded with a vision to illuminate Africa&apos;s future, QUANTUMGRID ENERGY emerged from a simple yet powerful belief: every community deserves access to clean, affordable, and reliable energy. What started as a small initiative has grown into a continental movement, bringing solar power to millions across Africa.</p>
              <p>Our journey began when we recognized the critical energy challenges facing African communities. From rural villages without electricity to urban businesses struggling with unreliable power grids, we saw an opportunity to make a real difference. Today, we stand as a testament to what&apos;s possible when innovation meets purpose.</p>
              
              <div className="values-grid">
                <div className="value-card">
                  <div className="value-icon yellow">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <h3>Innovation</h3>
                  <p>Pioneering technology of tomorrow</p>
                </div>
                <div className="value-card">
                  <div className="value-icon teal">
                    <i className="fas fa-leaf"></i>
                  </div>
                  <h3>Sustainability</h3>
                  <p>Committed to a greener future</p>
                </div>
                <div className="value-card">
                  <div className="value-icon blue">
                    <i className="fas fa-dollar-sign"></i>
                  </div>
                  <h3>Affordability</h3>
                  <p>Power for all, not just a few</p>
                </div>
                <div className="value-card">
                  <div className="value-icon yellow">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <h3>Growth</h3>
                  <p>Fueling Africa&apos;s progress</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continental Reach Section */}
      <section className="continental-reach">
        <div className="container">
          <h2 className="section-title">Our Continental Reach</h2>
          <p className="section-subtitle">From the bustling cities of West Africa to the growing economies of the East and South, we&apos;re building a network of sustainable energy across the continent.</p>
          
          <div className="regions-grid">
            <div className="region-card">
              <div className="region-icon yellow">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <h3>West Africa</h3>
              <ul className="region-list">
                <li><i className="fas fa-circle"></i> Nigeria, Ghana, Senegal, Côte d&apos;Ivoire</li>
                <li><i className="fas fa-circle"></i> 1.8M People Served</li>
                <li><i className="fas fa-circle"></i> 800 MW Installed</li>
              </ul>
            </div>
            <div className="region-card">
              <div className="region-icon teal">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <h3>East Africa</h3>
              <ul className="region-list">
                <li><i className="fas fa-circle"></i> Uganda, Kenya, Tanzania, Rwanda</li>
                <li><i className="fas fa-circle"></i> 1.8M People Served</li>
                <li><i className="fas fa-circle"></i> 800 MW Installed</li>
              </ul>
            </div>
            <div className="region-card">
              <div className="region-icon blue">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <h3>Southern Africa</h3>
              <ul className="region-list">
                <li><i className="fas fa-circle"></i> South Africa, Zambia, Zimbabwe, Botswana</li>
                <li><i className="fas fa-circle"></i> 1.8M People Served</li>
                <li><i className="fas fa-circle"></i> 800 MW Installed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Energy Revolution Section */}
      <section className="join-revolution">
        <div className="container">
          <div className="revolution-content">
            <h2>Join the Energy Revolution</h2>
            <p>Be part of Africa&apos;s transformation to clean, sustainable energy. Whether you&apos;re looking to join our team or partner with us, we&apos;d love to hear from you.</p>
            <div className="revolution-buttons">
              <Link href="/careers">
                <button className="rev-btn dark">
                  <i className="fas fa-user"></i>
                  Join Our Team
                </button>
              </Link>
              <Link href="/contact">
                <button className="rev-btn light">
                  <i className="fas fa-envelope"></i>
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ScriptLoader scripts={[]} pageScripts={['/js/about.js']} />
    </>
  )
}

