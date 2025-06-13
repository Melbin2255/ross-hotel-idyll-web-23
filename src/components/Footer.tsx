
import React from 'react';
import { Phone, MapPin, Wifi, Users, Star, Crown, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Premium Hotel Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Crown className="text-amber-400 w-8 h-8" />
              <div>
                <h3 className="text-3xl font-serif font-bold">
                  RJ Ross Hotel
                </h3>
                <p className="text-amber-400 text-sm font-medium tracking-wider">PREMIUM HOSPITALITY</p>
              </div>
            </div>
            
            <p className="text-slate-300 mb-8 leading-relaxed font-light text-lg">
              Experience <span className="text-amber-400 font-medium">unparalleled luxury hospitality</span> in the heart of Kerala's pristine hill country. 
              Located in Nedumkandam and Munnar, we offer the perfect symphony of 
              <span className="text-emerald-400 font-medium"> timeless elegance</span>, contemporary comfort, 
              and breathtaking natural splendor.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 group hover:bg-white/5 p-3 rounded-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-3 rounded-xl">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-medium">LOCATIONS</p>
                  <span className="text-slate-200 font-light">Nedumkandam & Munnar, Idukki District, Kerala</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group hover:bg-white/5 p-3 rounded-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-3 rounded-xl">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-medium">24/7 CONCIERGE</p>
                  <span className="text-slate-200 font-light">+91 98765 43210 | +91 87654 32109</span>
                </div>
              </div>

              <div className="flex items-center gap-4 group hover:bg-white/5 p-3 rounded-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-xl">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-medium">RESERVATIONS</p>
                  <span className="text-slate-200 font-light">reservations@rjrosshotel.com</span>
                </div>
              </div>
            </div>

            {/* Premium WhatsApp */}
            <div className="mt-8">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/25 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688"/>
                </svg>
                <span className="relative z-10">WhatsApp Concierge</span>
              </a>
            </div>
          </div>

          {/* Premium Quick Links */}
          <div>
            <h4 className="text-xl font-serif font-bold mb-8 flex items-center gap-2">
              <Star className="text-amber-400" size={20} />
              Experience
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'Luxury Suites', href: '#rooms' },
                { name: 'Premium Facilities', href: '#facilities' },
                { name: 'Curated Attractions', href: '#attractions' },
                { name: 'Exclusive Gallery', href: '#gallery' },
                { name: 'Concierge Services', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group text-slate-300 hover:text-amber-400 transition-all duration-300 flex items-center gap-3 py-2 hover:bg-white/5 px-3 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"></div>
                    <span className="font-light">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Premium Facilities & Contact */}
          <div>
            <h4 className="text-xl font-serif font-bold mb-8 flex items-center gap-2">
              <Crown className="text-emerald-400" size={20} />
              Premium Amenities
            </h4>
            <div className="space-y-4 mb-8">
              {[
                { icon: Users, name: 'Executive Conference Hall', color: 'text-blue-400' },
                { icon: Star, name: 'Luxury Party Lawn', color: 'text-green-400' },
                { icon: Wifi, name: 'High-Speed WiFi', color: 'text-purple-400' },
                { icon: Clock, name: '24/7 Travel Concierge', color: 'text-amber-400' }
              ].map((facility, index) => (
                <div key={index} className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-300 group p-2 hover:bg-white/5 rounded-lg">
                  <facility.icon className={`${facility.color} group-hover:scale-110 transition-transform duration-300`} size={18} />
                  <span className="text-sm font-light">{facility.name}</span>
                </div>
              ))}
            </div>

            {/* Awards/Recognition */}
            <div className="bg-gradient-to-r from-amber-500/10 to-emerald-500/10 p-6 rounded-2xl border border-amber-500/20">
              <h5 className="font-semibold text-amber-400 mb-4 flex items-center gap-2">
                <Crown size={18} />
                Recognition
              </h5>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-300">
                  <Star className="text-amber-400" size={16} />
                  <span className="text-sm font-light">Premium Hospitality Excellence</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Star className="text-amber-400" size={16} />
                  <span className="text-sm font-light">Kerala Tourism Award</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Bottom Bar */}
        <div className="border-t border-slate-700/50 mt-16 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <p className="text-slate-400 text-sm font-light">
                © {currentYear} RJ Ross Hotel. All rights reserved. Crafted with luxury and precision.
              </p>
            </div>
            <div className="flex items-center gap-8 text-sm text-slate-400">
              <a href="#" className="hover:text-amber-400 transition-colors duration-300 font-light">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-300 font-light">Terms of Service</a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-300 font-light">Cancellation Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
