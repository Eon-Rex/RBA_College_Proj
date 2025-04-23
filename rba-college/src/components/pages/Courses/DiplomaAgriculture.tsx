import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../styles/pages/Courses/CourseComman.css';

export const metadata = {
  name: 'Diploma in Agriculture',
  duration: '2 Years',
};

const DiplomaAgriculture: React.FC = () => {
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
        Diploma in Agriculture
      </h2>
      <p className="course-description" data-aos="fade-up" data-aos-delay="200">
        Duration: 2 Years
      </p>
      <section className="course-details">
        <div className="course-focus" data-aos="fade-right">
          <h3>Focus Areas</h3>
          <ul>
            <li>Crop Production</li>
            <li>Soil Science</li>
            <li>Agricultural Economics</li>
            <li>Farm Management</li>
          </ul>
        </div>
        <div className="career-paths" data-aos="fade-left">
          <h3>Career Paths</h3>
          <ul>
            <li>Agricultural Officer</li>
            <li>Farm Manager</li>
            <li>Soil Scientist</li>
            <li>Extension Officer</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DiplomaAgriculture;