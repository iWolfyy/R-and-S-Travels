import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Testimonials = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <AnimatedSection>
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-0 -left-40 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl opacity-50"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Loved by <span className="text-amber-500">Travelers</span></h2>
            <p className="text-slate-600 text-lg">
              Here's what our guests have to say about their unforgettable Sri Lankan adventures with us.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="overflow-hidden relative">
              {/* Carousel Track */}
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((t, i) => (
                  <div key={i} className="w-full flex-shrink-0 p-4">
                    <div className="bg-slate-50 p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100 relative text-center min-h-[300px] flex flex-col justify-center">
                      <Quote className="absolute top-6 left-6 w-16 h-16 text-amber-200/50" />
                      <div className="flex justify-center gap-1 mb-6 text-amber-400">
                        {[...Array(t.rating)].map((_, starIndex) => <Star key={starIndex} className="w-5 h-5 fill-current" />)}
                      </div>
                      <p className="text-slate-700 text-lg font-medium leading-relaxed mb-6">"{t.text}"</p>
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500 text-lg">
                          {t.name[0]}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 text-base">{t.name}</p>
                          <p className="text-sm text-slate-500 font-medium">{t.country}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-amber-500 w-8' : 'bg-slate-300 hover:bg-slate-400'}`}
                  aria-label={`Go to slide ${i + 1}`}
                ></button>
              ))}
            </div>
          </div>

        </div>
      </section>
    </AnimatedSection>
  );
};

export default Testimonials;