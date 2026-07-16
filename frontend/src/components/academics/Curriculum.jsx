import {
  FaBookOpen,
  FaGraduationCap,
  FaLaptopCode,
  FaFlask,
} from "react-icons/fa";

const curriculumData = [
  {
    icon: <FaBookOpen />,
    title: "Primary Education",
    desc: "Strong foundation with activity based learning, communication skills and moral values.",
    accent: "from-blue-500 to-cyan-500",
    bgLight: "bg-blue-50/70 text-blue-600",
    badge: "Grades I - V"
  },
  {
    icon: <FaGraduationCap />,
    title: "Middle School",
    desc: "Concept based education with projects, practical knowledge and teamwork.",
    accent: "from-indigo-500 to-purple-600",
    bgLight: "bg-indigo-50/70 text-indigo-600",
    badge: "Grades VI - VIII"
  },
  {
    icon: <FaFlask />,
    title: "Secondary Education",
    desc: "Advanced academic learning with science, mathematics and technology.",
    accent: "from-teal-400 to-emerald-600",
    bgLight: "bg-teal-50/70 text-teal-600",
    badge: "Grades IX - X"
  },
  {
    icon: <FaLaptopCode />,
    title: "Senior Secondary",
    desc: "Career oriented education with modern curriculum and competitive exam preparation.",
    accent: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-50/70 text-amber-600",
    badge: "Grades XI - XII"
  },
];

const Curriculum = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-white via-slate-50/60 to-white relative overflow-hidden">
      {/* Background Spatial Blur Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-slate-100/50 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* =========================================================
            HEADER: Elite Centered Headings Layout
           ========================================================= */}
        <div className="text-center mb-20 max-w-2xl mx-auto flex flex-col items-center">
          
          {/* Animated Elite Sub-tag Bulletin */}
          <span className="inline-flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-[4px] px-3.5 py-1.5 bg-indigo-50 rounded-full border border-indigo-100/60 shadow-sm shadow-indigo-100/10 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            Academic Pathways
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Our Academic Curriculum
          </h2>

          <p className="text-slate-500 mt-4 text-sm sm:text-base leading-relaxed">
            Our curriculum is designed to provide academic excellence, practical learning and holistic development.
          </p>
        </div>

        {/* =========================================================
            GRID: Ultra-Premium Responsive Feature Cards Matrix
           ========================================================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {curriculumData.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border border-slate-100 shadow-md shadow-slate-100/40 p-7 md:p-8 text-center hover:shadow-2xl hover:border-slate-200/80 hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col items-center overflow-hidden"
            >
              {/* Premium Gradient Top-Border Accent on Hover */}
              <div className="absolute top-0 inset-x-0 h-1 bg-slate-100 group-hover:bg-gradient-to-r transition-all duration-300">
                <div className={`w-full h-full bg-gradient-to-r ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>

              {/* Dynamic Sub-Grade Level Label Badge */}
              <div className="w-full flex justify-center mb-2">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 bg-slate-50 border border-slate-100 rounded px-2.5 py-0.5 select-none">
                  {item.badge}
                </span>
              </div>

              {/* Floating Dynamic Circular Icon Frame */}
              <div className={`w-16 h-16 rounded-full ${item.bgLight} text-2xl flex items-center justify-center mb-5 border border-transparent group-hover:border-white shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 transform`}>
                {item.icon}
              </div>

              {/* Title Header with Focus Underline Indicator */}
              <div className="relative mb-3.5">
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-indigo-950 transition-colors duration-200 tracking-tight">
                  {item.title}
                </h3>
                <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-6 h-0.5 bg-gradient-to-r ${item.accent} transition-all duration-300 rounded-full`}></div>
              </div>

              {/* Crisp Balanced Summary Description Text */}
              <p className="text-slate-500 text-sm leading-relaxed antialiased">
                {item.desc}
              </p>
              
              {/* Bottom decorative geometric backdrop shape */}
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-slate-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out -z-10"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Curriculum;
