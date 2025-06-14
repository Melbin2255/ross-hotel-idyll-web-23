
import React from 'react';
import { MapPin, Clock, Star, Camera, ArrowRight, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Attractions = () => {
  const attractions = [
    {
      id: 1,
      name: 'Munnar Hill Station',
      distance: '45 km',
      time: '1.5 hours',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
      description: 'Famous for its rolling tea plantations, misty mountains, and pleasant climate. A paradise for nature lovers.',
      highlights: ['Tea Gardens', 'Eravikulam National Park', 'Mattupetty Dam', 'Echo Point']
    },
    {
      id: 2,
      name: 'Thekkady Wildlife Sanctuary',
      distance: '65 km',
      time: '2 hours',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80',
      description: 'Home to diverse wildlife including elephants, tigers, and exotic birds. Periyar Lake boat rides are a must.',
      highlights: ['Wildlife Safari', 'Periyar Lake', 'Spice Plantations', 'Bamboo Rafting']
    },
    {
      id: 3,
      name: 'Vagamon Meadows',
      distance: '35 km',
      time: '1 hour',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
      description: 'Rolling green hills, pine forests, and serene meadows perfect for trekking and adventure activities.',
      highlights: ['Paragliding', 'Pine Forests', 'Meadow Walks', 'Adventure Sports']
    },
    {
      id: 4,
      name: 'Idukki Arch Dam',
      distance: '25 km',
      time: '45 minutes',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80',
      description: 'One of the highest arch dams in Asia, offering spectacular views of the reservoir and surrounding hills.',
      highlights: ['Dam Views', 'Reservoir', 'Photography', 'Scenic Drive']
    },
    {
      id: 5,
      name: 'Ramakkalmedu',
      distance: '40 km',
      time: '1.5 hours',
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80',
      description: 'Wind-swept hills offering panoramic views of Tamil Nadu plains and perfect for experiencing monsoon winds.',
      highlights: ['Wind Energy', 'Panoramic Views', 'Monsoon Experience', 'Hill Station']
    },
    {
      id: 6,
      name: 'Nedumkandam',
      distance: '15 km',
      time: '30 minutes',
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
      description: 'A charming hill town known for its spice plantations, cardamom hills, and traditional Kerala culture.',
      highlights: ['Spice Gardens', 'Local Culture', 'Cardamom Hills', 'Traditional Markets']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-emerald-900 via-slate-800 to-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/20 to-emerald-900/40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <MapPin className="text-amber-400" size={20} />
              <span className="text-white font-medium tracking-wide">DISCOVER IDUKKI</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-white">
              Nearby
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent"> Attractions</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed font-light">
              Explore the breathtaking beauty of Kerala's hill country with our curated guide to the most stunning destinations near RJ Ross Hotel
            </p>
          </div>
        </div>
      </section>

      {/* Attractions Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {attractions.map((attraction, index) => (
              <div 
                key={attraction.id}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-slate-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={attraction.image} 
                    alt={attraction.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Distance & Time */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
                      <div className="flex items-center gap-2">
                        <MapPin className="text-emerald-600" size={14} />
                        <span className="text-slate-800 font-semibold text-sm">{attraction.distance}</span>
                      </div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
                      <div className="flex items-center gap-2">
                        <Clock className="text-amber-600" size={14} />
                        <span className="text-slate-800 font-semibold text-sm">{attraction.time}</span>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 left-4 bg-amber-500/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
                    <div className="flex items-center gap-1">
                      <Star className="text-white" size={14} fill="currentColor" />
                      <span className="text-white font-semibold text-sm">{attraction.rating}</span>
                    </div>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">
                      {attraction.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {attraction.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-slate-800 mb-4">Key Highlights</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {attraction.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-4 rounded-xl font-semibold group/btn transition-all duration-300 flex items-center justify-center gap-3">
                    <Camera size={18} />
                    <span>View Details</span>
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 via-emerald-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">
            Ready to Explore?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let our travel desk help you plan the perfect itinerary for your stay
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20plan%20my%20sightseeing%20itinerary"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <Phone size={20} />
              <span>Plan My Trip</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Attractions;
