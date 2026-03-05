import { AppearOnScroll } from "../AppearOnScroll";

export const About = () => {
  const frontend = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"];
  const backend = ["SQL", "Python"];
  const modeling3D = ["Blender", "Maya", "Substance Painter", "ZBrush"];
  const gameDev = ["C#", "Unity"]

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-gradient-to-r from-[#4f47c8]/20 via-[#dbe5ff]/60 to-[#1dd5d0]/10 py-28"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute left-1/3 top-1/3 h-[320px] w-[320px] rounded-full bg-indigo-400/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 top-16 h-44 w-44 rotate-12 rounded-3xl border-2 border-[#1e3a8a]/20 bg-white/20 shadow-xl backdrop-blur-sm" />
        <div className="pointer-events-none absolute -left-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full border-2 border-dashed border-cyan-500/30" />
        <div className="pointer-events-none absolute -left-8 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full border border-[#1e3a8a]/30" />

        <div className="pointer-events-none absolute bottom-16 right-12 grid grid-cols-4 gap-2 opacity-70">
          {Array.from({ length: 12 }).map((_, idx) => (
            <span key={idx} className="h-2 w-2 rounded-full bg-[#1e3a8a]/40" />
          ))}
        </div>
      </div>

      <AppearOnScroll>
        <div className="mx-auto max-w-6xl px-6">

          {/* Section Header */}
          <div className="mb-24 text-center">
            <h2 className="text-4xl font-bold text-[#1e3a8a] md:text-5xl">
              About Me
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded bg-gradient-to-r from-cyan-500 to-blue-600" />

            <p className="mx-auto mt-6 max-w-2xl text-slate-700">
              Developer, designer, and creative technologist passionate about
              building meaningful digital experiences across web, games, and
              immersive media.
            </p>
          </div>

          {/* Skills */}
          <div className="mb-24 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { title: "Frontend", skills: frontend },
              { title: "Backend", skills: backend },
              { title: "3D Modeling", skills: modeling3D },
              {title: "Game Dev", skills: gameDev}
            ].map(({ title, skills }) => (
              <div
                key={title}
                className="group relative rounded-2xl border border-white/40 bg-white/40 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
              >
                <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-cyan-500 to-blue-600 opacity-70" />

                <h3 className="mb-5 text-xl font-semibold text-[#1e3a8a]">
                  {title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#1e3a8a]/20 bg-cyan-500/10 px-4 py-1 text-xs text-[#1e3a8a] transition hover:bg-cyan-500/20 hover:shadow-[0_0_12px_rgba(0,255,255,0.25)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education & Experience */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

            {/* Education */}
            <div className="relative rounded-2xl border border-white/40 bg-white/40 p-8 shadow-xl backdrop-blur-md transition-all hover:-translate-y-2">
              <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-cyan-500 to-blue-600 opacity-70" />

              <h3 className="mb-6 text-xl font-bold text-[#1e3a8a]">
                🎓 Education
              </h3>

              <ul className="space-y-6 text-sm text-slate-700">
                <li>
                  <strong>Masters in Creative Technologies</strong> — Virginia Tech (2023 – 2025)

                  <p className="mt-2 text-slate-600">
                    Creative Coding, Object Oriented Programming with Java,
                    Software Engineering, Web Applications Development,
                    Mobile Applications Development, Virtual Reality Design,
                    Virtual Environments, 3D Modeling & Animation
                  </p>
                </li>

                <li>
                  <strong>B.S. in Engineering</strong> — University of Ghana (2017 – 2021)

                  <p className="mt-2 text-slate-600">
                    Algebra, Calculus I, Calculus II, Differential Equations,
                    Basic Electronics, Numerical Methods, Statistics.
                  </p>
                </li>
              </ul>
            </div>

            {/* Experience */}
            <div className="relative rounded-2xl border border-white/40 bg-white/40 p-8 shadow-xl backdrop-blur-md transition-all hover:-translate-y-2">
              <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-cyan-500 to-blue-600 opacity-70" />

              <h3 className="mb-6 text-xl font-bold text-[#1e3a8a]">
                💼 Experience
              </h3>

              <div className="space-y-8 text-sm text-slate-700">

                <div>
                  <h4 className="font-semibold">
                    Software Engineer Intern — Open Learning Exchange
                  </h4>

                  <p className="text-xs text-slate-600">
                    Aug 2025 – Jan 2026
                  </p>

                  <p className="mt-2">
                    Improved frontend functionality and implemented new UI
                    features for the Planet web application, including
                    certification upload and download workflows.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Frontend Engineer Intern — ABE Scot Enterprises
                  </h4>

                  <p className="text-xs text-slate-600">
                    May 2025 – Aug 2025
                  </p>

                  <p className="mt-2">
                    Built and refined frontend components for a ride-hailing
                    application using React Native, focusing on usability
                    and layout consistency.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </AppearOnScroll>
    </section>
  );
};