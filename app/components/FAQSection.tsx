import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default to the first item being open

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Webflow and why is it the best website builder?",
      answer:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
    },
    {
      question: "What is your favorite template from BRIX Templates?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "How do you clone a template from the Showcase?",
      answer: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    },
    {
      question: "Why is BRIX Templates the best Webflow agency?",
      answer: "Pellentesque in ipsum id orci porta dapibus.",
    },
    {
      question: "When was Webflow officially launched?",
      answer: "Webflow was officially launched in 2013.",
    },
    {
      question: "How do you integrate Jetboost with Webflow?",
      answer: "Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    },
  ];

  return (
    <div className="relative w-full bg-gray-900 text-white py-16 px-6 sm:px-12">
      {/* Glow Effect */}
      <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 w-[1200px] h-[200px] bg-[#9837E2] rounded-full blur-3xl pointer-events-none"></div>

      {/* Section Title */}
      <div className="text-center mb-10">
        <div
          className="text-white font-bold rounded-[11.77px] mb-10 border border-white flex items-center justify-center mx-auto"
          style={{
            borderWidth: "0.35px",
            width: "92px",
            height: "51px",
          }}
        >
          FAQs
        </div>
        <h2 className="text-3xl sm:text-4xl font-sans font-bold mb-4 leading-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 font-sans text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* FAQ Items */}
      <div
        className="relative rounded-[11.77px] mx-auto py-6 px-8"
        style={{
          width: "697.26px",
          height: "718.3px",
          background: "#1E1E1E59",
          border: "0.25px solid #EBEBEB",
          backdropFilter: "blur(16px)",
          boxShadow: "0px 4px 4px 0px #00000040",
        }}
      >
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-700 last:border-0 py-4"
          >
            <div
              className="flex justify-between items-center cursor-pointer text-sm sm:text-base"
              onClick={() => toggleFAQ(index)}
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ") toggleFAQ(index);
              }}
              role="button"
              tabIndex={0}
            >
              <span className="text-white font-sans font-medium">{faq.question}</span>
              <span className="text-gray-400">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && faq.answer && (
              <p className="text-gray-400 mt-3 text-sm sm:text-base">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
