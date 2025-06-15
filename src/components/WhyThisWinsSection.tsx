
import { Trophy } from "lucide-react";

const WhyThisWinsSection = () => (
  <section id="why-this-wins" className="max-w-3xl mx-auto mt-8 mb-8 px-4 animate-fade-in">
    <div className="bg-gradient-to-br from-accent to-blue-600 text-white rounded-3xl shadow-card p-8 flex items-center gap-6">
      <Trophy size={54} className="flex-shrink-0 drop-shadow-lg" />
      <div>
        <h2 className="text-2xl font-bold mb-2">Why This Wins</h2>
        <p className="text-lg mb-2">
          <b>AI Systems Playbook</b> is more actionable and remixable than any static doc. 
          <br />
          • Step-by-step, real-world agent flows—ready to fork, not just read.<br />
          • Card-based, mobile-first learning—the fastest way to master prompt ops.<br />
          • Built 100% in Lovable—transparent, remixable, and open for improvement.<br />
          <br />
          <span className="font-semibold text-yellow-100">Remix it for your team or project in 2 clicks!</span>
        </p>
      </div>
    </div>
  </section>
);

export default WhyThisWinsSection;
