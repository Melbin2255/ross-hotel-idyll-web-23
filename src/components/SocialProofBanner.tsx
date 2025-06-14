
import React, { useState, useEffect } from 'react';
import { Star, MessageCircle } from 'lucide-react';

const SocialProofBanner = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [recentInquiries, setRecentInquiries] = useState(0);

  const testimonials = [
    {
      name: "Priya & Arjun",
      location: "Bangalore",
      text: "The most peaceful retreat we've ever experienced in Kerala!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Sarah Johnson",
      location: "London",
      text: "Exceptional hospitality amidst breathtaking mountain views.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1e3?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Ravi Kumar",
      location: "Mumbai",
      text: "Perfect blend of luxury and authentic Kerala experience.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Emily Chen",
      location: "Singapore",
      text: "Outstanding service and stunning location - highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
    }
  ];

  useEffect(() => {
    // Rotate testimonials every 5 seconds
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    // Generate realistic inquiry numbers
    const generateInquiries = () => {
      const baseNumber = 3;
      const variation = Math.floor(Math.random() * 4); // 0-3
      setRecentInquiries(baseNumber + variation);
    };

    generateInquiries();
    const inquiryInterval = setInterval(generateInquiries, 30000); // Update every 30 seconds

    return () => {
      clearInterval(testimonialInterval);
      clearInterval(inquiryInterval);
    };
  }, []);

  return (
    <div className="space-y-4">
      {/* Testimonial Carousel */}
      <div className="bg-gradient-to-r from-emerald-50 via-white to-orange-50 p-6 rounded-2xl border border-emerald-100 shadow-sm">
        <div className="flex items-center gap-4">
          <img
            src={testimonials[currentTestimonial].image}
            alt={testimonials[currentTestimonial].name}
            className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
          />
          <div className="flex-1">
            <div className="flex items-center gap-1 mb-1">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} size={14} className="text-amber-500 fill-current" />
              ))}
            </div>
            <p className="text-slate-700 font-medium text-sm mb-1">
              "{testimonials[currentTestimonial].text}"
            </p>
            <p className="text-slate-500 text-xs">
              - {testimonials[currentTestimonial].name}, {testimonials[currentTestimonial].location}
            </p>
          </div>
        </div>
        
        {/* Indicator dots */}
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? 'bg-emerald-500' : 'bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Real-time Inquiry Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-xl shadow-md animate-pulse">
        <div className="flex items-center justify-center gap-2">
          <MessageCircle size={18} className="animate-bounce" />
          <span className="text-sm font-medium">
            {recentInquiries} guests inquired in the last 24 hours
          </span>
        </div>
      </div>
    </div>
  );
};

export default SocialProofBanner;
