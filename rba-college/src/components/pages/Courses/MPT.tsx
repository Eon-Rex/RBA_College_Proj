import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../styles/pages/Courses/CourseComman.css';

export const metadata = {
  name: 'Master of Physiotherapy (MPT)',
  duration: '2 Years',
};

const MPT: React.FC = () => {
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
        Master of Physiotherapy (MPT)
      </h2>
      <p className="course-description" data-aos="fade-up" data-aos-delay="200">
        Duration: 2 Years
      </p>
      <section className="course-details">
        <div className="course-focus" data-aos="fade-right">
          <h3>Focus Areas</h3>
          <ul>
            <li>Advanced Physiotherapy Techniques</li>
            <li>Neurological Rehabilitation</li>
            <li>Orthopedic Rehabilitation</li>
            <li>Sports Therapy</li>
          </ul>
        </div>
        <div className="career-paths" data-aos="fade-left">
          <h3>Career Paths</h3>
          <ul>
            <li>Senior Physiotherapist</li>
            <li>Rehabilitation Specialist</li>
            <li>Sports Therapist</li>
            <li>Clinical Researcher</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default MPT;