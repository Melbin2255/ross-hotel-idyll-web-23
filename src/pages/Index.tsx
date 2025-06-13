import React, { useRef, useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import RoomsSection from '../components/RoomsSection';
import AttractionsSection from '../components/AttractionsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ScrollTransitionText from '../components/ScrollTransitionText';
import { useScrollTransition } from '../hooks/useScrollTransition';

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const roomsRef = useRef<HTMLDivElement>(null);
  const [heroHeight, setHeroHeight] = useState(0);
  const [roomsPosition, setRoomsPosition] = useState(0);

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

  const { scrollY, isSettled, startY, endY, shouldShow, progress } = useScrollTransition(
    heroHeight,
    roomsPosition + 150 // Target position within rooms section
  );

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <div ref={heroRef}>
        <HeroSection />
      </div>
      
      {/* Enhanced floating transition text */}
      {shouldShow && (
        <ScrollTransitionText
          text="Experience Tranquility"
          startY={startY}
          endY={endY}
          settled={isSettled}
          progress={progress}
          scrollY={scrollY}
        />
      )}
      
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
