import { useEffect, useState } from "react";
import { FaBell, FaDownload, FaInbox } from "react-icons/fa";

import { getNotices } from "../../services/noticeService";

const LatestNotices = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const { data } = await getNotices();
      setNotices(data.notices || []);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Visual background blend anchor element */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-50/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* =========================================================
            HEADER: Elite Notice Board Heading Tag
           ========================================================= */}
        <div className="text-center mb-16 flex flex-col items-center">
          
          {/* Animated Premium Badge Indicator */}
          <span className="inline-flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-[4px] px-3.5 py-1.5 bg-indigo-50 rounded-full border border-indigo-100/50 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            Bulletin Board
          </span>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Latest Notices & Circulars
          </h2>

          <p className="text-slate-500 mt-3 text-sm sm:text-base max-w-md">
            Stay updated with the latest live school announcements and dynamic academic circulars.
          </p>
        </div>

        {/* =========================================================
            LISTING: Premium Micro-Animated Strip Grid Layout
           ========================================================= */}
        <div className="space-y-4">
          {notices.length > 0 ? (
            notices.slice(0, 5).map((notice) => (
              <div
                key={notice._id}
                className="group bg-white rounded-2xl border border-slate-100/80 shadow-md shadow-slate-100/30 p-5 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:shadow-xl hover:border-indigo-100/60 hover:-translate-y-0.5 transition-all duration-300"
              >
                
                {/* Left side: Icon + Title Group */}
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  {/* Premium Bell Ring Wrapper Container */}
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 group-hover:bg-indigo-600 text-indigo-600 group-hover:text-white flex items-center justify-center text-lg shadow-sm transition-all duration-300 transform group-hover:rotate-6 flex-shrink-0">
                    <FaBell className="group-hover:animate-bounce" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-bold text-slate-800 text-base sm:text-lg group-hover:text-indigo-950 transition-colors duration-200 leading-snug">
                      {notice.title}
                    </h3>
                    
                    {/* Balanced dynamic date block tracking text styling */}
                    <div className="inline-flex items-center text-slate-400 text-xs font-semibold uppercase tracking-wider bg-slate-50 border border-slate-100 rounded px-2 py-0.5">
                      {new Date(notice.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                      })}
                    </div>
                  </div>
                </div>

                {/* Right side: Modern Dynamic Conditional CTA buttons */}
                <div className="w-full sm:w-auto flex justify-end">
                  {notice.file ? (
                    <a
                      href={`http://localhost:5000${notice.file}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto bg-gradient-to-r from-slate-900 to-indigo-950 hover:from-indigo-600 hover:to-indigo-700 text-white font-semibold px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 text-xs md:text-sm shadow-md hover:shadow-indigo-600/20 transition-all duration-300"
                    >
                      <FaDownload className="text-xs group-hover:translate-y-0.5 transition-transform" />
                      Download File
                    </a>
                  ) : (
                    <button
                      disabled
                      className="w-full sm:w-auto bg-slate-50 text-slate-400 border border-slate-100 px-5 py-2.5 rounded-xl flex items-center justify-center gap-2 text-xs md:text-sm cursor-not-allowed font-medium"
                    >
                      <FaDownload className="opacity-40" />
                      Circular Text Only
                    </button>
                  )}
                </div>

              </div>
            ))
          ) : (
            /* Premium Empty State Screen */
            <div className="text-center py-16 bg-white border border-dashed border-slate-200 rounded-3xl p-8 flex flex-col items-center max-w-md mx-auto shadow-sm">
              <div className="w-14 h-14 bg-slate-50 text-slate-400 border border-slate-100 rounded-2xl flex items-center justify-center text-xl mb-4">
                <FaInbox />
              </div>
              <h4 className="text-slate-700 font-bold text-lg mb-1">No Active Circulars</h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Everything is up-to-date! When new academic schedules or notifications drop, they will sync right here instantly.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default LatestNotices;
