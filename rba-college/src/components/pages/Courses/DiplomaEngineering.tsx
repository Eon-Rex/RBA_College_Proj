import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../styles/pages/Courses/CourseComman.css';

const DiplomaEngineering: React.FC = () => {
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
        Diploma in Engineering
      </h2>
      <p className="course-description" data-aos="fade-up" data-aos-delay="200">
        Duration: 3 Years
      </p>
      <section className="course-details">
        <div className="course-focus" data-aos="fade-right">
          <h3>Focus Areas</h3>
          <ul>
            <li>Mechanical Engineering</li>
            <li>Electrical Engineering</li>
            <li>Civil Engineering</li>
            <li>Computer Science</li>
          </ul>
        </div>
        <div className="career-paths" data-aos="fade-left">
          <h3>Career Paths</h3>
          <ul>
            <li>Junior Engineer</li>
            <li>Technician</li>
            <li>Site Supervisor</li>
            <li>CAD Designer</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

// Export metadata
export const metadata = {
  name: 'Diploma in Engineering',
  duration: '3 Years',
};

export default DiplomaEngineering;