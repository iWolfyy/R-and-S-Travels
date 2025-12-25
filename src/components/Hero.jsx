import React from 'react';
import Slideshow from './Slideshow';
import { ArrowRight, Sparkles } from 'lucide-react'; // Import Sparkles

const Hero = ({ images }) => {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen">
      <Slideshow images={images} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex items-center justify-center">
        <div className="text-center text-white p-4 max-w-4xl mx-auto">
          
          {/* New Badge */}
          <div 
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]"
            style={{ animationDelay: '0.1s' }}
          >
            <Sparkles className="w-5 h-5 text-amber-300" />
            <span className="text-sm font-medium tracking-wider uppercase">Discover the Wonder of Asia</span>
          </div>

          <h1 
            className="text-5xl md:text-8xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-orange-500 drop-shadow-lg opacity-0 animate-[fadeInUp_1s_ease-out_forwards]"
            style={{ animationDelay: '0.3s' }}
          >
            Discover Sri Lanka
          </h1>
          <p 
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-slate-200 drop-shadow-md opacity-0 animate-[fadeInUp_1s_ease-out_forwards]"
            style={{ animationDelay: '0.5s' }}
          >
            Your Unforgettable Adventure Awaits. We provide the best travel packages to explore the pearl of the Indian Ocean.
          </p>
          <div 
            className="opacity-0 animate-[fadeInUp_1s_ease-out_forwards]"
            style={{ animationDelay: '0.7s' }}
          >
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-amber-500/30 transition-all transform hover:-translate-y-1 hover:scale-105 flex items-center gap-2 mx-auto animate-pulse"
            >
              <span>Plan My Trip</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;