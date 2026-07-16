const memories = [
  {
    year: "2026",
    title: "Annual Function",
    desc: "Students showcased their talent through dance, drama and music performances.",
  },
  {
    year: "2025",
    title: "Sports Day",
    desc: "Annual sports competition encouraged teamwork, leadership and fitness.",
  },
  {
    year: "2024",
    title: "Science Exhibition",
    desc: "Students presented innovative science and technology projects.",
  },
  {
    year: "2023",
    title: "Educational Tour",
    desc: "School organized an educational tour to improve practical learning.",
  },
];

const Memories = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden antialiased font-sans">
      
      {/* Background Soft Ambient Lights */}
      <div className="absolute top-[-10%] left-[-10%] w-[450px] h-[450px] rounded-full bg-blue-400/5 blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-indigo-400/5 blur-[120px] animate-pulse delay-700 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Premium Header Architecture */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 text-xs font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            School Journey
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
            Beautiful <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 drop-shadow-sm">Milestones</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-500 font-medium">
            Take a stroll down memory lane and discover the proud legacy of our campus activities.
          </p>
        </div>

        {/* Premium Alternate Timeline Section Container */}
        <div className="relative">
          
          {/* Centralized Core Track Line (Hidden on Mobile, centered on MD up screens) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-indigo-400 to-slate-200 transform md:-translate-x-1/2 z-0" />

          <div className="space-y-12 md:space-y-16">
            {memories.map((item, index) => {
              // Calculate logic for alternate left/right rows
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start md:items-center justify-between z-10 w-full ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* 1. Left/Right Content Block Container */}
                  <div className="w-full md:w-[45%] pl-12 md:pl-0">
                    <div className="group relative bg-slate-50/60 border border-slate-200/80 rounded-3xl p-6 sm:p-8 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:bg-white hover:border-blue-500/40 hover:shadow-[0_20px_40px_rgba(30,64,175,0.06)] overflow-hidden">
                      
                      {/* Top Laser Shimmer Line */}
                      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                      
                      {/* Highlighted Gradient Year Pill */}
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-xs sm:text-sm rounded-xl tracking-wider shadow-sm shadow-blue-500/10">
                        {item.year}
                      </span>

                      {/* Display Header */}
                      <h3 className="text-xl sm:text-2xl font-black text-slate-800 mt-4 transition-colors duration-300 group-hover:text-blue-600">
                        {item.title}
                      </h3>

                      {/* Description Area */}
                      <p className="text-sm sm:text-base text-slate-500 font-medium mt-3 leading-relaxed transition-colors duration-300 group-hover:text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* 2. Centralized Milestone Number Ring Core Node */}
                  <div className="absolute left-0 md:left-1/2 top-4 md:top-auto w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border-2 border-blue-600 text-blue-600 font-black text-sm flex items-center justify-center shadow-md transform md:-translate-x-1/2 z-20 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white group-hover:scale-110">
                    0{index + 1}
                  </div>

                  {/* 3. Empty Structural Balancing Box for Flex Spacing (Hidden on Mobile screens) */}
                  <div className="hidden md:block w-[45%]" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Memories;
