const AboutSection = () => {
  return (
    <section className="relative bg-white dark:bg-gray-900 py-16 px-4 -mt-20">
      {/* Glowing Background Ellipse */}
      <div className="absolute top-[-150px] left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[1200px] h-[200px] sm:h-[250px] bg-indigo-500 rounded-full blur-3xl animate-pulse-glow"></div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center mt-40">
        <p className="text-lg sm:text-4xl font-semibold text-neutral-800 dark:text-gray-100 font-['Poppins'] leading-relaxed px-4">
          The Team Behind Gajaman 3D, Sri Lanka&apos;s First 3D Animated Movie
          and the Highest Grossing Film in Sri Lankan Cinema History.
        </p>
      </div>

      {/* Glow Animation Keyframes */}
      <style>
        {`
          @keyframes pulse-glow {
            0% {
              transform: translate(-50%, 0) scale(1);
              opacity: 0.8;
            }
            50% {
              transform: translate(-50%, 0) scale(1.2);
              opacity: 1;
            }
            100% {
              transform: translate(-50%, 0) scale(1);
              opacity: 0.8;
            }
          }

          .animate-pulse-glow {
            animation: pulse-glow 3s infinite ease-in-out;
          }
        `}
      </style>
    </section>
  );
};

export default AboutSection;
