
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-pdx-blue to-pdx-darkblue">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-pdx-blue opacity-60"></div>
        <img 
          src="/lovable-uploads/9e36d103-b641-45ea-9846-af67c4e48673.png" 
          alt="Portland City Skyline" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 py-24 md:py-36 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Trusted Electrical Services in Portland
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in opacity-90">
            Professional electrical solutions for residential and commercial properties throughout the greater Portland area.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary">
              Get a Free Estimate
            </Link>
            <Link to="/services" className="bg-white text-pdx-blue hover:bg-gray-100 font-semibold py-3 px-6 rounded-md shadow-md transition-all duration-200 inline-flex items-center justify-center">
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
