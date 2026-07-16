import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/image-slider3.png";
import { getSettings } from "../../services/settingsService";
import { FaGraduationCap, FaFileDownload, FaArrowRight } from "react-icons/fa";

const AdmissionHero = () => {
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
    /* 
      FIXED LOGIC: Removed h-[500px] limit. 
      Using h-auto + py-20 + pt-28 so that the container dynamically self-adjusts 
      according to text size, making it impossible for content to overflow.
    */
    <section className="relative h-auto min-h-[480px] pt-28 py-20 overflow-hidden bg-slate-950 flex items-center justify-center">

      {/* Background Cinematic Asset Image */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Admission Banner"
          className="w-full h-full absolute inset-0 object-cover select-none scale-100 brightness-[0.65]"
        />
        <div className="absolute inset-0 bg-neutral-950/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-transparent to-neutral-950/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/40 via-transparent to-black/50"></div>
      </div>

      {/* =========================================================
          INTERACTIVE SHIELD CONTAINER: Responsive layout envelope
         ========================================================= */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto w-full group transform hover:scale-[1.002] transition-transform duration-500">
        
        {/* Managed internal container padding with h-full for robust wrapping */}
        <div className="backdrop-blur-md bg-black/20 border border-white/10 rounded-2xl p-5 md:p-7 shadow-xl relative overflow-hidden h-full">
          
          {/* Internal Shimmer Highlight Line */}
          <div className="absolute -inset-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 group-hover:animate-shimmer pointer-events-none"></div>

          {/* School Logo */}
          {settings?.logo && (
            <div className="w-full flex justify-center mb-3">
              <div className="relative inline-block">
                <div className="absolute inset-0 rounded-full bg-amber-400 blur-md opacity-20 animate-pulse"></div>
               <img
  src={`${import.meta.env.VITE_SERVER_URL}${settings.logo}`}
  alt="School Logo"
  className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-white p-1 border border-amber-400 shadow-md block mx-auto transition-transform duration-500 group-hover:scale-105"
/>
              </div>
            </div>
          )}

          {/* Premium Animated Mini Micro-Tag */}
          <span className="inline-flex items-center gap-1.5 text-amber-400 text-[10px] sm:text-xs font-black uppercase tracking-[3px] px-2.5 py-0.5 bg-amber-400/10 rounded-full border border-amber-400/20 mb-3 select-none">
            <FaGraduationCap className="text-xs" />
            Admissions Open
          </span>

          {/* Luxury Main Page Header Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white drop-shadow-md">
            Join <span className="bg-gradient-to-r from-white via-slate-100 to-amber-200 bg-clip-text text-transparent">{settings?.schoolName || "Sanskar Vidya Mandir"}</span>
          </h1>

          {/* Refened Core Subtitle Text Paragraph Block */}
          <p className="mt-3 text-xs sm:text-sm text-slate-200/90 leading-relaxed font-normal antialiased max-w-2xl mx-auto border-t border-white/5 pt-3">
            Give your child the opportunity to learn, grow and succeed in a safe, modern and inspiring environment with experienced teachers and world-class facilities.
          </p>

          {/* Action Call-to-Action Interactive Buttons */}
          <div className="mt-5 flex justify-center gap-4 flex-wrap w-full font-bold">
            <Link
              to="/contact"
              className="flex-1 sm:flex-initial bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 px-6 py-2.5 rounded-xl shadow-lg shadow-amber-500/10 text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Enquire Now
              <FaArrowRight className="text-xs" />
            </Link>

            {settings?.prospectus ? (
             <a
  href={`${import.meta.env.VITE_SERVER_URL}${settings.prospectus}`}
  target="_blank"
  rel="noreferrer"
  className="flex-1 sm:flex-initial bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-xl border border-white/20 backdrop-blur-md text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
>
                <FaFileDownload className="text-xs opacity-80" />
                Download Prospectus
              </a>
            ) : (
              <button
                disabled
                className="flex-1 sm:flex-initial bg-slate-800/40 text-slate-500 border border-slate-800/60 px-6 py-2.5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 cursor-not-allowed font-semibold"
              >
                <FaFileDownload className="opacity-40" />
                Prospectus Soon
              </button>
            )}
          </div>

          {/* =========================================================
              STATISTICS MATRIX: Clean dynamic integration
             ========================================================= */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 w-full pt-5 border-t border-white/5">
            
            {/* Box 1 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/5 p-3 group/card hover:bg-white/10 hover:border-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-black text-amber-400 group-hover/card:scale-105 transition-transform duration-300">
                {settings?.totalStudents || 1000}+
              </h3>
              <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">Students</p>
            </div>

            {/* Box 2 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/5 p-3 group/card hover:bg-white/10 hover:border-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-black text-amber-400 group-hover/card:scale-105 transition-transform duration-300">
                {settings?.totalTeachers || 50}+
              </h3>
              <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">Teachers</p>
            </div>

            {/* Box 3 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/5 p-3 group/card hover:bg-white/10 hover:border-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-black text-amber-400 group-hover/card:scale-105 transition-transform duration-300">
                {settings?.successRate || "100%"}
              </h3>
              <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">Success Rate</p>
            </div>

            {/* Box 4 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/5 p-3 group/card hover:bg-white/10 hover:border-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-black text-amber-400 group-hover/card:scale-105 transition-transform duration-300">
                {settings?.establishedYear || "2005"}
              </h3>
              <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">Established</p>
            </div>

          </div>

        </div>
      </div>

      {/* =========================================================
          BOTTOM CURVE SVG: Seamless White Smooth Wave Segment 
         ========================================================= */}
      <svg
        className="absolute bottom-0 left-0 w-full z-20 pointer-events-none"
        viewBox="0 0 1440 120"
        fill="none"
        preserveAspectRatio="none"
        style={{ height: '35px' }}
      >
        <path
          fill="#ffffff"
          d="M0,64L80,69.3C160,75,320,85,480,90.7C640,96,800,96,960,90.7C1120,85,1280,75,1360,69.3L1440,64L1440,120L0,120Z"
        />
      </svg>

    </section>
  );
};

export default AdmissionHero;
