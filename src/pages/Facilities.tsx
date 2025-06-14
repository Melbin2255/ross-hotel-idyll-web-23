
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Presentation, 
  Users, 
  Trees, 
  Car, 
  MapPin, 
  Shirt, 
  Shield, 
  Droplets, 
  Wifi,
  Phone,
  Star,
  Crown
} from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      id: 'auditorium',
      name: 'Premium Auditorium',
      icon: Presentation,
      image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=800&q=80',
      capacity: '150 seats',
      description: 'State-of-the-art auditorium with modern AV equipment, perfect for conferences, presentations, and cultural events.',
      features: ['Modern AV Equipment', 'Climate Controlled', 'Professional Lighting', 'Acoustically Designed']
    },
    {
      id: 'conference',
      name: 'Executive Conference Hall',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1559223607-b4d0555ae227?auto=format&fit=crop&w=800&q=80',
      capacity: '50 people',
      description: 'Elegant conference facility equipped with cutting-edge technology for successful business meetings and corporate events.',
      features: ['High-Speed WiFi', 'Video Conferencing', 'Projector & Screen', 'Catering Available']
    },
    {
      id: 'party-lawn',
      name: 'Luxury Party Lawn',
      icon: Trees,
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80',
      capacity: '200 guests',
      description: 'Spacious outdoor venue surrounded by lush greenery, ideal for weddings, celebrations, and social gatherings.',
      features: ['Open-Air Setting', 'Garden Views', 'Event Lighting', 'Catering Services']
    },
    {
      id: 'courtyard',
      name: 'Open Courtyard',
      icon: Star,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
      capacity: 'Flexible',
      description: 'Beautiful central courtyard providing a serene space for relaxation, informal gatherings, and quiet moments.',
      features: ['Natural Lighting', 'Peaceful Atmosphere', 'Garden Integration', 'Flexible Usage']
    },
    {
      id: 'parking',
      name: 'Ample Parking',
      icon: Car,
      image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80',
      capacity: '50+ vehicles',
      description: 'Secure and spacious parking facility ensuring convenience and safety for all our guests.',
      features: ['24/7 Security', 'CCTV Monitored', 'Well-Lit Area', 'Easy Access']
    },
    {
      id: 'travel-desk',
      name: 'Travel Concierge',
      icon: MapPin,
      image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=800&q=80',
      capacity: 'Personal Service',
      description: 'Expert travel assistance to help you explore Kerala\'s attractions and plan memorable excursions.',
      features: ['Local Expertise', 'Tour Planning', 'Transportation', 'Attraction Tickets']
    }
  ];

  const services = [
    {
      icon: Shirt,
      name: 'Laundry Service',
      description: 'Professional laundry and dry cleaning services with quick turnaround.'
    },
    {
      icon: Shield,
      name: 'CCTV Security',
      description: '24/7 surveillance system ensuring guest safety and property security.'
    },
    {
      icon: Droplets,
      name: 'Purified Water',
      description: 'Clean, filtered water available throughout the property.'
    },
    {
      icon: Wifi,
      name: 'High-Speed WiFi',
      description: 'Complimentary high-speed internet access in all areas.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-emerald-50 via-white to-amber-50">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Crown className="text-amber-600 w-12 h-12" />
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-800">
                Premium <span className="text-emerald-700">Facilities</span>
              </h1>
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Experience world-class amenities and services designed to make your stay 
              exceptional. From business facilities to leisure spaces, we have everything you need.
            </p>
          </div>
        </div>
      </section>

      {/* Main Facilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-800 mb-6">
              Our <span className="text-emerald-700">Signature</span> Facilities
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover our comprehensive range of facilities designed to cater to every need.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {facilities.map((facility, index) => (
              <div 
                key={facility.id}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                        <facility.icon className="text-white" size={24} />
                      </div>
                      <span className="text-white text-sm font-medium">{facility.capacity}</span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                    {facility.name}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {facility.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-700">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {facility.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-800 mb-6">
              Additional <span className="text-emerald-700">Services</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive services to ensure your comfort and convenience throughout your stay.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">{service.name}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Ready to Experience Our Facilities?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Contact us to book our facilities for your next event or simply to learn more about our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('https://wa.me/919876543210', '_blank')}
              className="bg-white text-emerald-700 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105"
            >
              WhatsApp Inquiry
            </button>
            <button 
              onClick={() => window.open('tel:+919876543210', '_blank')}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-emerald-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Call Us Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Facilities;
