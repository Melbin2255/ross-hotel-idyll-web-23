import React from 'react';
import { Wifi, Users, Camera, Phone } from 'lucide-react';

const RoomsSection = () => {
  const rooms = [
    {
      id: 1,
      name: "Premium Suite A/C",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
      capacity: "2-3 Guests",
      features: ["King Size Bed", "Private Balcony", "Mountain View", "Premium Amenities"],
      description: "Luxurious suite with panoramic views of Idukki's pristine landscapes."
    },
    {
      id: 2,
      name: "Deluxe A/C Room",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
      capacity: "2 Guests",
      features: ["Queen Size Bed", "Modern Bathroom", "AC", "Free WiFi"],
      description: "Elegant and comfortable accommodation with modern amenities."
    },
    {
      id: 3,
      name: "Family Suite",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
      capacity: "4-5 Guests",
      features: ["Multiple Beds", "Spacious Layout", "Family Friendly", "Garden View"],
      description: "Perfect for families seeking comfort and space during their stay."
    }
  ];

  return (
    <section id="rooms" className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-800 mb-6">
            Rooms & Suites
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our thoughtfully designed accommodations, each offering a perfect blend 
            of luxury, comfort, and breathtaking views of Kerala's hill country.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div 
              key={room.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Room Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-emerald-800 font-semibold text-sm flex items-center gap-1">
                    <Users size={14} />
                    {room.capacity}
                  </span>
                </div>
              </div>

              {/* Room Content */}
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-emerald-800 mb-3">
                  {room.name}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {room.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-emerald-700 mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {room.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Amenities Icons */}
                <div className="flex items-center gap-4 mb-6 text-gray-500">
                  <div className="flex items-center gap-1">
                    <Wifi size={16} />
                    <span className="text-sm">Free WiFi</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Camera size={16} />
                    <span className="text-sm">View</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    View Details
                  </button>
                  <a
                    href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20the%20Premium%20Suite%20A/C"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 border-2 border-amber-600 text-amber-600 rounded-lg font-semibold hover:bg-amber-600 hover:text-white transition-all duration-300"
                  >
                    Inquire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20room%20availability%20and%20booking"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Phone size={20} />
            Check Availability
          </a>
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
