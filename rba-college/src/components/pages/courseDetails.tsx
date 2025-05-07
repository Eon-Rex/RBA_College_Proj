import React from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/pages/Course.css';
import courses from '../../DataSource/DataSets';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const CourseDetails: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return <div className="container">Course not found</div>;
  }

  return (
    <div className="course-details-container">
      <div className="course-header" data-aos="fade-up">
        <h2 className="course-title">{course.name} Program at RBA College</h2>
        <p className="course-specialisation">{course.specialisation}</p>
      </div>

      <div className="course-card" data-aos="fade-up">
        <h3 className="section-title">Course Overview</h3>
        <ul className="course-overview">
          <li><strong>Duration:</strong> {course.duration}</li>
          <li><strong>Eligibility:</strong> {course.eligibility}</li>
          <li><strong>University:</strong> {course.university}</li>
          <li><strong>Mode:</strong> {course.mode}</li>
        </ul>
      </div>

      <div className="course-card" data-aos="fade-up">
        <h3 className="section-title">Exam Pattern</h3>
        <p>{course.examPattern}</p>
      </div>

      <div className="course-card" data-aos="fade-up">
        <h3 className="section-title">Required Documents</h3>
        <ul className="documents-list">
          {course.documentsRequired?.map((doc, index) => (
            <li key={index}>{doc}</li>
          ))}
        </ul>
      </div>

      <div className="course-card" data-aos="fade-up">
        <h3 className="section-title">Fee Structure</h3>
        <p className="fee-amount">{course.fee}</p>
      </div>

      <div className="course-card" data-aos="fade-up">
        <h3 className="section-title">Additional Information</h3>
        <ul className="additional-info-list">
          {course.additionalInfo?.map((info, index) => (
            <li key={index}>{info}</li>
          ))}
        </ul>
      </div>

      <div className="course-card contact" data-aos="fade-up">
        <h3 className="section-title">Contact & Enrolment</h3>
        <div className="contact-details">
          <p><strong>Phone:</strong> {course.contact?.phone}</p>
          <p><strong>Email:</strong> <a href={`mailto:${course.contact?.email}`}>{course.contact?.email}</a></p>
          <p><strong>WhatsApp:</strong> <a href={`https://wa.me/${course.contact?.whatsapp}`} target="_blank" rel="noopener noreferrer">{course.contact?.whatsapp}</a></p>
        </div>
      </div>

      <div className="course-card" data-aos="fade-up">
        <h3 className="section-title">Address</h3>
        <p>{course.address?.address}</p>
        <p><strong>Nearest Metro Station:</strong> {course.address?.metroStation}</p>
      </div>

      <div className="cta-card" data-aos="fade-up">
        <h2>Hurry! Enrol Now!</h2>
        <button className="cta-button">Enrol Now</button>
      </div>
    </div>
  );
};

export default CourseDetails;
