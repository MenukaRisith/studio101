import { useEffect } from "react";
import gsap from "gsap";

export default function HeroSection() {
  useEffect(() => {
    gsap.fromTo(
      ".hero-text",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, delay: 0.3 }
    );
    gsap.fromTo(
      ".hero-buttons",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.8 }
    );
  }, []);

  return (
    <div className="relative w-full h-screen bg-black text-white rounded-b-[100px] overflow-hidden z-10">
      {/* Background Video */}
      <img
        src="/bg.png"
        className="absolute inset-0 w-full h-full object-cover rounded-b-[100px]"
        alt="bg"
      ></img>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-b-[100px]"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6">
        {/* Logo */}
        <div className="absolute top-4 left-4 sm:left-20">
          <img src="/logo.PNG" alt="Studio 101 Logo" className="h-10 sm:h-14" />
        </div>

        {/* Navigation */}
        <nav className="absolute top-10 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-lg font-medium">
          <a href="#projects" className="hover:text-purple-500 transition">
            Projects
          </a>
          <a href="#testimonial" className="hover:text-purple-500 transition">
            Testimonial
          </a>
          <a href="#services" className="hover:text-purple-500 transition">
            Services
          </a>
          <a href="#faq" className="hover:text-purple-500 transition">
            FAQ
          </a>
        </nav>

        {/* Call-to-Action Button */}
        <div className="absolute top-8 right-4 sm:right-20">
          <a
            href="#book-call"
            className="bg-purple-500 text-black px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-purple-500 transition flex items-center text-xs sm:text-sm font-semibold"
          >
            Book a call
            <i className="fas fa-phone-alt ml-2"></i>
          </a>
        </div>

        {/* Top Notification Text */}
        <a
          href="#notification"
          className="text-xs sm:text-sm mb-4 hero-text flex items-center justify-center px-4 py-2 bg-white bg-opacity-10 rounded-full border border-white hover:bg-opacity-20 transition cursor-pointer"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit!{" "}
          <span className="ml-2">😍</span>
        </a>

        {/* Hero Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-custom leading-tight mb-4 hero-text">
          Transforming{" "}
          <span className="text-purple-500 font-custom italic">Digital</span>{" "}
          <br />
          <span className="text-purple-500 font-custom italic">
            Experiences
          </span>{" "}
          with <br />
          Creative & innovation
        </h1>

        {/* Subheading */}
        <p className="text-sm sm:text-base text-sans md:text-lg mb-6 hero-text text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 hero-buttons">
          <button className="bg-white text-black px-6 py-2 sm:px-8 sm:py-3 rounded-full shadow-md hover:bg-gray-200 transition flex items-center text-xs sm:text-sm font-semibold">
            Let’s get started <span className="ml-2">🚀</span>
          </button>
          <button className="border border-white px-6 py-2 sm:px-8 sm:py-3 rounded-full hover:bg-gray-100 hover:text-black hover:bg-white transition flex items-center text-xs sm:text-sm font-semibold">
            Say Hi! <span className="ml-2">👋</span>
          </button>
        </div>
      </div>
    </div>
  );
}
