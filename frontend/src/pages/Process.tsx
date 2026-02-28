import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ProcessSection from "@/components/ProcessSection";
import Footer from "@/components/Footer";

const Process = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <div className="pt-20">
      <PageHero
        badge="Methodology"
        title={<>Engineered Process. <span className="text-gradient">Predictable Outcomes.</span></>}
        description="Our proven 5-phase methodology eliminates guesswork. From discovery to optimization, every step is designed for transparency, accountability, and measurable progress."
      />
      <ProcessSection />
    </div>
    <Footer />
  </div>
);

export default Process;
