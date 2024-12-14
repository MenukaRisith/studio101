// app/routes/index.tsx
import HeroSection from "~/components/HeroSection";
import ClientsSection from "~/components/ClientSection";
import TestimonialsSection from "~/components/TestimonialsSection";
import ServicesSection from "~/components/ServicesSection";
import FAQSection from "~/components/FAQSection";
import FooterSection from "~/components/FooterSection";

export default function Index() {
  return (
    <div className="font-sans">
      <main>
        <HeroSection />
        <ClientsSection />
        <ServicesSection />
        <TestimonialsSection />
        <FAQSection />
        {/* Additional sections will follow */}
      </main>
      <FooterSection />
    </div>
  );
}
