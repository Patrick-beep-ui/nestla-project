import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import BriefAbout from "@/components/landing/BriefAbout";
import Services from "@/components/landing/Services";
import StatsBar from "@/components/landing/StatsBar";
import FeatureGrid from "@/components/landing/FeatureGrid";
import ComparisonTable from "@/components/landing/ComparisonTable";
import NumberedCards from "@/components/landing/NumberedCards";
import Testimonials from "@/components/landing/Testimonials";
import Footer from "@/components/landing/Footer";
import ProjectGallery from "@/components/landing/ProjectGallery";
import LeadMagnetFounder from "@/components/landing/LeadMagnetFounder";
import LeadFormGHL from "@/components/landing/LeadFormGHL";

//import TrustBar from "@/components/landing/TrustBar";
//import Benefits from "@/components/landing/Benefits";
//import SplitSection from "@/components/landing/SplitSection";
//import CardShowcase from "@/components/landing/CardShowcase";
//import ValueStack from "@/components/landing/ValueStack";
//import PeopleGrid from "@/components/landing/PeopleGrid";
//import MetricCards from "@/components/landing/MetricCards";
//import CtaDownload from "@/components/landing/CtaDownload";
//import FinalCta from "@/components/landing/FinalCta";
//import LeadForm from "@/components/landing/LeadForm";
//import ProjectGallerySlider from "@/components/landing/ProjectGallerySlider";
//import FounderSection from "@/components/landing/FounderSection";
//import LeadMagnet from "@/components/landing/LeadMagnet";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main>
      <Hero />
      <BriefAbout />
      <StatsBar />
      <Services />
      <FeatureGrid />
      <ComparisonTable />
      <LeadMagnetFounder />
      <NumberedCards />
      <ProjectGallery />
      <Testimonials />
      <LeadFormGHL />

      {/*<TrustBar />*/}
      {/*<Benefits />*/}
      {/*<SplitSection />*/}
      {/*<CardShowcase />*/}
      {/*<ValueStack />*/}
      {/*<LeadMagnet />*/}
      {/*<ProjectGallerySlider />*/}
      {/*<PeopleGrid />*/}
      {/*<MetricCards />*/}
      {/*<CtaDownload />*/}
      {/*<FinalCta />*/}
      {/*<FounderSection />*/}
      {/*<LeadForm />*/}
     
    </main>
    <Footer />
  </div>
);

export default Index;
