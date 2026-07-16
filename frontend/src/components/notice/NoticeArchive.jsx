import { useEffect, useState } from "react";
import { FaArchive, FaFolderOpen, FaArrowRight } from "react-icons/fa";
import { getNotices } from "../../services/noticeService";

const NoticeArchive = () => {
  const [years, setYears] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArchive();
  }, []);

  const fetchArchive = async () => {
    try {
      const { data } = await getNotices();

      const archiveYears = [
        ...new Set(
          (data?.notices || []).map((item) =>
            new Date(item?.publishDate).getFullYear()
          )
        ),
      ].filter(Boolean).sort((a, b) => b - a);

      setYears(archiveYears);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // ─── PREMIUM SKELETON LOADER PREVENTING LAYOUT JUMPS ───
  if (loading) {
    return (
      <section className="py-24 bg-white antialiased font-sans">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="h-5 w-24 bg-slate-200 rounded-full mx-auto animate-pulse" />
            <div className="h-10 w-64 bg-slate-200 rounded-2xl mx-auto animate-pulse" />
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col items-center space-y-4 animate-pulse">
                <div className="w-14 h-14 rounded-2xl bg-slate-200" />
                <div className="h-8 w-16 bg-slate-200 rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-24 bg-white overflow-hidden antialiased font-sans">
      
      {/* Background Soft Glow Ambient Layers */}
      <div className="absolute top-[-10%] left-[-10%] w-[450px] h-[450px] rounded-full bg-blue-400/5 blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-indigo-400/5 blur-[120px] animate-pulse delay-700 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Premium Section Header Layout */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 text-xs font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            History Vault
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
            Notice <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 drop-shadow-sm">Archive</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-500 font-medium">
            Access previous academic records, closed folders, and chronological notice documents.
          </p>
        </div>

        {/* Core Vault Grid Render */}
        {years.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 border border-dashed border-slate-200 rounded-3xl text-slate-400 font-bold text-lg flex flex-col items-center justify-center gap-2">
            <FaArchive className="text-3xl text-slate-300" />
            No Archive Folders Found
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {years.map((year) => (
              <div
                key={year}
                className="group relative bg-slate-50/60 border border-slate-200/80 rounded-3xl p-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:bg-white hover:border-blue-500/40 hover:shadow-[0_20px_40px_rgba(30,64,175,0.06)] overflow-hidden text-center cursor-pointer"
              >
                {/* Laser top shimmer strip accent line on card hover */}
                <div className="absolute top-0 left-0 w-full h-[3.5px] bg-gradient-to-r from-transparent via-blue-500 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

                {/* High-End Folder Icon Pod Indicator */}
                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-2xl mx-auto mb-5 transition-all duration-500 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white group-hover:shadow-[0_10px_20px_rgba(59,130,246,0.25)] group-hover:rotate-3 relative">
                  {/* Swap icons smoothly on mouse hover interaction */}
                  <FaArchive className="absolute opacity-100 group-hover:opacity-0 transition-all duration-300 text-blue-600" />
                  <FaFolderOpen className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 text-white" />
                </div>

                {/* Highlighted Bold Year Text Header */}
                <h3 className="text-3xl font-black text-slate-800 transition-colors duration-300 group-hover:text-blue-600">
                  {year}
                </h3>
                
                {/* Micro Action Button Sub Tag */}
                <div className="mt-4 flex items-center justify-center gap-1.5 text-xs font-bold text-slate-400 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-1 group-hover:translate-y-0 text-blue-600">
                  <span>Open Vault</span>
                  <FaArrowRight className="text-[10px]" />
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default NoticeArchive;
