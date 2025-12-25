import React from 'react';
import { Clock, CheckCircle, Zap } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Packages = ({ packages }) => {
  return (
    <AnimatedSection>
      <section id="packages" className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-300/20 rounded-full blur-[100px]"></div>
        <div className="absolute top-40 right-0 w-96 h-96 bg-amber-300/20 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-amber-600 font-bold uppercase tracking-widest text-sm bg-amber-50 border border-amber-100 px-4 py-1.5 rounded-full mb-4 inline-block">Top Rated Experiences</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-6 font-serif">Curated <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">Holiday Packages</span></h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              All-inclusive itineraries designed by experts. Pick your perfect getaway and let us handle the details.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {packages.map((pkg, idx) => {
              const isPopular = idx === 1; // Assuming the second package is the popular one
              return (
                <div 
                  key={idx} 
                  className={`group relative rounded-3xl overflow-hidden transition-all duration-500 ${
                    isPopular 
                      ? 'bg-white shadow-2xl scale-105 border-2 border-amber-400 z-10' 
                      : 'bg-white/60 backdrop-blur-lg shadow-xl border border-white hover:border-emerald-200 hover:-translate-y-2'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute top-0 inset-x-0 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-center py-1.5 text-xs font-bold uppercase tracking-widest z-20">
                      Most Popular Choice
                    </div>
                  )}

                  <div className="h-64 relative overflow-hidden">
                    <img 
                      src={pkg.image} 
                      alt={pkg.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2000ms]" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80"></div>
                    
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2 font-serif">{pkg.title}</h3>
                      <div className="flex items-center gap-2 text-slate-200 text-sm">
                        <Clock className="w-4 h-4 text-amber-400" />
                        <span>{pkg.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="mb-8">
                      <span className="text-sm text-slate-400 font-medium uppercase tracking-wide block mb-1">Total Price per person</span>
                      <div className="flex items-baseline gap-1">
                        <span className={`text-4xl font-black ${isPopular ? 'text-amber-600' : 'text-slate-800'}`}>{pkg.price}</span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 text-sm group-hover:text-slate-700 transition-colors">
                          <CheckCircle className={`w-5 h-5 flex-shrink-0 ${isPopular ? 'text-amber-500' : 'text-emerald-500'}`} />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <button 
                      className={`w-full py-4 rounded-xl font-bold text-sm tracking-wide transition-all shadow-lg transform active:scale-95 flex items-center justify-center gap-2 ${
                        isPopular
                          ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-amber-500/30 hover:shadow-amber-500/50'
                          : 'bg-slate-900 text-white hover:bg-emerald-600'
                      }`}
                    >
                      <Zap className="w-4 h-4 fill-current" />
                      View Full Itinerary
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Packages;