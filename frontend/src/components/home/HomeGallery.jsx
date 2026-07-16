import { useEffect, useState } from "react";
import { getGallery } from "../../services/galleryService";

const HomeGallery = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const { data } = await getGallery();
      setGallery(data.gallery || []);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            School Gallery
          </h2>

          <p className="text-gray-500 mt-3">
            Memories of School Activities
          </p>
        </div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">

          {gallery.slice(0, 8).map((item) => (

            <div
              key={item._id}
              className="overflow-hidden rounded-xl shadow-lg"
            >

              <img
                src={`http://localhost:5000${item.image}`}
                alt={item.title}
                className="w-full h-64 object-cover hover:scale-110 transition duration-500"
              />

              <div className="p-4">

                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.category}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default HomeGallery;