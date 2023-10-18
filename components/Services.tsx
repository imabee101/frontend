const Services = () => {
    return (
      <section className="bg-gray-100 py-8">
        <h2 className="text-2xl text-center">Our Services</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Service cards */}
          <div className="bg-white rounded-lg p-4">Service 1</div>
          <div className="bg-white rounded-lg p-4">Service 2</div>
          <div className="bg-white rounded-lg p-4">Service 3</div>
        </div>
      </section>
    );
  };
  
  export default Services;
  