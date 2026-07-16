const GalleryVideo = () => {
  // ─── APNI YOUTUBE VIDEO ID YAHAN DALEN ───
  // Video link me jo v=CODE hota hai, sirf wo 11 digits ka id code yahan dalein
  const youtubeVideoId = "dQw4w9WgXcQ"; 
  const embedUrl = `https://www.youtube.com/embed/QXHuRxjcek8`;

  return (
    <section className="relative py-24 bg-slate-100 overflow-hidden antialiased font-sans">
      
      {/* Background Soft Glow Ambient Rings */}
      <div className="absolute top-[-10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-blue-400/10 blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[450px] h-[450px] rounded-full bg-indigo-400/10 blur-[120px] animate-pulse delay-700 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Premium Header Architecture */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 text-xs font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" />
            Virtual Experience
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
            Watch Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 drop-shadow-sm">Campus Life</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-500 font-medium">
            Take a cinematic visual tour and watch our campus facilities, smart infrastructure, and student environment.
          </p>
        </div>

        {/* Premium Inline Video Player Container */}
        <div className="group relative rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-slate-200/60 bg-slate-950 aspect-video w-full">
          
          {/* Subtle Top Border Laser Accent Line */}
          <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-blue-500 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out z-20" />

          {/* Direct YouTube iFrame Stream Player */}
          <iframe
            title="Campus Virtual Video Player"
            src={embedUrl}
            className="w-full h-full border-0 absolute inset-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

        </div>

      </div>
    </section>
  );
};

export default GalleryVideo;
