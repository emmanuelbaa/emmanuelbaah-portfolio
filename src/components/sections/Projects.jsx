import { AppearOnScroll } from "../AppearOnScroll";
import { ArrowUpRight, Monitor, Gamepad2, Layers, Cpu } from "lucide-react";

const projects = [
  {
    title: "React Ecosystem",
    icon: <Monitor className="text-cyan-400" size={28} />,
    description:
      "Architecture of high-performance web applications. Leveraged hooks and Context API to create seamless, accessible user interfaces with a focus on atomic design.",
    stack: ["React", "Tailwind CSS", "JavaScript", "Vite"],
    link: "https://emmanuelbaa.github.io/project-public-holidays/",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    title: "Interactive Unity Worlds",
    icon: <Gamepad2 className="text-indigo-400" size={28} />,
    description:
      "Development of immersive 2D/3D environments. Specialized in C# scripting for complex physics, state-driven animations, and optimized game loops.",
    stack: ["Unity", "C#", "Game Design", "Physics"],
    link: "https://play.unity.com/en/user/d9202a55-0064-4e7f-a558-d539419d462b",
    accent: "from-indigo-500 to-blue-500",
  },
  {
    title: "Digital Craft & 3D Design",
    icon: <Layers className="text-teal-400" size={28} />,
    description:
      "Crafting high-fidelity 3D assets. From hard-surface modeling in Maya to PBR texturing in Substance, bridging the gap between art and real-time engines.",
    stack: ["Blender", "Maya", "Substance", "ZBrush"],
    link: "https://sites.google.com/view/emmanuelbaah1/works",
    accent: "from-cyan-500 to-teal-500",
  },
];

export const Project = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden bg-slate-950 py-32 text-slate-100"
    >
      {/* Dynamic Background Atmosphere */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.35)_0%,transparent_55%)] opacity-50" />
        <div className="absolute -right-24 top-24 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute -left-24 bottom-24 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      <AppearOnScroll>
        <div className="mx-auto max-w-6xl px-6">
          {/* Section Header */}
          <div className="mb-24 text-left">
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="text-cyan-400 animate-pulse" size={24} />
              <span className="text-sm font-mono tracking-widest text-cyan-400 uppercase">Portfolio</span>
            </div>
            <h2 className="text-5xl font-black text-white md:text-7xl">
              Selected <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Works.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
              Exploring the intersection of code, interactivity, and visual design through 
              rigorous engineering and creative experimentation.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-8 transition-all duration-500 hover:-translate-y-4 hover:border-white/20 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]"
              >
                {/* Visual Glow Layer */}
                <div className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${project.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40`} />

                <div>
                  <div className="mb-8 flex items-start justify-between">
                    <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:ring-white/20">
                      {project.icon}
                    </div>
                    <ArrowUpRight className="text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan-400" size={24} />
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-white transition-colors group-hover:text-cyan-300">
                    {project.title}
                  </h3>

                  <p className="mb-8 text-sm leading-relaxed text-slate-300">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="mb-2 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg bg-slate-800/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-300 ring-1 ring-inset ring-white/5 transition-colors group-hover:bg-white/10 group-hover:text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subtle Bottom Accent */}
                <div className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r ${project.accent} transition-all duration-500 group-hover:w-full`} />
              </a>
            ))}
          </div>
        </div>
      </AppearOnScroll>
    </section>
  );
};
