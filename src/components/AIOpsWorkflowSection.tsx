
import React from "react";
import {
  Wrench,
  TrendingUp,
  Lock,
  Handshake,
  FileText
} from "lucide-react";

// Workflow/instruction data for each advanced AI/GenAI task
const workflowSections = [
  {
    title: "Build Automated Evaluation Pipelines",
    icon: <Wrench size={28} className="text-white" />,
    bg: "bg-gradient-to-br from-blue-600 to-teal-500",
    steps: [
      "Choose an evaluation tool (e.g., Promptfoo, OpenAI Evals, or build a custom test harness).",
      "Define test cases: Gather prompt/response pairs and expected outcomes.",
      "Script your eval pipeline to automatically send test prompts to the model and collect results.",
      "Score outputs for accuracy, safety, cost, and relevance using code or prompt rules.",
      "Log results in a dashboard or spreadsheet for analysis."
    ]
  },
  {
    title: "Bridge Engineering & Product Interaction Teams",
    icon: <Handshake size={28} className="text-white" />,
    bg: "bg-gradient-to-br from-teal-500 to-blue-800",
    steps: [
      "Join sprint planning to understand both technical and product requirements.",
      "Map agent logic and POC features in flowcharts or diagrams.",
      "Review every change with both teams to ensure consistency from prototype to production.",
      "Hold cross-team demos after each major iteration."
    ]
  },
  {
    title: "Define & Surface Gen-AI Quality Metrics",
    icon: <TrendingUp size={28} className="text-white" />,
    bg: "bg-gradient-to-br from-blue-700 to-teal-700",
    steps: [
      "Set metrics: answer accuracy, step coverage, hallucination rate, latency, user satisfaction.",
      "Instrument your pipeline or backend to measure these automatically.",
      "Display real-time stats in a dashboard (Tableau, Grafana, Retool, or Sheets).",
      "Review metrics weekly to guide product and prompt changes."
    ]
  },
  {
    title: "Own Regression-Test Coverage",
    icon: <Lock size={28} className="text-white" />,
    bg: "bg-gradient-to-br from-teal-700 to-blue-500",
    steps: [
      "Write test cases that cover main agent logic, edge cases, and “known failures.”",
      "Automate nightly or weekly runs of these tests (CI/CD pipeline, cron jobs, etc.).",
      "Log failures and regressions; alert the team for prompt review.",
      "For gray-area outputs, assign a “human-in-the-loop” reviewer to make the call."
    ]
  },
  {
    title: "Rapidly Iterate & Fine-Tune Prompts",
    icon: <Wrench size={28} className="text-white" />,
    bg: "bg-gradient-to-br from-blue-600 to-teal-500",
    steps: [
      "Start with a base prompt and baseline test results.",
      "Change ONE thing at a time (structure, instructions, few-shot examples, temperature).",
      "Rerun the evaluation suite and measure improvement or regression.",
      "Keep best-performing variants and document what worked.",
      "Repeat until you suppress hallucinations and boost accuracy."
    ]
  },
  {
    title: "Architect Multi-Turn Conversation & Function Chains",
    icon: <TrendingUp size={28} className="text-white" />,
    bg: "bg-gradient-to-br from-blue-800 to-teal-600",
    steps: [
      "Diagram the full conversation or function call sequence.",
      "For each step, define the expected input and output format.",
      "Script the orchestration (in code or no-code tools like LangChain).",
      "Test with real user flows and edge cases.",
      "Log each turn for traceability and debugging."
    ]
  },
  {
    title: "Design Agent Personas, Guardrails & JSON Schemas",
    icon: <Lock size={28} className="text-white" />,
    bg: "bg-gradient-to-br from-teal-700 to-blue-700",
    steps: [
      "Write a persona doc: role, tone, guardrails (e.g., “Never give financial advice”).",
      "Define output format as a JSON schema or response template.",
      "Add validation steps to ensure all outputs match the schema before processing.",
      "Review regularly and update as needed for new requirements."
    ]
  },
  {
    title: "Document Prompt Patterns, Failures & Best Practices",
    icon: <FileText size={28} className="text-white" />,
    bg: "bg-gradient-to-br from-blue-700 to-teal-500",
    steps: [
      "Start a shared doc or Notion page for all prompts and templates.",
      "Log every failure mode and mitigation (e.g., “Fails if input lacks context”).",
      "Add “do/don’t” best practices (what worked, what didn’t).",
      "Update docs after every major change so teams stay aligned."
    ]
  },
  {
    title: "Collaborate with UX Conversation Designers",
    icon: <Handshake size={28} className="text-white" />,
    bg: "bg-gradient-to-br from-blue-600 to-teal-600",
    steps: [
      "Share prompt drafts with UX/design for review of tone and accessibility.",
      "Adjust prompts to match brand guidelines and plain language standards.",
      "Run user tests for comprehension and inclusivity.",
      "Iterate until all feedback is addressed."
    ]
  },
  {
    title: "Mentor & Champion Experimentation",
    icon: <Wrench size={28} className="text-white" />,
    bg: "bg-gradient-to-br from-teal-500 to-blue-800",
    steps: [
      "Hold regular “prompt jams” or reviews with engineers.",
      "Share findings, patterns, and failures openly.",
      "Teach prompt safety, structured output, and system-prompt layering.",
      "Encourage quick A/B tests and safe rollbacks."
    ]
  }
];

// Card UI for each workflow/instruction set
function WorkflowCard({
  title,
  icon,
  bg,
  steps,
  idx
}: {
  title: string;
  icon: React.ReactNode;
  bg: string;
  steps: string[];
  idx: number;
}) {
  return (
    <article
      className={
        `${bg} rounded-3xl w-full max-w-xl mx-auto shadow-card flex flex-col gap-3 py-7 px-4 sm:px-8 mb-6 text-white`
      }
      style={{
        minHeight: 0,
      }}
      aria-label={title}
    >
      <header className="flex items-center gap-4 mb-1">
        <span className="inline-flex items-center justify-center rounded-full bg-black/10" style={{ width: 46, height: 46 }}>
          {icon}
        </span>
        <h3 className="text-lg font-bold tracking-tight leading-snug">{title}</h3>
      </header>
      <ol className="list-decimal ml-5 space-y-2 text-[15px] sm:text-base font-medium">
        {steps.map((step, i) => (
          <li key={i} className="leading-snug">{step}</li>
        ))}
      </ol>
    </article>
  );
}

const AIOpsWorkflowSection = () => (
  <section
    aria-label="How to Build & Run World-Class AI Evaluation and Agent Workflows"
    className="w-full flex flex-col gap-4 justify-center items-stretch mt-8 mb-8 px-2"
    id="ai-eval-agent-workflows"
  >
    <div className="mx-auto mb-6 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-blue-800 drop-shadow" style={{ textShadow: "0 1px 5px rgba(13,110,253,0.2)" }}>
        How to Build & Run World-Class <span className="text-teal-600">AI Evaluation</span>{" "}
        and <span className="text-blue-700">Agent Workflows</span>
      </h2>
      <p className="mx-auto text-base text-gray-700 font-semibold max-w-2xl mb-2">
        Step-by-step instructions for advanced AI/GenAI operations, prompt engineering, and agent workflows.
      </p>
    </div>
    {/* Card list */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {workflowSections.map((props, idx) => (
        <WorkflowCard key={props.title} {...props} idx={idx} />
      ))}
    </div>
  </section>
);

export default AIOpsWorkflowSection;
