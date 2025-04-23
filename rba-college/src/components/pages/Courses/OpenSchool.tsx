import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../styles/pages/Courses/CourseComman.css';

export const metadata = {
  name: 'Open School Programs',
  duration: 'Flexible',
};

const OpenSchool: React.FC = () => {
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
        Open School Programs
      </h2>
      <p className="course-description" data-aos="fade-up" data-aos-delay="200">
        Duration: Flexible
      </p>
      <section className="course-details">
        <div className="course-focus" data-aos="fade-right">
          <h3>Focus Areas</h3>
          <ul>
            <li>10th (Open School)</li>
            <li>10+2 (Open School)</li>
            <li>CBSE Curriculum</li>
            <li>Haryana Board Curriculum</li>
          </ul>
        </div>
        <div className="career-paths" data-aos="fade-left">
          <h3>Career Paths</h3>
          <ul>
            <li>Higher Education</li>
            <li>Skill Development</li>
            <li>Vocational Training</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default OpenSchool;