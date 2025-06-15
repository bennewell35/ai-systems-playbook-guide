
import { MessageCircleHeart } from "lucide-react";

// Responsive card, better fit and wraps for all text.
const MotivationalCard = () => (
  <section id="motivation" className="max-w-xl mx-auto my-10 px-4 animate-fade-in">
    <div className="rounded-3xl bg-gradient-to-br from-accent to-blue-600 text-white shadow-card flex gap-4 items-center p-6 md:p-8 min-h-[120px]">
      <MessageCircleHeart size={44} className="text-white drop-shadow-lg flex-shrink-0" />
      <div className="min-w-0">
        <h2 className="text-lg md:text-xl font-extrabold mb-1 leading-tight">
          Keep Shipping—You Got This!
        </h2>
        <p className="leading-snug text-sm md:text-base break-words">
          Even elite builders start simple.{" "}
          <span className="font-semibold">Launch, learn, and improve</span> with every iteration.<br />
          Each AI agent you ship is another step toward mastery.
        </p>
      </div>
    </div>
  </section>
);

export default MotivationalCard;
