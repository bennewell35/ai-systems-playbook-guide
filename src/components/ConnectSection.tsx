
import { Linkedin } from "lucide-react";

const ConnectSection = () => (
  <section id="connect" className="max-w-3xl mx-auto py-20 md:py-24 px-4">
    <div className="bg-accent rounded-3xl shadow-card text-white flex flex-col md:flex-row items-center gap-10 md:gap-14 p-8 md:p-12 animate-fade-in">
      <div className="flex-1 flex flex-col justify-center items-start mb-8 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Want to go deeper or build smarter?</h2>
        <p className="mb-7 text-lg md:text-xl font-medium">
          Reach out on LinkedIn or email me: <span className="underline text-white hover:text-gray-100">newelljben@gmail.com</span>
        </p>
        <div className="flex gap-4">
          <a
            href="mailto:newelljben@gmail.com"
            className="inline-flex items-center gap-2 bg-white text-accent font-semibold rounded-full px-6 py-3 shadow hover:bg-gray-100 transition-colors text-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" className="mr-1"><path fill="currentColor" d="M2.25 6.5A2.25 2.25 0 0 1 4.5 4.25h15A2.25 2.25 0 0 1 21.75 6.5v11a2.25 2.25 0 0 1-2.25 2.25h-15A2.25 2.25 0 0 1 2.25 17.5v-11Zm1.5.342V17.5a.75.75 0 0 0 .75.75h15a.75.75 0 0 0 .75-.75V6.842l-7.644 6.574a1.75 1.75 0 0 1-2.112 0L3.75 6.842ZM4.34 5.75l7.667 6.6a.25.25 0 0 0 .313 0l7.666-6.6a.75.75 0 0 0-.486-.25h-15a.75.75 0 0 0-.486.25Z"></path></svg>
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/newelljben/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold rounded-full px-6 py-3 shadow hover:bg-primary/90 transition-colors text-lg"
          >
            <Linkedin size={22} className="mr-2" /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ConnectSection;
