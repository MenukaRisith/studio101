import { useState, useEffect } from "react";

const HeroSection = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <section className="relative z-20 bg-white dark:bg-gray-900 text-center py-16 px-4 rounded-bl-[80px] rounded-br-[80px] pb-40">
      {/* Navigation */}
      <div className="flex flex-wrap items-center justify-between w-full max-w-6xl mx-auto mb-8 sm:mb-16 px-4 sm:px-0">
        <img src="/logo-dark.png" alt="Studio 101 Logo" className="h-12 sm:h-20" />
        <div className="hidden sm:flex gap-4 sm:gap-10 text-neutral-800 dark:text-gray-200 text-xl sm:text-2xl font-medium">
          <a
            href="#projects"
            className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#testimonial"
            className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300"
          >
            Testimonial
          </a>
          <a
            href="#services"
            className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300"
          >
            Services
          </a>
          <a
            href="#faq"
            className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300"
          >
            FAQ
          </a>
        </div>
        <button
          onClick={toggleTheme}
          className="relative w-12 h-6 sm:w-16 sm:h-8 bg-indigo-500 dark:bg-gray-700 rounded-full flex items-center p-1"
        >
          <div
            className={`w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-full shadow transform transition-transform ${
              theme === "dark" ? "translate-x-6 sm:translate-x-8" : "translate-x-0"
            }`}
          ></div>
        </button>
      </div>

      {/* Heading */}
      <div className="max-w-4xl mx-auto mb-10 px-4 sm:px-0">
        <h1 className="text-5xl sm:text-8xl font-semibold text-neutral-800 dark:text-gray-100 font-['Poppins'] leading-tight">
          Create. Innovate. <br /> Elevate. Thrive.
        </h1>
        <p className="text-lg sm:text-3xl font-medium text-neutral-600 dark:text-gray-300 mt-4 flex items-center justify-center">
          We are the No. 1 Production House in{" "}
          <img
            src="/sri-lankan-flag.png"
            alt="Sri Lankan Flag"
            className="h-6 sm:h-8 ml-2"
          />
        </p>
      </div>

      {/* Call-to-action */}
      <div className="flex justify-center mb-8 sm:mb-12 px-4 sm:px-0">
        <button className="group bg-indigo-500 text-white text-lg sm:text-2xl font-semibold rounded-full px-6 sm:px-8 py-3 sm:py-4 flex items-center gap-4 hover:bg-indigo-400 transition-all duration-700">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center group-hover:order-last group-hover:translate-x-4 transition-transform duration-700">
            <img src="/icons/arrow.png" alt="Arrow Icon" className="w-4 sm:w-6 h-4 sm:h-6" />
          </div>
          <span className="relative group-hover:order-first group-hover:-translate-x-4 transition-transform duration-700">
            Book a Call
          </span>
        </button>
      </div>

      {/* Trusted By */}
      <div className="text-lg sm:text-2xl font-medium text-neutral-800 dark:text-gray-100 mb-6 sm:mb-8 flex items-center justify-center">
        Trusted by Top Brands in{" "}
        <img src="/earth.png" alt="World Emoji" className="h-6 sm:h-8 ml-2" />
      </div>

      {/* Brands Slider */}
      <div className="relative overflow-hidden mt-8 sm:mt-10 px-4 sm:px-20">
        <div className="flex items-center gap-12 sm:gap-24 animate-scroll">
          <img src="/clients/meta.png" alt="Meta" className="h-12 sm:h-16" />
          <img src="/clients/cocacola.png" alt="Coca Cola" className="h-12 sm:h-16" />
          <img src="/clients/nestle.png" alt="Nestle" className="h-12 sm:h-16" />
          <img src="/clients/microsoft.png" alt="Microsoft" className="h-12 sm:h-16" />
          <img src="/clients/mas.png" alt="MAS" className="h-12 sm:h-16" />
          <img src="/clients/reckitt.png" alt="Reckitt" className="h-12 sm:h-16" />
          <img src="/clients/creamsoda.png" alt="Cream Soda" className="h-12 sm:h-16" />
          <img src="/clients/munchee.png" alt="Munchee" className="h-12 sm:h-16" />
          <img src="/clients/moose.png" alt="Moose" className="h-12 sm:h-16" />
          <img src="/clients/pizzahut.png" alt="Pizza Hut" className="h-12 sm:h-16" />
        </div>
      </div>

      {/* Styling for Brands Animation */}
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0%); /* Start slightly inside the container */
            }
            100% {
              transform: translateX(-200%); /* End with a gap to the left */
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
