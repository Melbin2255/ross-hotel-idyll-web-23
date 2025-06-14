
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { 
  ArrowLeft, 
  Users, 
  Bed, 
  Wifi, 
  Car, 
  Coffee, 
  Shield, 
  Star,
  Phone,
  ChevronLeft,
  ChevronRight,
  MapPin
} from 'lucide-react';

const RoomDetail = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Room data - in a real app, this would come from an API
  const roomData: Record<string, any> = {
    'premium-suite-ac': {
      name: 'Premium Suite A/C',
      price: '₹4,500',
      images: [
        'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80'
      ],
      sleeps: 4,
      size: '45 sq.m',
      description: 'Experience luxury at its finest in our Premium Suite featuring a spacious bedroom with king-size bed, separate living area, and panoramic mountain views. Perfect for families and couples seeking the ultimate comfort.',
      amenities: [
        'King Size Bed with Premium Linens',
        'Air Conditioning with Individual Control',
        'High-Speed WiFi (50 Mbps)',
        'Smart TV with Cable Channels',
        'Mini Bar and Coffee Station',
        'Room Service (24/7)',
        'Mountain View Balcony',
        'Premium Bathroom Amenities',
        'Safe Deposit Box',
        'Work Desk with Ergonomic Chair',
        'Blackout Curtains',
        'Daily Housekeeping'
      ],
      features: [
        'Separate Living Area',
        'Mountain View',
        'Premium Amenities',
        'Mini Bar',
        'Balcony Access',
        'Luxury Furnishing'
      ]
    },
    'deluxe-ac': {
      name: 'Deluxe A/C',
      price: '₹3,200',
      images: [
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80'
      ],
      sleeps: 3,
      size: '35 sq.m',
      description: 'Our Deluxe A/C rooms offer modern comfort with elegant furnishing, garden views, and all essential amenities for a memorable stay in Kerala\'s hill country.',
      amenities: [
        'Queen Size Bed',
        'Air Conditioning',
        'Free WiFi',
        'Cable TV',
        'Room Service',
        'Garden View',
        'Work Desk',
        'Private Bathroom',
        'Daily Housekeeping',
        'Complimentary Toiletries'
      ],
      features: [
        'Garden View',
        'Modern Comfort',
        'Work Desk',
        'Elegant Decor'
      ]
    }
    // Add more room types as needed
  };

  const room = roomData[roomId || ''] || roomData['premium-suite-ac'];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Image Gallery */}
      <section className="relative pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Button 
            variant="outline"
            onClick={() => navigate('/rooms')}
            className="mb-8 flex items-center gap-2 hover:bg-emerald-50 border-emerald-200 text-emerald-700"
          >
            <ArrowLeft size={18} />
            Back to Rooms
          </Button>

          {/* Image Gallery */}
          <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden mb-8 group">
            <img 
              src={room.images[currentImageIndex]} 
              alt={room.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={24} className="text-slate-700" />
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={24} className="text-slate-700" />
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {room.images.map((_: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Price Badge */}
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg">
              <span className="text-emerald-600 font-bold text-2xl">{room.price}</span>
              <span className="text-slate-500 text-lg">/night</span>
            </div>
          </div>

          {/* Room Info Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-800">
                    {room.name}
                  </h1>
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-6 text-slate-600 mb-6">
                  <div className="flex items-center gap-2">
                    <Users size={20} />
                    <span>Sleeps {room.sleeps} guests</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed size={20} />
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={20} />
                    <span>Nedumkandam</span>
                  </div>
                </div>

                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {room.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-2xl font-serif font-bold text-slate-800 mb-6">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {room.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-2xl font-serif font-bold text-slate-800 mb-6">Amenities & Services</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {room.amenities.map((amenity: string, index: number) => (
                    <div key={index} className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-lg transition-colors duration-200">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span className="text-slate-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="bg-gradient-to-br from-emerald-50 to-amber-50 p-8 rounded-3xl border border-emerald-100 shadow-lg">
                  <h3 className="text-2xl font-serif font-bold text-slate-800 mb-6 text-center">Reserve Your Stay</h3>
                  
                  <div className="text-center mb-8">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">{room.price}</div>
                    <div className="text-slate-500">per night</div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <Button 
                      onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                      className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Book Now via WhatsApp
                    </Button>
                    
                    <Button 
                      variant="outline"
                      onClick={() => window.open('tel:+919876543210', '_blank')}
                      className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50 py-4 rounded-xl font-semibold transition-all duration-300"
                    >
                      <Phone size={18} className="mr-2" />
                      Call to Reserve
                    </Button>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-emerald-100">
                    <h4 className="font-semibold text-slate-800 mb-4">Quick Amenities</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-slate-600">
                        <Wifi size={16} className="text-emerald-600" />
                        Free WiFi
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <Car size={16} className="text-emerald-600" />
                        Free Parking
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <Coffee size={16} className="text-emerald-600" />
                        Room Service
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <Shield size={16} className="text-emerald-600" />
                        Secure
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RoomDetail;
