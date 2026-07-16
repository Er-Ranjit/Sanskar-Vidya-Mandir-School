import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";

const ContactCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-800 text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 lg:p-16 shadow-2xl">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left */}

            <div>

              <span className="uppercase tracking-[5px] text-yellow-400 font-semibold">
                Contact Our School
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mt-5 leading-tight">
                Let's Build Your Child's Bright Future Together
              </h2>

              <p className="mt-6 text-gray-200 leading-8 text-lg">
                We welcome parents and students to become a part of
                Sanskar Vidya Mandir. Contact us today for admissions,
                school information or any other enquiry.
              </p>

            </div>

            {/* Right */}

            <div className="flex flex-col gap-5">

              <Link
                to="/admission"
                className="flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-4 rounded-xl transition duration-300"
              >
                Apply For Admission

                <FaArrowRight />
              </Link>

              <Link
                to="/"
                className="flex items-center justify-center gap-3 border-2 border-white hover:bg-white hover:text-blue-900 py-4 rounded-xl transition duration-300"
              >
                <FaPhoneAlt />

                Call Us Now
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactCTA;