import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Crown, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simplified main navigation (Hick's Law - max 5 items)
  const mainMenuItems = [
    { name: 'Home', href: '/' },
    { name: 'Luxury Suites', href: '/rooms' },
    { name: 'Amenities', href: '/facilities' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  // Secondary items moved to "More" menu
  const secondaryMenuItems = [
    { name: 'Attractions', href: '/attractions' },
    { name: 'Policies', href: '#policies' },
    { name: 'FAQ', href: '#faq' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    if (href.startsWith('#')) return false;
    return location.pathname.startsWith(href);
  };

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setShowMore(false);
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
                  isScrolled ? 'text-orange-600' : 'text-orange-400'
                }`} />
                <div className="absolute inset-0 animate-pulse">
                  <Crown className={`w-8 h-8 transition-colors duration-300 ${
                    isScrolled ? 'text-orange-400' : 'text-orange-300'
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
                  isScrolled ? 'text-orange-600' : 'text-orange-400'
                }`}>
                  PREMIUM HOSPITALITY
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Menu - Simplified */}
          <div className="hidden lg:flex items-center space-x-6">
            {mainMenuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`font-medium transition-all duration-300 relative group py-2 ${
                  isActive(item.href) 
                    ? (isScrolled ? 'text-orange-600' : 'text-orange-400') 
                    : (isScrolled ? 'text-slate-700 hover:text-orange-600' : 'text-white/90 hover:text-orange-400')
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 ${
                  isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
            
            {/* More Menu */}
            <div className="relative">
              <button
                onClick={() => setShowMore(!showMore)}
                className={`font-medium transition-all duration-300 relative group py-2 flex items-center gap-1 ${
                  isScrolled ? 'text-slate-700 hover:text-orange-600' : 'text-white/90 hover:text-orange-400'
                }`}
              >
                More
                <ChevronDown size={16} className={`transition-transform duration-200 ${showMore ? 'rotate-180' : ''}`} />
              </button>
              
              {showMore && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl border border-slate-200 py-2 w-48 z-50">
                  {secondaryMenuItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className="block w-full text-left px-4 py-2 text-slate-700 hover:text-orange-600 hover:bg-orange-50 transition-colors duration-200"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="tel:+919876543210"
              className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Phone size={18} className="relative z-10" />
              <span className="relative z-10">Book Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-all duration-300 ${
                isScrolled 
                  ? 'text-slate-700 hover:text-orange-600 hover:bg-orange-50' 
                  : 'text-white hover:text-orange-400 hover:bg-white/10'
              }`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Simplified */}
        {isOpen && (
          <div className="lg:hidden absolute top-24 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-xl">
            <div className="px-6 py-8 space-y-6">
              {[...mainMenuItems, ...secondaryMenuItems].map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`block w-full text-left font-medium py-3 transition-all duration-300 border-b border-slate-100 last:border-b-0 relative group ${
                    isActive(item.href) ? 'text-orange-600' : 'text-slate-700 hover:text-orange-600'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className={`absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-orange-500 to-orange-600 transition-transform duration-300 origin-top ${
                    isActive(item.href) ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-100'
                  }`}></div>
                </button>
              ))}
              <a
                href="tel:+919876543210"
                className="block bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                onClick={() => setIsOpen(false)}
              >
                <Phone size={18} className="inline mr-3" />
                Book Your Stay
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
