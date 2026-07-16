import { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const faqData = [
  {
    question: "When does the admission process start?",
    answer:
      "Admissions generally begin in January every year. You can also contact the school office for exact dates.",
  },
  {
    question: "Is there any entrance exam?",
    answer:
      "For higher classes, a basic assessment may be conducted before admission.",
  },
  {
    question: "Which documents are required?",
    answer:
      "Birth Certificate, Aadhaar Card, Previous Report Card, Transfer Certificate and Passport Size Photos.",
  },
  {
    question: "Can I apply online?",
    answer:
      "Yes, you can submit the online admission enquiry form through our website.",
  },
  {
    question: "How can I contact the admission office?",
    answer:
      "You can call, email or visit the school campus during office hours.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="relative py-24 bg-white overflow-hidden antialiased font-sans">
      
      {/* Background Soft Ambient Lights */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-400/10 blur-[120px] animate-pulse delay-700 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Premium Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
            Support Center
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
            Frequently Asked Questions
          </h2>
          
          <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto font-medium">
            Find answers to the most common admission queries and onboarding steps.
          </p>
        </div>

        {/* Premium Smooth Accordion Layout */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = active === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-blue-500/40 bg-slate-50/50 shadow-[0_15px_30px_rgba(30,64,175,0.04)]"
                    : "border-slate-200/80 bg-white hover:border-slate-300 hover:shadow-[0_10px_20px_rgba(0,0,0,0.02)]"
                }`}
              >
                <button
                  onClick={() => setActive(isOpen ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left outline-none group"
                >
                  <span className={`font-bold text-lg transition-colors duration-300 ${
                    isOpen ? "text-blue-600" : "text-slate-800 group-hover:text-blue-600"
                  }`}>
                    {item.question}
                  </span>

                  <div className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
                    isOpen 
                      ? "bg-blue-600 border-blue-600 text-white rotate-180" 
                      : "bg-slate-50 border-slate-200 text-slate-500 group-hover:bg-blue-50 group-hover:border-blue-200 group-hover:text-blue-600"
                  }`}>
                    {isOpen ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
                  </div>
                </button>

                {/* Animated Dropdown Expansion */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed font-medium text-base border-t border-slate-100 bg-white/50">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Added Premium Utility Element: Still Have Questions Help Desk */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 sm:p-10 shadow-xl shadow-blue-500/10 flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden group">
          {/* Internal Shimmer */}
          <div className="absolute top-0 left-0 w-full h-full bg-white/[0.03] pointer-events-none" />
          
          <div className="space-y-2 text-center md:text-left relative z-10">
            <h3 className="text-2xl font-extrabold text-white">
              Still have unanswered questions?
            </h3>
            <p className="text-blue-100 font-medium text-sm sm:text-base">
              Our dedicated helpdesk is ready to guide you step by step.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center relative z-10">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-blue-700 font-bold text-sm shadow-md hover:bg-blue-50 transition active:scale-[0.98]"
            >
              <FaPhoneAlt className="text-xs" />
              Call Office
            </a>
            <a
              href="mailto:admission@school.com"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-700/40 text-white font-bold text-sm border border-white/20 backdrop-blur-sm hover:bg-blue-700/60 transition active:scale-[0.98]"
            >
              <FaEnvelope className="text-xs" />
              Email Desk
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
