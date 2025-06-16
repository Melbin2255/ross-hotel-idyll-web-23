
import React, { useEffect, useRef } from 'react';
import { MapPin, Clock, Star, Camera, ArrowRight, Phone, Home } from 'lucide-react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Attractions = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedPlace = searchParams.get('place');
  const selectedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedPlace && selectedRef.current) {
      // Scroll to the selected attraction with a smooth animation
      selectedRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [selectedPlace]);

  const attractions = [
    {
      id: 1,
      slug: 'munnar-hill-station',
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
      slug: 'thekkady-wildlife-sanctuary',
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
      slug: 'vagamon-meadows',
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
      slug: 'idukki-arch-dam',
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
      slug: 'ramakkalmedu',
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
      slug: 'nedumkandam',
      name: 'Nedumkandam',
      distance: '15 km',
      time: '30 minutes',
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
      description: 'A charming hill town known for its spice plantations, cardamom hills, and traditional Kerala culture.',
      highlights: ['Spice Gardens', 'Local Culture', 'Cardamom Hills', 'Traditional Markets']
    }
  ];

  const handleViewDetails = (slug: string) => {
    navigate(`/attractions/${slug}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
          >
            <Home size={20} />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-emerald-800 mb-6">
            Nearby Attractions
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the natural wonders and cultural heritage around RJ Ross Residency. Each destination tells its own unique story.
          </p>
        </div>

        {/* Attractions Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {attractions.map((attraction) => (
            <div 
              key={attraction.id}
              ref={selectedPlace?.toLowerCase() === attraction.name.toLowerCase().replace(/[^a-zA-Z0-9]/g, '') ? selectedRef : null}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl ${
                selectedPlace?.toLowerCase() === attraction.name.toLowerCase().replace(/[^a-zA-Z0-9]/g, '') 
                ? 'ring-4 ring-emerald-500 ring-opacity-50 transform scale-102'
                : ''
              }`}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={attraction.image} 
                  alt={attraction.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-emerald-900/40"></div>
                
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
                <button 
                  onClick={() => handleViewDetails(attraction.slug)}
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-4 rounded-xl font-semibold group/btn transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Camera size={18} />
                  <span>View Details</span>
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

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
