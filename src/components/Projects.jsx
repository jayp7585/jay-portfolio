import { useRef, useState } from "react";
import { projects } from "../portfolio";

export default function Projects() {
  const { data, title, description } = projects;
  return (
    <section id="projects" className="relative py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-5xl md:text-6xl font-black font-heading tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
          {title}
        </h2>
        <p className="text-xl text-white/50 max-w-2xl">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {data.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width - 0.5) * 20;
    const yPct = (mouseY / height - 0.5) * -20;

    setTransform(`perspective(1000px) rotateX(${yPct}deg) rotateY(${xPct}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: "transform 0.1s ease-out",
        transformStyle: "preserve-3d"
      }}
      className="group relative rounded-[2.5rem] bg-[#0f0a1f] overflow-hidden border border-white/5 hover:border-purple-500/20 hover:shadow-[0_20px_60px_rgba(168,85,247,0.15)] transition-shadow duration-500"
    >
      <div
        style={{ transform: "translateZ(50px)" }}
        className="relative h-full flex flex-col"
      >
        {/* Image Container with Scale Effect */}
        <div className="relative h-80 overflow-hidden transform-gpu">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a1f] via-transparent to-transparent z-10 opacity-60" />
          <img
            src={`./projects/${project.image}`}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Floating Link Button */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-20 hover:bg-white hover:text-black"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Content Area */}
        <div className="p-8 md:p-10 relative z-20 -mt-10 bg-gradient-to-t from-[#0f0a1f] to-transparent">
          <div className="inline-flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-bold rounded-lg bg-white/5 text-purple-200 border border-white/5 uppercase tracking-wider"
              >
                {tech}
              </span>
            ))}
          </div>

          <h3 className="text-3xl font-bold font-heading mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-300 transition-colors">
            {project.title}
          </h3>

          <p className="text-white/60 leading-relaxed text-lg mb-6 line-clamp-3 group-hover:text-white/80 transition-colors">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}
