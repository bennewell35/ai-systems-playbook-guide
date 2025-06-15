
import { Lightbulb } from "lucide-react";

const cards = [
  {
    icon: <Lightbulb className="w-7 h-7 text-accent" />,
    title: "Start with the Problem",
    text: "Define user needs and desired outcome before you pick your model or tool. Good agents solve for success, not just completion."
  },
  {
    icon: <Lightbulb className="w-7 h-7 text-accent" />,
    title: "Prompt, Test, Repeat",
    text: "Iterate on prompts methodically. Keep changes small, log results, and improve patterns with each step."
  },
  {
    icon: <Lightbulb className="w-7 h-7 text-accent" />,
    title: "Use System Tools",
    text: "Tools like memory, RAG, and function calling can help you get much more predictable and useful outputs from LLMs and agents."
  }
];

const BestPracticeCards = () => (
  <section className="max-w-4xl mx-auto my-12 md:my-16 px-4 animate-fade-in">
    <h2 className="text-2xl md:text-3xl font-bold mb-7 text-primary text-center animate-fade-in" style={{ animationDelay: "80ms" }}>
      Best Practices for AI Agents
    </h2>
    <div className="flex flex-col md:flex-row gap-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className="flex-1 bg-guidecard rounded-2xl px-6 py-6 shadow-card flex gap-4 items-center animate-fade-in transition-transform hover:scale-105"
          style={{ animationDelay: `${i * 110 + 120}ms` }}
        >
          <div className="flex-shrink-0">{card.icon}</div>
          <div>
            <div className="text-lg font-bold mb-1">{card.title}</div>
            <div className="text-sm text-gray-700">{card.text}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default BestPracticeCards;

