import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaPhoneAlt,
} from "react-icons/fa";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-800 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 shadow-2xl">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left */}

            <div>

              <span className="uppercase tracking-widest text-yellow-400 font-semibold">
                Admissions Open
              </span>

              <h2 className="text-5xl font-bold mt-5 leading-tight">
                Secure Your Child's Future Today
              </h2>

              <p className="mt-6 text-lg text-gray-200 leading-8">

                Join our school family and give your child the best
                education with experienced teachers, modern classrooms,
                advanced laboratories and holistic development.

              </p>

            </div>

            {/* Right */}

            <div className="flex flex-col gap-5">

              <Link
                to="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-4 rounded-xl flex justify-center items-center gap-3 transition"
              >

                Apply For Admission

                <FaArrowRight />

              </Link>

              <a
                href="tel:+919999999999"
                className="border-2 border-white py-4 rounded-xl flex justify-center items-center gap-3 hover:bg-white hover:text-blue-900 transition"
              >

                <FaPhoneAlt />

                Call Admission Office

              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTA;