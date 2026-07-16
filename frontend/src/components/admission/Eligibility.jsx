import {
  FaCheckCircle,
  FaChild,
  FaBook,
  FaSchool,
  FaInfoCircle,
} from "react-icons/fa";

const eligibilityData = [
  {
    icon: <FaChild />,
    title: "Nursery Tiers",
    age: "Age 3+ Years",
    badge: "Early Foundation"
  },
  {
    icon: <FaSchool />,
    title: "Primary Wing",
    age: "Class I - V",
    badge: "Core Basics"
  },
  {
    icon: <FaBook />,
    title: "Middle School",
    age: "Class VI - VIII",
    badge: "Conceptual Learning"
  },
  {
    icon: <FaCheckCircle />,
    title: "Senior Secondary",
    age: "Class IX - XII",
    badge: "Career Pathways"
  },
];

const Eligibility = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-white via-slate-50/60 to-white relative overflow-hidden">
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
            Criteria Guidelines
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Admission Eligibility
          </h2>

          <p className="text-slate-500 mt-4 text-sm sm:text-base leading-relaxed">
            Students are admitted according to standardized age criteria frameworks and previous verified academic score track records.
          </p>
        </div>

        {/* =========================================================
            GRID: Premium Flip-Color Micro-Animated Cards
           ========================================================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {eligibilityData.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50/80 hover:bg-slate-900 rounded-3xl p-8 border border-slate-100/80 shadow-md shadow-slate-100/30 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 ease-out group flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Top border ambient color line highlight strip on hover */}
              <div className="absolute top-0 inset-x-0 h-1 bg-transparent group-hover:bg-amber-400 transition-all duration-500"></div>

              {/* Minimal category tier badge overlay tracker */}
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 group-hover:text-slate-400/80 bg-white group-hover:bg-white/5 border border-slate-100/60 group-hover:border-white/5 rounded px-2 py-0.5 mb-4 transition-colors">
                {item.badge}
              </span>

              {/* Advanced Floating Icon Container Box */}
              <div className="text-3xl text-indigo-600 group-hover:text-amber-400 mb-5 bg-white group-hover:bg-white/5 border border-slate-100/60 group-hover:border-white/10 w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 transform">
                {item.icon}
              </div>

              {/* Title Header with responsive contrast logic */}
              <h3 className="text-xl font-bold text-slate-800 group-hover:text-white mb-2 tracking-tight transition-colors duration-300">
                {item.title}
              </h3>

              {/* Subtitle Parameter text display */}
              <p className="text-slate-500 group-hover:text-slate-300 text-sm font-semibold transition-colors duration-300">
                {item.age}
              </p>
              
              {/* Geometric backdrop element */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 ease-out pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* =========================================================
            BOTTOM ADDITION: Luxury Editorial Notes Grid Board
           ========================================================= */}
        <div className="mt-16 bg-white border border-slate-100/80 shadow-xl shadow-slate-100/40 rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col md:flex-row gap-6 md:gap-10 items-start">
          {/* Left thick accent alignment bar strip */}
          <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-b from-indigo-600 to-amber-500 rounded-l-full"></div>
          
          {/* Headline Identifier layout block columns */}
          <div className="flex-shrink-0 md:max-w-xs w-full pt-1">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100/40 flex items-center justify-center text-lg mb-4 shadow-inner">
              <FaInfoCircle />
            </div>
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              Important Notes
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1.5 leading-relaxed font-medium">
              Please ensure all necessary files are organized perfectly before physical counter verifications at campus desk.
            </p>
          </div>

          {/* Listing Rows Grid parameters block */}
          <div className="w-full flex-grow pt-2">
            <ul className="grid sm:grid-cols-2 gap-4 text-slate-600 text-sm font-medium">
              <li className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50/60 border border-slate-100 hover:border-slate-200 transition-colors">
                <span className="text-indigo-600 text-xs mt-0.5 flex-shrink-0">✦</span>
                <span>Birth Certificate is mandatory for Nursery admission verification tracks.</span>
              </li>
              <li className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50/60 border border-slate-100 hover:border-slate-200 transition-colors">
                <span className="text-indigo-600 text-xs mt-0.5 flex-shrink-0">✦</span>
                <span>Official Transfer Certificate (TC) is strictly required for Class II onwards.</span>
              </li>
              <li className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50/60 border border-slate-100 hover:border-slate-200 transition-colors">
                <span className="text-indigo-600 text-xs mt-0.5 flex-shrink-0">✦</span>
                <span>Previous authentic academic Report Card and grading sheets are compulsory.</span>
              </li>
              <li className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50/60 border border-slate-100 hover:border-slate-200 transition-colors">
                <span className="text-indigo-600 text-xs mt-0.5 flex-shrink-0">✦</span>
                <span>All original copies of attached documents will be physically verified.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Eligibility;
