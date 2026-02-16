import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import TrustBar from "@/components/landing/TrustBar";
import BriefAbout from "@/components/landing/BriefAbout";
import Benefits from "@/components/landing/Benefits";
import Services from "@/components/landing/Services";
import SplitSection from "@/components/landing/SplitSection";
import StatsBar from "@/components/landing/StatsBar";
import FeatureGrid from "@/components/landing/FeatureGrid";
import CardShowcase from "@/components/landing/CardShowcase";
import ValueStack from "@/components/landing/ValueStack";
import ComparisonTable from "@/components/landing/ComparisonTable";
import NumberedCards from "@/components/landing/NumberedCards";
import PeopleGrid from "@/components/landing/PeopleGrid";
import MetricCards from "@/components/landing/MetricCards";
import CtaDownload from "@/components/landing/CtaDownload";
import Testimonials from "@/components/landing/Testimonials";
import FinalCta from "@/components/landing/FinalCta";
import LeadForm from "@/components/landing/LeadForm";
import Footer from "@/components/landing/Footer";
import ProjectGallery from "@/components/landing/ProjectGallery";
import ProjectGallerySlider from "@/components/landing/ProjectGallerySlider";
import FounderSection from "@/components/landing/FounderSection";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main>
      <Hero />
      {/*<TrustBar />*/}
      <BriefAbout />
      <StatsBar />
      <Services />
      <SplitSection />
      <FeatureGrid />
      <ComparisonTable />
      <NumberedCards />
      <ProjectGallery />
      <FounderSection />
      

      {/*<Benefits />*/}
      {/*<CardShowcase />*/}
      {/*<ValueStack />*/}
      {/*<ProjectGallerySlider />*/}
      {/*<PeopleGrid />*/}
      {/*<MetricCards />*/}
      {/*<CtaDownload />*/}
      {/*<Testimonials />*/}
      {/*<FinalCta />*/}
      <LeadForm />
    </main>
    <Footer />
  </div>
);

export default Index;
