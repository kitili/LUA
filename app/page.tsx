import ScriptLoader from './components/ScriptLoader'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Affordable Solar Power</h1>
          <p>Empowering communities and businesses with sustainable, reliable, and cost-effective renewable energy solutions tailored for the African continent.</p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon yellow">
                <i className="fas fa-bolt"></i>
              </div>
              <div className="stat-number yellow-text">120+</div>
              <div className="stat-label">MW Installed</div>
              <div className="stat-desc">Clean energy implemented across the continent.</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon green">
                <i className="fas fa-globe"></i>
              </div>
              <div className="stat-number green-text">15</div>
              <div className="stat-label">African Countries</div>
              <div className="stat-desc">From Nigeria to Zambia, we power nations.</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon blue">
                <i className="fas fa-leaf"></i>
              </div>
              <div className="stat-number blue-text">30K</div>
              <div className="stat-label">Tons CO2 Saved</div>
              <div className="stat-desc">Our commitment to a greener, healthier future.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="service">
        <div className="container">
          <div className="section-label yellow-bg">Our Services</div>
          <h2 className="section-title">Comprehensive Solar Services</h2>
          <p className="section-subtitle">Delivering renewable energy solutions designed for Africa&apos;s unique energy landscape.</p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon yellow">
                <i className="fas fa-sun"></i>
              </div>
              <h3>Solar Solutions</h3>
              <ul className="service-list">
                <li>Grid-tied systems</li>
                <li>Off-grid solutions</li>
                <li>Hybrid systems</li>
              </ul>
              <a href="#" className="learn-more">Learn More</a>
            </div>
            <div className="service-card">
              <div className="service-icon blue">
                <i className="fas fa-plug"></i>
              </div>
              <h3>Electrical Infrastructure</h3>
              <ul className="service-list">
                <li>Power distribution</li>
                <li>Energy storage</li>
                <li>Smart metering</li>
              </ul>
              <a href="#" className="learn-more">Learn More</a>
            </div>
            <div className="service-card">
              <div className="service-icon green">
                <i className="fas fa-cog"></i>
              </div>
              <h3>Consulting Services</h3>
              <ul className="service-list">
                <li>Feasibility studies</li>
                <li>Project management</li>
                <li>ROI analysis</li>
              </ul>
              <a href="#" className="learn-more">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <div className="process-content">
            <div className="process-image">
              <div className="image-placeholder">
                <i className="fas fa-solar-panel"></i>
                <p>Solar Installation</p>
              </div>
            </div>
            <div className="process-text">
              <div className="section-label yellow-bg">Our Process</div>
              <h2 className="section-title">How We Bring Solar to You</h2>
              <p className="section-subtitle">Our streamlined 3-step process ensures your transition to solar is smooth and hassle-free.</p>
              <div className="steps">
                <div className="step">
                  <div className="step-number yellow">01</div>
                  <div className="step-content">
                    <h3>Assessment</h3>
                    <p>Our expert team conducts a thorough site evaluation, analyzing your energy needs, roof structure, sun exposure, and local grid conditions to develop a tailored proposal.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number blue">02</div>
                  <div className="step-content">
                    <h3>Design</h3>
                    <p>We create a custom solar system meticulously to your specific requirements, optimized with industry-leading technology, efficient panel placement, and ROI potentials.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number green">03</div>
                  <div className="step-content">
                    <h3>Installation</h3>
                    <p>Our certified technicians install your solar system with expertise and care, ensuring optimal performance and compliance with all safety regulations. We&apos;ll handle everything.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="projects" id="projects">
        <div className="container">
          <div className="section-label yellow-bg">Our Portfolio</div>
          <h2 className="section-title white">Featured Projects</h2>
          <p className="section-subtitle white">Transforming communities and businesses across Africa with sustainable energy.</p>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-badges">
                <span className="badge green">School</span>
                <span className="badge yellow">Kenya</span>
              </div>
              <h3>Uzuri School Solar Initiative</h3>
              <p>Providing clean, reliable power to 300 students in rural Kenya, enhancing learning through reliable lighting and powering devices.</p>
            </div>
            <div className="project-card">
              <div className="project-badges">
                <span className="badge blue">Industrial</span>
                <span className="badge yellow">Kenya</span>
              </div>
              <h3>Nairobi Industrial Park</h3>
              <p>Powering a large industrial park with a 1MW solar PV system, ensuring energy independence and significant cost savings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <div className="cta-icon">
              <i className="fas fa-cog"></i>
            </div>
            <h2>Ready to Power Your Project?</h2>
            <p>Join thousands of satisfied customers across Africa who have made the switch to clean, affordable solar energy.</p>
            <Link href="/quote">
              <button className="cta-button">Get My Free Quote +</button>
            </Link>
            <p className="cta-phone">Or Call Us: +254 701 123 456</p>
          </div>
        </div>
      </section>

      <ScriptLoader scripts={[]} pageScripts={['/js/home.js']} />
    </>
  )
}

