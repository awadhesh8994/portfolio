// src/components/Hero.js
import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  const handleDownloadResume = () => {
    window.open('https://drive.google.com/uc?export=download&id=1THdYD9ASB9V-p2ZIdwa6lgjXV2Ptx0g2', '_blank');
  };

  const handleScrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className={`container hero-content ${animated ? 'animated' : ''}`}>
        <div className="profile-image-container">
          <img src={profileImage} alt="Awadhesh Kumar" className="profile-image" />
        </div>
        <h1>Awadhesh Kumar</h1>
        <h2 className="tagline">CS Engineer | Web Developer | Tech Explorer</h2>
        <p className="intro">Hi, I'm Awadhesh Kumar — a Computer Science Engineer who loves building full-stack web apps and crafting clean, modern user experiences.</p>
        <div className="cta-buttons">
          <button className="btn btn-primary" onClick={handleDownloadResume}>
            📄 Download Resume
          </button>
          <button className="btn btn-secondary" onClick={handleScrollToContact}>
            ✉️ Let's Connect
          </button>
        </div>
      </div>
      <div className="hero-background"></div>
    </section>
  );
};

export default Hero;
