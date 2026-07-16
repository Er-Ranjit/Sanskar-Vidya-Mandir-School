import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import { getSettings } from "../../services/settingsService";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [settings, setSettings] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Admission", path: "/admission" },
    { name: "Gallery", path: "/gallery" },
    { name: "Events", path: "/events" },
    { name: "Notice", path: "/notice" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    fetchSettings();

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fetchSettings = async () => {
    try {
      const { data } = await getSettings();
      setSettings(data.settings);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-blue-900 shadow-lg py-2"
          : "bg-blue-900/90 backdrop-blur-md py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                {/* ===========================
            Logo
        ============================ */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <img
            src={
              settings?.logo
                ? `http://localhost:5000${settings.logo}`
                : "/logo.png"
            }
            alt="School Logo"
            className={`rounded-full border-2 border-white object-cover transition-all duration-300 ${
              isScrolled
                ? "w-10 h-10"
                : "w-12 h-12"
            }`}
          />
        </Link>

        {/* ===========================
            Desktop Menu
        ============================ */}

        <div className="hidden lg:flex items-center gap-8">

          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative font-medium transition-all duration-300 hover:text-yellow-300 ${
                  isActive
                    ? "text-yellow-400"
                    : "text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

        </div>

        {/* ===========================
            Right Side
        ============================ */}

        <div className="hidden lg:flex items-center gap-4">

          <Link
            to="/login"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
          >
            Admin Login
          </Link>

        </div>

        {/* ===========================
            Mobile Button
        ============================ */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>
            {/* ===========================
          Mobile Menu
      ============================ */}

      {menuOpen && (
        <div className="lg:hidden bg-blue-900 border-t border-blue-800 shadow-xl animate-fadeIn">

          <div className="px-6 py-5 space-y-2">

            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-yellow-400 text-black font-semibold"
                      : "text-white hover:bg-blue-800 hover:pl-6"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="block mt-4 bg-yellow-400 hover:bg-yellow-500 text-center text-black font-semibold py-3 rounded-lg transition-all duration-300"
            >
              Admin Login
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar;