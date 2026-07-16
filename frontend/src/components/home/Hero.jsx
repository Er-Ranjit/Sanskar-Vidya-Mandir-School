import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import hero1 from "../../assets/image-slider2.png";
import hero2 from "../../assets/image-slider1.png";
import hero3 from "../../assets/image-slider3.png";
import hero4 from "../../assets/image-slider4.png";
import hero5 from "../../assets/image-slider5.png";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { getSettings } from "../../services/settingsService";

const Hero = () => {
  const [settings, setSettings] = useState(null);

  const slides = [
    hero1,
    hero2,
    hero3,
    hero4,
    hero5,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

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

  // ==========================
  // Auto Slider
  // ==========================

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // ==========================
  // Next Slide
  // ==========================

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  // ==========================
  // Previous Slide
  // ==========================

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    /* Changed fixed height to h-[400px] without min-height constraints */
    <section className="relative h-[410px] overflow-hidden bg-slate-900">
      {/* ===========================
          Background Images
      ============================ */}
      {slides.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-1000 ease-out ${
            currentSlide === index
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover select-none"
          />
        </div>
      ))}

      {/* Modern Gradient Overlays */}
      <div className="absolute inset-0 bg-neutral-950/50 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-neutral-950/80"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/50 via-transparent to-transparent"></div>

      {/* Hero Content - Adjusted internal sizing for 400px height */}
      <div className="relative z-20 flex items-center justify-center h-full text-center px-4 sm:px-6">
        <div className="max-w-4xl backdrop-blur-[2px] bg-black/10 p-4 md:p-5 rounded-2xl border border-white/5 shadow-xl flex flex-col items-center justify-center w-full">
          
          {/* School Logo - Adjusted for smaller viewport layout */}
          {settings?.logo && (
            <div className="w-full flex justify-center mb-3">
              <div className="relative inline-block group">
                <div className="absolute inset-0 rounded-full bg-amber-400 blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                <img
                  src={`${import.meta.env.VITE_SERVER_URL}${settings.logo}`}
                  alt="School Logo"
                  className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-white p-1 border-2 border-amber-400 shadow-md block mx-auto"
                />
              </div>
            </div>
          )}

          {/* Welcome Tag - Reduced margin */}
          <span className="inline-block text-amber-400 text-[10px] md:text-xs font-bold uppercase tracking-[3px] mb-1.5 px-2.5 py-0.5 bg-amber-400/10 rounded-full border border-amber-400/20">
            Welcome To
          </span>

          {/* School Name - Reduced typography sizes to balance layout */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight drop-shadow-md w-full">
            {settings?.schoolName || "Sanskar Vidya Mandir"}
          </h1>

          {/* About Paragraph - Balanced text length padding */}
          <p className="mt-2 max-w-xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed text-slate-200/90 drop-shadow w-full line-clamp-2 sm:line-clamp-none">
            {settings?.about ||
              "Empowering Young Minds Through Quality Education, Discipline, Innovation and Strong Moral Values."}
          </p>

          {/* Interactive Buttons - Compressed spacing for optimal balance */}
          <div className="mt-5 flex flex-row justify-center items-center gap-3 w-full max-w-sm sm:max-w-none">
            <Link
              to="/admission"
              className="flex-1 sm:flex-initial bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-bold px-5 py-2.5 rounded-lg shadow-md text-xs md:text-sm transition-all duration-300 hover:scale-[1.02] text-center"
            >
              Apply Admission
            </Link>

            <Link
              to="/contact"
              className="flex-1 sm:flex-initial bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-2.5 rounded-lg border border-white/20 backdrop-blur-md text-xs md:text-sm transition-all duration-300 hover:scale-[1.02] text-center"
            >
              Contact Us
            </Link>
          </div>

          {/* Slider Dots - Compact top spacing */}
          <div className="flex justify-center gap-2 mt-5 w-full">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-500 rounded-full h-1.5 focus:outline-none ${
                  currentSlide === index
                    ? "w-6 bg-amber-400 shadow-sm"
                    : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* ===========================
          Navigation Controls (Chevrons) - Scaled down size
      ============================ */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-30
        bg-black/20 text-white hover:bg-amber-400 hover:text-neutral-950
        backdrop-blur-md border border-white/10 hover:border-amber-400
        p-2.5 rounded-lg hidden md:block
        transition-all duration-300 hover:scale-105 shadow-md"
        aria-label="Previous slide"
      >
        <FaChevronLeft size={16} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-30
        bg-black/20 text-white hover:bg-amber-400 hover:text-neutral-950
        backdrop-blur-md border border-white/10 hover:border-amber-400
        p-2.5 rounded-lg hidden md:block
        transition-all duration-300 hover:scale-105 shadow-md"
        aria-label="Next slide"
      >
        <FaChevronRight size={16} />
      </button>
    </section>
  );
};

export default Hero;
