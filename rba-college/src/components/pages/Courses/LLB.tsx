import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../styles/pages/Courses/CourseComman.css';

export const metadata = {
  name: 'Bachelor of Laws (LLB)',
  duration: '3 Years / 5 Years',
};

const LLB: React.FC = () => {
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
        Bachelor of Laws (LLB)
      </h2>
      <p className="course-description" data-aos="fade-up" data-aos-delay="200">
        Duration: 3 Years / 5 Years
      </p>
      <section className="course-details">
        <div className="course-focus" data-aos="fade-right">
          <h3>Focus Areas</h3>
          <ul>
            <li>Criminal Law</li>
            <li>Civil Law</li>
            <li>Corporate Law</li>
          </ul>
        </div>
        <div className="career-paths" data-aos="fade-left">
          <h3>Career Paths</h3>
          <ul>
            <li>Lawyer</li>
            <li>Legal Advisor</li>
            <li>Corporate Counsel</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default LLB;