import React, { useState } from "react";

const FAQSection: React.FC = () => {
  const [activeFAQ, setActiveFAQ] = useState<number>(0); // Default to the first FAQ being open

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? -1 : index); // Collapse if clicked again
  };

  const faqs = [
    {
      question: "What is Webflow and why is it the best website builder?",
      answer:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
    },
    {
      question: "How does Webflow compare to other website builders?",
      answer:
        "Webflow offers a unique combination of design flexibility and CMS features, making it suitable for both designers and developers.",
    },
    {
      question: "Is Webflow beginner-friendly?",
      answer:
        "Yes, Webflow provides an intuitive interface and extensive documentation to help beginners create professional websites.",
    },
    {
      question: "Does Webflow support responsive design?",
      answer:
        "Absolutely, Webflow makes it easy to create fully responsive designs for all device sizes.",
    },
    {
      question: "Can I export code from Webflow?",
      answer:
        "Yes, Webflow allows you to export clean, production-ready HTML, CSS, and JavaScript code.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-16 px-4 bg-white dark:bg-gray-900 sm:py-20 sm:px-6"
    >
      {/* Section Header */}
      <div className="text-center mb-10">
        <div
          className="inline-block px-5 py-3 rounded-xl text-lg font-bold"
          style={{
            background: "#1E1E1E", // Dark theme specific color
            color: "#EBEBEB", // Text color for dark theme
            borderRadius: "12px",
            border: "1px solid #8E8E8E",
            backdropFilter: "blur(3px)",
            fontFamily: "Poppins",
            fontWeight: 700,
          }}
        >
          FAQs
        </div>
        <h2 className="mt-6 text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-3xl p-6 border border-gray-200 dark:border-gray-700">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`p-6 mb-6 rounded-xl cursor-pointer transition-all ${
              activeFAQ === index
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            }`}
            role="button"
            tabIndex={0}
            aria-expanded={activeFAQ === index}
            onClick={() => toggleFAQ(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") toggleFAQ(index);
            }}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg sm:text-2xl font-bold">{faq.question}</h3>
              <span
                className={`ml-4 transform ${
                  activeFAQ === index ? "rotate-45" : "rotate-0"
                } transition-transform`}
              >
                +
              </span>
            </div>
            {activeFAQ === index && (
              <p className="mt-4 text-sm sm:text-lg text-gray-800 dark:text-gray-300">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
