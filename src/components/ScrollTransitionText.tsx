
import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface ScrollTransitionTextProps {
  text: string;
  startY: number;
  endY: number;
  settled: boolean;
  progress: number;
  scrollY: number;
}

const ScrollTransitionText = ({ text, startY, endY, settled, progress, scrollY }: ScrollTransitionTextProps) => {
  const [currentScrollY, setCurrentScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setCurrentScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (settled && scrollY >= endY) {
    return null; // Hide floating text when settled
  }

  // Calculate smooth position based on scroll progress
  const baseY = window.innerHeight * 0.5; // Start at center of viewport
  const targetY = endY - startY; // Target position relative to start
  const currentY = baseY + (targetY * progress);

  // Calculate opacity and scale for premium transition
  const opacity = Math.min(Math.max((currentScrollY - startY + 100) / 200, 0), 1);
  const scale = 0.8 + (0.2 * progress); // Scale from 0.8 to 1.0
  const blur = Math.max(5 - (progress * 5), 0); // Reduce blur as it settles

  return (
    <div
      className="fixed left-1/2 transform -translate-x-1/2 z-50 pointer-events-none transition-all duration-300 ease-out"
      style={{
        top: `${currentY}px`,
        opacity: opacity,
        transform: `translateX(-50%) scale(${scale})`,
        filter: `blur(${blur}px)`,
      }}
    >
      <div className="relative">
        {/* Premium backdrop */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/30 to-white/20 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl"></div>
        
        {/* Premium content */}
        <div className="relative px-12 py-6 flex items-center gap-4">
          <Sparkles 
            className="text-amber-400 animate-pulse" 
            size={28}
            style={{ 
              filter: 'drop-shadow(0 0 10px rgba(251, 191, 36, 0.5))' 
            }} 
          />
          
          <span className="bg-gradient-to-r from-amber-600 via-emerald-700 to-amber-600 bg-clip-text text-transparent text-4xl md:text-6xl font-serif font-bold whitespace-nowrap tracking-wide">
            {text}
          </span>
          
          <Sparkles 
            className="text-amber-400 animate-pulse" 
            size={28}
            style={{ 
              filter: 'drop-shadow(0 0 10px rgba(251, 191, 36, 0.5))',
              animationDelay: '0.5s'
            }} 
          />
        </div>
        
        {/* Premium glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-emerald-400/20 to-amber-400/20 rounded-3xl blur-xl opacity-60"></div>
      </div>
    </div>
  );
};

export default ScrollTransitionText;
