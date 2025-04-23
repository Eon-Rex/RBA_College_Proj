import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../styles/pages/About.css';

const About: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      offset: 100, // Offset from the top of the screen
      easing: 'ease-in-out', // Smooth easing
      once: false, // Trigger animation only once
    });
  }, []);

  // Dynamic data for the table
  const studentData = [
    {
      name: 'Ananya Sharma',
      course: 'B.Com',
      percentage: '91%',
      achievement: 'College Topper – Commerce',
    },
    {
      name: 'Rohit Verma',
      course: 'BBA',
      percentage: '89%',
      achievement: 'Best Manager Award',
    },
    {
      name: 'Sneha Mehra',
      course: 'BCA',
      percentage: '93%',
      achievement: 'Topper – Computer Science',
    },
    {
      name: 'Amit Gupta',
      course: 'Tally ERP',
      percentage: '98%',
      achievement: 'Certified with Distinction',
    },
    {
      name: 'Pooja Yadav',
      course: 'Web Design',
      percentage: '96%',
      achievement: 'Created College Website',
    },
  ];

  return (
    <div className="about">
      {/* Intro Section */}
      <section className="about-intro">
        <div className="about-text" data-aos="fade-right">
          <h1>About RBA College</h1>
          <p>
            Established in 1970, RBA College has been dedicated to providing affordable, quality education in Faridabad for over 50 years. With a mission to develop skilled professionals ready to meet industry standards, we focus on both academic and personal growth. Our institution is recognized for its student-friendly environment, modern classrooms, and career guidance support.
          </p>
        </div>
        <div className="about-image" data-aos="fade-left">
          <img src="/images/college-building.jpg" alt="RBA College Building" />
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <h2 data-aos="fade-up">Our Mission & Vision</h2>
        <div className="values-grid">
          <div className="value-card" data-aos="zoom-in" data-aos-delay="100">
            <i className="fas fa-graduation-cap"></i>
            <h3>Quality Education</h3>
            <p>Providing affordable and high-quality education to empower students.</p>
          </div>
          <div className="value-card" data-aos="zoom-in" data-aos-delay="200">
            <i className="fas fa-people-arrows"></i>
            <h3>Inclusive Environment</h3>
            <p>Fostering a diverse and inclusive environment for all students.</p>
          </div>
          <div className="value-card" data-aos="zoom-in" data-aos-delay="300">
            <i className="fas fa-lightbulb"></i>
            <h3>Innovation</h3>
            <p>Encouraging creativity and innovation in learning and teaching.</p>
          </div>
          <div className="value-card" data-aos="zoom-in" data-aos-delay="400">
            <i className="fas fa-handshake"></i>
            <h3>Community Impact</h3>
            <p>Building strong connections with the community and industry.</p>
          </div>
        </div>
      </section>

      {/* Top Student Results Section */}
      <section className="top-students">
        <h2 data-aos="fade-up">🏆 Top Student Results</h2>
        <p className="section-description" data-aos="fade-up" data-aos-delay="100">
          ⭐ Academic Achievers – 2024
        </p>
        <div className="students-table" data-aos="fade-up" data-aos-delay="200">
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Course</th>
                <th>Percentage</th>
                <th>Achievement</th>
              </tr>
            </thead>
            <tbody>
              {studentData.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.course}</td>
                  <td>{student.percentage}</td>
                  <td>{student.achievement}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="students-note" data-aos="fade-up" data-aos-delay="300">
          Our students consistently perform well in academics and have gone on to secure top placements and internships.
        </p>
      </section>
    </div>
  );
};

export default About;