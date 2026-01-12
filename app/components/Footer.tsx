import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <div className="footer-logo">
              <i className="fas fa-th"></i>
              <span>QUANTUMGRID<br />ENERGY</span>
            </div>
            <p>Powering the future with sustainable renewable energy solutions.</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Solutions</h4>
            <ul>
              <li><a href="#">Industrial Solar</a></li>
              <li><a href="#">Commercial Systems</a></li>
              <li><a href="#">Utility Scale</a></li>
              <li><a href="#">Rural Electrification</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">Team</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="contact-info">
              <li><i className="fas fa-phone"></i> +254 701 123 456</li>
              <li><i className="fas fa-envelope"></i> info@quantumgridenergy.com</li>
              <li><i className="fas fa-map-marker-alt"></i> Nairobi, Kenya</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 QUANTUMGRID ENERGY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

