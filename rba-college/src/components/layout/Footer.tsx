// filepath: rba-college-website/src/components/Footer.tsx
import React from 'react';
import '../../styles/layout/Footer.css';
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} RBA College. All rights reserved.</p>
        <nav>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;