import { useEffect, useState } from "react";
import { FaRegCalendarAlt, FaImages } from "react-icons/fa";
import { getEvents } from "../../services/eventService";

const EventGallery = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const { data } = await getEvents();
      // Filter only items having a valid image asset safely
      const galleryEvents = (data?.events || []).filter((item) => item?.image);
      setEvents(galleryEvents);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // ─── PREMIUM SHIMMER SKELETON LOADER (NO BLANK WHITE SCREEN OR BORING TEXT) ───
  if (loading) {
    return (
      <section className="py-24 bg-slate-100 antialiased font-sans">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="h-5 w-32 bg-slate-200 rounded-full mx-auto animate-pulse" />
            <div className="h-10 w-64 bg-slate-200 rounded-2xl mx-auto animate-pulse" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="bg-white border border-slate-200 rounded-3xl overflow-hidden p-4 space-y-4 shadow-sm">
                <div className="w-full h-56 bg-slate-200 rounded-2xl animate-pulse" />
                <div className="h-6 w-3/4 bg-slate-200 rounded-xl animate-pulse" />
                <div className="h-4 w-1/2 bg-slate-100 rounded-xl animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-24 bg-slate-100 overflow-hidden antialiased font-sans">
      
      {/* Background Soft Glow Ambient Light Overlays */}
      <div className="absolute top-[-10%] left-[-10%] w-[450px] h-[450px] rounded-full bg-blue-400/10 blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-indigo-400/10 blur-[120px] animate-pulse delay-700 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Premium Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 text-xs font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" />
            Visual Archive
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
            Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 drop-shadow-sm">Highlights</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-500 font-medium">
            Browse through the dynamic photo collections of our latest events and ceremonies.
          </p>
        </div>

        {/* Core Gallery Logic Render */}
        {events.length === 0 ? (
          <div className="text-center py-16 bg-white border border-dashed border-slate-200 rounded-3xl text-slate-400 font-bold text-lg flex flex-col items-center justify-center gap-3">
            <FaImages className="text-4xl text-slate-300" />
            No Event Images Found In Database
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((item) => (
              <div
                key={item._id}
                className="group relative bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-500 ease-out hover:-translate-y-1.5"
              >
                {/* Laser strip line on top card border hover */}
                <div className="absolute top-0 left-0 w-full h-[3.5px] bg-gradient-to-r from-transparent via-blue-500 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out z-20" />

                {/* Smooth Zoom Photo Frame Wrapper */}
                <div className="w-full h-56 overflow-hidden relative bg-slate-50 border-b border-slate-100">
                 <img
  src={`${import.meta.env.VITE_SERVER_URL}${item.image}`}
  alt={item.title}
  loading="lazy"
  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
/>
                  
                  {/* Subtle Dark Vignette Mask on Card Image Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Highlighted Meta Data Layout Box */}
                <div className="p-5 space-y-3 bg-white relative z-10">
                  <h3 className="text-lg font-black text-slate-800 transition-colors duration-300 group-hover:text-blue-600 line-clamp-1">
                    {item.title}
                  </h3>
                  
                  {/* Highlighted Calendar Date Row */}
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-blue-600/80 transition-colors duration-300">
                    <FaRegCalendarAlt className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                    <span>
                      {new Date(item.eventDate).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
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

export default EventGallery;
