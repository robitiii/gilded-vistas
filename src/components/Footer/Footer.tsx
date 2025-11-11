import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-logo">Emily Real Estate</h3>
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
              <li>Tel: 076 099 4109</li>
              <li>emily@realestateservices.co.za</li>
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
          <p>&copy; 2025 Emily Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
