import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // List of client logos
  const clientLogos = [
    "meta-logo.png",
    "cocacola-logo.png",
    "nestle-logo.png",
    "microsoft-logo.png",
    "mas-logo.png",
    "reckitt-logo.png",
    "dialog-logo.png",
    "pizzahut-logo.png",
    "unilever-logo.png",
    "moose-logo.png",
  ];

  // Observe changes in dark mode
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    setIsDarkMode(document.documentElement.classList.contains("dark"));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative z-20 bg-white dark:bg-gray-900 text-center py-16 sm:py-24 md:py-32 px-4 rounded-bl-[60px] sm:rounded-bl-[100px] md:rounded-bl-[120px] rounded-br-[60px] sm:rounded-br-[100px] md:rounded-br-[120px] pb-16 sm:pb-28 md:pb-48 mt-12 sm:mt-16 overflow-x-hidden">
      {/* Heading */}
      <div className="max-w-4xl mx-auto mb-8 sm:mb-10 px-4 sm:px-0">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-semibold text-neutral-800 dark:text-gray-100 font-['Poppins'] leading-tight">
          Create. Innovate. <br /> Elevate. Thrive.
        </h1>
        <p className="text-base sm:text-lg md:text-2xl font-medium text-neutral-600 dark:text-gray-300 mt-4 sm:mt-6 flex items-center justify-center">
          We are the No. 1 Production House in{" "}
          <img
            src="/sri-lankan-flag.png"
            alt="Sri Lankan Flag"
            className="h-5 sm:h-6 md:h-8 ml-2"
          />
        </p>
      </div>

      {/* Call-to-action */}
      <div className="flex justify-center mb-6 sm:mb-8 px-4 sm:px-0">
        <button className="group bg-indigo-500 text-white text-base sm:text-lg md:text-xl font-semibold rounded-full px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 flex items-center gap-4 hover:bg-indigo-400 transition-all duration-700">
          <div className="relative w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center group-hover:order-last group-hover:translate-x-4 transition-transform duration-700">
            <img
              src="/icons/arrow.png"
              alt="Arrow Icon"
              className="w-3 sm:w-4 md:w-6 h-3 sm:h-4 md:h-6"
            />
          </div>
          <span className="relative group-hover:order-first group-hover:-translate-x-4 transition-transform duration-700">
            Book a Call
          </span>
        </button>
      </div>

      {/* Trusted By */}
      <div className="text-sm sm:text-lg md:text-xl font-medium text-neutral-800 dark:text-gray-100 mb-6 sm:mb-8 flex items-center justify-center">
        Trusted by Top Brands in 🌍
      </div>

      {/* Brands Slider */}
      <div className="relative overflow-hidden mt-6 sm:mt-8 px-4 sm:px-10 md:px-20">
        <div
          className="flex items-center gap-6 sm:gap-12 md:gap-16 lg:gap-24 animate-scroll"
          style={{ width: "calc(200% + 12px)" }}
        >
          {clientLogos.concat(clientLogos).map((logo, index) => (
            <img
              key={index}
              src={`/clients/${isDarkMode ? "dark/" : ""}${logo}`}
              alt={logo.split("-")[0]}
              className="h-10 sm:h-12 md:h-16"
            />
          ))}
        </div>
      </div>

      {/* Styling for Brands Animation */}
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
            display: inline-flex;
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
