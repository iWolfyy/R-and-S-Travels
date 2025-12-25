import React from 'react';
import { Umbrella, Camera, Users } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Services = () => {
  return (
    <AnimatedSection>
      <section id="services" className="py-24 bg-emerald-900 text-white relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute top-0 right-0 opacity-10">
          <svg width="400" height="400" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" fill="none" />
            <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="1" fill="none" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="text-emerald-300 font-bold tracking-widest uppercase">Why Choose R&S Travels</span>
              <h2 className="text-4xl md:text-6xl font-black mt-4 mb-6 leading-tight">
                Travel with <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Confidence</span>
              </h2>
              <p className="text-emerald-100 text-lg mb-10 leading-relaxed max-w-lg">
                We are a registered tourism agency with over 10 years of experience. Our fleet of luxury vehicles and English-speaking chauffeur guides ensure your safety and comfort.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-emerald-800/40 p-6 rounded-2xl border border-emerald-700/50 hover:bg-emerald-800/60 transition-colors">
                  <div className="bg-emerald-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-emerald-300">
                    <Umbrella className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">24/7 Support</h4>
                  <p className="text-sm text-emerald-200/70">Always here for you, from arrival to departure.</p>
                </div>
                <div className="bg-emerald-800/40 p-6 rounded-2xl border border-emerald-700/50 hover:bg-emerald-800/60 transition-colors">
                  <div className="bg-amber-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-amber-300">
                    <Camera className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Local Guides</h4>
                  <p className="text-sm text-emerald-200/70">Experts who know the hidden gems of the island.</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-amber-500/20 rounded-full blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=1000&auto=format&fit=crop" 
                alt="Culture" 
                className="relative z-10 rounded-3xl shadow-2xl border-4 border-emerald-800 w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-600">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-slate-900">5,000+</p>
                    <p className="text-sm text-slate-500 uppercase font-bold">Happy Travelers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Services;