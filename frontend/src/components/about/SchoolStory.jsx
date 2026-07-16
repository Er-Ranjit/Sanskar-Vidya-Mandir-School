import { useEffect, useState } from "react";
import { getSettings } from "../../services/settingsService";
import school from "../../assets/image.png";

const SchoolStory = () => {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const { data } = await getSettings();
      setSettings(data.settings);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="py-28 bg-gradient-to-b from-white via-slate-50/60 to-white relative overflow-hidden">
      {/* Visual background ambient blend anchor element */}
      <div className="absolute top-1/4 left-1/3 -translate-y-1/2 w-96 h-96 bg-indigo-50/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* =========================================================
            LEFT SIDE: Elite Geometric Framed Image (5 Columns)
           ========================================================= */}
        <div className="lg:col-span-5 relative group flex justify-center w-full">
          {/* Layered Decorative Elements for Editorial Depth */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-amber-400/20 to-indigo-900/5 rounded-3xl -rotate-2 group-hover:rotate-0 transition-transform duration-500 hidden sm:block"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-indigo-600/5 to-transparent rounded-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500 hidden sm:block"></div>
          
       {/* Standard size matching box */}
<div className="relative overflow-hidden rounded-2xl shadow-2xl border border-slate-100 bg-slate-50 w-full max-w-md lg:max-w-none h-[460px] lg:h-[500px]">
  <img
    src={school}
    alt="School Campus"
    /* object-fill image ko stretch karke poore box me corner-to-corner tight fit cover kar dega bina kisi hisse ko kaate */
    className="w-full h-full object-fill transition-transform duration-700 group-hover:scale-[1.03] select-none"
  />
  {/* Soft inner shadow frame overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none"></div>
</div>


        </div>

        {/* =========================================================
            RIGHT SIDE: Premium Typography & Stat Bricks (7 Columns)
           ========================================================= */}
        <div className="lg:col-span-7 flex flex-col items-start pl-0 lg:pl-4">
          
          {/* Animated Elite Sub-tag Bulletin */}
          <span className="inline-flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-[4px] px-3.5 py-1.5 bg-indigo-50 rounded-full border border-indigo-100/60 shadow-sm shadow-indigo-100/10 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            Our Journey
          </span>

          {/* Luxury Bold Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight w-full">
            {settings?.schoolName || "Sanskar Vidya Mandir"}
          </h2>

          {/* Clean Description Text Block */}
          <p className="mt-5 text-slate-600 leading-relaxed text-base md:text-lg font-normal antialiased w-full">
            {settings?.about ||
              "Sanskar Vidya Mandir is dedicated to providing quality education with discipline, moral values, innovation and academic excellence. Our aim is to develop confident, responsible and successful students who can contribute positively to society."}
          </p>

          {/* =========================================================
              STATS GRID: Premium Balanced Micro-Animated Stat Cards
             ========================================================= */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5 mt-10 w-full">

            {/* Card 1: Established */}
            <div className="group/card relative bg-white p-5 md:p-6 rounded-2xl border border-slate-100/80 shadow-md shadow-slate-100/30 hover:shadow-xl hover:border-indigo-100/50 hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center justify-center overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-slate-100 group-hover/card:bg-indigo-600 transition-all duration-300"></div>
              <h3 className="text-2xl sm:text-3xl font-black text-indigo-600 tracking-tight transition-transform duration-300 group-hover/card:scale-105">
                {settings?.establishedYear || "2005"}
              </h3>
              <p className="text-xs font-bold text-slate-400 group-hover/card:text-indigo-600 mt-2 uppercase tracking-[1.5px] transition-colors">Established</p>
            </div>

            {/* Card 2: Students */}
            <div className="group/card relative bg-white p-5 md:p-6 rounded-2xl border border-slate-100/80 shadow-md shadow-slate-100/30 hover:shadow-xl hover:border-indigo-100/50 hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center justify-center overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-slate-100 group-hover/card:bg-indigo-600 transition-all duration-300"></div>
              <h3 className="text-2xl sm:text-3xl font-black text-indigo-600 tracking-tight transition-transform duration-300 group-hover/card:scale-105">
                {settings?.totalStudents || "1000"}+
              </h3>
              <p className="text-xs font-bold text-slate-400 group-hover/card:text-indigo-600 mt-2 uppercase tracking-[1.5px] transition-colors">Enrolled Students</p>
            </div>

            {/* Card 3: Teachers */}
            <div className="group/card relative bg-white p-5 md:p-6 rounded-2xl border border-slate-100/80 shadow-md shadow-slate-100/30 hover:shadow-xl hover:border-amber-100/50 hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center justify-center overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-slate-100 group-hover/card:bg-amber-500 transition-all duration-300"></div>
              <h3 className="text-2xl sm:text-3xl font-black text-amber-500 tracking-tight transition-transform duration-300 group-hover/card:scale-105">
                {settings?.totalTeachers || "50"}+
              </h3>
              <p className="text-xs font-bold text-slate-400 group-hover/card:text-amber-600 mt-2 uppercase tracking-[1.5px] transition-colors">Expert Faculty</p>
            </div>

            {/* Card 4: Success Rate */}
            <div className="group/card relative bg-white p-5 md:p-6 rounded-2xl border border-slate-100/80 shadow-md shadow-slate-100/30 hover:shadow-xl hover:border-emerald-100/50 hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center justify-center overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-slate-100 group-hover/card:bg-emerald-600 transition-all duration-300"></div>
              <h3 className="text-2xl sm:text-3xl font-black text-emerald-600 tracking-tight transition-transform duration-300 group-hover/card:scale-105">
                {settings?.successRate || "100%"}
              </h3>
              <p className="text-xs font-bold text-slate-400 group-hover/card:text-emerald-600 mt-2 uppercase tracking-[1.5px] transition-colors">Success Rate</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SchoolStory;
