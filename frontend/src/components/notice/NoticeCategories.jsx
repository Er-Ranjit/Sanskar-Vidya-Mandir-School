import { useMemo, useState } from "react";
import { FaBookmark, FaRegCalendarAlt, FaBullhorn } from "react-icons/fa";

const NoticeCategories = ({ notices = [] }) => {
  const [active, setActive] = useState("All");

  // Backend se unique categories nikalna with safety fallback
  const categories = useMemo(() => {
    const unique = [
      ...new Set(
        (notices || [])
          .filter((item) => item?.status === "Active")
          .map((item) => item?.category)
          .filter(Boolean)
      ),
    ];
    return ["All", ...unique];
  }, [notices]);

  // Dynamic Notice Filter Logic
  const filteredNotices = useMemo(() => {
    const activeList = (notices || []).filter((item) => item?.status === "Active");
    if (active === "All") return activeList;
    return activeList.filter(
      (item) =>
        item?.category?.trim().toLowerCase() === active.trim().toLowerCase()
    );
  }, [notices, active]);

  return (
    <section className="relative py-24 bg-white overflow-hidden antialiased font-sans">
      
      {/* Background Subtle Soft Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-blue-400/5 blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[450px] h-[450px] rounded-full bg-indigo-400/5 blur-[120px] animate-pulse delay-700 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Premium Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 text-xs font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            Archive Filter
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
            Notice <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 drop-shadow-sm">Categories</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-500 font-medium">
            Sort and explore filtered documentation folders relative to specific academic streams.
          </p>
        </div>

        {/* Premium Pills Filter Deck Container */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-14 max-w-4xl mx-auto">
          {categories.map((category) => {
            const isActive = active === category;
            return (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={`px-5 py-2.5 rounded-2xl font-bold text-sm transition-all duration-300 transform active:scale-95 border ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent shadow-lg shadow-blue-500/25"
                    : "bg-slate-50 border-slate-200/80 text-slate-600 hover:border-blue-500/40 hover:text-blue-600 hover:bg-white shadow-sm"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Notices Board Render List Block */}
        {filteredNotices.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 border border-dashed border-slate-200 rounded-3xl text-slate-400 font-bold text-lg flex flex-col items-center justify-center gap-3">
            <FaBullhorn className="text-4xl text-slate-300 animate-bounce" />
            No Circulars Found In This Stream
          </div>
        ) : (
          <div className="space-y-5">
            {filteredNotices.map((item) => (
              <div
                key={item._id}
                className="group relative bg-slate-50/50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-white hover:border-blue-500/30 hover:shadow-[0_15px_35px_rgba(30,64,175,0.05)] overflow-hidden"
              >
                {/* Laser top accent highlight border effect on card hover */}
                <div className="absolute top-0 left-0 w-full h-[3.5px] bg-gradient-to-r from-transparent via-blue-500 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

                {/* Top Row Data Alignment Structure */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-4">
                  
                  {/* Highlighted Heading Header text */}
                  <h3 className="text-xl font-black text-slate-800 transition-colors duration-300 group-hover:text-blue-600 flex items-center gap-2.5">
                    <FaBookmark className="text-xs text-blue-500/70 group-hover:text-blue-600 transition-colors" />
                    {item.title}
                  </h3>

                  {/* Highlighted Linear Gradient Category Badge Capsule */}
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 border border-blue-200/60 font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white group-hover:border-transparent group-hover:shadow-sm">
                      {item.category}
                    </span>
                  </div>

                </div>

                {/* Notice Descriptions Content */}
                <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed transition-colors duration-300 group-hover:text-slate-600">
                  {item.description}
                </p>

                {/* Footer Meta Row Tracking block */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-slate-600 transition-colors duration-300">
                  <FaRegCalendarAlt className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                  <span>
                    Published :{" "}
                    <span className="text-slate-500 font-black">
                      {new Date(item.publishDate).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </span>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default NoticeCategories;
