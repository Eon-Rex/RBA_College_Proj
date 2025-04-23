import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../styles/pages/Courses/CourseComman.css';

export const metadata = {
  name: 'Master of Business Administration (MBA)',
  duration: '2 Years',
};

const MBA: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="courses-container">
      <h2 className="course-title" data-aos="fade-up">
        Master of Business Administration (MBA)
      </h2>
      <p className="course-description" data-aos="fade-up" data-aos-delay="200">
        Duration: 2 Years
      </p>
      <section className="course-details">
        <div className="course-focus" data-aos="fade-right">
          <h3>Specializations</h3>
          <ul>
            <li>Information Technology</li>
            <li>Human Resource Management</li>
            <li>Marketing Management</li>
            <li>Financial Management</li>
          </ul>
        </div>
        <div className="career-paths" data-aos="fade-left">
          <h3>Career Paths</h3>
          <ul>
            <li>Business Consultant</li>
            <li>Project Manager</li>
            <li>Marketing Manager</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default MBA;