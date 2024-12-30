import React from "react";

const ClientSection: React.FC = () => {
  const generateCards = (count: number, startKey: number) => {
    return Array(count)
      .fill(0)
      .map((_, index) => (
        <div
          key={startKey + index}
          className="w-96 h-72 bg-zinc-300 rounded-3xl border border-zinc-400 flex-shrink-0"
        ></div>
      ));
  };

  return (
    <section className="relative bg-white dark:bg-gray-900 py-16 px-4 overflow-hidden">
      <div className="relative flex items-center overflow-hidden">
        <div className="flex gap-8 animate-loop">
          {/* Original Set of Cards */}
          {generateCards(8, 0)}
          {/* Duplicate Set of Cards */}
          {generateCards(8, 8)}
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
            animation: loop 30s linear infinite;
            width: calc(192px * 16); /* Width of all cards including duplicates */
          }
        `}
      </style>
    </section>
  );
};

export default ClientSection;
