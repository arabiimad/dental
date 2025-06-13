import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => (
  <motion.div className="page-content contact-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    <h2>Get in Touch With Us</h2>
    <p style={{ textAlign:'center', marginBottom: '30px' }}>We're here to help! Whether you have questions about our products, need a quote, or require support, please don't hesitate to reach out.</p>
    <div className="contact-container">
      <section className="contact-details">
        <h3>Our Contact Information</h3>
        <p><strong>Address:</strong> 123 Dental Avenue, Suite 456, Smile City, ST 78901, USA (Placeholder)</p>
        <p><strong>Phone:</strong> +1 (555) 123-4567 (Placeholder)</p>
        <p><strong>Email:</strong> <a href="mailto:sales@yourdentalcompany.com">sales@yourdentalcompany.com</a> (Placeholder)</p>
        <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM (EST)</p>
      </section>
      <section className="contact-form-section">
        <h3>Send Us a Message</h3>
        <form action="#" method="POST"> {/* In a real app, this would submit to a backend or service */}
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number (Optional):</label>
            <input type="text" id="phone" name="phone" />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="6" required></textarea>
          </div>
          <button type="submit" className="button">Send Message</button>
        </form>
      </section>
    </div>
  </motion.div>
);

export default ContactPage;
