'use client';
import { useState, useEffect } from 'react';
import '../styles/preloader.css';

export default function Preloader() {
  const words = [
    "Hello", "Bonjour", "Salam", "Ciao", "Olà", 
    "やあ", "Hallå", "Guten tag", "Hallo",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, delay: number}>>([]);
  const [isExiting, setIsExiting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 300);

    // Generate particles
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 3
    }));
    setParticles(newParticles);

    // Auto-hide after 3 seconds (adjust as needed)
    const exitTimer = setTimeout(() => {
      startExitAnimation();
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(exitTimer);
    };
  }, []);

  const startExitAnimation = () => {
    setIsExiting(true);
    
    // Wait for animation to complete before removing from DOM
    setTimeout(() => {
      setIsVisible(false);
    }, 1000); // Match this with CSS animation duration
  };

  if (!isVisible) return null;

  return (
    <div className={`preloader ${isExiting ? 'exiting' : ''}`}>
      {/* Background Grid */}
      <div className="preloader-grid"></div>

      {/* Animated Background Particles */}
      <div className="preloader-particles">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="preloader-particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      <div className="preloader-content">
        {/* Animated Text */}
        <h2 className="preloader-text">
          <span className="preloader-word">{words[currentWordIndex]}</span>
        </h2>

        {/* Futuristic Loading Dots */}
        <div className="preloader-dots">
          <div className="preloader-dot">
            <div className="dot-glow"></div>
          </div>
          <div className="preloader-dot">
            <div className="dot-glow"></div>
          </div>
          <div className="preloader-dot">
            <div className="dot-glow"></div>
          </div>
        </div>

        {/* Loading Progress */}
        <div className="preloader-progress">
          <div className="preloader-progress-bar">
            <div className="preloader-progress-fill"></div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="preloader-floating">
          <div className="floating-orb orb-1"></div>
          <div className="floating-orb orb-2"></div>
          <div className="floating-orb orb-3"></div>
        </div>
      </div>
    </div>
  );
}