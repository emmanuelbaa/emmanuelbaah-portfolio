import { AppearOnScroll } from "../AppearOnScroll";
import baahImg from "../../assets/baah.jpg";
import { Box } from "lucide-react";

export const Home = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20
      bg-gradient-to-br from-[#eef2ff] via-[#dbe5ff] to-[#c7f9ff]"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        
        {/* gradient glows */}
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-[120px]" />
        <div className="absolute top-20 left-20 h-[320px] w-[320px] rounded-full bg-indigo-400/20 blur-[100px]" />
        <div className="absolute bottom-20 right-20 h-[350px] w-[350px] rounded-full bg-blue-300/20 blur-[100px]" />

        {/* subtle tech grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <AppearOnScroll>
        <div className="z-10 mx-auto w-full max-w-6xl py-16">
          <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
            
            {/* TEXT SIDE */}
            <div className="text-center md:text-left">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-[#1e3a8a] md:text-5xl">
                Creative Technologist & Software Developer
              </h1>

              <p className="mx-auto mb-8 max-w-xl text-lg text-slate-700 md:mx-0">
                Hi, I'm Emmanuel Baah, a developer who has a passion to build
                impactful software solutions using innovative ideas to solve
                real-world problems and create meaningful digital experiences.
              </p>

              <div className="flex flex-col items-center gap-4 sm:flex-row md:items-start">
                <a
                  href="#projects"
                  className="group relative overflow-hidden rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 font-medium text-white transition-all duration-300
                  hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,255,255,0.6)]"
                >
                  <span className="relative z-10">View Projects</span>
                  <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-300 group-hover:translate-x-0" />
                </a>

                <a
                  href="#contact"
                  className="rounded-md border border-[#1e3a8a]/40 bg-white/40 px-8 py-3 font-medium text-[#1e3a8a]
                  backdrop-blur-md transition-all duration-300 hover:-translate-y-1
                  hover:bg-cyan-500/10 hover:shadow-lg"
                >
                  Contact Me
                </a>
              </div>
            </div>

            {/* IMAGE SIDE */}
            <div className="relative mx-auto mt-6 w-fit md:mt-0 md:ml-auto">

              {/* cube */}
              <span className="absolute -top-8 -right-4 z-20 text-[#1e3a8a]">
                <Box size={28} strokeWidth={2} />
              </span>

              {/* zigzag */}
              <div className="absolute -left-8 -top-2 z-20">
                <svg
                  viewBox="0 0 24 80"
                  fill="none"
                  className="h-20 w-7 text-[#1e3a8a] sm:h-24 sm:w-8"
                >
                  <polyline
                    points="12,2 4,14 20,26 4,38 20,50 4,62 12,74"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* red cross */}
              <div className="absolute left-24 -top-8 z-20 h-6 w-6">
                <span className="absolute left-1/2 top-0 h-6 w-[3px] -translate-x-1/2 bg-red-500" />
                <span className="absolute left-0 top-1/2 h-[3px] w-6 -translate-y-1/2 bg-red-500" />
              </div>

              {/* circle */}
              <div className="absolute -bottom-7 -left-5 z-20 h-6 w-6 rounded-full border-2 border-[#1e3a8a]" />

              {/* dots */}
              <div className="absolute -right-4 -bottom-4 grid grid-cols-3 gap-x-6 gap-y-4 z-20">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-2 w-2 rounded-full bg-red-500" />
                <span className="h-2 w-2 rounded-full bg-red-500" />
                <span className="h-2 w-2 rounded-full bg-red-500" />
                <span className="h-2 w-2 rounded-full bg-red-500" />
                <span className="h-2 w-2 rounded-full bg-red-500" />
                <span className="h-2 w-2 rounded-full bg-red-500" />
                <span className="h-2 w-2 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-red-500" />
              </div>

              {/* image card */}
              <div
                className="overflow-hidden rounded-2xl border border-white/40 bg-white/50 p-3
                shadow-[0_20px_60px_rgba(0,0,0,0.15)] backdrop-blur-xl"
              >
                <img
                  src={baahImg}
                  alt="Emmanuel Baah"
                  className="h-auto w-64 rounded-xl object-cover sm:w-72 md:w-80"
                />
              </div>
            </div>

          </div>
        </div>
      </AppearOnScroll>
    </section>
  );
};