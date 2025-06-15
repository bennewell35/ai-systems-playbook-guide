import React from "react";
import { Lightbulb, Workflow } from "lucide-react";

const agentBestPractices = [
  "Start simple: <strong>Launch agents on one small task</strong> before expanding scope or giving access to tools.",
  "<strong>Sandbox every new agent</strong>: Always run agents in a test/restricted environment first.",
  "<strong>Log every action</strong>: Record agent decisions, tool calls, and responses for debugging and trust.",
  "<strong>Set clear boundaries</strong>: Define exactly what agents can and can’t do—avoid “infinite” autonomy.",
  "<strong>Timeouts and retries</strong>: Set max time and tries per task to avoid runaway/looping agents.",
  "<strong>Human-in-the-loop</strong>: Add approval/manual override steps for high-stakes or external actions.",
  "<strong>Audit trails</strong>: Keep full logs for all agent actions, including failures and exceptions.",
  "<strong>Simulate edge cases</strong>: Test agents on unexpected or adversarial input before real users do.",
  "<strong>Prompt clarity</strong>: Give agents explicit instructions for each tool and outcome expected.",
  "<strong>Recovery plans</strong>: Make sure agents have fallback or exit strategies when blocked/confused.",
];

const agentProTip =
  "Before deploying, “red team” your agent: can it be tricked, looped, or do anything unintended?";

const mcpsBestPractices = [
  "<strong>Isolate each step</strong>: Treat every chain component as a standalone prompt—test and optimize separately.",
  "<strong>Explicit handoff</strong>: Define what output from one chain is input for the next—avoid ambiguity.",
  "<strong>Error handling</strong>: Anticipate/catch failures at every chain link; fallback or alert on missing/bad output.",
  "<strong>Minimize prompt drift</strong>: Watch for outputs deviating from the intended goal, especially after 2+ steps.",
  "<strong>Data validation</strong>: Sanitize/check outputs before chaining—avoid blank or malformed results.",
  "<strong>Logging & tracing</strong>: Save every step’s prompt/response; visualize flow for easier debugging.",
  "<strong>Performance profiling</strong>: Monitor for latency bottlenecks—chains add delay if not optimized.",
  "<strong>Reuse patterns</strong>: Document and templatize common MCPS flows for repeatable use.",
  "<strong>Human intervention</strong>: Insert review points if any step affects critical actions or outcomes.",
];

const mcpsProTip =
  "Visualize your entire chain on a whiteboard before building—gaps or cycles become obvious immediately.";

const Card = ({
  icon,
  iconBg,
  title,
  headingColor,
  practices,
  proTip,
  bgColor,
}: {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  headingColor: string;
  practices: string[];
  proTip: string;
  bgColor: string;
}) => (
  <article
    className={`rounded-3xl w-full max-w-[440px] mx-auto shadow-card flex flex-col gap-4 py-7 px-3 md:px-6 mb-6 bg-opacity-95`}
    style={{
      background: bgColor,
      color: "#fff",
      minHeight: 430,
    }}
  >
    <header className="flex items-center gap-3 mb-0">
      <span
        className={`inline-flex items-center justify-center rounded-full`}
        style={{ background: iconBg, width: 46, height: 46 }}
      >
        {icon}
      </span>
      <h3
        className={`text-base md:text-lg font-bold leading-tight`}
        style={{ color: headingColor }}
      >
        {title}
      </h3>
    </header>
    <ul className="list-disc ml-5 space-y-1 text-[15px] md:text-base max-w-full">
      {practices.map((item, idx) => (
        <li key={idx} className="leading-snug break-words">
          <span
            dangerouslySetInnerHTML={{ __html: item }}
          />
        </li>
      ))}
    </ul>
    <div className="mt-auto">
      <div className="bg-white/20 rounded-lg px-3 py-2 text-white font-semibold text-sm md:text-base flex items-center gap-2 max-w-full">
        <Lightbulb className="inline-block text-yellow-200" size={20} />
        <span className="leading-tight break-words">
          <span className="font-bold">Pro Tip:</span> {proTip}
        </span>
      </div>
    </div>
  </article>
);

const BestPracticeCards = () => (
  <section
    aria-label="Agent and MCPS Best Practices"
    className="w-full flex flex-col md:flex-row gap-7 md:gap-6 justify-center items-stretch mt-8 mb-4 px-2"
  >
    <Card
      icon={<Workflow size={28} className="text-white" />}
      iconBg="#12C18D"
      title="Agent Workflow Best Practices"
      headingColor="#fff"
      practices={agentBestPractices}
      proTip={agentProTip}
      bgColor="#12C18D"
    />
    <Card
      icon={<Lightbulb size={28} className="text-white" />}
      iconBg="#0A66C2"
      title="Multi-Chain Prompt Systems (MCPS) Best Practices"
      headingColor="#fff"
      practices={mcpsBestPractices}
      proTip={mcpsProTip}
      bgColor="#0A66C2"
    />
  </section>
);

export default BestPracticeCards;
