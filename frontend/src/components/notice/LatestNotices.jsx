import { useEffect, useState } from "react";
import {
  FaCalendarAlt,
  FaBell,
  FaArrowRight,
} from "react-icons/fa";

import { getNotices } from "../../services/noticeService";

const LatestNotices = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const { data } = await getNotices();
        const activeNotices = (data?.notices || []).filter(
          (item) => item?.status === "Active"
        );
        setNotices(activeNotices.slice(0, 6));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  // ─── PREMIUM SKELETON LOADER PREVENTING LAYOUT JUMPS ───
  if (loading) {
    return (
      <section className="py-24 bg-white antialiased font-sans">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-4">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 animate-pulse">
                <div className="space-y-3 w-full md:w-2/3">
                  <div className="h-4 w-24 bg-slate-200 rounded-xl" />
                  <div className="h-6 w-3/4 bg-slate-200 rounded-xl" />
                  <div className="h-4 w-full bg-slate-100 rounded-xl" />
                </div>
                <div className="h-5 w-28 bg-slate-200 rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-24 bg-white overflow-hidden antialiased font-sans">
      
      {/* Background Soft Glow Aura Layers */}
      <div className="absolute top-[-10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-blue-400/5 blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[450px] h-[450px] rounded-full bg-indigo-400/5 blur-[120px] animate-pulse delay-700 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Premium Header Architecture */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 text-xs font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" />
            Live Bulletin
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
            Latest Official <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 drop-shadow-sm">Notices</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-500 font-medium">
            Review live circulars, institutional policy changes, announcements and urgent student updates.
          </p>
        </div>

        {/* Dynamic Board Notices List Section */}
        {notices.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 border border-dashed border-slate-200 rounded-3xl text-slate-400 font-bold text-lg">
            No Active Notices Posted For This Period
          </div>
        ) : (
          <div className="space-y-4">
            {notices.map((item) => (
              <div
                key={item._id}
                className="group relative bg-slate-50/60 border border-slate-200/80 rounded-3xl p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-white hover:border-blue-500/30 hover:shadow-[0_15px_35px_rgba(30,64,175,0.05)] flex flex-col md:flex-row justify-between items-start md:items-center gap-6 overflow-hidden"
              >
                {/* Micro Moving Laser Border Accent Top Line */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

                {/* Left Block Content Frame */}
                <div className="space-y-3 flex-1">
                  
                  {/* Highlighted Live Notification Category Badge */}
                  <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-wider text-blue-600 group-hover:text-indigo-600 transition-colors duration-300">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
                    </span>
                    <FaBell className="text-[10px]" />
                    <span>{item.category}</span>
                  </div>

                  {/* Header Title Title Text */}
                  <h3 className="text-xl sm:text-2xl font-black text-slate-800 transition-colors duration-300 group-hover:text-blue-600">
                    {item.title}
                  </h3>

                  {/* Descriptions Content */}
                  <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed max-w-3xl transition-colors duration-300 group-hover:text-slate-600">
                    {item.description}
                  </p>
                </div>

                {/* Right Block Layout Meta Positioning Wrapper */}
                <div className="flex items-center justify-between w-full md:w-auto pt-4 md:pt-0 border-t border-slate-100 md:border-0 gap-6">
                  
                  {/* Highlighted Calendar Date Widget */}
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-slate-700 transition-colors duration-300">
                    <FaCalendarAlt className="text-slate-400 group-hover:text-blue-500 transition-colors duration-300" />
                    <span>
                      {new Date(item.publishDate).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </div>

                  {/* Interactive Micro Icon Arrow link anchor indicator */}
                  <div className="w-9 h-9 rounded-xl bg-slate-200/50 text-slate-400 flex items-center justify-center text-xs transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:translate-x-0.5">
                    <FaArrowRight />
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default LatestNotices;
