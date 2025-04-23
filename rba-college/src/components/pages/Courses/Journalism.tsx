import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../styles/pages/Courses/CourseComman.css';

export const metadata = {
  name: 'Journalism and Mass Communication',
  duration: '3 Years',
};

const Journalism: React.FC = () => {
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
        Journalism and Mass Communication
      </h2>
      <p className="course-description" data-aos="fade-up" data-aos-delay="200">
        Duration: 3 Years
      </p>
      <section className="course-details">
        <div className="course-focus" data-aos="fade-right">
          <h3>Focus Areas</h3>
          <ul>
            <li>Media Ethics</li>
            <li>Broadcast Journalism</li>
            <li>Public Relations</li>
            <li>Advertising</li>
          </ul>
        </div>
        <div className="career-paths" data-aos="fade-left">
          <h3>Career Paths</h3>
          <ul>
            <li>Journalist</li>
            <li>News Anchor</li>
            <li>Public Relations Officer</li>
            <li>Content Creator</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Journalism;