
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GuideSection from "@/components/GuideSection";
import ProTipsSection from "@/components/ProTipsSection";
import CaseStudySection from "@/components/CaseStudySection";
import MiniQuizSection from "@/components/MiniQuizSection";
import ConnectSection from "@/components/ConnectSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="w-full min-h-screen bg-background font-sans">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <GuideSection />
        <ProTipsSection />
        <MiniQuizSection />
        <CaseStudySection />
        <ConnectSection />
      </main>
      <Footer />
    </div>
  );
};
export default Index;
