
import { Document } from "lucide-react";

const CaseStudySection = () => (
  <section id="case-study" className="max-w-3xl mx-auto my-16 px-4">
    <div className="rounded-3xl bg-white border-l-8 border-accent shadow-card flex items-start gap-6 md:gap-8 p-7 md:p-12 animate-fade-in relative">
      <div className="flex-shrink-0 mt-1">
        <Document size={38} className="text-accent" />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2 text-gray-900">How I Used RAG in ImprvHealth</h2>
        <p className="text-gray-700 mb-3 text-base md:text-lg">
          To help users get smarter exercise and nutrition answers, I used RAG (Retrieval-Augmented Generation)
          to inject our custom workout library and food database directly into the AI’s responses.<br /><br />
          This meant our chatbot could recommend the exact workout or meal from our own content—not just generic tips.
          The result? Fewer hallucinations, much more personalized coaching, and real value for our users.
        </p>
        <a
          href="https://www.linkedin.com/in/newelljben/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 bg-accent text-white font-semibold px-5 py-2 rounded-full shadow hover:bg-accent/90 transition-colors text-base"
        >
          Learn More on LinkedIn
        </a>
      </div>
    </div>
  </section>
);

export default CaseStudySection;
