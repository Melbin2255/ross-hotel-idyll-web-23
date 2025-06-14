import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Phone } from 'lucide-react';

interface EnhancedHeroSectionProps {
  showContent: boolean;
}

const EnhancedHeroSection: React.FC<EnhancedHeroSectionProps> = ({ showContent }) => {
  const handlePlanYourStay = () => {
    window.open('https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20plan%20my%20stay%20at%20RJ%20Ross%20Hotel', '_blank');
  };

  const contentVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 1.5, 
        ease: [0.43, 0.13, 0.23, 0.96],
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Ambient Effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-[center_top] md:bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        
        {/* Enhanced overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-emerald-900/50 to-amber-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/10 to-black/40" />
        
        {/* Floating ambient effects */}
        {showContent && (
          <>
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                x: [0, 50, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2],
                x: [0, -40, 0],
                y: [0, 40, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
          </>
        )}
      </div>
      
      {/* Content with Staggered Animation */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto pt-16 md:pt-0">
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate={showContent ? "visible" : "hidden"}
        >
          {/* Main Headline */}
          <motion.h1 
            className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-tight"
            variants={itemVariants}
          >
            <span className="block bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent">
              Luxury Awaits at
            </span>
            <span className="block text-amber-400 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent drop-shadow-2xl">
              RJ Ross Hotel
            </span>
          </motion.h1>
          
          {/* Subheading */}
          <motion.p 
            className="text-2xl md:text-3xl text-gray-200 mb-16 max-w-4xl mx-auto leading-relaxed font-light"
            variants={itemVariants}
          >
            Experience <span className="text-amber-400 font-medium">unparalleled luxury</span> in Kerala's pristine hill stations
          </motion.p>
          
          {/* CTA Button with Enhanced Animation */}
          <motion.div 
            className="flex justify-center"
            variants={itemVariants}
          >
            <motion.button
              onClick={handlePlanYourStay}
              className="group relative bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white px-12 py-6 rounded-2xl font-bold text-xl overflow-hidden transition-all duration-500 border-2 border-amber-400/30"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(245, 158, 11, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ boxShadow: "0 10px 30px -10px rgba(245, 158, 11, 0.2)" }}
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-4">
                <Phone size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                Plan Your Stay
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse delay-100" />
                  <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse delay-200" />
                </div>
              </span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400/20 to-amber-600/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>
          </motion.div>

          {/* Reassurance text */}
          <motion.p 
            className="text-amber-200/80 text-sm mt-6 font-light"
            variants={itemVariants}
          >
            WhatsApp us directly • Instant response guaranteed
          </motion.p>
        </motion.div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      {showContent && (
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-white/70 text-xs font-light tracking-widest">DISCOVER</span>
            <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center relative overflow-hidden">
              <div className="w-1 h-2 bg-gradient-to-b from-amber-400 to-transparent rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default EnhancedHeroSection;
