import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBookOpen,
  FaLaptopCode,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserGraduate />,
    title: "Experienced Faculty",
    description:
      "Highly qualified teachers dedicated to every student's success.",
    accent: "from-indigo-500 to-blue-600",
    bgLight: "bg-indigo-50/60",
    iconColor: "text-indigo-600"
  },
  {
    icon: <FaBookOpen />,
    title: "Quality Education",
    description:
      "Modern curriculum with practical and conceptual learning.",
    accent: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-50/60",
    iconColor: "text-amber-600"
  },
  {
    icon: <FaLaptopCode />,
    title: "Smart Classes",
    description:
      "Technology-enabled classrooms for interactive learning.",
    accent: "from-purple-500 to-indigo-600",
    bgLight: "bg-purple-50/60",
    iconColor: "text-purple-600"
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Student Development",
    description:
      "Focus on academics, sports, culture, and personality development.",
    accent: "from-emerald-500 to-teal-600",
    bgLight: "bg-emerald-50/60",
    iconColor: "text-emerald-600"
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-white via-slate-50/80 to-white relative overflow-hidden">
      {/* Premium Background Visual Anchor Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-100/40 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* =========================================================
            HEADER: Cinematic Center Aligned Typography 
           ========================================================= */}
        <div className="text-center mb-20 max-w-2xl mx-auto flex flex-col items-center">
          
          {/* Animated Elite Sub-tag */}
          <span className="inline-flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-[4px] px-3.5 py-1.5 bg-indigo-50/80 rounded-full border border-indigo-100/80 shadow-sm shadow-indigo-100/20 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            Our Pillars
          </span>

          {/* Luxury Bold Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Why Choose Our School
          </h2>

          {/* Soft Balanced Subtitle */}
          <p className="text-slate-500 mt-4 text-sm sm:text-base leading-relaxed">
            We provide a nurturing environment that helps students grow academically and personally.
          </p>
        </div>

        {/* =========================================================
            GRID: Ultra-Premium Micro-Animated Feature Cards
           ========================================================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border border-slate-100 shadow-md shadow-slate-100/50 p-8 text-center hover:-translate-y-2 hover:shadow-xl hover:border-slate-200/60 transition-all duration-300 ease-out flex flex-col items-center overflow-hidden"
            >
              {/* Premium Gradient Top-Border Accent on Hover */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-slate-100 group-hover:bg-gradient-to-r transition-all duration-300" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} data-class={`bg-gradient-to-r ${item.accent}`}>
                <div className={`w-full h-full bg-gradient-to-r ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>

              {/* Animated Floating Icon Shape */}
              <div className={`w-16 h-16 rounded-2xl ${item.bgLight} ${item.iconColor} text-2xl flex items-center justify-center mb-6 border border-transparent group-hover:border-white group-hover:scale-110 group-hover:rotate-3 shadow-sm group-hover:shadow-md transition-all duration-300 ease-out transform`}>
                {item.icon}
              </div>

              {/* Title with subtle color tracking focus */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-950 transition-colors duration-200">
                {item.title}
              </h3>

              {/* Crisp balanced description */}
              <p className="text-slate-500 text-sm leading-relaxed antialiased">
                {item.description}
              </p>
              
              {/* Subtle background card highlight circle */}
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-slate-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out -z-10"></div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
