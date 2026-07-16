import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaArrowLeft, FaRedo } from "react-icons/fa";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50 px-6 overflow-hidden relative">
      
      {/* Background Animated Floating Circles (Using pure Tailwind) */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>

      {/* Smooth Entry & Hover Scale via Tailwind */}
      <div className="text-center max-w-2xl bg-white/80 backdrop-blur-md p-12 rounded-3xl shadow-xl border border-slate-200/50 relative z-10 transition-all duration-500 transform hover:scale-[1.01]">
        
        {/* Animated 404 Bounce Text */}
        <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 tracking-tight select-none animate-bounce">
          404
        </h1>

        <h2 className="text-3xl font-extrabold text-slate-800 mt-6 tracking-tight">
          Oops! Page Lost in Space
        </h2>

        <p className="text-slate-600 mt-4 text-lg max-w-md mx-auto leading-relaxed">
          The page you are looking for doesn't exist, or has been moved to another galaxy.
        </p>

        {/* Interactive Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          
          {/* Go Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-medium px-6 py-3.5 rounded-xl shadow-md transition-all active:scale-95 transform hover:-translate-y-0.5"
          >
            <FaArrowLeft className="w-4 h-4" />
            Go Back
          </button>

          {/* Home Button */}
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3.5 rounded-xl shadow-md transition-all active:scale-95 transform hover:-translate-y-0.5"
          >
            <FaHome className="w-4 h-4" />
            Back To Home
          </Link>

          {/* Reload Button */}
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center justify-center p-4 text-slate-500 hover:text-blue-600 bg-slate-100 hover:bg-blue-50 rounded-xl shadow-sm transition-all hover:rotate-180 duration-500 active:scale-95"
            title="Reload Page"
          >
            <FaRedo className="w-4 h-4" />
          </button>

        </div>
      </div>
    </section>
  );
};

export default NotFound;
