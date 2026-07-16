import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import { useEffect, useState } from "react";
import { getSettings } from "../../services/settingsService";

const ContactInfo = () => {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const { data } = await getSettings();
      setSettings(data?.settings || null);
    } catch (error) {
      console.log(error);
    }
  };

  const info = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone Number",
      value: settings?.phone || "+91 9876543210",
      color: "from-blue-500 to-cyan-500 shadow-blue-500/20 text-blue-600",
      laser: "via-blue-500"
    },
    {
      icon: <FaEnvelope />,
      title: "Email Address",
      value: settings?.email || "info@school.com",
      color: "from-indigo-500 to-purple-500 shadow-indigo-500/20 text-indigo-600",
      laser: "via-indigo-500"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "School Address",
      value: settings?.address || "Panipat, Haryana",
      color: "from-rose-500 to-orange-500 shadow-rose-500/20 text-rose-600",
      laser: "via-rose-500"
    },
    {
      icon: <FaGlobe />,
      title: "Website Portal",
      value: settings?.website || "www.school.com",
      color: "from-emerald-500 to-teal-500 shadow-emerald-500/20 text-emerald-600",
      laser: "via-emerald-500"
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden antialiased font-sans">
      
      {/* Background Soft Ambient Lights */}
      <div className="absolute top-[-10%] left-[-10%] w-[450px] h-[450px] rounded-full bg-blue-400/5 blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-indigo-400/5 blur-[120px] animate-pulse delay-700 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Premium Section Header with Highlights */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 text-xs font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            Communication Desk
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
            Reach Out <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 drop-shadow-sm">To Us</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-500 font-medium">
            Get instant support relative to academic enrollment guidelines, fee details and administrative management.
          </p>
        </div>

        {/* 4-Column Luxury Elevated Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {info.map((item, index) => (
            <div
              key={index}
              className="group relative bg-slate-50/60 border border-slate-200/80 rounded-3xl p-8 text-center transition-all duration-500 ease-out hover:-translate-y-2 hover:bg-white hover:border-blue-500/30 hover:shadow-[0_20px_40px_rgba(30,64,175,0.06)] overflow-hidden"
            >
              {/* Micro Moving Laser Border Accent Top Line */}
              <div className={`absolute top-0 left-0 w-full h-[3.5px] bg-gradient-to-r from-transparent ${item.laser} to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out`} />

              {/* High-End Vector Icon Box Wrapper with Auto-Invert */}
              <div className={`w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-sm flex justify-center items-center text-xl mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:bg-gradient-to-br ${item.color} group-hover:text-white group-hover:rotate-3`}>
                {item.icon}
              </div>

              {/* Highlighted Bold Field Header */}
              <h3 className="text-lg font-black text-slate-800 tracking-wide transition-colors duration-300 group-hover:text-blue-600">
                {item.title}
              </h3>

              {/* High Visibility Value String */}
              <p className="text-sm font-semibold text-slate-500 mt-3 break-words group-hover:text-slate-700 transition-colors leading-relaxed">
                {item.value}
              </p>

              {/* Decorative Subtle Background Text Counter */}
              <div className="absolute -bottom-5 -right-3 text-6xl font-black text-slate-200/20 select-none pointer-events-none group-hover:text-slate-300/10 transition-colors duration-300">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Premium Social Media Network Dock */}
        <div className="mt-16 max-w-sm mx-auto bg-slate-50 border border-slate-200/80 p-4 rounded-3xl shadow-sm flex justify-center items-center gap-5 relative overflow-hidden group/social">
          
          {/* Laser Accent Edge for Social Dock */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent transform -translate-x-full group-hover/social:translate-x-full transition-transform duration-1000 ease-out" />

          {/* Facebook */}
          <a
            href={settings?.facebook || "https://facebook.com"}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Facebook Profile"
            className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-[#1877F2] flex justify-center items-center text-lg hover:bg-[#1877F2] hover:text-white hover:border-transparent shadow-sm hover:shadow-md hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 active:scale-95"
          >
            <FaFacebookF />
          </a>

          {/* Instagram */}
          <a
            href={settings?.instagram || "https://instagram.com"}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Instagram Profile"
            className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-[#E1306C] flex justify-center items-center text-lg hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:border-transparent shadow-sm hover:shadow-md hover:shadow-pink-500/20 hover:-translate-y-1 transition-all duration-300 active:scale-95"
          >
            <FaInstagram />
          </a>

          {/* Youtube */}
          <a
            href={settings?.youtube || "https://youtube.com"}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Youtube Channel"
            className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-[#FF0000] flex justify-center items-center text-lg hover:bg-[#FF0000] hover:text-white hover:border-transparent shadow-sm hover:shadow-md hover:shadow-red-500/20 hover:-translate-y-1 transition-all duration-300 active:scale-95"
          >
            <FaYoutube />
          </a>

        </div>

      </div>
    </section>
  );
};

export default ContactInfo;
