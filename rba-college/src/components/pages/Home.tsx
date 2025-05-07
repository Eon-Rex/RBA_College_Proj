import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { Helmet, HelmetProvider } from "react-helmet-async";
import useHistory, { useNavigate }  from 'react-router-dom';
import "../../styles/pages/Home.css";
import DeanImage from "../../assets/dean.svg";
import ReviewImage1 from "../../assets/studentsImages/S1.svg";
import ReviewImage2 from "../../assets/studentsImages/S2.svg";
import ReviewImage3 from "../../assets/studentsImages/S3.svg";

const studentReviews = [
  {
    name: "Aarav Gupta",
    review: "RBA College has provided me with the best learning experience and opportunities to grow.",
    image: ReviewImage1,
  },
  {
    name: "Priya Sharma",
    review: "The faculty here is amazing, and the campus life is vibrant and enriching.",
    image: ReviewImage2,
  },
  {
    name: "Rohan Mehta",
    review: "I am proud to be an alumnus of RBA College. It has shaped my career and future.",
    image: ReviewImage3,
  },
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/courses'); 
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-in-out",
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <HelmetProvider>
      <main className="home">
        <Helmet>
          <title>Home - RBA College</title>
          <meta
            name="description"
            content="Welcome to RBA College. Explore our courses and programs to achieve your academic and career goals."
          />
          <meta
            name="keywords"
            content="RBA College, education, courses, programs, academic goals"
          />
        </Helmet>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Welcome to RBA College, Faridabad</h1>
            <button className="cta-button" onClick={handleButtonClick}>Explore Courses</button>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section" data-aos="fade-up">
          <h2>About RBA College, Faridabad</h2>
          <p>
            RBA College, located in the heart of Faridabad, has been a beacon of
            quality education since its inception in 1970. With a legacy of over
            50 years, the college is committed to nurturing academic excellence
            and holistic development.
          </p>
          <div className="dean-card">
            <div className="avatar">
              <img
                src={DeanImage}
                alt="Dr. Anil Sharma"
              />
            </div>
            <h2 className="name">Dr. Anil Sharma</h2>
            <div className="title">Dean of RBA College</div>
            <div className="actions">
                <p>
                  Dr. Anil Sharma, the Dean of RBA College, is a visionary
                  leader with over 25 years of experience in academia. Under his
                  guidance, the college has achieved remarkable milestones in
                  education and research.
                </p>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="highlights-section">
          {[
            {
              title: "📘 Courses Offered",
              description:
                "Explore a variety of undergraduate and postgraduate programs.",
            },
            {
              title: "🎓 50+ Years of Legacy",
              description: "Providing quality education since 1970.",
            },
            {
              title: "🏅 20,000+ Alumni",
              description:
                "Join a network of successful professionals worldwide.",
            },
            {
              title: "📍 Prime Location",
              description:
                "Located in the heart of Faridabad with excellent connectivity.",
            },
          ].map((card, index, arr) => {
            const alignment =
              arr.length % 2 !== 0 && index === Math.floor(arr.length / 2)
                ? "center"
                : index % 4 === 0 || index % 4 === 1
                ? "left"
                : "right";

            return (
              <div
                key={index}
                className={`card ${alignment}`}
                data-aos={
                  alignment === "left"
                    ? "fade-right"
                    : alignment === "right"
                    ? "fade-left"
                    : "zoom-in"
                }
                data-aos-delay={index * 200}
              >
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            );
          })}
        </section>

        {/* Student Reviews Section */}
        <section className="student-reviews-section" data-aos="fade-up">
          <h2 className="what-our-students-say">What Our Students Say</h2>
          <div className="reviews-grid">
            {studentReviews.map((review, index) => (
              <div key={index} className="review-card" data-aos="fade-up" data-aos-delay={index * 200}>
              <blockquote>{review.review}</blockquote>
              <p>- {review.name}</p>
                <img className="avatar-image" src={review.image} alt={review.name} />
            </div>
            
              
            ))}
          </div>
        </section>

        <section className="why-choose-us-section">
          <h2>Why Choose Us?</h2>
          <div className="why-choose-us-grid">
            {[
              {
                title: "👩‍🏫 Experienced Faculty",
                description:
                  "Learn from highly qualified and experienced educators.",
              },
              {
                title: "📚 Industry-Relevant Curriculum",
                description:
                  "Stay ahead with courses designed for the modern industry.",
              },
              {
                title: "💰 Affordable Fees",
                description: "Get quality education at an affordable cost.",
              },
              {
                title: "🏫 State-of-the-Art Campus",
                description:
                  "Enjoy a vibrant campus life with modern facilities.",
              },
            ].map((card, index, arr) => {
              const alignment =
                arr.length % 2 !== 0 && index === Math.floor(arr.length / 2)
                  ? "center"
                  : index % 4 === 0 || index % 4 === 1
                  ? "left"
                  : "right";

              return (
                <div
                  key={index}
                  className={`card ${alignment}`} // Add alignment
                  data-aos={
                    alignment === "left"
                      ? "fade-right"
                      : alignment === "right"
                      ? "fade-left"
                      : "zoom-in"
                  } // Animation based on alignment
                  data-aos-delay={index * 200} // Staggered delay
                >
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </HelmetProvider>
  );
};

export default Home;


