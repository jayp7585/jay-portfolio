import projects from "../data/projects.json"

// ✅ IMPORT IMAGES DIRECTLY (IMPORTANT)
import project1 from "../assets/projects/project1.png"
import project2 from "../assets/projects/project2.png"

const images = [project1, project2]

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 px-6 max-w-7xl mx-auto"
    >
      <h2 className="text-3xl font-semibold text-center mb-28">
        Featured Projects
      </h2>

      <div className="flex flex-col gap-36">
        {projects.map((project, index) => {
          const reverse = index % 2 !== 0

          return (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center gap-14
              ${reverse ? "md:flex-row-reverse" : ""}`}
            >
              {/* IMAGE */}
              <div className="relative w-full md:w-2/3 h-[260px] sm:h-[340px] md:h-[420px]">
                {/* Glow */}
                <div className="absolute inset-0 bg-purple-600/30 blur-3xl rounded-3xl"></div>

                {/* Image */}
                <img
                  src={images[index]}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full
                  object-cover rounded-3xl shadow-2xl"
                />
              </div>

              {/* FLOATING CARD */}
              <div
                className="relative md:absolute z-10
                md:top-1/2 md:-translate-y-1/2
                md:w-[420px]
                bg-white/5 backdrop-blur-xl
                border border-white/10
                rounded-3xl p-8
                shadow-[0_30px_80px_-20px_rgba(168,85,247,0.45)]"
                style={{
                  left: reverse ? "auto" : "55%",
                  right: reverse ? "55%" : "auto"
                }}
              >
                <h3 className="text-xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-white/80 mb-6 leading-relaxed">
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
                  className="inline-block text-purple-400
                  hover:text-purple-300 transition"
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
