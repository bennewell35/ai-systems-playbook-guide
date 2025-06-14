
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
          <a
            href="https://github.com/bennewell35"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 text-white font-semibold rounded-full px-6 py-3 shadow hover:bg-gray-800 transition-colors text-lg"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="mr-2" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 2C6.477 2 2 6.613 2 12.237c0 4.482 2.865 8.28 6.839 9.629.5.094.683-.22.683-.485 0-.238-.009-.868-.013-1.703-2.782.615-3.37-1.36-3.37-1.36-.454-1.178-1.109-1.493-1.109-1.493-.907-.634.069-.621.069-.621 1.004.073 1.532 1.047 1.532 1.047.892 1.561 2.341 1.111 2.91.849.091-.655.35-1.111.636-1.367-2.221-.263-4.555-1.144-4.555-5.093 0-1.125.377-2.044 1-2.762-.101-.263-.434-1.32.093-2.753 0 0 .82-.27 2.687 1.053A9.21 9.21 0 0 1 12 7.461a9.21 9.21 0 0 1 2.452.34c1.868-1.322 2.687-1.053 2.687-1.053.527 1.433.194 2.49.094 2.753.623.718 1 1.637 1 2.762 0 3.958-2.337 4.827-4.566 5.086.36.32.679.951.679 1.917 0 1.383-.012 2.496-.012 2.836 0 .268.18.582.688.484C19.137 20.515 22 16.719 22 12.237 22 6.613 17.523 2 12 2Z"/></svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ConnectSection;
