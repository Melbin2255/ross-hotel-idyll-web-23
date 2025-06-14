
import React from 'react';
import { Award, Shield, Star, Users } from 'lucide-react';

const TrustSignals = () => {
  const certifications = [
    {
      icon: Shield,
      title: "Kerala Tourism Certified",
      description: "Official Government Recognition"
    },
    {
      icon: Award,
      title: "Excellence Award 2023",
      description: "TripAdvisor Certificate"
    },
    {
      icon: Star,
      title: "5 Star Rated",
      description: "Guest Satisfaction"
    },
    {
      icon: Users,
      title: "1000+ Happy Guests",
      description: "Since Inception"
    }
  ];

  const mediaLogos = [
    { name: "Kerala Tourism", url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=100&q=80" },
    { name: "TripAdvisor", url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=100&q=80" },
    { name: "Lonely Planet", url: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=100&q=80" },
    { name: "Travel + Leisure", url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=100&q=80" }
  ];

  return (
    <div className="space-y-8">
      {/* As Featured In */}
      <div className="text-center">
        <h4 className="text-lg font-serif font-semibold text-slate-700 mb-4">As Featured In</h4>
        <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
          {mediaLogos.map((media, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
              <img
                src={media.url}
                alt={media.name}
                className="h-8 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 text-center group">
            <div className="bg-gradient-to-br from-emerald-100 to-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <cert.icon className="text-emerald-600" size={24} />
            </div>
            <h5 className="font-semibold text-slate-800 text-sm mb-1">{cert.title}</h5>
            <p className="text-slate-500 text-xs">{cert.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustSignals;
