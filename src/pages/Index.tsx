import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import Footer from "@/components/Footer";
import TestimonialsSection from '../components/TestimonialsSection'

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <TestimonialsSection/>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
