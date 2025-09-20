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

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Nbouljih" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {isLoading && <Preloader />}
      
      <div className={`portfolio-container ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navigation />
        <main>
          <HeroSection />
          <ProcessSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}