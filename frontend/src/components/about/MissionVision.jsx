import { useEffect, useState } from "react";
import { FaBullseye, FaEye } from "react-icons/fa";
import { getSettings } from "../../services/settingsService";

const MissionVision = () => {
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

  return (
    <section className="py-28 bg-gradient-to-b from-white via-slate-50/60 to-white relative overflow-hidden">
      {/* Premium Backing Geometric Blur Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-slate-100/40 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* =========================================================
            HEADER: Cinematic Center Aligned Typography
           ========================================================= */}
        <div className="text-center mb-20 max-w-2xl mx-auto flex flex-col items-center">
          
          {/* Animated Elite Sub-tag Bulletin */}
          <span className="inline-flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-[4px] px-3.5 py-1.5 bg-indigo-50 rounded-full border border-indigo-100/60 shadow-sm shadow-indigo-100/10 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            Our Foundations
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Mission & Vision
          </h2>

          <p className="text-slate-500 mt-4 text-sm sm:text-base leading-relaxed">
            We believe in delivering quality education with discipline, innovation and strong moral values to shape responsible citizens.
          </p>
        </div>

        {/* =========================================================
            GRID: Premium Split Grid Component Layout
           ========================================================= */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

          {/* CARD 1: MISSION BLOCK */}
          <div className="group relative bg-white rounded-2xl border border-slate-100 shadow-md shadow-slate-100/40 p-8 sm:p-10 hover:shadow-2xl hover:border-indigo-100/60 hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col items-start overflow-hidden">
            
            {/* Top Border Active Shimmer Highlight Accent Line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-blue-600 transition-all duration-300"></div>

            {/* Smooth Floating Shape Container Box */}
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 text-2xl flex items-center justify-center mb-6 border border-transparent group-hover:border-white shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 transform">
              <FaBullseye className="group-hover:animate-pulse" />
            </div>

            <div className="relative mb-4">
              <h3 className="text-2xl font-extrabold text-slate-800 group-hover:text-indigo-950 transition-colors duration-200 tracking-tight">
                Our Mission
              </h3>
              <div className="absolute -bottom-1 left-0 w-0 group-hover:w-8 h-0.5 bg-indigo-600 transition-all duration-300 rounded-full"></div>
            </div>

            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-normal antialiased">
              {settings?.mission ||
                "To provide quality education that develops knowledge, discipline, creativity, leadership and moral values among students so they become responsible citizens."}
            </p>
            
            {/* Structural visual anchor background geometric ring element */}
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-slate-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out -z-10"></div>
          </div>

          {/* CARD 2: VISION BLOCK */}
          <div className="group relative bg-white rounded-2xl border border-slate-100 shadow-md shadow-slate-100/40 p-8 sm:p-10 hover:shadow-2xl hover:border-amber-100/60 hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col items-start overflow-hidden">
            
            {/* Top Border Active Shimmer Highlight Accent Line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-orange-500 transition-all duration-300"></div>

            {/* Smooth Floating Shape Container Box */}
            <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-500 text-2xl flex items-center justify-center mb-6 border border-transparent group-hover:border-white shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 transform">
              <FaEye className="group-hover:animate-pulse" />
            </div>

            <div className="relative mb-4">
              <h3 className="text-2xl font-extrabold text-slate-800 group-hover:text-amber-950 transition-colors duration-200 tracking-tight">
                Our Vision
              </h3>
              <div className="absolute -bottom-1 left-0 w-0 group-hover:w-8 h-0.5 bg-amber-500 transition-all duration-300 rounded-full"></div>
            </div>

            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-normal antialiased">
              {settings?.vision ||
                "To become one of the leading educational institutions by inspiring excellence, innovation, lifelong learning and strong character in every student."}
            </p>
            
            {/* Structural visual anchor background geometric ring element */}
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-slate-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out -z-10"></div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MissionVision;
