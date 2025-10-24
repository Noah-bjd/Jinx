'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import HeroSection from './components/HeroSection';
import ProcessSection from './components/ProcessSection';
import ProjectsSection from './components/ProjectsSection';
import Preloader from './components/Preloader';
import Navigation from './components/Navigation';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SkillsSection from './components/Skills';
export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    // Simulate loading time (adjust as needed)
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Add class to body to trigger animations
      document.body.classList.add('hero-loaded');
    }, 3000); // Match this with your preloader duration

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Nbouljih" />
      </Head>
            
      <div className={`portfolio-container ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navigation />
        <main>
          <HeroSection />
          <SkillsSection />
          <ProcessSection />
          {/* <ProjectsSection /> */}
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}