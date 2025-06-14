import {
  Bot, File, Pencil, Folder, Armchair, Link2, Sliders, Network, ShieldCheck,
  Brain, Lightbulb
} from "lucide-react";

// Data-driven guide topics config:
const guideTopics = [
  {
    icon: "🤖",
    iconColor: "#0A66C2",
    title: "Large Language Models (LLMs)",
    summary: "Powerful AI trained on vast text data to generate or summarize content.",
    why: "LLMs are the “brain” behind most chatbots, content tools, and AI assistants.",
    when: "Anytime you want to generate text, answer questions, or power a conversational agent.",
    best: [
      "Start with clear system prompts (“You are a…”).",
      "Use few-shot examples for complex instructions.",
      "Control creativity with temperature."
    ],
    tools: "OpenAI (GPT-4), Claude, Gemini",
    proTip: "Lower temperature for accuracy, raise for brainstorming."
  },
  {
    icon: "📝",
    iconColor: "#12C18D",
    title: "Prompt Engineering",
    summary: "The art of crafting prompts that direct an LLM’s behavior and output.",
    why: "A better prompt = better AI output, every time.",
    when: "Whenever results need to be consistent, safe, or in your brand’s voice.",
    best: [
      "Be explicit: describe the task, audience, and format.",
      "Use system prompts for role/persona.",
      "Iterate and A/B test prompts."
    ],
    tools: "OpenAI Playground, LangChain",
    proTip: "Test your prompts in isolation before integrating into chains/agents."
  },
  {
    icon: "📂",
    iconColor: "#0A66C2",
    title: "RAG (Retrieval-Augmented Generation)",
    summary: "Combining LLMs with external search—pulling in your data “on the fly.”",
    why: "LLMs can “forget” or hallucinate—RAG grounds answers in real info.",
    when: "Whenever the AI needs your latest docs, knowledge base, or proprietary data.",
    best: [
      "Clean your source data before indexing.",
      "Use RAG before investing in fine-tuning.",
      "Set up filters for what gets retrieved."
    ],
    tools: "LangChain, LlamaIndex, Pinecone, Supabase",
    proTip: "RAG is always the fastest way to teach an AI your content—don’t skip it."
  },
  {
    icon: "🦾",
    iconColor: "#12C18D",
    title: "AI Agents",
    summary: "A system where AI takes actions toward goals (not just chat!).",
    why: "Agents can automate workflows, manage tools, and “think” across steps.",
    when: "To automate sequences: e.g., research → summarize → email.",
    best: [
      "Start with 1–2 simple tools",
      "Add logging and guardrails",
      "Use clear step-by-step goals"
    ],
    tools: "Smol AI, AutoGPT, LangChain Agents",
    proTip: "Always “sandbox” your first agent experiments—don’t let them run wild."
  },
  {
    icon: "⛓️",
    iconColor: "#0A66C2",
    title: "Chains vs Agents",
    summary: "Chains: Pre-set series of steps (predictable, linear)\nAgents: Decide next step based on goals and environment",
    why: "Pick chains for predictable flows, agents for dynamic tasks.",
    when: "",
    best: [
      "Use chains for onboarding, forms, data pipelines",
      "Use agents for research, scheduling, troubleshooting"
    ],
    tools: "LangChain",
    proTip: "Test chains first, then “upgrade” to agents when you need flexibility."
  },
  {
    icon: "🎛️",
    iconColor: "#12C18D",
    title: "Fine-tuning vs Embeddings",
    summary: "Fine-tuning: Update a model for your brand/voice (costly, needs lots of data)\nEmbeddings: Transform data into vectors for search/comparison (cheaper, best for RAG/search)",
    why: "",
    when: "Fine-tune for tone, style, or industry specifics\nEmbeddings for search, similarity, recommendations",
    best: [
      "Start with embeddings for most tasks",
      "Fine-tune only when you hit real limits"
    ],
    tools: "OpenAI, Cohere, Pinecone",
    proTip: "90% of use cases can be solved with good embeddings + RAG."
  },
  {
    icon: "🖧",
    iconColor: "#0A66C2",
    title: "System Design & APIs",
    summary: "Architecting how your app, data, and AI “talk” to each other.",
    why: "Great system design = reliable, scalable, less expensive AI apps.",
    when: "",
    best: [
      "Use APIs for modularity",
      "Add monitoring/logging early",
      "Plan for fallback and errors"
    ],
    tools: "Supabase, FastAPI, Django REST",
    proTip: "Design every AI feature as a microservice—it’s easier to scale and debug."
  },
  {
    icon: "🛡️",
    iconColor: "#12C18D",
    title: "Guardrails & Feedback Loops",
    summary: "Ways to keep AI output safe, useful, and always improving.",
    why: "Unmonitored AI will go off the rails (hallucinate, offend, or fail).",
    when: "",
    best: [
      "Validate inputs/outputs",
      "Let users flag or correct results",
      "Collect feedback to retrain prompts"
    ],
    tools: "Humanloop, Custom logging, OpenAI Moderation",
    proTip: "Treat user feedback as your secret weapon for fast iteration."
  },
  {
    icon: "📊",
    iconColor: "#0A66C2",
    title: "Model Evaluation",
    summary: "Testing and comparing how different AI models perform on your actual tasks.",
    why: "Choosing the right model can save money, improve accuracy, and reduce surprises.",
    when: "",
    best: [
      "Benchmark models on real user prompts",
      "Compare cost, latency, and output quality"
    ],
    tools: "",
    proTip: "Run “blind” tests with users to see which answers they prefer."
  },
  {
    icon: "🔗",
    iconColor: "#12C18D",
    title: "Prompt Chaining",
    summary: "Combining multiple prompts in sequence to achieve a more complex outcome.",
    why: "Allows for building powerful workflows—each step builds on the last.",
    when: "",
    best: [
      "Keep each prompt simple",
      "Test each step in isolation"
    ],
    tools: "",
    proTip: "Log intermediate outputs for easy troubleshooting."
  },
  {
    icon: "🔢",
    iconColor: "#0A66C2",
    title: "Tokenization & Limits",
    summary: "AI models process text in “tokens”—chunks of words or characters.",
    why: "Hitting token limits can cut off outputs or increase costs.",
    when: "",
    best: [
      "Know your model’s token limit",
      "Use short, clear prompts"
    ],
    tools: "",
    proTip: "Summarize or chunk large texts before sending to the model."
  },
  {
    icon: "🛡️",
    iconColor: "#12C18D",
    title: "AI Ethics & Safety",
    summary: "Ensuring AI outputs are fair, unbiased, and safe for users.",
    why: "Unethical AI can harm reputation, users, and even break laws.",
    when: "",
    best: [
      "Use moderation tools",
      "Review outputs for sensitive use cases"
    ],
    tools: "",
    proTip: "Document your safety and review processes for transparency."
  },
  {
    icon: "🧑‍💻",
    iconColor: "#0A66C2",
    title: "Human-in-the-Loop",
    summary: "Combining AI automation with human review/approval for important decisions.",
    why: "Humans catch what AI misses, especially for critical or high-risk outputs.",
    when: "",
    best: [
      "Use AI for draft/first pass",
      "Add human review for publishing or critical actions"
    ],
    tools: "",
    proTip: "Let users “rate” AI responses to improve the system."
  }
];

