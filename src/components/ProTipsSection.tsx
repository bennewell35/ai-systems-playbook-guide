

import { Lightbulb } from "lucide-react";
const tips = [
  {
    icon: <Lightbulb className="w-5 h-5" />,
    text: "Don’t overcomplicate your MVP. Start simple, learn, then scale."
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    text: "System prompts are everything. They set the stage for the whole model."
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    text: "Use RAG before fine-tuning. Cheaper, faster, and more flexible."
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    text: "Automate feedback. Ask users what went wrong/right."
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    text: "Sandbox new agents. Always test before deploying live."
  },
  // New expanded Pro Tips provided by user:
  {
    icon: <Lightbulb className="w-5 h-5" />,
    text: "Start with a clear outcome: Always know what “good” output looks like before you prompt."
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    text: "Use system prompts for context: “You are a financial analyst…” works wonders."
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    text: "Limit open-ended queries: The more specific you are, the better the results."
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    text: "Check AI costs: Small prompt changes can save big on API bills."
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    text: "Iterate, don’t perfect: Ship early, then improve with real feedback."
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    text: "Keep users in control: Let users correct or override AI when possible."
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    text: "Log everything: You’ll thank yourself when debugging."
  }
];
const ProTipsSection = () => (
  <section
    id="pro-tips"
    className="w-full bg-accent text-white py-10 px-0 mt-12"
  >
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
        <Lightbulb className="w-6 h-6 text-white" />
        Product Builder Pro Tips
      </h2>
      <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-hide snap-x">
        {tips.map((tip, i) => (
          <div
            key={i}
            className="flex items-center gap-3 bg-accent/80 rounded-2xl shadow-lg min-w-[270px] md:min-w-[380px] px-6 py-5 snap-center animate-fade-in"
            style={{ animationDelay: `${i * 60}ms` as string }}
          >
            <div className="flex-shrink-0">{tip.icon}</div>
            <div className="font-semibold text-base">{tip.text}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default ProTipsSection;

