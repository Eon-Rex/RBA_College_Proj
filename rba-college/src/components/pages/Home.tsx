import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from "framer-motion";
import "../../styles/pages/Home.css";
import DeanImage from "../../assets/dean.svg";
import ReviewImage1 from "../../assets/studentsImages/Student1.jpg";
import ReviewImage2 from "../../assets/studentsImages/Student2.jpg";
import ReviewImage3 from "../../assets/studentsImages/Student3.jpg";
import CampusImage from "../../assets/college.jpg";
import LibraryImage from "../../assets/Library.jpg";
import LabImage from "../../assets/lab.jpg";
import SportsImage from "../../assets/sports.jpg";
import EventImage from "../../assets/auditorium.jpg";
import homepagebanner from "../../assets/CoursesBanners/HomePage.jpeg";
import { FaGraduationCap, FaChalkboardTeacher, FaBook, FaUniversity, FaFlask, FaMicroscope, FaLaptopCode, FaTheaterMasks } from "react-icons/fa";
import { GiTeacher, GiBookshelf, GiMoneyStack, GiModernCity, GiMedal, GiGraduateCap, GiBrain } from "react-icons/gi";
import { IoLibraryOutline, IoPeopleCircleOutline } from "react-icons/io5";
import { MdScience, MdSportsCricket, MdEvent } from "react-icons/md";

const studentReviews = [
  {
    name: "Aarav Gupta",
    review: "RBA College has provided me with the best learning experience and opportunities to grow. The faculty's dedication is unmatched.",
    image: ReviewImage1,
    role: "Computer Science Graduate",
    rating: 5
  },
  {
    name: "Priya Sharma",
    review: "The faculty here is amazing, and the campus life is vibrant and enriching. I've made lifelong friends and mentors.",
    image: ReviewImage2,
    role: "Business Administration",
    rating: 4
  },
  {
    name: "Rohan Mehta",
    review: "I am proud to be an alumnus of RBA College. It has shaped my career and future through its excellent placement cell.",
    image: ReviewImage3,
    role: "Engineering Alumni",
    rating: 5
  },
];

const events = [
  {
    title: "Annual Tech Fest",
    date: "15-17 Oct 2023",
    description: "Three days of innovation, competitions, and tech workshops featuring industry leaders.",
    icon: <FaLaptopCode />
  },
  {
    title: "Cultural Carnival",
    date: "22-24 Nov 2023",
    description: "Celebrating diversity through music, dance, and art performances from across India.",
    icon: <FaTheaterMasks />
  },
  {
    title: "Science Symposium",
    date: "5 Dec 2023",
    description: "Showcasing student research projects and keynote speeches by renowned scientists.",
    icon: <MdScience />
  }
];

