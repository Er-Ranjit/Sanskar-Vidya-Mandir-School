import { Link } from "react-router-dom";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

const EventCTA = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden antialiased font-sans">
      
      {/* Background Soft Premium Glow Elements */}
      <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[130px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-20%] w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[130px] animate-pulse delay-700 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Main Premium Floating Gradient Box */}
        <div className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 rounded-[2.5rem] p-8 sm:p-14 text-center overflow-hidden shadow-[0_30px_60px_rgba(15,23,42,0.15)] border border-slate-800">
          
          {/* Internal Premium Ambient Backdrop Glow */}
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-[80px] pointer-events-none" />
          
          {/* Animated Laser Border Strip on Top */}
          <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-blue-500 via-indigo-400 to-yellow-400" />

          {/* Micro Tag Alert */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-ping" />
            <span className="uppercase tracking-widest text-slate-300 font-bold text-xs">
              Admissions Open 2026
            </span>
          </div>

          {/* Main Title with Strategic Gradient Highlight */}
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white max-w-3xl mx-auto leading-tight drop-shadow-md">
            Be A Part Of Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-yellow-300 drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)]">Next Big Event</span>
          </h2>

          {/* Readability Balanced Description */}
          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium opacity-90">
            Join our vibrant school community and participate in <span className="text-yellow-400 font-bold">educational</span>, cultural, <span className="text-blue-400 font-bold">sports</span>, and social events designed to inspire learning and global leadership.
          </p>

          {/* Premium High-Interaction CTA Buttons */}
          <div className="flex justify-center items-center gap-4 mt-12 flex-wrap relative z-20">
            
            {/* Glowing Main Action Button (Apply Admission) */}
            <Link
              to="/admission"
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-slate-950 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider shadow-lg shadow-yellow-500/20 hover:shadow-xl hover:shadow-yellow-500/30 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 overflow-hidden"
            >
              {/* Internal Hover Shimmer Light Line */}
              <div className="absolute top-0 left-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              <span>Apply Admission</span>
              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Premium Secondary Glass Button (Contact Us) */}
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white hover:bg-white hover:text-slate-950 px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-wider backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 shadow-sm"
            >
              <FaPhoneAlt className="text-xs transition-transform duration-300 group-hover:rotate-12" />
              <span>Contact Us</span>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default EventCTA;
