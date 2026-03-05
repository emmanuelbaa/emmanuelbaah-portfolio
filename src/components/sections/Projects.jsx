import { AppearOnScroll } from "../AppearOnScroll";
import { ArrowUpRight } from "lucide-react";

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
    title: "Unity Game Projects",
    description:
      "Created interactive 2D and 3D games in Unity using C#, focusing on gameplay mechanics, physics, animations, and UI systems.",
    stack: ["Unity", "C#", "Game Development"],
    link: "#",
    accent: "from-indigo-500 to-blue-500",
  },
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
      className="relative min-h-screen overflow-hidden bg-[#1e3a8a] py-24"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute left-1/3 top-1/3 h-[320px] w-[320px] rounded-full bg-indigo-400/15 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-24 w-24 rounded-full border-2 border-dashed border-cyan-300/30" />
      </div>

      <AppearOnScroll>
        <div className="max-w-6xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white sm:text-5xl">
              Featured Projects
            </h2>

            <div className="mx-auto mt-3 h-1 w-24 rounded bg-gradient-to-r from-cyan-400 to-blue-500" />

            <p className="mx-auto mt-6 max-w-2xl text-slate-300">
              A selection of projects highlighting my work in web development,
              game development, and 3D design.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-white/20
                bg-white/10 p-7 shadow-lg backdrop-blur-md
                transition-all duration-300 hover:-translate-y-3
                hover:shadow-[0_25px_50px_rgba(0,0,0,0.35)]"
              >
                {/* Accent line */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.accent}`}
                />

                {/* Glow on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-gradient-to-br ${project.accent}`}
                />

                {/* Content */}
                <div className="relative z-10">

                  <h3 className="mb-3 text-xl font-semibold text-white group-hover:text-cyan-300">
                    {project.title}
                  </h3>

                  <p className="mb-6 text-sm leading-relaxed text-slate-300">
                    {project.description}
                  </p>

                  {/* Stack */}
                  <div className="mb-6">
                    <h4 className="mb-3 text-xs uppercase tracking-wider text-slate-400">
                      Tech Stack
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/20
                          bg-white/10 px-3 py-1 text-xs text-slate-200
                          backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View project */}
                  <div className="flex items-center text-sm font-medium text-cyan-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View Project
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </AppearOnScroll>
    </section>
  );
};