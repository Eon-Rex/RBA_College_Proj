import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../styles/pages/Courses/CourseComman.css';

const BA: React.FC = () => {
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
        Bachelor of Arts (BA)
      </h2>
      <p className="course-description" data-aos="fade-up" data-aos-delay="200">
        Duration: 3 Years
      </p>
      <section className="course-details">
        <div className="course-focus" data-aos="fade-right">
          <h3>Focus Areas</h3>
          <ul>
            <li>History</li>
            <li>Political Science</li>
            <li>Economics</li>
            <li>Psychology</li>
          </ul>
        </div>
        <div className="career-paths" data-aos="fade-left">
          <h3>Career Paths</h3>
          <ul>
            <li>Teacher</li>
            <li>Content Writer</li>
            <li>Public Administrator</li>
            <li>Research Analyst</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export const metadata = {
  name: 'Bachelor of Arts (BA)',
  duration: '3 Years',
};

export default BA;