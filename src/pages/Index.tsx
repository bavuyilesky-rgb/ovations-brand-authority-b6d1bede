import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyOvations from "@/components/WhyOvations";
import Services from "@/components/Services";
import PortfolioPreview from "@/components/PortfolioPreview";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import LocationMap from "@/components/LocationMap";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <LocalBusinessSchema />
      <Navbar />
      <Hero />
      <section id="why">
        <WhyOvations />
      </section>
      <section id="services">
        <Services />
      </section>
      <PortfolioPreview />
      <section id="reviews">
        <TestimonialsCarousel />
      </section>
      <section id="process">
        <Process />
      </section>
      <FAQ />
      <LocationMap />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
