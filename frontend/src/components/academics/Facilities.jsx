import {
  FaChalkboardTeacher,
  FaBus,
  FaBookReader,
  FaRunning,
  FaWifi,
  FaShieldAlt,
} from "react-icons/fa";

const facilities = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Smart Classrooms",
    desc: "Interactive digital classrooms equipped with smart boards and modern teaching technology.",
  },
  {
    icon: <FaBookReader />,
    title: "Modern Library",
    desc: "Thousands of books, journals and digital learning resources for every student.",
  },
  {
    icon: <FaBus />,
    title: "Transport",
    desc: "Safe and GPS-enabled transport facility covering nearby towns and villages.",
  },
  {
    icon: <FaRunning />,
    title: "Sports & Fitness",
    desc: "Indoor & outdoor sports facilities for physical fitness and teamwork development.",
  },
  {
    icon: <FaWifi />,
    title: "Campus Wi-Fi",
    desc: "High-speed internet connectivity throughout the campus for better learning.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safe Campus",
    desc: "24×7 CCTV surveillance with trained security staff for students' safety.",
  },
];

const Facilities = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-white via-slate-50/60 to-white relative overflow-hidden">
      {/* Background Soft Design Blur Ornament */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-slate-100/50 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* =========================================================
            HEADER: Elite Central Headings Component
           ========================================================= */}
        <div className="text-center mb-20 max-w-2xl mx-auto flex flex-col items-center">
          
          {/* Animated Elite Sub-tag Bulletin */}
          <span className="inline-flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-[4px] px-3.5 py-1.5 bg-indigo-50 rounded-full border border-indigo-100/60 shadow-sm shadow-indigo-100/10 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            Campus Amenities
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            World-Class Facilities
          </h2>

          <p className="text-slate-500 mt-4 text-sm sm:text-base leading-relaxed">
            We provide modern infrastructure to create a comfortable, safe and technology-driven learning environment.
          </p>
        </div>

        {/* =========================================================
            GRID: Premium Interactive Flip-Color Asset Cards
           ========================================================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {facilities.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50/80 hover:bg-slate-900 rounded-3xl p-8 border border-slate-100/80 shadow-md shadow-slate-100/30 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 ease-out group flex flex-col items-start relative overflow-hidden"
            >
              {/* Subtle top indicator strip on normal state */}
              <div className="absolute top-0 inset-x-0 h-1 bg-transparent group-hover:bg-amber-400 transition-all duration-500"></div>

              {/* Advanced Fluid Icon Shape Box */}
              <div className="text-4xl text-indigo-600 group-hover:text-amber-400 mb-6 bg-white group-hover:bg-white/5 border border-slate-100/60 group-hover:border-white/10 w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 transform">
                {item.icon}
              </div>

              {/* Card Title Header with contrast adaptive code */}
              <h3 className="text-xl md:text-2xl font-black text-slate-800 group-hover:text-white mb-3 tracking-tight transition-colors duration-300">
                {item.title}
              </h3>

              {/* Crisp balanced descriptive details body block */}
              <p className="text-slate-500 group-hover:text-slate-300 text-sm leading-relaxed antialiased transition-colors duration-300">
                {item.desc}
              </p>
              
              {/* Geometrical design backdrop wheel layer revealing on hover focus */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 ease-out pointer-events-none"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Facilities;
