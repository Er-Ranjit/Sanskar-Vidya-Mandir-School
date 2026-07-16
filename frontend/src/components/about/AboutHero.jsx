import { useEffect, useState } from "react";
import { getSettings } from "../../services/settingsService";
import hero from "../../assets/image-slider4.png";

const AboutHero = () => {
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
    /* h-[55vh] layout with optimal min-height to maintain premium structure on mobile */
    <section className="relative h-[55vh] min-h-[480px] flex items-center justify-center overflow-hidden bg-slate-900">
      
      {/* Background Image - Scale out slightly for modern layout look */}
      <img
        src={hero}
        alt="About Banner"
        className="absolute inset-0 w-full h-full object-cover select-none scale-100 brightness-[0.95]"
      />

      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-neutral-950/40 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-neutral-950/80"></div>

      {/* Hero Inner Content Layout Wrapper */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 flex flex-col items-center justify-center w-full">

        {/* School Logo - Upgraded Fixed Center Alignment with Glow Ring */}
        {settings?.logo && (
          <div className="w-full flex justify-center mb-6">
            <div className="relative inline-block group">
              {/* Outer Amber Shimmer Blur Effect Ring */}
              <div className="absolute inset-0 rounded-full bg-amber-400 blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <img
  src={`${import.meta.env.VITE_SERVER_URL}${settings.logo}`}
  alt="School Logo"
  className="relative w-20 h-20 md:w-22 md:h-22 rounded-full bg-white p-1.5 border-2 border-amber-400 shadow-xl block mx-auto"
/>
            </div>
          </div>
        )}

        {/* Main Section Header Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white drop-shadow-md">
          About Our Academy
        </h1>

        {/* Dynamic School Name Description Sub-text */}
        <p className="mt-3.5 max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-bold text-amber-400 uppercase tracking-[3px] opacity-90 drop-shadow">
          {settings?.schoolName || "Sanskar Vidya Mandir"}
        </p>

        {/* Refined Geometric Bottom Accent Bar Indicator */}
        <div className="mt-5 w-14 h-1 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto rounded-full shadow-sm shadow-amber-400/50"></div>

      </div>
    </section>
  );
};

export default AboutHero;
