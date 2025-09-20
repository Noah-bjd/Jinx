import { useState, useEffect } from 'react';
import '../styles/preloader.css';
export default function Preloader() {
  const words = [
    "Hello", "Bonjour", "Salam", "Ciao", "Olà", 
    "やあ", "Hallå", "Guten tag", "Hallo",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="preloader">
      <div className="preloader-content">
        {/* <div className="preloader-logo">
          <div className="preloader-logo-inner">
            <span>NB</span>
          </div>
        </div> */}
        <h2 className="preloader-text">
          <span>{words[currentWordIndex]}</span>
        </h2>
        <div className="preloader-dots">
          <div className="preloader-dot"></div>
          <div className="preloader-dot"></div>
          <div className="preloader-dot"></div>
        </div>
      </div>
    </div>
  );
}