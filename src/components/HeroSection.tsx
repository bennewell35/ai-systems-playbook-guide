
import { Brain } from "lucide-react";

const HeroSection = () => (
  <section className="bg-primary text-white relative overflow-hidden">
    <div className="mx-auto max-w-5xl flex flex-col-reverse md:flex-row items-center py-24 md:py-32 px-4 gap-12 md:gap-24 animate-fade-in">
      <div className="flex-1">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-[0_2px_6px_rgba(10,102,194,0.10)]">
          Master AI Systems.<br className="hidden md:inline" /> Build Better Products.
        </h1>
        <p className="text-lg md:text-2xl font-medium text-blue-100 mb-10 max-w-xl">
          A real-world playbook for learning LLMs, agents, prompt engineering, and how AI systems actually work.
        </p>
        <a
          href="#guide"
          className="inline-block rounded-full bg-accent text-white font-semibold px-9 py-3.5 text-base md:text-lg shadow-lg hover:bg-accent/90 transition-colors"
        >
          Explore the Playbook
        </a>
      </div>
      <div className="flex-1 flex justify-center mb-12 md:mb-0">
        <div className="rounded-full bg-accent/20 flex items-center justify-center w-52 h-52 md:w-72 md:h-72 shadow-xl border-4 border-accent/30 transition-transform hover:scale-105">
          <Brain size={112} className="text-white drop-shadow-lg" />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
