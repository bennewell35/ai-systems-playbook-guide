
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GuideSection from "@/components/GuideSection";
import BestPracticeCards from "@/components/BestPracticeCards";
import ProTipsSection from "@/components/ProTipsSection";
import CaseStudySection from "@/components/CaseStudySection";
import MiniQuizSection from "@/components/MiniQuizSection";
import ConnectSection from "@/components/ConnectSection";
import Footer from "@/components/Footer";
import AIOpsWorkflowSection from "@/components/AIOpsWorkflowSection";
import { AppSidebar } from "@/components/AppSidebar";
import WhyThisWinsSection from "@/components/WhyThisWinsSection";
import RemixCalloutSection from "@/components/RemixCalloutSection";
import PromptTransparencySection from "@/components/PromptTransparencySection";
import MotivationalCard from "@/components/MotivationalCard";
import FaqGlossarySection from "@/components/FaqGlossarySection";
import HowIBuiltThisSection from "@/components/HowIBuiltThisSection";
import RemixCaseStudySection from "@/components/RemixCaseStudySection";
import { SidebarProvider } from "@/components/ui/sidebar";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background font-sans overflow-x-hidden">
        <AppSidebar />
        <div className="flex-1 flex flex-col w-full max-w-full">
          <Header />
          <main>
            <section id="hero"><HeroSection /></section>
            <GuideSection />
            <BestPracticeCards />
            <AIOpsWorkflowSection />
            <ProTipsSection />
            <MiniQuizSection />
            <FaqGlossarySection />
            <MotivationalCard />
            <AboutSection />
            <HowIBuiltThisSection />
            <PromptTransparencySection />
            <CaseStudySection />
            <ConnectSection />
            {/* Moved remix/why this wins to bottom */}
            <WhyThisWinsSection />
            <RemixCalloutSection />
            <RemixCaseStudySection />
          </main>
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};
export default Index;
