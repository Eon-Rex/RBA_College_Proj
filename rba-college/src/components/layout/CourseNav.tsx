import React, { useState } from 'react';

interface Course {
  id: number;
  name: string;
  duration: string;
}

interface CourseNavProps {
  courses: Course[];
}

const CourseNav: React.FC<CourseNavProps> = ({ courses }) => {
  const [activeTab, setActiveTab] = useState<number>(courses[0]?.id || 0);

  const handleTabClick = (id: number) => {
    setActiveTab(id);
  };

  return (
    <div className="course-tabs">
      <div className="tab-header">
        {courses.map((course) => (
          <button
            key={course.id}
            className={`tab-button ${activeTab === course.id ? 'active' : ''}`}
            onClick={() => handleTabClick(course.id)}
          >
            {course.name}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {courses.map((course) =>
          activeTab === course.id ? (
            <div key={course.id} className="tab-panel">
              <h2>{course.name}</h2>
              <p>Duration: {course.duration}</p>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default CourseNav;