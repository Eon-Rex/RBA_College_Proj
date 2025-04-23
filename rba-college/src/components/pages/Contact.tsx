import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/pages/Contact.css';

const Contact = () => {
  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Contact Us
      </motion.h2>

      <div className="contact-content">
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input type="text" id="subject" name="subject" placeholder="Enter the subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Write your message here"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>

          <div className="contact-details">
            <h3>Our Contact Information</h3>
            <p>
              <strong>📍 Address:</strong> E-43 & E-44, Nehru Ground, NIT, Faridabad, Haryana - 121001
            </p>
            <p>
              <strong>📞 Phone:</strong> +91 70427 22117
            </p>
            <p>
              <strong>📧 Email:</strong> rbacollegefbd@gmail.com
            </p>
            <p>
              <strong>🌐 Facebook:</strong>{' '}
              <a href="https://facebook.com/rbacollegefaridabad" target="_blank" rel="noopener noreferrer">
                facebook.com/rbacollegefaridabad
              </a>
            </p>
            <p>
              <strong>📍 Nearest Metro Station:</strong> Neelam Chowk
            </p>
            <p>
              <strong>🕘 Office Hours:</strong> Monday to Saturday, 10 AM to 5 PM
            </p>
          </div>
        </motion.div>

        <motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="map-container">
        
  <iframe
    title="RBA College Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.0432783524557!2d77.30183007501618!3d28.38776077579928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc3c2e0cb663%3A0x1af8ac742b63a950!2sR.B.A%20College!5e0!3m2!1sen!2sin!4v1745388117578!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>

          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;