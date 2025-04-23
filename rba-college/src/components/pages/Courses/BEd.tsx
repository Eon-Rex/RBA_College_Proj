import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../styles/pages/Courses/CourseComman.css';

export const metadata = {
  name: 'Bachelor of Education (B.Ed)',
  duration: '2 Years',
};

const BEd: React.FC = () => {
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
        Bachelor of Education (B.Ed)
      </h2>
      <p className="course-description" data-aos="fade-up" data-aos-delay="200">
        Duration: 2 Years
      </p>
      <section className="course-details">
        <div className="course-focus" data-aos="fade-right">
          <h3>Focus Areas</h3>
          <ul>
            <li>Teaching Methodologies</li>
            <li>Educational Psychology</li>
            <li>Curriculum Development</li>
            <li>Classroom Management</li>
          </ul>
        </div>
        <div className="career-paths" data-aos="fade-left">
          <h3>Career Paths</h3>
          <ul>
            <li>School Teacher</li>
            <li>Educational Consultant</li>
            <li>Curriculum Developer</li>
            <li>Principal</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default BEd;