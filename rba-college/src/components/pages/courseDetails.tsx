import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import courses from "../../DataSource/DataSets";
import "../../styles/pages/CourseDetails.css";
import CourseBanner from "../common/CourseBanner";

const CourseDetails: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [activeTab, setActiveTab] = useState("overview");
  const [isScrolled, setIsScrolled] = useState(false);
  const course = courses.find((c) => c.id === courseId);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Update active tab based on scroll position
      const sections = ["overview", "curriculum", "admissions", "careers", "faculty"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!course) {
    return (
      <div className="not-found">
        <div className="not-found-container">
          <h1>Program Not Found</h1>
          <p>The requested program could not be located in our system.</p>
          <button 
            className="back-button"
            onClick={() => window.history.back()}
          >
            Return to Programs
          </button>
        </div>
      </div>
    );
  }


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const navHeight = document.querySelector('.course-nav')?.clientHeight || 0;
    const titleHeight = document.querySelector('.floating-course-title')?.clientHeight || 0;
    const offset = navHeight + titleHeight + 20;
    
    if (element) {
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      });
      setTimeout(() => {
        setActiveTab(sectionId);
      }, 1000);
    }
  };

  return (
    <div className="modern-course-details">
      <CourseBanner bannerUrl={course.bannerImage ?? ''}/>
      
      <div className="course-content-container">
        {/* Floating Course Title */}
        <div className={`floating-course-title ${isScrolled ? "scrolled" : ""}`}>
          <div className="title-content">
            <h1>{course.name}</h1>
            <div className="title-meta">
              <span className="duration">{course.duration}</span>
              <span className="divider">•</span>
              <span className="mode">{course.mode}</span>
            </div>
          </div>
          <button className="apply-cta">
            Apply Now
            <svg viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </button>
        </div>

        {/* Sticky Navigation */}
        <nav className={`course-nav ${isScrolled ? "sticky" : "sticky"}`}>
          <div className="nav-container">
            {["overview", "curriculum", "admissions", "careers", "faculty"].map((tab) => (
              <button
                key={tab}
                className={`nav-item ${activeTab === tab ? "active" : ""}`}
                onClick={() => scrollToSection(tab)}
              >
                <span className="nav-icon">
                  {tab === "overview" && "📋"}
                  {tab === "curriculum" && "📚"}
                  {tab === "admissions" && "🎓"}
                  {tab === "careers" && "💼"}
                  {tab === "faculty" && "👨‍🏫"}
                </span>
                <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <div className="course-main-wrapper">
          <main className="course-main-content">
            {/* Overview Section */}
            <section id="overview" className="course-section">
              <div className="section-header">
                <div className="section-tag">Program</div>
                <h2>Overview</h2>
                <div className="section-subtitle">Discover what makes this program unique</div>
                <div className="section-decoration"></div>
              </div>
              
              <div className="glass-card intro-card">
                <div className="intro-decoration"></div>
                <p className="intro-text">
                  {course.additionalInfo || "This program provides students with comprehensive knowledge and practical skills in their chosen field."}
                </p>
              </div>

              {/* Key Features */}
              <div className="highlight-box">
                <div className="highlight-header">
                  <div className="highlight-decoration"></div>
                  <h3>Key Program Features</h3>
                  <p>What sets this program apart from others</p>
                </div>
                <div className="features-grid">
                  
                      <div className="feature-card">
                        <div className="feature-icon">
                          <div className="icon-circle">
                            1
                          </div>
                        </div>
                        <div className="feature-content">
                          <h4>Industry-Aligned Curriculum</h4>
                          <p>Designed with input from leading professionals to ensure relevance</p>
                        </div>
                      </div>
                      <div className="feature-card">
                        <div className="feature-icon">
                          <div className="icon-circle">
                            2
                          </div>
                        </div>
                        <div className="feature-content">
                          <h4>Hands-On Learning</h4>
                          <p>Practical projects and real-world case studies integrated throughout</p>
                        </div>
                      </div>
                      <div className="feature-card">
                        <div className="feature-icon">
                          <div className="icon-circle">
                            3
                          </div>
                        </div>
                        <div className="feature-content">
                          <h4>Expert Faculty</h4>
                          <p>Learn from professors with both academic and industry experience</p>
                        </div>
                      </div>
                      <div className="feature-card">
                        <div className="feature-icon">
                          <div className="icon-circle">
                            4
                          </div>
                        </div>
                        <div className="feature-content">
                          <h4>Career Support</h4>
                          <p>Dedicated career services from day one through graduation</p>
                        </div>
                      </div>
                </div>
              </div>

              {/* Video Tour */}
              <div className="video-tour">
                <div className="video-header">
                  <h3>Program Virtual Tour</h3>
                  <p>Get a glimpse of our campus and facilities</p>
                </div>
                <div className="video-container">
                  <div className="video-placeholder">
                    <div className="play-button-wrapper">
                      <button className="play-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </button>
                    </div>
                    <div className="video-overlay">
                      <p>Watch our program introduction video</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="testimonials-section">
                <div className="section-header">
                  <div className="section-tag">Voices</div>
                  <h2>Student Experiences</h2>
                  <div className="section-subtitle">Hear from our current students and alumni</div>
                </div>
                
                <div className="testimonials-grid">
                  <div className="testimonial-card">
                    <div className="testimonial-content">
                      <div className="quote-icon">“</div>
                      <p>This program transformed my career trajectory. The hands-on projects gave me the confidence to start my own business right after graduation.</p>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-avatar">
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Student" />
                      </div>
                      <div className="author-info">
                        <h4>Maria Rodriguez</h4>
                        <p>Class of 2021, Founder at TechStart</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="testimonial-card">
                    <div className="testimonial-content">
                      <div className="quote-icon">“</div>
                      <p>The faculty's industry connections led to my internship at a Fortune 500 company, which turned into my current full-time position.</p>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-avatar">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Student" />
                      </div>
                      <div className="author-info">
                        <h4>James Chen</h4>
                        <p>Class of 2022, Product Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Curriculum Section */}
            <section id="curriculum" className="course-section">
              <div className="section-header">
                <div className="section-tag">Learning</div>
                <h2>Curriculum Structure</h2>
                <div className="section-subtitle">Explore what you'll learn each year</div>
                <div className="section-decoration"></div>
              </div>
              
              <div className="glass-card">
                <p className="intro-text">
                  {course.examPattern || "Our curriculum is designed to provide both theoretical knowledge and practical application, with increasing specialization as you progress."}
                </p>
              </div>

              <div className="curriculum-tabs">
                <div className="tabs-header">
                  {[1, 2, 3, 4].map((year) => (
                    <button 
                      key={year} 
                      className={`tab-button ${year === 1 ? "active" : ""}`}
                    >
                      Year {year}
                    </button>
                  ))}
                </div>
                <div className="tabs-content">
                  <div className="year-description">
                    <h3>Foundation Year</h3>
                    <p>Build a strong base with core concepts and fundamental skills that will support your advanced studies in subsequent years.</p>
                  </div>
                  
                  <div className="curriculum-modules">
                    <div className="module-card">
                      <div className="module-header">
                        <h4>Core Concepts</h4>
                        <span className="module-credits">15 Credits</span>
                      </div>
                      <ul className="module-topics">
                        <li>Introduction to the Field</li>
                        <li>Fundamental Theories</li>
                        <li>Academic Writing and Research</li>
                        <li>Basic Methodologies</li>
                      </ul>
                    </div>
                    
                    <div className="module-card">
                      <div className="module-header">
                        <h4>Practical Foundations</h4>
                        <span className="module-credits">10 Credits</span>
                      </div>
                      <ul className="module-topics">
                        <li>Laboratory Techniques</li>
                        <li>Field Work Basics</li>
                        <li>Software Tools</li>
                        <li>Data Analysis</li>
                      </ul>
                    </div>
                    
                    <div className="module-card">
                      <div className="module-header">
                        <h4>Elective Introduction</h4>
                        <span className="module-credits">5 Credits</span>
                      </div>
                      <ul className="module-topics">
                        <li>Choose one specialization area</li>
                        <li>Introductory elective course</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="learning-outcomes">
                <div className="outcomes-header">
                  <h3>Program Learning Outcomes</h3>
                  <p>By graduation, you'll be able to:</p>
                </div>
                <div className="outcomes-grid">
                  <div className="outcome-card">
                    <div className="outcome-icon">
                      <svg viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                      </svg>
                    </div>
                    <p>Apply theoretical knowledge to solve complex real-world problems</p>
                  </div>
                  <div className="outcome-card">
                    <div className="outcome-icon">
                      <svg viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                      </svg>
                    </div>
                    <p>Conduct independent research and critical analysis</p>
                  </div>
                  <div className="outcome-card">
                    <div className="outcome-icon">
                      <svg viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                      </svg>
                    </div>
                    <p>Demonstrate professional ethics and responsibility</p>
                  </div>
                  <div className="outcome-card">
                    <div className="outcome-icon">
                      <svg viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                      </svg>
                    </div>
                    <p>Communicate effectively to diverse audiences</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Admissions Section */}
            <section id="admissions" className="course-section">
              <div className="section-header">
                <div className="section-tag">Join Us</div>
                <h2>Admissions Information</h2>
                <div className="section-subtitle">Start your application journey</div>
                <div className="section-decoration"></div>
              </div>
              
              <div className="admissions-cards">
                <div className="admissions-card requirements-card">
                  <div className="card-header">
                    <div className="card-icon">
                      <svg viewBox="0 0 24 24">
                        <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                      </svg>
                    </div>
                    <h3>Admission Requirements</h3>
                  </div>
                  
                  <div className="requirements-content">
                    <h4>Academic Prerequisites</h4>
                    <p>{course.eligibility || "Successful completion of secondary education with strong performance in relevant subjects."}</p>
                    
                    <h4>Language Proficiency</h4>
                    <p>For non-native English speakers: IELTS 6.5 or equivalent</p>
                    
                    <div className="documents-list">
                      <h4>Required Documents</h4>
                      <ul>
                        {course.documentsRequired?.map((doc, index) => (
                          <li key={index}>
                            <span className="check-icon">
                              <svg viewBox="0 0 24 24">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                              </svg>
                            </span>
                            {doc}
                          </li>
                        )) || (
                          <>
                            <li>
                              <span className="check-icon">
                                <svg viewBox="0 0 24 24">
                                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                                </svg>
                              </span>
                              Completed application form
                            </li>
                            <li>
                              <span className="check-icon">
                                <svg viewBox="0 0 24 24">
                                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                                </svg>
                              </span>
                              Official academic transcripts
                            </li>
                            <li>
                              <span className="check-icon">
                                <svg viewBox="0 0 24 24">
                                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                                </svg>
                              </span>
                              Personal statement
                            </li>
                            <li>
                              <span className="check-icon">
                                <svg viewBox="0 0 24 24">
                                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                                </svg>
                              </span>
                              Letters of recommendation
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="admissions-card process-card">
                  <div className="card-header">
                    <div className="card-icon">
                      <svg viewBox="0 0 24 24">
                        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/>
                      </svg>
                    </div>
                    <h3>Application Process</h3>
                  </div>
                  
                  <div className="process-steps">
                    <div className="process-step">
                      <div className="step-number">1</div>
                      <div className="step-content">
                        <h4>Submit Application</h4>
                        <p>Complete our online application form</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="step-number">2</div>
                      <div className="step-content">
                        <h4>Upload Documents</h4>
                        <p>Provide all required supporting materials</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="step-number">3</div>
                      <div className="step-content">
                        <h4>Application Review</h4>
                        <p>Our committee evaluates your submission</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="step-number">4</div>
                      <div className="step-content">
                        <h4>Interview (if required)</h4>
                        <p>Some programs require an interview</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="step-number">5</div>
                      <div className="step-content">
                        <h4>Admission Decision</h4>
                        <p>Receive notification within 4-6 weeks</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="dates-timeline">
                    <h4>Important Dates</h4>
                    <div className="timeline">
                      <div className="timeline-item">
                        <div className="timeline-date">Jan 15</div>
                        <div className="timeline-content">
                          <h5>Applications Open</h5>
                          <p>Begin submitting your applications</p>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-date">Mar 1</div>
                        <div className="timeline-content">
                          <h5>Priority Deadline</h5>
                          <p>For scholarship consideration</p>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-date">Jun 15</div>
                        <div className="timeline-content">
                          <h5>Final Deadline</h5>
                          <p>Last chance to apply</p>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-date">Sep 5</div>
                        <div className="timeline-content">
                          <h5>Program Starts</h5>
                          <p>Orientation begins</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="financial-aid">
                <div className="section-header">
                  <div className="section-tag">Support</div>
                  <h2>Financial Aid & Scholarships</h2>
                  <div className="section-subtitle">Funding options to help with your education</div>
                </div>
                
                <div className="aid-options">
                  <div className="aid-card">
                    <div className="aid-icon">
                      <svg viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
                      </svg>
                    </div>
                    <h3>Merit Scholarships</h3>
                    <p>Awarded based on academic excellence and achievements</p>
                    <button className="learn-more">Learn More</button>
                  </div>
                  
                  <div className="aid-card">
                    <div className="aid-icon">
                      <svg viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                      </svg>
                    </div>
                    <h3>Need-Based Grants</h3>
                    <p>Financial support for students with demonstrated need</p>
                    <button className="learn-more">Learn More</button>
                  </div>
                  
                  <div className="aid-card">
                    <div className="aid-icon">
                      <svg viewBox="0 0 24 24">
                        <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
                      </svg>
                    </div>
                    <h3>Work-Study Programs</h3>
                    <p>Earn while you learn with campus employment</p>
                    <button className="learn-more">Learn More</button>
                  </div>
                </div>
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="course-sidebar">
            <div className="sidebar-card quick-facts">
              <div className="card-header">
                <h3>Program At a Glance</h3>
                <div className="card-decoration"></div>
              </div>
              <div className="facts-grid">
                <div className="fact-item">
                  <div className="fact-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/>
                    </svg>
                  </div>
                  <div className="fact-content">
                    <span>Duration</span>
                    <strong>{course.duration || "4 years"}</strong>
                  </div>
                </div>
                
                <div className="fact-item">
                  <div className="fact-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
                    </svg>
                  </div>
                  <div className="fact-content">
                    <span>Credits</span>
                    <strong>120 ECTS</strong>
                  </div>
                </div>
                
                <div className="fact-item">
                  <div className="fact-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div className="fact-content">
                    <span>Location</span>
                    <strong>Main Campus</strong>
                  </div>
                </div>
                
                <div className="fact-item">
                  <div className="fact-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
                    </svg>
                  </div>
                  <div className="fact-content">
                    <span>Degree</span>
                    <strong>{course.studyMaterial || "Bachelor's"}</strong>
                  </div>
                </div>
                
                <div className="fact-item">
                  <div className="fact-icon">
                    <svg viewBox="0 0 24 24"> 
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 2 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                    </svg>
                  </div>
                  <div className="fact-content">
                    <span>Mode</span>
                    <strong>{course.mode || "On-Campus"}</strong>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="cta-section">
        <div className="cta-content">
          <div className="cta-decoration"></div>
          <h2>Ready to Start Your Journey?</h2>
          <p>
            Join our next cohort of ambitious students and take the first step
            toward your future career.
          </p>
          <div className="cta-buttons">
            <button className="cta-primary-button">
              Apply Now
              <svg viewBox="0 0 24 24">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </button>
            <button className="cta-secondary-button">
              Schedule a Visit
              <svg viewBox="0 0 24 24">
                <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;


