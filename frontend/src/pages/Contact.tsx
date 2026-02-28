import Navbar from "@/components/Navbar";
import InquiryForm from "@/components/InquiryForm";
import Footer from "@/components/Footer";

const Contact = () => {
 return (
   <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <div className="pt-20">
      <InquiryForm />
    </div>
    <Footer />
  </div>
 )
};

export default Contact;
