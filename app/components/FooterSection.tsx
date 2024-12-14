export default function FooterSection() {
    return (
      <footer
        className="relative bg-gray-900 text-white py-16 px-6 sm:px-12"
        style={{
          marginTop: "-10px", // Adjust this value to fine-tune the overlap
          zIndex: 10, // Ensures it stays on top
        }}
      >
        {/* Top Content */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Seasoned. Nimble. Remote.</h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            We&apos;re a diverse and passionate team that takes ownership of your design and empowers you to execute the roadmap. We stay light on our feet and truly enjoy delivering great work.
          </p>
        </div>
  
        {/* Buttons */}
        <div className="flex justify-center items-center space-x-4 mb-10">
          <button
            className="px-6 py-2 rounded-full bg-gray-800 text-white border border-gray-700 hover:bg-white hover:text-black transition"
            style={{
              borderWidth: "0.35px",
            }}
          >
            ✨ Insights
          </button>
          <button
            className="px-6 py-2 rounded-full bg-gray-800 text-white border border-gray-700 hover:bg-white hover:text-black transition"
            style={{
              borderWidth: "0.35px",
            }}
          >
            🌟 Contact
          </button>
        </div>
  
        {/* Divider */}
        <div className="border-t border-gray-700 mb-10"></div>
  
        {/* Bottom Content */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
          {/* Logo */}
          <img src="/logo.PNG" alt="Studio 101 Logo" className="h-10" />
  
          {/* Copyright */}
          <p className="text-gray-500 text-xs sm:text-sm text-center">
            &copy; 2025 Studio101. All Rights Reserved.
          </p>
  
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-700 hover:bg-white hover:text-black transition"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-700 hover:bg-white hover:text-black transition"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-700 hover:bg-white hover:text-black transition"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
  