import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <Navbar />
      
      {/* About Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">About Real Estate Services</h1>
            <div className="gold-line" style={{ margin: '20px auto' }}></div>
            <p className="page-subtitle">We Make Real Estate a Breeze</p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mission-content"
          >
            <h2 className="section-title">Our Mission</h2>
            <div className="gold-line" style={{ margin: '15px auto 30px' }}></div>
            <p className="mission-text">
              At Real Estate Services, we are dedicated to making your property journey as smooth and stress-free as possible. 
              With years of experience in the South African property market, we understand the unique needs of buyers, sellers, 
              and renters across the region.
            </p>
            <p className="mission-text">
              Our commitment is to provide exceptional service, market expertise, and personalized attention to every client. 
              Whether you're looking for your dream home, an investment property, or need assistance selling your property, 
              we're here to guide you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Emily Section */}
      <section className="team-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Meet Our Team</h2>
            <div className="gold-line" style={{ margin: '15px auto 50px' }}></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="team-member-card"
          >
            <div className="member-info">
              <h3 className="member-name">Emily Thompson</h3>
              <p className="member-title">Principal Estate Agent</p>
              <div className="gold-line" style={{ margin: '15px 0 20px' }}></div>
              
              <p className="member-bio">
                Emily Thompson is the driving force behind Real Estate Services, bringing over 15 years of 
                expertise in the South African property market. With a passion for connecting people with their 
                perfect homes, Emily has built a reputation for exceptional client service and market knowledge.
              </p>
              
              <p className="member-bio">
                Her deep understanding of property trends across major South African cities, from Johannesburg 
                to Cape Town, has helped hundreds of clients find their ideal properties. Emily believes in a 
                personalized approach, taking the time to understand each client's unique needs and aspirations.
              </p>
              
              <p className="member-bio">
                Beyond her professional expertise, Emily is actively involved in the local community and stays 
                ahead of market trends through continuous education and networking with industry professionals. 
                Her dedication to excellence and client satisfaction has made Real Estate Services a trusted 
                name in property services.
              </p>

              <div className="member-credentials">
                <h4>Qualifications & Expertise</h4>
                <ul>
                  <li>Licensed Estate Agent (EAAB)</li>
                  <li>Specialist in Residential & Commercial Properties</li>
                  <li>Expert in Gauteng, KwaZulu-Natal & Western Cape Markets</li>
                  <li>Certified Property Valuation Professional</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="values-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Why Choose Us</h2>
            <div className="gold-line" style={{ margin: '15px auto 50px' }}></div>
          </motion.div>

          <div className="values-grid">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="value-card"
            >
              <div className="value-icon">★</div>
              <h3 className="value-title">Local Expertise</h3>
              <p className="value-description">
                In-depth knowledge of South African property markets and neighborhoods
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="value-card"
            >
              <div className="value-icon">♔</div>
              <h3 className="value-title">Personalized Service</h3>
              <p className="value-description">
                Tailored approach to meet your unique property needs and goals
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="value-card"
            >
              <div className="value-icon">◆</div>
              <h3 className="value-title">Proven Track Record</h3>
              <p className="value-description">
                Years of successful transactions and satisfied clients across South Africa
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
