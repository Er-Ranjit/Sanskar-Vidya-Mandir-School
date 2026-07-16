import { useEffect, useState } from "react";
import axios from "axios";

// Custom Dynamic Counter Sub-Component
const SmoothCounter = ({ targetValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(targetValue) || 0;
    if (end === 0) return;

    const totalDuration = 2000; // 2 seconds animation time
    const incrementTime = Math.max(Math.floor(totalDuration / end), 15);
    
    const step = Math.ceil(end / (totalDuration / incrementTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [targetValue]);

  return <>{count}</>;
};

const Statistics = () => {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/settings");
      setSettings(data.settings);
    } catch (error) {
      console.log(error);
    }
  };

  const stats = [
    { value: settings?.totalStudents || 1200, label: "Enrolled Students" },
    { value: settings?.totalTeachers || 45, label: "Expert Faculty" },
    {
      value: settings?.establishedYear
        ? new Date().getFullYear() - settings.establishedYear
        : 20,
      label: "Years of Excellence",
    },
    {
      value: parseInt(settings?.successRate) || 100,
      label: "Academic Success",
      suffix: "%",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-amber-50/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 text-center">
          {stats.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl border border-white/5 p-6 md:p-8 hover:bg-white/10 hover:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 ease-out flex flex-col items-center justify-center overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-indigo-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-200 tracking-tight flex items-center justify-center">
                {/* Invoking native manual smooth engine instead of buggy libraries */}
                <SmoothCounter targetValue={item.value} />
                <span className="text-indigo-400 font-extrabold group-hover:text-amber-400 transition-colors duration-300 ml-0.5">
                  {item.suffix || "+"}
                </span>
              </h2>

              <p className="mt-3 text-xs sm:text-sm md:text-base font-bold text-slate-400 group-hover:text-slate-200 tracking-[1.5px] uppercase transition-colors duration-200 leading-tight">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
