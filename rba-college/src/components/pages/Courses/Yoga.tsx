import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../styles/pages/Courses/CourseComman.css';

export const metadata = {
  name: 'Yoga and Naturopathy',
  duration: '3 Years',
};

const Yoga: React.FC = () => {
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
        Yoga and Naturopathy
      </h2>
      <p className="course-description" data-aos="fade-up" data-aos-delay="200">
        Duration: 3 Years
      </p>
      <section className="course-details">
        <div className="course-focus" data-aos="fade-right">
          <h3>Focus Areas</h3>
          <ul>
            <li>Yoga Therapy</li>
            <li>Natural Healing Techniques</li>
            <li>Stress Management</li>
            <li>Holistic Health</li>
          </ul>
        </div>
        <div className="career-paths" data-aos="fade-left">
          <h3>Career Paths</h3>
          <ul>
            <li>Yoga Instructor</li>
            <li>Wellness Consultant</li>
            <li>Therapist</li>
            <li>Health Coach</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Yoga;