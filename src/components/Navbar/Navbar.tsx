import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Real Estate Services</span>
        </Link>

        <div className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/properties" 
            className={`navbar-link ${location.pathname.startsWith('/properties') ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            For Sale
          </Link>
          <Link 
            to="/properties?type=rent" 
            className={`navbar-link`}
            onClick={() => setMobileMenuOpen(false)}
          >
            To Rent
          </Link>
          <Link 
            to="/about" 
            className={`navbar-link ${location.pathname === '/about' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Meet the Team
          </Link>
          <a href="#contact" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>
            Join Us
          </a>
          <Link 
            to="/about" 
            className={`navbar-link ${location.pathname === '/about' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <a href="#contact" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>
            Contact Us
          </a>
          <a href="#" className="navbar-link navbar-login" onClick={() => setMobileMenuOpen(false)}>
            Login
          </a>
        </div>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
