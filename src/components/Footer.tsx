
import { Linkedin } from "lucide-react";
const Footer = () => (
  <footer className="border-t border-blue-100 py-8 bg-white text-center text-gray-500 mt-20">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 px-4">
      <div>
        © 2025 Jonathan Newell | Built on <a href="https://lovable.dev" className="underline font-semibold hover:text-primary">Lovable</a> + OpenAI
      </div>
      <div className="flex items-center gap-4 mt-3 md:mt-0">
        <a href="https://www.linkedin.com/in/newelljben/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <Linkedin size={19} className="text-primary hover:text-accent transition" />
        </a>
        <a href="https://github.com/bennewell35" target="_blank" title="GitHub" className="hover:text-accent transition">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" className="inline" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 2C6.477 2 2 6.613 2 12.237c0 4.482 2.865 8.28 6.839 9.629.5.094.683-.22.683-.485 0-.238-.009-.868-.013-1.703-2.782.615-3.37-1.36-3.37-1.36-.454-1.178-1.109-1.493-1.109-1.493-.907-.634.069-.621.069-.621 1.004.073 1.532 1.047 1.532 1.047.892 1.561 2.341 1.111 2.91.849.091-.655.35-1.111.636-1.367-2.221-.263-4.555-1.144-4.555-5.093 0-1.125.377-2.044 1-2.762-.101-.263-.434-1.32.093-2.753 0 0 .82-.27 2.687 1.053A9.21 9.21 0 0 1 12 7.461a9.21 9.21 0 0 1 2.452.34c1.868-1.322 2.687-1.053 2.687-1.053.527 1.433.194 2.49.094 2.753.623.718 1 1.637 1 2.762 0 3.958-2.337 4.827-4.566 5.086.36.32.679.951.679 1.917 0 1.383-.012 2.496-.012 2.836 0 .268.18.582.688.484C19.137 20.515 22 16.719 22 12.237 22 6.613 17.523 2 12 2Z"/></svg>
        </a>
        <a href="mailto:newelljben@gmail.com" title="Email" className="hover:text-accent transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M2.25 6.5A2.25 2.25 0 0 1 4.5 4.25h15A2.25 2.25 0 0 1 21.75 6.5v11a2.25 2.25 0 0 1-2.25 2.25h-15A2.25 2.25 0 0 1 2.25 17.5v-11Zm1.5.342V17.5a.75.75 0 0 0 .75.75h15a.75.75 0 0 0 .75-.75V6.842l-7.644 6.574a1.75 1.75 0 0 1-2.112 0L3.75 6.842ZM4.34 5.75l7.667 6.6a.25.25 0 0 0 .313 0l7.666-6.6a.75.75 0 0 0-.486-.25h-15a.75.75 0 0 0-.486.25Z"></path></svg>
        </a>
      </div>
    </div>
  </footer>
);
export default Footer;
