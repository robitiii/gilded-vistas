import { motion } from 'framer-motion';
import './PopularAreas.css';

const areas = [
  'Centurion', 'Pretoria', 'Midrand', 'Sandton', 'Klerksdorp', 'Johannesburg',
  'Pietermaritzburg', 'Randburg', 'Gqeberha', 'Durban', 'Bloemfontein', 'Roodepoort',
  'Edenvale', 'George', 'Kempton Park', 'Stanger', 'Boksburg', 'Stilfontein',
  'Benoni', 'Hartbeespoort', 'Jeffreys Bay', 'Germiston', 'Empangeni', 'Margate',
  'White River', 'Ballito', 'Akasia', 'Orkney', 'Vanderbijlpark', 'Krugersdorp'
];

const PopularAreas = () => {
  return (
    <section className="popular-areas">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Popular Areas in South Africa</h2>
          <div className="gold-line" style={{ margin: '15px auto 40px' }}></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="areas-grid"
        >
          {areas.map((area, index) => (
            <a 
              key={index} 
              href={`/properties?area=${area}`} 
              className="area-link"
            >
              {area}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PopularAreas;
