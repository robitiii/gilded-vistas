import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-logo">Real Estate Services</h3>
            <p className="footer-description">
              We make Real Estate a Breeze. Experience exceptional real estate service across South Africa.
            </p>
            <p className="footer-credit">Real Estate Websites by RobQtech</p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <div className="gold-line"></div>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/properties">For Sale</Link></li>
              <li><Link to="/properties?type=rent">To Rent</Link></li>
              <li><Link to="/about">Meet the Team</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contact</h4>
            <div className="gold-line"></div>
            <ul className="footer-contact">
              <li>Tel: 010 597 0836</li>
              <li>info@real-estate-services.co.za</li>
              <li>South Africa</li>
            </ul>
            <div className="footer-property24">
              <a href="https://www.property24.com/" target="_blank" rel="noopener noreferrer">
                Visit us on Property 24
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Legal</h4>
            <div className="gold-line"></div>
            <ul className="footer-links">
              <li><a href="#">Terms And Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Cookie Settings</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Real Estate Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
