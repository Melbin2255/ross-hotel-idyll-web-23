
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AnimatedTransitionText from '../components/AnimatedTransitionText';
import RoomsSection from '../components/RoomsSection';
import AttractionsSection from '../components/AttractionsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AnimatedTransitionText />
      <RoomsSection />
      <AttractionsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
