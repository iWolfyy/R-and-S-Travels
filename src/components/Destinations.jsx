import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Destinations = ({ destinations }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(destinations.map(d => d.category))];

  const filteredDestinations = activeCategory === 'All' 
    ? destinations 
    : destinations.filter(d => d.category === activeCategory);

  return (
    <AnimatedSection>
      <section id="destinations" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 font-serif">Popular <span className="text-emerald-600">Destinations</span></h2>
              <p className="text-slate-600 text-lg">
                Explore our hand-picked selection of Sri Lanka's most breathtaking locations.
              </p>
            </div>
            
            {/* Category Filter - Scrollable on mobile */}
            <div className="flex flex-wrap gap-2 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
              {categories.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                    activeCategory === cat 
                      ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200 scale-105' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Destination Cards - Grid on Desktop, Scroll Carousel on Mobile */}
          <motion.div 
            className="flex overflow-x-auto snap-x snap-mandatory pb-12 gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible -mx-6 px-6 md:mx-0 md:px-0"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {filteredDestinations.map((dest) => (
              <motion.div 
                key={dest.id} 
                layout
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" }
                  }
                }}
                whileHover={{ y: -12, transition: { type: "spring", stiffness: 300 } }}
                className="min-w-[85vw] md:min-w-0 snap-center group relative bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl transition-shadow duration-500"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={dest.image} 
                    alt={dest.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2000ms]" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-800 shadow-sm flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {dest.location}
                  </div>
                  <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-sm font-bold flex items-center gap-1 shadow-sm">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" /> {dest.rating}
                  </div>
                </div>
                
                <div className="p-8 relative">
                  {/* Floating Action Button-ish Arrow */}
                  <div className="absolute -top-6 right-8 w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-45deg]">
                    <ArrowRight className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-2 font-serif group-hover:text-emerald-700 transition-colors">{dest.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {dest.desc}
                  </p>
                  
                  <div className="pt-6 border-t border-slate-100 flex items-baseline justify-between">
                     <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Starting from</span>
                     <span className="text-2xl font-black text-emerald-600 block">{dest.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    </AnimatedSection>
  );
};

export default Destinations;
