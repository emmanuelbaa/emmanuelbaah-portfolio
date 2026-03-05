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
      flex flex-col items-center justify-center
      transition-all duration-300 ease-in-out
      bg-gradient-to-br from-[#042a32] via-[#053f4a] to-[#02171c]
      backdrop-blur-xl
      ${navOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >

      {/* Background Visual Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* glowing orbs */}
        <div className="absolute top-1/3 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/25 blur-[120px]" />
        <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-[110px]" />
        <div className="absolute top-10 left-10 h-56 w-56 rounded-full bg-blue-400/20 blur-[100px]" />

        {/* subtle tech grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* Close Button */}
      <button
        onClick={() => setNavOpen(false)}
        aria-label="Close navigation"
        className="absolute top-6 right-6 text-white text-3xl font-bold
        h-11 w-11 flex items-center justify-center
        rounded-lg border border-white/20
        bg-white/10 backdrop-blur-md
        transition-all duration-200
        hover:bg-white/20 hover:scale-110"
      >
        &times;
      </button>

      {/* Navigation Links */}
      <div className="flex flex-col items-center space-y-6">
        {links.map((link, index) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setNavOpen(false)}
            className={`text-3xl font-semibold tracking-wide text-white
            transition-all duration-300 transform
            hover:text-cyan-400 hover:scale-110
            ${!navOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ transitionDelay: `${index * 70}ms` }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};