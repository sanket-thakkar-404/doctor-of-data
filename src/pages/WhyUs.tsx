import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const WhyUs = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <div className="pt-20">
      <PageHero
        badge="Why NexusCore"
        title={<>Built for Enterprises That <span className="text-gradient">Demand More.</span></>}
        description="We don't build generic software. We architect mission-critical systems with enterprise-grade security, 24/7 support, and scalable infrastructure that grows with your business."
      />
      <WhyChooseUs />
    </div>
    <Footer />
  </div>
);

export default WhyUs;
