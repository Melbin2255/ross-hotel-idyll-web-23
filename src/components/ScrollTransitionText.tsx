
import React, { useEffect, useState } from 'react';

interface ScrollTransitionTextProps {
  text: string;
  startY: number;
  endY: number;
  settled: boolean;
}

const ScrollTransitionText = ({ text, startY, endY, settled }: ScrollTransitionTextProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const progress = Math.min(Math.max((scrollY - startY) / (endY - startY), 0), 1);
  const currentY = startY + (endY - startY) * progress;

  if (settled && scrollY >= endY) {
    return null; // Hide floating text when settled
  }

  return (
    <div
      className="fixed left-1/2 transform -translate-x-1/2 z-50 pointer-events-none transition-all duration-300"
      style={{
        top: `${currentY}px`,
        opacity: scrollY < startY ? 0 : 1,
      }}
    >
      <div className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent text-4xl md:text-6xl font-serif font-bold text-center whitespace-nowrap px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
        {text}
      </div>
    </div>
  );
};

export default ScrollTransitionText;
