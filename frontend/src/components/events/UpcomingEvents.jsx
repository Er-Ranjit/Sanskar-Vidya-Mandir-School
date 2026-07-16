import { useEffect, useState } from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { getEvents } from "../../services/eventService";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const { data } = await getEvents();
      setEvents(data.events || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // ─── PREMIUM SKELETON LOADER STATE (NO MORE BORING WHITE BLANK TEXT) ───
  if (loading) {
    return (
      <section className="py-24 bg-white antialiased font-sans">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="h-5 w-32 bg-slate-200 rounded-full mx-auto animate-pulse" />
            <div className="h-10 w-64 bg-slate-200 rounded-2xl mx-auto animate-pulse" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden p-5 space-y-4">
                <div className="w-full h-48 bg-slate-200 rounded-2xl animate-pulse" />
                <div className="h-6 w-3/4 bg-slate-200 rounded-xl animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-slate-200 rounded-xl animate-pulse" />
                  <div className="h-4 w-5/6 bg-slate-200 rounded-xl animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-24 bg-white overflow-hidden antialiased font-sans">
      
      {/* Background Subtle Premium Aura Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[450px] h-[450px] rounded-full bg-blue-400/5 blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-indigo-400/5 blur-[120px] animate-pulse delay-700 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Premium Header Layout */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 text-xs font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" />
            Notice Board
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
            Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 drop-shadow-sm">Campus Events</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-500 font-medium">
            Stay updated with our upcoming competitions, schedules, and official timeline milestones.
          </p>
        </div>

        {/* Cards Render Grid Container */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.length === 0 ? (
            <div className="col-span-full text-center py-12 bg-slate-50 border border-dashed border-slate-200 rounded-3xl text-slate-400 font-bold text-lg">
              No Upcoming Events Scheduled Currently
            </div>
          ) : (
            events.map((item) => (
              <div
                key={item._id}
                className="group relative bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-500 ease-out hover:-translate-y-2"
              >
                {/* Laser strip accent line on card top edge hover */}
                <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-blue-500 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out z-20" />

                {/* Event Cover Image Box */}
                {item.image && (
                  <div className="w-full h-52 overflow-hidden relative bg-slate-100 border-b border-slate-100">
                    <img
                      src={`http://localhost:5000${item.image}`}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Content Box Core Elements */}
                <div className="p-6 space-y-4">
                  
                  {/* Title & Info Block */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-black text-slate-800 transition-colors duration-300 group-hover:text-blue-600 group-line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Metadata Indicators Tracking Section */}
                  <div className="pt-4 border-t border-slate-100 space-y-2.5">
                    
                    {/* Event Timestamp Trigger */}
                    <div className="flex items-center gap-3 text-sm text-slate-600 font-bold group-hover:text-slate-800 transition-colors">
                      <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xs group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        <FaCalendarAlt />
                      </div>
                      <span>
                        {new Date(item.eventDate).toLocaleDateString(undefined, {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>

                    {/* Geographical Location Marker */}
                    <div className="flex items-center gap-3 text-sm text-slate-600 font-bold group-hover:text-slate-800 transition-colors">
                      <div className="w-8 h-8 rounded-xl bg-red-50 text-red-500 flex items-center justify-center text-xs group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                        <FaMapMarkerAlt />
                      </div>
                      <span className="line-clamp-1">{item.location}</span>
                    </div>

                  </div>

                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
};

export default UpcomingEvents;
