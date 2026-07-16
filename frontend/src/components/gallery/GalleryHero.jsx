import hero from "../../assets/image-slider3.png";

const GalleryHero = () => {
  return (
    // Added padding-top (pt-24 sm:pt-32) to prevent content from hiding underneath the fixed navbar
    <section className="relative min-h-[500px] sm:min-h-[550px] md:h-[70vh] overflow-hidden bg-slate-950 font-sans antialiased pt-24 sm:pt-32 pb-16">
      
      {/* Immersive Panoramic Background Image with Gentle Scale Effect */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={hero}
          alt="School Campus Gallery"
          className="w-full h-full object-cover transform scale-105 animate-[pulse_8s_infinite_alternate] opacity-90 object-center"
        />
      </div>

      {/* Cinematic Premium Dual-Layer Overlay (Dark Tint + Vignette) */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent z-10" />
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Premium Content Box */}
      <div className="relative z-20 flex items-center justify-center h-full max-w-5xl mx-auto px-6">
        <div className="text-center space-y-6">
          
          {/* Animated Gold Kicker */}
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-ping" />
            <span className="uppercase tracking-[4px] text-yellow-400 font-bold text-xs sm:text-sm">
              Visual Tour
            </span>
          </div>

          {/* Hyper-Bold Display Title */}
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white mt-4 bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-300">
            School Moments
          </h1>

          {/* Luxury Text Block */}
          <p className="max-w-2xl text-base sm:text-lg text-slate-200 font-medium mx-auto leading-relaxed opacity-95">
            Explore unforgettable memories, celebrations, sports events, educational activities, and beautiful glimpses from our vibrant school campus life.
          </p>

          {/* Micro Scroll Indicator Line */}
          <div className="pt-6 flex justify-center">
            <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent animate-bounce" />
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
