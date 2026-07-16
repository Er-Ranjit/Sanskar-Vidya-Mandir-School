import { useEffect, useState } from "react";
import { FaDownload, FaFilePdf } from "react-icons/fa";
import { getNotices } from "../../services/noticeService";

const DownloadSection = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDownloads();
  }, []);

  const fetchDownloads = async () => {
    try {
      const { data } = await getNotices();

      const files = (data?.notices || []).filter(
        (item) => item?.file
      );

      setNotices(files);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // ─── PREMIUM SHIMMER SKELETON LOADER STATE ───
  if (loading) {
    return (
      <section className="py-24 bg-slate-100 antialiased font-sans">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="h-5 w-24 bg-slate-200 rounded-full mx-auto animate-pulse" />
            <div className="h-10 w-64 bg-slate-200 rounded-2xl mx-auto animate-pulse" />
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-white border border-slate-200 rounded-3xl p-6 flex justify-between items-center gap-4 animate-pulse shadow-sm">
                <div className="flex items-center gap-4 w-2/3">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100" />
                  <div className="space-y-2 flex-1">
                    <div className="h-5 w-5/6 bg-slate-200 rounded-xl" />
                    <div className="h-4 w-1/3 bg-slate-100 rounded-xl" />
                  </div>
                </div>
                <div className="w-28 h-12 rounded-2xl bg-slate-200" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-24 bg-slate-100 overflow-hidden antialiased font-sans">
      
      {/* Background Soft Glow Ambient Layers */}
      <div className="absolute top-[-10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-blue-400/10 blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[450px] h-[450px] rounded-full bg-indigo-400/10 blur-[120px] animate-pulse delay-700 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Premium Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 text-xs font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" />
            Resources Desk
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
            Download Official <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 drop-shadow-sm">Notices</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-500 font-medium">
            Access, stream, and download attachments, syllabi guides, and circular PDF document links locally.
          </p>
        </div>

        {/* Core Documents List Container */}
        {notices.length === 0 ? (
          <div className="text-center py-12 bg-white border border-dashed border-slate-200 rounded-3xl text-slate-400 font-bold text-lg">
            No Attachable Files Available For Download Currently
          </div>
        ) : (
          <div className="space-y-4">
            {notices.map((item) => (
              <div
                key={item._id}
                className="group relative bg-white border border-slate-200/80 rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row justify-between sm:items-center gap-5 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_20px_40px_rgba(30,64,175,0.04)] overflow-hidden"
              >
                {/* Laser top accent line animation on card hover */}
                <div className="absolute top-0 left-0 w-full h-[3.5px] bg-gradient-to-r from-transparent via-blue-500 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out z-20" />

                {/* Left Info Frame Layout */}
                <div className="flex items-center gap-4">
                  
                  {/* Premium PDF Red Vector Frame Pod */}
                  <div className="w-14 h-14 rounded-2xl bg-rose-50 border border-rose-100/50 text-rose-600 flex items-center justify-center text-3xl flex-shrink-0 transition-all duration-500 group-hover:scale-105 group-hover:bg-rose-600 group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(225,29,72,0.2)]">
                    <FaFilePdf className="transition-transform duration-300 group-hover:rotate-3" />
                  </div>

                  {/* Text Header Data Structure */}
                  <div className="space-y-1.5">
                    {/* Highlighted Document Title */}
                    <h3 className="text-lg font-black text-slate-800 transition-colors duration-300 group-hover:text-blue-600 line-clamp-1">
                      {item.title}
                    </h3>
                    
                    {/* Highlighted Bold Category Tag Wrapper */}
                    <span className="inline-block px-2.5 py-0.5 bg-slate-100 text-slate-600 font-bold text-[10px] uppercase tracking-wider rounded-lg transition-colors group-hover:bg-blue-50 group-hover:text-blue-600">
                      {item.category}
                    </span>
                  </div>

                </div>

                {/* Right Area: Premium Shimmer Download Action Button */}
                <div className="flex-shrink-0 pt-4 sm:pt-0 border-t border-slate-50 sm:border-0">
                  <a
                    href={`http://localhost:5000${item.file}`}
                    target="_blank"
                    rel="noreferrer"
                    className="group/btn relative inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3.5 rounded-2xl font-bold text-sm tracking-wide shadow-md shadow-blue-500/10 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 transform active:scale-[0.98] overflow-hidden w-full sm:w-auto"
                  >
                    {/* Internal Hover Shimmer Strip Line */}
                    <div className="absolute top-0 left-0 w-full h-full bg-white/10 transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-out" />
                    
                    {/* Download Icon with Micro-Bounce Animation Loop */}
                    <FaDownload className="text-xs transition-transform duration-300 group-hover/btn:translate-y-0.5 group-hover/btn:animate-bounce" />
                    <span>Download File</span>
                  </a>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default DownloadSection;
