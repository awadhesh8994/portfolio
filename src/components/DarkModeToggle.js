// src/components/DarkModeToggle.js
import React from 'react';
import '../styles/DarkModeToggle.css';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="dark-mode-toggle">
      <button 
        className={`toggle-btn ${darkMode ? 'dark' : 'light'}`} 
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
      >
        <div className="toggle-track">
          <div className="toggle-thumb"></div>
          <span className="toggle-icon light">☀️</span>
          <span className="toggle-icon dark">🌙</span>
        </div>
      </button>
    </div>
  );
};

export default DarkModeToggle;