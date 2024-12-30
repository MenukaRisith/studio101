const TermsPage = () => {
    return (
      <section
        id="terms"
        className="py-16 px-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
      >
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <div
            className="inline-block px-5 py-3 rounded-xl text-lg font-bold"
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
            Terms of Use
          </div>
          <h2 className="mt-6 text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            Terms of Service
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-400">
            Please read these terms carefully before using Studio 101&apos;s services.
          </p>
        </div>
  
        {/* Content */}
        <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-3xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-semibold mb-4">Acceptance of Terms</h3>
          <p className="text-lg mb-6">
            By accessing and using our website or services, you agree to comply
            with and be bound by these terms. If you do not agree, please do not
            use our services.
          </p>
  
          <h3 className="text-2xl font-semibold mb-4">Usage Restrictions</h3>
          <p className="text-lg mb-6">
            Users must not engage in any activity that disrupts or interferes with
            our services, servers, or networks connected to our website.
          </p>
  
          <h3 className="text-2xl font-semibold mb-4">Intellectual Property</h3>
          <p className="text-lg mb-6">
            All content, trademarks, and materials on this site are owned or
            licensed by Studio 101. Unauthorized use of this content is strictly
            prohibited.
          </p>
  
          <h3 className="text-2xl font-semibold mb-4">Disclaimer</h3>
          <p className="text-lg mb-6">
            Studio 101 provides services and content &quot;as is&quot; without warranties of
            any kind. We do not guarantee uninterrupted service or error-free
            functionality.
          </p>
  
          <h3 className="text-2xl font-semibold mb-4">Limitation of Liability</h3>
          <p className="text-lg mb-6">
            Studio 101 shall not be held liable for any damages arising from the
            use or inability to use our services, even if advised of potential
            damages.
          </p>
  
          <h3 className="text-2xl font-semibold mb-4">Changes to Terms</h3>
          <p className="text-lg">
            Studio 101 reserves the right to modify these terms at any time. Users
            are encouraged to review the terms periodically.
          </p>
        </div>
      </section>
    );
  };
  
  export default TermsPage;
  