import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage = () => (
  <motion.div className="page-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    <h2>Empowering Dental Professionals with Quality Supplies</h2>
    <p>At [Your Company Name], we understand the critical role that high-quality supplies play in a successful dental practice. We are dedicated to providing a comprehensive range of reliable dental products, from state-of-the-art equipment to everyday consumables, all sourced from trusted manufacturers. Our commitment is to help you deliver exceptional patient care with efficiency and confidence.</p>
    <p>Explore our extensive catalog or get in touch with our expert team for personalized assistance.</p>
    <div style={{ marginTop: '30px' }}>
      {/* Link to products will eventually go to the shop app, for now, a placeholder or remove */}
      {/* <Link to="/produits" className="button" style={{ marginRight: '15px' }}>Browse Our Products</Link> */}
      <Link to="/contact" className="button">Contact Us for a Quote</Link>
    </div>
  </motion.div>
);

export default HomePage;
