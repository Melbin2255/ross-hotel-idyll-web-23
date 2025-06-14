import React, { useRef, useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import CinematicIntro from '../components/CinematicIntro';
import EnhancedHeroSection from '../components/EnhancedHeroSection';
import QuickLinksSection from '../components/QuickLinksSection';
import RoomsSection from '../components/RoomsSection';
import AttractionsSection from '../components/AttractionsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { useScrollTransition } from '../hooks/useScrollTransition';

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const roomsRef = useRef<HTMLDivElement>(null);
  const [heroHeight, setHeroHeight] = useState(0);
  const [roomsPosition, setRoomsPosition] = useState(0);
  
  // Cinematic intro state
  const [showIntro, setShowIntro] = useState(true);
  const [showHeroContent, setShowHeroContent] = useState(false);

  useEffect(() => {
    const updatePositions = () => {
      if (heroRef.current && roomsRef.current) {
        setHeroHeight(heroRef.current.offsetHeight);
        setRoomsPosition(roomsRef.current.offsetTop);
      }
    };

    updatePositions();
    window.addEventListener('resize', updatePositions);
    return () => window.removeEventListener('resize', updatePositions);
  }, []);

  const { isSettled } = useScrollTransition(
    heroHeight,
    roomsPosition + 150
  );

  const handleIntroComplete = () => {
    setShowIntro(false);
    // Small delay before showing hero content for smooth transition
    setTimeout(() => {
      setShowHeroContent(true);
    }, 300);
  };

  return (
    <div className="min-h-screen relative">
      {/* Cinematic Intro */}
      <CinematicIntro 
        isVisible={showIntro} 
        onComplete={handleIntroComplete} 
      />
      
      {/* Navigation - only show after intro */}
      {!showIntro && <Navigation />}
      
      <div ref={heroRef}>
        <EnhancedHeroSection showContent={showHeroContent} />
      </div>
      
      <QuickLinksSection />
      
      <div ref={roomsRef}>
        <RoomsSection showSettledText={isSettled} />
      </div>
      <AttractionsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
