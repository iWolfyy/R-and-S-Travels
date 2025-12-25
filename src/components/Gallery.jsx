import React, { useState } from 'react';
import { Instagram, ChevronUp, ChevronDown } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import useMediaQuery from '../hooks/useMediaQuery';

const Gallery = ({ galleryImages }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useMediaQuery('(max-width: 767px)');

  const imagesToShow = isMobile && !isExpanded 
    ? galleryImages.slice(0, 2) 
    : galleryImages;

  return (
    <AnimatedSection>
      <section id="gallery" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-slate-900">Island <span className="text-emerald-600">Moments</span></h2>
            <p className="text-slate-500 mt-2">A glimpse into the colorful life of Sri Lanka</p>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {imagesToShow.map((img, i) => (
              <div key={i} className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer">
                <img src={img} alt="Gallery" className="w-full h-auto rounded-2xl transform transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="text-white w-8 h-8" />
                </div>
              </div>
            ))}
          </div>
          
          {isMobile && galleryImages.length > 2 && (
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

export default Gallery;
