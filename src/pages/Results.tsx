import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import MetricsSection from "@/components/MetricsSection";
import Footer from "@/components/Footer";

const Results = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <div className="pt-20">
      <PageHero
        badge="Impact"
        title={<>Measurable Results. <span className="text-gradient">Not Promises.</span></>}
        description="Our track record speaks through data. From 40% efficiency gains to 99.9% uptime — every engagement is designed to deliver quantifiable business impact."
      />
      <MetricsSection />
    </div>
    <Footer />
  </div>
);

export default Results;
