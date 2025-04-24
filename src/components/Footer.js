// src/components/Footer.js
import React, { useState, useEffect } from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const [visitCount, setVisitCount] = useState(0);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    // Simulate visitor counter with localStorage
    const getVisitorCount = () => {
      let count = localStorage.getItem('visitorCount');
      
      if (!count) {
        count = Math.floor(Math.random() * 100) + 1000; // Start with a random base number
      } else {
        count = parseInt(count) + 1;
      }
      
      localStorage.setItem('visitorCount', count);
      return count;
    };
    
    setVisitCount(getVisitorCount());
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="visitor-counter">
          <p>Total Visitors: <span className="visitor-count">{visitCount.toLocaleString()}</span></p>
        </div>
        <div className="copyright">
          <p>&copy; {currentYear} Awadhesh Kumar. All rights reserved.</p>
        </div>
        <div className="footer-message">
          <p>Made with ❤️ by Awadhesh Kumar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;