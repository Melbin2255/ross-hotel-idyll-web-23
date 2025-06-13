
import React, { useState, useEffect } from 'react';
import { Crown, Sparkles } from 'lucide-react';

const TextSettlingTarget = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isSettled, setIsSettled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // The text settles when user has scrolled past the hero section
      setIsSettled(currentScrollY > 1000);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`text-center mb-16 transition-all duration-1000 ${
      isSettled ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
    }`}>
      {isSettled && (
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-amber-50 to-emerald-50 rounded-full border border-amber-200/50">
            <Crown className="text-amber-600 animate-pulse" size={20} />
            <span className="text-amber-800 font-medium tracking-wide text-sm">YOUR LUXURY AWAITS</span>
            <Sparkles className="text-amber-600 animate-pulse" size={20} />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-800 via-emerald-800 to-slate-800 bg-clip-text text-transparent">
              Experience Premium
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 bg-clip-text text-transparent">
              Hospitality
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Where every moment is crafted with <span className="text-emerald-700 font-medium">exceptional care</span> and 
            <span className="text-amber-700 font-medium"> timeless elegance</span> meets the pristine beauty of Kerala's hill country.
          </p>
        </div>
      )}
    </div>
  );
};

export default TextSettlingTarget;
