import React from 'react';
import { Wifi, Users, Camera, Phone, Star, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SettledText from './SettledText';
import RoomCard from './RoomCard';
import SocialProofBanner from './SocialProofBanner';

interface RoomsSectionProps {
  showSettledText?: boolean;
}

const RoomsSection = ({ showSettledText = false }: RoomsSectionProps) => {
  const navigate = useNavigate();

  const rooms = [
    {
      id: 'premium-suite-ac',
      name: "Premium Suite A/C",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
      price: "₹4,500",
      sleeps: 4,
      features: ["King Size Bed", "Private Balcony", "Mountain View", "Premium Amenities"],
      amenities: ["Air Conditioning", "Free WiFi", "Room Service", "TV", "Mini Bar", "Safe"]
    },
    {
      id: 'deluxe-ac',
      name: "Deluxe A/C Room",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
      price: "₹3,200",
      sleeps: 3,
      features: ["Queen Size Bed", "Modern Bathroom", "Garden View", "Work Desk"],
      amenities: ["Air Conditioning", "Free WiFi", "Room Service", "TV", "Coffee Maker"]
    },
    {
      id: 'standard-ac',
      name: "Family Suite",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      price: "₹2,800",
      sleeps: 5,
      features: ["Multiple Beds", "Spacious Layout", "Family Friendly", "City View"],
      amenities: ["Air Conditioning", "Free WiFi", "Room Service", "TV"]
    }
  ];

  const handleViewAllRooms = () => {
    navigate('/rooms');
  };

  return (
    <section id="rooms" className="py-24 bg-gradient-to-b from-slate-50 via-white to-emerald-50/30 relative overflow-hidden">
      {/* Background Elements with warm colors */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Settled Text */}
        {showSettledText && (
          <SettledText text="Experience Tranquility" isVisible={showSettledText} />
        )}

        {/* Enhanced Section Header with storytelling */}
        {!showSettledText && (
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-orange-50 to-emerald-50 rounded-full border border-orange-200/50">
              <Sparkles className="text-orange-600" size={20} />
              <span className="text-orange-800 font-medium tracking-wide text-sm">HANDCRAFTED EXPERIENCES</span>
              <Sparkles className="text-orange-600" size={20} />
            </div>
            
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8">
              <span className="bg-gradient-to-r from-slate-800 via-orange-800 to-slate-800 bg-clip-text text-transparent">
                Luxury Suites
              </span>
            </h2>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-orange-600 to-orange-700"></div>
              <Star className="text-orange-600" size={24} />
              <div className="w-16 h-[2px] bg-gradient-to-l from-transparent via-orange-600 to-orange-700"></div>
            </div>
            
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light mb-8">
              Discover our <span className="text-orange-700 font-medium">meticulously crafted accommodations</span>, each offering an exquisite blend 
              of <span className="text-emerald-700 font-medium">timeless luxury</span>, contemporary comfort, and breathtaking views of Kerala's pristine hill country.
            </p>

            {/* Social Proof Integration */}
            <div className="max-w-lg mx-auto">
              <SocialProofBanner />
            </div>
          </div>
        )}

        {/* Premium Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {rooms.map((room, index) => (
            <RoomCard key={room.id} room={room} index={index} />
          ))}
        </div>

        {/* View All Rooms Button */}
        <div className="text-center mt-16">
          <button 
            onClick={handleViewAllRooms}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <span>View All Suites</span>
            <Camera size={20} />
          </button>
        </div>

        {/* Enhanced Bottom CTA with warm colors */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-slate-800 via-orange-900 to-slate-800 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 via-transparent to-emerald-600/10"></div>
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
                className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 transform hover:scale-105 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
