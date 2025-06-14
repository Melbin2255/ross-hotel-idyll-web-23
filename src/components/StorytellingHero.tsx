
import React from 'react';
import { MapPin, Heart } from 'lucide-react';

interface StorytellingHeroProps {
  showFullStory?: boolean;
}

const StorytellingHero: React.FC<StorytellingHeroProps> = ({ showFullStory = false }) => {
  return (
    <div className="relative">
      {/* Background with warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600/80 via-orange-500/60 to-transparent"></div>
      
      <div className="relative z-10 text-white">
        {showFullStory ? (
          // Full story version for dedicated section
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <Heart className="text-orange-300" size={18} />
              <span className="text-orange-100 font-medium tracking-wide text-sm">OUR STORY</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
              Born on the Banks of <span className="text-orange-300">Serenity</span>
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-white/90">
                <span className="text-orange-300 font-medium">Handcrafted experiences since our founding</span>, 
                RJ Ross Hotel emerged from a simple dream: to create a sanctuary where the pristine beauty 
                of Kerala's backwaters meets uncompromising hospitality.
              </p>
              
              <p className="text-white/80">
                Nestled in the heart of Nedumkandam, our story began with a family's passion for sharing 
                the untouched magic of Idukki with travelers seeking authentic luxury. Every corner of our 
                resort tells a tale of <span className="text-orange-300 font-medium">dedication, warmth, and genuine care</span>.
              </p>
              
              <p className="text-white/90">
                Today, we continue this legacy by offering not just accommodation, but 
                <span className="text-orange-300 font-medium"> memories that last a lifetime</span> - 
                where every sunrise over the mountains feels like a personal gift to our guests.
              </p>
            </div>
          </div>
        ) : (
          // Micro-narrative version for hero overlay
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-orange-300"></div>
              <MapPin className="text-orange-300" size={18} />
              <span className="text-orange-200 font-medium tracking-wider text-sm">YOUR BACKWATER HAVEN</span>
              <MapPin className="text-orange-300" size={18} />
              <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-orange-300"></div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              Welcome to Your <br />
              <span className="text-orange-300 bg-gradient-to-r from-orange-200 via-orange-300 to-orange-400 bg-clip-text text-transparent">
                Escape Story
              </span>
            </h1>
            
            <div className="max-w-3xl mx-auto space-y-3 text-lg">
              <p className="text-white/90 leading-relaxed">
                <span className="text-orange-300 font-medium">Born on the banks of tranquility</span>, 
                where Kerala's pristine backwaters whisper tales of serenity.
              </p>
              <p className="text-white/80">
                <span className="text-orange-300 font-medium">Handcrafted experiences since our inception</span> - 
                your personal sanctuary awaits in the heart of Idukki's untouched beauty.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StorytellingHero;
