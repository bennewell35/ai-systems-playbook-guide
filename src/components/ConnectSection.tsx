
import { Linkedin } from "lucide-react";
const ConnectSection = () => (
  <section id="connect" className="max-w-3xl mx-auto py-16 px-4">
    <div className="bg-accent rounded-2xl shadow-card text-white flex flex-col md:flex-row items-center gap-7 p-8 animate-fade-in">
      <div className="flex-1 mb-4 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-1">Let’s Connect</h2>
        <p className="mb-3 text-lg font-medium">
          Want to go deeper or build something together?
        </p>
        <a
          href="https://www.linkedin.com/in/jonathan-newell/"
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary rounded-full px-6 py-3 font-semibold transition-colors text-white hover:bg-primary/90 text-base md:text-lg shadow"
        >
          <Linkedin size={22} /> Follow on LinkedIn
        </a>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="bg-white text-accent rounded-xl px-6 py-4">
          <div className="font-bold text-lg mb-1">Optional: Get Updates</div>
          <form className="flex flex-col gap-2" action="https://imprv.us21.list-manage.com/subscribe/post?u=1b6810b744e297cfcc0e3a35b&amp;id=d69500668a" method="POST" target="_blank">
            <input
              type="email"
              name="EMAIL"
              required
              placeholder="Your email"
              className="rounded px-3 py-2 border border-accent/40 focus:outline-none text-gray-900"
            />
            <button type="submit" className="bg-accent rounded-full text-white font-semibold px-4 py-2 mt-1 hover:bg-accent/90 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);
export default ConnectSection;
