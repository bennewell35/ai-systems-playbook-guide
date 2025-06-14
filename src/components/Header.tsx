
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

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
            <Button
              asChild
              variant="ghost"
              className="!mb-0 px-4 py-2 text-[16px] rounded-[12px] font-bold"
            >
              <a href={`#${s.id}`} className="transition-colors">{s.label}</a>
            </Button>
          </li>
        ))}
      </ul>
      <Button
        asChild
        className="md:inline-block ml-4 !mb-0 px-4 py-2 font-bold text-[16px] rounded-[12px] bg-accent text-white hover:bg-primary transition-colors shadow-sm"
        variant="accent"
      >
        <a href="#connect" className="flex items-center gap-2">Let’s Connect</a>
      </Button>
    </nav>
  </header>
);
export default Header;
