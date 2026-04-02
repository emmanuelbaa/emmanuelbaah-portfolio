import { useEffect, useState } from "react";
import { Download, Settings, Menu, X } from "lucide-react";
import resumePdf from "../assets/resume.pdf";

export const Navbar = ({ navOpen, setNavOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    document.body.style.overflow = navOpen ? "hidden" : "auto";
  }, [navOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClasses = `
    relative text-sm font-semibold transition-all duration-300 
    hover:text-cyan-300 flex items-center gap-1.5
    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
    after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full
    ${scrolled ? "text-white/90" : "text-white/70"}
  `;

  return (
    <nav
      className={`fixed top-0 z-[100] w-full transition-all duration-500 ${
        scrolled 
          ? "bg-slate-900/90 border-b border-slate-800/70 py-3 shadow-xl backdrop-blur-xl" 
          : "bg-slate-950/40 border-b border-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
          href="#home"
          className="group z-[110] flex items-center font-mono text-xl font-bold tracking-tighter text-white"
        >
          <span className="text-cyan-400 transition-transform group-hover:-rotate-12">
            ibaah
          </span>
          <span className="text-slate-400 group-hover:text-white transition-colors">2745</span>
        </a>

          {/* Mobile Toggle */}
          <button
          className="relative z-[110] flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/80 text-white transition shadow-md md:hidden"
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle navigation"
        >
          {navOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
          </button>

          {/* Desktop Nav */}
          <div className="hidden items-center space-x-8 md:flex">
            <a href="#home" className={navLinkClasses}>Home</a>
            <a href="#about" className={navLinkClasses}>About</a>
            <a href="#projects" className={navLinkClasses}>
              <Settings size={16} className="text-pink-500" />
              Projects
            </a>
            <a href="#contact" className={navLinkClasses}>Contact</a>

            {/* Resume Button */}
            <a
              href={resumePdf}
              download
              className="group flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-2.5 text-sm font-bold text-slate-950 transition-all hover:bg-cyan-400 hover:text-slate-900 hover:shadow-lg hover:shadow-cyan-500/30 active:scale-95"
            >
              <Download size={14} className="group-hover:animate-bounce" />
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[105] flex transform flex-col items-center justify-center bg-slate-900/95 backdrop-blur-2xl transition-all duration-500 md:hidden ${
          navOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-8">
          {["home", "about", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setNavOpen(false)}
              className="text-3xl font-bold text-white transition-colors hover:text-cyan-300"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          
          <a
            href={resumePdf}
            download
            className="mt-4 flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-4 text-lg font-bold text-white shadow-xl"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
};
