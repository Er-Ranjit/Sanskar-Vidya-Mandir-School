import { useState } from "react";

const GalleryStats = ({ gallery = [] }) => {
  // Safe validation check if gallery is undefined or null
  const totalPhotos = gallery.length || 0;

  const activeImages = gallery.filter(
    (item) => item?.status === "Active"
  ).length || 0;

  const categoriesCount = new Set(
    gallery.map((item) => item?.category).filter(Boolean)
  ).size || 0;

  return (
    <section className="relative py-20 bg-slate-100 overflow-hidden antialiased font-sans">
      
      {/* Background Soft Glow Aura Layers */}
      <div className="absolute top-[-10%] left-[-10%] w-[450px] h-[450px] rounded-full bg-blue-400/10 blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-indigo-400/10 blur-[120px] animate-pulse delay-700 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* 4-Column Luxury Elevated Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Card 1: Total Photos */}
          <div className="group relative bg-white border border-slate-200/80 rounded-3xl p-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_20px_40px_rgba(30,64,175,0.06)] overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            <h2 className="text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-700 group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
              {totalPhotos}
            </h2>
            <p className="mt-4 text-sm font-bold text-slate-500 uppercase tracking-wider group-hover:text-slate-700 transition-colors">
              Total <span className="text-blue-600 font-extrabold">Photos</span>
            </p>
          </div>

          {/* Card 2: Active Photos */}
          <div className="group relative bg-white border border-slate-200/80 rounded-3xl p-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-green-500/40 hover:shadow-[0_20px_40px_rgba(16,185,129,0.06)] overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-green-500 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            <h2 className="text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-700 group-hover:from-green-500 group-hover:to-emerald-600 transition-all duration-300">
              {activeImages}
            </h2>
            <p className="mt-4 text-sm font-bold text-slate-500 uppercase tracking-wider group-hover:text-slate-700 transition-colors">
              Active <span className="text-green-500 font-extrabold">Live Stream</span>
            </p>
          </div>

          {/* Card 3: Categories */}
          <div className="group relative bg-white border border-slate-200/80 rounded-3xl p-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-[0_20px_40px_rgba(99,102,241,0.06)] overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            <h2 className="text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-700 group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
              {categoriesCount}
            </h2>
            <p className="mt-4 text-sm font-bold text-slate-500 uppercase tracking-wider group-hover:text-slate-700 transition-colors">
              Media <span className="text-indigo-500 font-extrabold">Albums</span>
            </p>
          </div>

          {/* Card 4: Happy Memories */}
          <div className="group relative bg-white border border-slate-200/80 rounded-3xl p-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-yellow-500/40 hover:shadow-[0_20px_40px_rgba(234,179,8,0.06)] overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            <h2 className="text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-700 group-hover:from-yellow-500 group-hover:to-amber-600 transition-all duration-300">
              100%
            </h2>
            <p className="mt-4 text-sm font-bold text-slate-500 uppercase tracking-wider group-hover:text-slate-700 transition-colors">
              Happy <span className="text-yellow-500 font-extrabold">Memories</span>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GalleryStats;
