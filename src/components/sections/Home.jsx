import { AppearOnScroll } from "../AppearOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-black via-slate-950 to-black"
    >

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute left-1/3 top-1/3 h-[420px] w-[420px] rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <AppearOnScroll>
        <div className="z-10 px-6 text-center max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-widest text-cyan-400/80">
            Creative Technologist & Software Developer
          </p>
          <h1 className="mb-6 text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
            Hi, I’m Emmanuel Baah
          </h1>

          <p className="mx-auto mb-12 max-w-2xl text-lg md:text-2xl text-cyan-300/90 leading-relaxed">
            I design and build modern web experiences that blend clean code,
            thoughtful design, and engaging user interactions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="#projects"
              className="group relative overflow-hidden rounded-md bg-cyan-500 px-10 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-600 hover:shadow-[0_0_25px_rgba(0,255,255,0.55)]"
            >
              <span className="relative z-10">View Projects</span>
              <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-300 group-hover:translate-x-0" />
            </a>

            <a
              href="#contact"
              className="rounded-md px-10 py-3 font-medium text-white ring-2 ring-cyan-400/80 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500/15 hover:shadow-[0_0_20px_rgba(0,255,255,0.45)]"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-20 flex justify-center">
            <div className="h-10 w-6 rounded-full border-2 border-cyan-400/60 flex items-start justify-center">
              <span className="mt-2 h-2 w-1 rounded-full bg-cyan-400 animate-bounce" />
            </div>
          </div>
        </div>
      </AppearOnScroll>
    </section>
  );
};
