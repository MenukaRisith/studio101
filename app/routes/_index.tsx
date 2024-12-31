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
        e.preventDefault();
        const section = document.querySelector(target.hash);
        if (section) {
          const offset = 80; // Offset for fixed navbar
          const targetPosition =
            section.getBoundingClientRect().top + window.scrollY - offset;
          const startPosition = window.scrollY;
          const distance = targetPosition - startPosition;
          const duration = 1000; // Animation duration in milliseconds
          let startTime: number | null = null;

          const easeInOutQuad = (t: number) =>
            t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

          const animation = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1); // Ensure progress doesn't exceed 1
            const ease = easeInOutQuad(progress);
            window.scrollTo(0, startPosition + distance * ease);

            if (timeElapsed < duration) {
              requestAnimationFrame(animation);
            }
          };

          requestAnimationFrame(animation);
        }
      }
    };

    // Add smooth scroll listener
    document.addEventListener("click", handleSmoothScroll);

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, []);

  return (
    <div className="font-[poppins] dark:bg-gray-900">
      <main>
        <Navbar />
        <HeroSection />
        <div>
          <AboutSection />
          <ClientsSection />
          <ServicesSection />
          <ProjectsSection />
          <FAQSection />
        </div>
      </main>
      <footer>
        <FooterSection />
      </footer>
    </div>
  );
}
