const GalleryGrid = ({ gallery, loading }) => {

  if (loading) {
    return (
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">
          Loading Gallery...
        </h2>
      </section>
    );
  }

  if (gallery.length === 0) {
    return (
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">
          No Images Found
        </h2>
      </section>
    );
  }

  return (
    <section className="pb-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {gallery.map((item) => (

            <div
              key={item._id}
              className="group relative overflow-hidden rounded-3xl shadow-xl"
            >

              <img
                src={`${import.meta.env.VITE_SERVER_URL}${item.image}`}
                alt={item.title}
                className="w-full h-80 object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">

                <div>

                  <span className="text-yellow-400 text-sm">
                    {item.category}
                  </span>

                  <h3 className="text-white text-2xl font-bold mt-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 mt-2">
                    {new Date(item.eventDate).toLocaleDateString()}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default GalleryGrid;