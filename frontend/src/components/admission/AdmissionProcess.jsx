import {
  FaClipboardCheck,
  FaFileAlt,
  FaUserGraduate,
  FaCheckCircle,
} from "react-icons/fa";

const stepsData = [
  {
    icon: <FaClipboardCheck />,
    title: "Fill Application Form",
    desc: "Complete the admission form with all required student information.",
    accent: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50/70 text-blue-600"
  },
  {
    icon: <FaFileAlt />,
    title: "Submit Documents",
    desc: "Attach all required documents for verification.",
    accent: "from-purple-500 to-indigo-600",
    bgLight: "bg-purple-50/70 text-purple-600"
  },
  {
    icon: <FaUserGraduate />,
    title: "Verification",
    desc: "School administration verifies your application and documents.",
    accent: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-50/70 text-amber-600"
  },
  {
    icon: <FaCheckCircle />,
    title: "Admission Confirmed",
    desc: "Pay the admission fee and confirm your child's enrollment.",
    accent: "from-emerald-500 to-teal-600",
    bgLight: "bg-emerald-50/70 text-emerald-600"
  },
];

const AdmissionProcess = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-white via-slate-50/60 to-white relative overflow-hidden">
      {/* Premium Backing Geometric Blur Accents */}
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
            How to Join
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Simple 4-Step Admission
          </h2>

          <p className="text-slate-500 mt-4 text-sm sm:text-base leading-relaxed">
            Complete your onboarding roadmap effortlessly. Your child's career transition managed in easy stages.
          </p>
        </div>

        {/* =========================================================
            GRID: Ultra-Premium Micro-Animated Timeline Steps Grid
           ========================================================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">

          {stepsData.map((step, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border border-slate-100 shadow-md shadow-slate-100/40 p-7 md:p-8 text-center hover:shadow-2xl hover:border-slate-200/80 hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col items-center overflow-hidden"
            >
              {/* Premium Gradient Top Border Shimmer Highlight Line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-slate-100 group-hover:bg-gradient-to-r transition-all duration-300">
                <div className={`w-full h-full bg-gradient-to-r ${step.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>

              {/* Dynamic Steps Circular Badge Overlay Count */}
              <div className="absolute top-4 right-4 w-7 h-7 rounded-lg bg-slate-50 group-hover:bg-slate-900 border border-slate-100/80 text-slate-400 group-hover:text-amber-400 font-black text-xs flex items-center justify-center transition-all duration-300 shadow-inner select-none">
                0{index + 1}
              </div>

              {/* Floating Dynamic Circular Icon Frame Container */}
              <div className={`w-16 h-16 rounded-2xl ${step.bgLight} text-2xl flex items-center justify-center mb-6 border border-transparent group-hover:border-white shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 transform`}>
                {step.icon}
              </div>

              {/* Title Header with Focus Underline Indicator */}
              <div className="relative mb-3.5">
                <h3 className="text-lg md:text-xl font-bold text-slate-800 group-hover:text-indigo-950 transition-colors duration-200 tracking-tight leading-snug">
                  {step.title}
                </h3>
                <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-6 h-0.5 bg-gradient-to-r ${step.accent} transition-all duration-300 rounded-full`}></div>
              </div>

              {/* Crisp Balanced Summary Description Text */}
              <p className="text-slate-500 text-sm leading-relaxed antialiased">
                {step.desc}
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

export default AdmissionProcess;
