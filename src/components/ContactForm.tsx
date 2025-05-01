
import { useState } from "react";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    serviceType: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Display success message
    toast.success("Thank you! We'll contact you soon.", {
      description: "Your request has been submitted successfully.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      serviceType: "",
      message: "",
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-8">
      <h3 className="text-2xl font-bold mb-6">Request a Free Estimate</h3>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pdx-blue"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pdx-blue"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pdx-blue"
              placeholder="(503) 123-4567"
            />
          </div>
          
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Service Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pdx-blue"
              placeholder="123 Main St, Portland, OR"
            />
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
              Type of Service Needed *
            </label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pdx-blue"
            >
              <option value="">Select a service</option>
              <option value="residential">Residential Electrical</option>
              <option value="commercial">Commercial Electrical</option>
              <option value="panel">Panel Upgrades</option>
              <option value="lighting">Lighting Installation</option>
              <option value="ev-charging">EV Charging Station</option>
              <option value="troubleshooting">Troubleshooting & Repairs</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Project Details
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pdx-blue"
              placeholder="Please describe your project or electrical needs..."
            ></textarea>
          </div>
        </div>
        
        <div className="mt-6">
          <button type="submit" className="w-full btn-primary">
            Submit Request
          </button>
        </div>
        
        <p className="text-sm text-gray-500 mt-4">
          By submitting this form, you agree to be contacted regarding your request.
          We'll respond to your inquiry within 1 business day.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
