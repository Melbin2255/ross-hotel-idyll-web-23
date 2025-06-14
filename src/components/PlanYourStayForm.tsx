
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Calendar, Users, Phone, ArrowRight, ChevronDown } from 'lucide-react';
import { toast } from 'sonner';

interface PlanYourStayFormProps {
  className?: string;
}

const PlanYourStayForm: React.FC<PlanYourStayFormProps> = ({ className = '' }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    checkIn: '',
    checkOut: '',
    guests: '2'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleStageOne = () => {
    setIsExpanded(true);
    toast.success("Great! Let's plan your perfect stay");
  };

  const handleStageTwo = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.checkIn || !formData.checkOut) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitted(true);
    
    // Prepare WhatsApp message
    const message = `Hello! I would like to plan my stay at RJ Ross Hotel:
    
Name: ${formData.name}
Check-in: ${new Date(formData.checkIn).toLocaleDateString()}
Check-out: ${new Date(formData.checkOut).toLocaleDateString()}
Guests: ${formData.guests}

Please help me with availability and pricing. Thank you!`;

    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      toast.success("Opening WhatsApp to complete your inquiry!");
    }, 500);
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const getDayAfterTomorrowDate = () => {
    const dayAfter = new Date();
    dayAfter.setDate(dayAfter.getDate() + 2);
    return dayAfter.toISOString().split('T')[0];
  };

  return (
    <div className={`bg-white rounded-3xl shadow-xl border border-emerald-100 overflow-hidden transition-all duration-500 ${className}`}>
      {!isExpanded ? (
        // Stage 1: Initial CTA
        <div className="p-8 text-center">
          <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4">
            Ready for Your Perfect Getaway?
          </h3>
          <p className="text-slate-600 mb-6">
            Let's create your ideal stay experience together
          </p>
          <Button
            onClick={handleStageOne}
            className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 group"
          >
            <span>Plan Your Stay</span>
            <ChevronDown size={20} className="ml-2 group-hover:translate-y-1 transition-transform duration-300" />
          </Button>
        </div>
      ) : (
        // Stage 2: Expanded Form
        <div className="p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-serif font-bold text-slate-800 mb-2">
              Perfect! Let's Plan Your Stay
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          <form onSubmit={handleStageTwo} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <Calendar size={16} className="inline mr-1" />
                  Check-in *
                </label>
                <input
                  type="date"
                  value={formData.checkIn}
                  onChange={(e) => setFormData(prev => ({ ...prev, checkIn: e.target.value }))}
                  min={getTomorrowDate()}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <Calendar size={16} className="inline mr-1" />
                  Check-out *
                </label>
                <input
                  type="date"
                  value={formData.checkOut}
                  onChange={(e) => setFormData(prev => ({ ...prev, checkOut: e.target.value }))}
                  min={formData.checkIn || getDayAfterTomorrowDate()}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                <Users size={16} className="inline mr-1" />
                Number of Guests
              </label>
              <select
                value={formData.guests}
                onChange={(e) => setFormData(prev => ({ ...prev, guests: e.target.value }))}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              >
                {[1,2,3,4,5,6].map(num => (
                  <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>

            <Button
              type="submit"
              disabled={isSubmitted}
              className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                isSubmitted 
                  ? 'bg-green-600 hover:bg-green-700 text-white' 
                  : 'bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white'
              }`}
            >
              {isSubmitted ? (
                <>
                  <Phone size={20} className="mr-2" />
                  Opening WhatsApp...
                </>
              ) : (
                <>
                  <span>Chat on WhatsApp</span>
                  <ArrowRight size={20} className="ml-2" />
                </>
              )}
            </Button>
          </form>

          <p className="text-sm text-slate-500 text-center mt-4">
            We'll connect you directly with our team for instant assistance
          </p>
        </div>
      )}
    </div>
  );
};

export default PlanYourStayForm;
