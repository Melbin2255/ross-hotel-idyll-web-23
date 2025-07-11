
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useSmoothScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Smooth scroll to top when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);
};

export const smoothScrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};
