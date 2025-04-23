import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../../styles/pages/Home.css';

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      offset: 100, 
      easing: 'ease-in-out',
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
            <button className="cta-button">Explore Courses</button>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="highlights-section">
          {[
            { title: "📘 Courses Offered", description: "Explore a variety of undergraduate and postgraduate programs." },
            { title: "🎓 50+ Years of Legacy", description: "Providing quality education since 1970." },
            { title: "🏅 20,000+ Alumni", description: "Join a network of successful professionals worldwide." },
            { title: "📍 Prime Location", description: "Located in the heart of Faridabad with excellent connectivity." }
          ].map((card, index, arr) => {
            const alignment =
              arr.length % 2 !== 0 && index === Math.floor(arr.length / 2)
                ? "center" // Center card for odd number of cards
                : index % 4 === 0 || index % 4 === 1
                ? "left" // Cards 1, 2, 5, 6, etc.
                : "right"; // Cards 3, 4, 7, 8, etc.

            return (
              <div
                key={index}
                className={`card ${alignment}`} // Add alignment class
                data-aos={alignment === "left" ? "fade-right" : alignment === "right" ? "fade-left" : "zoom-in"} // Animation based on alignment
                data-aos-delay={index * 200} // Staggered delay
              >
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            );
          })}
        </section>

        {/* Why Choose Us Section */}
        <section className="why-choose-us-section">
          <h2>Why Choose Us?</h2>
          <div className="why-choose-us-grid">
            {[
              { title: "👩‍🏫 Experienced Faculty", description: "Learn from highly qualified and experienced educators." },
              { title: "📚 Industry-Relevant Curriculum", description: "Stay ahead with courses designed for the modern industry." },
              { title: "💰 Affordable Fees", description: "Get quality education at an affordable cost." },
              { title: "🏫 State-of-the-Art Campus", description: "Enjoy a vibrant campus life with modern facilities." },
            ].map((card, index ,arr) =>{
              const alignment =
              arr.length % 2 !== 0 && index === Math.floor(arr.length / 2)
                ? "center" // Center card for odd number of cards
                : index % 4 === 0 || index % 4 === 1
                ? "left" // Cards 1, 2, 5, 6, etc.
                : "right"; // Cards 3, 4, 7, 8, etc.

            return (
              <div
                key={index}
                className={`card ${alignment}`} // Add alignment class
                data-aos={alignment === "left" ? "fade-right" : alignment === "right" ? "fade-left" : "zoom-in"} // Animation based on alignment
                data-aos-delay={index * 200} // Staggered delay
              >
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            
            );})}
          </div>
        </section>
      </main>
    </HelmetProvider>
  );
};

export default Home;