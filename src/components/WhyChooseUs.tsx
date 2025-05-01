
const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are at PDX Electric</h2>
            <p className="text-lg text-gray-700 mb-6">
              Whether you're having difficulties with your circuit breaker or recessed lighting, PDX Electric has the years of experience to properly diagnose and correct your electrical problem.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              For residential homeowners, we have extensive electrical knowledge in remodels including bathroom and kitchen renovations. For commercial property owners, we specialize in electrical installations and repairs for offices, restaurants, and retail stores.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="bg-pdx-gray rounded-lg p-5">
                <div className="text-pdx-blue font-bold text-xl mb-2">Licensed & Insured</div>
                <p>Fully licensed electrical contractors you can trust</p>
              </div>
              <div className="bg-pdx-gray rounded-lg p-5">
                <div className="text-pdx-blue font-bold text-xl mb-2">Experienced Team</div>
                <p>Years of expertise serving the Portland area</p>
              </div>
              <div className="bg-pdx-gray rounded-lg p-5">
                <div className="text-pdx-blue font-bold text-xl mb-2">Quality Work</div>
                <p>Attention to detail on every electrical project</p>
              </div>
              <div className="bg-pdx-gray rounded-lg p-5">
                <div className="text-pdx-blue font-bold text-xl mb-2">Competitive Pricing</div>
                <p>Fair and transparent pricing on all services</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/57188071-b7f6-4b85-a5a4-ab44187ae9e4.png" 
                alt="PDX Electric Team" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-pdx-yellow rounded-lg p-4 shadow-lg">
              <p className="text-2xl font-bold">20+ Years</p>
              <p>Serving Portland</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
