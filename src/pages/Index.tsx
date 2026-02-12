import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import TrustBar from "@/components/landing/TrustBar";
import BriefAbout from "@/components/landing/BriefAbout";
import Benefits from "@/components/landing/Benefits";
import Services from "@/components/landing/Services";
import CtaDownload from "@/components/landing/CtaDownload";
import Testimonials from "@/components/landing/Testimonials";
import FinalCta from "@/components/landing/FinalCta";
import LeadForm from "@/components/landing/LeadForm";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main>
      <Hero />
      <TrustBar />
      <BriefAbout />
      <Benefits />
      <Services />
      <CtaDownload />
      <Testimonials />
      <FinalCta />
      <LeadForm />
    </main>
    <Footer />
  </div>
);

export default Index;
