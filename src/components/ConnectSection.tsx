
import { Linkedin } from "lucide-react";
const ConnectSection = () => (
  <section id="connect" className="max-w-3xl mx-auto py-20 md:py-24 px-4">
    <div className="bg-accent rounded-3xl shadow-card text-white flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 md:p-12 animate-fade-in">
      <div className="flex-1 mb-4 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-1">Let’s Connect</h2>
        <p className="mb-4 text-lg md:text-xl font-medium">
          Want to go deeper or build something together?
        </p>
        <a
          href="https://www.linkedin.com/in/jonathan-benjamin-newell-5b450432/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary rounded-full px-7 py-3 font-semibold transition-colors text-white hover:bg-primary/90 text-base md:text-lg shadow-lg shadow-primary/20"
        >
          <Linkedin size={25} /> Follow on LinkedIn
        </a>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="bg-white text-accent rounded-2xl px-7 py-6 md:px-10 md:py-8 shadow-lg flex flex-col items-center w-full">
          <div className="font-semibold text-xl mb-2 text-accent">Optional: Get Updates</div>
          <form className="flex flex-col gap-3 w-full" action="https://imprv.us21.list-manage.com/subscribe/post?u=1b6810b744e297cfcc0e3a35b&amp;id=d69500668a" method="POST" target="_blank">
            <input
              type="email"
              name="EMAIL"
              required
              placeholder="Your email"
              className="rounded-lg px-4 py-2 border border-accent/40 focus:outline-none text-gray-900 text-base shadow-sm"
            />
            <button type="submit" className="bg-accent rounded-full text-white font-semibold px-5 py-2 mt-1 hover:bg-accent/90 transition text-base">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);
export default ConnectSection;
