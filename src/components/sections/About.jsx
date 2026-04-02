import { AppearOnScroll } from "../AppearOnScroll";
import { GraduationCap, Briefcase, Code2, Globe, Box, Gamepad2 } from "lucide-react";

export const About = () => {
  const skillGroups = [
    {
      title: "Frontend",
      icon: <Globe className="text-cyan-400" size={24} />,
      skills: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      ],
    },
    {
      title: "Backend",
      icon: <Code2 className="text-indigo-400" size={24} />,
      skills: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Django", icon: "https://cdn.simpleicons.org/django/092E20" },
      ],
    },
    {
      title: "3D & Creative",
      icon: <Box className="text-pink-400" size={24} />,
      skills: [
        { name: "Blender", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" },
        { name: "Maya", icon: "https://cdn.simpleicons.org/autodeskmaya/37A5CC" },
        // { name: "Substance Painter", icon: "https://cdn.simpleicons.org/adobesubstance3d/999999" },
      ],
    },
    {
      title: "Game Dev",
      icon: <Gamepad2 className="text-emerald-400" size={24} />,
      skills: [
        { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
        { name: "Unity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" },
      ],
    },
  ];

  return (
    <section id="about" className="relative min-h-screen overflow-hidden bg-slate-950 py-28 text-slate-100">
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.15),transparent_60%)]" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)", backgroundSize: "120px 120px" }} />
      </div>

      <AppearOnScroll>
        <div className="mx-auto max-w-6xl px-6">
          {/* Header */}
          <div className="mb-20">
            <h2 className="text-4xl font-black text-white md:text-6xl">
              The <span className="text-cyan-400">Toolkit.</span>
            </h2>
            <div className="mt-4 h-2 w-20 rounded-full bg-cyan-500/80 shadow-[0_10px_30px_-15px_rgba(6,182,212,0.7)]" />
          </div>

          {/* Skills Grid */}
          <div className="mb-32 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-6 transition-all hover:border-cyan-400/60 hover:bg-slate-900 hover:shadow-[0_30px_60px_-20px_rgba(2,6,23,0.9)]"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-2xl bg-slate-800/40 p-3 text-slate-100 shadow-inner">
                    {group.icon}
                  </div>
                  <h3 className="font-bold text-white">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center gap-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900/70 p-2.5 transition-transform group-hover:scale-110">
                        <img src={skill.icon} alt={skill.name} className="h-full w-full object-contain" />
                      </div>
                      <span className="text-[10px] font-medium text-slate-400">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education & Experience Timeline */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Education */}
            <div className="space-y-10">
              <div className="flex items-center gap-4">
                <GraduationCap className="text-cyan-400" size={32} />
                <h3 className="text-3xl font-bold text-white">Education</h3>
              </div>

              <div className="relative border-l-2 border-slate-800 ml-4 pl-8 space-y-12">
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-cyan-500 bg-slate-950" />
                  <h4 className="text-xl font-bold text-white">M.S. Creative Technologies</h4>
                  <p className="text-sm font-semibold text-cyan-400">Virginia Tech • 2023 — 2025</p>
                  <p className="mt-3 text-slate-300 leading-relaxed">
                    Focus on Creative Coding, VR/AR Environments, and Software Engineering principles.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-slate-700 bg-slate-950" />
                  <h4 className="text-xl font-bold text-white">B.S. Agricultural Engineering</h4>
                  <p className="text-sm font-semibold text-slate-400">University of Ghana • 2017 — 2021</p>
                  <p className="mt-3 text-slate-300 leading-relaxed">
                    Foundational engineering involving Electronics, Calculus, and Numerical Methods.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-10">
              <div className="flex items-center gap-4">
                <Briefcase className="text-indigo-400" size={32} />
                <h3 className="text-3xl font-bold text-white">Experience</h3>
              </div>

              <div className="relative border-l-2 border-slate-800 ml-4 pl-8 space-y-12">
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-indigo-500 bg-slate-950" />
                  <h4 className="text-xl font-bold text-white">Software Engineer Intern</h4>
                  <p className="text-sm font-semibold text-indigo-400">Open Learning Exchange • 2025 — 2026</p>
                  <p className="mt-3 text-slate-300 leading-relaxed">
                    Spearheaded UI features for the Planet web app, improving certification workflows.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-slate-700 bg-slate-950" />
                  <h4 className="text-xl font-bold text-white">Frontend Engineer Intern</h4>
                  <p className="text-sm font-semibold text-slate-400">ABE Scot Enterprises • 2025</p>
                  <p className="mt-3 text-slate-300 leading-relaxed">
                    Developed React Native components for ride-hailing applications.
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
