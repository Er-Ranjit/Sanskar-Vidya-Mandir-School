import { Link } from "react-router-dom";
import { FaImages, FaArrowRight } from "react-icons/fa";

const GalleryCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-800 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-12 shadow-2xl">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left */}

            <div>

              <span className="uppercase tracking-widest text-yellow-400 font-semibold">
                Our Gallery
              </span>

              <h2 className="text-5xl font-bold mt-5 leading-tight">
                Every Picture Tells A Story
              </h2>

              <p className="mt-6 text-lg text-gray-200 leading-8">
                Explore memorable events, cultural programs,
                sports competitions, classroom activities and
                many more wonderful moments of our school.
              </p>

            </div>

            {/* Right */}

            <div className="flex flex-col gap-5">

              <Link
                to="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-black py-4 rounded-xl flex justify-center items-center gap-3 font-semibold transition"
              >
                <FaImages />

                Visit Our Campus

                <FaArrowRight />
              </Link>

              <Link
                to="/admission"
                className="border-2 border-white py-4 rounded-xl flex justify-center items-center gap-3 hover:bg-white hover:text-blue-900 transition"
              >
                Apply For Admission
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default GalleryCTA;