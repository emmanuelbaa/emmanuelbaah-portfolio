import { useEffect, useState } from "react";

export const Navbar = ({ navOpen, setNavOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [navOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkClasses =
    "relative text-white/90 transition-colors duration-300 hover:text-cyan-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav
      className={`fixed top-0 z-50 w-full backdrop-blur-xl transition-all duration-300
        ${
          scrolled
            ? "bg-black/70 border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }
      `}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#home"
            className="font-mono text-xl z-50 font-bold tracking-wide text-white group"
          >
            <span className="text-cyan-400 group-hover:text-cyan-300 transition">
              ibaah
            </span>
            2745
          </a>

          <button
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-md text-white md:hidden
                       transition hover:bg-white/10"
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle navigation"
          >
            <span className="text-2xl">{navOpen ? "✕" : "☰"}</span>
          </button>

          <div className="hidden md:flex items-center space-x-10">
            <a href="#home" className={navLinkClasses}>
              Home
            </a>
            <a href="#about" className={navLinkClasses}>
              About
            </a>
            <a href="#projects" className={navLinkClasses}>
              Projects
            </a>
            <a href="#contact" className={navLinkClasses}>
              Contact
            </a>
          </div>
        </div>
      </div>

      {navOpen && (
        <div className="md:hidden fixed inset-0 z-10 bg-black/1 backdrop-blur-xl">
          <div className="flex h-full flex-col items-center justify-center space-y-8 text-lg mt-90">
            {["home", "about", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setNavOpen(false)}
                className="text-white text-2xl font-medium transition hover:text-cyan-400"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
