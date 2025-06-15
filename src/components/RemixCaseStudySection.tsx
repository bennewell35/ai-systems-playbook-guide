
import { Users } from "lucide-react";
const RemixCaseStudySection = () => (
  <section id="remix-case-study" className="max-w-2xl mx-auto my-14 px-4 animate-fade-in">
    <div className="rounded-3xl bg-gradient-to-br from-primary to-accent text-white shadow-card flex gap-4 items-start p-7">
      <Users size={36} className="text-white" />
      <div>
        <h2 className="text-lg font-bold mb-1">How Remixing Worked for Us</h2>
        <p>
          At <b>ImprvHealth</b>, we remixed the RAG workflow—injecting our custom workout/food data, personalizing every chatbot response.<br />
          <span className="italic">Result? 50% fewer hallucinations, more actionable answers, and happier users.</span>
        </p>
        <div className="mt-2 text-xs">Remix your own playbook below!</div>
      </div>
    </div>
  </section>
);

export default RemixCaseStudySection;
