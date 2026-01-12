import ScriptLoader from '../components/ScriptLoader'

const projects = [
  {
    title: 'Lagos Industrial Complex',
    copy: '120 MW of solar PV installed, powering manufacturing facilities.',
    label: 'Industrial Complex',
    icon: 'fa-city',
    metrics: ['250 kWh', '120 Homes', '490 CO2'],
  },
  {
    title: 'Maasai Village School',
    copy: 'Solar power bringing electricity to schools, improving education.',
    label: 'Village School',
    icon: 'fa-school',
    metrics: ['15 kWh', '30 Homes', '200 CO2'],
  },
  {
    title: 'Johannesburg Suburb',
    copy: '175 homes equipped with integrated solar solutions.',
    label: 'Suburban Homes',
    icon: 'fa-home',
    metrics: ['200 kWh', '175 Homes', '600 CO2'],
  },
  {
    title: 'Atlas Solar Farm',
    copy: '50 MW of PV power, providing clean energy to the grid.',
    label: 'Solar Farm',
    icon: 'fa-solar-panel',
    metrics: ['10,000 kWh', '25,000 Homes', '10,000 CO2'],
  },
  {
    title: 'Ghana Water Project',
    copy: 'Solar-powered water pump for local communities.',
    label: 'Water Project',
    icon: 'fa-tint',
    metrics: ['10 kWh', '1,500 People', '100% Access'],
  },
  {
    title: 'Nairobi Medical Center',
    copy: '200 kW solar array, providing reliable power for the hospital.',
    label: 'Medical Center',
    icon: 'fa-hospital',
    metrics: ['5,000 kWh', '5,000 Patients', '18,000 CO2'],
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="container">
          <div className="projects-hero-content">
            <h1>
              Powering Africa&apos;s <span className="yellow-text">Solar Revolution</span>
            </h1>
            <p>Empower your communities with sustainable energy solutions</p>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="stat-number">129+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="hero-stat">
                <div className="stat-number">2.17M</div>
                <div className="stat-label">MWh Generated</div>
              </div>
              <div className="hero-stat">
                <div className="stat-number">44,000+</div>
                <div className="stat-label">Homes Powered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="success-stories">
        <div className="container">
          <h2 className="section-title">Our Success Stories</h2>
          <p className="section-subtitle">Browse through some of our successful projects and see what we&apos;ve done.</p>

          <div className="project-filters">
            <button className="project-filter active">All Projects</button>
            <button className="project-filter">Residential</button>
            <button className="project-filter">Commercial</button>
            <button className="project-filter">Rural Electrification</button>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <div className="project-card-new" key={project.title}>
                <div className="project-image">
                  <div className="image-placeholder-project">
                    <i className={`fas ${project.icon}`}></i>
                    <p>{project.label}</p>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.copy}</p>
                  <div className="project-metrics">
                    {project.metrics.map((metric) => (
                      <div className="metric" key={metric}>
                        <span className="metric-value">{metric}</span>
                      </div>
                    ))}
                  </div>
                  <button className="view-details-btn">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collective Impact Section */}
      <section className="collective-impact">
        <div className="container">
          <h2 className="section-title white">Our Collective Impact</h2>
          <p className="section-subtitle white">Together, these projects represent our successful endeavor across Africa.</p>
          <div className="impact-stats">
            <div className="impact-stat">
              <div className="impact-number">250+</div>
              <div className="impact-label">MW Installed</div>
            </div>
            <div className="impact-stat">
              <div className="impact-number">150K</div>
              <div className="impact-label">Tons CO2 Saved</div>
            </div>
            <div className="impact-stat">
              <div className="impact-number">85K</div>
              <div className="impact-label">Families Powered</div>
            </div>
            <div className="impact-stat">
              <div className="impact-number">12</div>
              <div className="impact-label">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Power Your Future Section */}
      <section className="power-future">
        <div className="container">
          <div className="power-future-content">
            <h2>Ready to Power Your Future?</h2>
            <p>Join the solar revolution and illuminate your next success story.</p>
            <div className="cta-buttons">
              <button className="cta-btn-primary">Start New Project</button>
              <button className="cta-btn-secondary">Download Portfolio</button>
            </div>
          </div>
        </div>
      </section>

      <ScriptLoader scripts={[]} pageScripts={['/js/blog.js']} />
    </>
  )
}

