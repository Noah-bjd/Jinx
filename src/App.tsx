import React, { useCallback, useLayoutEffect, useRef, useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CursorFollower from './components/Mouse';
import './styles/App.css';

const InfiniteScrollLoop: React.FC<{ children: React.ReactNode; setActiveSection: (section: string) => void }> = ({
  children,
  setActiveSection,
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number>(0);
  const surroundingBackup = 4;
  const backupHeight = height * surroundingBackup;

  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      const scroll = scrollRef.current.scrollTop;
      if (scroll < backupHeight || scroll >= backupHeight + height) {
        scrollRef.current.scrollTop = backupHeight + (scroll % height);
      }
    }
  }, [height, backupHeight]);

  const handleGlobalScroll = useCallback(
    (event: WheelEvent) => {
      if (scrollRef.current) {
        event.preventDefault();
        scrollRef.current.scrollTop += event.deltaY;
        handleScroll();
      }
    },
    [handleScroll]
  );

  useLayoutEffect(() => {
    if (contentRef.current) {
      const measuredHeight = contentRef.current.offsetHeight;
      setHeight(measuredHeight);

      requestAnimationFrame(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTop = 0;
        }
      });
    }
  }, []);

  useLayoutEffect(() => {
    window.addEventListener('wheel', handleGlobalScroll, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleGlobalScroll);
    };
  }, [handleGlobalScroll]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute('data-section') || '');
          }
        });
      },
      { threshold: 0.6 } 
    );

    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [setActiveSection]);

  return (
    <div className="infinite-scroll-loop-inner" ref={scrollRef} style={{ height: '100vh', overflowY: 'auto' }}>
      {Array(surroundingBackup)
        .fill(null)
        .map((_, index) => (
          <div key={`backup-top-${index}`}>{children}</div>
        ))}
      <div ref={contentRef}>{children}</div>
      {Array(surroundingBackup)
        .fill(null)
        .map((_, index) => (
          <div key={`backup-bottom-${index}`}>{children}</div>
        ))}
    </div>
  );
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  // Define background colors for each section
  const backgroundColors: Record<string, string> = {
    hero: '#E54849',
    about: '#DE9D36',
    projects: '#729974',
    contact: '#002D40',
  };
  

  return (
    
    <div className="container">
      <div className="left-side" style={{ backgroundColor: backgroundColors[activeSection] || '#fff' }}>
        <img src="https://via.placeholder.com/800x1200" alt="Fixed Background" className="fixed-image" />
      </div>

      <div className="right-side">
        <InfiniteScrollLoop setActiveSection={setActiveSection}>
          <div className={`section ${activeSection === 'hero' ? 'active-section' : 'inactive-section'}`} data-section="hero">
            <Hero isActive={activeSection === 'hero'} />
          </div>
          <div className={`section ${activeSection === 'about' ? 'active-section' : 'inactive-section'}`} data-section="about">
            <About isActive={activeSection === 'about'} />
          </div>
          <div className={`section ${activeSection === 'projects' ? 'active-section' : 'inactive-section'}`} data-section="projects">
            <Projects  isActive={activeSection === 'projects'}/>
          </div>
          <div className={`section ${activeSection === 'contact' ? 'active-section' : 'inactive-section'}`} data-section="contact">
            <Contact isActive={activeSection === 'contact'} />
          </div>
        </InfiniteScrollLoop>
      </div>
    </div>
  );
};

export default App;
