import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import school from "../../assets/image.png";
import { getSettings } from "../../services/settingsService";

const AboutSection = () => {
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
    <section className="py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 overflow-hidden relative">
      {/* Background Decorative Abstract Shapes for Premium Aesthetic */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl pointer-events-none animate-pulse duration-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">

        {/* =========================================================
            LEFT SIDE: Cinematic Animated Image Frame 
           ========================================================= */}
        <div className="relative group lg:pr-6">
          {/* Layered Animated Frames */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-amber-400 to-orange-400 opacity-20 rounded-3xl -rotate-3 scale-[0.97] group-hover:rotate-0 group-hover:scale-100 transition-all duration-700 ease-out hidden sm:block"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-indigo-600 to-blue-500 opacity-10 rounded-2xl rotate-2 scale-[0.98] group-hover:rotate-0 group-hover:scale-100 transition-all duration-700 ease-out hidden sm:block"></div>
          
          {/* Main Image Container */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-slate-200/60 bg-slate-100">
            <img
  src={school}
  alt="School Campus"
  className="w-full h-[520px] object-fill transition-all duration-1000 ease-out group-hover:scale-105 group-hover:brightness-[1.02] select-none"
/>

            {/* Cinematic Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>
            
            {/* Floating Live Badge inside Image */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 shadow-lg flex items-center gap-3 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></div>
              <span className="text-xs font-bold text-slate-800 tracking-wide uppercase">Inspiring Excellence</span>
            </div>
          </div>
        </div>

        {/* =========================================================
            RIGHT SIDE: Elite Typography & Micro-Animated Grid
           ========================================================= */}
        <div className="flex flex-col items-start">
          
          {/* Premium Animated Mini Tag */}
          <span className="inline-flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-[4px] px-3.5 py-1.5 bg-indigo-50/80 rounded-full border border-indigo-100/80 shadow-sm shadow-indigo-100/20 mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            About Our Academy
          </span>

          {/* Luxury Typography Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 bg-clip-text text-transparent">
            {settings?.schoolName || "Sanskar Vidya Mandir"}
          </h2>

          {/* Premium Paragraph */}
          <p className="mt-6 text-slate-600 leading-relaxed text-base md:text-lg font-normal antialiased max-w-xl">
            {settings?.about ||
              "Sanskar Vidya Mandir is committed to providing quality education that nurtures knowledge, discipline, creativity and moral values."}
          </p>

          {/* Grid Layout: Elite Stat Cards with Hover Animations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-10 w-full">

            {/* Card 1: Students */}
            <div className="group/card bg-white hover:bg-gradient-to-br hover:from-white hover:to-indigo-50/30 p-6 rounded-2xl border border-slate-100 shadow-md shadow-slate-100/40 hover:shadow-xl hover:border-indigo-100/80 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-3xl sm:text-4xl font-black text-indigo-600 tracking-tight group-hover/card:scale-105 inline-block transition-transform duration-300">
                {settings?.totalStudents || 1000}+
              </h3>
              <p className="text-xs font-bold text-slate-400 group-hover/card:text-indigo-600 mt-2 uppercase tracking-[2px] transition-colors duration-300">Active Students</p>
            </div>

            {/* Card 2: Teachers */}
            <div className="group/card bg-white hover:bg-gradient-to-br hover:from-white hover:to-indigo-50/30 p-6 rounded-2xl border border-slate-100 shadow-md shadow-slate-100/40 hover:shadow-xl hover:border-indigo-100/80 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-3xl sm:text-4xl font-black text-indigo-600 tracking-tight group-hover/card:scale-105 inline-block transition-transform duration-300">
                {settings?.totalTeachers || 50}+
              </h3>
              <p className="text-xs font-bold text-slate-400 group-hover/card:text-indigo-600 mt-2 uppercase tracking-[2px] transition-colors duration-300">Expert Faculty</p>
            </div>

            {/* Card 3: Established */}
            <div className="group/card bg-white hover:bg-gradient-to-br hover:from-white hover:to-amber-50/30 p-6 rounded-2xl border border-slate-100 shadow-md shadow-slate-100/40 hover:shadow-xl hover:border-amber-100/80 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-3xl sm:text-4xl font-black text-amber-500 tracking-tight group-hover/card:scale-105 inline-block transition-transform duration-300">
                {settings?.establishedYear || 2005}
              </h3>
              <p className="text-xs font-bold text-slate-400 group-hover/card:text-amber-600 mt-2 uppercase tracking-[2px] transition-colors duration-300">Est. Journey</p>
            </div>

            {/* Card 4: Success Rate */}
            <div className="group/card bg-white hover:bg-gradient-to-br hover:from-white hover:to-emerald-50/30 p-6 rounded-2xl border border-slate-100 shadow-md shadow-slate-100/40 hover:shadow-xl hover:border-emerald-100/80 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-3xl sm:text-4xl font-black text-emerald-600 tracking-tight group-hover/card:scale-105 inline-block transition-transform duration-300">
                {settings?.successRate || "100%"}
              </h3>
              <p className="text-xs font-bold text-slate-400 group-hover/card:text-emerald-600 mt-2 uppercase tracking-[2px] transition-colors duration-300">Success Rate</p>
            </div>

          </div>

          {/* Luxury Action Button with Glow Animation */}
          <Link
            to="/about"
            className="group/btn relative inline-flex items-center justify-center mt-10 bg-slate-900 hover:bg-indigo-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-xl shadow-slate-950/10 hover:shadow-indigo-600/30 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] text-sm overflow-hidden"
          >
            {/* Sliding Shimmer Highlight Effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover/btn:animate-shimmer" />
            <span className="relative z-10 flex items-center gap-2">
              Discover More
              <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
