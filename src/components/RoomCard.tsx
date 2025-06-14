
import React from 'react';
import { Button } from './ui/button';
import { Users, Star, ArrowRight, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface RoomCardProps {
  room: {
    id: string;
    name: string;
    image: string;
    price: string;
    sleeps: number;
    features: string[];
    amenities: string[];
  };
  index: number;
}

const RoomCard: React.FC<RoomCardProps> = ({ room, index }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/rooms/${room.id}`);
  };

  const handleQuickInquiry = () => {
    const message = `Hello, I would like to inquire about the ${room.name} room.`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div 
      className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-slate-100 cursor-pointer"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={handleViewDetails}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={room.image} 
          alt={room.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
          <span className="text-emerald-600 font-bold text-lg">{room.price}</span>
          <span className="text-slate-500 text-sm">/night</span>
        </div>
        
        {/* Rating Badge */}
        <div className="absolute top-4 left-4 bg-amber-500/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
          <div className="flex items-center gap-1">
            <Star className="text-white" size={14} fill="currentColor" />
            <span className="text-white font-semibold text-sm">Premium</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-serif font-bold text-slate-800 group-hover:text-emerald-700 transition-colors duration-300">
            {room.name}
          </h3>
          <div className="flex items-center gap-2 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 mb-6 text-slate-600">
          <Users size={18} />
          <span>Sleeps {room.sleeps} guests</span>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h4 className="font-semibold text-slate-700 mb-3">Key Features</h4>
          <div className="grid grid-cols-2 gap-2">
            {room.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Amenities */}
        <div className="mb-8">
          <h4 className="font-semibold text-slate-700 mb-3">Amenities</h4>
          <div className="flex flex-wrap gap-2">
            {room.amenities.slice(0, 3).map((amenity, idx) => (
              <span key={idx} className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full border border-emerald-200">
                {amenity}
              </span>
            ))}
            {room.amenities.length > 3 && (
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
                +{room.amenities.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3" onClick={(e) => e.stopPropagation()}>
          <Button 
            onClick={handleViewDetails}
            className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-3 rounded-xl font-semibold group/btn transition-all duration-300"
          >
            <span>View Details</span>
            <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </Button>
          
          <Button 
            variant="outline"
            onClick={handleQuickInquiry}
            className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50 py-3 rounded-xl font-semibold transition-all duration-300"
          >
            <Phone size={16} className="mr-2" />
            Quick Inquiry
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
