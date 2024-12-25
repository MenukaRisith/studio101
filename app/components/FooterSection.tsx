const FooterSection = () => {
  return (
    <footer className="relative bg-indigo-600 text-white py-16 overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute z-0 top-[-200px] left-1/2 transform -translate-x-1/2 w-[1400px] h-[300px] bg-indigo-500 rounded-full blur-3xl"></div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <img
              src="/logo.PNG" // Replace with your actual logo URL
              alt="Studio 101 Logo"
              className="mb-6 h-14"
            />
            <p className="text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Address Section */}
          <div>
            <h4 className="font-bold text-xl mb-4">Address</h4>
            <p className="text-lg">30/63L, Longdon Place, Colombo 07, Sri Lanka.</p>
            <h4 className="font-bold text-xl mt-6">Email</h4>
            <p className="text-lg">info@wearestudio101.com</p>
            <h4 className="font-bold text-xl mt-6">Phone</h4>
            <p className="text-lg">+94 773 686 101</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-xl mb-4">Navigate</h4>
            <ul className="space-y-2">
              <li>
                <a href="#projects" className="hover:underline">
                  Projects
                </a>
              </li>
              <li>
                <a href="#testimonial" className="hover:underline">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:underline">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-bold text-xl mb-4">Info</h4>
            <ul className="space-y-2">
              <li>
                <a href="#privacy-policy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:underline">
                  Terms
                </a>
              </li>
              <li>
                <a href="#copyright-policy" className="hover:underline">
                  Copyright Policy
                </a>
              </li>
              <li>
                <a href="#gajaman-3d" className="hover:underline">
                  Gajaman 3D
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-white opacity-20"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8">
          <p className="text-lg font-semibold text-center sm:text-left">
            © 2024 Studio 101
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {/* Social Media Icons */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center rounded-full border border-white opacity-70 hover:opacity-100 transition"
            >
              <i className="fab fa-facebook-f text-white"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center rounded-full border border-white opacity-70 hover:opacity-100 transition"
            >
              <i className="fab fa-linkedin-in text-white"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center rounded-full border border-white opacity-70 hover:opacity-100 transition"
            >
              <i className="fab fa-twitter text-white"></i>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center rounded-full border border-white opacity-70 hover:opacity-100 transition"
            >
              <i className="fab fa-youtube text-white"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
