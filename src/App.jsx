import { useState, useEffect } from 'react';
import ContactPopup from './components/ContactPopup';
import StaticForm from './components/StaticForm';
import heroImage1 from './assets/francesca-tosolini-tHkJAMcO3QE-unsplash.jpg';
import heroImage2 from './assets/jason-dent-w3eFhqXjkZE-unsplash.jpg';
import heroImage3 from './assets/dillon-kydd-2keCPb73aQY-unsplash.jpg';
import aboutImage from './assets/brian-babb-XbwHrt87mQ0-unsplash.jpg';
import './App.css';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState('Get in Touch');
  const [currentSlide, setCurrentSlide] = useState(0);
  const PHONE_NUMBER = '+917400064213';

  const heroImages = [heroImage1, heroImage2, heroImage3];

  // Auto-open popup on page load/refresh
  useEffect(() => {
    // Small delay to ensure smooth page load
    const timer = setTimeout(() => {
      setPopupTitle('Welcome! Get in Touch');
      setIsPopupOpen(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleInteraction = (title = 'Get in Touch') => {
    setPopupTitle(title);
    setIsPopupOpen(true);
  };

  const handleScheduleVisit = () => {
    setPopupTitle('Schedule Visit');
    setIsPopupOpen(true);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  // Auto-play slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);


  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <div className="logo">SHOWSTOPPER </div>
          <nav className="nav">
            <a href="#highlights" onClick={(e) => { e.preventDefault(); handleInteraction('View Highlights'); }}>Highlights</a>
            <a href="#pricing" onClick={(e) => { e.preventDefault(); handleInteraction('View Pricing'); }}>Pricing</a>
            <a href="#amenities" onClick={(e) => { e.preventDefault(); handleInteraction('View Amenities'); }}>Amenities</a>
            <a href="#location" onClick={(e) => { e.preventDefault(); handleInteraction('View Location'); }}>Location</a>
            <button className="nav-brochure-btn" onClick={() => handleInteraction('Download Brochure')}>
              <span className="btn-icon">📥</span>
              Brochure
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-slideshow">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            ))}
          </div>
          <button className="hero-nav-btn hero-nav-left" onClick={prevSlide} aria-label="Previous slide">
            ‹
          </button>
          <button className="hero-nav-btn hero-nav-right" onClick={nextSlide} aria-label="Next slide">
            ›
          </button>
          <div className="hero-content">
            <div className="hero-info-panel">
              <div className="coming-soon-banner">Coming Soon</div>
              <div className="hero-title-section">
                <h1 className="hero-title">NEW LAUNCH KHARGHAR</h1>
                <p className="hero-developer">By A Grade Developer</p>
                <p className="hero-location">At Sector 5A, Kharghar-Belpada. Navi Mumbai</p>
              </div>
              
              <div className="connectivity-section">
                <div className="connectivity-item">
                  <span className="connectivity-icon">◆</span>
                  <span>2 Mins* Rly Stn</span>
                </div>
                <div className="connectivity-item">
                  <span className="connectivity-icon">◆</span>
                  <span>2 Mins* Metro Stn</span>
                </div>
                <div className="connectivity-item">
                  <span className="connectivity-icon">◆</span>
                  <span>2 Mins Sion Panvel Hwy</span>
                </div>
                <div className="connectivity-item">
                  <span className="connectivity-icon">◆</span>
                  <span>20 Mins* Navi Mumbai Int'l Airport</span>
                </div>
              </div>
              
              <div className="pricing-section">
                <p className="apartment-types">Luxury 2, 3 & 4 BHK Homes Start</p>
                <p className="hero-price">₹2.20 Cr* Onwards</p>
              </div>
              
              <button className="btn-express-interest" onClick={() => handleInteraction('Express Your Interest')}>
                Express Your Interest
              </button>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="container">
            <div className="about-content">
              <div className="about-text">
                <h2 className="about-title">About New Launch Kharghar</h2>
                <p className="about-description">
                  This new residential launch at Kharghar–Belpada introduces thoughtfully planned 2, 3 & 4 BHK homes in one of Navi Mumbai's fastest-evolving corridors. Designed to offer a balance of space, comfort, and modern aesthetics, the residences are set within a green, well-organised environment that feels calm without cutting you off from the city. Landscaped open areas and eco-sensitive planning add to the sense of everyday ease, making it a practical choice for contemporary urban living.
                </p>
                <a href="#read-more" className="read-more-link" onClick={(e) => { e.preventDefault(); handleInteraction('Read More'); }}>
                  Read more <span className="chevron">▼</span>
                </a>
                <button className="btn-express-about" onClick={() => handleInteraction('Express Your Interest')}>
                  Express Your Interest
                </button>
              </div>
              <div className="about-image">
                <img src={aboutImage} alt="Modern apartment interior and balcony" />
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <h2 className="highlights-title">Project Highlights</h2>
            <div className="highlights-grid">
              <div className="highlights-column">
                <div className="highlight-item">
                  <span className="checkmark">✓</span>
                  <span>Spacious 2, 3 & 4 BHK homes with smart layouts</span>
                </div>
                <div className="highlight-item">
                  <span className="checkmark">✓</span>
                  <span>24/7 security with advanced surveillance systems</span>
                </div>
                <div className="highlight-item">
                  <span className="checkmark">✓</span>
                  <span>Close to reputed schools and healthcare facilities</span>
                </div>
                <div className="highlight-item">
                  <span className="checkmark">✓</span>
                  <span>Prime, well-connected location in Kharghar, Navi Mumbai</span>
                </div>
              </div>
              <div className="highlights-column">
                <div className="highlight-item">
                  <span className="checkmark">✓</span>
                  <span>Modern clubhouse and lifestyle-focused amenities</span>
                </div>
                <div className="highlight-item">
                  <span className="checkmark">✓</span>
                  <span>Strong road, rail, and upcoming metro connectivity</span>
                </div>
                <div className="highlight-item">
                  <span className="checkmark">✓</span>
                  <span>Developed by a trusted Grade-A real estate brand</span>
                </div>
                <div className="highlight-item">
                  <span className="checkmark">✓</span>
                  <span>Landscaped open spaces with eco-sensitive planning</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <h2>Ready to Make This Your Home?</h2>
            <p>Get in touch with us to learn more about our exclusive offers</p>
            <div className="cta-buttons">
              <button className="btn btn-primary" onClick={() => handleInteraction('Request Brochure')}>
                Request Brochure
              </button>
              <button className="btn btn-outline" onClick={() => handleInteraction('Express Interest')}>
                Express Interest
              </button>
            </div>
          </div>
        </section>

        <section className="quick-actions">
          <div className="container">
            <h2>Quick Actions</h2>
            <div className="action-grid">
              <button className="action-card" onClick={() => handleInteraction('Instant Call Back')}>
                <span className="action-icon">📞</span>
                <span>Instant Call Back</span>
              </button>
              <button className="action-card" onClick={() => handleInteraction('Free Site Visit')}>
                <span className="action-icon">🏢</span>
                <span>Free Site Visit</span>
              </button>
              <button className="action-card" onClick={() => handleInteraction('Best Price')}>
                <span className="action-icon">💰</span>
                <span>Best Price</span>
              </button>
              <button className="action-card" onClick={() => handleInteraction('Virtual Tour')}>
                <span className="action-icon">🎥</span>
                <span>360° Virtual Tour</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Your Brand. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); handleInteraction('Privacy Policy'); }}>Privacy Policy</a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); handleInteraction('Terms & Conditions'); }}>Terms & Conditions</a>
          </div>
        </div>
      </footer>

      <StaticForm onScheduleVisit={handleScheduleVisit} phoneNumber={PHONE_NUMBER} />

      <ContactPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)}
        title={popupTitle}
      />
    </div>
  );
}

export default App;
