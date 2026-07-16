import {
  FaBook,
  FaFlask,
  FaBus,
  FaBasketballBall,
  FaDesktop,
  FaWifi,
} from "react-icons/fa";

const facilities = [
  {
    icon: <FaBook />,
    title: "Library",
    desc: "Well-stocked library with books, journals and digital resources.",
    accent: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50/70 text-blue-600"
  },
  {
    icon: <FaFlask />,
    title: "Science Lab",
    desc: "Modern Physics, Chemistry and Biology laboratories.",
    accent: "from-teal-400 to-emerald-600",
    bgLight: "bg-teal-50/70 text-teal-600"
  },
  {
    icon: <FaDesktop />,
    title: "Computer Lab",
    desc: "Advanced computer lab with internet-enabled systems.",
    accent: "from-purple-500 to-indigo-600",
    bgLight: "bg-purple-50/70 text-purple-600"
  },
  {
    icon: <FaBasketballBall />,
    title: "Sports",
    desc: "Indoor and outdoor sports with professional coaching.",
    accent: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-50/70 text-amber-600"
  },
  {
    icon: <FaBus />,
    title: "Transport",
    desc: "Safe and secure transportation across the city.",
    accent: "from-rose-500 to-red-600",
    bgLight: "bg-rose-50/70 text-rose-600"
  },
  {
    icon: <FaWifi />,
    title: "Smart Classroom",
    desc: "Digital classrooms equipped with smart boards and projectors.",
    accent: "from-indigo-500 to-violet-600",
    bgLight: "bg-indigo-50/70 text-indigo-600"
  },
];

const Facilities = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 relative overflow-hidden">
      {/* Premium Ambient Background Accents */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-50/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-amber-50/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* =========================================================
            HEADER: Elite Centered Sub-tags & Typography
           ========================================================= */}
        <div className="text-center mb-20 flex flex-col items-center max-w-2xl mx-auto">
          
          {/* Modern Premium Animated Mini Tag */}
          <span className="inline-flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-[4px] px-3.5 py-1.5 bg-indigo-50 rounded-full border border-indigo-100/50 mb-4 shadow-sm shadow-indigo-100/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            Campus Infrastructure
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Our World-Class Facilities
          </h2>

          <p className="text-slate-500 mt-4 text-sm sm:text-base leading-relaxed">
            Everything students need for a global, tech-driven, and holistic educational development under one roof.
          </p>
        </div>

        {/* =========================================================
            GRID: Ultra-Premium Micro-Animated Asset Cards
           ========================================================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {facilities.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border border-slate-100 shadow-md shadow-slate-100/40 p-8 hover:shadow-2xl hover:border-slate-200/80 hover:-translate-y-1.5 transition-all duration-300 ease-out overflow-hidden flex flex-col items-start"
            >
              {/* Top Border Shimmer Highlight Accent Line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-slate-100 group-hover:bg-gradient-to-r transition-all duration-300">
                <div className={`w-full h-full bg-gradient-to-r ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>

              {/* Advanced Floating Icon Block container */}
              <div className={`w-14 h-14 rounded-xl ${item.bgLight} text-xl flex items-center justify-center mb-6 border border-transparent group-hover:scale-110 group-hover:rotate-3 shadow-inner transition-all duration-300 transform`}>
                {item.icon}
              </div>

              {/* Title with focus transition line */}
              <h3 className="text-xl font-bold text-slate-800 mb-2.5 group-hover:text-indigo-950 transition-colors duration-200">
                {item.title}
              </h3>

              {/* Balanced crisp paragraph body info */}
              <p className="text-slate-500 text-sm leading-relaxed antialiased">
                {item.desc}
              </p>
              
              {/* Interactive bottom card dynamic element anchor */}
              <div className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-slate-50 group-hover:bg-gradient-to-tr transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0" data-class={`${item.accent}`}>
                <svg className="w-3 h-3 text-slate-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Facilities;
