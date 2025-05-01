
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/7a6e3696-30c7-4dbc-ba32-19e9fbef51b0.png" 
              alt="PDX Electric Logo" 
              className="h-14" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-pdx-blue transition-colors">Home</Link>
            <Link to="/services" className="font-medium hover:text-pdx-blue transition-colors">Services</Link>
            <Link to="/contact" className="font-medium hover:text-pdx-blue transition-colors">Contact</Link>
            <a href="tel:503-639-9708" className="font-bold text-pdx-blue hover:text-pdx-darkblue transition-colors">503-639-9708</a>
            <Link to="/contact" className="btn-primary">
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="flex flex-col py-4">
            <Link to="/" className="px-4 py-2 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/services" className="px-4 py-2 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/contact" className="px-4 py-2 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <a href="tel:503-639-9708" className="px-4 py-2 hover:bg-gray-100 font-bold text-pdx-blue">Call: 503-639-9708</a>
            <Link to="/contact" className="mx-4 mt-2 btn-primary text-center" onClick={() => setIsMenuOpen(false)}>
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
