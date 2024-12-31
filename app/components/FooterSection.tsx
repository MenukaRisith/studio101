const FooterSection = () => {
  const footerLinks = [
    {
      title: "Navigate",
      links: [
        { label: "Projects", href: "#projects" },
        { label: "Testimonials", href: "#testimonial" },
        { label: "Services", href: "#services" },
        { label: "FAQs", href: "#faq" },
      ],
    },
    {
      title: "Info",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms", href: "/terms" },
        { label: "Copyright Policy", href: "/copyright-policy" },
        { label: "Gajaman 3D", href: "https://gajaman3d.com" },
      ],
    },
  ];

  const socialMedia = [
    { href: "https://facebook.com", icon: "fab fa-facebook-f" },
    { href: "https://linkedin.com", icon: "fab fa-linkedin-in" },
    { href: "https://twitter.com", icon: "fa-brands fa-x-twitter" },
    { href: "https://youtube.com", icon: "fab fa-youtube" },
    { href: "https://instagram.com", icon: "fab fa-instagram" },
  ];

  return (
    <footer className="relative bg-indigo-600 text-white py-10 sm:py-16 overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute z-0 top-[-200px] left-1/2 transform -translate-x-1/2 w-[1400px] h-[300px] bg-indigo-500 rounded-full blur-3xl"></div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Logo, Description, Address */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <img
              src="/logo.PNG" // Replace with your actual logo
              alt="Studio 101 Logo"
              className="mb-4 h-12 sm:h-14"
            />
            <p className="text-sm sm:text-base leading-tight mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="mb-4">
              <h4 className="font-bold text-lg sm:text-xl mb-1">Address</h4>
              <p className="text-sm sm:text-base leading-tight">
                30/63L, Longdon Place, <br />
                Colombo 07, Sri Lanka.
              </p>
            </div>
          </div>
        </div>

        {/* Inline Section: Email, Phone, and Links */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 space-y-6 lg:space-y-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-6">
            <div className="mb-4 sm:mb-0">
              <h4 className="font-bold text-lg sm:text-xl mb-1">Email</h4>
              <a
                href="mailto:info@wearestudio101.com"
                className="text-sm sm:text-base leading-tight"
              >
                info@wearestudio101.com
              </a>
            </div>
            <div>
              <h4 className="font-bold text-lg sm:text-xl mb-1">Phone</h4>
              <a
                href="tel:+94773686101"
                className="text-sm sm:text-base leading-tight"
              >
                +94 773 686 101
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 lg:flex lg:space-x-16">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h4 className="font-bold text-lg sm:text-xl mb-1">{section.title}</h4>
                <ul className="space-y-1">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <a href={link.href} className="text-sm sm:text-base hover:underline">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white opacity-20"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 space-y-4 sm:space-y-0">
          <p className="text-sm sm:text-base font-semibold text-center sm:text-left">
            © 2024 Studio 101
          </p>
          <div className="flex space-x-3">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex justify-center items-center rounded-full border border-white opacity-70 hover:opacity-100 transition"
              >
                <i className={social.icon + " text-white text-sm sm:text-base"}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
