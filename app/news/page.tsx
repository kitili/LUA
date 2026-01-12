import ScriptLoader from '../components/ScriptLoader'

const articles = [
  {
    date: 'Oct 24, 2023',
    title: 'Revolutionary Solar Technology Powers 10,000 Homes Across Kenya',
    copy:
      'Our innovative solar technology is providing clean and affordable energy to thousands of households, improving lives and fostering sustainable development in rural communities.',
    icon: 'fa-solar-panel',
    label: 'Solar Installation',
    featured: true,
  },
  {
    date: 'Oct 18, 2023',
    title: 'AI-Powered Grid Optimization Reduces Energy Waste by 40%',
    copy:
      'Cutting-edge AI algorithms are revolutionizing energy distribution, leading to significant reductions in waste and increased efficiency.',
    icon: 'fa-user',
    label: 'AI Technology',
  },
  {
    date: 'Oct 10, 2023',
    title: '1000 Schools Powered: Education Through Clean Energy',
    copy:
      'Discover how QUANTUMGRID ENERGY is transforming educational institutions across the continent with reliable and sustainable solar power solutions.',
    icon: 'fa-school',
    label: 'School Solar',
  },
  {
    date: 'Sep 28, 2023',
    title: 'Hybrid Systems: Solar + Wind = 24/7 Clean Power',
    copy:
      'Explore the benefits of integrated solar and wind energy systems, providing uninterrupted power supply for remote areas.',
    icon: 'fa-wind',
    label: 'Hybrid Systems',
  },
  {
    date: 'Sep 15, 2023',
    title: 'Global Partnerships Accelerate Solar Expansion',
    copy:
      'Strategic collaborations are driving the rapid adoption of solar energy solutions across diverse markets.',
    icon: 'fa-handshake',
    label: 'Partnerships',
  },
  {
    date: 'Sep 01, 2023',
    title: 'Smart Grid Technology: The Future of Energy',
    copy:
      'Advancements in smart grid technology are creating a more resilient and efficient energy infrastructure.',
    icon: 'fa-network-wired',
    label: 'Smart Grid',
  },
]

export default function NewsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="news-hero">
        <div className="container">
          <div className="news-hero-content">
            <h1>
              News & <span className="yellow-text">Insights</span>
            </h1>
            <p>
              Stay updated with the latest developments in renewable energy, solar technology, and sustainable solutions across Africa.
            </p>
            <div className="hero-filters">
              <a href="#" className="filter-link active">
                All Articles
              </a>
              <a href="#" className="filter-link">
                Press Releases
              </a>
              <a href="#" className="filter-link">
                Industry News
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="news-filters">
        <div className="container">
          <div className="filter-tabs">
            <button className="filter-tab active">All Articles</button>
            <button className="filter-tab">Press Releases</button>
            <button className="filter-tab">Industry News</button>
            <button className="filter-tab">Case Studies</button>
            <button className="filter-tab">Interviews</button>
            <div className="sort-dropdown">
              <label>Sort by:</label>
              <select>
                <option>Latest</option>
                <option>Oldest</option>
                <option>Most Popular</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* News Articles Grid */}
      <section className="news-articles">
        <div className="container">
          <div className="articles-grid">
            {articles.map((article) => (
              <article key={article.title} className={`article-card ${article.featured ? 'featured' : ''}`}>
                <div className="article-image">
                  <div className={`image-placeholder-news ${article.featured ? 'featured-img' : ''}`}>
                    <i className={`fas ${article.icon}`}></i>
                    <p>{article.label}</p>
                  </div>
                </div>
                <div className="article-content">
                  <span className="article-date">{article.date}</span>
                  {article.featured ? <h2>{article.title}</h2> : <h3>{article.title}</h3>}
                  <p>{article.copy}</p>
                  <a href="#" className="read-more">
                    Read More
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="load-more-container">
            <button className="load-more-btn">Load More Articles</button>
          </div>
        </div>
      </section>

      {/* Stay Informed Section */}
      <section className="stay-informed">
        <div className="container">
          <div className="stay-informed-content">
            <div className="stay-informed-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <h2>Stay Informed</h2>
            <p>
              Receive fresh insights, announcements on energy and technology breakthroughs, and industry developments directly to your inbox.
            </p>
            <form className="subscribe-form">
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit" className="subscribe-btn">
                Subscribe
              </button>
            </form>
            <p className="privacy-text">
              By subscribing, you agree to our <a href="#">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </section>

      <ScriptLoader scripts={[]} pageScripts={['/js/news.js']} />
    </>
  )
}

