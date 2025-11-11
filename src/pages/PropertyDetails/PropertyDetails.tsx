import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { listings } from '../../data/listings';
import './PropertyDetails.css';

const PropertyDetails = () => {
  const { id } = useParams();
  const property = listings.find(p => p.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(0);

  if (!property) {
    return (
      <div className="property-details-page">
        <Navbar />
        <div className="not-found-container">
          <h1>Property Not Found</h1>
          <Link to="/properties" className="back-link">Back to Properties</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="property-details-page">
      <Navbar />
      
      <div className="property-hero">
        <img 
          src={property.gallery[selectedImage]} 
          alt={property.title} 
          className="property-hero-image"
        />
        <div className="property-hero-overlay"></div>
      </div>

      <section className="property-details-section">
        <div className="container">
          <Link to="/properties" className="back-link">← Back to Properties</Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="property-main-info"
          >
            <div className="property-header">
              <div>
                <div className="property-location-tag">{property.location}</div>
                <h1 className="property-main-title">{property.title}</h1>
                <div className="gold-line"></div>
              </div>
              <div className="property-main-price">{property.price}</div>
            </div>

            <div className="property-details-grid">
              <div className="property-details-left">
                <h2 className="details-section-title">Description</h2>
                <p className="property-full-description">{property.description}</p>
                
                <h2 className="details-section-title">Property Features</h2>
                <div className="property-specs">
                  <div className="spec-item">
                    <span className="spec-label">Bedrooms</span>
                    <span className="spec-value">{property.bedrooms}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Bathrooms</span>
                    <span className="spec-value">{property.bathrooms}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Area</span>
                    <span className="spec-value">{property.area}</span>
                  </div>
                </div>

                <h2 className="details-section-title">Gallery</h2>
                <div className="property-gallery">
                  {property.gallery.map((image, index) => (
                    <div 
                      key={index}
                      className={`gallery-item ${selectedImage === index ? 'active' : ''}`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img src={image} alt={`${property.title} ${index + 1}`} />
                    </div>
                  ))}
                </div>

                <h2 className="details-section-title">Location</h2>
                <div className="property-map">
                  <iframe
                    title="Property Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.3618025619855!2d-118.40119968478664!3d34.07362298060558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc35fbd217ef%3A0xcf1ef9352700d95c!2sBeverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              <div className="property-details-right">
                <div className="contact-agent-card">
                  <h3 className="contact-card-title">Interested?</h3>
                  <div className="gold-line"></div>
                  <p className="contact-card-description">
                    Contact us to schedule a private viewing or for more information
                  </p>
                  
                  <form className="contact-agent-form">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="contact-input"
                      required 
                    />
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="contact-input"
                      required 
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="contact-input"
                    />
                    <textarea 
                      placeholder="Message" 
                      className="contact-textarea"
                      rows={4}
                      required
                    ></textarea>
                    <button type="submit" className="contact-submit">
                      Send Inquiry
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PropertyDetails;
