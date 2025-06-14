
import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Crown } from 'lucide-react';
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

  // Simplified menu items - only four for better scan-ability
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Rooms', href: '/rooms' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    if (href.startsWith('#')) return false;
    return location.pathname.startsWith(href);
  };

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
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
    }
  };

  const handleChatNow = () => {
    window.open('https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20room%20availability', '_blank');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-lg shadow-slate-900/5' 
        : 'bg-white/10 backdrop-blur-sm border-b border-white/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-24'
        }`}>
          {/* Premium Logo */}
          <Link to="/" className="flex-shrink-0 group">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Crown className={`transition-all duration-300 ${
                  isScrolled 
                    ? 'w-6 h-6 text-amber-600' 
                    : 'w-8 h-8 text-amber-400'
                }`} />
                <div className="absolute inset-0 animate-pulse">
                  <Crown className={`transition-all duration-300 ${
                    isScrolled 
                      ? 'w-6 h-6 text-amber-400' 
                      : 'w-8 h-8 text-amber-300'
                  } opacity-50`} />
                </div>
              </div>
              <div>
                <h1 className={`font-serif font-bold transition-all duration-300 ${
                  isScrolled 
                    ? 'text-lg text-slate-800' 
                    : 'text-2xl text-white'
                }`}>
                  RJ Ross Hotel
                </h1>
                <p className={`font-medium tracking-wider transition-all duration-300 ${
                  isScrolled 
                    ? 'text-xs text-amber-600' 
                    : 'text-xs text-amber-400'
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
              </button>
            ))}
            
            {/* Prominent Chat Now Button */}
            <button
              onClick={handleChatNow}
              className={`relative bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 text-white font-semibold hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 overflow-hidden group ${
                isScrolled ? 'px-4 py-2 rounded-lg text-sm' : 'px-6 py-3 rounded-xl text-base'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <MessageCircle size={isScrolled ? 16 : 18} className="relative z-10" />
              <span className="relative z-10">Chat Now</span>
            </button>
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
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-xl">
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
              <button
                onClick={handleChatNow}
                className="block w-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 text-white px-6 py-4 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <MessageCircle size={18} className="inline mr-3" />
                Chat Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
