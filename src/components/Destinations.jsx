import React, { useState, useEffect } from 'react';
import { MapPin, Star, ArrowRight, ChevronUp, ChevronDown } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import useMediaQuery from '../hooks/useMediaQuery';

const Destinations = ({ destinations }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useMediaQuery('(max-width: 767px)');

  const categories = ['All', ...new Set(destinations.map(d => d.category))];

  const filteredDestinations = activeCategory === 'All' 
    ? destinations 
    : destinations.filter(d => d.category === activeCategory);

  useEffect(() => {
    setIsExpanded(false);
  }, [activeCategory]);

  const destinationsToShow = isMobile && !isExpanded 
    ? filteredDestinations.slice(0, 3) 
    : filteredDestinations;

  return (
    <AnimatedSection>
      <section id="destinations" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Popular <span className="text-emerald-600">Destinations</span></h2>
              <p className="text-slate-600 text-lg">
                Explore our hand-picked selection of Sri Lanka's most breathtaking locations.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat 
                      ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinationsToShow.map((dest) => (
              <div key={dest.id} className="group relative bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={dest.image} 
                    alt={dest.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-800 shadow-sm flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {dest.location}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-white text-sm font-bold flex items-center gap-1">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" /> {dest.rating}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-slate-900">{dest.name}</h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                    {dest.desc}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="text-xs font-semibold text-slate-400 uppercase">
                      Starting from <span className="block text-xl font-bold text-emerald-600">{dest.price}</span>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {isMobile && filteredDestinations.length > 3 && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="bg-slate-100 text-slate-700 px-8 py-3 rounded-full font-bold hover:bg-slate-200 transition-colors flex items-center gap-2 mx-auto"
              >
                <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
                {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
            </div>
          )}

        </div>
      </section>
    </AnimatedSection>
  );
};

export default Destinations;
