'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return 'active'
    if (path !== '/' && pathname?.startsWith(path)) return 'active'
    return ''
  }

  const handleQuoteClick = () => {
    window.location.href = '/quote'
  }

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <i className="fas fa-th"></i>
            <span>QUANTUMGRID<br />ENERGY</span>
          </div>
          <ul className="nav-menu">
            <li><Link href="/" className={isActive('/')}>Home</Link></li>
            <li><Link href="/about" className={isActive('/about')}>About</Link></li>
            <li><Link href="/services" className={isActive('/services')}>Services</Link></li>
            <li><Link href="/blog" className={isActive('/blog')}>Blog</Link></li>
            <li><Link href="/news" className={isActive('/news')}>News & Insights</Link></li>
            <li><Link href="/contact" className={isActive('/contact')}>Contact</Link></li>
            <li><Link href="/testimonials" className={isActive('/testimonials')}>Testimonials</Link></li>
            <li><Link href="/careers" className={isActive('/careers')}>Careers</Link></li>
          </ul>
          <button className="quote-btn" onClick={handleQuoteClick}>Get A Quote</button>
          <button className="mobile-menu-toggle" aria-label="Toggle menu">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>
    </header>
  )
}

