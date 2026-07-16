const MapSection = () => {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <span className="uppercase tracking-widest text-blue-700 font-semibold">
            Find Us
          </span>

          <h2 className="text-5xl font-bold mt-3">
            Our Location
          </h2>

        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl">

          <iframe
            title="School Location"
            src="https://www.google.com/maps?q=Panipat,Haryana&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            style={{ border: 0 }}
          ></iframe>

        </div>

      </div>

    </section>
  );
};

export default MapSection;