
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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

  // Page transition variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen relative"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      {/* Cinematic Intro */}
      <CinematicIntro 
        isVisible={showIntro} 
        onComplete={handleIntroComplete} 
      />
      
      {/* Navigation - only show after intro */}
      {!showIntro && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Navigation />
        </motion.div>
      )}
      
      <div ref={heroRef}>
        <EnhancedHeroSection showContent={showHeroContent} />
      </div>
      
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <QuickLinksSection />
      </motion.div>
      
      <div ref={roomsRef}>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <RoomsSection showSettledText={isSettled} />
        </motion.div>
      </div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <AttractionsSection />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <ContactSection />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Footer />
      </motion.div>
    </motion.div>
  );
};

export default Index;
