import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";

import { getSettings } from "../../services/settingsService";

const Footer = () => {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const { data } = await getSettings();
      setSettings(data.settings);
    } catch (error) {
      console.log(error);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="bg-slate-950 text-gray-300">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

            {/* School */}

            <div>

              {settings?.logo && (

                <img
                  src={`${import.meta.env.VITE_SERVER_URL}${settings.logo}`}
                  alt="School Logo"
                  className="w-20 h-20 rounded-full bg-white p-2 mb-5"
                />

              )}

              <h2 className="text-2xl font-bold text-white">

                {settings?.schoolName || "Sanskar Vidya Mandir"}

              </h2>

              <p className="mt-5 leading-7">

                {settings?.about ||
                  "Providing quality education with discipline, values and innovation for a brighter future."}

              </p>

            </div>

            {/* Quick Links */}

            <div>

              <h3 className="text-xl font-bold text-white mb-6">
                Quick Links
              </h3>

              <div className="space-y-4">

                <Link to="/" className="block hover:text-yellow-400">
                  Home
                </Link>

                <Link to="/about" className="block hover:text-yellow-400">
                  About
                </Link>

                <Link to="/academics" className="block hover:text-yellow-400">
                  Academics
                </Link>

                <Link to="/gallery" className="block hover:text-yellow-400">
                  Gallery
                </Link>

                <Link to="/contact" className="block hover:text-yellow-400">
                  Contact
                </Link>

              </div>

            </div>

            {/* Contact */}

            <div>

              <h3 className="text-xl font-bold text-white mb-6">
                Contact
              </h3>

              <div className="space-y-5">

                <p className="flex gap-3">

                  <FaPhoneAlt className="mt-1 text-blue-400" />

                  {settings?.phone}

                </p>

                <p className="flex gap-3">

                  <FaEnvelope className="mt-1 text-blue-400" />

                  {settings?.email}

                </p>

                <p className="flex gap-3">

                  <FaMapMarkerAlt className="mt-1 text-blue-400" />

                  {settings?.address}

                </p>

              </div>

            </div>

            {/* Social */}

            <div>

              <h3 className="text-xl font-bold text-white mb-6">
                Follow Us
              </h3>

              <div className="flex gap-4">

                <a
                  href={settings?.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-blue-700 flex justify-center items-center hover:scale-110 transition"
                >
                  <FaFacebookF />
                </a>

                <a
                  href={settings?.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-pink-600 flex justify-center items-center hover:scale-110 transition"
                >
                  <FaInstagram />
                </a>

                <a
                  href={settings?.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-red-600 flex justify-center items-center hover:scale-110 transition"
                >
                  <FaYoutube />
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-gray-700">

          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-5">

            <p>

              © {new Date().getFullYear()}{" "}
              {settings?.schoolName || "Sanskar Vidya Mandir"}.
              All Rights Reserved.

            </p>

            <button
              onClick={scrollTop}
              className="w-12 h-12 rounded-full bg-blue-700 hover:bg-blue-800 flex justify-center items-center transition"
            >
              <FaArrowUp />
            </button>

          </div>

        </div>

      </footer>
    </>
  );
};

export default Footer;