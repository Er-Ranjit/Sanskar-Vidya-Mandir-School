import {
  FaBaby,
  FaSchool,
  FaUserGraduate,
  FaUniversity,
} from "react-icons/fa";

const classesData = [
  {
    icon: <FaBaby />,
    class: "Nursery - UKG",
    desc: "Play based learning with creativity and communication.",
    color: "bg-pink-50 text-pink-600 border-pink-100",
    accent: "from-pink-500 to-rose-500",
  },
  {
    icon: <FaSchool />,
    class: "Class I - V",
    desc: "Primary education with strong conceptual learning.",
    color: "bg-blue-50 text-blue-700 border-blue-100",
    accent: "from-blue-500 to-indigo-600",
  },
  {
    icon: <FaUserGraduate />,
    class: "Class VI - X",
    desc: "Academic excellence with practical knowledge.",
    color: "bg-emerald-50 text-emerald-700 border-emerald-100",
    accent: "from-emerald-500 to-teal-600",
  },
  {
    icon: <FaUniversity />,
    class: "Class XI - XII",
    desc: "Science, Commerce & Arts streams with career guidance.",
    color: "bg-amber-50 text-amber-700 border-amber-100",
    accent: "from-amber-500 to-orange-500",
  },
];

const Classes = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 relative overflow-hidden">
      {/* Premium Backing Visual Grid Ring Blur Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-slate-100/50 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* =========================================================
            HEADER: Centered Luxury Heading Component
           ========================================================= */}
        <div className="text-center mb-20 max-w-2xl mx-auto flex flex-col items-center">
          
          {/* Animated Elite Sub-tag Bulletin */}
          <span className="inline-flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-[4px] px-3.5 py-1.5 bg-indigo-50 rounded-full border border-indigo-100/60 shadow-sm shadow-indigo-100/10 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            Our Programs
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Classes We Offer
          </h2>

          <p className="text-slate-500 mt-4 text-sm sm:text-base leading-relaxed">
            Quality education from Nursery to Senior Secondary tiers built perfectly for student development.
          </p>
        </div>

        {/* =========================================================
            GRID: Ultra-Premium Responsive Product Cards Matrix
           ========================================================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {classesData.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border border-slate-100 shadow-md shadow-slate-100/40 p-7 md:p-8 flex flex-col justify-between hover:shadow-2xl hover:border-slate-200/80 hover:-translate-y-2 transition-all duration-300 ease-out overflow-hidden"
            >
              {/* Premium Gradient Top Border Shimmer Highlight Line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-slate-100 group-hover:bg-gradient-to-r transition-all duration-300">
                <div className={`w-full h-full bg-gradient-to-r ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>

              {/* Top/Center Body Content Section */}
              <div>
                {/* Floating Dynamic Circular Icon Frame Container */}
                <div className={`w-16 h-16 rounded-full ${item.color} border border-transparent group-hover:border-white shadow-inner flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 transform`}>
                  {item.icon}
                </div>

                {/* Card Main Category Header Title */}
                <h3 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight mt-6 group-hover:text-slate-950 transition-colors">
                  {item.class}
                </h3>

                {/* Sub-text Paragraph Body */}
                <p className="text-slate-500 text-sm mt-3 leading-relaxed antialiased">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Row Interactivity Action Trigger Button Area */}
              <div className="mt-8 pt-2">
                <button 
                  className={`w-full bg-gradient-to-r ${item.accent} text-white font-bold px-5 py-2.5 rounded-xl shadow-md text-xs sm:text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] tracking-wider uppercase`}
                  onClick={() => alert(`Details portal for ${item.class} coming soon!`)}
                >
                  Learn More
                </button>
              </div>

              {/* Background geometric design accent circle overlay */}
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-slate-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out -z-10"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Classes;
