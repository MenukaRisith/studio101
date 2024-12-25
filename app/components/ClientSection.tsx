const ClientsSection = () => {
  return (
    <section className="relative bg-white dark:bg-gray-900 py-16 px-4 overflow-hidden">
      {/* Scrolling Wrapper */}
      <div className="relative flex items-center overflow-hidden">
        <div className="flex gap-8 animate-loop">
          {/* Original Set of Cards */}
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="w-96 h-[500px] bg-zinc-300 rounded-3xl border border-zinc-400 flex-shrink-0"
              ></div>
            ))}
          {/* Duplicate Set of Cards */}
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <div
                key={index + 8}
                className="w-96 h-[500px] bg-zinc-300 rounded-3xl border border-zinc-400 flex-shrink-0"
              ></div>
            ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes loop {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .animate-loop {
            display: flex;
            animation: loop 20s linear infinite;
            width: calc(192px * 16); /* Width of all cards including duplicates */
          }
        `}
      </style>
    </section>
  );
};

export default ClientsSection;
