import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../styles/pages/Courses/CourseComman.css';

export const metadata = {
  name: 'Bachelor of Computer Applications (BCA)',
  duration: '3 Years',
};

const BCA: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      offset: 100, // Offset from the top of the screen
      easing: 'ease-in-out', // Smooth easing
      once: false, // Trigger animation only once
    });
  }, []);

  return (
    <div className="courses-container">
      <h2 className="course-title" data-aos="fade-up">
        Bachelor of Computer Applications (BCA)
      </h2>
      <p className="course-description" data-aos="fade-up" data-aos-delay="200">
        Duration: 3 Years
      </p>
      <section className="course-details">
        <div className="course-focus" data-aos="fade-right">
          <h3>Focus Areas</h3>
          <ul>
            <li>Programming</li>
            <li>Database Management</li>
            <li>Web Development</li>
          </ul>
        </div>
        <div className="career-paths" data-aos="fade-left">
          <h3>Career Paths</h3>
          <ul>
            <li>Software Developer</li>
            <li>Web Designer</li>
            <li>IT Support</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default BCA;