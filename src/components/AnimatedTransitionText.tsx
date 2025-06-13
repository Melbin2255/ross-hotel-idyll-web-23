
import React, { useState, useEffect } from 'react';
import { Crown } from 'lucide-react';

const AnimatedTransitionText = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Show the transitioning text when user starts scrolling
      setIsVisible(currentScrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate the transition progress (0 to 1)
  const progress = Math.min(Math.max((scrollY - 200) / 800, 0), 1);
  
  // Calculate position and styling based on scroll progress
  const translateY = -scrollY * 0.3; // Parallax effect
  const scale = 1 - progress * 0.2; // Slightly shrink as it moves
  const opacity = isVisible ? Math.max(1 - progress * 0.3, 0.7) : 0;

  return (
    <div 
      className={`fixed inset-x-0 z-30 pointer-events-none transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        transform: `translateY(${translateY + 50}px) scale(${scale})`,
        top: `${20 + progress * 60}vh`,
        opacity: opacity,
      }}
    >
      <div className="text-center">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="relative">
            <Crown className="w-6 h-6 text-amber-400" />
            <div className="absolute inset-0 animate-pulse">
              <Crown className="w-6 h-6 text-amber-300 opacity-50" />
            </div>
          </div>
          <span className="text-amber-100 font-medium tracking-wider text-sm bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
            PREMIUM HOSPITALITY
          </span>
          <div className="relative">
            <Crown className="w-6 h-6 text-amber-400" />
            <div className="absolute inset-0 animate-pulse">
              <Crown className="w-6 h-6 text-amber-300 opacity-50" />
            </div>
          </div>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-serif font-bold bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
          Welcome to
        </h2>
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-amber-400 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent drop-shadow-2xl">
          RJ Ross Hotel
        </h2>
      </div>
    </div>
  );
};

export default AnimatedTransitionText;
