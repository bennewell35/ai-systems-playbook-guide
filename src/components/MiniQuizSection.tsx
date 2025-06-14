
import React, { useState } from "react";
import { CheckCircle, X } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const quiz = [
  {
    question: "What’s the fastest way to ground your AI in your own knowledge base?",
    options: [
      "A) Fine-tuning",
      "B) RAG (Retrieval-Augmented Generation)",
      "C) More prompts"
    ],
    answer: 1 // 0-based index
  },
  {
    question: "What does “temperature” control in an LLM?",
    options: [
      "A) Output style",
      "B) Randomness/creativity",
      "C) Speed"
    ],
    answer: 1
  },
  {
    question: "Should you use an agent for onboarding forms?",
    options: [
      "A) Yes",
      "B) No"
    ],
    answer: 1
  },
  {
    question: "What’s the biggest mistake in prompt engineering?",
    options: [
      "A) Not being specific",
      "B) Using system prompts",
      "C) Testing too much"
    ],
    answer: 0
  },
  {
    question: "Which best practice prevents AI from “hallucinating” new facts?",
    options: [
      "A) Raising temperature",
      "B) Using RAG",
      "C) Adding emojis"
    ],
    answer: 1
  },
];

const resultMessages = [
  {
    minScore: 4,
    text: (
      <>
        <span className="font-semibold">Awesome!</span> You really know your AI systems. Ready to start building or go deeper? Connect with me below.
      </>
    ),
    celebrate: true
  },
  {
    minScore: 2,
    text: (
      <>
        <span className="font-semibold">Solid start!</span> Review the playbook tips above, then retake the quiz or reach out with questions.
      </>
    ),
    celebrate: false
  },
  {
    minScore: 0,
    text: (
      <>
        <span className="font-semibold">Everyone starts somewhere!</span> Read the cards above and try again—building with AI is a journey.
      </>
    ),
    celebrate: false
  },
];

const getResultMessage = (score: number) => {
  for (const res of resultMessages) {
    if (score >= res.minScore) {
      return res;
    }
  }
  return resultMessages[2];
};

const MiniQuizSection = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleOption = (optionIdx: number) => {
    if (showResult) return;
    const newAnswers = [...answers, optionIdx];
    setAnswers(newAnswers);
    if (step < quiz.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const score = answers.reduce(
    (acc, ans, i) => (ans === quiz[i].answer ? acc + 1 : acc),
    0
  );
  const progress = showResult ? 100 : (step / quiz.length) * 100;

  const resetQuiz = () => {
    setStep(0);
    setAnswers([]);
    setShowResult(false);
  };

  const result = getResultMessage(score);

  return (
    <section
      className="
        max-w-full
        my-12 md:my-16 px-2
        flex justify-center
      "
      id="mini-quiz"
    >
      <div
        className="
          bg-white rounded-3xl shadow-card
          w-full
          max-w-[420px] md:max-w-2xl
          p-5 md:p-10
          py-8 md:py-14
          flex flex-col items-center
          gap-4 md:gap-6
          animate-fade-in
        "
        style={{ minWidth: 0 }}
      >
        <h2
          className="text-lg xs:text-xl md:text-3xl font-bold mb-2 text-center"
          style={{ color: "#0A66C2" }}
        >
          Test Your AI Knowledge
        </h2>
        <Progress value={showResult ? 100 : progress} className="w-full mb-2 bg-accent/10" />
        {!showResult ? (
          <>
            <div className="w-full">
              <div className="mb-3 font-medium text-gray-800 text-base md:text-xl">
                {quiz[step].question}
              </div>
              <div className="flex flex-col gap-2">
                {quiz[step].options.map((opt, idx) => (
                  <Button
                    key={idx}
                    onClick={() => handleOption(idx)}
                    variant="outline"
                    className="
                      justify-start
                      bg-gray-100 hover:bg-accent/10
                      border border-accent/10
                      text-gray-900 font-medium
                      rounded-[12px]
                      flex-nowrap
                      break-normal
                      w-full
                      px-4 py-2
                      text-left
                      whitespace-normal
                      shadow-sm
                      min-h-[44px]
                      transition-colors
                      mb-0
                    "
                  >
                    <span className="block w-full break-words">{opt}</span>
                  </Button>
                ))}
              </div>
            </div>
            <div className="mt-3 text-xs text-gray-500">
              {step + 1} of {quiz.length} questions
            </div>
          </>
        ) : (
          <div className="w-full flex flex-col items-center text-center">
            {result.celebrate && (
              <CheckCircle size={48} className="text-accent mb-2 animate-fade-in" />
            )}
            <div className="text-xl font-bold my-2" style={{ color: "#0A66C2" }}>
              {score} / {quiz.length} Correct
            </div>
            <div className="mb-4 text-gray-700">{result.text}</div>
            <div className="flex gap-3 flex-wrap justify-center">
              {score < quiz.length && (
                <Button
                  onClick={resetQuiz}
                  variant="accent"
                  className="font-semibold"
                >
                  Try Again
                </Button>
              )}
              <Button asChild variant="default" className="font-semibold">
                <a href="#connect" className="flex items-center gap-2">Connect</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MiniQuizSection;
