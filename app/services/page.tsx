import ScriptLoader from '../components/ScriptLoader'

export default function Services() {
  return (
    <>
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1>Our <span className="yellow-text">Services</span></h1>
            <p>Empowering Africa with cutting-edge renewable energy solutions. From solar installations to smart grid technology, we deliver sustainable power for a brighter future.</p>
          </div>
        </div>
      </section>

      <section className="energy-solutions">
        <div className="container">
          <h2 className="section-title">Comprehensive Energy Solutions</h2>
          <p className="section-subtitle">From design to deployment, we provide customized renewable energy services tailored for African communities and businesses.</p>
          
          <div className="services-grid-6">
            <div className="service-card-6 yellow-header">
              <div className="service-card-header yellow">
                <i className="fas fa-sun"></i>
              </div>
              <div className="service-card-body">
                <h3>Solar PV Systems</h3>
                <p>Reliable and efficient solar photovoltaic systems for homes, businesses, and communities.</p>
                <ul className="service-features">
                  <li>Residential Solar Solutions</li>
                  <li>Commercial Solar Solutions</li>
                  <li>Utility-Scale Projects</li>
                  <li>Off-Grid & Hybrid Systems</li>
                  <li>Solar Water Heating & Pumps</li>
                </ul>
              </div>
            </div>

            <div className="service-card-6 blue-header">
              <div className="service-card-header blue">
                <i className="fas fa-cog"></i>
              </div>
              <div className="service-card-body">
                <h3>Electrical Infrastructure</h3>
                <p>Robust electrical infrastructure development for seamless integration and reliable power distribution.</p>
                <ul className="service-features">
                  <li>Grid Modernization</li>
                  <li>Smart Grid Solutions</li>
                  <li>Power Transmission & Distribution</li>
                  <li>Substation Design & Construction</li>
                  <li>Energy Storage Systems</li>
                </ul>
              </div>
            </div>

            <div className="service-card-6 green-header">
              <div className="service-card-header green">
                <i className="fas fa-leaf"></i>
              </div>
              <div className="service-card-body">
                <h3>Energy Consulting</h3>
                <p>Expert advice and strategic planning to optimize energy projects and maximize sustainability.</p>
                <ul className="service-features">
                  <li>Feasibility Studies</li>
                  <li>Energy Audits</li>
                  <li>Project Management</li>
                  <li>Policy & Regulatory Advice</li>
                  <li>Environmental Impact Assessments</li>
                </ul>
              </div>
            </div>

            <div className="service-card-6 orange-header">
              <div className="service-card-header orange">
                <i className="fas fa-wrench"></i>
              </div>
              <div className="service-card-body">
                <h3>Operations & Support</h3>
                <p>Comprehensive maintenance and support services to ensure long-term performance and reliability of your systems.</p>
                <ul className="service-features">
                  <li>Preventative Maintenance</li>
                  <li>Corrective Maintenance</li>
                  <li>System Monitoring & Diagnostics</li>
                  <li>Spare Parts Management</li>
                  <li>Technical Support & Training</li>
                </ul>
              </div>
            </div>

            <div className="service-card-6 purple-header">
              <div className="service-card-header purple">
                <i className="fas fa-lightbulb"></i>
              </div>
              <div className="service-card-body">
                <h3>Innovative Solutions</h3>
                <p>Developing cutting-edge technologies and customized solutions to address unique energy challenges in Africa.</p>
                <ul className="service-features">
                  <li>Microgrid Development</li>
                  <li>Rural Electrification Projects</li>
                  <li>Energy Efficiency Solutions</li>
                  <li>Customized Power Solutions</li>
                  <li>Research & Development</li>
                </ul>
              </div>
            </div>

            <div className="service-card-6 teal-header">
              <div className="service-card-header teal">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="service-card-body">
                <h3>Financing & Partnerships</h3>
                <p>Facilitating access to financing and fostering strategic partnerships to accelerate renewable energy adoption.</p>
                <ul className="service-features">
                  <li>Project Financing</li>
                  <li>Investment Opportunities</li>
                  <li>Public-Private Partnerships</li>
                  <li>Community Engagement</li>
                  <li>Capacity Building</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="what-makes-different">
        <div className="container">
          <h2 className="section-title left-align">What Makes Us Different?</h2>
          <div className="different-content">
            <div className="different-image">
              <div className="image-placeholder-different">
                <i className="fas fa-solar-panel"></i>
                <p>Solar Installation</p>
              </div>
            </div>
            <div className="different-features">
              <div className="feature-card-different">
                <div className="feature-icon-different yellow">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3>Innovation</h3>
                <p>We constantly explore new technologies and approaches to deliver cutting-edge solar solutions.</p>
              </div>
              <div className="feature-card-different">
                <div className="feature-icon-different blue">
                  <i className="fas fa-handshake"></i>
                </div>
                <h3>Client-Centric</h3>
                <p>Our solutions are tailored to meet the unique needs of each client, ensuring maximum satisfaction.</p>
              </div>
              <div className="feature-card-different">
                <div className="feature-icon-different teal">
                  <i className="fas fa-leaf"></i>
                </div>
                <h3>Sustainable Impact</h3>
                <p>We are committed to creating lasting positive environmental and social impact.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScriptLoader scripts={[]} pageScripts={['/js/services.js']} />
    </>
  )
}

