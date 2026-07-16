const fees = [
  {
    class: "Nursery - UKG",
    admission: "₹4,000",
    monthly: "₹1,200",
  },
  {
    class: "Class I - V",
    admission: "₹5,000",
    monthly: "₹1,500",
  },
  {
    class: "Class VI - VIII",
    admission: "₹6,000",
    monthly: "₹1,800",
  },
  {
    class: "Class IX - XII",
    admission: "₹8,000",
    monthly: "₹2,200",
  },
];

const FeeStructure = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden antialiased font-sans">
      
      {/* Background Subtle Soft Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-400/10 blur-[120px] animate-pulse delay-700 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Premium Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
            Investment In Future
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
            Admission & Fees Structure
          </h2>
          
          <p className="text-base sm:text-lg text-slate-500 max-w-md mx-auto font-medium">
            Transparent and structured fees plan for academic excellence.
          </p>
        </div>

        {/* Premium Grid Instead of Boring Table */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fees.map((item, index) => (
            <div
              key={index}
              className="group relative bg-slate-50/60 border border-slate-200/80 rounded-3xl p-6 transition-all duration-500 ease-out hover:-translate-y-2 hover:bg-white hover:border-blue-500/40 hover:shadow-[0_20px_40px_rgba(30,64,175,0.06)] overflow-hidden"
            >
              {/* Top Laser Accent Line */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              
              {/* Class Header Badge */}
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-slate-200/60 text-slate-800 font-bold text-sm rounded-xl transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  {item.class}
                </span>
              </div>

              {/* Pricing Content */}
              <div className="space-y-4">
                {/* Monthly Fee (Highlighted) */}
                <div className="border-b border-slate-200/60 pb-4 group-hover:border-blue-100 transition-colors">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Monthly Fee
                  </p>
                  <p className="text-3xl font-black text-slate-900 mt-1 transition-colors group-hover:text-blue-600">
                    {item.monthly}
                  </p>
                </div>

                {/* Admission Fee */}
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Admission Fee (One-Time)
                  </p>
                  <p className="text-xl font-bold text-slate-700 mt-0.5">
                    {item.admission}
                  </p>
                </div>
              </div>

              {/* Decorative Subtle Background Text */}
              <div className="absolute -bottom-6 -right-4 text-7xl font-black text-slate-200/20 select-none pointer-events-none group-hover:text-blue-500/[0.04] transition-colors duration-300">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeeStructure;
