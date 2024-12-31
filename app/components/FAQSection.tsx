import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection: React.FC = () => {
  const [activeFAQ, setActiveFAQ] = useState<number>(-1); // Default to no FAQ being open

  const faqs = [
    {
      question: "What is Studio 101 known for?",
      answer:
        "Studio 101 is renowned for creating Sri Lanka’s first 3D animation movie, Gajaman. In addition to pioneering 3D animated films, we specialize in high-quality 3D animation, visual effects, and storytelling. We also produce top-tier commercials and have established ourselves as one of the leading production houses in Sri Lanka, delivering world-class content that redefines the entertainment and advertising industries.",
    },
    {
      question: "Does Studio 101 offer animation services for other projects?",
      answer:
        "Yes, Studio 101 provides professional 3D animation and visual effects services for films, advertisements, games, and other creative projects. Contact us for a consultation, and we’ll bring your vision to life with our expertise.",
    },
    {
      question: "Are there job or internship opportunities at Studio 101?",
      answer:
        "Yes, we’re always looking for passionate and creative individuals to join our team. Check out our careers page for the latest job openings and internship opportunities.",
    },
    {
      question: "How can I contact Studio 101 for business inquiries?",
      answer:
        "You can reach out to Studio 101 for business inquiries through our official email at contact@wearestudio101.com or by filling out the contact form on our Contact Us page. Whether you're looking to collaborate on a project, explore advertising opportunities, or discuss partnerships, our team is ready to assist you.",
    },
    {
      question: "How does Studio 101 integrate innovation into its projects?",
      answer:
        "At Studio 101, innovation is at the heart of everything we do. We utilize cutting-edge 3D animation technology, advanced visual effects techniques, and state-of-the-art tools to bring unique ideas to life. By blending creativity with the latest industry advancements, we ensure every project stands out with compelling storytelling, stunning visuals, and a modern touch that resonates with audiences globally.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? -1 : index); // Toggle FAQ
  };

  return (
    <section
      id="faq"
      className="py-16 px-4 bg-white dark:bg-gray-900 sm:py-20 sm:px-6"
    >
      {/* Section Header */}
      <div className="text-center mb-10">
        <div className="Title h-12 px-5 py-3 bg-gray-200 dark:bg-stone-900 rounded-xl border border-neutral-400 backdrop-blur-sm justify-center items-center gap-2.5 inline-flex">
          <div className="Services text-stone-900 dark:text-white text-xl font-bold font-['Poppins']">
            FAQs
          </div>
        </div>
        <h2 className="mt-6 text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg sm:text-xl font-semibold text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-stone-900 rounded-3xl p-6 border border-gray-200 dark:border-gray-700">
        {faqs.map((faq, index) => {
          const isActive = activeFAQ === index;
          return (
            <div
              key={index}
              className={`p-6 mb-6 rounded-xl cursor-pointer transition-all ${
                isActive
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              }`}
              role="button"
              tabIndex={0}
              aria-expanded={isActive}
              onClick={() => toggleFAQ(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggleFAQ(index);
              }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg sm:text-2xl font-bold">
                  {faq.question}
                </h3>
                <span
                  className={`ml-4 transform text-2xl sm:text-3xl font-bold ${
                    isActive ? "rotate-45" : "rotate-0"
                  } transition-transform`}
                >
                  +
                </span>
              </div>
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden mt-4"
                  >
                    <p className="text-sm sm:text-lg text-gray-800 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
