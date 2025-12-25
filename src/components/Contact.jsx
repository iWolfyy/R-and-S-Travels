import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Contact = () => {
  return (
    <AnimatedSection>
      <section id="contact" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/20 rounded-full blur-[100px] pointer-events-none"></div>

            {/* Contact Info */}
            <div className="lg:w-5/12 p-12 lg:p-16 flex flex-col justify-between bg-gradient-to-br from-slate-900 to-slate-800 text-white relative z-10">
              <div>
                <h3 className="text-3xl font-bold mb-6">Let's Plan Your <br /><span className="text-amber-500">Adventure</span></h3>
                <p className="text-slate-400 mb-10 leading-relaxed">
                  Fill out the form and our travel experts will get back to you within 24 hours with a custom itinerary.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-emerald-400 border border-white/10">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Call Us</p>
                      <p className="font-semibold text-lg hover:text-amber-400 transition-colors cursor-pointer">+94 77 706 0577</p>
                      <p className="font-semibold text-lg hover:text-amber-400 transition-colors cursor-pointer">+94 71 1303123</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-emerald-400 border border-white/10">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Email Us</p>
                      <p className="font-semibold text-lg hover:text-amber-400 transition-colors cursor-pointer">rangajeewandw@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-emerald-400 border border-white/10">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Visit Us</p>
                      <p className="font-semibold text-lg">B 2/2/1,Chitra Lane Flat, Narahenpita, Colombo 05.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4 p-12 lg:p-16 lg:pt-0">
                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-emerald-600 hover:scale-110 transition-all border border-white/10">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-7/12 p-12 lg:p-16 bg-white">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 focus:bg-white transition-all outline-none font-semibold text-slate-700" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 focus:bg-white transition-all outline-none font-semibold text-slate-700" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 focus:bg-white transition-all outline-none font-semibold text-slate-700" placeholder="john@example.com" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Travel Date</label>
                    <input type="date" className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 focus:bg-white transition-all outline-none font-semibold text-slate-700" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Travelers</label>
                    <select className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 focus:bg-white transition-all outline-none font-semibold text-slate-700">
                      <option>2 Adults</option>
                      <option>1 Person</option>
                      <option>Family (3-4)</option>
                      <option>Large Group (5+)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 focus:bg-white transition-all outline-none font-semibold text-slate-700 resize-none" placeholder="Tell us about your dream trip..."></textarea>
                </div>

                <button type="button" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-5 rounded-xl shadow-lg shadow-emerald-500/30 transition-all transform hover:-translate-y-1">
                  Send Inquiry Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Contact;