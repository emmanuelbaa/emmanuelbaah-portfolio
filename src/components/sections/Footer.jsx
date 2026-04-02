import { Github, Linkedin, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/emmanuelbaa",
      icon: <Github size={18} />,
      color: "hover:text-white hover:bg-slate-800",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/emmanuel-baah-1095bb320",
      icon: <Linkedin size={18} />,
      color: "hover:text-white hover:bg-slate-800",
    },
  ];

  return (
    <footer className="relative border-t border-slate-800 bg-slate-950 py-12 overflow-hidden text-slate-100">
      {/* Subtle Background Glows */}
      <div className="absolute inset-0 -z-10 opacity-60">
        <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -right-24 top-0 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          
          {/* Brand & Copyright */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span className="font-mono text-lg font-black tracking-tighter text-white">
                ibaah<span className="text-cyan-400">2745</span>
              </span>
            </div>
            <p className="text-sm font-medium text-slate-400">
              © {currentYear} Emmanuel Baah. 
              <span className="hidden md:inline mx-2 text-slate-300">|</span>
              <br className="md:hidden" />
              Crafting digital experiences from Blacksburg, VA.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900/40 text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-transparent ${link.color}`}
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Tech Status Tag */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex items-center gap-2 rounded-full bg-slate-800 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Available for projects
            </div>
            <p className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
              Built with <Heart size={10} className="text-pink-500 fill-pink-500" /> & React
            </p>
          </div>

        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-12 h-1 w-full rounded-full bg-gradient-to-r from-transparent via-slate-700/60 to-transparent" />
      </div>
    </footer>
  );
};
