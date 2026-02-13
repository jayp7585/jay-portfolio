import { useState, useEffect } from "react";
import { Home, User, Briefcase, Code, Mail, Cpu } from "lucide-react";

import { header } from "../portfolio";

const { links } = header;

const iconMap = {
  Home: Home,
  About: User,
  Skills: Cpu,
  Experience: Briefcase,
  Projects: Code,
  Contact: Mail,
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center"
    >
      <div
        className={`
          flex items-center gap-2 px-4 py-3 rounded-2xl border transition-all duration-300
          ${scrolled
            ? "bg-white/10 backdrop-blur-xl border-white/10 shadow-2xl scale-100"
            : "bg-white/5 backdrop-blur-lg border-white/5 scale-105"
          }
        `}
      >
        {links.map((link) => {
          const Icon = iconMap[link.name] || Home;

          return (
            <a
              key={link.name}
              href={link.link}
              className="relative group p-3 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-125 hover:-translate-y-2"
              aria-label={link.name}
            >
              <Icon className="w-6 h-6 text-white/80 group-hover:text-white transition-colors" />

              {/* Tooltip */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                {link.name}
              </span>
            </a>
          );
        })}
      </div>
    </header>
  );
}
