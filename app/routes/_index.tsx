import { useEffect } from "react";
import Navbar from "~/components/Navbar";
import HeroSection from "~/components/HeroSection";
import AboutSection from "~/components/AboutSection";
import ClientsSection from "~/components/ClientSection";
import ServicesSection from "~/components/ServicesSection";
import ProjectsSection from "~/components/ProjectsSection";
import FAQSection from "~/components/FAQSection";
import FooterSection from "~/components/FooterSection";

export default function Index() {
  useEffect(() => {
    let isScrolling = false; // Prevents overlapping scrolls
    let lastScrollY = 0; // Tracks the last scroll position
    let scrollVelocity = 0; // Smoothens the scroll speed
    let requestId: number | null = null;

    const smoothScroll = () => {
      if (!isScrolling) {
        return;
      }

      // Calculate smooth scroll
      const targetScroll = lastScrollY + scrollVelocity * 0.2;

      window.scrollTo(0, targetScroll);

      // Decelerate scrolling
      scrollVelocity *= 0.8;

      // Stop scrolling when velocity is near zero
      if (Math.abs(scrollVelocity) > 0.5) {
        requestId = requestAnimationFrame(smoothScroll);
      } else {
        isScrolling = false;
        scrollVelocity = 0;
        if (requestId) cancelAnimationFrame(requestId);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault(); // Prevent default scrolling
      scrollVelocity += e.deltaY * 0.5; // Accumulate scrolling speed
      lastScrollY = window.scrollY; // Update the last scroll position
      if (!isScrolling) {
        isScrolling = true;
        smoothScroll();
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault(); // Prevent native touch scrolling
      const touch = e.touches[0];
      const deltaY = touch.clientY - lastScrollY;
      scrollVelocity += deltaY * 0.5;
      lastScrollY = window.scrollY;
      if (!isScrolling) {
        isScrolling = true;
        smoothScroll();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchmove", handleTouchMove);
      if (requestId) cancelAnimationFrame(requestId);
    };
  }, []);

  return (
    <div className="font-[poppins] dark:bg-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content with Blur Overlay */}
      <div className="relative">
        {/* Blur Overlay */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-neutral-200/20 dark:bg-neutral-900/40 blur-2xl"></div>
        </div>

        {/* Main Sections */}
        <div className="relative z-10">
          <AboutSection />
          <ClientsSection />
          <ServicesSection />
          <ProjectsSection />
          <FAQSection />
        </div>
      </div>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
