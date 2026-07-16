import { useEffect, useState } from "react";
import {
  FaExclamationCircle,
  FaArrowRight,
} from "react-icons/fa";

import { getNotices } from "../../services/noticeService";

const ImportantNotices = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const { data } = await getNotices();

        const activeNotices = (data?.notices || []).filter(
          (item) => item?.status === "Active"
        );

        setNotices(activeNotices);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  // ─── PREMIUM RED SKELETON LOADER STATE ───
  if (loading) {
    return (
      <section className="py-24 bg-slate-100 antialiased font-sans">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="h-5 w-24 bg-rose-200/50 rounded-full mx-auto animate-pulse" />
            <div className="h-10 w-64 bg-slate-200 rounded-2xl mx-auto animate-pulse" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 4].map((n) => (
              <div key={n} className="bg-white border border-slate-200 rounded-3xl p-6 flex justify-between items-center gap-4 animate-pulse shadow-sm">
                <div className="flex items-center gap-4 w-3/4">
                  <div className="w-12 h-12 rounded-2xl bg-rose-100" />
                  <div className="space-y-2 flex-1">
                    <div className="h-5 w-5/6 bg-slate-200 rounded-xl" />
                    <div className="h-4 w-1/3 bg-slate-100 rounded-xl" />
                  </div>
                </div>
                <div className="w-8 h-8 rounded-xl bg-slate-200" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-24 bg-slate-100 overflow-hidden antialiased font-sans">
      
      {/* Background Soft Red/Rose Glowing Aura (Alert Intent Accent) */}
      <div className="absolute top-[-10%] left-[-10%] w-[450px] h-[450px] rounded-full bg-rose-500/5 blur-[130px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-orange-400/5 blur-[130px] animate-pulse delay-700 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Premium Section Header with Red Warning Tag Highlight */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-700 text-xs font-semibold tracking-wider uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-600" />
            </span>
            High Priority
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
            Important <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-500 drop-shadow-sm">Announcements</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-500 font-medium">
            Please read through these immediate response circulars and mandatory action notices carefully.
          </p>
        </div>

        {/* Core Layout Grid System */}
        {notices.length === 0 ? (
          <div className="text-center py-12 bg-white border border-dashed border-slate-200 rounded-3xl text-slate-400 font-bold text-lg">
            No Critical Announcements Listed At This Time
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {notices.map((item) => (
              <div
                key={item._id}
                className="group relative bg-white border border-slate-200/80 rounded-3xl p-6 flex justify-between items-center gap-4 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-rose-500/30 hover:shadow-[0_20px_40px_rgba(225,29,72,0.04)] overflow-hidden"
              >
                {/* Micro Moving Laser Border Accent Top Line (Rose Red Accent) */}
                <div className="absolute top-0 left-0 w-full h-[3.5px] bg-gradient-to-r from-transparent via-rose-500 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

                {/* Left Section Info Grid */}
                <div className="flex items-center gap-4">
                  
                  {/* Premium Warning Round Badge Wrapper with Waves */}
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center text-xl transition-all duration-300 group-hover:bg-rose-600 group-hover:text-white group-hover:scale-105 group-hover:shadow-[0_8px_20px_rgba(225,29,72,0.25)] flex-shrink-0">
                    <FaExclamationCircle className="transition-transform duration-300 group-hover:rotate-12" />
                  </div>

                  {/* Text Data Block */}
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-black text-slate-800 tracking-wide transition-colors duration-300 group-hover:text-rose-600 line-clamp-1">
                      {item.title}
                    </h3>
                    
                    {/* Highlighted Bold Category Tag */}
                    <span className="inline-block text-xs font-bold text-slate-400 group-hover:text-rose-500/80 transition-colors uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                </div>

                {/* Right Interactive Arrow Ring Trigger */}
                <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 text-slate-400 flex items-center justify-center text-xs transition-all duration-300 group-hover:bg-rose-600 group-hover:border-rose-600 group-hover:text-white group-hover:translate-x-0.5 flex-shrink-0 shadow-sm">
                  <FaArrowRight />
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default ImportantNotices;
