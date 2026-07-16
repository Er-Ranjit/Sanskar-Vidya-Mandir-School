import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-800 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 text-center border border-white/20 shadow-2xl">

          <span className="uppercase tracking-widest text-yellow-400 font-semibold">
            Admissions Open
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Give Your Child The Best Education
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-200 leading-8">
            Join Sanskar Vidya Mandir and help your child build a bright future
            with quality education, experienced teachers, modern classrooms,
            practical learning and strong moral values.
          </p>

          <div className="flex justify-center gap-5 flex-wrap mt-10">

            <Link
              to="/admission"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition"
            >
              Apply Now
              <FaArrowRight />
            </Link>

            <Link
              to="/contact"
              className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-xl font-semibold transition"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTA;