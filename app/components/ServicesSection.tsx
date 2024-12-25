import { useState, useEffect } from "react";

const ServicesSection = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    // Listen for changes in the `dark` class on the `document.documentElement`
    const observer = new MutationObserver(() => {
      setIsDarkTheme(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Initial theme detection
    setIsDarkTheme(document.documentElement.classList.contains("dark"));

    return () => observer.disconnect();
  }, []);

  const services = [
    { id: "video-camera", title: "Video Production" },
    { id: "vr-glasses", title: "AR/VR" },
    { id: "modelling", title: "Game Development" },
    { id: "3d-cube", title: "3D Animation" },
    { id: "cube", title: "2D Animation" },
    { id: "influencer", title: "Influencer Marketing" },
    { id: "artificial-intelligence", title: "AI" },
    { id: "marketing", title: "Advertisements" },
    { id: "personal-branding", title: "Branding" },
  ];

  return (
    <section id="services" className="py-16 px-4 bg-white dark:bg-gray-900">
      {/* Section Heading */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <div
          className="inline-flex justify-center items-center px-5 py-3 rounded-lg border border-gray-400 bg-neutral-900 text-white text-lg font-bold"
          style={{ backdropFilter: "blur(2px)" }}
        >
          Services
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mt-6">
          Here’s what We <br /> Can do for You.
        </h2>
        <p className="text-lg sm:text-xl font-semibold text-gray-500 dark:text-gray-400 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white dark:bg-[#1e1e1e] rounded-xl border border-gray-300 dark:border-gray-700 p-6 text-center"
          >
            <img
              src={`/icons/${isDarkTheme ? "dark/" : ""}${service.id}.gif`}
              alt={service.title}
              className="w-20 h-20 sm:w-28 sm:h-28 mx-auto"
            />
            <h3 className="text-xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mt-6">
              {service.title}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
