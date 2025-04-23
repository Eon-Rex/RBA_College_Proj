// filepath: rba-college-website/src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../../styles/layout/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} RBA College. All rights reserved.</p>
        <nav>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;