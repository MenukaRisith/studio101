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

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault(); // Prevent default anchor behavior
    const section = document.querySelector(sectionId);
    if (section) {
      const offset = 40; // Adjust this value for the offset before the section
      const targetPosition =
        section.getBoundingClientRect().top + window.scrollY - offset;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 1000; // Animation duration in milliseconds
      let startTime: number | null = null;
  
      const easeInOutQuad = (t: number) =>
        t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  
      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // Ensure progress doesn't exceed 1
        const ease = easeInOutQuad(progress);
        window.scrollTo(0, startPosition + distance * ease);
  
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };
  
      requestAnimationFrame(animation);
    }
  };
  
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 overflow-hidden transition-all duration-300 ${
        isScrolled
          ? "bg-white/50 dark:bg-gray-900/50 backdrop-blur-md"
          : "bg-white dark:bg-gray-900"
      }`}
      style={{ overflowX: "hidden" }}
    >
      <div className="flex items-center justify-between w-full max-w-full mx-auto py-5 px-3 sm:px-4">
        {/* Logo */}
        <img
          src="/logo-1.png"
          alt="Studio 101 Logo"
          className="h-10 sm:h-12 mx-[200px]" // Adjusted margin-left
        />

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex gap-4 mx-auto md:gap-8 text-neutral-800 dark:text-gray-200 text-lg md:text-xl font-medium">
          {["Services", "Projects", "Team", "FAQ", "Careers", "Contact"].map(
            (link) => (
              <a
                key={link}
                href={link === "Contact" ? "/contact" : `#${link.toLowerCase()}`}
                onClick={(e) =>
                  link !== "Contact" &&
                  handleLinkClick(e, `#${link.toLowerCase()}`)
                }
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
          className="Toggle w-16 h-10 px-1.5 bg-indigo-500 rounded-3xl mx-[200px] flex items-center relative overflow-hidden" // Adjusted margin-right
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
            <div className="w-5 h-5 relative">
              {isDarkMode ? (
                <img
                  src="/icons/moon.png"
                  alt="Moon Icon"
                  className="absolute top-0 left-0 w-full h-full transition-opacity duration-500 transform scale-100 opacity-100"
                />
              ) : (
                <img
                  src="/icons/sun.png"
                  alt="Sun Icon"
                  className="absolute top-0 left-0 w-full h-full transition-opacity duration-500 transform scale-100 opacity-100"
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
