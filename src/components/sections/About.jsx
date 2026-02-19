import { AppearOnScroll } from "../AppearOnScroll";

export const About = () => {
  const frontend = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"];
  const backend = ["SQL", "Python"];
  const modeling3D = ["Blender", "Maya", "Substance Painter", "ZBrush"];

  return (
    <section
      id="about"
      className="relative min-h-screen py-28 overflow-hidden bg-gradient-to-b from-black via-slate-950 to-black"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-[360px] w-[360px] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <AppearOnScroll>
        <div className="mx-auto max-w-5xl px-6">

          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
              Developer, designer, and creative technologist passionate about
              building thoughtful digital experiences.
            </p>
          </div>
          <div className="mb-16 rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition-all hover:-translate-y-1">
            <p className="text-center text-lg leading-relaxed text-cyan-300/90">
              I’m a passionate web developer with a strong focus on crafting
              responsive, accessible, and visually engaging interfaces.
              What started as curiosity about how websites work has evolved
              into a deep love for building meaningful digital experiences that
              balance form and function.
            </p>
          </div>
          <div className="mb-20 grid grid-cols-1 gap-10 md:grid-cols-2">
            {[
              {
                title: "My Journey",
                text: `I began my development journey during my master’s degree,
                starting with creative coding and progressing into HTML, CSS,
                and JavaScript. Along the way, Object-Oriented Programming and
                software engineering courses strengthened my problem-solving
                skills. Discovering React unlocked my ability to build scalable
                applications, while my passion for 3D design led me into game
                development and immersive virtual experiences.`,
              },
              {
                title: "My Philosophy",
                text: `Great software isn’t just about code—it’s about people.
                I focus on clarity, usability, and accessibility, aiming to
                build solutions that feel intuitive and purposeful. I value
                clean architecture, thoughtful design, and technology that
                genuinely improves user experiences.`,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:-translate-y-1"
              >
                <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-cyan-400 to-fuchsia-500 opacity-70" />
                <h3 className="mb-4 text-xl font-semibold text-cyan-400">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-cyan-300/90">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { title: "Frontend", skills: frontend },
              { title: "Backend", skills: backend },
              { title: "3D Modeling", skills: modeling3D },
            ].map(({ title, skills }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:-translate-y-1"
              >
                <h3 className="mb-5 text-xl font-semibold text-cyan-400">
                  {title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-cyan-500/15 px-4 py-1 text-xs text-cyan-300 border border-cyan-400/20 transition hover:bg-cyan-500/25 hover:shadow-[0_0_10px_rgba(0,255,255,0.3)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:-translate-y-1">
              <h3 className="mb-5 text-xl font-bold text-cyan-400">
                🎓 Education
              </h3>
              <ul className="space-y-3 text-sm text-cyan-300/90">
                <li>
                  <strong>Masters in Creative Technologies</strong> — Virginia Tech (2023 – 2025)
                </li>
                <li className="text-cyan-300/70">
                <strong className="font-bold text-sm">Relevant Coursework: </strong>
                  Creative Coding, Object Oriented Programming with Java, Software Engineering, Web Applications Development, Mobile Applications Development, Virtual Reality Design, Virtual Environments, 3D Modeling & Animation
                </li>
              </ul>

                  <ul className="space-y-3 text-sm text-cyan-300/90 mt-6">
                <li>
                  <strong>B.S. in Engineering</strong> — University of Ghana (2017 – 2021)
                 
                </li>
                <li className="text-cyan-300/70">
                <strong className=" text-sm">Relevant Coursework: </strong>
                 Algebra, Calculus I, Calculus II, Differential Equations, Basic Electronics, Numerical Methods, Statistics. 
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:-translate-y-1">
              <h3 className="mb-5 text-xl font-bold text-cyan-400">
                💼 Experience
              </h3>

              <div className="space-y-6 text-sm text-cyan-300/90">
                <div>
                  <h4 className="font-semibold">
                    Software Engineer Intern — Open Learning Exchange
                  </h4>
                  <p className="text-xs text-cyan-300/70">
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
                  <p className="text-xs text-cyan-300/70">
                    May 2025 – Aug 2025
                  </p>
                  <p className="mt-2">
                    Built and refined frontend components for a ride-hailing
                    application using React Native, focusing on usability and
                    layout consistency.
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
