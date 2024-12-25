import HeroSection from "~/components/HeroSection";
import AboutSection from "~/components/AboutSection";
import ClientsSection from "~/components/ClientSection";
import ServicesSection from "~/components/ServicesSection";
import ProjectsSection from "~/components/ProjectsSection";
import FAQSection from "~/components/FAQSection";
import FooterSection from "~/components/FooterSection";

export default function Index() {
  return (
    <div className="font-sans">
      <main>
        <HeroSection />
        <AboutSection />
        <ClientsSection />
        <ServicesSection />
        <ProjectsSection />
        <FAQSection />
      </main>
      <footer>
        <FooterSection />
      </footer>
    </div>
  );
}
