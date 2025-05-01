
import { Link } from "react-router-dom";
import { Home, Plug, Wrench, Lightbulb, MapPin, CarFront } from "lucide-react";

const services = [
  {
    title: "Residential Services",
    icon: <Home size={32} />,
    description: "Complete electrical solutions for homes including repairs, upgrades, and new installations.",
    link: "/services#residential",
    image: "/lovable-uploads/14969035-8add-4a5d-8213-9ca2a1ef8904.png"
  },
  {
    title: "Commercial Services",
    icon: <MapPin size={32} />,
    description: "Expert electrical work for offices, retail spaces, restaurants and other commercial properties.",
    link: "/services#commercial",
    image: "/lovable-uploads/292a7e56-9a43-4a64-9008-4b7f3fa09900.png"
  },
  {
    title: "Panel Upgrades",
    icon: <Wrench size={32} />,
    description: "Electrical panel replacements and upgrades to improve safety and capacity.",
    link: "/services#panel",
    image: "/lovable-uploads/f7765fff-49f5-4dd3-8140-46d4708442d4.png"
  },
  {
    title: "Lighting Solutions",
    icon: <Lightbulb size={32} />,
    description: "Modern lighting installation for kitchens, bathrooms, and entire home renovations.",
    link: "/services#lighting",
    image: "/lovable-uploads/6517c628-c25a-456e-a7df-a1abb3a5f51c.png"
  },
  {
    title: "Electric Vehicle Charging",
    icon: <CarFront size={32} />,
    description: "Professional installation of EV charging stations for your home or business.",
    link: "/services#ev-charging",
    image: "/lovable-uploads/e0964ebc-6604-42cb-bc85-14dacf4fe9cc.png"
  },
  {
    title: "Troubleshooting & Repairs",
    icon: <Plug size={32} />,
    description: "Quick diagnostics and effective solutions for all your electrical problems.",
    link: "/services#troubleshooting",
    image: "/lovable-uploads/180a8130-8375-4016-875f-3892adea6192.png"
  }
];

const ServiceHighlights = () => {
  return (
    <section className="section-padding bg-pdx-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Electrical Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            PDX Electric offers comprehensive electrical services for residential and commercial properties throughout Portland.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="text-pdx-blue mr-3">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to={service.link} className="text-pdx-blue hover:text-pdx-darkblue font-medium inline-flex items-center transition-colors">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services" className="btn-secondary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
