
import { MessageCircleHeart } from "lucide-react";

const MotivationalCard = () => (
  <section id="motivation" className="max-w-xl mx-auto my-10 px-4 animate-fade-in">
    <div className="rounded-3xl bg-gradient-to-br from-accent to-blue-600 text-white shadow-card flex gap-4 items-center p-8">
      <MessageCircleHeart size={44} className="text-white drop-shadow-lg" />
      <div>
        <h2 className="text-xl font-extrabold mb-1">Keep Shipping—You Got This!</h2>
        <p>
          Even elite builders start simple. <span className="font-semibold">Launch, learn, and improve</span> with every iteration.<br />
          Each AI agent you ship is another step toward mastery.
        </p>
      </div>
    </div>
  </section>
);

export default MotivationalCard;
