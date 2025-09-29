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

  const scrollToSection = (sectionId : any) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

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
          <a onClick={() => scrollToSection('hero')}>Work</a>
          <a onClick={() => scrollToSection('process')}>Process</a>
          <a onClick={() => scrollToSection('skills')}>Skills</a>
          <a onClick={() => scrollToSection('contact')}>Contact</a>
        </div>

        <div className="navigation-right">
          <a href="./resume/resume.pdf" download="Noah-Bouljihad-Resume.pdf" className="navigation-resume">
            Resume
          </a>
          
          <button 
            className={`navigation-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}></div>
        
        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-header">
            <span>Menu</span>
            <button className="mobile-close" onClick={() => setIsMobileMenuOpen(false)}>×</button>
          </div>
          
          <div className="mobile-menu-content">
            <a onClick={() => scrollToSection('hero')}>Work</a>
            <a onClick={() => scrollToSection('process')}>Process</a>
            <a onClick={() => scrollToSection('skills')}>Skills</a>
            <a onClick={() => scrollToSection('contact')}>Contact</a>
          </div>
          
          <div className="mobile-menu-footer">
            <a href="./resume/resume.pdf" download="Noah-Bouljihad-Resume.pdf" className="mobile-resume">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}