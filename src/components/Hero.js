import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const [animated, setAnimated] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    setTimeout(() => setAnimated(true), 50);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const handleDownloadResume = () => {
    window.open(
      'https://drive.google.com/file/d/1THdYD9ASB9V-p2ZIdwa6lgjXV2Ptx0g2/view',
      '_blank'
    );
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'light' ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="5" strokeWidth="2"/>
            <line x1="12" y1="1" x2="12" y2="3" strokeWidth="2" strokeLinecap="round"/>
            <line x1="12" y1="21" x2="12" y2="23" strokeWidth="2" strokeLinecap="round"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" strokeWidth="2" strokeLinecap="round"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" strokeWidth="2" strokeLinecap="round"/>
            <line x1="1" y1="12" x2="3" y2="12" strokeWidth="2" strokeLinecap="round"/>
            <line x1="21" y1="12" x2="23" y2="12" strokeWidth="2" strokeLinecap="round"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" strokeWidth="2" strokeLinecap="round"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )}
      </button>

      <div className="hero-container">
        <div className={`hero-content ${animated ? 'hero-animated' : ''}`}>
          <div className="hero-left">
            <div className="profile-box">
              <div className="profile-glow"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop" 
                alt="Awadhesh Kumar" 
                className="profile-img" 
              />
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-label">
              <span className="label-icon">✦</span>
              <span>Full Stack Developer</span>
            </div>

            <h1 className="hero-name">
              I'm <span className="name-highlight">Awadhesh Kumar</span>
            </h1>

            <p className="hero-tagline">
              Building exceptional digital experiences with modern web technologies
            </p>

            <p className="hero-bio">
              Computer Science Engineer passionate about creating beautiful, 
              responsive web applications. I specialize in React, Node.js, and 
              modern frontend frameworks to bring ideas to life.
            </p>

            <div className="hero-features">
              <div className="feature-item">
                <div className="feature-icon">🚀</div>
                <div className="feature-text">
                  <strong>Fast Performance</strong>
                  <span>Optimized for speed</span>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎨</div>
                <div className="feature-text">
                  <strong>Beautiful Design</strong>
                  <span>Pixel-perfect UI</span>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📱</div>
                <div className="feature-text">
                  <strong>Responsive</strong>
                  <span>All devices supported</span>
                </div>
              </div>
            </div>

            <div className="hero-buttons">
              <button className="hero-btn hero-btn-primary" onClick={handleDownloadResume}>
                <span>View Resume</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="7 10 12 15 17 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="12" y1="15" x2="12" y2="3" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <button className="hero-btn hero-btn-secondary" onClick={handleScrollToContact}>
                <span>Let's Talk</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="hero-decoration hero-decoration-1"></div>
        <div className="hero-decoration hero-decoration-2"></div>
      </div>
    </section>
  );
};

export default Hero;