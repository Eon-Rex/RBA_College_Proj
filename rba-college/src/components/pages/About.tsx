import React from 'react';
import '../../styles/pages/About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="about-card">
        <h1 className="about-title">About RBA College</h1>
        <p className="about-content">
          Established in 1970, RBA College has been dedicated to providing affordable, quality education in Faridabad for over 50 years. With a mission to develop skilled professionals ready to meet industry standards, we focus on both academic and personal growth. Our institution is recognized for its student-friendly environment, modern classrooms, and career guidance support.
        </p>
      </div>
    </div>
  );
};

export default About;