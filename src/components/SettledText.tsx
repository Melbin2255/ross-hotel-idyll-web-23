
import React from 'react';
import { Sparkles } from 'lucide-react';

interface SettledTextProps {
  text: string;
  isVisible: boolean;
}

const SettledText = ({ text, isVisible }: SettledTextProps) => {
  return (
    <div 
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
      }`}
    >
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-6 px-8 py-4 bg-gradient-to-r from-amber-50 via-white to-amber-50 rounded-full border-2 border-amber-200/70 shadow-xl">
          <Sparkles className="text-amber-600 animate-pulse" size={24} />
          <span className="bg-gradient-to-r from-amber-700 via-emerald-700 to-amber-700 bg-clip-text text-transparent text-3xl md:text-4xl font-serif font-bold tracking-wide">
            {text}
          </span>
          <Sparkles className="text-amber-600 animate-pulse" size={24} />
        </div>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Discover the perfect harmony of luxury and tranquility in our premium accommodations
        </p>
      </div>
    </div>
  );
};

export default SettledText;