const GuideSection = () => (
  <section id="guide" className="max-w-5xl mx-auto px-4 py-16">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">AI Systems Guide</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
      {guideTopics.map((t, i) => (
        <div
          key={t.title}
          className="bg-guidecard rounded-2xl shadow-card p-6 flex flex-col gap-4 animate-fade-in"
          style={{ animationDelay: `${i * 40}ms` as string }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="text-3xl" style={{ color: t.iconColor }}>{t.icon}</div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">{t.title}</h3>
            </div>
          </div>
          <div>
            <div className="text-gray-700 mb-1 whitespace-pre-line"><span className="font-semibold">What it is: </span>{t.summary}</div>
            {t.why && <div className="text-gray-700 mb-1"><span className="font-semibold">Why it matters: </span>{t.why}</div>}
            {t.when && <div className="text-gray-700 mb-1 whitespace-pre-line"><span className="font-semibold">When to use: </span>{t.when}</div>}
            <div className="text-gray-700 mb-1">
              <span className="font-semibold">Best practices:</span>
              <ul className="list-disc pl-5 mt-1 text-sm">
                {t.best.map((bp, j) => (<li key={j}>{bp}</li>))}
              </ul>
            </div>
            <div className="text-gray-700 text-sm mb-1"><span className="font-semibold">Top tools:</span> {t.tools}</div>
            <div className="bg-accent/10 text-accent px-3 py-2 rounded font-semibold inline-block mt-2 text-sm">{t.proTip}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
export default GuideSection;
