
import React from 'react';
import { Helmet } from 'react-helmet';
import '../../styles/pages/Home.css';
import CourseNav from '../layout/CourseNav';

const courses = [
  { id: 1, name: 'Computer Science', duration: '4 years' },
  { id: 2, name: 'Business Administration', duration: '3 years' },
  { id: 3, name: 'Graphic Design', duration: '2 years' },
  { id: 4, name: 'Information Technology', duration: '4 years' },
  { id: 5, name: 'Psychology', duration: '3 years' },
];

const Home: React.FC = () => {
  return (
    <>    
    <CourseNav courses={courses} />
    <main className="home">
      <Helmet>
        <title>Home - RBA College</title>
        <meta name="description" content="Welcome to RBA College. Explore our courses and programs to achieve your academic and career goals." />
        <meta name="keywords" content="RBA College, education, courses, programs, academic goals" />
      </Helmet>
      <section className="home-content">
        <h1 className="home-title">Welcome to RBA College</h1>
        <p className="home-description">
          RBA College offers a wide range of courses to help you achieve your academic and career goals. Join us to unlock your potential and shape your future.
        </p>
        
      </section>
    </main>
    </>

  );
};

export default Home;