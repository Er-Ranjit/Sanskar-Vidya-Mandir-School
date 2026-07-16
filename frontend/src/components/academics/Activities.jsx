import {
  FaMusic,
  FaPaintBrush,
  FaFootballBall,
  FaLaptopCode,
  FaTheaterMasks,
  FaMicroscope,
} from "react-icons/fa";

const activitiesData = [
  {
    icon: <FaMusic />,
    title: "Music & Dance",
    desc: "Students explore their creativity through music, dance and cultural performances.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Art & Craft",
    desc: "Creative drawing, painting and craft activities to enhance imagination.",
  },
  {
    icon: <FaFootballBall />,
    title: "Sports & Games",
    desc: "Indoor & outdoor sports for physical fitness and team spirit.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Coding Club",
    desc: "Programming, robotics and AI learning for future-ready students.",
  },
  {
    icon: <FaTheaterMasks />,
    title: "Drama Club",
    desc: "Build confidence and communication through stage performances.",
  },
  {
    icon: <FaMicroscope />,
    title: "Science Exhibition",
    desc: "Students showcase innovative science projects and experiments.",
  },
];

const Activities = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-white via-slate-50/60 to-white relative overflow-hidden">
      {/* Premium Backing Geometric Blur Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-slate-100/50 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* =========================================================
            HEADER: Centered Luxury Heading Component
           ========================================================= */}
        <div className="text-center mb-20 max-w-2xl mx-auto flex flex-col items-center">
          
          {/* Animated Premium Tag Bulletin */}
          <span className="inline-flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-[4px] px-3.5 py-1.5 bg-indigo-50 rounded-full border border-indigo-100/60 shadow-sm shadow-indigo-100/10 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            Beyond Textbooks
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Co-Curricular Activities
          </h2>

          <p className="text-slate-500 mt-4 text-sm sm:text-base leading-relaxed">
            Education goes beyond books. We encourage every student to participate in vibrant cultural, technical, and athletic avenues.
          </p>
        </div>

        {/* =========================================================
            GRID: Ultra-Premium Responsive Multi-Shifting Cards
           ========================================================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {activitiesData.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50/80 hover:bg-slate-900 rounded-3xl p-8 border border-slate-100/80 shadow-md shadow-slate-100/30 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 ease-out group flex flex-col items-start relative overflow-hidden"
            >
              {/* Top accent line indicator that turns vibrant yellow on container hover */}
              <div className="absolute top-0 inset-x-0 h-1 bg-transparent group-hover:bg-amber-400 transition-all duration-500"></div>

              {/* Floating Dynamic Circular Icon Frame Container */}
              <div className="text-3xl text-indigo-600 group-hover:text-amber-400 mb-6 bg-white group-hover:bg-white/5 border border-slate-100/60 group-hover:border-white/10 w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 transform">
                {item.icon}
              </div>

              {/* Card Heading Title */}
              <h3 className="text-xl md:text-2xl font-black text-slate-800 group-hover:text-white mb-3 tracking-tight transition-colors duration-300">
                {item.title}
              </h3>

              {/* Balanced crisp paragraph body details */}
              <p className="text-slate-500 group-hover:text-slate-300 text-sm leading-relaxed antialiased transition-colors duration-300">
                {item.desc}
              </p>
              
              {/* Back geometrical structural ring grid anchor overlay */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 ease-out pointer-events-none"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Activities;
