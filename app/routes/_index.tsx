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
    const handleSmoothScroll = (e: Event) => {
      const target = (e.target as HTMLElement).closest("a");
      if (target && target.hash) {
        const section = document.querySelector(target.hash);
        if (section) {
          e.preventDefault();
          const offset = 80; // Offset for fixed navbar
          const targetPosition =
            section.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);
    return () => {
      document.removeEventListener("click", handleSmoothScroll);
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
