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
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <img
          src="/logo-1.png"
          alt="Studio 101 Logo"
          className="h-10 sm:h-12"
        />

        {/* Desktop Links */}
        <div className="hidden sm:flex gap-4 sm:gap-8 text-neutral-800 dark:text-gray-200 text-lg sm:text-xl font-medium">
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
          className={`Toggle w-16 h-10 px-1.5 bg-indigo-500 rounded-3xl flex items-center gap-2.5 overflow-hidden transition-all duration-500 ${
            isDarkMode ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`Icon p-1 bg-white rounded-2xl flex justify-center items-center transition-transform duration-500 ease-in-out`}
          >
            <div className="w-5 h-5 px-0.5 py-0.5 flex justify-center items-center">
              {isDarkMode ? (
                <img
                  src="/icons/moon.png" // Replace with your moon icon path
                  alt="Moon Icon"
                  className="w-full h-full"
                />
              ) : (
                <img
                  src="/icons/sun.png" // Replace with your sun icon path
                  alt="Sun Icon"
                  className="w-full h-full"
                />
              )}
            </div>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
