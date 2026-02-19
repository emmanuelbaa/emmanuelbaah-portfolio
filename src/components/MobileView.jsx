import { useEffect } from "react";

export const MobileView = ({ navOpen, setNavOpen }) => {
  // Close mobile nav when switching to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setNavOpen]);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div
      className={`fixed inset-0 z-40 md:hidden
      bg-[rgba(5,63,74,0.9)] backdrop-blur-xl
      flex flex-col items-center justify-center
      transition-all duration-300 ease-in-out
      ${navOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>


      <button
        onClick={() => setNavOpen(false)}
        aria-label="Close navigation"
        className="absolute top-6 right-6 text-white text-3xl font-bold
                   rounded-md px-3 py-1 transition
                   hover:bg-white/10 focus:outline-none"
      >
        &times;
      </button>

      {links.map((link, index) => (
        <a
          key={link.label}
          href={link.href}
          onClick={() => setNavOpen(false)}
          className={`text-2xl font-semibold text-white my-4
          transform transition-all duration-300
          hover:scale-110 hover:text-cyan-400
          ${!navOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{ transitionDelay: `${index * 70}ms` }}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};
