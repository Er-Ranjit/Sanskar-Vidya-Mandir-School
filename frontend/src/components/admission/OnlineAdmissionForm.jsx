import { useState } from "react";
import toast from "react-hot-toast";

const OnlineAdmissionForm = () => {
  const [form, setForm] = useState({
    studentName: "",
    fatherName: "",
    mobile: "",
    email: "",
    className: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Admission Form Submitted Successfully");

    setForm({
      studentName: "",
      fatherName: "",
      mobile: "",
      email: "",
      className: "",
    });
  };

  return (
    <section className="relative py-24 bg-slate-100 overflow-hidden antialiased font-sans">
      
      {/* Background Soft Glow Elements */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[130px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[130px] animate-pulse delay-700 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Premium Form Card */}
        <div className="bg-white border border-slate-200/60 rounded-3xl shadow-[0_30px_60px_rgba(30,64,175,0.04)] p-6 sm:p-12 relative overflow-hidden">
          
          {/* Decorative Laser Edge */}
          <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-400" />

          {/* Form Header */}
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
              Secure Portal
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 mt-2">
              Online Admission Form
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-medium max-w-md mx-auto">
              Fill out the details below carefully to submit your digital registration.
            </p>
          </div>

          {/* Premium Form Fields */}
          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Student Name */}
            <div className="relative">
              <input
                type="text"
                name="studentName"
                placeholder="Student Name"
                value={form.studentName}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-800 placeholder-slate-400 outline-none transition-all duration-300 focus:bg-white focus:border-blue-500 focus:shadow-[0_0_20px_rgba(59,130,246,0.1)] font-medium"
                required
              />
            </div>

            {/* Father's Name */}
            <div className="relative">
              <input
                type="text"
                name="fatherName"
                placeholder="Father Name"
                value={form.fatherName}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-800 placeholder-slate-400 outline-none transition-all duration-300 focus:bg-white focus:border-blue-500 focus:shadow-[0_0_20px_rgba(59,130,246,0.1)] font-medium"
                required
              />
            </div>

            {/* Email Address */}
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-800 placeholder-slate-400 outline-none transition-all duration-300 focus:bg-white focus:border-blue-500 focus:shadow-[0_0_20px_rgba(59,130,246,0.1)] font-medium"
              />
            </div>

            {/* Mobile Number */}
            <div className="relative">
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                value={form.mobile}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-800 placeholder-slate-400 outline-none transition-all duration-300 focus:bg-white focus:border-blue-500 focus:shadow-[0_0_20px_rgba(59,130,246,0.1)] font-medium"
                required
              />
            </div>

            {/* Admission Class */}
            <div className="relative md:col-span-2">
              <input
                type="text"
                name="className"
                placeholder="Admission Class (e.g. Class V)"
                value={form.className}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-800 placeholder-slate-400 outline-none transition-all duration-300 focus:bg-white focus:border-blue-500 focus:shadow-[0_0_20px_rgba(59,130,246,0.1)] font-medium"
                required
              />
            </div>

            {/* Premium Submit Button with Micro-interactivity */}
            <button
              className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-2xl md:col-span-2 text-lg font-bold shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 active:scale-[0.99] overflow-hidden"
            >
              {/* Internal shine light effect on hover */}
              <div className="absolute top-0 left-0 w-full h-full bg-white/10 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                Submit Admission Form
              </span>
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default OnlineAdmissionForm;
