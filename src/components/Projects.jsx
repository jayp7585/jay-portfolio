import projects from "../data/projects.json"
import { useReveal } from "../hooks/useReveal"

export default function Projects() {
  const reveals = projects.map(() => useReveal())

  return (
    <section
      id="projects"
      className="relative py-32 px-4 max-w-7xl mx-auto"
    >
      <h2 className="text-3xl font-semibold text-center mb-28">
        Featured Projects
      </h2>

      <div className="flex flex-col gap-40">
        {projects.map((project, index) => {
          const reverse = index % 2 !== 0
          const { ref, visible } = reveals[index]

          return (
            <div
              key={index}
              ref={ref}
              className={`
                relative flex flex-col md:flex-row items-center gap-12
                ${reverse ? "md:flex-row-reverse" : ""}
                transition-all duration-700 ease-out
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}
              `}
            >
              {/* IMAGE */}
              <div className="relative w-full md:w-2/3 h-[260px] sm:h-[340px] md:h-[420px]">
                
                {/* Glow */}
                <div className="absolute inset-0 bg-purple-600/30 blur-3xl rounded-3xl" />

                {/* Screenshot (FROM PUBLIC FOLDER) */}
                <img
                  src={`/jay-portfolio/projects/${project.image}`}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full
                  object-cover rounded-3xl shadow-2xl"
                />
              </div>

              {/* FLOATING CARD */}
              <div
                className="
                  relative md:absolute z-10
                  md:top-1/2 md:-translate-y-1/2
                  w-full md:w-[420px]
                  bg-white/5 backdrop-blur-xl
                  border border-white/10
                  rounded-3xl p-8
                  shadow-[0_30px_80px_-20px_rgba(168,85,247,0.45)]
                "
                style={{
                  left: reverse ? "auto" : "55%",
                  right: reverse ? "55%" : "auto"
                }}
              >
                <h3 className="text-xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-white/80 mb-5 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full
                      bg-purple-600/20 border border-purple-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-purple-400 hover:text-purple-300 transition"
                >
                  View Project →
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
