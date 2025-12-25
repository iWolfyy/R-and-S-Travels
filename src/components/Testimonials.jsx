import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ShieldCheck, Users } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Testimonials = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length, isPaused]);

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -50) {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    } else if (info.offset.x > 50) {
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  return (
    <AnimatedSection>
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-amber-600 font-bold uppercase tracking-widest text-sm bg-amber-100 px-3 py-1 rounded-full">Trusted Reviews</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-4 font-serif">Loved by <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">Travelers</span></h2>
          </div>
          
          <div className="max-w-4xl mx-auto relative px-4">
             {/* Carousel Wrapper */}
            <div 
              className="overflow-hidden relative rounded-[2rem] shadow-2xl bg-white/40 backdrop-blur-xl border border-white/50 p-2 cursor-grab active:cursor-grabbing"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <motion.div 
                className="flex" 
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                animate={{ x: `-${activeIndex * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {testimonials.map((t, i) => (
                  <div key={i} className="w-full flex-shrink-0 p-4 md:p-8 select-none">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center font-bold text-white text-2xl shadow-lg mb-6 transform hover:rotate-12 transition-transform">
                        {t.name[0]}
                      </div>
                      
                      <div className="flex gap-1 mb-6 text-amber-400">
                        {[...Array(t.rating)].map((_, starIndex) => <Star key={starIndex} className="w-6 h-6 fill-current drop-shadow-sm" />)}
                      </div>
                      
                      <Quote className="w-12 h-12 text-slate-200 mb-4 mx-auto" />
                      
                      <p className="text-slate-700 text-xl md:text-2xl font-medium leading-relaxed mb-8 italic font-serif max-w-2xl">
                        "{t.text}"
                      </p>
                      
                      <div>
                        <p className="font-bold text-slate-900 text-lg uppercase tracking-wide">{t.name}</p>
                        <p className="text-sm text-slate-500 font-semibold">{t.country}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Arrows (Dots) */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${i === activeIndex ? 'bg-amber-500 w-12' : 'bg-slate-300 w-2 hover:bg-slate-400'}`}
                  aria-label={`Go to slide ${i + 1}`}
                ></button>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="mt-16 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-8 text-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
               <div className="flex flex-col items-center gap-2">
                 <ShieldCheck className="w-8 h-8 text-emerald-600" />
                 <span className="font-bold text-sm text-slate-600">Verified Agency</span>
               </div>
               <div className="flex flex-col items-center gap-2">
                 <Users className="w-8 h-8 text-blue-600" />
                 <span className="font-bold text-sm text-slate-600">500+ Happy Guests</span>
               </div>
               <div className="flex flex-col items-center gap-2">
                 <Star className="w-8 h-8 text-amber-500" />
                 <span className="font-bold text-sm text-slate-600">4.9/5 Average Rating</span>
               </div>
               <div className="flex flex-col items-center gap-2">
                 <div className="font-serif font-black text-2xl text-slate-800 leading-none">24/7</div>
                 <span className="font-bold text-sm text-slate-600">Support</span>
               </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Testimonials;