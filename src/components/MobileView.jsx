import { useEffect } from "react";
import { X, Home, User, Code2, Mail, Sparkles } from "lucide-react";

export const MobileView = ({ navOpen, setNavOpen }) => {
  // Automatically close if user expands window to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setNavOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setNavOpen]);

  const links = [
    { label: "Home", href: "#home", icon: <Home size={24} /> },
    { label: "About", href: "#about", icon: <User size={24} /> },
    { label: "Projects", href: "#projects", icon: <Code2 size={24} /> },
    { label: "Contact", href: "#contact", icon: <Mail size={24} /> },
  ];

  return (
    <div
      className={`fixed inset-0 z-[150] flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${
        navOpen 
          ? "pointer-events-auto opacity-100" 
          : "pointer-events-none opacity-0"
      }`}
    >
      {/* Immersive Background */}
      <div className="absolute inset-0 -z-10 bg-[#020617]">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-[-10%] left-[-10%] h-[50%] w-[70%] rounded-full bg-cyan-500/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[50%] w-[70%] rounded-full bg-indigo-500/20 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Glassmorphism Overlay */}
        <div className="absolute inset-0 backdrop-blur-3xl bg-slate-900/60" />
        
        {/* Subtle Tech Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Close Button */}
      <button
        onClick={() => setNavOpen(false)}
        className="absolute top-8 right-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white backdrop-blur-md transition-all active:scale-90"
        aria-label="Close Menu"
      >
        <X size={28} />
      </button>

      {/* Navigation Links */}
      <nav className="flex flex-col items-center space-y-10">
        {links.map((link, index) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setNavOpen(false)}
            style={{ 
              transitionDelay: navOpen ? `${index * 100 + 200}ms` : "0ms",
            }}
            className={`group flex items-center gap-4 text-4xl font-black tracking-tighter text-white transition-all duration-500 ${
              navOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <span className="text-cyan-500 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-120">
              {link.icon}
            </span>
            <span className="relative">
              {link.label}
              <span className="absolute -bottom-2 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full" />
            </span>
          </a>
        ))}

        {/* Brand Footer in Menu */}
        <div 
          className={`mt-12 flex items-center gap-2 text-slate-500 transition-all duration-700 delay-700 ${
            navOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <Sparkles size={14} className="text-cyan-500" />
          <span className="text-xs font-mono uppercase tracking-[0.3em]">Creative Tech</span>
        </div>
      </nav>
    </div>
  );
};