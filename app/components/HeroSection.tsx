import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // List of client SVG images
  const clientLogos = [
    "coca-cola.svg",
    "dialog.svg",
    "dimo.svg",
    "meta.svg",
    "microsoft.svg",
    "nestle.svg",
    "pizza-hut.svg",
    "reckitt.svg",
    "unilever.svg",
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
    <section className="relative z-20 bg-white dark:bg-gray-900 text-center py-16 sm:py-24 md:py-32 px-4 rounded-bl-[60px] sm:rounded-bl-[100px] md:rounded-bl-[120px] rounded-br-[60px] sm:rounded-br-[100px] md:rounded-br-[120px] pb-12 sm:pb-20 md:pb-28 mt-12 sm:mt-16 overflow-x-hidden">
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
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center group-hover:order-last group-hover:translate-x-4 transition-transform duration-700">
            <img
              src="/icons/arrow.png"
              alt="Arrow Icon"
              className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6"
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

      {/* Continuous Carousel for Brands */}
      <div className="relative overflow-hidden mt-6 sm:mt-8">
        <div className="carousel-container">
          <div className="carousel-track">
            {clientLogos.map((logo, index) => (
              <img
                key={index}
                src={`/clients/${logo}`}
                alt={`Logo ${index + 1}`}
                className={`carousel-item h-12 sm:h-16 md:h-20 ${
                  isDarkMode ? "filter invert brightness-0" : ""
                }`}
              />
            ))}
            {clientLogos.map((logo, index) => (
              <img
                key={`duplicate-${index}`}
                src={`/clients/${logo}`}
                alt={`Duplicate Logo ${index + 1}`}
                className={`carousel-item h-12 sm:h-16 md:h-20 ${
                  isDarkMode ? "filter invert brightness-0" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Carousel Animation */}
      <style>
        {`
          .carousel-container {
            display: flex;
            overflow: hidden;
            position: relative;
            width: calc(100% - 400px); /* Start 200px from right, end 200px from left */
            margin: 0 auto;
          }

          .carousel-track {
            display: flex;
            animation: scroll 15s linear infinite;
            gap: 30px; /* Gap between images */
          }

          .carousel-item {
            flex-shrink: 0;
            width: auto;
          }

          .carousel-container::before,
          .carousel-container::after {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            width: 70px; /* Adjust width of blur effect */
            z-index: 2;
            pointer-events: none;
          }

          .carousel-container::before {
            left: 0;
            background: linear-gradient(
              to right,
              ${isDarkMode ? "rgba(17, 24, 39, 1)" : "rgba(255, 255, 255, 1)"},
              ${isDarkMode ? "rgba(17, 24, 39, 0)" : "rgba(255, 255, 255, 0)"}
            );
          }

          .carousel-container::after {
            right: 0;
            background: linear-gradient(
              to left,
              ${isDarkMode ? "rgba(17, 24, 39, 1)" : "rgba(255, 255, 255, 1)"},
              ${isDarkMode ? "rgba(17, 24, 39, 0)" : "rgba(255, 255, 255, 0)"}
            );
          }

          @keyframes scroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
