import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../styles/pages/Courses/CourseComman.css';

const MCA: React.FC = () => {
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
        Master of Computer Applications (MCA)
      </h2>
      <p className="course-description" data-aos="fade-up" data-aos-delay="200">
        Duration: 2 Years
      </p>
      <section className="course-details">
        <div className="course-focus" data-aos="fade-right">
          <h3>Focus Areas</h3>
          <ul>
            <li>Advanced Programming</li>
            <li>Software Development</li>
            <li>Data Science</li>
          </ul>
        </div>
        <div className="career-paths" data-aos="fade-left">
          <h3>Career Paths</h3>
          <ul>
            <li>Software Engineer</li>
            <li>Data Scientist</li>
            <li>IT Consultant</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default MCA;