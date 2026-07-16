const timeline = [
  {
    year: "2026",
    title: "Annual Function",
    desc: "Students performed cultural dances and dramas.",
  },
  {
    year: "2025",
    title: "Sports Championship",
    desc: "Inter-school sports competition organized.",
  },
  {
    year: "2024",
    title: "Science Fair",
    desc: "Students presented innovative science projects.",
  },
  {
    year: "2023",
    title: "Educational Tour",
    desc: "Visit to museums and historical places.",
  },
];

const EventTimeline = () => {
  return (
    <section className="relative py-24 bg-slate-100 overflow-hidden antialiased font-sans">
      
      {/* Background Soft Premium Glow Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-blue-400/10 blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[450px] h-[450px] rounded-full bg-indigo-400/10 blur-[120px] animate-pulse delay-700 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Premium Section Header with Highlighted Metrics */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 text-xs font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" />
            Historical Archive
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
            Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 drop-shadow-sm">Journey Timeline</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-500 font-medium">
            Scroll through our chronological milestones and trace the legacy of annual school track programs.
          </p>
        </div>

        {/* Premium Horizontal Scroll Track Track Panel */}
        <div className="relative mt-12 pb-6 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-slate-200 snap-x">
          
          {/* Main Continuous Track Line Indicator */}
          <div className="absolute top-24 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-slate-200 z-0" />

          {/* Grid Layout Generating Horizontal Path Nodes */}
          <div className="flex gap-8 md:gap-12 min-w-max px-4">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="w-[280px] sm:w-[320px] snap-start relative flex flex-col pt-32"
              >
                {/* 1. Milestone Tracking Floating Circular Core Node */}
                <div className="absolute top-[85px] left-6 w-8 h-8 rounded-full bg-white border-[3px] border-blue-600 text-blue-600 font-black text-xs flex items-center justify-center shadow-md z-20 transition-all duration-500 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white hover:scale-110">
                  {index + 1}
                </div>

                {/* 2. Main Luxury Content Dashboard Card */}
                <div className="group relative bg-white border border-slate-200/80 rounded-3xl p-6 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_20px_40px_rgba(30,64,175,0.06)] overflow-hidden">
                  
                  {/* Decorative Shimmer Edge Strip */}
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                  
                  {/* Highlighted Linear Gradient Year Indicator Pill */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-xs rounded-xl tracking-widest shadow-sm shadow-blue-500/10">
                      {item.year}
                    </span>
                  </div>

                  {/* Header Title */}
                  <h3 className="text-lg sm:text-xl font-black text-slate-800 transition-colors duration-300 group-hover:text-blue-600 line-clamp-1">
                    {item.title}
                  </h3>

                  {/* Description Box */}
                  <p className="text-sm text-slate-500 font-medium mt-3 leading-relaxed transition-colors duration-300 group-hover:text-slate-600 line-clamp-3">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default EventTimeline;
