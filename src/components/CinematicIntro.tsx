import React, { useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface CinematicIntroProps {
  isVisible: boolean;
  onComplete: () => void;
}

const CinematicIntro: React.FC<CinematicIntroProps> = ({ isVisible, onComplete }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } // Faster initial fade
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }
    }
  };

  const textVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: 10
    },
    visible: { 
      opacity: 0.9,
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.43, 0.13, 0.23, 0.96],
        delay: 0.1 // Reduced delay
      }
    },
    exit: { 
      opacity: 0,
      scale: 1.05,
      y: -10,
      transition: { 
        duration: 0.4,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  const hotelNameVariants: Variants = {
    hidden: { 
      opacity: 1,
      scale: 1,
      y: 0
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0
    },
    exit: { 
      opacity: 0,
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.4,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  useEffect(() => {
    if (isVisible) {
      // Check if intro has been shown this session
      const hasShownIntro = sessionStorage.getItem('hasShownIntro');
      if (hasShownIntro) {
        onComplete();
        return;
      }

      // Disable scrolling during intro
      document.body.style.overflow = 'hidden';
      
      // Complete animation after 2 seconds
      const timer = setTimeout(() => {
        handleComplete();
      }, 2000);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isVisible, onComplete]);

  const handleComplete = () => {
    // Mark intro as shown in this session
    sessionStorage.setItem('hasShownIntro', 'true');
    onComplete();
  };

  const handleClick = () => {
    handleComplete();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={handleClick}
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
          >            {/* Welcome to */}
            <motion.p 
              className="text-lg md:text-2xl font-light text-gray-300/90 tracking-wider mb-3"
              variants={textVariants}
            >
              Welcome to
            </motion.p>
            
            {/* Hotel Name */}
            <motion.h1 
              className="text-6xl md:text-8xl font-serif font-bold leading-tight"
              variants={hotelNameVariants}
            >
              <span className="inline-block text-amber-400 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent drop-shadow-2xl">
                RJ Ross Hotel
              </span>
            </motion.h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CinematicIntro;
