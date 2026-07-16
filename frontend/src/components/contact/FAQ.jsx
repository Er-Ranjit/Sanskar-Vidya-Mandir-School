import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How can I apply for admission?",
    answer:
      "Visit the Admission page or contact our admission office for complete guidance.",
  },
  {
    question: "What are the school timings?",
    answer:
      "School timings are generally from 8:00 AM to 2:00 PM.",
  },
  {
    question: "Do you provide transport facilities?",
    answer:
      "Yes, transport facilities are available in nearby areas.",
  },
  {
    question: "How can I contact the school?",
    answer:
      "You can call, email, or visit our school during office hours.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-slate-100">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-14">

          <span className="uppercase tracking-widest text-blue-700 font-semibold">
            FAQ
          </span>

          <h2 className="text-5xl font-bold mt-3">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="space-y-5">

          {faqs.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >

              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >

                <span className="font-semibold text-lg">
                  {item.question}
                </span>

                {openIndex === index ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}

              </button>

              {openIndex === index && (

                <div className="px-6 pb-6 text-gray-600 leading-7">

                  {item.answer}

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default FAQ;