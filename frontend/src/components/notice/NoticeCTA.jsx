import { Link } from "react-router-dom";

const NoticeCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-800 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 text-center">

          <h2 className="text-5xl font-bold">
            Stay Connected With Our School
          </h2>

          <p className="mt-6 text-lg text-gray-200 max-w-3xl mx-auto leading-8">
            Never miss important announcements, examination updates,
            admission notifications and school activities. Stay connected
            with Sanskar Vidya Mandir.
          </p>

          <div className="flex justify-center gap-5 mt-10 flex-wrap">

            <Link
              to="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-xl font-semibold transition"
            >
              Contact Us
            </Link>

            <Link
              to="/admission"
              className="border-2 border-white px-8 py-3 rounded-xl hover:bg-white hover:text-blue-900 transition"
            >
              Apply Admission
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default NoticeCTA;