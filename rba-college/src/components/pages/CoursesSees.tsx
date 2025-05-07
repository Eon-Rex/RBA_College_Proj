import React from 'react';
import { Link } from 'react-router-dom';
import courses from '../../DataSource/DataSets';
import '../../styles/pages/Course.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const CourseList: React.FC = () => {
  return (
    <div className="course-list-container">
      <h1 className="page-title">Explore Our Courses</h1>

      <div className="course-cards-wrapper">
        {courses.map(course => (
          <div key={course.id} className="course-card" data-aos="fade-up">
            <div
              className="course-card-header"
              title={`${course.name} (${course.specialisation}) Program`}
            >
              <h4 className="course-title">
                {course.name} ({course.specialisation}) Program
              </h4>
            </div>
            <p className="course-description">Fee: {course.fee}</p>
            <Link to={`/course/${course.id}`} className="btn">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
