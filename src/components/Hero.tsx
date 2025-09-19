import React from 'react';
import './../styles/hero.css';

interface HeroProps {
  isActive: boolean;
}

const Hero: React.FC<HeroProps> = ({ isActive }) => {
  return (
    <section className="hero">
      <div className={`logo-container ${isActive ? 'active' : 'inactive'}`}>
        <img src="/NB.svg" alt="NB Logo" className="logo" />
      </div>
      <h1 className={`${isActive ? 'active' : 'inactive'}`}>Bouljihad Nouhaila</h1>
      <h3 className={`${isActive ? 'active' : 'inactive'}`}>Junior Front End Developer</h3>
    </section>
  );
};

export default Hero;
