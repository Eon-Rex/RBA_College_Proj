import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../styles/pages/Courses/CourseComman.css';

export const metadata = {
  name: 'Bachelor of Technology (B.Tech)',
  duration: '4 Years',
};

const BTech: React.FC = () => {
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
        Bachelor of Technology (B.Tech)
      </h2>
      <p className="course-description" data-aos="fade-up" data-aos-delay="200">
        Duration: 4 Years
      </p>
      <section className="course-details">
        <div className="course-focus" data-aos="fade-right">
          <h3>Focus Areas</h3>
          <ul>
            <li>Computer Science</li>
            <li>Mechanical Engineering</li>
            <li>Electrical Engineering</li>
            <li>Civil Engineering</li>
          </ul>
        </div>
        <div className="career-paths" data-aos="fade-left">
          <h3>Career Paths</h3>
          <ul>
            <li>Software Engineer</li>
            <li>Mechanical Engineer</li>
            <li>Electrical Engineer</li>
            <li>Civil Engineer</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default BTech;