
import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Users, Star, MapPin, Camera, Phone, ArrowRight } from 'lucide-react';

const QuickLinksSection = () => {
  const quickLinks = [
    {
      title: 'Luxury Accommodations',
      description: 'Discover our premium suites and rooms designed for ultimate comfort',
      icon: Bed,
      href: '/rooms',
      color: 'from-emerald-500 to-emerald-600',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Premium Facilities',
      description: 'Experience world-class amenities and services',
      icon: Users,
      href: '/facilities',
      color: 'from-amber-500 to-amber-600',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Explore Idukki',
      description: 'Discover the natural beauty and attractions nearby',
      icon: MapPin,
      href: '#attractions',
      color: 'from-blue-500 to-blue-600',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Gallery',
      description: 'Browse our collection of stunning property photos',
      icon: Camera,
      href: '#gallery',
      color: 'from-purple-500 to-purple-600',
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-amber-50 to-emerald-50 rounded-full border border-amber-200/50">
            <Star className="text-amber-600" size={20} />
            <span className="text-amber-800 font-medium tracking-wide text-sm">EXPLORE RJ ROSS HOTEL</span>
            <Star className="text-amber-600" size={20} />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8">
            <span className="bg-gradient-to-r from-slate-800 via-emerald-800 to-slate-800 bg-clip-text text-transparent">
              Your Premium Experience
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Discover everything that makes RJ Ross Hotel the perfect destination for your 
            <span className="text-emerald-700 font-medium"> luxury getaway</span> in Kerala's hill country.
          </p>
        </div>

        {/* Quick Links Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {quickLinks.map((link, index) => (
            <Link
              key={link.title}
              to={link.href.startsWith('#') ? `/${link.href}` : link.href}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-slate-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={link.image} 
                  alt={link.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon Overlay */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
                  <link.icon className="text-slate-800" size={20} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-slate-800 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                  {link.title}
                </h3>
                
                <p className="text-slate-600 mb-4 leading-relaxed font-light">
                  {link.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors duration-300">
                  <span>Explore</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-slate-800 via-emerald-900 to-slate-800 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 via-transparent to-emerald-600/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-serif font-bold text-white mb-6">
                Ready to Experience Luxury?
              </h3>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Contact our concierge team to plan your perfect stay in Kerala's pristine hill country
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20booking%20at%20RJ%20Ross%20Hotel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone size={20} />
                  <span>WhatsApp Us</span>
                </a>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone size={20} />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickLinksSection;
