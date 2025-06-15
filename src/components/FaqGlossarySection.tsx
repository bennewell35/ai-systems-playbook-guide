
import { CircleHelp } from "lucide-react";

const faqs = [
  {
    q: "What is an Agent?",
    a: "An AI system that takes action toward a goal, not just chat—can call APIs, tools, handle sequences."
  },
  {
    q: "What is RAG?",
    a: "Retrieval-Augmented Generation: AI looks up info in your docs/db and uses it to answer more accurately."
  },
  {
    q: "What's a Prompt Chain?",
    a: "A series of prompts run in order, each building on the last to achieve a larger goal."
  }
];

const FaqGlossarySection = () => (
  <section id="faq" className="max-w-xl mx-auto mt-12 mb-16 px-4 animate-fade-in">
    <div className="rounded-3xl bg-white border-l-8 border-primary shadow-card p-7">
      <h2 className="flex items-center gap-2 text-lg font-bold mb-4 text-primary">
        <CircleHelp size={24} className="text-primary" /> FAQ / Glossary
      </h2>
      <dl className="space-y-4">
        {faqs.map(({ q, a }, i) => (
          <div key={i}>
            <dt className="font-semibold text-primary">{q}</dt>
            <dd className="ml-2 text-gray-700">{a}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-4 text-primary text-sm">
        Have a term to add or something unclear? <a href="#connect" className="underline font-semibold">Contact the creator</a>.
      </div>
    </div>
  </section>
);
export default FaqGlossarySection;
