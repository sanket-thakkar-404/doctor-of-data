import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const Services = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <div className="pt-20">
      <PageHero
        badge="Core Expertise"
        title={<>Full-Spectrum Technology <span className="text-gradient">Architecture.</span></>}
        description="From data systems to AI-powered applications, we deliver end-to-end solutions engineered for enterprise scale. Every solution is custom-built for your operational reality."
      />
      <ServicesSection />
    </div>
    <Footer />
  </div>
);

export default Services;
