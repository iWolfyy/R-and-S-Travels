import React from 'react';
import { Clock, CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Packages = ({ packages }) => {
  return (
    <AnimatedSection>
      <section id="packages" className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-amber-600 font-bold uppercase tracking-widest text-sm bg-amber-100 px-3 py-1 rounded-full">Top Rated</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-4">Curated <span className="text-amber-500">Holiday Packages</span></h2>
            <p className="text-slate-600 text-lg">
              All-inclusive itineraries designed by experts. Just pack your bags and we'll handle the rest.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col hover:border-emerald-200 transition-all">
                <div className="h-56 relative">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">{pkg.title}</h3>
                </div>
                <div className="p-8 flex-grow">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2 text-slate-600 bg-slate-100 px-3 py-1 rounded-lg">
                      <Clock className="w-4 h-4" /> <span className="font-semibold text-sm">{pkg.duration}</span>
                    </div>
                    <div className="text-2xl font-bold text-emerald-600">{pkg.price} <span className="text-sm text-slate-400 font-normal">/pp</span></div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" /> {feat}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3 rounded-xl border-2 border-emerald-600 text-emerald-700 font-bold hover:bg-emerald-600 hover:text-white transition-all">
                    View Itinerary
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Packages;