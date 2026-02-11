import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import TrustBar from "@/components/landing/TrustBar";
import Benefits from "@/components/landing/Benefits";
import Services from "@/components/landing/Services";
import Testimonials from "@/components/landing/Testimonials";
import LeadForm from "@/components/landing/LeadForm";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main>
      <Hero />
      <TrustBar />
      <Benefits />
      <Services />
      <Testimonials />
      <LeadForm />
    </main>
    <Footer />
  </div>
);

export default Index;
