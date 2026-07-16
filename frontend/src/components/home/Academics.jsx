import {
  FaBookOpen,
  FaAtom,
  FaLaptopCode,
  FaPalette,
} from "react-icons/fa";

const courses = [
  {
    icon: <FaBookOpen />,
    title: "Primary Education",
    desc: "Strong foundation for young learners with comprehensive activity-based experiential learning models.",
    accent: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50/70 text-blue-600",
    badge: "Foundational"
  },
  {
    icon: <FaAtom />,
    title: "Science & Innovation",
    desc: "Advanced empirical science stream coupled with immersive practical laboratory analytics setups.",
    accent: "from-teal-400 to-emerald-600",
    bgLight: "bg-teal-50/70 text-teal-600",
    badge: "STEM Focus"
  },
  {
    icon: <FaLaptopCode />,
    title: "Computer Education",
    desc: "Next-gen algorithms coding, programming tracks, and real core digital technical skill maps.",
    accent: "from-purple-500 to-indigo-600",
    bgLight: "bg-purple-50/70 text-purple-600",
    badge: "Future Ready"
  },
  {
    icon: <FaPalette />,
    title: "Arts & Culture",
    desc: "Vibrant instrumental music modules, creative fine arts, and cross-cultural holistic activities.",
    accent: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-50/70 text-amber-600",
    badge: "Creative Core"
  },
];

const Academics = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-white via-slate-50/60 to-white relative overflow-hidden">
      {/* Premium Spatial Visual Anchor Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-slate-100/40 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* =========================================================
            HEADER: Luxury Central Integrated Headings
           ========================================================= */}
        <div className="text-center mb-20 max-w-2xl mx-auto flex flex-col items-center">
          
          {/* Animated Elite Sub-tag Bulletin */}
          <span className="inline-flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-[4px] px-3.5 py-1.5 bg-indigo-50 rounded-full border border-indigo-100/60 shadow-sm shadow-indigo-100/10 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            Learning Pathways
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Academic Programs
          </h2>

          <p className="text-slate-500 mt-4 text-sm sm:text-base leading-relaxed">
            Building rigorous core knowledge ecosystems embedded deeply with digital excellence and modern real-world innovation.
          </p>
        </div>

        {/* =========================================================
            GRID: Premium Interactive Micro-Shifting Cards
           ========================================================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border border-slate-100/80 shadow-md shadow-slate-100/40 p-7 md:p-8 hover:shadow-2xl hover:border-slate-200/80 hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col items-start overflow-hidden"
            >
              {/* Premium Gradient Top Strip Interactive Bar */}
              <div className="absolute top-0 inset-x-0 h-1 bg-slate-100 group-hover:bg-gradient-to-r transition-all duration-300">
                <div className={`w-full h-full bg-gradient-to-r ${course.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>

              {/* Top Row Block Layout: Icon container + Badge Tag */}
              <div className="w-full flex items-center justify-between gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl ${course.bgLight} text-xl flex items-center justify-center border border-transparent group-hover:border-white shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 transform`}>
                  {course.icon}
                </div>
                
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 bg-slate-50 border border-slate-100 rounded px-2.5 py-1">
                  {course.badge}
                </span>
              </div>

              {/* Content Block Headings and lines */}
              <div className="relative mb-3">
                <h3 className="text-lg md:text-xl font-bold text-slate-800 group-hover:text-indigo-950 transition-colors duration-200 tracking-tight leading-snug">
                  {course.title}
                </h3>
                {/* Micro focus reveal sliding underline bar indicator */}
                <div className={`absolute -bottom-1 left-0 w-0 group-hover:w-8 h-0.5 bg-gradient-to-r ${course.accent} transition-all duration-300 rounded-full`}></div>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed antialiased">
                {course.desc}
              </p>

              {/* Back geometrical structural ring grid anchor overlay */}
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-slate-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out -z-10"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Academics;
