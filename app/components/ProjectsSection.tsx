const ProjectsSection = () => {
  const renderCards = (count: number, startKey: string) =>
    Array.from({ length: count }).map((_, index) => (
      <div
        key={`${startKey}-${index}`}
        className="w-96 h-72 bg-zinc-300 rounded-3xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-zinc-400 flex-shrink-0"
      ></div>
    ));

  return (
    <section
      id="projects"
      className="relative bg-white dark:bg-gray-900 py-16 px-4 overflow-hidden"
    >
      {/* Section Heading */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <div className="Title h-12 px-5 py-3 bg-stone-900 rounded-xl border border-neutral-400 backdrop-blur-sm justify-center items-center gap-2.5 inline-flex">
          <div className="Services text-gray-200 text-xl font-bold font-['Poppins']">
            Projects
          </div>
        </div>
        <h2 className="mt-8 text-3xl sm:text-5xl font-bold text-stone-900 dark:text-gray-100 font-['Poppins'] leading-10 max-w-lg mx-auto">
          Here’s what We <br /> Can do for You.
        </h2>
        <p className="mt-4 text-lg sm:text-xl font-semibold text-zinc-400 font-['Poppins'] leading-loose max-w-md mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Projects Cards */}
      <div className="relative overflow-hidden">
        <div className="flex gap-4 sm:gap-7 animate-scroll">
          {/* Top Row */}
          {renderCards(10, "row1")}
          {/* Duplicate Top Row */}
          {renderCards(10, "row1-duplicate")}
        </div>
        <div className="flex gap-4 sm:gap-7 animate-scroll reverse mt-8">
          {/* Bottom Row */}
          {renderCards(10, "row2")}
          {/* Duplicate Bottom Row */}
          {renderCards(10, "row2-duplicate")}
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
