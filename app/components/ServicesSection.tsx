import { useState, useEffect } from "react";

const ServicesSection = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    // Listen for changes in the `dark` class
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
    {
      id: "video-camera",
      title: "Video Production",
      description:
        "Creating stunning videos that bring your ideas to life with professional quality.",
    },
    {
      id: "personal-branding",
      title: "Branding",
      description:
        "Building strong and memorable brand identities to set you apart.",
    },
    {
      id: "marketing",
      title: "Advertisements",
      description:
        "Delivering eye-catching ads tailored to leave a lasting impression on your audience.",
    },
    {
      id: "influencer",
      title: "Influencer Marketing",
      description:
        "Connecting brands with influencers to boost engagement and reach.",
    },
    {
      id: "3d-cube",
      title: "3D Animation",
      description:
        "Crafting realistic and visually appealing 3D animations for any purpose.",
    },
    {
      id: "cube",
      title: "2D Animation",
      description:
        "Producing classic 2D animations with modern tools for impactful storytelling.",
    },
    {
      id: "vr-glasses",
      title: "AR/VR",
      description:
        "Immersive augmented and virtual reality experiences to captivate your audience.",
    },
    {
      id: "modelling",
      title: "Game Development",
      description:
        "Designing and developing engaging games for all platforms with cutting-edge technology.",
    },
    {
      id: "artificial-intelligence",
      title: "AI",
      description:
        "Integrating artificial intelligence solutions to enhance efficiency and innovation.",
    },
  ];

  return (
    <section id="services" className="py-16 px-4 bg-white dark:bg-gray-900">
      {/* Section Heading */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <div className="Title h-12 px-5 py-3 bg-gray-200 dark:bg-stone-900 rounded-xl border border-neutral-400 backdrop-blur-sm justify-center items-center gap-2.5 inline-flex">
          <div className="Services text-stone-900 dark:text-white text-xl font-bold font-['Poppins']">
            Services
          </div>
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
        {services.map(({ id, title, description }) => (
          <div
            key={id}
            className="bg-white dark:bg-[#1E1E1E] rounded-xl border border-gray-300 dark:border-gray-700 p-6 text-center"
          >
            <img
              src={`/icons/${isDarkTheme ? "dark/" : ""}${id}.gif`}
              alt={title}
              className="w-20 h-20 sm:w-28 sm:h-28 mx-auto"
            />
            <h3 className="text-xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mt-6">
              {title}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base mt-4">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
