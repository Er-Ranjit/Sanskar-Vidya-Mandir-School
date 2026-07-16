import {
  FaIdCard,
  FaFileAlt,
  FaHome,
  FaUserGraduate,
  FaImage,
  FaCertificate,
} from "react-icons/fa";

const documents = [
  {
    icon: <FaCertificate />,
    title: "Birth Certificate",
    desc: "Original & Photocopy",
  },
  {
    icon: <FaUserGraduate />,
    title: "Previous Report Card",
    desc: "Latest Academic Result",
  },
  {
    icon: <FaFileAlt />,
    title: "Transfer Certificate",
    desc: "Required from Class II onwards",
  },
  {
    icon: <FaIdCard />,
    title: "Aadhar Card",
    desc: "Student & Parents",
  },
  {
    icon: <FaHome />,
    title: "Address Proof",
    desc: "Electricity Bill / Ration Card",
  },
  {
    icon: <FaImage />,
    title: "Passport Photos",
    desc: "4 Recent Passport Size Photos",
  },
];

const RequiredDocuments = () => {
  return (
    <section className="relative py-24 bg-slate-100 overflow-hidden antialiased font-sans">
      
      {/* Background Subtle Soft Glows (Light Theme) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-400/20 blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-400/20 blur-[150px] animate-pulse delay-700 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Premium Animated Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
            Documentation Guide
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2 bg-clip-text">
            Required Documents
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-medium leading-relaxed">
            Keep these documents ready to fast-track your secure application onboarding process.
          </p>
        </div>

        {/* 3D-Like Premium Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documents.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white border border-slate-200 rounded-3xl p-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_20px_40px_rgba(30,64,175,0.08)] overflow-hidden"
            >
              {/* Card Ambient Glow on Hover (Light Theme) */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-indigo-500/0 group-hover:from-blue-500/[0.02] group-hover:to-indigo-500/[0.02] transition-all duration-500" />
              
              {/* Premium Icon Container with Ripple & Rotate Animation */}
              <div className="relative w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 text-blue-600 flex items-center justify-center text-2xl mb-8 transition-all duration-500 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-indigo-600 group-hover:text-white group-hover:rotate-6 group-hover:shadow-[0_10px_25px_rgba(59,130,246,0.3)]">
                {/* Micro-glow inside icon */}
                <div className="absolute inset-0 rounded-2xl bg-blue-400/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
                <span className="relative z-10">{item.icon}</span>
              </div>

              {/* Text Layout */}
              <div className="relative z-10 space-y-3">
                <h3 className="text-xl font-bold text-slate-800 tracking-wide transition-colors duration-300 group-hover:text-blue-600 flex items-center gap-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed transition-colors duration-300 group-hover:text-slate-600">
                  {item.desc}
                </p>
              </div>

              {/* Sleek Line Animation at the Top */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RequiredDocuments;
