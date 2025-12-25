import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Calendar, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter, 
  Menu, 
  X, 
  ChevronRight, 
  Sun, 
  Umbrella, 
  Camera, 
  Coffee,
  Star,
  Users,
  Clock,
  ArrowRight,
  Search,
  CheckCircle,
  Play
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = ['All', 'Beach', 'Heritage', 'Wildlife', 'Nature'];

  const destinations = [
    {
      id: 1,
      name: "Sigiriya Fortress",
      location: "Dambulla",
      desc: "The 8th wonder of the world, an ancient rock fortress.",
      image: "https://images.unsplash.com/photo-1612862862126-865765df2ded?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Heritage",
      price: "$50",
      rating: 4.9
    },
    {
      id: 2,
      name: "Ella Rock & Bridge",
      location: "Ella",
      desc: "Misty mountains, iconic trains, and endless tea estates.",
      image: "https://images.unsplash.com/photo-1566766189268-ecac9118f2b7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Nature",
      price: "$35",
      rating: 4.8
    },
    {
      id: 3,
      name: "Mirissa Shores",
      location: "South Coast",
      desc: "Whale watching and surfing on pristine golden sands.",
      image: "https://images.unsplash.com/photo-1519566335946-e6f65f0f4fdf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Beach",
      price: "$40",
      rating: 4.7
    },
    {
      id: 4,
      name: "Yala Safari",
      location: "Yala",
      desc: "Home to the highest density of leopards in the world.",
      image: "https://images.unsplash.com/photo-1603789764099-52b21a871336?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Wildlife",
      price: "$80",
      rating: 4.9
    },
    {
      id: 5,
      name: "Temple of Tooth",
      location: "Kandy",
      desc: "The sacred heart of Buddhism in Sri Lanka.",
      image: "https://images.unsplash.com/photo-1642095012223-65ee6d570974?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Heritage",
      price: "$20",
      rating: 4.8
    },
    {
      id: 6,
      name: "Unawatuna Bay",
      location: "Galle",
      desc: "Turquoise waters perfect for snorkeling and relaxation.",
      image: "https://images.unsplash.com/photo-1645839450773-e52355b2ac79?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Beach",
      price: "$30",
      rating: 4.6
    }
  ];

  const packages = [
    {
      title: "Cultural Triangle",
      duration: "5 Days",
      price: "$450",
      image: "https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: ["Anuradhapura", "Polonnaruwa", "Sigiriya", "Kandy"]
    },
    {
      title: "Tropical Paradise",
      duration: "7 Days",
      price: "$620",
      image: "https://plus.unsplash.com/premium_photo-1671358446946-8bd43ba08a6a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: ["Bentota", "Mirissa", "Galle Fort", "Hikkaduwa"]
    },
    {
      title: "Hill Country Loop",
      duration: "4 Days",
      price: "$380",
      image: "https://images.unsplash.com/photo-1619974643633-12acfdcedd16?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: ["Nuwara Eliya", "Ella Train", "Horton Plains", "Tea Factory"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Jenkins",
      country: "UK",
      text: "The best holiday of my life! R&S Travels handled everything perfectly. The driver was so knowledgeable.",
      rating: 5
    },
    {
      name: "Marco Rossi",
      country: "Italy",
      text: "Sri Lanka is beautiful, but seeing it with this team made it magical. Highly recommend the safari package.",
      rating: 5
    },
    {
      name: "Zhang Wei",
      country: "China",
      text: "Professional, punctual, and very friendly. The hotel choices were excellent.",
      rating: 4
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1651264042769-ef84e30f4ac8?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Sri Lanka Food
    "https://images.unsplash.com/photo-1624963145721-277432579507?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Beach
    "https://images.unsplash.com/photo-1571406761758-9a3eed5338ef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Surfing
    "https://images.unsplash.com/photo-1499848144902-af767f6d0c7f?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Train
    "https://images.unsplash.com/photo-1556525185-fc8a5a7aaa6b?q=80&w=727&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Culture
    "https://images.unsplash.com/photo-1566976273017-6e6df9bbdbee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  // Elephant
  ];

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const filteredDestinations = activeCategory === 'All' 
    ? destinations 
    : destinations.filter(d => d.category === activeCategory);

  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen flex flex-col overflow-x-hidden">
      
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 border-b border-transparent ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg border-slate-200 py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white shadow-lg transform group-hover:rotate-12 transition-transform">
              <MapPin className="w-6 h-6" />
            </div>
            <span className={`text-2xl font-extrabold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              R<span className="text-amber-500">&</span>S <span className="font-light">Travels</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Destinations', 'Packages', 'Gallery', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-semibold tracking-wide hover:text-amber-500 transition-colors relative group ${
                  isScrolled ? 'text-slate-600' : 'text-slate-100'
                }`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-amber-500/30 transition-all transform hover:-translate-y-0.5"
            >
              Plan My Trip
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-8 h-8 ${isScrolled ? 'text-slate-800' : 'text-white'}`} />
            ) : (
              <Menu className={`w-8 h-8 ${isScrolled ? 'text-slate-800' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl absolute top-full left-0 w-full shadow-2xl border-t border-slate-100 py-6 flex flex-col items-center space-y-6 animate-fadeIn">
            {['Home', 'Destinations', 'Packages', 'Gallery', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-slate-800 text-lg font-bold hover:text-amber-500"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1546708773-599c41f6c769?q=80&w=2070&auto=format&fit=crop" 
            alt="Sri Lanka Coast" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-900/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-amber-300 font-semibold uppercase tracking-wider text-xs mb-6 shadow-xl">
              <Sun className="w-4 h-4" /> Discover the Wonder of Asia
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight drop-shadow-2xl tracking-tight">
              Escape to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                Serendipity
              </span>
            </h1>
            
            <p className="text-slate-200 text-lg md:text-2xl mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
              Your gateway to pristine beaches, ancient kingdoms, and misty mountains. Curated luxury tours by R&S Travels.
            </p>

            {/* Quick Planner Widget */}
            <div className="bg-white rounded-2xl p-4 shadow-2xl max-w-4xl mx-auto transform translate-y-8 flex flex-col md:flex-row gap-4 items-center border border-slate-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                <div className="flex items-center gap-3 bg-slate-50 px-4 py-3 rounded-xl border border-slate-200">
                  <MapPin className="text-emerald-600 w-5 h-5" />
                  <div className="text-left">
                    <p className="text-xs text-slate-500 font-bold uppercase">Destination</p>
                    <input type="text" placeholder="Where do you want to go?" className="bg-transparent text-sm w-full font-semibold text-slate-700 outline-none placeholder-slate-400" />
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-slate-50 px-4 py-3 rounded-xl border border-slate-200">
                  <Calendar className="text-emerald-600 w-5 h-5" />
                  <div className="text-left">
                    <p className="text-xs text-slate-500 font-bold uppercase">Date</p>
                    <input type="text" placeholder="Add dates" className="bg-transparent text-sm w-full font-semibold text-slate-700 outline-none placeholder-slate-400" onFocus={(e) => e.target.type = 'date'} />
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-slate-50 px-4 py-3 rounded-xl border border-slate-200">
                  <Users className="text-emerald-600 w-5 h-5" />
                  <div className="text-left">
                    <p className="text-xs text-slate-500 font-bold uppercase">Travelers</p>
                    <select className="bg-transparent text-sm w-full font-semibold text-slate-700 outline-none">
                      <option>2 Adults</option>
                      <option>Family (4)</option>
                      <option>Solo</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <button className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 font-bold min-w-[140px]">
                <Search className="w-5 h-5" /> Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Popular <span className="text-emerald-600">Destinations</span></h2>
              <p className="text-slate-600 text-lg">
                Explore our hand-picked selection of Sri Lanka's most breathtaking locations.
              </p>
            </div>
            
            {/* Filter Tabs */}
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
            {filteredDestinations.map((dest) => (
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
        </div>
      </section>

      {/* Featured Packages (New Section) */}
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

      {/* Services Section */}
      <section id="services" className="py-24 bg-emerald-900 text-white relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute top-0 right-0 opacity-10">
          <svg width="400" height="400" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" fill="none" />
            <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="1" fill="none" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="text-emerald-300 font-bold tracking-widest uppercase">Why Choose R&S Travels</span>
              <h2 className="text-4xl md:text-6xl font-black mt-4 mb-6 leading-tight">
                Travel with <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Confidence</span>
              </h2>
              <p className="text-emerald-100 text-lg mb-10 leading-relaxed max-w-lg">
                We are a registered tourism agency with over 10 years of experience. Our fleet of luxury vehicles and English-speaking chauffeur guides ensure your safety and comfort.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-emerald-800/40 p-6 rounded-2xl border border-emerald-700/50 hover:bg-emerald-800/60 transition-colors">
                  <div className="bg-emerald-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-emerald-300">
                    <Umbrella className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">24/7 Support</h4>
                  <p className="text-sm text-emerald-200/70">Always here for you, from arrival to departure.</p>
                </div>
                <div className="bg-emerald-800/40 p-6 rounded-2xl border border-emerald-700/50 hover:bg-emerald-800/60 transition-colors">
                  <div className="bg-amber-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-amber-300">
                    <Camera className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Local Guides</h4>
                  <p className="text-sm text-emerald-200/70">Experts who know the hidden gems of the island.</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-amber-500/20 rounded-full blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=1000&auto=format&fit=crop" 
                alt="Culture" 
                className="relative z-10 rounded-3xl shadow-2xl border-4 border-emerald-800 w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-600">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-slate-900">5,000+</p>
                    <p className="text-sm text-slate-500 uppercase font-bold">Happy Travelers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-slate-900">Island <span className="text-emerald-600">Moments</span></h2>
            <p className="text-slate-500 mt-2">A glimpse into the colorful life of Sri Lanka</p>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((img, i) => (
              <div key={i} className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer">
                <img src={img} alt="Gallery" className="w-full h-auto rounded-2xl transform transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="text-white w-8 h-8" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">What Our Guests Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-amber-500 relative">
                <div className="flex gap-1 mb-4 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-600 italic mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-xs text-slate-400 font-bold uppercase">{t.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/20 rounded-full blur-[100px] pointer-events-none"></div>

            {/* Contact Info */}
            <div className="lg:w-5/12 p-12 lg:p-16 flex flex-col justify-between bg-gradient-to-br from-slate-900 to-slate-800 text-white relative z-10">
              <div>
                <h3 className="text-3xl font-bold mb-6">Let's Plan Your <br /><span className="text-amber-500">Adventure</span></h3>
                <p className="text-slate-400 mb-10 leading-relaxed">
                  Fill out the form and our travel experts will get back to you within 24 hours with a custom itinerary.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-emerald-400 border border-white/10">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Call Us</p>
                      <p className="font-semibold text-lg hover:text-amber-400 transition-colors cursor-pointer">+94 77 706 0577</p>
                      <p className="font-semibold text-lg hover:text-amber-400 transition-colors cursor-pointer">+94 71 1303123</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-emerald-400 border border-white/10">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Email Us</p>
                      <p className="font-semibold text-lg hover:text-amber-400 transition-colors cursor-pointer">rangajeewandw@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-emerald-400 border border-white/10">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Visit Us</p>
                      <p className="font-semibold text-lg">B 2/2/1,Chitra Lane Flat, Narahenpita, Colombo 05.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-emerald-600 hover:scale-110 transition-all border border-white/10">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-7/12 p-12 lg:p-16 bg-white">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 focus:bg-white transition-all outline-none font-semibold text-slate-700" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 focus:bg-white transition-all outline-none font-semibold text-slate-700" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 focus:bg-white transition-all outline-none font-semibold text-slate-700" placeholder="john@example.com" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Travel Date</label>
                    <input type="date" className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 focus:bg-white transition-all outline-none font-semibold text-slate-700" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Travelers</label>
                    <select className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 focus:bg-white transition-all outline-none font-semibold text-slate-700">
                      <option>2 Adults</option>
                      <option>1 Person</option>
                      <option>Family (3-4)</option>
                      <option>Large Group (5+)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 focus:bg-white transition-all outline-none font-semibold text-slate-700 resize-none" placeholder="Tell us about your dream trip..."></textarea>
                </div>

                <button type="button" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-5 rounded-xl shadow-lg shadow-emerald-500/30 transition-all transform hover:-translate-y-1">
                  Send Inquiry Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <span className="text-3xl font-extrabold text-white tracking-tight">
                R<span className="text-amber-500">&</span>S
              </span>
              <p className="mt-4 text-sm leading-relaxed">
                Crafting unforgettable journeys across the Pearl of the Indian Ocean. Licensed, trusted, and passionate about Sri Lanka.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Press</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Cancellation Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Subscribe</h4>
              <div className="flex flex-col gap-2">
                <input type="email" placeholder="Your email" className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-emerald-500 text-white" />
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold py-2 rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} R&S Travels. All rights reserved.</p>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-emerald-500 uppercase tracking-widest">System Operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;