const facilities = [
  {
    title: "Modern Library",
    description: "150,000+ books, digital resources, and 24/7 study spaces",
    image: LibraryImage,
    icon: <IoLibraryOutline />
  },
  {
    title: "Advanced Labs",
    description: "State-of-the-art equipment for practical learning across disciplines",
    image: LabImage,
    icon: <FaFlask />
  },
  {
    title: "Sports Complex",
    description: "Olympic-size swimming pool, indoor stadium, and fitness center",
    image: SportsImage,
    icon: <MdSportsCricket />
  },
  {
    title: "Auditorium",
    description: "1000-seat venue for conferences, performances, and events",
    image: EventImage,
    icon: <MdEvent />
  }
];

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const yPos = useTransform(scrollY, [0, 500], [0, -100]);

  const handleButtonClick = () => {
    navigate('/courses'); 
  };

  return (
    <HelmetProvider>
      <main className="home">
        <Helmet>
          <title>Home - RBA College: Premier Institution in Faridabad</title>
          <meta
            name="description"
            content="RBA College offers world-class education with state-of-the-art facilities, expert faculty, and a vibrant campus life in Faridabad."
          />
          <meta
            name="keywords"
            content="RBA College, Faridabad education, best college in Faridabad, undergraduate programs, postgraduate courses, campus life"
          />
        </Helmet>

        {/* Hero Section */}
        <motion.section 
          className="hero-section-home"
          style={{ y: yPos }}
        >
          <div className="hero-image-container">
            <img 
              src={homepagebanner} 
              alt="RBA College Campus View" 
              className="hero-bg-image"
            />
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <motion.h1
              className="hero-title-main"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Excellence in Education Since 1970
            </motion.h1>
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Shaping futures through innovative learning and holistic development
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.button 
                className="cta-button" 
                onClick={handleButtonClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Explore Our Programs
              </motion.button>
            </motion.div>
          </div>
          <div className="scroll-indicator">
            <motion.span
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.section>

        <div className="content-wrapper">
          {/* About Section - Enhanced */}
          <section className="about-section">
            <div className="container">
              <motion.div 
                className="section-header"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2>About RBA College</h2>
                <div className="divider"></div>
                <p className="section-subtitle">
                  A premier institution with a legacy of academic excellence and innovation
                </p>
              </motion.div>
              
              <div className="about-content">
                <motion.div 
                  className="about-text"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <p>
                    Established in 1970, RBA College has grown from a small local institution to one of Faridabad's most 
                    respected educational landmarks. Our 20-acre campus blends historic architecture with cutting-edge 
                    facilities, creating an inspiring environment for over 5,000 students annually.
                  </p>
                  <p>
                    We take pride in our student-centric approach, offering personalized attention through our 12:1 
                    student-faculty ratio. Our curriculum integrates traditional knowledge with contemporary skills, 
                    preparing students for the challenges of tomorrow's workforce.
                  </p>
                  <div className="stats-grid">
                    {[
                      { number: "50+", label: "Years of Excellence", icon: <GiMedal /> },
                      { number: "20K+", label: "Successful Alumni", icon: <GiGraduateCap /> },
                      { number: "100+", label: "Expert Faculty", icon: <GiTeacher /> },
                      { number: "85%", label: "Placement Rate", icon: <FaUniversity /> },
                      { number: "40+", label: "Academic Programs", icon: <FaBook /> },
                      { number: "150+", label: "Industry Partners", icon: <IoPeopleCircleOutline /> }
                    ].map((stat, index) => (
                      <motion.div 
                        key={index}
                        className="stat-item"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="stat-icon">{stat.icon}</div>
                        <div className="stat-number">{stat.number}</div>
                        <div className="stat-label">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div 
                  className="dean-card"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="dean-image-container">
                    <img src={DeanImage} alt="Dr. Anil Sharma, Dean of RBA College" className="dean-image" />
                    <div className="dean-overlay">
                      <h3>Dr. Anil Sharma</h3>
                      <p>Dean of RBA College</p>
                    </div>
                  </div>
                  <div className="dean-info">
                    <p>
                      "At RBA College, we believe education should ignite curiosity, foster critical thinking, 
                      and develop character. Our mission is to create global citizens who will lead with integrity 
                      and innovation in their chosen fields."
                    </p>
                    <div className="dean-credentials">
                      <p><strong>Education:</strong> Ph.D. in Education Management, Harvard University</p>
                      <p><strong>Experience:</strong> 28 years in academic leadership</p>
                      <p><strong>Awards:</strong> National Education Excellence Award (2019)</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Campus Life Section - New */}
          <section className="campus-section">
            <div className="container">
              <motion.div 
                className="section-header"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2>Campus Life</h2>
                <div className="divider"></div>
                <p className="section-subtitle">
                  Experience vibrant student life beyond the classroom
                </p>
              </motion.div>
              
              <motion.div 
                className="campus-highlight"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="campus-image-container">
                  <img src={CampusImage} alt="RBA College Campus Life" className="campus-image" />
                  <div className="campus-overlay">
                    <h3>More Than Just Academics</h3>
                    <p>Discover our thriving community</p>
                  </div>
                </div>
                <div className="campus-features">
                  {[
                    { title: "50+ Student Clubs", description: "From robotics to classical dance", icon: <GiModernCity /> },
                    { title: "Annual Festivals", description: "Cultural, technical and sports events", icon: <MdEvent /> },
                    { title: "Leadership Programs", description: "Developing tomorrow's leaders", icon: <GiBrain /> },
                    { title: "Community Service", description: "Making a difference locally", icon: <IoPeopleCircleOutline /> }
                  ].map((feature, index) => (
                    <motion.div 
                      key={index}
                      className="campus-feature"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="feature-icon">{feature.icon}</div>
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Academic Highlights - New */}
          <section className="academic-section">
            <div className="container">
              <motion.div 
                className="section-header"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2>Academic Excellence</h2>
                <div className="divider"></div>
                <p className="section-subtitle">
                  Programs designed for the future
                </p>
              </motion.div>
              
              <div className="academic-grid">
                {[
                  {
                    title: "Industry-Aligned Curriculum",
                    description: "Our programs are developed in collaboration with industry leaders to ensure relevance",
                    icon: <FaChalkboardTeacher />,
                    color: "var(--primary)"
                  },
                  {
                    title: "Research Opportunities",
                    description: "Undergraduate research programs with faculty mentorship",
                    icon: <FaMicroscope />,
                    color: "var(--secondary)"
                  },
                  {
                    title: "Global Perspective",
                    description: "Exchange programs with 30+ international universities",
                    icon: <FaUniversity />,
                    color: "var(--accent)"
                  },
                  {
                    title: "Skill Development",
                    description: "Certification courses in emerging technologies",
                    icon: <FaLaptopCode />,
                    color: "var(--primary-dark)"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="academic-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    style={{ borderTop: `4px solid ${item.color}` }}
                  >
                    <div className="academic-icon" style={{ color: item.color }}>
                      {item.icon}
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Facilities Section - New */}
          <section className="facilities-section">
            <div className="container">
              <motion.div 
                className="section-header"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2>World-Class Facilities</h2>
                <div className="divider"></div>
                <p className="section-subtitle">
                  Supporting your academic journey with premium infrastructure
                </p>
              </motion.div>
              
              <div className="facilities-grid">
                {facilities.map((facility, index) => (
                  <motion.div 
                    key={index}
                    className="facility-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="facility-image-container">
                      <img src={facility.image} alt={facility.title} className="facility-image" />
                      <div className="facility-overlay">
                        <div className="facility-icon">{facility.icon}</div>
                        <h3>{facility.title}</h3>
                      </div>
                    </div>
                    <div className="facility-info">
                      <p>{facility.description}</p>
                      <button className="facility-button">Explore More</button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Upcoming Events - New */}
          <section className="events-section">
            <div className="container">
              <motion.div 
                className="section-header"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2>Upcoming Events</h2>
                <div className="divider"></div>
                <p className="section-subtitle">
                  Engage with our vibrant academic community
                </p>
              </motion.div>
              
              <div className="events-timeline">
                {events.map((event, index) => (
                  <motion.div 
                    key={index}
                    className="event-item"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="event-icon">{event.icon}</div>
                    <div className="event-content">
                      <div className="event-date">{event.date}</div>
                      <h3>{event.title}</h3>
                      <p>{event.description}</p>
                      <button className="event-button">Learn More</button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Student Reviews Section - Enhanced */}
          <section className="testimonials-section">
            <div className="container">
              <motion.div 
                className="section-header"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2>Student & Alumni Voices</h2>
                <div className="divider"></div>
                <p className="section-subtitle">
                  Hear from those who've experienced RBA firsthand
                </p>
              </motion.div>
              
              <div className="testimonials-grid">
                {studentReviews.map((review, index) => (
                  <motion.div 
                    key={index} 
                    className="testimonial-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="testimonial-content">
                      <div className="quote-icon">"</div>
                      <p>{review.review}</p>
                      <div className="rating">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < review.rating ? "star-filled" : "star-empty"}>★</span>
                        ))}
                      </div>
                    </div>
                    <div className="testimonial-author">
                      <img src={review.image} alt={review.name} className="author-image" />
                      <div className="author-info">
                        <h4>{review.name}</h4>
                        <p>{review.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Partnership Section - New */}
          <section className="partners-section">
            <div className="container">
              <motion.div 
                className="section-header"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2>Our Esteemed Partners</h2>
                <div className="divider"></div>
                <p className="section-subtitle">
                  Collaborating with industry and academia for student success
                </p>
              </motion.div>
              
              <motion.div 
                className="partners-grid"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {["TechCorp", "EduGlobal", "InnovateX", "FutureLearn", "SkillSphere"].map((partner, index) => (
                  <motion.div 
                    key={index}
                    className="partner-logo"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {partner}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Call to Action - Enhanced */}
          <motion.section 
            className="cta-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="container">
              <h2>Begin Your Transformational Journey</h2>
              <p>Applications for 2023-24 academic year are now open</p>
              <div className="cta-buttons">
                <motion.button 
                  className="cta-button primary"
                  onClick={handleButtonClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Programs
                </motion.button>
                <motion.button 
                  className="cta-button secondary"
                  onClick={() => navigate('/contact')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Campus Visit
                </motion.button>
              </div>
              <div className="cta-info">
                <p>Have questions? <a href="/contact">Contact our admissions team</a></p>
                <p>Upcoming admission deadlines: <strong>November 15, 2023</strong></p>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
    </HelmetProvider>
  );
};

export default Home;