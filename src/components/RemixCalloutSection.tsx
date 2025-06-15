
import { Sparkles } from "lucide-react";

const RemixCalloutSection = () => (
  <section id="remix" className="max-w-2xl mx-auto mt-8 px-4 animate-fade-in">
    <div className="rounded-3xl bg-amber-50 border-l-8 border-accent shadow-card flex gap-4 items-center p-7">
      <Sparkles size={36} className="text-accent" />
      <div>
        <h2 className="text-lg font-bold mb-1 text-accent">Remix Your Own AI Workflow</h2>
        <p className="text-gray-800">
          Personalize these prompt chains and agent flows for your org! 
          Click the <span className="bg-accent/30 rounded px-1 mx-1">Remix</span> button on Lovable,
          edit modules, and track your versions—no coding required.
        </p>
        <div className="mt-2 italic text-accent">Share your remix or improvements with the AI builder community 🙌</div>
      </div>
    </div>
  </section>
);

export default RemixCalloutSection;
