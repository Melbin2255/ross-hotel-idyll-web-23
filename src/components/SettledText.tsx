
import React from 'react';
import { Sparkles } from 'lucide-react';

interface SettledTextProps {
  text: string;
  isVisible: boolean;
}

const SettledText = ({ text, isVisible }: SettledTextProps) => {
  return (
    <div 
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
      }`}
    >
      <div className="text-center mb-16">
        {/* Premium settled container */}
        <div className="relative inline-block">
          {/* Premium backdrop with enhanced styling */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-50/80 via-white/90 to-amber-50/80 backdrop-blur-sm rounded-3xl border-2 border-amber-200/70 shadow-2xl"></div>
          
          {/* Content */}
          <div className="relative px-12 py-8 flex items-center gap-4">
            <Sparkles 
              className="text-amber-600 animate-pulse" 
              size={32}
              style={{ 
                filter: 'drop-shadow(0 0 8px rgba(217, 119, 6, 0.4))' 
              }} 
            />
            
            <span className="bg-gradient-to-r from-amber-700 via-emerald-700 to-amber-700 bg-clip-text text-transparent text-4xl md:text-5xl font-serif font-bold tracking-wide">
              {text}
            </span>
            
            <Sparkles 
              className="text-amber-600 animate-pulse" 
              size={32}
              style={{ 
                filter: 'drop-shadow(0 0 8px rgba(217, 119, 6, 0.4))',
                animationDelay: '0.7s'
              }} 
            />
          </div>
          
          {/* Premium glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-300/30 via-emerald-300/20 to-amber-300/30 rounded-3xl blur-2xl opacity-50"></div>
        </div>
        
        {/* Enhanced subtitle */}
        <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-8 font-light leading-relaxed">
          Discover the perfect harmony of <span className="text-emerald-700 font-medium">luxury</span> and 
          <span className="text-amber-700 font-medium"> tranquility</span> in our premium accommodations
        </p>
      </div>
    </div>
  );
};

export default SettledText;
