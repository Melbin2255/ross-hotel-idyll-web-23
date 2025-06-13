
import React from 'react';
import { MapPin, Clock, Camera } from 'lucide-react';

const AttractionsSection = () => {
  const attractions = [
    {
      name: "Munnar",
      distance: "25 km",
      time: "45 min drive",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
      description: "Famous for tea plantations, rolling hills, and cool climate. Perfect for nature lovers and photography enthusiasts.",
      highlights: ["Tea Museums", "Eravikulam National Park", "Mattupetty Dam"]
    },
    {
      name: "Thekkady",
      distance: "45 km",
      time: "1.5 hour drive",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      description: "Home to Periyar Wildlife Sanctuary, offering boat rides and wildlife spotting opportunities.",
      highlights: ["Periyar Lake", "Wildlife Safari", "Spice Plantations"]
    },
    {
      name: "Ramakkalmedu",
      distance: "15 km",
      time: "30 min drive",
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=800&q=80",
      description: "Known for its wind farms and panoramic views of the Western Ghats. A photographer's paradise.",
      highlights: ["Wind Energy Farm", "Kuravan & Kurathi Statues", "Sunrise Views"]
    },
    {
      name: "Vagamon",
      distance: "35 km",
      time: "1 hour drive",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
      description: "A hill station known for its meadows, valleys, and adventure activities.",
      highlights: ["Meadows", "Paragliding", "Pine Forests"]
    },
    {
      name: "Idukki Arch Dam",
      distance: "20 km",
      time: "40 min drive",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      description: "One of Asia's largest arch dams, offering spectacular views and boating facilities.",
      highlights: ["Engineering Marvel", "Boat Rides", "Valley Views"]
    },
    {
      name: "Nedumkandam",
      distance: "Local",
      time: "Walking distance",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
      description: "Our local town, rich in culture and offering authentic Kerala experiences.",
      highlights: ["Local Markets", "Traditional Cuisine", "Cultural Sites"]
    }
  ];

  return (
    <section id="attractions" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-800 mb-6">
            Explore Idukki
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the enchanting beauty of Kerala's hill country. From misty mountains to 
            wildlife sanctuaries, every destination offers unforgettable experiences.
          </p>
        </div>

        {/* Attractions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction, index) => (
            <div 
              key={attraction.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Attraction Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Distance Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center gap-1 text-emerald-800 font-semibold text-sm">
                    <MapPin size={14} />
                    {attraction.distance}
                  </div>
                </div>

                {/* Time Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center gap-1 text-emerald-800 font-medium text-sm">
                    <Clock size={14} />
                    {attraction.time}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-emerald-800 mb-3">
                  {attraction.name}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {attraction.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold text-emerald-700 mb-2 flex items-center gap-1">
                    <Camera size={16} />
                    Highlights:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {attraction.highlights.map((highlight, idx) => (
                      <span 
                        key={idx}
                        className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Plan Visit
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tour Package CTA */}
        <div className="mt-16 bg-gradient-to-r from-emerald-800 to-emerald-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-serif font-bold mb-4">
            Ross Bliss Tour Package
          </h3>
          <p className="text-xl text-emerald-100 mb-6 max-w-2xl mx-auto">
            Experience all these magnificent destinations with our curated 6-night/7-day package. 
            Complete with stay, meals, and guided sightseeing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20the%20Ross%20Bliss%20Tour%20Package"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Inquire About Package
            </a>
            <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300">
              View Itinerary
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttractionsSection;
