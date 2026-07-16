import { FaCalendarCheck } from "react-icons/fa";

const months = [
  { month: "January", event: "Sports Day" },
  { month: "February", event: "Science Exhibition" },
  { month: "March", event: "Annual Exams" },
  { month: "April", event: "New Session Begins" },
  { month: "July", event: "Tree Plantation Drive" },
  { month: "August", event: "Independence Day" },
  { month: "September", event: "Teacher's Day" },
  { month: "October", event: "Educational Tour" },
  { month: "November", event: "Children's Day" },
  { month: "December", event: "Annual Function" },
];

const AnnualCalendar = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden antialiased font-sans">
      
      {/* Background Soft Glow Ambient Layers */}
      <div className="absolute top-[-10%] left-[-10%] w-[450px] h-[450px] rounded-full bg-blue-400/5 blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-indigo-400/5 blur-[120px] animate-pulse delay-700 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Premium Header Architecture */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 text-xs font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" />
            Yearly Planner
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 drop-shadow-sm">Event Calendar</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-500 font-medium">
            Plan your academic milestones with our comprehensive month-by-month activity breakdown guide.
          </p>
        </div>

        {/* 3-Column Luxury Elevated Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {months.map((item, index) => (
            <div
              key={index}
              className="group relative bg-slate-50/60 border border-slate-200/80 rounded-3xl p-6 pl-8 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:bg-white hover:border-blue-500/40 hover:shadow-[0_20px_40px_rgba(30,64,175,0.06)] overflow-hidden"
            >
              {/* Premium Left Dynamic Border Highlight Strip */}
              <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-blue-500 to-indigo-500 transform scale-y-70 group-hover:scale-y-100 transition-transform duration-500 origin-center" />
              
              {/* Top Laser Shine Effect */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

              {/* Month Card Header Block Layout */}
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1.5">
                  {/* Highlighted Bold Month Heading */}
                  <h3 className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                    {item.month}
                  </h3>
                  
                  {/* Highlighted Event Title Sub-Stroke */}
                  <p className="text-base font-semibold text-slate-600 group-hover:text-slate-800 transition-colors duration-300 leading-relaxed">
                    {item.event}
                  </p>
                </div>

                {/* Calendar Icon Micro Widget Overlay */}
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-200/60 text-slate-500 flex items-center justify-center text-sm transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6">
                  <FaCalendarCheck />
                </div>
              </div>

              {/* Decorative Subtle Background Text Counter */}
              <div className="absolute -bottom-5 -right-3 text-6xl font-black text-slate-200/20 select-none pointer-events-none group-hover:text-blue-500/[0.03] transition-colors duration-300">
                {index < 9 ? `0${index + 1}` : index + 1}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AnnualCalendar;
