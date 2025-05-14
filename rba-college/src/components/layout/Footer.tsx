// filepath: rba-college-website/src/components/Footer.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../styles/layout/Footer.css';
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaSubway,
} from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="footer-wave"></div>
      
      <div className="footer-container">
        <div className="footer-grid">
          {/* About Section */}
          <motion.div 
            className="footer-section"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="footer-heading">About RBA College</h3>
            <p className="footer-text">
              RBA College is a premier educational institution committed to excellence in higher education 
              and professional development since 2005.
            </p>
            <div className="footer-social">
              <a href="https://facebook.com/rbacollegefaridabad" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="footer-section"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/admissions">Admissions</Link></li>
              <li><Link to="/faculty">Faculty</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="footer-section"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="footer-contact">
              <li>
                <FaMapMarkerAlt />
                E-43 & E-44, Nehru Ground, NIT, Faridabad, Haryana - 121001
              </li>
              <li>
                <FaPhone />
                +91 70427 22117
              </li>
              <li>
                <FaEnvelope />
                rbacollegefbd@gmail.com
              </li>
              <li>
                <FaClock />
                Mon-Sat: 10 AM - 5 PM
              </li>
              <li>
                <FaSubway />
                Nearest Metro: Neelam Chowk
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div 
            className="footer-section"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="footer-heading">Newsletter</h3>
            <p className="footer-text">
              Subscribe to our newsletter for the latest updates and announcements.
            </p>
            <form className="footer-newsletter">
              <input type="email" placeholder="Your email address" required />
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} RBA College. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
