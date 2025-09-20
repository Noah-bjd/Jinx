'use client';
import './../styles/hero.css';
import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

export default function HeroSection() {
  return (
    <section id="hero" className="section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">
              Creative <span className="text-[#7B9AFE] text-[rem]">Font-end</span> Developer
            </h1>
            <p className="hero-description">
              I build immersive web experiences with cutting-edge technologies like React, Next.js, and 3D graphics.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">
                View Projects
              </button>
              <button className="btn-glass">
                Contact Me
              </button>
            </div>
          </div>
          
          <div className="hero-spline">
            <div className="spline-container">
              <Spline scene="/assets/scene.splinecode" />
            </div>
            
            {/* Floating objects */}
            <div className="floating-object floating-object-1"></div>
            <div className="floating-object floating-object-2"></div>
            <div className="floating-object floating-object-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
}