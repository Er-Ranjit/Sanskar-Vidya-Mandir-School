import {
  FaTrophy,
  FaMedal,
  FaAward,
  FaStar,
} from "react-icons/fa";

const achievements = [
  {
    icon: <FaTrophy className="text-amber-500 drop-shadow-[0_4px_10px_rgba(245,158,11,0.3)]" />,
    title: "Best School Award",
    accentBorder: "hover:border-amber-500/40",
    laserColor: "via-amber-500"
  },
  {
    icon: <FaMedal className="text-blue-500 drop-shadow-[0_4px_10px_rgba(59,130,246,0.3)]" />,
    title: "State Sports Champion",
    accentBorder: "hover:border-blue-500/40",
    laserColor: "via-blue-500"
  },
  {
    icon: <FaAward className="text-emerald-500 drop-shadow-[0_4px_10px_rgba(16,185,129,0.3)]" />,
    title: "100% Board Result",
    accentBorder: "hover:border-emerald-500/40",
    laserColor: "via-emerald-500"
  },
  {
    icon: <FaStar className="text-purple-500 drop-shadow-[0_4px_10px_rgba(168,85,247,0.3)]" />,
    title: "Top Ranked School",
    accentBorder: "hover:border-purple-500/40",
    laserColor: "via-purple-500"
  },
];

const Achievements = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden antialiased font-sans">
      
      {/* Background Soft Glow Aura Layers */}
      <div className="absolute top-[-10%] left-[-10%] w-[450px] h-[450px] rounded-full bg-blue-400/5 blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-indigo-400/5 blur-[120px] animate-pulse delay-700 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Premium Header Architecture */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 text-xs font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            Proud Milestones
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 drop-shadow-sm">Achievements</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-500 font-medium">
            A testament to our dedication, academic brilliance, and excellence across multiple disciplines.
          </p>
        </div>

        {/* 4-Column Luxury Elevated Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-slate-50/60 border border-slate-200/80 rounded-3xl p-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:bg-white hover:shadow-[0_20px_40px_rgba(30,64,175,0.06)] overflow-hidden text-center ${item.accentBorder}`}
            >
              {/* Custom Laser Accent Shimmer Line */}
              <div className={`absolute top-0 left-0 w-full h-[3.5px] bg-gradient-to-r from-transparent ${item.laserColor} to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out`} />

              {/* High-End Vector Icon Ring Wrapper */}
              <div className="w-20 h-20 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-4xl mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:rotate-3 relative overflow-hidden">
                {/* Micro Ambient internal card ring glow */}
                <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">{item.icon}</span>
              </div>

              {/* Highlighted Headline */}
              <h3 className="text-xl font-black text-slate-800 tracking-wide transition-colors duration-300 group-hover:text-blue-600">
                {item.title}
              </h3>

              {/* Decorative Background Counter Badge */}
              <div className="absolute -bottom-5 -right-3 text-6xl font-black text-slate-200/20 select-none pointer-events-none group-hover:text-slate-300/10 transition-colors duration-300">
                0{index + 1}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
