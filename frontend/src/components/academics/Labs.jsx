import React from 'react';
import { FaAtom, FaFlask, FaDna, FaLaptopCode } from 'react-icons/fa';

const labsData = [
  {
    icon: <FaAtom />,
    title: "Physics Laboratory",
    desc: "Equipped with advanced optical gadgets, electrical circuits, and modern wave mechanics kits for deep empirical research.",
    tag: "Optics & Mechanics",
    accent: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50/70 text-blue-600"
  },
  {
    icon: <FaFlask />,
    title: "Chemistry Laboratory",
    desc: "A fully ventilated, high-safety workstation infrastructure with modern reagents, precise digital balances, and distillation setups.",
    tag: "High-Safety Zone",
    accent: "from-teal-400 to-emerald-600",
    bgLight: "bg-teal-50/70 text-teal-600"
  },
  {
    icon: <FaDna />,
    title: "Biology Laboratory",
    desc: "Features high-resolution electronic microscopes, comprehensive anatomical models, and pristine specimen archives.",
    tag: "Microscope Enabled",
    accent: "from-rose-500 to-pink-600",
    bgLight: "bg-rose-50/70 text-rose-600"
  },
  {
    icon: <FaLaptopCode />,
    title: "Hi-Tech Computer Science Lab",
    desc: "Advanced networking matrix equipped with rapid high-speed internet servers, dynamic coding setups, and robotics modules.",
    tag: "1:1 Terminal Ratio",
    accent: "from-purple-500 to-violet-600",
    bgLight: "bg-purple-50/70 text-purple-600"
  }
];

const Labs = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50/60 to-white relative overflow-hidden">
      {/* Premium Backing Visual Grid Blur Accent */}
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
            Research Centers
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Experimental Laboratories
          </h2>

          <p className="text-slate-500 mt-4 text-sm sm:text-base leading-relaxed">
            Where theoretical knowledge meets practical execution. Explore our state-of-the-art analytical testing grounds.
          </p>
        </div>

        {/* =========================================================
            GRID: Ultra-Premium Responsive Research Cards Matrix
           ========================================================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {labsData.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border border-slate-100 shadow-md shadow-slate-100/40 p-7 md:p-8 text-center hover:shadow-2xl hover:border-slate-200/80 hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col items-center overflow-hidden"
            >
              {/* Premium Gradient Top-Border Accent on Hover */}
              <div className="absolute top-0 inset-x-0 h-1 bg-slate-100 group-hover:bg-gradient-to-r transition-all duration-300">
                <div className={`w-full h-full bg-gradient-to-r ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>

              {/* Dynamic Operational Parameter Label Badge */}
              <div className="w-full flex justify-center mb-2">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 bg-slate-50 border border-slate-100 rounded px-2.5 py-0.5 select-none">
                  {item.tag}
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

export default Labs;
