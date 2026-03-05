import { Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/30 bg-white/30 backdrop-blur-md">

      {/* Background Design Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-0 h-[220px] w-[220px] rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-[180px] w-[180px] rounded-full bg-indigo-400/20 blur-3xl" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 py-8 text-center md:flex-row md:text-left">

        {/* Copyright */}
        <p className="text-sm font-medium text-[#1e3a8a]">
          © {new Date().getFullYear()} <span className="font-semibold">Emmanuel Baah</span>. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-6">

          <a
            href="https://github.com/emmanuelbaa"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-sm font-medium text-[#1e3a8a] transition hover:text-cyan-700"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1e3a8a]/20 bg-white/50 transition group-hover:bg-cyan-500/10 group-hover:shadow-[0_0_10px_rgba(0,255,255,0.35)]">
              <Github size={16} />
            </div>
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/emmanuel-baah-1095bb320"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-sm font-medium text-[#1e3a8a] transition hover:text-cyan-700"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1e3a8a]/20 bg-white/50 transition group-hover:bg-cyan-500/10 group-hover:shadow-[0_0_10px_rgba(0,255,255,0.35)]">
              <Linkedin size={16} />
            </div>
            LinkedIn
          </a>

        </div>

      </div>
    </footer>
  );
};