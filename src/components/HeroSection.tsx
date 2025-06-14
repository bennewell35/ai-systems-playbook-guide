
import { Brain } from "lucide-react";

const HeroSection = () => (
  <section className="bg-primary text-white relative overflow-hidden">
    <div className="mx-auto max-w-5xl flex flex-col-reverse md:flex-row items-center py-20 px-4 gap-12 md:gap-20 animate-fade-in">
      <div className="flex-1">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
          Master AI Systems.<br className="hidden md:inline" /> Build Better Products.
        </h1>
        <p className="text-lg md:text-2xl font-medium text-blue-100 mb-8">
          A real-world playbook for learning LLMs, agents, prompt engineering, and how AI systems actually work.
        </p>
        <a
          href="#guide"
          className="inline-block rounded-full bg-accent text-white font-semibold px-7 py-3 text-base md:text-lg shadow-md hover:bg-accent/90 transition-colors"
        >
          Explore the Playbook
        </a>
      </div>
      <div className="flex-1 flex justify-center mb-10 md:mb-0">
        <div className="rounded-full bg-accent/20 flex items-center justify-center w-44 h-44 md:w-60 md:h-60 shadow-lg">
          <Brain size={96} className="text-white drop-shadow-lg" />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
