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
  {
    title: "Python Projects",
    description:
      "Developed scalable backend and data-driven applications using Django, Flask, and NumPy for web and analytical solutions.",
    stack: ["Python", "Django", "Flask", "NumPy"],
    link: "#",
    accent: "from-green-400 to-emerald-500",
  },
  {
    title: "Unity Game Projects",
    description:
      "Created interactive 2D and 3D games in Unity using C#, focusing on gameplay mechanics, physics, animations, and UI systems.",
    stack: ["Unity", "C#", "Game Development"],
    link: "#",
    accent: "from-purple-400 to-fuchsia-500",
  },
  {
    title: "PostgreSQL Database Projects",
    description:
      "Designed and optimized relational databases using PostgreSQL, writing efficient queries and managing large datasets.",
    stack: ["PostgreSQL", "SQL", "Database Design"],
    link: "#",
    accent: "from-orange-400 to-amber-500",
  },
  {
    title: "3D Modeling & Design",
    description:
      "Produced detailed 3D assets and environments using industry-standard tools for games, films, and real-time experiences.",
    stack: ["Blender", "Maya", "Substance Painter"],
    link: "https://sites.google.com/view/emmanuelbaah1/works",
    accent: "from-pink-400 to-rose-500",
  },
];

export const Project = () => {
  return (
    <section
      id="projects"
      className="min-h-screen py-24 bg-gradient-to-b from-black via-slate-950 to-black"
    >
      <AppearOnScroll>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl
                       font-bold mb-10 sm:mb-14 text-center
                       bg-gradient-to-r from-cyan-400 to-fuchsia-500
                       bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            A curated selection of projects showcasing my skills across
            frontend development, backend systems, game development, and 3D
            design.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,255,255,0.25)]"
              >
       
                <div
                  className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r ${project.accent}`}
                />

                <h3 className="text-xl font-semibold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div>
                  <h4 className="text-xs uppercase tracking-wider text-cyan-300 mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-cyan-400/5 to-transparent" />
              </a>
            ))}
          </div>
        </div>
      </AppearOnScroll>
    </section>
  );
};
