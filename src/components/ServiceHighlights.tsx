
import { Link } from "react-router-dom";
import { Home, Plug, Wrench, Lightbulb, MapPin, CarFront } from "lucide-react";

const services = [
  {
    title: "Residential Services",
    icon: <Home size={32} />,
    description: "Complete electrical solutions for homes including repairs, upgrades, and new installations.",
    link: "/services#residential"
  },
  {
    title: "Commercial Services",
    icon: <MapPin size={32} />,
    description: "Expert electrical work for offices, retail spaces, restaurants and other commercial properties.",
    link: "/services#commercial"
  },
  {
    title: "Panel Upgrades",
    icon: <Wrench size={32} />,
    description: "Electrical panel replacements and upgrades to improve safety and capacity.",
    link: "/services#panel"
  },
  {
    title: "Lighting Solutions",
    icon: <Lightbulb size={32} />,
    description: "Modern lighting installation for kitchens, bathrooms, and entire home renovations.",
    link: "/services#lighting"
  },
  {
    title: "Electric Vehicle Charging",
    icon: <CarFront size={32} />,
    description: "Professional installation of EV charging stations for your home or business.",
    link: "/services#ev-charging"
  },
  {
    title: "Troubleshooting & Repairs",
    icon: <Plug size={32} />,
    description: "Quick diagnostics and effective solutions for all your electrical problems.",
    link: "/services#troubleshooting"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-card-icon">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link to={service.link} className="text-pdx-blue hover:text-pdx-darkblue font-medium inline-flex items-center transition-colors">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
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
