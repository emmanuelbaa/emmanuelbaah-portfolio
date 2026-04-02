import { AppearOnScroll } from "../AppearOnScroll";
import baahImg from "../../assets/baah.jpg";
import { Box, ArrowRight, Mail } from "lucide-react";

export const Home = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20
      bg-gradient-to-br from-slate-950 via-slate-950/80 to-[#020617]"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Animated Gradient Glows */}
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/30 blur-[140px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] translate-x-1/2 rounded-full bg-indigo-500/30 blur-[140px] animate-pulse" />

        {/* Tech Grid with Fade Mask */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse at center, black, transparent 80%)",
          }}
        />
      </div>

      <AppearOnScroll>
        <div className="z-10 mx-auto w-full max-w-6xl py-16">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            
            {/* TEXT SIDE */}
            <div className="text-center md:text-left">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-400/50 bg-indigo-500/10 px-4 py-1.5 text-sm font-semibold text-cyan-200 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Available for New Projects
              </div>

              <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white md:text-7xl">
                Software <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Developer</span>
              </h1>
              {/* <h2>& Software Developer</h2> */}

              <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-slate-300 md:mx-0">
                Hi, I'm <span className="font-semibold text-white">Emmanuel Baah</span>.
                I bridge the gap between complex engineering and intuitive design to create
                impactful digital experiences.
              </p>

              <div className="flex flex-col items-center gap-5 sm:flex-row md:items-start">
                <a
                  href="#projects"
                  className="group flex items-center gap-2 rounded-full bg-cyan-500 px-8 py-4 font-bold text-slate-900 transition-all hover:bg-cyan-400 hover:shadow-[0_20px_45px_-20px_rgba(16,185,129,0.7)] hover:-translate-y-1 active:scale-95"
                >
                  View My Work
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#contact"
                  className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-bold text-slate-200 backdrop-blur-md transition-all hover:border-cyan-400 hover:text-white hover:-translate-y-1"
                >
                  <Mail size={18} />
                  Contact
                </a>
              </div>
            </div>

            {/* IMAGE SIDE */}
            <div className="relative mx-auto w-fit lg:ml-auto animate-float">
              
              {/* Decorative Floating Elements (Enhanced) */}
              <div className="absolute -right-8 -top-8 z-20 text-indigo-500 animate-bounce delay-700">
                <Box size={40} strokeWidth={1.5} />
              </div>

              <div className="absolute -left-12 top-1/4 z-20 hidden md:block opacity-40">
                 <div className="h-24 w-24 rounded-full border-[12px] border-cyan-400/20" />
              </div>

              {/* Main Image Container */}
              <div className="relative z-10 overflow-hidden rounded-3xl border-8 border-slate-800 bg-slate-900/70 shadow-[0_40px_80px_-30px_rgba(15,23,42,0.8)] transition-transform duration-500 hover:scale-[1.02]">
                <img
                  src={baahImg}
                  alt="Emmanuel Baah"
                  className="h-auto w-72 grayscale-[20%] transition-all duration-500 hover:grayscale-0 sm:w-80 md:w-96"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
              </div>

              {/* Red Dot Grid (Refined) */}
              <div className="absolute -right-6 -bottom-6 z-0 grid grid-cols-3 gap-3 opacity-50">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="h-2 w-2 rounded-full bg-red-400" />
                ))}
              </div>
            </div>

          </div>
        </div>
      </AppearOnScroll>
    </section>
  );
};
