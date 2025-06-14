
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, Star, ArrowLeft, Phone, Camera, Navigation as NavigationIcon, Calendar } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AttractionDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const attractionsData = {
    'munnar-hill-station': {
      id: 1,
      name: 'Munnar Hill Station',
      distance: '45 km',
      time: '1.5 hours',
      rating: 4.8,
      bestTime: 'September to March',
      images: [
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
      ],
      description: 'Munnar is a picturesque hill station located in the Idukki district of Kerala. Famous for its sprawling tea plantations, misty mountains, and pleasant climate, it offers a perfect escape from the hustle and bustle of city life.',
      detailedInfo: 'At an altitude of 1,600 meters above sea level, Munnar is blessed with lush green tea gardens, pristine valleys, and mountain peaks. The town was once the summer resort of the British Raj in south India, and today it continues to attract visitors with its natural beauty and cool climate.',
      highlights: [
        'Eravikulam National Park - Home to the endangered Nilgiri Tahr',
        'Tea Museum - Learn about tea processing and history',
        'Mattupetty Dam - Boating and scenic views',
        'Echo Point - Natural echo phenomenon',
        'Top Station - Panoramic views of Western Ghats',
        'Kundala Lake - Shikara boat rides'
      ],
      activities: [
        'Tea plantation tours',
        'Wildlife spotting',
        'Trekking and hiking',
        'Photography',
        'Boating',
        'Nature walks'
      ],
      tips: [
        'Carry warm clothes as it can get cold',
        'Book accommodation in advance during peak season',
        'Early morning visits offer the best views',
        'Try local tea varieties'
      ]
    },
    'thekkady-wildlife-sanctuary': {
      id: 2,
      name: 'Thekkady Wildlife Sanctuary',
      distance: '65 km',
      time: '2 hours',
      rating: 4.7,
      bestTime: 'October to February',
      images: [
        'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80'
      ],
      description: 'Thekkady is home to the Periyar Wildlife Sanctuary, one of India\'s most fascinating wildlife reserves. The sanctuary offers boat rides on Periyar Lake and opportunities to spot elephants, tigers, and exotic birds.',
      detailedInfo: 'Spread across 777 sq km, Periyar Wildlife Sanctuary is one of the most well-protected areas in India. The sanctuary is known for its dense evergreen forests, grasslands, and the beautiful Periyar Lake formed by the Mullaperiyar Dam.',
      highlights: [
        'Periyar Lake boat rides',
        'Wildlife spotting - elephants, tigers, deer',
        'Spice plantations tour',
        'Bamboo rafting',
        'Nature walks with tribal guides',
        'Bird watching - over 320 species'
      ],
      activities: [
        'Wildlife safari',
        'Boat cruises',
        'Spice plantation visits',
        'Bamboo rafting',
        'Trekking',
        'Photography'
      ],
      tips: [
        'Book boat rides in advance',
        'Early morning safaris offer better wildlife sightings',
        'Carry binoculars for bird watching',
        'Respect wildlife and maintain distance'
      ]
    },
    'vagamon-meadows': {
      id: 3,
      name: 'Vagamon Meadows',
      distance: '35 km',
      time: '1 hour',
      rating: 4.6,
      bestTime: 'September to March',
      images: [
        'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
      ],
      description: 'Vagamon is a beautiful hill station known for its rolling green hills, pine forests, and adventure activities. Perfect for those seeking tranquility and adventure.',
      detailedInfo: 'Located at an altitude of 1,100 meters, Vagamon offers spectacular views of tea gardens, meadows, and valleys. It\'s an ideal destination for paragliding and other adventure sports.',
      highlights: [
        'Paragliding adventures',
        'Pine forests exploration',
        'Meadow walks',
        'Adventure sports',
        'Tea garden visits',
        'Sunrise viewpoints'
      ],
      activities: [
        'Paragliding',
        'Trekking',
        'Rock climbing',
        'Photography',
        'Nature walks',
        'Camping'
      ],
      tips: [
        'Best time for paragliding is winter months',
        'Carry warm clothes for early morning visits',
        'Book adventure activities in advance',
        'Perfect for weekend getaways'
      ]
    },
    'idukki-arch-dam': {
      id: 4,
      name: 'Idukki Arch Dam',
      distance: '25 km',
      time: '45 minutes',
      rating: 4.5,
      bestTime: 'October to March',
      images: [
        'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80'
      ],
      description: 'One of the highest arch dams in Asia, the Idukki Dam is an engineering marvel offering spectacular views of the reservoir and surrounding hills.',
      detailedInfo: 'Built between two hills, Kuravan and Kurathi, the Idukki Arch Dam is 168.91 meters high and was constructed to harness the power of the Periyar River for hydroelectric power generation.',
      highlights: [
        'Engineering marvel of arch dam construction',
        'Spectacular reservoir views',
        'Photography opportunities',
        'Scenic drive through hills',
        'Boat rides on the reservoir',
        'Surrounding hill viewpoints'
      ],
      activities: [
        'Sightseeing',
        'Photography',
        'Boat rides',
        'Nature walks',
        'Scenic drives',
        'Picnicking'
      ],
      tips: [
        'Best views during clear weather',
        'Carry camera for stunning shots',
        'Visit during non-monsoon months',
        'Combine with other nearby attractions'
      ]
    },
    'ramakkalmedu': {
      id: 5,
      name: 'Ramakkalmedu',
      distance: '40 km',
      time: '1.5 hours',
      rating: 4.4,
      bestTime: 'October to March',
      images: [
        'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
      ],
      description: 'Known for its wind energy farms and panoramic views of the Tamil Nadu plains, Ramakkalmedu offers a unique experience of experiencing strong monsoon winds.',
      detailedInfo: 'Ramakkalmedu is famous for having the strongest winds in Kerala. The place is named after two huge rocks that resemble the mythological characters Rama and his brother.',
      highlights: [
        'Wind energy farm experience',
        'Panoramic views of Tamil Nadu plains',
        'Kuravan and Kurathi statues',
        'Strong monsoon wind experience',
        'Sunrise and sunset viewpoints',
        'Photography opportunities'
      ],
      activities: [
        'Wind farm tours',
        'Photography',
        'Sightseeing',
        'Nature walks',
        'Sunrise viewing',
        'Cultural exploration'
      ],
      tips: [
        'Prepare for strong winds',
        'Best visited during clear weather',
        'Carry warm clothes',
        'Ideal for photography enthusiasts'
      ]
    },
    'nedumkandam': {
      id: 6,
      name: 'Nedumkandam',
      distance: '15 km',
      time: '30 minutes',
      rating: 4.3,
      bestTime: 'Year-round',
      images: [
        'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
      ],
      description: 'A charming hill town known for its spice plantations, cardamom hills, and traditional Kerala culture. Experience authentic local life.',
      detailedInfo: 'Nedumkandam is a quiet hill town that offers insights into traditional Kerala hill culture. Known for its spice cultivation and friendly locals.',
      highlights: [
        'Spice plantation tours',
        'Traditional Kerala culture',
        'Cardamom cultivation areas',
        'Local markets and bazaars',
        'Authentic cuisine experiences',
        'Peaceful hill town atmosphere'
      ],
      activities: [
        'Spice plantation visits',
        'Cultural exploration',
        'Local market visits',
        'Traditional cuisine tasting',
        'Village walks',
        'Photography'
      ],
      tips: [
        'Try local spices and products',
        'Interact with friendly locals',
        'Visit local markets for authentic experience',
        'Perfect for cultural immersion'
      ]
    }
  };

  const attraction = slug ? attractionsData[slug as keyof typeof attractionsData] : null;

  if (!attraction) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Navigation />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Attraction Not Found</h1>
          <Link to="/attractions" className="text-emerald-600 hover:text-emerald-700 font-semibold">
            ← Back to Attractions
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={attraction.images[0]} 
            alt={attraction.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link 
            to="/attractions"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Attractions</span>
          </Link>
          
          <div className="text-white">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              {attraction.name}
            </h1>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPin size={18} />
                <span>{attraction.distance} from hotel</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock size={18} />
                <span>{attraction.time} drive</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star size={18} fill="currentColor" />
                <span>{attraction.rating} rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar size={18} />
                <span>Best: {attraction.bestTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-slate-800 mb-6">About {attraction.name}</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">{attraction.description}</p>
                <p className="text-slate-600 leading-relaxed">{attraction.detailedInfo}</p>
              </div>

              {/* Image Gallery */}
              <div className="mb-12">
                <h3 className="text-2xl font-serif font-bold text-slate-800 mb-6">Gallery</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {attraction.images.slice(1).map((image, index) => (
                    <div key={index} className="rounded-2xl overflow-hidden shadow-lg">
                      <img 
                        src={image} 
                        alt={`${attraction.name} ${index + 2}`}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-12">
                <h3 className="text-2xl font-serif font-bold text-slate-800 mb-6">Key Highlights</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {attraction.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-emerald-50 rounded-xl">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Activities */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <Camera size={20} />
                  Activities
                </h3>
                <div className="space-y-3">
                  {attraction.activities.map((activity, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span className="text-slate-600">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <NavigationIcon size={20} />
                  Travel Tips
                </h3>
                <div className="space-y-4">
                  {attraction.tips.map((tip, index) => (
                    <div key={index} className="p-3 bg-amber-50 rounded-lg">
                      <span className="text-slate-700 text-sm">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 text-white text-center">
                <h3 className="text-xl font-bold mb-4">Plan Your Visit</h3>
                <p className="mb-6 text-emerald-100">Let our travel desk help you plan the perfect trip</p>
                <a
                  href={`https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20visit%20${encodeURIComponent(attraction.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-emerald-700 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                >
                  <Phone size={18} />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AttractionDetail;
