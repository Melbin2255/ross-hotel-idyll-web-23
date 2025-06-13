import React from 'react';
import { Wifi, Users, Camera, Phone, Star, MapPin, Sparkles } from 'lucide-react';
import SettledText from './SettledText';

interface RoomsSectionProps {
  showSettledText?: boolean;
}

const RoomsSection = ({ showSettledText = false }: RoomsSectionProps) => {
  const rooms = [
    {
      id: 1,
      name: "Premium Suite A/C",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
      capacity: "2-3 Guests",
      features: ["King Size Bed", "Private Balcony", "Mountain View", "Premium Amenities"],
      description: "Indulge in unparalleled luxury with our signature suite featuring panoramic views of Idukki's pristine landscapes and bespoke amenities.",
      badge: "Most Popular"
    },
    {
      id: 2,
      name: "Deluxe A/C Room",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
      capacity: "2 Guests",
      features: ["Queen Size Bed", "Modern Bathroom", "AC", "Free WiFi"],
      description: "Elegant sophistication meets contemporary comfort in our thoughtfully designed deluxe accommodations.",
      badge: "Best Value"
    },
    {
      id: 3,
      name: "Family Suite",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
      capacity: "4-5 Guests",
      features: ["Multiple Beds", "Spacious Layout", "Family Friendly", "Garden View"],
      description: "Spacious luxury designed for families, offering comfort, privacy, and unforgettable memories in Kerala's hill country.",
      badge: "Family Choice"
    }
  ];

  return (
    <section id="rooms" className="py-24 bg-gradient-to-b from-slate-50 via-white to-emerald-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Settled Text - appears when animation completes */}
        {showSettledText && (
          <SettledText text="Experience Tranquility" isVisible={showSettledText} />
        )}

        {/* Premium Section Header - only show when no settled text */}
        {!showSettledText && (
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-amber-50 to-emerald-50 rounded-full border border-amber-200/50">
              <Sparkles className="text-amber-600" size={20} />
              <span className="text-amber-800 font-medium tracking-wide text-sm">LUXURY ACCOMMODATIONS</span>
              <Sparkles className="text-amber-600" size={20} />
            </div>
            
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8">
              <span className="bg-gradient-to-r from-slate-800 via-emerald-800 to-slate-800 bg-clip-text text-transparent">
                Rooms & Suites
              </span>
            </h2>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-amber-600 to-amber-700"></div>
              <Star className="text-amber-600" size={24} />
              <div className="w-16 h-[2px] bg-gradient-to-l from-transparent via-amber-600 to-amber-700"></div>
            </div>
            
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
              Discover our <span className="text-emerald-700 font-medium">meticulously crafted accommodations</span>, each offering an exquisite blend 
              of <span className="text-amber-700 font-medium">timeless luxury</span>, contemporary comfort, and breathtaking views of Kerala's pristine hill country.
            </p>
          </div>
        )}

        {/* Premium Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {rooms.map((room, index) => (
            <div 
              key={room.id} 
              className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border border-slate-100 relative"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Premium Badge */}
              <div className="absolute top-6 left-6 z-20 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-semibold rounded-full shadow-lg">
                {room.badge}
              </div>

              {/* Room Image */}
              <div className="relative overflow-hidden h-72">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Capacity Badge */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-lg">
                  <span className="text-slate-800 font-semibold text-sm flex items-center gap-2">
                    <Users size={16} className="text-emerald-600" />
                    {room.capacity}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8">
                  <button className="bg-white text-emerald-800 px-6 py-3 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 hover:bg-emerald-50">
                    View Gallery
                  </button>
                </div>
              </div>

              {/* Premium Content */}
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4 group-hover:text-emerald-800 transition-colors duration-300">
                  {room.name}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed font-light">
                  {room.description}
                </p>

                {/* Premium Features */}
                <div className="mb-8">
                  <h4 className="font-semibold text-slate-700 mb-3 flex items-center gap-2">
                    <Sparkles size={16} className="text-amber-600" />
                    Exclusive Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {room.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="bg-gradient-to-r from-emerald-50 to-amber-50 text-slate-700 px-4 py-2 rounded-full text-sm font-medium border border-emerald-100 hover:border-emerald-200 transition-colors duration-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Premium Amenities */}
                <div className="flex items-center gap-6 mb-8 text-slate-500">
                  <div className="flex items-center gap-2 hover:text-emerald-600 transition-colors duration-300">
                    <Wifi size={18} />
                    <span className="text-sm font-medium">Premium WiFi</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-amber-600 transition-colors duration-300">
                    <Camera size={18} />
                    <span className="text-sm font-medium">Scenic Views</span>
                  </div>
                </div>

                {/* Premium CTA Buttons */}
                <div className="flex gap-4">
                  <button className="flex-1 bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group">
                    <span className="relative z-10">Reserve Now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  <a
                    href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20the%20Premium%20Suite%20A/C"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-4 border-2 border-amber-500 text-amber-600 rounded-xl font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300 hover:shadow-lg flex items-center justify-center"
                  >
                    <Phone size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-slate-800 via-emerald-900 to-slate-800 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 via-transparent to-emerald-600/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-serif font-bold text-white mb-6">
                Experience Unmatched Luxury
              </h3>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Let our concierge team craft the perfect stay tailored to your preferences
              </p>
              <a
                href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20room%20availability%20and%20luxury%20packages"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 transform hover:scale-105 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Phone size={24} className="relative z-10" />
                <span className="relative z-10">Check Premium Availability</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
