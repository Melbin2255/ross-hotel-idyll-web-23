
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import RoomCard from '../components/RoomCard';
import { Button } from '../components/ui/button';
import { Bed, Users, Wifi, Car, Coffee, Shield } from 'lucide-react';

const Rooms = () => {
  const roomTypes = [
    {
      id: 'premium-suite-ac',
      name: 'Premium Suite A/C',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80',
      price: '₹4,500',
      sleeps: 4,
      features: ['King Size Bed', 'Mountain View', 'Premium Amenities', 'Mini Bar'],
      amenities: ['Air Conditioning', 'Free WiFi', 'Room Service', 'TV']
    },
    {
      id: 'deluxe-ac',
      name: 'Deluxe A/C',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
      price: '₹3,200',
      sleeps: 3,
      features: ['Queen Size Bed', 'Garden View', 'Modern Comfort', 'Work Desk'],
      amenities: ['Air Conditioning', 'Free WiFi', 'Room Service', 'TV']
    },
    {
      id: 'standard-ac',
      name: 'Standard A/C',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
      price: '₹2,800',
      sleeps: 2,
      features: ['Double Bed', 'City View', 'Essential Comfort', 'Reading Area'],
      amenities: ['Air Conditioning', 'Free WiFi', 'Room Service', 'TV']
    },
    {
      id: 'premium-non-ac',
      name: 'Premium Non A/C',
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80',
      price: '₹2,200',
      sleeps: 3,
      features: ['Traditional Style', 'Natural Ventilation', 'Eco-Friendly', 'Peaceful'],
      amenities: ['Fan Cooling', 'Free WiFi', 'Room Service', 'TV']
    },
    {
      id: 'deluxe-non-ac',
      name: 'Deluxe Non A/C',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80',
      price: '₹1,800',
      sleeps: 2,
      features: ['Cozy Atmosphere', 'Natural Airflow', 'Budget Friendly', 'Clean'],
      amenities: ['Fan Cooling', 'Free WiFi', 'Room Service', 'TV']
    },
    {
      id: 'standard-non-ac',
      name: 'Standard Non A/C',
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
      price: '₹1,500',
      sleeps: 2,
      features: ['Simple Comfort', 'Fresh Air', 'Value for Money', 'Essential'],
      amenities: ['Fan Cooling', 'Free WiFi', 'Basic Service', 'TV']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-emerald-50 via-white to-amber-50">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-800 mb-6">
              Luxury <span className="text-emerald-700">Accommodations</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Choose from our carefully curated selection of premium rooms and suites, 
              each designed to provide the perfect blend of comfort, elegance, and tranquility.
            </p>
          </div>
        </div>
      </section>

      {/* Room Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roomTypes.map((room, index) => (
              <RoomCard key={room.id} room={room} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Overview */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-800 mb-6">
              Premium <span className="text-emerald-700">Amenities</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Every room comes equipped with modern amenities designed for your comfort and convenience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Wifi, name: 'High-Speed WiFi', desc: 'Complimentary internet access' },
              { icon: Coffee, name: 'Room Service', desc: '24/7 in-room dining' },
              { icon: Shield, name: 'Security', desc: 'CCTV monitored premises' },
              { icon: Car, name: 'Free Parking', desc: 'Ample parking space' },
              { icon: Bed, name: 'Premium Bedding', desc: 'Luxury linens and pillows' },
              { icon: Users, name: 'Concierge', desc: 'Personalized guest services' }
            ].map((amenity, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <amenity.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">{amenity.name}</h3>
                </div>
                <p className="text-slate-600">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rooms;
