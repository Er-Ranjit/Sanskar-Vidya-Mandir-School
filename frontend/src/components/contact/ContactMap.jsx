import { FaMapMarkedAlt, FaRegClock, FaDirections } from "react-icons/fa";

const ContactMap = () => {
  // ─── APKI EXACT SCHOOL LOCATION EMBED COORIDNATES URL ───
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5302.251768252822!2d84.07364417181059!3d24.659792668016696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398c4f973301d849%3A0x3e471d0596abc3e5!2sSanskar%20Vidya%20Mandir%20Bhusauli!5e0!3m2!1sen!2sin!4v1784182944279!5m2!1sen!2sin";

  // Share link for external Directions Button redirection
  const externalMapLink = "https://google.com";

  return (
    <section className="relative py-24 bg-slate-100 overflow-hidden antialiased font-sans">
      
      {/* Background Soft Glow Ambient Rings */}
      <div className="absolute top-[-10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-blue-400/10 blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[450px] h-[450px] rounded-full bg-indigo-400/10 blur-[120px] animate-pulse delay-700 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Premium Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 text-xs font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" />
            Campus Location
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
            Find Us On <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 drop-shadow-sm">The Map</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-500 font-medium">
            Plan your physical route or navigate effortlessly using our real-time tracking locator card below.
          </p>
        </div>

        {/* Modern Split-Layout Grid Frame System */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch bg-white border border-slate-200/80 rounded-[2.5rem] shadow-[0_30px_60px_rgba(30,64,175,0.03)] overflow-hidden p-4 sm:p-6 relative">
          
          {/* Subtle Top Border Shimmer Laser Accent */}
          <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-blue-500 via-indigo-600 to-cyan-400" />

          {/* 1. Left Layout Navigation Sidebar Details Panel (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6 p-4 sm:p-6 bg-slate-50 border border-slate-100 rounded-2xl relative group">
            
            <div className="space-y-6">
              
              {/* Address Quick Wrapper Indicator */}
              <div className="space-y-3">
                <div className="flex items-center gap-2.5 text-xs font-black uppercase text-blue-600 tracking-wider">
                  <FaMapMarkedAlt className="text-sm" />
                  <span>Main Campus</span>
                </div>
                <h3 className="text-xl font-black text-slate-800">
                  Sanskar Vidya Mandir
                </h3>
                {/* Highlighted Address Text Block */}
                <p className="text-sm font-semibold text-slate-500 leading-relaxed transition-colors group-hover:text-slate-700">
                  Bhusauli Campus, <span className="text-blue-600 font-bold">Sanskar Vidya Mandir Bhusauli</span>, India
                </p>
              </div>

              {/* Office Operational Timing Metrics Tracker */}
              <div className="space-y-3 pt-6 border-t border-slate-200/60">
                <div className="flex items-center gap-2.5 text-xs font-black uppercase text-indigo-600 tracking-wider">
                  <FaRegClock className="text-sm" />
                  <span>Visiting Hours</span>
                </div>
                {/* Highlighted Timing Data Block */}
                <p className="text-sm font-semibold text-slate-500 leading-relaxed">
                  Monday to Saturday: <span className="text-slate-800 font-bold">08:00 AM – 02:00 PM</span>
                </p>
                <p className="text-xs font-bold text-rose-500">
                  * closed on Sundays and National Holidays
                </p>
              </div>

            </div>

            {/* Premium Direction Route Navigation Anchors Button */}
            <div className="pt-6 border-t border-slate-200/60 sm:pt-0 sm:border-0">
              <a
                href={externalMapLink}
                target="_blank"
                rel="noreferrer"
                className="group/btn relative w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-xl font-bold text-sm tracking-wider uppercase shadow-md shadow-blue-500/10 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 transform active:scale-[0.99] overflow-hidden"
              >
                {/* Shimmer Light Stripe Effect */}
                <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-blue-500 to-transparent transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-out" />
                <FaDirections className="text-base transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                <span>Open Directions</span>
              </a>
            </div>

          </div>

          {/* 2. Right Interactive Core iframe Google Map Player View (8 Columns) */}
          <div className="lg:col-span-8 rounded-2xl overflow-hidden min-h-[350px] sm:min-h-[420px] md:h-[460px] border border-slate-200 bg-slate-50 relative">
            <iframe
              title="School Location Mapping Tracker Frame"
              src={mapEmbedUrl}
              className="w-full h-full border-0 absolute inset-0 opacity-95 hover:opacity-100 transition-opacity duration-300"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactMap;
