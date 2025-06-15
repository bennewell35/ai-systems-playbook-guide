
import { Code2 } from "lucide-react";
const samplePrompt = `You are an expert product builder and prompt engineer. Build a visually stunning, actionable playbook with:
- Step cards for prompt engineering & agent ops
- Mobile-friendly, remixable content modules
- Real-world examples, pro tips, "how it was built" transparency
- Invite users to fork steps for their own workflow
- Always include a branded CTA to connect or contribute.`;

const PromptTransparencySection = () => (
  <section id="prompt-transparency" className="max-w-2xl mx-auto mt-8 mb-8 px-4 animate-fade-in">
    <div className="rounded-3xl bg-blue-100 border-l-8 border-primary shadow-card flex gap-4 items-start p-6">
      <Code2 size={30} className="text-primary" />
      <div>
        <h2 className="text-lg font-bold mb-2 text-primary">Prompt Transparency</h2>
        <div>
          <span className="font-bold">Here's the prompt I used to build this app:</span>
          <pre className="my-2 text-sm bg-white rounded p-3 overflow-auto">{samplePrompt}</pre>
        </div>
        <div className="text-primary/80 text-sm">Use this as inspiration for your project—remix and share your upgraded prompts!</div>
      </div>
    </div>
  </section>
);
export default PromptTransparencySection;
