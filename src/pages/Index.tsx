import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyOvations from "@/components/WhyOvations";
import Services from "@/components/Services";
import Showcase from "@/components/Showcase";
import SocialProof from "@/components/SocialProof";
import Process from "@/components/Process";
import LocationMap from "@/components/LocationMap";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

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
      <Showcase />
      <section id="reviews">
        <SocialProof />
      </section>
      <section id="process">
        <Process />
      </section>
      <LocationMap />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
