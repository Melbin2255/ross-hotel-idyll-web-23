
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CinematicIntroProps {
  isVisible: boolean;
  onComplete: () => void;
}

const CinematicIntro: React.FC<CinematicIntroProps> = ({ isVisible, onComplete }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 1.2, ease: "easeInOut" }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        duration: 1.2, 
        ease: "easeInOut",
        delay: 0.3
      }
    },
    exit: { 
      opacity: 0, 
      scale: 1.1,
      y: -20,
      transition: { 
        duration: 1, 
        ease: "easeInOut" 
      }
    }
  };

  React.useEffect(() => {
    if (isVisible) {
      // Disable scrolling during intro
      document.body.style.overflow = 'hidden';
      
      // Complete animation after 4 seconds
      const timer = setTimeout(() => {
        onComplete();
      }, 4000);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Blurred background with hero image */}
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm scale-110"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80')",
              }}
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>

          {/* Intro Text */}
          <motion.div
            className="relative z-10 text-center text-white px-6"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Welcome to */}
            <motion.p 
              className="text-lg md:text-2xl font-light text-gray-300 mb-4 tracking-wide"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Welcome to
            </motion.p>
            
            {/* R J HOTEL */}
            <motion.h1 
              className="text-5xl md:text-8xl lg:text-9xl font-serif font-bold tracking-[0.2em] md:tracking-[0.3em]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 1.5, ease: "easeInOut" }}
            >
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                R J HOTEL
              </span>
            </motion.h1>

            {/* Subtle ambient effect */}
            <motion.div
              className="absolute -inset-10 bg-gradient-radial from-amber-500/10 via-transparent to-transparent blur-3xl"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 2 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CinematicIntro;
