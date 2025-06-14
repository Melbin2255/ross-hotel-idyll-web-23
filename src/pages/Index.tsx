import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import RoomsSection from '../components/RoomsSection';
import Footer from '../components/Footer';
import AttractionsSection from '../components/AttractionsSection';
import ContactSection from '../components/ContactSection';
import ScrollTransitionText from '../components/ScrollTransitionText';
import StorytellingHero from '../components/StorytellingHero';
import TrustSignals from '../components/TrustSignals';

const Index = () => {
  const [showSettledText, setShowSettledText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSettledText(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      
      {/* Our Story Section with warm color psychology */}
      <section className="py-24 bg-gradient-to-br from-orange-50 via-white to-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 via-transparent to-emerald-600/10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <StorytellingHero showFullStory={true} />
        </div>
      </section>

      {/* Scroll Transition Text */}
      <ScrollTransitionText />
      
      <RoomsSection showSettledText={showSettledText} />
      <AttractionsSection />
      
      {/* Trust Signals Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-800 mb-6">
              Trusted by <span className="text-orange-600">Travelers Worldwide</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our commitment to excellence is recognized by leading travel authorities and beloved by guests.
            </p>
          </div>
          <TrustSignals />
        </div>
      </section>
      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
