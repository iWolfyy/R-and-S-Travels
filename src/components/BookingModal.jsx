import React from 'react';
import { X, Calendar, MapPin, Users, Send } from 'lucide-react';

const BookingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, send data here
    alert("Thank you! Our agents will contact you shortly.");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-[fadeInUp_0.4s_ease-out]">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-6 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors bg-white/10 rounded-full p-1"
          >
            <X className="w-6 h-6" />
          </button>
          <h3 className="text-2xl font-black font-serif mb-1">Plan Your Escape</h3>
          <p className="text-amber-100 text-sm">Tell us your dream, we'll make it real.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Your Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                required
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                required
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-500" /> Destination
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-amber-500 outline-none transition-all appearance-none text-slate-600">
                  <option>Sri Lanka Round Trip</option>
                  <option>Maldives Extension</option>
                  <option>Cultural Triangle</option>
                  <option>Beach Stay</option>
                  <option>Custom Itinerary</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1 flex items-center gap-1">
                 <Users className="w-3 h-3 text-amber-500" /> Travelers
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-amber-500 outline-none transition-all appearance-none text-slate-600">
                  <option>2 Adults</option>
                  <option>Family (4)</option>
                  <option>Solo</option>
                  <option>Group</option>
                </select>
              </div>
            </div>

            <div>
               <label className="block text-sm font-bold text-slate-700 mb-1 flex items-center gap-1">
                 <Calendar className="w-3 h-3 text-amber-500" /> Preferred Dates
               </label>
               <input 
                type="date" 
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-amber-500 outline-none transition-all text-slate-600"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/30 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2 mt-2"
          >
            <Send className="w-5 h-5" />
            Get My Free Quote
          </button>
          
          <p className="text-xs text-center text-slate-400 mt-4">
            By submitting, you agree to our privacy policy. No spam, we promise.
          </p>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
