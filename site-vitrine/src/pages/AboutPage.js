import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => (
  <motion.div className="page-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    <h2>About [Your Company Name]</h2>
    <section>
      <h3>Our Mission</h3>
      <p>To be the most trusted partner for dental professionals by consistently providing high-quality, innovative, and reliable dental supplies and equipment, coupled with exceptional customer service and support. We aim to contribute to the advancement of dental care and the success of our clients' practices.</p>
    </section>
    <section style={{ marginTop: '30px' }}>
      <h3>Our Vision</h3>
      <p>To be a leading force in the dental supply industry, recognized for our comprehensive product portfolio, operational excellence, and unwavering commitment to the evolving needs of the dental community. We envision a future where every dental practice has access to the best tools and resources to provide outstanding patient outcomes.</p>
    </section>
    <section style={{ marginTop: '30px' }}>
      <h3>Our Values</h3>
      <ul>
        <li><strong>Quality:</strong> We are committed to offering products that meet the highest standards of safety and efficacy.</li>
        <li><strong>Integrity:</strong> We conduct our business with honesty, transparency, and ethical practices.</li>
        <li><strong>Customer Focus:</strong> We prioritize the needs of our customers, striving to exceed their expectations.</li>
        <li><strong>Innovation:</strong> We embrace innovation to bring cutting-edge solutions to the dental field.</li>
        <li><strong>Reliability:</strong> We ensure dependable service and product availability that our clients can count on.</li>
      </ul>
    </section>
    <section style={{ marginTop: '40px' }}>
      <h3>Our Team</h3>
      <p>At [Your Company Name], our team is our greatest asset. We are a group of experienced professionals passionate about the dental industry and dedicated to supporting your practice. From knowledgeable sales representatives to efficient logistics staff, everyone at [Your Company Name] works together to ensure your needs are met promptly and professionally.</p>
    </section>
  </motion.div>
);

export default AboutPage;
