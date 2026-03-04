import { AppearOnScroll } from "../AppearOnScroll";

const projects = [
  {
    title: "React Projects",
    description:
      "Built multiple React applications using hooks, Context API, and modern state management while focusing on performance, accessibility, and responsive UI.",
    stack: ["React", "Tailwind CSS", "JavaScript"],
    link: "#",
    accent: "from-cyan-400 to-blue-500",
  },
  // {
  //   title: "Python Projects",
  //   description:
  //     "Developed scalable backend and data-driven applications using Django, Flask, and NumPy for web and analytical solutions.",
  //   stack: ["Python", "Django", "Flask", "NumPy"],
  //   link: "#",
  //   accent: "from-green-400 to-emerald-500",
  // },
  {
    title: "Unity Game Projects",
    description:
      "Created interactive 2D and 3D games in Unity using C#, focusing on gameplay mechanics, physics, animations, and UI systems.",
    stack: ["Unity", "C#", "Game Development"],
    link: "#",
    accent: "from-indigo-500 to-blue-500",
  },
  // {
  //   title: "PostgreSQL Database Projects",
  //   description:
  //     "Designed and optimized relational databases using PostgreSQL, writing efficient queries and managing large datasets.",
  //   stack: ["PostgreSQL", "SQL", "Database Design"],
  //   link: "#",
  //   accent: "from-orange-400 to-amber-500",
  // },
  {
    title: "3D Modeling & Design",
    description:
      "Produced detailed 3D assets and environments using industry-standard tools for games, films, and real-time experiences.",
    stack: ["Blender", "Maya", "Substance Painter"],
    link: "https://sites.google.com/view/emmanuelbaah1/works",
    accent: "from-cyan-500 to-teal-500",
  },
];

export const Project = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden bg-[#1e3a8a]"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute left-1/3 top-1/3 h-[320px] w-[320px] rounded-full bg-indigo-400/15 blur-3xl" />
        <div className="pointer-events-none absolute right-10 top-16 h-24 w-24 rounded-full border-2 border-dashed border-[#1e3a8a]/25" />
      </div>

      <AppearOnScroll>
        <div className="max-w-6xl mx-auto px-6 mt-10 mb-10">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-400 sm:mb-14 sm:text-4xl lg:text-5xl">
            ⚙️Featured Projects
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-slate-700">
            A selected number of projects
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl border border-white/40 bg-white/40 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(30,58,138,0.2)]"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r ${project.accent}`}
                />

                <h3 className="mb-3 text-xl font-semibold text-[#1e3a8a] transition-colors group-hover:text-cyan-700">
                  {project.title}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-slate-700">
                  {project.description}
                </p>

                <div>
                  <h4 className="mb-3 text-xs uppercase tracking-wider text-slate-600">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[#1e3a8a]/20 bg-cyan-500/10 px-3 py-1 text-xs text-[#1e3a8a]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </div>
      </AppearOnScroll>
    </section>
  );
};
