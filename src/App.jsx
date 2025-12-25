import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Packages from './components/Packages';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import Preloader from './components/Preloader';
import SmoothScroll from './components/SmoothScroll';
import { destinations, packages, testimonials, galleryImages } from './data';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const openModal = () => setIsModalOpen(true);

  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen flex flex-col overflow-x-hidden">
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <div className="animate-fadeIn">
            <Navbar 
              isScrolled={isScrolled} 
              scrollToSection={scrollToSection} 
              isMobileMenuOpen={isMobileMenuOpen}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
              openModal={openModal}
            />
            <Hero images={galleryImages} openModal={openModal} />
            <main>
              <Destinations destinations={destinations} />
              <Packages packages={packages} />
              <Services />
              <Gallery galleryImages={galleryImages} />
              <Testimonials testimonials={testimonials} />
              <Contact />
            </main>
            <Footer />
            <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default App;
