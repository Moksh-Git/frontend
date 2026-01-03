import { useState, useEffect } from 'react';
import ContactPopup from './components/ContactPopup';
import StaticForm from './components/StaticForm';
import heroImage from './assets/francesca-tosolini-tHkJAMcO3QE-unsplash.jpg';
import './App.css';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState('Get in Touch');
  const PHONE_NUMBER = '+917400064213';

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
          <div className="hero-background" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="hero-overlay"></div>
          </div>
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

        <section className="features">
          <div className="container">
            <h2>Project Highlights</h2>
            <div className="feature-grid">
              <div className="feature-card" onClick={() => handleInteraction('Learn More - Spacious Homes')}>
                <div className="feature-icon">🏠</div>
                <h3>Spacious Homes</h3>
                <p>2, 3 & 4 BHK homes with smart layouts</p>
              </div>
              <div className="feature-card" onClick={() => handleInteraction('Learn More - Modern Amenities')}>
                <div className="feature-icon">🏊</div>
                <h3>Modern Amenities</h3>
                <p>Clubhouse, fitness zones, and leisure spaces</p>
              </div>
              <div className="feature-card" onClick={() => handleInteraction('Learn More - Security')}>
                <div className="feature-icon">🔒</div>
                <h3>24/7 Security</h3>
                <p>Advanced surveillance systems</p>
              </div>
              <div className="feature-card" onClick={() => handleInteraction('Learn More - Connectivity')}>
                <div className="feature-icon">🚇</div>
                <h3>Great Connectivity</h3>
                <p>Close to metro, railway, and highways</p>
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
