import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './PropertyCard.css';

interface PropertyCardProps {
  id: number;
  image: string;
  title: string;
  location: string;
  price: string;
  description: string;
  index?: number;
}

const PropertyCard = ({ 
  id, 
  image, 
  title, 
  location, 
  price, 
  description, 
  index = 0 
}: PropertyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="property-card"
    >
      <Link to={`/property/${id}`} className="property-card-link">
        <div className="property-image-container">
          <img src={image} alt={title} className="property-image" />
          <div className="property-overlay">
            <span className="view-details">View Details</span>
          </div>
        </div>
        
        <div className="property-content">
          <div className="property-location">{location}</div>
          <h3 className="property-title">{title}</h3>
          <p className="property-description">{description}</p>
          <div className="property-footer">
            <span className="property-price">{price}</span>
            <button className="property-button">Inquire</button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PropertyCard;
