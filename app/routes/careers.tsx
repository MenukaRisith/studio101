const Careers = () => {
    return (
      <section className="relative bg-white dark:bg-gray-900 py-16 px-4">
        {/* Glowing Background Ellipse */}
        <div className="absolute top-[-150px] left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[1200px] h-[200px] sm:h-[250px] bg-indigo-500 rounded-full blur-3xl animate-pulse-glow"></div>
  
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto">
          <div
            className="inline-block px-5 py-3 rounded-xl text-lg font-bold mb-6"
            style={{
              background: "#1E1E1E",
              color: "#EBEBEB",
              borderRadius: "12px",
              border: "1px solid #8E8E8E",
              backdropFilter: "blur(3px)",
              fontFamily: "Poppins",
              fontWeight: 700,
            }}
          >
            Careers
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Join Our Creative Team
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
            Be part of Studio 101&apos;s journey to innovate, create, and thrive. Explore
            the opportunities to work with Sri Lanka’s leading production house.
          </p>
        </div>
  
        {/* Open Positions */}
        <div className="max-w-6xl mx-auto mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Position Card */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Video Editor
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Use your editing skills to bring ideas to life. Collaborate with
                our creative team and craft compelling visual stories.
              </p>
              <button className="mt-6 bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-400">
                Apply Now
              </button>
            </div>
  
            {/* Add More Positions */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                3D Animator
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Join our animation team and contribute to creating groundbreaking
                projects like Gajaman 3D.
              </p>
              <button className="mt-6 bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-400">
                Apply Now
              </button>
            </div>
  
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Graphic Designer
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Collaborate with the Studio 101 team to design visuals that leave
                a lasting impact.
              </p>
              <button className="mt-6 bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-400">
                Apply Now
              </button>
            </div>
          </div>
        </div>
  
        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Don’t see a role for you?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
            We’re always looking for creative minds! Send your resume and a cover
            letter to{" "}
            <a
              href="mailto:careers@wearestudio101.com"
              className="text-indigo-500 hover:underline"
            >
              careers@wearestudio101.com
            </a>
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
  
  export default Careers;