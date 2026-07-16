import { useEffect, useState } from "react";
import axios from "axios";

const PrincipalMessage = () => {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/settings"
      );

      setSettings(data.settings);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    /* py-24 gives luxury breathable spacing on top and bottom */
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden relative">
      {/* Background Decorative Accent Ring */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-indigo-50/40 rounded-full blur-3xl pointer-events-none"></div>

      {/* px-6 sm:px-8 handles side gutters and gap-16 separates columns cleanly */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid lg:grid-cols-12 gap-16 items-center">

        {/* =========================================================
            LEFT SIDE: Elite Editorial Portrait Block (5 Columns)
           ========================================================= */}
        <div className="lg:col-span-5 flex justify-center w-full relative group">
          {/* Decorative Framing Layers */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-amber-400/20 to-indigo-900/5 rounded-3xl -rotate-2 group-hover:rotate-0 transition-transform duration-500 hidden sm:block"></div>
          
          <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-slate-100 max-w-sm w-full bg-slate-50">
            <img
              src={
                settings?.principalPhoto
                  ? `http://localhost:5000${settings.principalPhoto}`
                  : "https://placeholder.com"
              }
              alt="Principal"
              className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-[1.03] select-none"
            />
            {/* Soft gradient shade inside portrait card layout */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent"></div>
          </div>

          {/* Aesthetic Huge Quote Mark behind image structure */}
          <span className="absolute -bottom-10 -left-6 text-[180px] font-serif text-indigo-600/5 leading-none select-none pointer-events-none hidden lg:block">“</span>
        </div>

        {/* =========================================================
            RIGHT SIDE: Sophisticated Content & Identity (7 Columns)
           ========================================================= */}
        <div className="lg:col-span-7 flex flex-col items-start pl-0 lg:pl-6">
          
          {/* Premium Animated Sub-Tag Indicator */}
          <span className="inline-flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-[4px] px-3.5 py-1.5 bg-indigo-50 rounded-full border border-indigo-100/50 mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            Leadership Note
          </span>

          {/* Luxury Typography Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Welcome to <span className="bg-gradient-to-r from-slate-900 to-indigo-900 bg-clip-text text-transparent">{settings?.schoolName || "Sanskar Vidya Mandir"}</span>
          </h2>

          {/* Elegant Pre-line Formatted Message Body Block */}
          <div className="relative mt-6 w-full">
            {/* Top border bar identifier strip */}
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-600 to-amber-400 rounded-full mb-6"></div>
            
            {/* pl-6 adds neat breathing space on the left side of message text */}
            <p className="text-slate-600 leading-relaxed text-base md:text-lg font-normal antialiased whitespace-pre-line italic font-serif pl-6 border-l-2 border-slate-200/80">
              "{settings?.principalMessage ||
                "Welcome to our school. We are committed to providing quality education and building a bright future for every student."}"
            </p>
          </div>

          {/* Signatory Grid Layout - Clean Profile Badge */}
          <div className="mt-10 pt-6 border-t border-slate-100 w-full flex flex-col items-start">
            <h3 className="text-xl sm:text-2xl font-black text-indigo-600 tracking-tight">
              {settings?.principalName || "Principal Name"}
            </h3>
            
            <p className="text-xs sm:text-sm font-bold text-slate-400 mt-1 uppercase tracking-widest">
              {settings?.principalDesignation || "Principal / Director"}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PrincipalMessage;
