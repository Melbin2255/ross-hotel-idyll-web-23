
import React, { useState } from 'react';
import { Phone, MapPin, Clock, Wifi, Users, Camera } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello RJ Ross Hotel,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const facilities = [
    { icon: Users, name: "Conference Hall" },
    { icon: Camera, name: "Party Lawn" },
    { icon: Wifi, name: "Free WiFi" },
    { icon: Phone, name: "Travel Desk" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-800 mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to experience luxury hospitality in Kerala's hill country? 
            Contact us to book your stay or inquire about our services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-serif font-bold text-emerald-800 mb-8">
              Contact Information
            </h3>

            {/* Contact Details */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <Phone className="text-emerald-700" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-800 mb-1">Phone Numbers</h4>
                  <p className="text-gray-600">+91 98765 43210</p>
                  <p className="text-gray-600">+91 87654 32109</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <MapPin className="text-emerald-700" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-800 mb-1">Locations</h4>
                  <p className="text-gray-600 mb-2">
                    <strong>Nedumkandam Branch:</strong><br />
                    Nedumkandam, Idukki District<br />
                    Kerala, India
                  </p>
                  <p className="text-gray-600">
                    <strong>Munnar Branch:</strong><br />
                    Munnar Hills, Idukki District<br />
                    Kerala, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <Clock className="text-emerald-700" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-800 mb-1">Check-in / Check-out</h4>
                  <p className="text-gray-600">Check-in: 12:00 PM</p>
                  <p className="text-gray-600">Check-out: 11:00 AM</p>
                </div>
              </div>
            </div>

            {/* Quick Facilities */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="font-serif font-bold text-emerald-800 mb-4 text-xl">
                Quick Facilities Overview
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {facilities.map((facility, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <facility.icon className="text-amber-600" size={20} />
                    <span className="text-gray-700 font-medium">{facility.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-8">
              <a
                href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20RJ%20Ross%20Hotel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-serif font-bold text-emerald-800 mb-6">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-emerald-800 font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-emerald-100 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-emerald-800 font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-emerald-100 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-emerald-800 font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-emerald-100 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-emerald-800 font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-emerald-100 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors resize-vertical"
                  placeholder="Tell us about your requirements, preferred dates, or any questions you have..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Send Message via WhatsApp
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-4 text-center">
              By submitting this form, your message will be sent directly to our WhatsApp for immediate assistance.
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-serif font-bold text-emerald-800 mb-8 text-center">
            Find Us
          </h3>
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <div className="aspect-video bg-emerald-100 rounded-lg flex items-center justify-center">
              <div className="text-center text-emerald-700">
                <MapPin size={48} className="mx-auto mb-4" />
                <p className="text-lg font-semibold">Interactive Map</p>
                <p className="text-sm">Nedumkandam & Munnar Locations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
