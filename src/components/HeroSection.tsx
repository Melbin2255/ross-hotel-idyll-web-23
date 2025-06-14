import React from 'react';
import { Star, Wifi, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import StorytellingHero from './StorytellingHero';
import PlanYourStayForm from './PlanYourStayForm';
import SocialProofBanner from './SocialProofBanner';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Premium Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-emerald-900/40 to-amber-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-7xl mx-auto">
        <div className="animate-fade-in">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <Star className="text-orange-400" size={18} />
            <span className="text-orange-100 font-medium tracking-wide text-sm">PREMIUM HOSPITALITY SINCE INCEPTION</span>
            <Star className="text-orange-400" size={18} />
          </div>
          
          {/* Storytelling Hero */}
          <StorytellingHero />
          
          {/* Premium Features */}
          <div className="flex flex-wrap justify-center gap-8 mb-16 mt-12">
            <div className="group flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105">
              <Star className="text-orange-400 group-hover:rotate-12 transition-transform duration-300" size={20} />
              <span className="text-white font-medium">Premium Luxury</span>
            </div>
            <div className="group flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105">
              <Wifi className="text-emerald-400 group-hover:pulse transition-transform duration-300" size={20} />
              <span className="text-white font-medium">Modern Amenities</span>
            </div>
          </div>
          
          {/* Primary CTA - Plan Your Stay Form */}
          <div className="max-w-md mx-auto mb-8">
            <PlanYourStayForm />
          </div>

          {/* Social Proof */}
          <div className="max-w-lg mx-auto mb-8">
            <SocialProofBanner />
          </div>
          
          {/* Secondary CTA */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/rooms"
              className="group relative bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center gap-3">
                Explore Our Suites
              </span>
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20booking%20at%20RJ%20Ross%20Hotel"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/10 backdrop-blur-md text-white px-10 py-4 rounded-2xl font-semibold text-lg border-2 border-white/30 overflow-hidden transition-all duration-500 hover:bg-white/20 hover:border-white/50 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center gap-3">
                <Phone size={20} />
                WhatsApp Concierge
              </span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Premium Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/70 text-sm font-light tracking-widest">DISCOVER MORE</span>
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center relative overflow-hidden">
            <div className="w-1 h-3 bg-gradient-to-b from-orange-400 to-transparent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
