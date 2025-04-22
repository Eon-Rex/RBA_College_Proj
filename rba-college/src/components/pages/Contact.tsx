import React from 'react';
import '../../styles/pages/Contact.css'; // Assuming you have a CSS file for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
      <div className="contact-details">
        <h3>Our Contact Information</h3>
        <p>Email: info@rbacollege.edu</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 College Ave, City, State, ZIP</p>
      </div>
    </div>
  );
};

export default Contact;