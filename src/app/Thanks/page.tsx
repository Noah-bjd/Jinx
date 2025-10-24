'use client';
import '../styles/thanks.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ThanksPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, delay: number}>>([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Generate particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 2
    }));
    setParticles(newParticles);

    // Improved cursor trail effect
    const handleMouseMove = (e: MouseEvent) => {
      // Remove existing trails to prevent buildup
      const existingTrails = document.querySelectorAll('.cursor-trail');
      if (existingTrails.length > 10) {
        existingTrails[0].remove();
      }

      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.left = e.clientX + 'px';
      trail.style.top = e.clientY + 'px';
      
      // Random size and color for variety
      const size = Math.random() * 6 + 2;
      trail.style.width = size + 'px';
      trail.style.height = size + 'px';
      
      document.body.appendChild(trail);
      
      setTimeout(() => {
        if (trail.parentNode) {
          trail.remove();
        }
      }, 800);
    };

    // Add mouse move listener
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      // Clean up any remaining trails
      document.querySelectorAll('.cursor-trail').forEach(trail => trail.remove());
    };
  }, []);

  return (
    <div className="thank-you-container">
      {/* Animated Background Particles */}
      <div className="particles-container">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
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

      {/* Floating GitHub Coriolis */}
      <div className="github-coriolis">
        <div className="coriolis-ring ring-1"></div>
        <div className="coriolis-ring ring-2"></div>
        <div className="coriolis-ring ring-3"></div>
        <div className="coriolis-center">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </div>
      </div>

      {/* Main Card */}
      <div className={`thank-you-card ${isVisible ? 'visible' : ''}`}>
        {/* Animated Border */}
        <div className="animated-border"></div>
        
        {/* Holographic Icon */}
        <div className="holographic-icon">
          <div className="icon-glow"></div>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </div>

        {/* Animated Title */}
        <h1 className="thank-you-title">
          <span className="title-text">Thank You!</span>
          <div className="title-underline"></div>
        </h1>

        {/* Typing Animation Message */}
        <p className="thank-you-message">
          Your message has been received. I'll get back to you within 24 hours!
        </p>

        {/* Status Indicator */}
        <div className="status-indicator">
          <div className="status-pulse"></div>
          <span className="status-text">Message Sent Successfully</span>
        </div>

        {/* Return Button - Use Link component */}
        <Link href="/" className="back-button">
          <span className="button-text">Return Home</span>
          <div className="button-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="button-glow"></div>
        </Link>

        {/* Floating Elements */}
        <div className="floating-elements">
          <div className="floating-element element-1">⚡</div>
          <div className="floating-element element-2">🚀</div>
          <div className="floating-element element-3">💫</div>
        </div>
      </div>

      {/* Background Grid */}
      <div className="background-grid z-[-1]"></div>

      {/* Mouse Follower */}
      <div className="mouse-follower"></div>
    </div>
  );
}