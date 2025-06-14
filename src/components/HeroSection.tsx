
import React from 'react';
import { Phone } from 'lucide-react';

const HeroSection = () => {
  const handlePlanYourStay = () => {
    window.open('https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20plan%20my%20stay%20at%20RJ%20Ross%20Hotel', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Focused Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80')",
          }}
        ></div>
        {/* Enhanced overlay for visual focus - dimming edges */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-emerald-900/50 to-amber-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
        {/* Radial overlay to focus attention on center */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/10 to-black/40"></div>
      </div>
      
      {/* Content - Simplified for Hick's Law */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          
          {/* Single Clear Headline */}
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent">
              Luxury Awaits at
            </span>
            <span className="block text-amber-400 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent drop-shadow-2xl">
              RJ Ross Hotel
            </span>
          </h1>
          
          {/* Single Subhead */}
          <p className="text-2xl md:text-3xl text-gray-200 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            Experience <span className="text-amber-400 font-medium">unparalleled luxury</span> in Kerala's pristine hill stations
          </p>
          
          {/* Single Clear CTA - Action-Oriented Language */}
          <div className="flex justify-center">
            <button
              onClick={handlePlanYourStay}
              className="group relative bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white px-12 py-6 rounded-2xl font-bold text-xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/30 border-2 border-amber-400/30"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center gap-4">
                <Phone size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                Plan Your Stay
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse delay-100"></div>
                  <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse delay-200"></div>
                </div>
              </span>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400/20 to-amber-600/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>

          {/* Subtle reassurance text */}
          <p className="text-amber-200/80 text-sm mt-6 font-light">
            WhatsApp us directly • Instant response guaranteed
          </p>
        </div>
      </div>
      
      {/* Simplified Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce opacity-70">
          <span className="text-white/70 text-xs font-light tracking-widest">DISCOVER</span>
          <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center relative overflow-hidden">
            <div className="w-1 h-2 bg-gradient-to-b from-amber-400 to-transparent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
