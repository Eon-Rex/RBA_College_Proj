import React, { useState, useEffect } from 'react';
import '../../styles/pages/Course.css';

const Courses = () => {
  const [courses, setCourses] = useState<
    { id: number; name: string; duration: string; component: React.LazyExoticComponent<any> }[]
  >([]);

  useEffect(() => {
    const importCourses = async () => {
      const courseModules = await Promise.all([
        import('./Courses/BA'),
        import('./Courses/BCA'),
        import('./Courses/BBA'),
        import('./Courses/BCOM'),
        import('./Courses/DiplomaAgriculture'),
        import('./Courses/DiplomaEngineering'),
        import('./Courses/MTech'),
        import('./Courses/MPT'),
        import('./Courses/Yoga'),
        import('./Courses/OpenSchool'),
        import('./Courses/MBA'),
        import('./Courses/LibraryCourse'),
        import('./Courses/LLB'),
        import('./Courses/Journalism'),
        import('./Courses/HotelManagement'),
        import('./Courses/FineArts'),
        import('./Courses/BTech'),
        import('./Courses/BEd'),
      ]);

      const loadedCourses = courseModules.map((module, index) => ({
        id: index + 1,
        name: module.metadata.name,
        duration: module.metadata.duration,
        component: React.lazy(() => Promise.resolve({ default: module.default })),
      }));

      setCourses(loadedCourses);
    };

    importCourses();
  }, []);

  const [expandedCourseId, setExpandedCourseId] = useState<number | null>(null);

  // Toggle the expanded state of a course
  const toggleCourse = (id: number) => {
    setExpandedCourseId(expandedCourseId === id ? null : id);
  };

  return (
    <div className="courses-container">
      <ul className="courses-list">
        {courses.map(course => (
          <li key={course.id} className="course-item">
            <div className="course-card" onClick={() => toggleCourse(course.id)}>
              <h3>{course.name}</h3>
              <p>Duration: {course.duration}</p>
            </div>
            {expandedCourseId === course.id && (
              <div className="course-details">
                <React.Suspense fallback={<p>Loading...</p>}>
                  <course.component />
                </React.Suspense>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;