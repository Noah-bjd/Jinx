import { useState, useEffect } from 'react';
import '../styles/navigation.css';
export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navigation ${isScrolled ? 'navigation-scrolled' : ''}`}>
      <div className="navigation-container">
        <div className="navigation-brand">
          <div className="navigation-logo">
            <span>NB</span>
          </div>
          <span className="navigation-name">Noah-bjd</span>
        </div>
        
        <div className="navigation-links">
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <button 
          className="navigation-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <button className="navigation-resume">
          Resume
        </button>

        {isMobileMenuOpen && (
          <div className="navigation-mobile">
            <a href="#work">Work</a>
            <a href="#process">Process</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <button className="navigation-resume-mobile">
              Resume
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}