
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Portland, OR",
    quote: "PDX Electric did an amazing job installing new lighting throughout our home. The team was professional, clean, and completed the work ahead of schedule. I highly recommend them!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Beaverton, OR",
    quote: "We had PDX Electric install an EV charging station in our garage. They were knowledgeable, efficient, and the price was very fair. Will definitely use them again for future electrical needs.",
    rating: 5
  },
  {
    id: 3,
    name: "Lisa Rodriguez",
    location: "Lake Oswego, OR",
    quote: "After moving into our new home, we needed several electrical upgrades. PDX Electric was responsive, provided a detailed quote, and did excellent work. Our home is now safer and more functional.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-pdx-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Hear from our satisfied customers about their experience with PDX Electric
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12">
            <div className="absolute top-4 right-4 flex">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pdx-yellow" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            
            <div>
              <p className="text-xl md:text-2xl mb-6 italic">
                "{testimonials[activeIndex].quote}"
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-bold text-lg">{testimonials[activeIndex].name}</p>
                  <p className="opacity-80">{testimonials[activeIndex].location}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
