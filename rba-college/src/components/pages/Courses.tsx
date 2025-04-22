import React from 'react';
import '../../styles/pages/Course.css';

const Courses = () => {
  const courses = [
    { id: 1, name: 'Computer Science', duration: '4 years' },
    { id: 2, name: 'Business Administration', duration: '3 years' },
    { id: 3, name: 'Graphic Design', duration: '2 years' },
    { id: 4, name: 'Information Technology', duration: '4 years' },
    { id: 5, name: 'Psychology', duration: '3 years' },
  ];

  return (
    <div className="courses-container">
      <ul className="courses-list">
        {courses.map(course => (
          <li key={course.id} className="course-item">
            <h3>{course.name}</h3>
            <p>Duration: {course.duration}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;