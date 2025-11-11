import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar/Navbar';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import Footer from '../../components/Footer/Footer';
import { listings } from '../../data/listings';
import './Properties.css';

const Properties = () => {
  return (
    <div className="properties-page">
      <Navbar />
      
      <div className="properties-header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="properties-page-title">Luxury Properties</h1>
            <div className="gold-line" style={{ margin: '15px auto 20px' }}></div>
            <p className="properties-page-subtitle">
              Explore our exclusive collection of world-class estates
            </p>
          </motion.div>
        </div>
      </div>

      <section className="properties-section">
        <div className="container">
          <div className="properties-grid">
            {listings.map((property, index) => (
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

      <Footer />
    </div>
  );
};

export default Properties;
