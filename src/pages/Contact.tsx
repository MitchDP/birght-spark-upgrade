
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Contact Hero */}
      <div className="pt-20 bg-pdx-blue text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact PDX Electric</h1>
            <p className="text-xl opacity-90">
              Get in touch for a service call, free estimate, or to learn more about our electrical services.
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Content */}
      <section className="section-padding bg-pdx-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            
            <div>
              <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-pdx-blue flex items-center justify-center text-white mr-4">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-500">Phone</p>
                      <a href="tel:503-639-9708" className="text-lg font-semibold text-pdx-blue hover:text-pdx-darkblue transition-colors">
                        503-639-9708
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-pdx-blue flex items-center justify-center text-white mr-4">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-500">Email</p>
                      <a href="mailto:info@pdxelectric.com" className="text-lg font-semibold text-pdx-blue hover:text-pdx-darkblue transition-colors">
                        info@pdxelectric.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-pdx-blue flex items-center justify-center text-white mr-4">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-500">Service Area</p>
                      <p className="text-lg font-semibold">
                        Portland, OR & Surrounding Areas
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-pdx-blue flex items-center justify-center text-white mr-4">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-500">Hours</p>
                      <div className="text-lg font-semibold">
                        <p>Monday - Friday: 8am - 6pm</p>
                        <p>Saturday: 9am - 3pm</p>
                        <p>Sunday: Closed</p>
                        <p className="mt-2 text-sm text-pdx-blue">
                          Emergency service available 24/7
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Service Areas</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-pdx-blue" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Portland</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-pdx-blue" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Beaverton</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-pdx-blue" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Lake Oswego</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-pdx-blue" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Hillsboro</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-pdx-blue" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Tigard</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-pdx-blue" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Gresham</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-pdx-blue" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Tualatin</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-pdx-blue" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Wilsonville</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-pdx-blue" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>West Linn</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-pdx-blue" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Oregon City</span>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-gray-600 text-sm">
                    Not sure if we service your area? Give us a call at <a href="tel:503-639-9708" className="text-pdx-blue font-semibold">503-639-9708</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our electrical services and procedures.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-pdx-gray rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">How quickly can you respond to electrical emergencies?</h3>
                <p className="text-gray-700">
                  We offer 24/7 emergency electrical services for urgent issues. For non-emergency service, we typically schedule appointments within 24-48 hours based on availability.
                </p>
              </div>
              
              <div className="bg-pdx-gray rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Do you provide free estimates?</h3>
                <p className="text-gray-700">
                  Yes, we provide free estimates for most electrical projects. Contact us to schedule an on-site assessment and detailed quote for your specific needs.
                </p>
              </div>
              
              <div className="bg-pdx-gray rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Are you licensed and insured?</h3>
                <p className="text-gray-700">
                  Yes, PDX Electric is fully licensed, bonded, and insured. We maintain all required certifications and insurance coverage to protect our customers and provide peace of mind.
                </p>
              </div>
              
              <div className="bg-pdx-gray rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Do you offer warranties on your electrical work?</h3>
                <p className="text-gray-700">
                  Yes, we stand behind our work with a comprehensive warranty. All our electrical installations and repairs come with a satisfaction guarantee and workmanship warranty.
                </p>
              </div>
              
              <div className="bg-pdx-gray rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">What forms of payment do you accept?</h3>
                <p className="text-gray-700">
                  We accept cash, checks, and all major credit cards. For larger projects, we can discuss payment plans and financing options tailored to your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
