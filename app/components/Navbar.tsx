import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme: "light" | "dark") =>
      prevTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <div className="sticky top-0 z-30 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto py-4 px-6">
        <img
          src="/logo-dark.png" // Replace with your actual logo URL
          alt="Studio 101 Logo"
          className="h-16"
        />
        <div className="flex gap-10 text-neutral-800 dark:text-gray-200 text-2xl font-medium">
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
          className="relative w-16 h-8 bg-indigo-500 dark:bg-gray-700 rounded-full flex items-center p-1"
        >
          <div
            className={`w-6 h-6 bg-white rounded-full shadow transform transition-transform ${
              theme === "dark" ? "translate-x-8" : "translate-x-0"
            }`}
          ></div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
