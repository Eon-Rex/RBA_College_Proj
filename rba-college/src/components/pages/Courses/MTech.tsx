import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../styles/pages/Courses/CourseComman.css';

export const metadata = {
  name: 'Master of Technology (M.Tech)',
  duration: '2 Years',
};

const MTech: React.FC = () => {
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
        Master of Technology (M.Tech)
      </h2>
      <p className="course-description" data-aos="fade-up" data-aos-delay="200">
        Duration: 2 Years
      </p>
      <section className="course-details">
        <div className="course-focus" data-aos="fade-right">
          <h3>Focus Areas</h3>
          <ul>
            <li>Advanced Engineering Concepts</li>
            <li>Research and Development</li>
            <li>Specialized Technical Skills</li>
            <li>Project Management</li>
          </ul>
        </div>
        <div className="career-paths" data-aos="fade-left">
          <h3>Career Paths</h3>
          <ul>
            <li>Research Engineer</li>
            <li>Project Manager</li>
            <li>Technical Consultant</li>
            <li>Academician</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default MTech;