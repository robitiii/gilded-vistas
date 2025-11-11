import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-logo">LuxeEstate</h3>
            <p className="footer-description">
              Your gateway to the world's finest luxury properties. 
              Experience exceptional real estate with unparalleled service.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <div className="gold-line"></div>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/properties">Properties</Link></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contact</h4>
            <div className="gold-line"></div>
            <ul className="footer-contact">
              <li>+1 (555) 123-4567</li>
              <li>info@luxeestate.com</li>
              <li>Beverly Hills, CA 90210</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Follow Us</h4>
            <div className="gold-line"></div>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 LuxeEstate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
