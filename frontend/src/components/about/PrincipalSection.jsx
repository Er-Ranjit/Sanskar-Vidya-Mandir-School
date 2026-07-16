import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { getSettings } from "../../services/settingsService";

const PrincipalSection = () => {
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
    <section className="py-28 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden relative">
      {/* Premium Background Visual Accents */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-indigo-50/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-amber-50/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* =========================================================
            HEADER: Centered Luxury Heading Tag
           ========================================================= */}
        <div className="text-center mb-20 max-w-2xl mx-auto flex flex-col items-center">
          
          {/* Animated Elite Sub-tag Bulletin */}
          <span className="inline-flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-[4px] px-3.5 py-1.5 bg-indigo-50 rounded-full border border-indigo-100/60 shadow-sm shadow-indigo-100/10 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            Leadership
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Principal's Message
          </h2>

          <p className="text-slate-500 mt-4 text-sm sm:text-base leading-relaxed">
            A message from our respected Principal inspiring every student towards knowledge, discipline and success.
          </p>
        </div>

        {/* =========================================================
            SPLIT GRID: Premium Multi-Column Balance Layout
           ========================================================= */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT SIDE: Elite Framed Portrait Block (5 Columns) */}
          <div className="lg:col-span-5 flex justify-center w-full relative group">
            {/* Layered Decorative Elements for Magazine Visual Depth */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-amber-400/20 to-indigo-900/5 rounded-3xl -rotate-2 group-hover:rotate-0 transition-transform duration-500 hidden sm:block"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-indigo-600/5 to-transparent rounded-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500 hidden sm:block"></div>
            
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-slate-100 bg-slate-50 w-full max-w-sm lg:max-w-none">
              <img
  src={
    settings?.principalPhoto
      ? `${import.meta.env.VITE_SERVER_URL}${settings.principalPhoto}`
      : "https://placehold.co/500x600?text=Principal"
  }
  alt="Principal"
  className="w-full h-[480px] lg:h-[520px] object-cover transition-transform duration-700 group-hover:scale-[1.03] select-none"
/>
              {/* Soft inner shadow frame overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* RIGHT SIDE: Sophisticated Content & Signature Identity (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col items-start pl-0 lg:pl-6">
            
            {/* Icon Block Container */}
            <div className="w-12 h-12 rounded-xl bg-indigo-50/80 text-indigo-600 flex items-center justify-center text-lg mb-6 shadow-sm border border-indigo-100/30">
              <FaQuoteLeft size={16} />
            </div>

            {/* Custom Serif Formatted Address Message Body Block */}
            <div className="relative w-full">
              <p className="text-slate-600 leading-relaxed text-base md:text-lg font-normal antialiased italic font-serif pl-6 border-l-2 border-slate-200">
                "{settings?.principalMessage ||
                  "At Sanskar Vidya Mandir, our mission is to provide quality education while nurturing discipline, creativity, confidence and moral values. Every child possesses unique potential, and our dedicated teachers strive to help each student grow into a responsible citizen and lifelong learner."}"
              </p>
            </div>

            {/* Signatory Profile Identity Block */}
            <div className="mt-10 pt-6 border-t border-slate-100 w-full flex flex-col items-start">
              <h3 className="text-xl sm:text-2xl font-black text-indigo-600 tracking-tight">
                {settings?.principalName || "Dr. Rajesh Kumar"}
              </h3>
              
              <p className="text-xs sm:text-sm font-bold text-slate-400 mt-1 uppercase tracking-widest leading-none">
                {settings?.principalDesignation || "Principal, Sanskar Vidya Mandir"}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default PrincipalSection;
