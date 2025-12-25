import React, { useState } from 'react';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Gallery = ({ galleryImages }) => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImg(galleryImages[index]);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImg(null);
    document.body.style.overflow = 'auto';
  };

  const navigate = (direction, e) => {
    e.stopPropagation();
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = galleryImages.length - 1;
    if (newIndex >= galleryImages.length) newIndex = 0;
    
    setCurrentIndex(newIndex);
    setSelectedImg(galleryImages[newIndex]);
  };

  return (
    <AnimatedSection>
      <section id="gallery" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm bg-emerald-50 px-3 py-1 rounded-full">Visual Journey</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 font-serif">Captured <span className="text-amber-500">Moments</span></h2>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx} 
                className="group relative rounded-2xl overflow-hidden break-inside-avoid shadow-lg cursor-zoom-in"
                onClick={() => openLightbox(idx)}
              >
                <img 
                  src={img} 
                  alt={`Gallery ${idx + 1}`} 
                  className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImg && (
          <div 
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>

            <button 
              className="absolute left-4 md:left-8 text-white/50 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all hidden md:block"
              onClick={(e) => navigate(-1, e)}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <img 
              src={selectedImg} 
              alt="Fullscreen view" 
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain animate-[fadeInUp_0.5s_ease-out]"
              onClick={(e) => e.stopPropagation()}
            />

            <button 
              className="absolute right-4 md:right-8 text-white/50 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all hidden md:block"
              onClick={(e) => navigate(1, e)}
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            
            <div className="absolute bottom-6 left-0 w-full text-center text-white/60 text-sm font-light tracking-widest">
              {currentIndex + 1} / {galleryImages.length}
            </div>
          </div>
        )}
      </section>
    </AnimatedSection>
  );
};

export default Gallery;
