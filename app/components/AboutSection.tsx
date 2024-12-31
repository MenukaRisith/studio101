import { useEffect, useState } from "react";

const AboutSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Update dark mode state on changes
    const handleDarkModeToggle = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    const observer = new MutationObserver(handleDarkModeToggle);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Initial detection
    handleDarkModeToggle();

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 sm:-mt-20">
      {/* Glowing Background Ellipse */}
      <div className="absolute top-[-100px] sm:top-[-150px] left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[90%] lg:w-[1200px] h-[150px] sm:h-[200px] lg:h-[250px] bg-indigo-500 rounded-full blur-3xl animate-pulse-glow"></div>

      {/* Logo */}
      <div className="flex justify-center items-center mx-auto mb-6 mt-12">
        <img
          className="w-32 h-24 sm:w-auto sm:h-32 md:w-auto md:h-40 lg:w-80 lg:h-48 xl:w-auto xl:h-56"
          src={isDarkMode ? "/gajaman-logo.png" : "/gajaman-dark-logo.png"}
          alt="Gajaman Logo"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center mt-8 sm:mt-12 md:mt-16 lg:mt-20 px-4">
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-semibold text-neutral-800 dark:text-gray-100 font-['Poppins'] leading-relaxed">
          The Team Behind Gajaman 3D, Sri Lanka&apos;s First 3D Animated Movie
          and the Highest Grossing Film in Sri Lankan Cinema History.
        </p>
      </div>

      {/* Glow Animation Keyframes */}
      <style>
        {`
          @keyframes pulse-glow {
            0%, 100% {
              transform: translate(-50%, 0) scale(1);
              opacity: 0.8;
            }
            50% {
              transform: translate(-50%, 0) scale(1.2);
              opacity: 1;
            }
          }

          .animate-pulse-glow {
            animation: pulse-glow 3s infinite ease-in-out;
          }
        `}
      </style>
    </section>
  );
};

export default AboutSection;
