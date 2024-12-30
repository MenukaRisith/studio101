const PrivacyPolicyPage = () => {
    return (
      <section
        id="privacy-policy"
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
            Privacy Policy
          </div>
          <h2 className="mt-6 text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            Privacy Policy
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-400">
            Learn how Studio 101 collects, uses, and protects your personal
            information.
          </p>
        </div>
  
        {/* Content */}
        <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-3xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-semibold mb-4">Information Collection</h3>
          <p className="text-lg mb-6">
            Studio 101 collects personal information, such as your name, email,
            and contact details, only when you voluntarily provide it through our
            website or services.
          </p>
  
          <h3 className="text-2xl font-semibold mb-4">Usage of Information</h3>
          <p className="text-lg mb-6">
            Your information is used to improve our services, respond to your
            inquiries, and send updates or promotional content (if you have opted
            in).
          </p>
  
          <h3 className="text-2xl font-semibold mb-4">Data Security</h3>
          <p className="text-lg mb-6">
            We take appropriate security measures to protect your personal data
            from unauthorized access, alteration, or disclosure.
          </p>
  
          <h3 className="text-2xl font-semibold mb-4">Cookies</h3>
          <p className="text-lg mb-6">
            Our website uses cookies to enhance user experience and track website
            analytics. You can adjust your browser settings to refuse cookies.
          </p>
  
          <h3 className="text-2xl font-semibold mb-4">Third-Party Services</h3>
          <p className="text-lg mb-6">
            We may share limited data with third-party services for analytics and
            marketing. These services are bound to comply with strict
            confidentiality agreements.
          </p>
  
          <h3 className="text-2xl font-semibold mb-4">Policy Updates</h3>
          <p className="text-lg">
            This Privacy Policy may be updated periodically. Any changes will be
            reflected on this page, and we encourage users to review the policy
            regularly.
          </p>
        </div>
      </section>
    );
  };
  
  export default PrivacyPolicyPage;
  