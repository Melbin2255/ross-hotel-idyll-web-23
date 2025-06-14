import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Crown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Luxury Suites', href: '/rooms' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Attractions', href: '/attractions' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    if (href.startsWith('#')) return false; // Handle anchor links differently
    return location.pathname.startsWith(href);
  };

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('#')) {
      // Handle anchor links for homepage sections
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete, then scroll to section
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(href);
      // Smooth scroll will be handled by the hook in App.tsx
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-lg shadow-slate-900/5' 
        : 'bg-white/10 backdrop-blur-sm border-b border-white/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Premium Logo */}
          <Link to="/" className="flex-shrink-0 group">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Crown className={`w-8 h-8 transition-colors duration-300 ${
                  isScrolled ? 'text-amber-600' : 'text-amber-400'
                }`} />
                <div className="absolute inset-0 animate-pulse">
                  <Crown className={`w-8 h-8 transition-colors duration-300 ${
                    isScrolled ? 'text-amber-400' : 'text-amber-300'
                  } opacity-50`} />
                </div>
              </div>
              <div>
                <h1 className={`text-2xl font-serif font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-slate-800' : 'text-white'
                }`}>
                  RJ Ross Hotel
                </h1>
                <p className={`text-xs font-medium tracking-wider transition-colors duration-300 ${
                  isScrolled ? 'text-amber-600' : 'text-amber-400'
                }`}>
                  PREMIUM HOSPITALITY
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`font-medium transition-all duration-300 relative group py-2 ${
                  isActive(item.href) 
                    ? (isScrolled ? 'text-amber-600' : 'text-amber-400') 
                    : (isScrolled ? 'text-slate-700 hover:text-amber-600' : 'text-white/90 hover:text-amber-400')
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-300 ${
                  isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 opacity-50 transition-all duration-500 group-hover:w-full delay-100"></span>
              </button>
            ))}
            <a
              href="tel:+919876543210"
              className="relative bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Phone size={18} className="relative z-10" />
              <span className="relative z-10">Reserve Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-all duration-300 ${
                isScrolled 
                  ? 'text-slate-700 hover:text-amber-600 hover:bg-amber-50' 
                  : 'text-white hover:text-amber-400 hover:bg-white/10'
              }`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Premium Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-24 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-xl">
            <div className="px-6 py-8 space-y-6">
              {menuItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`block w-full text-left font-medium py-3 transition-all duration-300 border-b border-slate-100 last:border-b-0 relative group ${
                    isActive(item.href) ? 'text-amber-600' : 'text-slate-700 hover:text-amber-600'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className={`absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-amber-500 to-amber-600 transition-transform duration-300 origin-top ${
                    isActive(item.href) ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-100'
                  }`}></div>
                </button>
              ))}
              <a
                href="tel:+919876543210"
                className="block bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white px-8 py-4 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                onClick={() => setIsOpen(false)}
              >
                <Phone size={18} className="inline mr-3" />
                Reserve Your Stay
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
