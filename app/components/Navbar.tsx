import { useState, useEffect } from "react";

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateDarkModeState = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    // Observe dark mode changes
    const observer = new MutationObserver(updateDarkModeState);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Initial dark mode check
    updateDarkModeState();

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/50 dark:bg-gray-900/50 backdrop-blur-md"
          : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="flex items-center justify-between w-full max-w-full mx-auto py-5 px-3 sm:px-4">
        {/* Logo Wrapper */}
        <div className="block md:mx-[200px]">
          <img
            src="/logo-1.png"
            alt="Studio 101 Logo"
            className="h-10 sm:h-12"
          />
        </div>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex gap-4 md:gap-8 text-neutral-800 dark:text-gray-200 text-lg md:text-xl font-medium">
          {["Services", "Projects", "Team", "FAQ", "Careers", "Contact"].map(
            (link) => (
              <a
                key={link}
                href={link === "Contact" ? "/contact" : `#${link.toLowerCase()}`}
                className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                {link}
              </a>
            )
          )}
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="Toggle w-16 h-10 px-1.5 bg-indigo-500 rounded-3xl block mx-[20px] md:mx-[200px] flex items-center relative overflow-hidden"
        >
          {/* Moving Circle */}
          <div
            className="Icon w-8 h-8 bg-white rounded-full flex justify-center items-center absolute transition-transform duration-[800ms] ease-in-out"
            style={{
              transform: isDarkMode
                ? "translateX(20px)" // Stop at 20px
                : "translateX(0px)", // Start at 0px
            }}
          >
            <img
              src={`/${isDarkMode ? "dark_mode.svg" : "light_mode.svg"}`}
              alt={isDarkMode ? "Dark Mode" : "Light Mode"}
              className="w-6 h-6"
            />
          </div>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
