
import { useEffect, useState } from 'react';

export const useScrollTransition = (heroHeight: number, targetPosition: number) => {
  const [scrollY, setScrollY] = useState(0);
  const [isSettled, setIsSettled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Mark as settled when we reach the target position
      if (currentScrollY >= targetPosition) {
        setIsSettled(true);
      } else {
        setIsSettled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [targetPosition]);

  const startAnimation = heroHeight * 0.4; // Start animation at 40% scroll through hero
  const endAnimation = targetPosition - 50; // End 50px before target for smoother transition

  return {
    scrollY,
    isSettled,
    startY: startAnimation,
    endY: endAnimation,
    shouldShow: scrollY >= startAnimation && scrollY < targetPosition,
    progress: Math.min(Math.max((scrollY - startAnimation) / (endAnimation - startAnimation), 0), 1),
  };
};
