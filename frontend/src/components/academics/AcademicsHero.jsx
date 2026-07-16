import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSettings } from "../../services/settingsService";
import hero from "../../assets/home-slider3.jpg";
import { FaGraduationCap, FaFileDownload } from "react-icons/fa";

const AcademicsHero = () => {
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
    /* h-[70vh] layout with fluid safe vertical tracking constraints and navbar correction padding */
    <section className="relative h-[70vh] min-h-[550px] flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      
      {/* Background Image Wrapper */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Academics Banner"
          className="w-full h-full object-cover select-none scale-100 brightness-[0.7]"
        />
        {/* Modern Cinematic Overlay Mix Gradients */}
        <div className="absolute inset-0 bg-neutral-950/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-transparent to-neutral-950/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/30 via-transparent to-black/40"></div>
      </div>

      {/* =========================================================
          INTERACTIVE SHIELD CONTAINER: Premium Glassmorphism
         ========================================================= */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto w-full group transform hover:scale-[1.005] transition-transform duration-500">
        
        {/* Glass Card Wrap Base */}
        <div className="backdrop-blur-md bg-black/20 border border-white/10 rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Internal Shimmer Highlight Line */}
          <div className="absolute -inset-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 group-hover:animate-shimmer pointer-events-none"></div>

          {/* Center Logo Frame Positioning with Subtle Pulse Glow */}
          {settings?.logo && (
            <div className="w-full flex justify-center mb-5">
              <div className="relative inline-block">
                <div className="absolute inset-0 rounded-full bg-amber-400 blur-md opacity-20 animate-pulse"></div>
                <img
                  src={`http://localhost:5000${settings.logo}`}
                  alt="School Logo"
                  className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-white p-1.5 border-2 border-amber-400 shadow-2xl block mx-auto"
                />
              </div>
            </div>
          )}

          {/* Premium Animated Mini Micro-Tag */}
          <span className="inline-flex items-center gap-1.5 text-amber-400 text-[10px] sm:text-xs font-black uppercase tracking-[4px] px-3 py-1 bg-amber-400/10 rounded-full border border-amber-400/20 mb-4">
            <FaGraduationCap className="text-xs animate-bounce" style={{ animationDuration: '3s' }} />
            Excellence In Education
          </span>

          {/* Luxury Main Page Header Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white drop-shadow-md">
            Academics Portal
          </h1>

          {/* Refined Context Body Description Layout */}
          <p className="mt-5 text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed font-normal antialiased max-w-2xl mx-auto border-t border-white/5 pt-4">
            At{" "}
            <span className="text-amber-400 font-bold tracking-wide">
              {settings?.schoolName || "Sanskar Vidya Mandir"}
            </span>
            , we provide a balanced curriculum that combines academic excellence, innovation, discipline and practical learning to prepare students for the future.
          </p>

          {/* =========================================================
              DYNAMIC ACTION HANDLERS BUTTONS MATRIX (UPDATED LOGIC)
             ========================================================= */}
          <div className="mt-8 flex justify-center gap-4 flex-wrap w-full font-bold">
            
            {/* Route Link configuration to push user to Courses/Syllabus grid area */}
            <Link
              to="/academics"
              className="flex-1 sm:flex-initial bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-900 px-6 py-2.5 sm:px-8 sm:py-3 rounded-xl shadow-lg shadow-amber-500/10 text-xs sm:text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-center"
            >
              Explore Curriculum
            </Link>

            {/* Conditional File Downloader linking directly with backend static settings */}
            {settings?.prospectus ? (
              <a
                href={`http://localhost:5000${settings.prospectus}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-initial bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-xl border border-white/20 backdrop-blur-md text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <FaFileDownload className="text-xs opacity-80" />
                Download Prospectus
              </a>
            ) : (
              <button
                disabled
                className="flex-1 sm:flex-initial bg-slate-800/40 text-slate-500 border border-slate-800/60 px-6 py-2.5 sm:px-8 sm:py-3 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 cursor-not-allowed font-semibold"
              >
                <FaFileDownload className="opacity-40" />
                Prospectus Coming Soon
              </button>
            )}
          </div>

        </div>
      </div>

      {/* =========================================================
          BOTTOM CURVE: Exact White Wave Path Segment SVG 
         ========================================================= */}
      <svg
        className="absolute bottom-0 left-0 w-full z-20 pointer-events-none"
        viewBox="0 0 1440 120"
        fill="none"
        preserveAspectRatio="none"
        style={{ height: '45px' }}
      >
        <path
          fill="#ffffff"
          d="M0,64L60,69.3C120,75,240,85,360,90.7C480,96,600,96,720,90.7C840,85,960,75,1080,69.3C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
        />
      </svg>

    </section>
  );
};

export default AcademicsHero;
