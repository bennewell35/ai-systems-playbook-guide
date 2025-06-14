
import { Linkedin } from "lucide-react";
const Footer = () => (
  <footer className="border-t py-8 bg-white text-center text-gray-500 mt-20">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 px-4">
      <div>
        © 2025 Jonathan Newell | Built on <a href="https://lovable.dev" className="underline font-semibold hover:text-primary">Lovable</a> with OpenAI
      </div>
      <div className="flex items-center gap-5 mt-2 md:mt-0">
        <a href="https://www.linkedin.com/in/jonathan-benjamin-newell-5b450432/" target="_blank" rel="noopener noreferrer">
          <Linkedin size={22} className="text-primary hover:text-accent transition" />
        </a>
        <a href="mailto:hello@imprv.health" className="hover:text-accent transition">Contact</a>
        <a href="https://github.com/jonathanjnewell/" target="_blank" className="hover:text-accent transition">GitHub</a>
      </div>
    </div>
  </footer>
)
export default Footer;
