import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../styles/pages/Courses/CourseComman.css';

export const metadata = {
  name: 'Library Course',
  duration: '1 Year',
};

const LibraryCourse: React.FC = () => {
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
        Library Course
      </h2>
      <p className="course-description" data-aos="fade-up" data-aos-delay="200">
        Duration: 1 Year
      </p>
      <section className="course-details">
        <div className="course-focus" data-aos="fade-right">
          <h3>Focus Areas</h3>
          <ul>
            <li>Library Management</li>
            <li>Cataloging and Classification</li>
            <li>Information Technology in Libraries</li>
          </ul>
        </div>
        <div className="career-paths" data-aos="fade-left">
          <h3>Career Paths</h3>
          <ul>
            <li>Librarian</li>
            <li>Library Assistant</li>
            <li>Information Specialist</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default LibraryCourse;