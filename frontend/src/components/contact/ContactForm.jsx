import { useState } from "react";
import toast from "react-hot-toast";
import { addContact } from "../../services/contactService";

const initialState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await addContact(formData);
      toast.success("Message Sent Successfully");
      setFormData(initialState);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Something Went Wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-24 bg-white antialiased font-sans">
      
      {/* Background Soft Premium Blur Glows (Keeps theme white but adds luxury vibe) */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/[0.04] blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/[0.04] blur-[120px] animate-pulse delay-700 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Premium Section Header with High-Contrast Highlights */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 text-xs font-bold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" />
            Enquiry Portal
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 mt-2">
            Send Us A <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 drop-shadow-sm">Message</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
            Fill out the details below carefully and our support helpdesk team will get back to you shortly.
          </p>
        </div>

        {/* Main Elevated Premium Form Card Container */}
        <div className="bg-white border border-slate-200/80 rounded-[2.5rem] shadow-[0_30px_60px_rgba(30,64,175,0.03)] p-6 sm:p-12 relative overflow-hidden">
          
          {/* Laser Moving Line Accent Top Strip */}
          <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-blue-500 via-indigo-600 to-cyan-400" />

          {/* Form Content Grid Layout */}
          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-6 relative z-20"
          >
            {/* Full Name Input Box */}
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-slate-50/60 border border-slate-200/80 rounded-2xl p-4 text-slate-800 placeholder-slate-400 outline-none transition-all duration-300 focus:bg-white focus:border-blue-500 focus:shadow-[0_0_20px_rgba(59,130,246,0.08)] font-medium text-sm sm:text-base"
                required
              />
            </div>

            {/* Email Address Input Box */}
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-50/60 border border-slate-200/80 rounded-2xl p-4 text-slate-800 placeholder-slate-400 outline-none transition-all duration-300 focus:bg-white focus:border-blue-500 focus:shadow-[0_0_20px_rgba(59,130,246,0.08)] font-medium text-sm sm:text-base"
                required
              />
            </div>

            {/* Phone Number Input Box */}
            <div className="relative">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-slate-50/60 border border-slate-200/80 rounded-2xl p-4 text-slate-800 placeholder-slate-400 outline-none transition-all duration-300 focus:bg-white focus:border-blue-500 focus:shadow-[0_0_20px_rgba(59,130,246,0.08)] font-medium text-sm sm:text-base"
                required
              />
            </div>

            {/* Subject Input Box */}
            <div className="relative">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-slate-50/60 border border-slate-200/80 rounded-2xl p-4 text-slate-800 placeholder-slate-400 outline-none transition-all duration-300 focus:bg-white focus:border-blue-500 focus:shadow-[0_0_20px_rgba(59,130,246,0.08)] font-medium text-sm sm:text-base"
                required
              />
            </div>

            {/* Message Textarea Frame Box */}
            <div className="relative md:col-span-2">
              <textarea
                name="message"
                placeholder="Write Your Message..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-slate-50/60 border border-slate-200/80 rounded-2xl p-4 text-slate-800 placeholder-slate-400 outline-none transition-all duration-300 focus:bg-white focus:border-blue-500 focus:shadow-[0_0_20px_rgba(59,130,246,0.08)] font-medium text-sm sm:text-base resize-none"
                required
              />
            </div>

            {/* Interactive Main Submit Button Panel */}
            <button
              type="submit"
              disabled={loading}
              className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-2xl md:col-span-2 text-base sm:text-lg font-bold shadow-lg shadow-blue-500/10 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 transform active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none overflow-hidden"
            >
              {/* Internal Moving Shimmer Highlight Effect Strip */}
              <div className="absolute top-0 left-0 w-full h-full bg-white/10 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              
              <span className="relative z-10 flex items-center justify-center gap-2.5">
                {loading ? (
                  <>
                    <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  "Send Message Securely"
                )}
              </span>
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default ContactForm;
