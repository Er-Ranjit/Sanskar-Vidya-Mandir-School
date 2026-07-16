import hero from "../../assets/home-slider3.jpg";

const GalleryHero = () => {
  return (
    // Added padding-top to handle fixed nav overlays safely
    <section className="relative min-h-[520px] sm:min-h-[580px] md:h-[70vh] overflow-hidden bg-slate-950 font-sans antialiased pt-24 sm:pt-32 pb-16">
      
      {/* Immersive Panoramic Background Image with Gentle Scale Effect */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={hero}
          alt="School Campus Gallery"
          className="w-full h-full object-cover transform scale-105 animate-[pulse_8s_infinite_alternate] opacity-85 object-center"
        />
      </div>

      {/* Cinematic High-Contrast Gradient Overlays (Ensures text readability) */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-black/30 z-10" />
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Premium Content Box */}
      <div className="relative z-20 flex items-center justify-center h-full max-w-5xl mx-auto px-6">
        <div className="text-center space-y-6">
          
          {/* Highlighted Gold Badge */}
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/20 border border-yellow-400/40 backdrop-blur-md shadow-[0_0_15px_rgba(234,179,8,0.1)]">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="uppercase tracking-[4px] text-yellow-300 font-black text-xs sm:text-sm drop-shadow-md">
              Visual Tour
            </span>
          </div>

          {/* Hyper-Highlighted Display Title (With Intense Soft Glow) */}
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white mt-4 bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-300 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] filter">
            School <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-yellow-300 drop-shadow-[0_2px_10px_rgba(59,130,246,0.5)]">Moments</span>
          </h1>

          {/* High-Readability Luxury Text Block */}
          <p className="max-w-2xl text-base sm:text-lg text-slate-100 font-semibold mx-auto leading-relaxed drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)] bg-black/10 backdrop-blur-[2px] p-4 rounded-2xl border border-white/[0.03]">
            Explore <span className="text-yellow-400 font-bold">unforgettable memories</span>, cultural celebrations, sports events, educational activities, and beautiful glimpses from our vibrant school campus life.
          </p>

          {/* Micro Scroll Indicator Line */}
          <div className="pt-6 flex justify-center">
            <div className="w-[1px] h-12 bg-gradient-to-b from-blue-400 via-indigo-400 to-transparent animate-bounce" />
          </div>

        </div>
      </div>

      {/* Premium Seamless Curve (Matches bg-slate-100 background exactly) */}
      <div className="absolute bottom-0 left-0 w-full z-30 leading-none">
        <svg
          className="relative block w-full h-[60px]"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#f1f5f9"
            d="M0,64L80,69.3C160,75,320,85,480,90.7C640,96,800,96,960,90.7C1120,85,1280,75,1360,69.3L1440,64L1440,120L0,120Z"
          />
        </svg>
      </div>

    </section>
  );
};

export default GalleryHero;
