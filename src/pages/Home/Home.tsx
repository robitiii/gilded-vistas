import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar/Navbar';
import HeroSection from '../../components/HeroSection/HeroSection';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import Footer from '../../components/Footer/Footer';
import { listings } from '../../data/listings';
import './Home.css';

const Home = () => {
  const featuredProperties = listings.filter(property => property.featured);

  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      
      {/* Featured Properties Section */}
      <section className="featured-properties">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Featured Properties</h2>
            <div className="gold-line" style={{ margin: '15px auto 20px' }}></div>
            <p className="section-subtitle">
              Discover our handpicked selection of exceptional luxury estates
            </p>
          </motion.div>

          <div className="properties-grid">
            {featuredProperties.map((property, index) => (
              <PropertyCard
                key={property.id}
                id={property.id}
                image={property.image}
                title={property.title}
                location={property.location}
                price={property.price}
                description={property.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Why Choose LuxeEstate</h2>
            <div className="gold-line" style={{ margin: '15px auto 50px' }}></div>
          </motion.div>

          <div className="features-grid">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="feature-card"
            >
              <div className="feature-icon">★</div>
              <h3 className="feature-title">Exclusive Listings</h3>
              <p className="feature-description">
                Access to the world's most exclusive and sought-after luxury properties
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="feature-card"
            >
              <div className="feature-icon">♔</div>
              <h3 className="feature-title">Expert Guidance</h3>
              <p className="feature-description">
                Personalized service from experienced luxury real estate professionals
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="feature-card"
            >
              <div className="feature-icon">◆</div>
              <h3 className="feature-title">Premium Experience</h3>
              <p className="feature-description">
                White-glove service ensuring seamless transactions from start to finish
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Get In Touch</h2>
            <div className="gold-line" style={{ margin: '15px auto 20px' }}></div>
            <p className="section-subtitle">
              Let us help you find your dream luxury property
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="contact-form"
          >
            <div className="form-row">
              <input type="text" placeholder="Your Name" className="form-input" required />
              <input type="email" placeholder="Your Email" className="form-input" required />
            </div>
            <div className="form-row">
              <input type="tel" placeholder="Phone Number" className="form-input" />
              <input type="text" placeholder="Subject" className="form-input" />
            </div>
            <textarea 
              placeholder="Your Message" 
              className="form-textarea" 
              rows={6}
              required
            ></textarea>
            <button type="submit" className="form-button">Send Message</button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
