import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../styles/pages/Courses/CourseComman.css';

export const metadata = {
  name: 'Bachelor of Physiotherapy (BPT)',
  duration: '4.5 Years',
};

const BPT: React.FC = () => {
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
        Bachelor of Physiotherapy (BPT)
      </h2>
      <p className="course-description" data-aos="fade-up" data-aos-delay="200">
        Duration: 4.5 Years
      </p>
      <section className="course-details">
        <div className="course-focus" data-aos="fade-right">
          <h3>Focus Areas</h3>
          <ul>
            <li>Physiotherapy Techniques</li>
            <li>Rehabilitation</li>
            <li>Exercise Therapy</li>
            <li>Orthopedics</li>
          </ul>
        </div>
        <div className="career-paths" data-aos="fade-left">
          <h3>Career Paths</h3>
          <ul>
            <li>Physiotherapist</li>
            <li>Rehabilitation Specialist</li>
            <li>Sports Therapist</li>
            <li>Orthopedic Consultant</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default BPT;