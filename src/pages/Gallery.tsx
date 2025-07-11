
import React, { useState } from 'react';
import { Camera, Filter, Grid, List, Eye, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { id: 'all', name: 'All Photos', count: 24 },
    { id: 'rooms', name: 'Luxury Rooms', count: 8 },
    { id: 'facilities', name: 'Facilities', count: 6 },
    { id: 'dining', name: 'Dining', count: 4 },
    { id: 'nature', name: 'Nature Views', count: 6 }
  ];

  const images = [
    // Rooms
    { id: 1, category: 'rooms', title: 'Premium Suite Living Area', roomName: 'Premium Suite', src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80' },
    { id: 2, category: 'rooms', title: 'Deluxe Room Bedroom', roomName: 'Deluxe Room', src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80' },
    { id: 3, category: 'rooms', title: 'Executive Suite Balcony', roomName: 'Executive Suite', src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80' },
    { id: 4, category: 'rooms', title: 'Luxury Bathroom', roomName: 'Premium Suite', src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80' },
    { id: 5, category: 'rooms', title: 'Premium Suite Bedroom', roomName: 'Premium Suite', src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80' },
    { id: 6, category: 'rooms', title: 'Deluxe Room Seating', roomName: 'Deluxe Room', src: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=800&q=80' },
    { id: 7, category: 'rooms', title: 'Executive Suite Living', roomName: 'Executive Suite', src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80' },
    { id: 8, category: 'rooms', title: 'Luxury Room View', roomName: 'Luxury Room', src: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80' },
    
    // Facilities
    { id: 9, category: 'facilities', title: 'Grand Lobby', roomName: 'Hotel Lobby', src: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80' },
    { id: 10, category: 'facilities', title: 'Conference Hall', roomName: 'Conference Hall', src: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800&q=80' },
    { id: 11, category: 'facilities', title: 'Auditorium', roomName: 'Event Auditorium', src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80' },
    { id: 12, category: 'facilities', title: 'Party Lawn', roomName: 'Garden Lawn', src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80' },
    { id: 13, category: 'facilities', title: 'Open Courtyard', roomName: 'Courtyard', src: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80' },
    { id: 14, category: 'facilities', title: 'Reception Area', roomName: 'Reception', src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80' },
    
    // Dining
    { id: 15, category: 'dining', title: 'Multi-Cuisine Restaurant', roomName: 'Main Restaurant', src: 'https://images.unsplash.com/photo-1552566063-233c1cb6a0b8?auto=format&fit=crop&w=800&q=80' },
    { id: 16, category: 'dining', title: 'Traditional Kerala Cuisine', roomName: 'Kerala Kitchen', src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=800&q=80' },
    { id: 17, category: 'dining', title: 'Continental Breakfast', roomName: 'Breakfast Hall', src: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=800&q=80' },
    { id: 18, category: 'dining', title: 'Evening Dining', roomName: 'Fine Dining', src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80' },
    
    // Nature
    { id: 19, category: 'nature', title: 'Misty Mountains', roomName: 'Mountain Views', src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80' },
    { id: 20, category: 'nature', title: 'Lush Greenery', roomName: 'Garden Views', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80' },
    { id: 21, category: 'nature', title: 'Sunrise Views', roomName: 'Sunrise Point', src: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80' },
    { id: 22, category: 'nature', title: 'Forest Trails', roomName: 'Nature Trails', src: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80' },
    { id: 23, category: 'nature', title: 'Valley Views', roomName: 'Valley Overlook', src: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80' },
    { id: 24, category: 'nature', title: 'Peaceful Landscapes', roomName: 'Scenic Views', src: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80' }
  ];

  const filteredImages = activeFilter === 'all' 
    ? images 
    : images.filter(img => img.category === activeFilter);

  // Progressive reveal: Show only 6 images initially
  const displayedImages = showAll ? filteredImages : filteredImages.slice(0, 6);

  const handleShowMore = () => {
    if (!showAll) {
      setShowAll(true);
      // Track engagement
      console.log('Gallery engagement: Show More clicked');
    }
  };

  const handleViewFullGallery = () => {
    // Track completion
    console.log('Gallery engagement: View Full Gallery clicked');
    // Could navigate to a dedicated full gallery page or modal
  };

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
              <Camera className="text-amber-400" size={20} />
              <span className="text-white font-medium tracking-wide">VISUAL JOURNEY</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-white">
              Photo
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent"> Gallery</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed font-light">
              Immerse yourself in the beauty of RJ Ross Hotel through our curated collection of stunning photography
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveFilter(category.id);
                    setShowAll(false); // Reset progressive reveal when changing filters
                  }}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                    activeFilter === category.id
                      ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span>{category.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    activeFilter === category.id
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-200 text-slate-600'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-slate-100 rounded-full p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-full transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-white text-emerald-600 shadow-md'
                    : 'text-slate-600 hover:text-emerald-600'
                }`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-full transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'bg-white text-emerald-600 shadow-md'
                    : 'text-slate-600 hover:text-emerald-600'
                }`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {displayedImages.map((image, index) => (
              <div 
                key={image.id}
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                  viewMode === 'list' ? 'h-64' : 'h-80'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Enhanced Hover Overlay - Room Name + View Details */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-serif font-bold mb-2 text-center px-4">
                    {image.roomName}
                  </h3>
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300">
                    <Eye size={16} />
                    <span className="font-medium">View Details</span>
                    <ArrowRight size={16} />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                  <span className="text-xs font-semibold text-slate-800 capitalize">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Progressive Reveal Button - Zeigarnik Effect */}
          {filteredImages.length > 6 && (
            <div className="mt-16 text-center">
              {!showAll ? (
                <button
                  onClick={handleShowMore}
                  className="group bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
                >
                  <span>Show More Photos</span>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                  </div>
                  <span className="text-sm bg-white/20 px-2 py-1 rounded-full">
                    +{filteredImages.length - 6} more
                  </span>
                </button>
              ) : (
                <button
                  onClick={handleViewFullGallery}
                  className="group bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
                >
                  <Camera size={20} />
                  <span>View Full Gallery</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
