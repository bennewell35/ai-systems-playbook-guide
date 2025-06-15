
import { Code2, Sparkles } from "lucide-react";
const HowIBuiltThisSection = () => (
  <section id="how-i-built-this" className="max-w-3xl mx-auto my-16 px-4 animate-fade-in">
    <div className="rounded-3xl bg-white border-accent border-l-8 shadow-card flex p-7 gap-5 items-start">
      <Sparkles size={38} className="text-accent" />
      <div>
        <h2 className="text-xl font-bold text-accent mb-2">How I Built This</h2>
        <ul className="list-disc ml-5 mb-2 text-gray-800">
          <li>
            <span className="font-semibold">Mapped system logic into Lovable modules</span> using a sticky nav and linked sections.
          </li>
          <li>
            <span className="font-semibold">Prompt-first design:</span> Each section is a self-contained, remixable module.
          </li>
          <li>
            <span className="font-semibold">Live preview and edit in Lovable</span> with 100% open, forkable code.
          </li>
        </ul>
        <div className="bg-accent/10 text-accent px-3 py-2 rounded font-semibold inline-block mt-2 text-sm">
          Want to build your own? Remix this app, adapt the modules, and share your story!
        </div>
      </div>
    </div>
  </section>
);
export default HowIBuiltThisSection;
