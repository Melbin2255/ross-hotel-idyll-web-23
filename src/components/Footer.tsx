
import React from 'react';
import { Phone, MapPin, Wifi, Users, Star } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-emerald-800 to-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-serif font-bold mb-4">
              RJ Ross Hotel
            </h3>
            <p className="text-emerald-100 mb-6 leading-relaxed">
              Experience premium luxury hospitality in the heart of Kerala's hill country. 
              Located in Nedumkandam and Munnar, we offer the perfect blend of comfort, 
              elegance, and breathtaking natural beauty.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="text-amber-400 flex-shrink-0" size={20} />
                <span className="text-emerald-100">Nedumkandam & Munnar, Idukki District, Kerala</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-amber-400 flex-shrink-0" size={20} />
                <span className="text-emerald-100">+91 98765 43210 | +91 87654 32109</span>
              </div>
            </div>

            {/* Social/WhatsApp */}
            <div className="mt-6">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-serif font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Rooms & Suites', href: '#rooms' },
                { name: 'Facilities', href: '#facilities' },
                { name: 'Attractions', href: '#attractions' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Contact Us', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-emerald-100 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-amber-400 rounded-full group-hover:w-2 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Facilities */}
          <div>
            <h4 className="text-xl font-serif font-bold mb-6">Our Facilities</h4>
            <div className="space-y-3">
              {[
                { icon: Users, name: 'Conference Hall' },
                { icon: Star, name: 'Party Lawn' },
                { icon: Wifi, name: 'Free WiFi' },
                { icon: Phone, name: 'Travel Desk' }
              ].map((facility, index) => (
                <div key={index} className="flex items-center gap-3 text-emerald-100">
                  <facility.icon className="text-amber-400" size={16} />
                  <span className="text-sm">{facility.name}</span>
                </div>
              ))}
            </div>

            {/* Awards/Recognition */}
            <div className="mt-8">
              <h5 className="font-semibold text-amber-400 mb-3">Recognition</h5>
              <div className="flex items-center gap-2 text-emerald-100">
                <Star className="text-amber-400" size={16} />
                <span className="text-sm">Premium Hospitality Award</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-emerald-200 text-sm">
              © {currentYear} RJ Ross Hotel. All rights reserved. Crafted with luxury and care.
            </p>
            <div className="flex items-center gap-6 text-sm text-emerald-200">
              <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Cancellation Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
