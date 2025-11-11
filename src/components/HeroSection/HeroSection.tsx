import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/hero-mansion.jpg';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-image-container">
        <img src={heroImage} alt="Luxury mansion" className="hero-image" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <h1 className="hero-title">Discover Luxury Living</h1>
          <div className="gold-line"></div>
          <p className="hero-subtitle">
            Experience the world's most exceptional properties
          </p>
          <Link to="/properties" className="hero-button">
            Explore Properties
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
