
import React from 'react';
import { Wifi, Users, Camera, Phone, Star, Sparkles, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SettledText from './SettledText';
import RoomCard from './RoomCard';

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
      amenities: ["Air Conditioning", "Free WiFi", "Room Service", "TV", "Mini Bar", "Safe"],
      rating: 4.9,
      isPopular: true,
      testimonial: {
        text: "Absolutely stunning room with incredible mountain views. The luxury amenities made our anniversary perfect!",
        guest: "Priya S.",
        photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80"
      }
    },
    {
      id: 'deluxe-ac',
      name: "Deluxe A/C Room",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
      price: "₹3,200",
      sleeps: 3,
      features: ["Queen Size Bed", "Modern Bathroom", "Garden View", "Work Desk"],
      amenities: ["Air Conditioning", "Free WiFi", "Room Service", "TV", "Coffee Maker"],
      rating: 4.8,
      isPopular: false,
      testimonial: {
        text: "Perfect blend of comfort and elegance. The garden view was so peaceful and relaxing.",
        guest: "Rajesh M.",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
      }
    },
    {
      id: 'standard-ac',
      name: "Family Suite",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      price: "₹2,800",
      sleeps: 5,
      features: ["Multiple Beds", "Spacious Layout", "Family Friendly", "City View"],
      amenities: ["Air Conditioning", "Free WiFi", "Room Service", "TV"],
      rating: 4.7,
      isPopular: false,
      testimonial: {
        text: "Spacious room perfect for our family of four. Kids loved the extra space to play!",
        guest: "Meera K.",
        photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
      }
    }
  ];

  const handleViewAllRooms = () => {
    navigate('/rooms');
  };

  return (
    <section id="rooms" className="py-24 bg-gradient-to-b from-slate-50 via-white to-emerald-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Settled Text */}
        {showSettledText && (
          <SettledText text="Experience Tranquility" isVisible={showSettledText} />
        )}

        {/* Premium Section Header */}
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
            
            {/* Social Proof - Average Rating */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-amber-500" size={20} fill="currentColor" />
                ))}
              </div>
              <span className="text-2xl font-bold text-slate-800">4.8</span>
              <span className="text-slate-600">/5 Average Rating</span>
              <span className="text-sm text-slate-500">(2,847 reviews)</span>
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
            <RoomCard key={room.id} room={room} index={index} />
          ))}
        </div>

        {/* View All Rooms Button */}
        <div className="text-center mt-16">
          <button 
            onClick={handleViewAllRooms}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <span>View All Rooms</span>
            <Camera size={20} />
          </button>
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
