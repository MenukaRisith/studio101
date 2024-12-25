const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative bg-white dark:bg-gray-900 py-16 px-4 overflow-hidden"
    >
      {/* Section Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="h-12 px-5 py-3 bg-stone-900 rounded-xl border border-neutral-400 backdrop-blur-sm justify-center items-center gap-2.5 inline-flex">
          <span className="text-gray-200 text-xl font-bold font-['Poppins']">
            Projects
          </span>
        </div>
        <h2 className="mt-8 text-3xl sm:text-5xl font-bold text-stone-900 dark:text-gray-100 font-['Poppins'] leading-10">
          Here’s what We <br /> Can do for You.
        </h2>
        <p className="mt-4 text-lg sm:text-xl font-semibold text-zinc-400 font-['Poppins'] leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Projects Cards */}
      <div className="relative overflow-hidden">
        <div className="flex gap-4 sm:gap-7 animate-scroll">
          {/* Row 1 - Top */}
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <div
                key={`row1-${index}`}
                className="w-60 sm:w-80 h-64 sm:h-96 bg-zinc-300 rounded-3xl border border-zinc-400 flex-shrink-0"
              ></div>
            ))}
          {/* Duplicate Row 1 */}
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <div
                key={`row1-duplicate-${index}`}
                className="w-60 sm:w-80 h-64 sm:h-96 bg-zinc-300 rounded-3xl border border-zinc-400 flex-shrink-0"
              ></div>
            ))}
        </div>
        <div className="flex gap-4 sm:gap-7 animate-scroll reverse mt-8">
          {/* Row 2 - Bottom */}
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <div
                key={`row2-${index}`}
                className="w-60 sm:w-80 h-64 sm:h-96 bg-zinc-300 rounded-3xl border border-zinc-400 flex-shrink-0"
              ></div>
            ))}
          {/* Duplicate Row 2 */}
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <div
                key={`row2-duplicate-${index}`}
                className="w-60 sm:w-80 h-64 sm:h-96 bg-zinc-300 rounded-3xl border border-zinc-400 flex-shrink-0"
              ></div>
            ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .animate-scroll {
            display: flex;
            animation: scroll 30s linear infinite;
          }

          .reverse {
            animation-direction: reverse;
          }
        `}
      </style>
    </section>
  );
};

export default ProjectsSection;
