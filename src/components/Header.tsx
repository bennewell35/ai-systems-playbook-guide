
import { Rocket } from "lucide-react";
const sections = [
  { id: "guide", label: "Guide" },
  { id: "pro-tips", label: "Pro Tips" },
  { id: "connect", label: "Connect" },
];
const Header = () => (
  <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-200">
    <nav className="max-w-5xl mx-auto flex items-center justify-between py-2 px-4 md:px-0">
      <a href="/" className="flex items-center font-bold text-primary text-xl tracking-tight gap-2">
        <Rocket size={28} className="text-primary" />
        <span>AI Systems Playbook</span>
      </a>
      <ul className="hidden md:flex items-center gap-4 text-sm font-medium">
        {sections.map(s => (
          <li key={s.id}>
            <a href={`#${s.id}`} className="transition-colors hover:text-accent">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#connect"
        className="md:inline-block ml-4 rounded-full px-4 py-2 bg-accent text-white font-semibold hover:bg-primary transition-colors shadow-sm"
      >
        Let’s Connect
      </a>
    </nav>
  </header>
);
export default Header;
