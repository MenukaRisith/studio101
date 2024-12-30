import { useState, useEffect } from "react";

const CopyrightPolicy = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const updateDarkModeState = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    // Observe changes in the "dark" mode class on the root element
    const observer = new MutationObserver(updateDarkModeState);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Perform an initial check
    updateDarkModeState();

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="copyright-policy"
      className={`py-16 px-4 ${
        isDarkMode ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"
      }`}
    >
      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className={`absolute top-4 left-4 p-2.5 ${
          isDarkMode ? "bg-indigo-500 text-white" : "bg-indigo-500 text-white"
        } rounded-full flex items-center justify-center hover:bg-indigo-400 transition-all duration-300`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <div
          className="inline-block px-5 py-3 rounded-xl text-lg font-bold"
          style={{
            background: isDarkMode ? "#1E1E1E" : "#F5F5F5",
            color: isDarkMode ? "#EBEBEB" : "#1E1E1E",
            borderRadius: "12px",
            border: isDarkMode ? "1px solid #8E8E8E" : "1px solid #CCCCCC",
            backdropFilter: "blur(3px)",
            fontFamily: "Poppins",
            fontWeight: 700,
          }}
        >
          Copyright Policy
        </div>
        <h2
          className={`mt-6 text-3xl sm:text-5xl font-bold ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Copyright Policy
        </h2>
        <p
          className={`mt-4 text-lg sm:text-xl ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Learn how we protect intellectual property and address copyright
          concerns.
        </p>
      </div>

      {/* Content */}
      <div
        className={`max-w-4xl mx-auto rounded-3xl p-6 border ${
          isDarkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-gray-50 border-gray-200"
        }`}
      >
        <h3 className="text-2xl font-semibold mb-4">Introduction</h3>
        <p className="text-lg mb-6">
          Studio 101 respects the intellectual property rights of others and
          expects the same from its users. This Copyright Policy outlines the
          practices and procedures in place to address copyright infringement
          and ensure compliance with applicable laws.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Ownership of Content</h3>
        <p className="text-lg mb-6">
          All content on the Studio 101 website, including but not limited to
          text, graphics, logos, videos, animations, and other materials, is
          owned or licensed by Studio 101 and is protected by copyright laws.
          Unauthorized use, reproduction, or distribution of this content is
          strictly prohibited.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Usage Permissions</h3>
        <p className="text-lg mb-6">
          Permission to use any content on this website must be explicitly
          obtained from Studio 101. Requests can be directed to{" "}
          <a
            href="mailto:info@wearestudio101.com"
            className={`${
              isDarkMode ? "text-indigo-400" : "text-indigo-500"
            } hover:underline`}
          >
            info@wearestudio101.com
          </a>
          .
        </p>

        <h3 className="text-2xl font-semibold mb-4">DMCA Compliance</h3>
        <p className="text-lg mb-6">
          If you believe that any content on this website infringes your
          copyright, you may file a notice under the Digital Millennium
          Copyright Act (DMCA) by providing the following information:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Your name, address, and contact information.</li>
          <li>
            A description of the copyrighted work you claim has been infringed.
          </li>
          <li>The URL or location of the alleged infringing content.</li>
          <li>
            A statement of good faith belief that the use of the material is not
            authorized.
          </li>
          <li>
            A statement under penalty of perjury regarding the accuracy of your
            claim.
          </li>
        </ul>
        <p className="text-lg mb-6">
          Notices can be sent to{" "}
          <a
            href="mailto:dmca@wearestudio101.com"
            className={`${
              isDarkMode ? "text-indigo-400" : "text-indigo-500"
            } hover:underline`}
          >
            dmca@wearestudio101.com
          </a>
          .
        </p>

        <h3 className="text-2xl font-semibold mb-4">Policy Modifications</h3>
        <p className="text-lg">
          Studio 101 reserves the right to update or modify this Copyright
          Policy at any time. Users are encouraged to review this policy
          periodically to stay informed about how we protect intellectual
          property rights.
        </p>
      </div>
    </section>
  );
};

export default CopyrightPolicy;
