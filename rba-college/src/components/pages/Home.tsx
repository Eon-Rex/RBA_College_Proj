import React, { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../../styles/pages/Home.css';

const Home: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            // Determine the animation direction dynamically
            if (target.dataset.direction === 'left') {
              target.classList.add('slide-in-left');
              target.classList.remove('slide-out-center-left');
            } else if (target.dataset.direction === 'right') {
              target.classList.add('slide-in-right');
              target.classList.remove('slide-out-center-right');
            }
          } else {
            // Add slide-out-to-center classes when the card is not visible
            if (target.dataset.direction === 'left') {
              target.classList.remove('slide-in-left');
              target.classList.add('slide-out-center-left');
            } else if (target.dataset.direction === 'right') {
              target.classList.remove('slide-in-right');
              target.classList.add('slide-out-center-right');
            }
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the card is visible
    );

    const cards = document.querySelectorAll('.card'); // Select all cards dynamically
    cards.forEach((card, index) => {
      // Assign a direction dynamically based on the card's position
      if (index % 2 === 0) {
        card.setAttribute('data-direction', 'left');
      } else {
        card.setAttribute('data-direction', 'right');
      }
      observer.observe(card);
    });

    return () => observer.disconnect();
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
            <button className="cta-button">Explore Courses</button>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="highlights-section">
          <div className="card">
            <h3>📘 Courses Offered</h3>
            <p>Explore a variety of undergraduate and postgraduate programs.</p>
          </div>
          <div className="card">
            <h3>🎓 50+ Years of Legacy</h3>
            <p>Providing quality education since 1970.</p>
          </div>
          <div className="card">
            <h3>🏅 20,000+ Alumni</h3>
            <p>Join a network of successful professionals worldwide.</p>
          </div>
          <div className="card">
            <h3>📍 Prime Location</h3>
            <p>Located in the heart of Faridabad with excellent connectivity.</p>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-choose-us-section">
          <h2>Why Choose Us?</h2>
          <div className="why-choose-us-grid">
            <div className="card">
              <h3>👩‍🏫 Experienced Faculty</h3>
              <p>Learn from highly qualified and experienced educators.</p>
            </div>
            <div className="card">
              <h3>📚 Industry-Relevant Curriculum</h3>
              <p>Stay ahead with courses designed for the modern industry.</p>
            </div>
            <div className="card">
              <h3>💰 Affordable Fees</h3>
              <p>Get quality education at an affordable cost.</p>
            </div>
            <div className="card">
              <h3>🏫 State-of-the-Art Campus</h3>
              <p>Enjoy a vibrant campus life with modern facilities.</p>
            </div>
          </div>
        </section>
      </main>
    </HelmetProvider>
  );
};

export default Home;